"use server";

import { Resend } from "resend";
import * as z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required").max(50, "Name is too long"),
  email: z.email("Enter a valid email").max(100, "Email is too long"),
  message: z.string().min(1, "Message is required").max(1000, "Message is too long"),
});

export type FormState = {
  success: boolean;
  message?: string;
  error?: string;
};

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const raw = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const parsed = ContactSchema.safeParse(raw);
    if (!parsed.success) {
      // usually they just return first error
      const first = parsed.error.issues[0]?.message ?? "Invalid form data";
      return { success: false, error: first };
    }

    const { name, email, message } = parsed.data;

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>", // replace later with verified sender
      to: [process.env.CONTACT_TO ?? "your@email.com"],
      subject: `New message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      return { success: false, error: "Failed to send email. Try again." };
    }

    return { success: true, message: "Message sent! I’ll get back to you soon." };
  } catch {
    return { success: false, error: "Server error. Please try again." };
  }
}
