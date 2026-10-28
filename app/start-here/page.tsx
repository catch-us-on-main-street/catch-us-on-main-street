import type { Metadata } from "next";
import { PageBanner } from "../_components/page-banner";
import { PageIntro } from "../_components/page-intro";
import { clientHours, INQUIRY_FORM_URL, planningSteps } from "../_components/site-info";
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
          Planning starts with a simple inquiry. Here&apos;s how it works.
        </p>
      </PageIntro>

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

      {/* Travefy refuses to load inside other sites, so the form opens on Travefy itself. */}
      <section className="reveal mx-auto mt-20 max-w-4xl px-6">
        <div className="bg-teal px-8 py-16 text-center text-cream sm:px-16">
          <p className="text-[11px] font-light tracking-airy text-cream/70 uppercase sm:text-xs">
            Step One
          </p>
          <h2 className="mt-6 font-display text-3xl tracking-wide sm:text-4xl">
            Tell Us About Your Trip
          </h2>
          <span aria-hidden className="mx-auto my-8 block h-px w-16 bg-goldenrod" />
          <p className="mx-auto max-w-lg leading-8 font-light text-cream/85">
            The inquiry form takes about five minutes. Share who&apos;s traveling,
            when you&apos;d like to go, and anything that would make the trip
            feel right for your family.
          </p>
          <a
            href={INQUIRY_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block bg-cream px-10 py-4 text-sm font-light tracking-widest text-espresso uppercase transition-colors hover:bg-goldenrod hover:text-white"
          >
            Open the Inquiry Form <span aria-hidden>↗</span>
          </a>
          <p className="mt-5 text-xs font-light text-cream/60">Opens in a new tab</p>
        </div>
      </section>

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
