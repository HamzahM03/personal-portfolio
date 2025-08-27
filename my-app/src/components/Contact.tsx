"use client";

import Section from "./Section";
import { Mail } from "lucide-react";
import { useState } from "react";

type SubmitState = {
  loading: boolean;
  ok: boolean;
  error: string;
};

const NAME_MAX = 100;
const EMAIL_MAX = 254;
const MESSAGE_MAX = 5000;

export default function Contact() {
  const [status, setStatus] = useState<SubmitState>({ loading: false, ok: false, error: "" });

  // controlled values so we can show counters
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ loading: true, ok: false, error: "" });

    try {
      const payload = { name, email, message, website: "" }; // keep honeypot empty

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send");

      setStatus({ loading: false, ok: true, error: "" });
      // reset values + counters
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      setStatus({ loading: false, ok: false, error: msg });
    }
  }

  const nearLimit = (len: number, max: number) => max - len <= 20; // highlight when close

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
                maxLength={NAME_MAX}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none transition-colors bg-white"
                placeholder="Your full name"
                aria-describedby="name-count"
              />
              <div
                id="name-count"
                className={`mt-1 text-xs ${nearLimit(name.length, NAME_MAX) ? "text-amber-600" : "text-gray-500"}`}
              >
                {name.length}/{NAME_MAX}
              </div>
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
                maxLength={EMAIL_MAX}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none transition-colors bg-white"
                placeholder="your.email@example.com"
                aria-describedby="email-count"
              />
              <div
                id="email-count"
                className={`mt-1 text-xs ${nearLimit(email.length, EMAIL_MAX) ? "text-amber-600" : "text-gray-500"}`}
              >
                {email.length}/{EMAIL_MAX}
              </div>
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
              maxLength={MESSAGE_MAX}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none transition-colors resize-vertical bg-white"
              placeholder="Tell me about your project or just say hello..."
              aria-describedby="message-count"
            />
            <div
              id="message-count"
              className={`mt-1 text-xs ${nearLimit(message.length, MESSAGE_MAX) ? "text-amber-600" : "text-gray-500"}`}
            >
              {message.length}/{MESSAGE_MAX}
            </div>
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
