import Image from "next/image";
import Link from "next/link";
import advisorPortrait from "../public/advisor-portrait.jpg";
import familyResort from "../public/family-resort.jpg";
import luxuryVilla from "../public/luxury-villa.jpg";
import overwaterVillas from "../public/overwater-villas.jpg";
import sunsetPool from "../public/sunset-pool.jpg";
import yachtCove from "../public/yacht-cove.jpg";
import { planningSteps } from "./_components/site-info";

// Source photos are wide landscapes; `focus` keeps each subject in frame when cropped to a tall 4:5 tile.
const experiences = [
  {
    title: "Multigenerational Journeys",
    image: familyResort,
    alt: "A family arriving at a sunlit oceanfront suite as the children run toward the beach",
    focus: "45% center",
    body: "Spacious coastal havens designed to bring every generation together seamlessly.",
    cta: "Explore Family Services",
    href: "/services",
  },
  {
    title: "Private Charters & Milestone Escapes",
    image: yachtCove,
    alt: "Aerial view of a private yacht anchored in a turquoise cove beside a forested shore",
    focus: "45% center",
    body: "Secluded coves, private yacht charters, and tailored planning for your biggest milestones.",
    cta: "Plan a Celebration",
    href: "/start-here",
  },
  {
    title: "Exclusive Villas & Boutique Resorts",
    image: luxuryVilla,
    alt: "A modern clifftop villa with an infinity pool and palms at sunset",
    focus: "60% center",
    body: "Handpicked five-star coastal estates and luxury private villas with exclusive client perks.",
    cta: "View Service Tiers",
    href: "/services",
  },
];

// TODO: sample copy for the mock-up; replace with real client reviews before launch.
const reviews = [
  {
    quote:
      "Three generations, one villa, and not a single stressful moment. Every detail was handled before we even asked.",
    family: "The R. Family",
    trip: "Turks & Caicos · June 2026",
  },
  {
    quote:
      "Traveling with our son's food allergies used to be our biggest worry. This time the chefs knew him by name on day one.",
    family: "The M. Family",
    trip: "Walt Disney World · March 2026",
  },
  {
    quote:
      "Our anniversary trip felt effortless and deeply personal. We came home already planning the next one.",
    family: "Dana & Marcus",
    trip: "Amalfi Coast · September 2026",
  },
];

