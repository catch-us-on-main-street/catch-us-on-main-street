import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GuideDownload } from "../_components/guide-download";
import { PageBanner } from "../_components/page-banner";
import { PageIntro } from "../_components/page-intro";
import { SectionHeading } from "../_components/section-heading";
import { INQUIRY_HREF } from "../_components/site-info";
import { TierCards } from "../_components/tier-cards";
import advisorDeskCall from "../../public/advisor-desk-call.jpg";
import familyHug from "../../public/family-hug.jpg";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three ways to work together: The Stay, The Concierge Journey, and The Itinerary, plus group trips and family reunions.",
};

const included = [
  {
    title: "VIP Hotel Perks",
    body: "Extras you can't get booking on your own at my partner hotels, like a hotel credit, daily breakfast, and priority upgrades.",
  },
  {
    title: "Your Digital Trip App",
    body: "Your proposal arrives there, and once you book, it becomes your live itinerary with every confirmation in one place.",
  },
  {
    title: "Care for Every Traveler",
    body: "Food allergies and medical needs are planned around from day one.",
  },
];

const feeFacts = [
  { title: "Why a fee?", body: "Commission alone doesn't cover the research and hours behind a well-planned trip." },
  { title: "When", body: "Paid before planning begins. It's separate from your trip cost and non-refundable." },
  {
    title: "What changes it",
    body: "Extra households, extra hotel stops, custom international itineraries, and booking within 30 days of travel.",
  },
  { title: "Typical range", body: "Most Concierge Journeys land between $650 and $1,500." },
];

export default function ServicesPage() {
  return (
    <main className="flex-1 pb-24">
      <PageBanner image={familyHug} focus="50% 20%" tall />
      <PageIntro eyebrow="Services" title="Three Ways to Work Together">
        <p>The only question is how much of the work you want me to carry.</p>
      </PageIntro>

      <section aria-label="Services" className="px-6">
        <TierCards detailed />
      </section>

      <section className="reveal mx-auto mt-16 max-w-6xl px-6">
        <div className="grid items-center gap-6 border-y border-espresso/10 py-10 text-center md:grid-cols-[auto_1fr_auto] md:gap-10 md:text-left">
          <h2 className="font-display text-2xl tracking-wide">Group Trips &amp; Family Reunions</h2>
          <p className="leading-7 font-light text-espresso/75">
            Personal quote. Cruises, all-inclusive resorts, and guided tours for reunions, milestone
            celebrations, and friends traveling together.
          </p>
          <Link
            href={INQUIRY_HREF}
            className="justify-self-center border-b border-goldenrod/60 pb-1 text-xs font-light tracking-luxe whitespace-nowrap uppercase transition-colors hover:border-goldenrod hover:text-teal"
          >
            Request a Quote <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <section aria-labelledby="included-heading" className="mx-auto mt-24 max-w-6xl px-6">
        <SectionHeading id="included-heading" eyebrow="With Every Service" title="Always Included" />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {included.map(({ title, body }) => (
            <li key={title} className="reveal border-t-2 border-teal bg-white/50 px-8 py-10 text-center">
              <h3 className="font-display text-xl tracking-wide">{title}</h3>
              <p className="mt-4 leading-7 font-light text-espresso/75">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="fees-heading" className="mt-24 bg-espresso px-6 py-24 text-cream">
        <div className="mx-auto max-w-6xl">
          <SectionHeading id="fees-heading" eyebrow="Planning Fees" title="How Planning Fees Work" tone="dark" />
          <dl className="mt-14 grid gap-px bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
            {feeFacts.map(({ title, body }) => (
              <div key={title} className="bg-espresso px-8 py-8 text-center">
                <dt className="font-display text-xl text-goldenrod">{title}</dt>
                <dd className="mt-3 leading-7 font-light text-cream/75">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="philosophy-heading" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid items-center gap-16 md:grid-cols-[1.2fr_1fr] md:gap-20">
          <div className="reveal">
            <SectionHeading
              id="philosophy-heading"
              eyebrow="Philosophy"
              title="Your Investment in Elevated Travel"
              align="left"
            />
            <p className="mt-8 text-center font-display text-xl leading-8 text-teal italic md:text-left">
              This is not a booking service. It is an advisory relationship, closer to hiring a consultant
              than making a reservation.
            </p>
            <div className="mt-8 grid gap-5 text-center leading-8 font-light text-espresso/80 md:text-left">
              <p>
                I am not the advisor chasing the lowest possible price. My goal is to find you the best
                value: the right resort, the right timing, the right details handled, so your family
                experiences the trip elevated, not stripped down. That matters most for larger families
                and groups, where costs rise fast and logistics multiply with every traveler.
              </p>
              <p>
                Think of your planning fee the way you think about your accountant or your attorney: you
                pay them for their expertise, not for paperwork. I am paid two ways, the planning fee and
                commission from the hotel, cruise line, or resort at no added cost to you. Because my fee
                is tied to my time and not to what I book, every recommendation is shaped by what is right
                for your family.
              </p>
            </div>
          </div>
          <div className="reveal relative mx-auto w-full max-w-sm">
            <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 border border-goldenrod/60" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={advisorDeskCall}
                alt="Jennifer on a call with a client, notebook and laptop open"
                fill
                sizes="(min-width: 768px) 24rem, 100vw"
                placeholder="blur"
                style={{ objectPosition: "50% 35%" }}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <p className="reveal mx-auto mt-16 max-w-3xl border-l-2 border-teal bg-teal/5 px-8 py-6 leading-8 font-light text-espresso/80 italic">
          The starting-at figures are there so you know what to expect walking in. Where your trip lands is
          something we confirm together on your Discovery Call, based on your travelers, your destinations,
          and the complexity of what you are asking me to plan.
        </p>
      </section>

      <section aria-labelledby="guide-heading" className="bg-[#E3EDEF] px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <SectionHeading id="guide-heading" eyebrow="Free Guide" title="Take the Full Guide With You" />
          <p className="mx-auto mt-8 mb-10 max-w-xl leading-8 font-light text-espresso/80">
            Everything on this page, plus where I plan and what the Concierge Journey looks like in
            practice, in one guide to share with your family.
          </p>
          <GuideDownload />
        </div>
      </section>

      <div className="mt-20 flex flex-col items-center justify-center gap-4 px-6 sm:flex-row">
        <Link
          href={INQUIRY_HREF}
          className="w-60 bg-teal px-8 py-4 text-center text-xs font-light tracking-luxe text-cream uppercase transition-colors duration-300 hover:bg-goldenrod"
        >
          Start Your Trip
        </Link>
        <Link
          href="/faq"
          className="w-60 border border-espresso/30 px-8 py-4 text-center text-xs font-light tracking-luxe uppercase transition-colors duration-300 hover:border-goldenrod hover:bg-goldenrod hover:text-cream"
        >
          Read the FAQ
        </Link>
      </div>
    </main>
  );
}
