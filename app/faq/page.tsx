import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "../_components/page-banner";
import { PageIntro } from "../_components/page-intro";
import { INQUIRY_HREF } from "../_components/site-info";
import sunsetPool from "../../public/sunset-pool.jpg";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers about planning fees, The Stay, The Itinerary, The Concierge Journey, timing, and traveling with food allergies.",
};

const groups = [
  {
    heading: "Working Together",
    faqs: [
      {
        q: "Why work with a travel advisor?",
        a: "Because the research, comparing, and booking take real time, and the details matter most when something changes. I do that work, bring perks you can't get booking on your own at my partner hotels, and stay in your corner from our first call until you're home.",
      },
      {
        q: "Who do you plan for?",
        a: "Families who gather to celebrate: three generations traveling together, milestone birthdays and anniversaries, family reunions, and couples who want every detail handled with care. I'm a mom of three myself, so family travel is close to my heart.",
      },
      {
        q: "Where do you plan?",
        a: "Cruises, all-inclusive and luxury resorts, Disney and Universal parks, custom international itineraries, and boutique stays closer to home. The About page lists the cruise lines and resort brands I work with most.",
      },
      {
        q: "I like doing my own research. Is an advisor still worth it?",
        a: "Yes. Bring every idea you've saved. I'll fill in what the internet leaves out, compare options with you, and secure the perks. If you've already booked, The Itinerary turns your research into a day-by-day plan.",
      },
      {
        q: "What happens after I send an inquiry?",
        a: "I reply within one business day to set up a complimentary 15-minute Discovery Call. We talk through your vision and travelers, and confirm the service and planning fee that fit.",
      },
    ],
  },
  {
    heading: "Fees & Booking",
    faqs: [
      {
        q: "Why is there a planning fee?",
        a: "Commission alone doesn't cover the research and hours behind a well-planned trip. The fee is paid before planning begins, is separate from your trip cost, and is non-refundable. Most Concierge Journeys land between $650 and $1,500.",
      },
      {
        q: "Why is The Stay complimentary?",
        a: "For cruise, all-inclusive, and resort vacations of $5,000 or more, the hotel, cruise line, or resort pays me a commission, so my service is included in the rate.",
      },
      {
        q: "Will I pay more by booking through you?",
        a: "No. With The Stay you pay the same price as booking direct, with perks and someone in your corner. Commission comes from the travel supplier at no added cost to you.",
      },
      {
        q: "I already booked my trip. Can you still help?",
        a: "Yes. The Itinerary builds your day-by-day plan around the trip you've already booked. Within a limited window, and if it wasn't booked using points, I can sometimes step in as your advisor of record on hotel and cruise bookings at no cost to you. Send me your confirmation and I'll check.",
      },
      {
        q: "Do you help with travel insurance?",
        a: "Yes. We talk through it before you book, and your travel insurance decision is documented in writing.",
      },
    ],
  },
  {
    heading: "Planning & Travel",
    faqs: [
      {
        q: "How far in advance should we start planning?",
        a: "The earlier, the more choice you have. For The Itinerary, order at least 3 weeks before travel, or 75 days before Disney and other theme parks so your plan lands before dining reservations open. Booking within 30 days of travel can raise the planning fee.",
      },
      {
        q: "Can you plan around food allergies or medical needs?",
        a: "Yes. This is personal for me. Food allergies and medical needs are planned around from day one, with every service.",
      },
      {
        q: "When will I hear from you?",
        a: "My client hours are Monday to Thursday, 9:30 AM to 2:30 PM CT, with evening Discovery Calls on Tuesday and Thursday by appointment. I reply within one business day. On The Concierge Journey, I'm available by text from 8 AM to 8 PM local time while you travel, plus emergencies.",
      },
      {
        q: "Where do I find my itinerary?",
        a: "In your digital trip app. Your proposal arrives there, and once you book, it becomes your live itinerary with every confirmation in one place.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <main className="flex-1 pb-24">
      <PageBanner image={sunsetPool} focus="center" />
      <PageIntro eyebrow="FAQ" title="Questions, Answered">
        <p>
          The answers families ask for most. If yours isn&apos;t here, bring it to our Discovery Call.
        </p>
      </PageIntro>

      <div className="mx-auto grid max-w-3xl gap-16 px-6">
        {groups.map(({ heading, faqs }) => (
          <section key={heading} aria-labelledby={`faq-${heading}`}>
            <h2
              id={`faq-${heading}`}
              className="text-center text-[11px] font-light tracking-airy text-teal uppercase sm:text-xs"
            >
              {heading}
            </h2>
            <div className="mt-6 divide-y divide-espresso/10 border-y border-espresso/10">
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
          </section>
        ))}
      </div>

      <div className="mt-20 flex flex-col items-center justify-center gap-4 px-6 sm:flex-row">
        <Link
          href={INQUIRY_HREF}
          className="w-60 bg-teal px-8 py-4 text-center text-xs font-light tracking-luxe text-cream uppercase transition-colors hover:bg-goldenrod"
        >
          Start Your Trip
        </Link>
        <Link
          href="/resources"
          className="w-60 border border-espresso/30 px-8 py-4 text-center text-xs font-light tracking-luxe uppercase transition-colors hover:border-goldenrod hover:bg-goldenrod hover:text-cream"
        >
          Free Resources
        </Link>
      </div>
    </main>
  );
}
