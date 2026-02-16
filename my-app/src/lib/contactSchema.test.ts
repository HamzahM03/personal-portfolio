import { describe, it, expect } from "vitest";
import { parseContact } from "./parseContact";

describe("contact form input validation", () => {
  it("rejects empty name", () => {
    const res = parseContact({ name: "", email: "a@b.com", message: "hi" });
    expect(res.success).toBe(false);
  });

  it("rejects invalid email", () => {
    const res = parseContact({ name: "Hamzah", email: "not-an-email", message: "hi" });
    expect(res.success).toBe(false);
  });

  it("trims and accepts valid input", () => {
    const res = parseContact({
      name: "  Hamzah  ",
      email: "  hamzah@example.com ",
      message: "  hello  ",
    });

    expect(res.success).toBe(true);
    if (res.success) {
      expect(res.data.name).toBe("Hamzah");
      expect(res.data.email).toBe("hamzah@example.com");
      expect(res.data.message).toBe("hello");
    }
  });

  it("rejects message > 1000 chars", () => {
    const res = parseContact({
      name: "Hamzah",
      email: "hamzah@example.com",
      message: "a".repeat(1001),
    });
    expect(res.success).toBe(false);
  });
});
