import type { Metadata } from "next";
import { PageBanner } from "../_components/page-banner";
import { PageIntro } from "../_components/page-intro";
import { InquiryForm } from "../_components/inquiry-form";
import { clientHours, planningSteps } from "../_components/site-info";
import yachtCove from "../../public/yacht-cove.jpg";

export const metadata: Metadata = {
  title: "Start Here",
  description:
    "Begin your family trip inquiry with Catch Us on Main Street in a few simple steps.",
};

export default function StartHerePage() {
  return (
    <main className="flex-1 pb-24">
      <PageBanner image={yachtCove} focus="45% center" />
      <PageIntro eyebrow="Start Here" title="Begin Your Journey">
        <p>
          Planning starts with a simple inquiry. Share who&apos;s traveling and
          what you&apos;re dreaming of, and I reply within one business day to set
          up your complimentary Discovery Call.
        </p>
      </PageIntro>

      <section id="inquiry" aria-label="Trip inquiry form" className="mx-auto mb-24 max-w-4xl scroll-mt-8 px-6">
        <div className="border border-espresso/10 bg-white/60 px-6 py-12 sm:px-12">
          <InquiryForm />
        </div>
      </section>

      <ol className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {planningSteps.map(({ title, body }, i) => (
          <li
            key={title}
            className="reveal border border-espresso/15 bg-white/40 p-10 text-center"
          >
            <p className="font-display text-4xl text-goldenrod italic">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-4 font-display text-xl tracking-wide">{title}</h2>
            <p className="mt-4 leading-7 font-light text-espresso/75">{body}</p>
          </li>
        ))}
      </ol>


      <section className="mx-auto mt-16 max-w-3xl px-6">
        <div className="grid gap-px bg-espresso/10 sm:grid-cols-2">
          {clientHours.map(({ label, days, time }) => (
            <div key={label} className="bg-cream px-8 py-10 text-center">
              <p className="text-[11px] font-light tracking-luxe text-teal uppercase">
                {label}
              </p>
              <p className="mt-4 font-display text-xl">{days}</p>
              <p className="mt-1 font-light text-espresso/75">{time}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
