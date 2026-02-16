import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(50, "Name is too long"),
  email: z.email("Enter a valid email").max(100, "Email is too long"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message is too long"),
});

export type ContactInput = z.infer<typeof ContactSchema>;
