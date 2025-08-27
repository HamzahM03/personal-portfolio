"use client";

import Section from "./Section";
import { Mail } from "lucide-react";
import { useState } from "react";

type SubmitState = {
  loading: boolean;
  ok: boolean;
  error: string;
};

export default function Contact() {
  const [status, setStatus] = useState<SubmitState>({ loading: false, ok: false, error: "" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ loading: true, ok: false, error: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send");
      setStatus({ loading: false, ok: true, error: "" });
      form.reset();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      setStatus({ loading: false, ok: false, error: msg });
    }
  }

  return (
    <Section id="contact" className="py-32 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-tight">Let&apos;s Work Together</h2>
          <p className="text-gray-600 leading-relaxed">
            I&apos;m always interested in new opportunities and interesting projects. Let&apos;s connect and see how we can
            create something amazing together.
          </p>
        </div>

        <form className="space-y-6" onSubmit={onSubmit}>
          {/* Honeypot (hidden) */}
          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none transition-colors bg-white"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none transition-colors bg-white"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none transition-colors resize-vertical bg-white"
              placeholder="Tell me about your project or just say hello..."
            />
          </div>

          <div className="text-center pt-2">
            <button
              type="submit"
              disabled={status.loading}
              className="bg-black text-white px-8 py-4 hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed transition-colors inline-flex items-center gap-2 text-sm font-medium rounded"
            >
              <Mail size={18} />
              {status.loading ? "Sending..." : "Send Message"}
            </button>
            {status.ok && <p className="mt-3 text-green-600 text-sm">Message sent! I’ll get back to you soon.</p>}
            {status.error && <p className="mt-3 text-red-600 text-sm">{status.error}</p>}
          </div>
        </form>
      </div>
    </Section>
  );
}
