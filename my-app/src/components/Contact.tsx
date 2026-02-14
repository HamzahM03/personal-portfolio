"use client";

import Section from "./Section";
import { Mail } from "lucide-react";
import * as React from "react";
import { useActionState, useEffect } from "react";
import { submitContactForm, type FormState } from "@/app/actions/contact"; // adjust path if needed

const NAME_MAX = 50;
const EMAIL_MAX = 100;
const MESSAGE_MAX = 1000;

const initialState: FormState = { success: false };

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  useEffect(() => {
    if (state.success) {
      const form = document.getElementById("contact-form") as HTMLFormElement | null;
      form?.reset();
    }
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

        <form id="contact-form" className="space-y-6" action={formAction} noValidate>
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
              disabled={isPending}
              className="bg-black text-white px-8 py-4 hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed transition-colors inline-flex items-center gap-2 text-sm font-medium rounded"
            >
              <Mail size={18} />
              {isPending ? "Sending..." : "Send Message"}
            </button>

            {state.success && <p className="mt-3 text-green-600 text-sm">{state.message ?? "Sent!"}</p>}
            {!state.success && state.error && <p className="mt-3 text-red-600 text-sm">{state.error}</p>}
          </div>
        </form>
      </div>
    </Section>
  );
}
