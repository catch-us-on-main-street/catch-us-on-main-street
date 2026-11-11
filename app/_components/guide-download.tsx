"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { fieldClass, labelClass, submitNetlifyForm } from "./netlify-form";
import { GUIDE_PDF, INQUIRY_HREF } from "./site-info";

// Free "How We Work Together" guide in exchange for a name and email. The download appears right after
// submitting; Netlify emails the lead to the inbox (set the notification under Forms in Netlify).
export function GuideDownload() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setStatus((await submitNetlifyForm(e.currentTarget)) ? "done" : "error");
  }

  if (status === "done") {
    return (
      <div role="status" className="mx-auto max-w-lg text-center">
        <p className="font-display text-2xl text-espresso italic">Thank you. Your guide is ready.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={GUIDE_PDF}
            download
            className="bg-teal px-8 py-3.5 text-xs font-light tracking-widest text-white uppercase transition-colors hover:bg-goldenrod"
          >
            Download the Guide
          </a>
          <Link
            href={INQUIRY_HREF}
            className="border border-espresso/30 px-8 py-3.5 text-xs font-light tracking-widest text-espresso uppercase transition-colors hover:border-goldenrod hover:bg-goldenrod hover:text-cream"
          >
            Start Your Trip
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form name="guide-request" onSubmit={onSubmit} className="mx-auto w-full max-w-2xl text-left">
      <input type="hidden" name="form-name" value="guide-request" />
      <p hidden>
        <label>
          Leave this empty <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="grid gap-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
        <div>
          <label htmlFor="guide-name" className={labelClass}>
            First name
          </label>
          <input id="guide-name" name="name" required autoComplete="given-name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="guide-email" className={labelClass}>
            Email
          </label>
          <input
            id="guide-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-teal px-8 py-3.5 text-xs font-light tracking-widest whitespace-nowrap text-white uppercase transition-colors hover:bg-goldenrod focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-goldenrod disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Get the Guide"}
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className="mt-4 text-center text-sm font-light text-espresso/70">
          Something went wrong. Please try again in a moment.
        </p>
      )}
    </form>
  );
}
