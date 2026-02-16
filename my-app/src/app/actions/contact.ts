"use server";

import { Resend } from "resend";
import { parseContact } from "@/lib/parseContact";


const resend = new Resend(process.env.RESEND_API_KEY);

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
    // Parse + trim + validate
    const parsed = parseContact({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    if (!parsed.success) {
      const first = parsed.error.issues[0]?.message ?? "Invalid form data";
      return { success: false, error: first };
    }

    const { name, email, message } = parsed.data;

    // Send email
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>",
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
