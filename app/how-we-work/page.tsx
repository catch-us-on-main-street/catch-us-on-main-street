import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBanner } from "../_components/page-banner";
import { PageIntro } from "../_components/page-intro";
import { SectionHeading } from "../_components/section-heading";
import { clientHours, INQUIRY_HREF, planningSteps } from "../_components/site-info";
import advisorElevator from "../../public/advisor-elevator.jpg";
import brochuresMarble from "../../public/brochures-marble.jpg";

export const metadata: Metadata = {
  title: "How We Work Together",
  description: "Our process, from your complimentary Discovery Call to the day you travel, and when you'll hear from me.",
};

const inPractice = [
  {
    title: "Cruises",
    body: "Shore excursions, specialty dining, pre-cruise hotel coordination, and embarkation-day logistics.",
  },
  {
    title: "All-Inclusive & Luxury Resorts",
    body: "Spa and activity reservations, private transfers, and excursion bookings.",
  },
  {
    title: "International & Multigenerational",
    body: "Villa and suite stays, private guides, rail and transfers between cities, and an itinerary that works for every generation.",
  },
  {
    title: "Disney & Theme Parks",
    body: "Lightning Lane strategy, dining reservations, day-by-day park routing, and specialty experiences.",
  },
];

export default function HowWeWorkPage() {
  return (
    <main className="flex-1 pb-24">
      <PageBanner image={brochuresMarble} focus="60% center" />
      <PageIntro eyebrow="Our Process" title="How We Work Together">
        <p>
          An advisor who stays in your corner from our first call until you&apos;re home. When a flight
          changes or a plan shifts, I&apos;m already working on it, so you can keep enjoying your trip.
        </p>
      </PageIntro>

      <section aria-labelledby="steps-heading" className="bg-espresso px-6 py-24 text-cream">
        <div className="mx-auto max-w-7xl">
          <SectionHeading id="steps-heading" eyebrow="The Process" title="Your Client Journey" tone="dark" />
          <ol className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-cream/10">
            {planningSteps.map(({ title, body }, i) => (
              <li key={title} className="reveal text-center lg:px-8">
                <p className="font-display text-5xl text-goldenrod italic">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-6 font-display text-xl tracking-wide">{title}</h3>
                <p className="mx-auto mt-4 max-w-xs leading-7 font-light text-cream/70">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="hear-heading" className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading id="hear-heading" eyebrow="Communication" title="When You'll Hear from Me" />
        <p className="mx-auto mt-8 max-w-2xl text-center leading-8 font-light text-espresso/80">
          I keep dedicated client hours so every client gets my full focus, and I reply to messages within
          one business day. Once you&apos;re traveling on The Concierge Journey, I&apos;m available by text
          from 8 AM to 8 PM local time, plus emergencies.
        </p>
        <div className="mx-auto mt-12 grid max-w-3xl gap-px bg-espresso/10 sm:grid-cols-2">
          {clientHours.map(({ label, days, time }) => (
            <div key={label} className="bg-cream px-8 py-10 text-center">
              <p className="text-[11px] font-light tracking-luxe text-teal uppercase">{label}</p>
              <p className="mt-4 font-display text-xl">{days}</p>
              <p className="mt-1 font-light text-espresso/75">{time}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="practice-heading" className="bg-white/50 px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <div className="reveal relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden">
            <Image
              src={advisorElevator}
              alt="Jennifer in a hotel elevator with her suitcase and a Weekend Vibes tote"
              fill
              sizes="(min-width: 768px) 24rem, 100vw"
              placeholder="blur"
              style={{ objectPosition: "50% 45%" }}
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              id="practice-heading"
              eyebrow="The Concierge Journey"
              title="What It Looks Like, in Practice"
              align="left"
            />
            <p className="mt-8 text-center leading-8 font-light text-espresso/80 md:text-left">
              Because I manage your full experience end to end, the work looks different depending on
              where you&apos;re headed.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {inPractice.map(({ title, body }) => (
                <li key={title} className="border border-espresso/10 bg-cream px-6 py-6">
                  <h3 className="text-[11px] font-light tracking-luxe text-teal uppercase">{title}</h3>
                  <p className="mt-3 leading-7 font-light text-espresso/80">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="booked-heading" className="mx-auto max-w-3xl px-6 py-24 text-center">
        <SectionHeading id="booked-heading" eyebrow="Already Booked?" title="Already Booked It Yourself?" />
        <div className="mt-8 grid gap-5 leading-8 font-light text-espresso/80">
          <p>
            That&apos;s exactly what The Itinerary is for: I&apos;ll build your day-by-day plan around the
            trip you&apos;ve already booked.
          </p>
          <p>
            And within a limited window, if it wasn&apos;t booked using points, I can sometimes step in as
            your advisor of record on hotel and cruise bookings, unlocking the same advisor perks and
            priority treatment, at no cost to you. Send me your confirmation and I&apos;ll check whether
            yours qualifies.
          </p>
        </div>
        <p className="mt-8 text-sm font-light text-espresso/60 italic">
          Change and cancellation terms are outlined in your Travel Services Agreement. All planning fees
          are non-refundable.
        </p>
        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={INQUIRY_HREF}
            className="w-60 bg-teal px-8 py-4 text-xs font-light tracking-luxe text-cream uppercase transition-colors hover:bg-goldenrod"
          >
            Start Your Trip
          </Link>
          <Link
            href="/services"
            className="w-60 border border-espresso/30 px-8 py-4 text-xs font-light tracking-luxe uppercase transition-colors hover:border-goldenrod hover:bg-goldenrod hover:text-cream"
          >
            Compare Services
          </Link>
        </div>
      </section>
    </main>
  );
}
