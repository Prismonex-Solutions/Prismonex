"use client";

import { useState } from "react";
import { company } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

// Web3Forms access key — get a free one (no account) by entering your email at
// https://web3forms.com, then set it in .env.local:
//   NEXT_PUBLIC_WEB3FORMS_KEY=your-access-key
// With no key set, the form falls back to opening a prefilled email so it still
// works in development.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
const ENDPOINT = "https://api.web3forms.com/submit";

const field =
  "w-full rounded-lg border border-border bg-transparent px-4 py-3 text-sm transition-colors focus:border-brand focus-visible:outline-2 focus-visible:outline-brand";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // No key configured yet - fall back to a prefilled email.
    if (!ACCESS_KEY) {
      const data = new FormData(form);
      const subject = encodeURIComponent(`Inquiry from ${data.get("name")}`);
      const body = encodeURIComponent(
        `${data.get("message")}\n\nFrom: ${data.get("name")} <${data.get("email")}>`,
      );
      window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const result = await res.json();
      if (!res.ok || !result.success) {
        throw new Error(result.message || `Request failed: ${res.status}`);
      }
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border p-8 text-center">
        <h2 className="text-xl font-semibold">Thanks - message received.</h2>
        <p className="mt-2 text-muted">We&apos;ll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Web3Forms control fields */}
      <input type="hidden" name="access_key" value={ACCESS_KEY ?? ""} />
      <input type="hidden" name="subject" value="New inquiry from the Prismonex website" />
      <input type="hidden" name="from_name" value="Prismonex website" />
      {/* Honeypot — bots fill this; humans never see it */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Name</span>
          <input name="name" required className={field} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Email</span>
          <input
            name="email"
            type="email"
            required
            className={field}
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-sm font-medium">Company (optional)</span>
        <input name="company" className={field} placeholder="Company name" />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className={field}
          placeholder="Tell us what you're building..."
        />
      </label>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong. Please email us directly at {company.email}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-brand px-6 py-3 font-medium text-white transition-colors hover:bg-brand-ink disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
