import type { Metadata } from "next";
import { InquiryForm } from "../_components/inquiry-form";
import { PageBanner } from "../_components/page-banner";
import { PageIntro } from "../_components/page-intro";
import { SectionHeading } from "../_components/section-heading";
import { clientHours, planningSteps } from "../_components/site-info";
import yachtCove from "../../public/yacht-cove.jpg";

export const metadata: Metadata = {
  title: "Start Your Trip",
  description: "Tell me about your trip, and I'll be in touch within one business day to set up your complimentary Discovery Call.",
};

export default function StartHerePage() {
  return (
    <main className="flex-1 pb-24">
      <PageBanner image={yachtCove} focus="45% center" />
      <PageIntro eyebrow="Start Your Trip" title="Tell Me About Your Trip">
        <p>
          Share who&apos;s traveling and what you&apos;re dreaming of. It takes about five minutes, and
          I reply within one business day to set up your complimentary 15-minute Discovery Call.
        </p>
      </PageIntro>

      <section id="inquiry" aria-label="Trip inquiry form" className="mx-auto max-w-4xl scroll-mt-8 px-6">
        <div className="border border-espresso/10 bg-white/60 px-6 py-12 sm:px-12">
          <InquiryForm />
        </div>
      </section>

      <section aria-labelledby="journey-heading" className="mx-auto mt-28 max-w-7xl px-6">
        <SectionHeading id="journey-heading" eyebrow="What Happens Next" title="Your Client Journey" />
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {planningSteps.map(({ title, body }, i) => (
            <li key={title} className="reveal border border-espresso/15 bg-white/40 px-8 py-10 text-center">
              <p className="font-display text-4xl text-goldenrod italic">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 font-display text-xl tracking-wide">{title}</h3>
              <p className="mt-4 leading-7 font-light text-espresso/75">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto mt-16 max-w-3xl px-6">
        <div className="grid gap-px bg-espresso/10 sm:grid-cols-2">
          {clientHours.map(({ label, days, time }) => (
            <div key={label} className="bg-cream px-8 py-10 text-center">
              <p className="text-[11px] font-light tracking-luxe text-teal uppercase">{label}</p>
              <p className="mt-4 font-display text-xl">{days}</p>
              <p className="mt-1 font-light text-espresso/75">{time}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
