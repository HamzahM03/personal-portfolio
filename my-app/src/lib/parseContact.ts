import { ContactSchema } from "./contactSchema";

export function parseContact(input: {
  name: unknown;
  email: unknown;
  message: unknown;
}) {
  const cleaned = {
    name: String(input.name ?? "").trim(),
    email: String(input.email ?? "").trim(),
    message: String(input.message ?? "").trim(),
  };

  return ContactSchema.safeParse(cleaned);
}
