import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "../_components/page-banner";
import { PageIntro } from "../_components/page-intro";
import { reviews, tiers } from "../_components/site-info";
import luxuryVilla from "../../public/luxury-villa.jpg";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three ways to plan with Catch Us on Main Street: The Stay, The Concierge Journey, and The Itinerary.",
};

// TODO: sample answers for the mock-up; confirm wording and policies before launch.
const faqs = [
  {
    q: "When is the planning fee due?",
    a: "The planning fee is due once you decide to move forward after your discovery call, and it reserves your spot on the calendar.",
  },
  {
    q: "How far in advance should we start planning?",
    a: "For most family trips, three to six months ahead is ideal. Milestone trips, peak holidays, and Disney stays benefit from even more lead time.",
  },
  {
    q: "Can you plan around food allergies or medical needs?",
    a: "Yes. This is a specialty. Dining, accommodations, and logistics are coordinated with your family's needs in mind from the very first conversation.",
  },
  {
    q: "How will we communicate during planning?",
    a: "Most planning happens by email and scheduled calls during client hours, with evening call times available on Tuesdays and Thursdays.",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex-1 pb-24">
      <PageBanner image={luxuryVilla} focus="60% center" />
      <PageIntro eyebrow="Services" title="Planning, Tailored to Your Family">
        <p>
          Choose the level of support that fits your trip. Every tier is
          personal, thoughtful, and built around the way your family travels.
        </p>
      </PageIntro>

      {/* Each card spans five shared rows, so names, fees, profiles, and buttons line up across all three. */}
      <section className="mx-auto grid max-w-6xl gap-x-6 gap-y-6 px-6 md:grid-cols-3">
        {tiers.map(({ slug, name, fee, feeNote, profile, featured }) => (
          <article
            key={slug}
            className={`row-span-5 grid grid-rows-subgrid gap-y-0 border p-10 text-center ${
              featured
                ? "border-teal bg-teal text-cream"
                : "border-espresso/15 bg-white/40"
            }`}
          >
            <h2 className="font-display text-2xl tracking-wide">{name}</h2>
            <p className="mt-6 font-display text-3xl">{fee}</p>
            <p
              className={`mt-2 text-[11px] font-light uppercase tracking-luxe ${
                featured ? "text-cream/80" : "text-teal"
              }`}
            >
              {feeNote || "Planning Fee"}
            </p>
            <p
              className={`mt-6 leading-7 font-light ${
                featured ? "text-cream/85" : "text-espresso/75"
              }`}
            >
              {profile}
            </p>
            <Link
              href={`/services/${slug}`}
              aria-label={`Learn more about ${name}`}
              className={`mt-10 self-end border px-6 py-3.5 text-xs font-light uppercase tracking-luxe transition-colors duration-300 hover:border-goldenrod hover:bg-goldenrod hover:text-cream ${
                featured ? "border-cream/70" : "border-espresso/30"
              }`}
            >
              Learn More
            </Link>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-14 max-w-2xl px-6 text-center">
        <p className="text-sm leading-7 font-light text-espresso/70">
          <span className="font-normal text-espresso">A note on scope:</span>{" "}
          Final planning fees depend on the scope of your trip, including the
          number of travelers, destinations, length of travel, and any special
          requirements. Your exact fee is confirmed after your discovery call.
        </p>
      </section>

      <section aria-labelledby="reviews-heading" className="mx-auto mt-24 max-w-6xl px-6">
        <div className="text-center">
          <p className="text-[11px] font-light tracking-airy text-teal uppercase sm:text-xs">
            Kind Words
          </p>
          <h2 id="reviews-heading" className="mt-6 font-display text-3xl tracking-wide">
            From the Families We&apos;ve Served
          </h2>
          <span aria-hidden className="mx-auto mt-8 block h-px w-16 bg-goldenrod" />
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {reviews.map(({ quote, trip }) => (
            <li key={trip} className="reveal">
              <figure className="flex h-full flex-col border border-espresso/10 bg-white/50 px-8 py-10 text-center sm:px-12">
                <span aria-hidden className="font-display text-5xl leading-none text-goldenrod">
                  &ldquo;
                </span>
                <blockquote className="mt-4 flex-1 font-display text-lg leading-8 text-espresso italic">
                  {quote}
                </blockquote>
                <figcaption className="mt-8 text-[11px] font-light tracking-luxe text-teal uppercase">
                  {trip}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="faq-heading" className="mx-auto mt-24 max-w-3xl px-6">
        <h2 id="faq-heading" className="text-center font-display text-3xl tracking-wide">
          Questions, Answered
        </h2>
        <span aria-hidden className="mx-auto mt-8 mb-12 block h-px w-16 bg-goldenrod" />
        <div className="divide-y divide-espresso/10 border-y border-espresso/10">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg tracking-wide [&::-webkit-details-marker]:hidden">
                {q}
                <span
                  aria-hidden
                  className="shrink-0 text-2xl leading-none font-light text-goldenrod transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 pr-10 leading-7 font-light text-espresso/75">{a}</p>
            </details>
          ))}
        </div>
        <p className="mt-6 text-center text-xs font-light text-espresso/50">
          Sample answers shown for layout.
        </p>
        <div className="mt-14 text-center">
          <Link
            href="/start-here"
            className="inline-block bg-teal px-10 py-4 text-xs font-light uppercase tracking-luxe text-cream transition-colors duration-300 hover:bg-goldenrod"
          >
            Begin Planning
          </Link>
        </div>
      </section>
    </main>
  );
}
