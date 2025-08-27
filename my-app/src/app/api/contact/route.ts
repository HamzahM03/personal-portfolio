export const runtime = "nodejs";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(5000),
  website: z.string().optional(), // honeypot
  // turnstileToken: z.string().optional(), // if you add Turnstile later
});

type ContactPayload = z.infer<typeof ContactSchema>;

function escapeHtml(str = ""): string {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request): Promise<Response> {
  try {
    if ((req.headers.get("content-type") || "").includes("application/json") === false) {
      return Response.json({ error: "Invalid content type" }, { status: 400 });
    }

    const body = (await req.json()) as unknown;
    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      return Response.json({ error: "Validation failed", details: parsed.error.flatten() }, { status: 400 });
    }

    const { name, email, message, website } = parsed.data as ContactPayload;

    // Honeypot: bots often fill this hidden field
    if (website) {
      return Response.json({ success: true }, { status: 200 });
    }

    const to = process.env.CONTACT_TO;
    const from = process.env.CONTACT_FROM;
    if (!to || !from) {
      return Response.json({ error: "Email not configured" }, { status: 500 });
    }

    const subject = `New portfolio message from ${name}`;
    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; line-height:1.6;">
        <h2 style="margin:0 0 12px">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <div style="white-space:pre-wrap; border-left:4px solid #eee; padding-left:12px;">${escapeHtml(message)}</div>
      </div>
    `;
    const text = `New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}
`;

    const { error } = await resend.emails.send({
        from,
        to,
        subject,
        html,
        text,
        replyTo: email,    // ✅ correct
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
