"use client";

import { useState, type FormEvent } from "react";
import { fieldClass, labelClass, submitNetlifyForm } from "./netlify-form";
import { GUIDE_PDF, tiers } from "./site-info";

const tripTypes = [
  "Family vacation",
  "Disney or theme parks",
  "Cruise",
  "All-inclusive or luxury resort",
  "Multigenerational trip",
  "Milestone celebration or anniversary",
  "Group trip or family reunion",
  "International journey",
];

const budgets = ["Under $5,000", "$5,000 – $10,000", "$10,000 – $20,000", "$20,000 +", "Not sure yet"];

// Trip inquiry, posted to Netlify Forms. Netlify emails each submission to the inbox once a
// notification is set under Forms in Netlify.
export function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setStatus((await submitNetlifyForm(e.currentTarget)) ? "done" : "error");
  }

  if (status === "done") {
    return (
      <div role="status" className="py-6 text-center">
        <p className="font-display text-3xl text-espresso italic">Thank you. Your trip is in good hands.</p>
        <span aria-hidden className="mx-auto my-8 block h-px w-16 bg-goldenrod" />
        <p className="mx-auto max-w-lg leading-8 font-light text-espresso/80">
          I reply within one business day to set up your complimentary 15-minute Discovery Call. While you
          wait, here is how we&apos;ll work together.
        </p>
        <a
          href={GUIDE_PDF}
          download
          className="mt-8 inline-block bg-teal px-8 py-3.5 text-xs font-light tracking-widest text-white uppercase transition-colors hover:bg-goldenrod"
        >
          Download the Guide
        </a>
      </div>
    );
  }

  return (
    <form name="trip-inquiry" onSubmit={onSubmit} className="grid gap-6 text-left sm:grid-cols-2">
      <input type="hidden" name="form-name" value="trip-inquiry" />
      <p hidden>
        <label>
          Leave this empty <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div>
        <label htmlFor="iq-name" className={labelClass}>
          Your name *
        </label>
        <input id="iq-name" name="name" required autoComplete="name" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="iq-email" className={labelClass}>
          Email *
        </label>
        <input id="iq-email" type="email" name="email" required autoComplete="email" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="iq-phone" className={labelClass}>
          Phone
        </label>
        <input id="iq-phone" type="tel" name="phone" autoComplete="tel" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="iq-contact" className={labelClass}>
          Best way to reach you
        </label>
        <select id="iq-contact" name="contact-preference" defaultValue="Email" className={fieldClass}>
          <option>Email</option>
          <option>Phone call</option>
          <option>Text</option>
        </select>
      </div>

      <fieldset className="sm:col-span-2">
        <legend className={labelClass}>How much would you like me to carry?</legend>
        <div className="grid gap-3 sm:grid-cols-4">
          {[...tiers.map((t) => t.name), "Not sure yet"].map((name) => (
            <label
              key={name}
              className="flex cursor-pointer items-center justify-center border border-espresso/20 bg-white/70 px-3 py-3 text-center text-sm font-light text-espresso transition-colors has-checked:border-teal has-checked:bg-teal has-checked:text-cream"
            >
              <input
                type="radio"
                name="service"
                value={name}
                defaultChecked={name === "Not sure yet"}
                className="sr-only"
              />
              {name}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="iq-type" className={labelClass}>
          Type of trip
        </label>
        <select id="iq-type" name="trip-type" defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Choose one
          </option>
          {tripTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="iq-budget" className={labelClass}>
          Overall trip budget
        </label>
        <select id="iq-budget" name="budget" defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Choose a range
          </option>
          {budgets.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="iq-destination" className={labelClass}>
          Where are you dreaming of?
        </label>
        <input id="iq-destination" name="destination" placeholder="Disney World, a cruise, not sure yet…" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="iq-dates" className={labelClass}>
          Travel dates or season
        </label>
        <input id="iq-dates" name="dates" placeholder="Spring break 2027" className={fieldClass} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="iq-travelers" className={labelClass}>
          Who&apos;s traveling?
        </label>
        <input
          id="iq-travelers"
          name="travelers"
          placeholder="2 adults, 3 kids (ages 4, 6, 9), grandparents"
          className={fieldClass}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="iq-care" className={labelClass}>
          Food allergies, medical, or mobility needs
        </label>
        <textarea id="iq-care" name="care-notes" rows={2} className={fieldClass} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="iq-message" className={labelClass}>
          What would make this trip feel just right?
        </label>
        <textarea id="iq-message" name="message" rows={4} className={fieldClass} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="iq-heard" className={labelClass}>
          How did you hear about us?
        </label>
        <input id="iq-heard" name="heard-from" className={fieldClass} />
      </div>

      <div className="text-center sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-teal px-12 py-4 text-xs font-light tracking-widest text-white uppercase transition-colors hover:bg-goldenrod focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-goldenrod disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send My Trip Inquiry"}
        </button>
        {status === "error" && (
          <p role="alert" className="mt-4 text-sm font-light text-espresso/70">
            Something went wrong. Please try again in a moment.
          </p>
        )}
      </div>
    </form>
  );
}
