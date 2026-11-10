"use client";

import { useState, type FormEvent } from "react";

// Posts to Netlify Forms via the static form in public/__forms.html; signups appear under Forms in Netlify.
// Swap for Flodesk or Mailchimp once a newsletter tool is chosen.
export function TravelNotesSignup() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const body = new URLSearchParams(new FormData(e.currentTarget) as unknown as Record<string, string>);
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p role="status" className="font-display text-xl text-espresso italic">
        Thank you. Your first Travel Notes are on the way.
      </p>
    );
  }

  return (
    <form name="travel-notes" onSubmit={onSubmit} className="mx-auto w-full max-w-lg">
      <input type="hidden" name="form-name" value="travel-notes" />
      {/* Honeypot: hidden from people, filled in by bots. */}
      <p hidden>
        <label>
          Leave this empty <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="travel-notes-email" className="sr-only">
          Email address
        </label>
        <input
          id="travel-notes-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Your email address"
          className="min-w-0 flex-1 border border-espresso/20 bg-white/70 px-5 py-3.5 font-light text-espresso placeholder:text-espresso/45 focus:border-teal focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-teal px-8 py-3.5 text-xs font-light tracking-widest text-white uppercase transition-colors hover:bg-[#0d3f4c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-goldenrod disabled:opacity-60"
        >
          {status === "sending" ? "Joining…" : "Join the List"}
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className="mt-4 text-sm font-light text-espresso/70">
          Something went wrong. Please try again in a moment.
        </p>
      )}
    </form>
  );
}
