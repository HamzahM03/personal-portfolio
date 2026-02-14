"use client";

import Section from "./Section";
import { Mail } from "lucide-react";
import * as React from "react";
import { useActionState, useEffect, useState } from "react";
import { submitContactForm, type FormState } from "@/app/actions/contact";

const NAME_MAX = 50;
const EMAIL_MAX = 100;
const MESSAGE_MAX = 1000;

const COOLDOWN_SECONDS = 600;
const COOLDOWN_KEY = "contact_cooldown_until";

const initialState: FormState = { success: false };

export default function Contact() {
  const [cooldownUntil, setCooldownUntil] = useState<number>(0);
  const [cooldownMsg, setCooldownMsg] = useState("");
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  // Load cooldown on mount
  useEffect(() => {
    const saved = Number(localStorage.getItem(COOLDOWN_KEY) ?? "0");
    setCooldownUntil(saved);
  }, []);

  const isCoolingDown = Date.now() < cooldownUntil;
  const disableSubmit = isPending || isCoolingDown;

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    if (isCoolingDown) {
      e.preventDefault();
      setCooldownMsg("Please wait a few minutes before sending another message.");
      return;
    }
    setCooldownMsg("");
  }

  // Start cooldown on success + reset form
  useEffect(() => {
    if (!state.success) return;

    const form = document.getElementById("contact-form") as HTMLFormElement | null;
    form?.reset();

    const until = Date.now() + COOLDOWN_SECONDS * 1000;
    localStorage.setItem(COOLDOWN_KEY, String(until));
    setCooldownUntil(until);
  }, [state.success]);

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

        <form
          id="contact-form"
          className="space-y-6"
          action={formAction}
          onSubmit={handleSubmit}
          noValidate
        >
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
                disabled={isPending}
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
                maxLength={EMAIL_MAX}
                disabled={isPending}
                className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none transition-colors bg-white"
                placeholder="your.email@example.com"
                inputMode="email"
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
              maxLength={MESSAGE_MAX}
              disabled={isPending}
              className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none transition-colors resize-vertical bg-white"
              placeholder="Tell me about your project or just say hello..."
            />
          </div>

          <div className="text-center pt-2">
            <button
              type="submit"
              disabled={disableSubmit}
              className="bg-black text-white px-8 py-4 hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed transition-colors inline-flex items-center gap-2 text-sm font-medium rounded"
            >
              <Mail size={18} />
              {isPending ? "Sending..." : isCoolingDown ? "Please wait a few minutes..." : "Send Message"}
            </button>

            {state.success && <p className="mt-3 text-green-600 text-sm">{state.message ?? "Sent!"}</p>}
            {!state.success && state.error && <p className="mt-3 text-red-600 text-sm">{state.error}</p>}

            {!state.success && isCoolingDown && !isPending && (
              <p className="mt-3 text-gray-600 text-sm">Please wait a few minutes before sending another message.</p>
            )}

            {cooldownMsg && <p className="mt-3 text-red-600 text-sm">{cooldownMsg}</p>}
          </div>
        </form>
      </div>
    </Section>
  );
}
