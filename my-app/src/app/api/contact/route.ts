export const runtime = "nodejs";

import { Resend } from "resend";
import { z } from "zod";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// ---------- ENV ----------
const resend = new Resend(process.env.RESEND_API_KEY);
const redis = Redis.fromEnv(); // uses UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN
const isDev = process.env.NODE_ENV !== "production";

// ---------- VALIDATION ----------
const ContactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().max(100),
  message: z.string().min(10).max(1000),
  website: z.string().optional(),        // honeypot
  turnstileToken: z.string().min(5),     // from client
});
type ContactPayload = z.infer<typeof ContactSchema>;

// ---------- RATE LIMITS ----------
const burstPerIp = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(isDev ? 10 : 3, isDev ? "10 s" : "1 m"), // 3/min IP (dev: 10/10s)
  analytics: true,
});
const dailyPerIp = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(isDev ? 1000 : 20, "24 h"), // 20/day IP
  analytics: true,
});
const dailyPerEmail = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(isDev ? 1000 : 3, "24 h"), // 3/day email
  analytics: true,
});
const oncePerToken = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(1, "10 m"), // 1 send per Turnstile token
  analytics: true,
});
const globalDaily = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(isDev ? 100000 : 500, "24 h"), // global 500/day
  analytics: true,
});

// ---------- UTILS ----------
function escapeHtml(str = ""): string {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function getClientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

// ---------- HANDLER ----------
export async function POST(req: Request): Promise<Response> {
  try {
    // Basic content-type guard
    if (!(req.headers.get("content-type") || "").includes("application/json")) {
      return Response.json({ error: "Invalid content type" }, { status: 400 });
    }

    const body = (await req.json()) as unknown;
    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      return Response.json({ error: "Validation failed", details: parsed.error.flatten() }, { status: 400 });
    }

    const { name, email, message, website, turnstileToken } = parsed.data as ContactPayload;

    // Honeypot (bots fill hidden fields)
    if (website) return Response.json({ success: true }, { status: 200 });

    // Identify client
    const ip = getClientIp(req);
    const emailKey = email.toLowerCase();

    // ---- RATE LIMITS (order matters) ----
    // 1) Once per Turnstile token
    if (!(await oncePerToken.limit(`ct:token:${turnstileToken}`)).success) {
      return Response.json({ error: "Please re-verify and try again." }, { status: 429 });
    }

    // 2) Short burst per IP
    if (!(await burstPerIp.limit(`ct:burst:${ip}`)).success) {
      return Response.json({ error: "Too many attempts. Please slow down." }, { status: 429 });
    }

    // 3) Daily per IP
    if (!(await dailyPerIp.limit(`ct:ip:${ip}`)).success) {
      return Response.json({ error: "Daily limit reached for your network. Try again tomorrow." }, { status: 429 });
    }

    // 4) Daily per email
    if (!(await dailyPerEmail.limit(`ct:email:${emailKey}`)).success) {
      return Response.json({ error: "You’ve reached today’s limit for this email." }, { status: 429 });
    }

    // 5) Global daily cap
    if (!(await globalDaily.limit(`ct:global`)).success) {
      return Response.json({ error: "The service is busy. Please try again later." }, { status: 429 });
    }

    // ---- VERIFY TURNSTILE ----
    if (!isDev) {
      const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
          remoteip: ip !== "unknown" ? ip : undefined,
        }),
        cache: "no-store",
      }).then((r) => r.json() as Promise<{ success: boolean; ["error-codes"]?: string[] }>);
      if (!verify.success) {
        console.error("Turnstile verify failed:", verify["error-codes"]);
        return Response.json({ error: "Verification failed. Please try again." }, { status: 400 });
      }
    }
    // (In dev, use Turnstile test keys; skipping verification here keeps local DX smooth.)

    // ---- CONFIG ----
    const to = process.env.CONTACT_TO;
    const from = process.env.CONTACT_FROM; // e.g. "Tech Marie <onboarding@resend.dev>" until domain verified
    if (!to || !from) return Response.json({ error: "Email not configured" }, { status: 500 });

    // ---- EMAIL CONTENT ----
    const subject = `New portfolio message from ${name}`;
    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; line-height:1.6;">
        <h2 style="margin:0 0 12px">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <div style="white-space:pre-wrap; border-left:4px solid #eee; padding-left:12px;">
          ${escapeHtml(message)}
        </div>
      </div>
    `;
    const text = `New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}
`;

    // ---- SEND VIA RESEND ----
    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
      text,
      replyTo: email, // so replying goes to the sender
      headers: { "X-Contact-Source": "portfolio" },
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Failed to send" }, { status: 500 });
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