const tickerPhrase = "Thoughtful Travel, Designed for Families";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative isolate flex min-h-[90vh] w-full flex-col overflow-hidden text-cream">
        <div
          aria-hidden
          className="absolute inset-0 -z-20 will-change-transform motion-safe:animate-ken-burns"
        >
          <Image
            src={overwaterVillas}
            alt=""
            fill
            sizes="100vw"
            placeholder="blur"
            loading="eager"
            fetchPriority="high"
            className="object-cover"
          />
        </div>
        <div aria-hidden className="absolute inset-0 -z-10 bg-black/25" />

        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 pt-40 pb-24 text-center">
          <h1 className="font-display text-4xl leading-[1.2] font-normal tracking-wider sm:text-6xl lg:text-7xl">
            Journeys Worth Gathering For
          </h1>
          <span aria-hidden className="my-10 block h-px w-16 bg-goldenrod" />
          <Link
            href="/start-here"
            className="rounded-none bg-[#0F4C5C] px-8 py-3 text-sm font-light tracking-widest text-white uppercase transition-colors hover:bg-[#0d3f4c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-goldenrod"
          >
            Start Here
          </Link>
        </div>
      </section>

      <section
        aria-labelledby="experiences-heading"
        className="bg-[#F5F2EF] px-6 py-24 md:px-12"
      >
        <h2
          id="experiences-heading"
          className="text-center font-display text-3xl font-normal tracking-wide text-espresso sm:text-4xl"
        >
          Curated Experiences, Tailored for You
        </h2>
        <span aria-hidden className="mx-auto mt-8 mb-16 block h-px w-16 bg-goldenrod" />

        <ul className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
          {experiences.map(({ title, image, alt, focus, body, cta, href }) => (
            <li key={title} className="reveal">
              <Link href={href} className="group block text-espresso">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    placeholder="blur"
                    style={{ objectPosition: focus }}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="px-2 pt-10 pb-4 text-center">
                  <h3 className="font-display text-2xl leading-snug tracking-wide">
                    {title}
                  </h3>
                  <p className="mx-auto mt-5 max-w-xs leading-7 font-light text-espresso/75">
                    {body}
                  </p>
                  <p className="mt-8 text-xs font-light tracking-luxe uppercase">
                    <span className="border-b border-goldenrod/60 pb-1 transition-colors duration-300 group-hover:border-goldenrod group-hover:text-teal">
                      {cta} <span aria-hidden>→</span>
                    </span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Decorative ticker band; the sparkle echoes the star in the crest. */}
      <div aria-hidden className="overflow-hidden bg-teal py-6 text-cream">
        <div className="marquee-track">
          {Array.from({ length: 8 }, (_, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-10 pr-10 font-display text-xl tracking-wider whitespace-nowrap italic sm:text-2xl"
            >
              {tickerPhrase}
              <span className="text-goldenrod not-italic">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section aria-labelledby="advisor-heading" className="bg-cream px-6 py-24 sm:py-32 md:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2 md:gap-20">
          <div className="reveal relative mx-auto w-full max-w-md">
            <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 border border-goldenrod/60" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={advisorPortrait}
                alt="Jennifer, founder of Catch Us on Main Street Travel Co., smiling and holding a travel magazine"
                fill
                sizes="(min-width: 768px) 28rem, 100vw"
                placeholder="blur"
                style={{ objectPosition: "50% 20%" }}
                className="object-cover"
              />
            </div>
          </div>
          <div className="reveal text-center md:text-left">
            <p className="text-[11px] font-light tracking-airy text-teal uppercase sm:text-xs">
              Meet Your Advisor
            </p>
            <h2
              id="advisor-heading"
              className="mt-6 font-display text-4xl tracking-wide text-espresso sm:text-5xl"
            >
              Hello, I&apos;m <span className="italic">Jennifer</span>
            </h2>
            <span aria-hidden className="mx-auto mt-8 block h-px w-16 bg-goldenrod md:mx-0" />
            <div className="mt-8 grid gap-5 text-base leading-8 font-light text-espresso/80 sm:text-lg">
              <p>
                After more than 15 years in corporate consulting, I brought the
                same attention to detail and client care to the work I love most:
                designing travel that families remember.
              </p>
              <p>
                From our home base in Prosper, Texas, my family of five knows
                firsthand what makes a trip work for everyone. I&apos;m a
                credentialed Disney and Universal advisor, with special care for
                families navigating medical needs and food allergies.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-10 inline-block border-b border-goldenrod/60 pb-1 text-xs font-light tracking-luxe text-espresso uppercase transition-colors hover:border-goldenrod hover:text-teal"
            >
              More About Jennifer <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="process-heading" className="bg-espresso px-6 py-24 text-cream sm:py-32 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[11px] font-light tracking-airy text-cream/60 uppercase sm:text-xs">
              How It Works
            </p>
            <h2 id="process-heading" className="mt-6 font-display text-3xl tracking-wide sm:text-4xl">
              Your Journey, Thoughtfully Guided
            </h2>
            <span aria-hidden className="mx-auto mt-8 block h-px w-16 bg-goldenrod" />
          </div>
          <ol className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-cream/10">
            {planningSteps.map(({ title, body }, i) => (
              <li key={title} className="reveal text-center lg:px-8">
                <p className="font-display text-5xl text-goldenrod italic">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-6 font-display text-xl tracking-wide">{title}</h3>
                <p className="mx-auto mt-4 max-w-xs leading-7 font-light text-cream/70">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="reviews-heading" className="bg-cream px-6 py-24 sm:py-32 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[11px] font-light tracking-airy text-teal uppercase sm:text-xs">
              Kind Words
            </p>
            <h2
              id="reviews-heading"
              className="mt-6 font-display text-3xl tracking-wide text-espresso sm:text-4xl"
            >
              From the Families We&apos;ve Served
            </h2>
            <span aria-hidden className="mx-auto mt-8 block h-px w-16 bg-goldenrod" />
          </div>
          <ul className="mt-16 grid gap-8 md:grid-cols-3">
            {reviews.map(({ quote, family, trip }) => (
              <li key={family} className="reveal">
                <figure className="flex h-full flex-col border border-espresso/10 bg-white/50 p-10 text-center">
                  <span aria-hidden className="font-display text-5xl leading-none text-goldenrod">
                    &ldquo;
                  </span>
                  <blockquote className="mt-4 flex-1 font-display text-lg leading-8 text-espresso italic">
                    {quote}
                  </blockquote>
                  <figcaption className="mt-8">
                    <p className="text-sm font-normal text-espresso">{family}</p>
                    <p className="mt-1 text-[11px] font-light tracking-luxe text-teal uppercase">
                      {trip}
                    </p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center text-xs font-light text-espresso/50">
            Sample reviews shown for layout. Real client reviews coming soon.
          </p>
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-6 py-32 text-center text-cream sm:py-44">
        <Image
          src={sunsetPool}
          alt=""
          fill
          sizes="100vw"
          placeholder="blur"
          className="-z-20 object-cover"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-black/40" />
        <div className="reveal mx-auto max-w-3xl">
          <p className="text-[11px] font-light tracking-airy text-cream/80 uppercase sm:text-xs">
            Ready When You Are
          </p>
          <h2 className="mt-6 font-display text-4xl leading-tight tracking-wider sm:text-6xl">
            Your Next Gathering Starts Here
          </h2>
          <span aria-hidden className="mx-auto my-10 block h-px w-16 bg-goldenrod" />
          <Link
            href="/start-here"
            className="inline-block bg-teal px-8 py-3 text-sm font-light tracking-widest text-white uppercase transition-colors hover:bg-[#0d3f4c]"
          >
            Start Planning
          </Link>
        </div>
      </section>
    </main>
  );
}
