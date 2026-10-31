import Image from "next/image";
import Link from "next/link";
import advisorPortrait from "../public/advisor-portrait.jpg";
import advisorStaircase from "../public/advisor-staircase.jpg";
import advisorTerrace from "../public/advisor-terrace.jpg";
import brochuresBedside from "../public/brochures-bedside.jpg";
import brochuresMarble from "../public/brochures-marble.jpg";
import overwaterVillas from "../public/overwater-villas.jpg";
import { planningSteps, tiers } from "./_components/site-info";
import { TravelNotesSignup } from "./_components/travel-notes-signup";

// Brand-shoot photos in mixed orientations; `focus` keeps each subject in frame when cropped to a tall 4:5 tile.
const experiences = [
  {
    title: "Multigenerational Journeys",
    image: advisorTerrace,
    alt: "Jennifer smiling on a stone terrace, holding a travel magazine",
    focus: "50% 85%",
    body: "Spacious coastal havens designed to bring every generation together seamlessly.",
    cta: "Explore Family Services",
    href: "/services",
  },
  {
    title: "Private Charters & Milestone Escapes",
    image: brochuresMarble,
    alt: "Sandals and AVA resort brochures fanned out on a marble table",
    focus: "60% center",
    body: "Secluded coves, private yacht charters, and tailored planning for your biggest milestones.",
    cta: "Plan a Celebration",
    href: "/start-here",
  },
  {
    title: "Exclusive Villas & Boutique Resorts",
    image: brochuresBedside,
    alt: "Travel brochures, including a Royal Caribbean guide, beside a laptop on crisp white bedding",
    focus: "50% 0%",
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

const credentials = [
  "Credentialed Disney & Universal advisor",
  "Food-allergy & medical travel planning",
  "15+ years of client service",
];

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
          <p className="mb-8 text-[11px] leading-6 font-light tracking-airy uppercase sm:text-xs">
            <span className="block sm:inline">Elevated Family Travel</span>
            <span aria-hidden className="hidden sm:inline"> · </span>
            <span className="block sm:inline">Prosper, Texas</span>
          </p>
          <h1 className="font-display text-4xl leading-[1.2] font-normal tracking-wider text-balance sm:text-6xl lg:text-7xl">
            Journeys Worth Gathering For
          </h1>
          <span aria-hidden className="my-10 block h-px w-16 bg-goldenrod" />
          <p className="max-w-xl text-base leading-8 font-light text-cream/90 sm:text-lg">
            Luxury trips designed around the people you&apos;re bringing, from
            first-time Disney visits to three-generation villa stays.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/start-here"
              className="rounded-none bg-[#0F4C5C] px-8 py-3.5 text-sm font-light tracking-widest text-white uppercase transition-colors hover:bg-[#0d3f4c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-goldenrod"
            >
              Start Planning
            </Link>
            <Link
              href="/services"
              className="border border-cream/60 px-8 py-3.5 text-sm font-light tracking-widest uppercase transition-colors hover:border-goldenrod hover:bg-goldenrod focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-goldenrod"
            >
              Explore Services
            </Link>
          </div>
        </div>
        <a
          href="#approach"
          className="mx-auto mb-8 flex flex-col items-center gap-3 text-[10px] font-light tracking-luxe text-cream/75 uppercase transition-colors hover:text-cream"
        >
          Discover
          <span aria-hidden className="block h-10 w-px bg-cream/50" />
        </a>
      </section>

      {/* TODO: placeholder wording for the mock-up; replace with her own words. */}
      <section
        id="approach"
        aria-labelledby="approach-heading"
        className="bg-cream px-6 pt-24 pb-8 text-center sm:pt-32"
      >
        <div className="reveal mx-auto max-w-3xl">
          <p className="text-[11px] font-light tracking-airy text-teal uppercase sm:text-xs">
            Our Approach
          </p>
          <h2
            id="approach-heading"
            className="mt-6 font-display text-3xl leading-snug tracking-wide text-espresso sm:text-[2.6rem]"
          >
            Travel should bring your family closer,{" "}
            <span className="italic">not wear everyone out.</span>
          </h2>
          <span aria-hidden className="mx-auto my-10 block h-px w-16 bg-goldenrod" />
          <p className="mx-auto max-w-2xl text-base leading-8 font-light text-espresso/80 sm:text-lg">
            Every trip starts with a conversation about who is coming and how
            they like to travel: the toddler&apos;s nap, the grandparents&apos;
            pace, the allergy that needs a chef who listens. Then every detail is
            handled, so the only thing left to plan is who sits next to whom at
            dinner.
          </p>
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
                  <p className="mt-8 text-xs leading-6 font-light tracking-luxe uppercase">
                    <span className="inline-block border-b border-goldenrod/60 pb-1 text-balance transition-colors duration-300 group-hover:border-goldenrod group-hover:text-teal">
                      {cta}&nbsp;<span aria-hidden>→</span>
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
            <ul className="mt-10 grid gap-3 border-y border-espresso/10 py-6 text-left text-sm font-light text-espresso/80 sm:grid-cols-3 sm:gap-6">
              {credentials.map((item) => (
                <li key={item} className="flex gap-3 sm:flex-col sm:gap-2">
                  <span aria-hidden className="text-goldenrod">
                    ✦
                  </span>
                  {item}
                </li>
              ))}
            </ul>
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

      <section aria-labelledby="tiers-heading" className="bg-white/50 px-6 py-24 sm:py-32 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[11px] font-light tracking-airy text-teal uppercase sm:text-xs">
              Ways to Work Together
            </p>
            <h2
              id="tiers-heading"
              className="mt-6 font-display text-3xl tracking-wide text-espresso sm:text-4xl"
            >
              Choose Your Level of Planning
            </h2>
            <span aria-hidden className="mx-auto mt-8 block h-px w-16 bg-goldenrod" />
          </div>
          <ul className="mt-16 grid border-y border-espresso/10 md:grid-cols-3 md:divide-x md:divide-espresso/10">
            {tiers.map(({ name, fee, summary }) => (
              <li
                key={name}
                className="reveal border-b border-espresso/10 px-6 py-10 text-center last:border-b-0 md:border-b-0 md:px-10"
              >
                <h3 className="font-display text-2xl tracking-wide text-espresso">{name}</h3>
                <p className="mt-4 text-[11px] font-light tracking-luxe text-teal uppercase">
                  Planning Fee · {fee}
                </p>
                <p className="mx-auto mt-5 max-w-xs leading-7 font-light text-espresso/75">
                  {summary}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-block border-b border-goldenrod/60 pb-1 text-xs font-light tracking-luxe text-espresso uppercase transition-colors hover:border-goldenrod hover:text-teal"
            >
              Compare Services <span aria-hidden>→</span>
            </Link>
          </p>
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

      <section aria-labelledby="notes-heading" className="bg-[#E3EDEF] px-6 py-24 text-center sm:py-28">
        <div className="reveal mx-auto max-w-2xl">
          <p className="text-[11px] font-light tracking-airy text-teal uppercase sm:text-xs">
            Monthly Travel Notes
          </p>
          <h2
            id="notes-heading"
            className="mt-6 font-display text-3xl tracking-wide text-espresso sm:text-4xl"
          >
            Ideas for Your Next Family Escape
          </h2>
          <span aria-hidden className="mx-auto my-8 block h-px w-16 bg-goldenrod" />
          <p className="mb-10 text-base leading-8 font-light text-espresso/80">
            One email a month with destination ideas, booking windows worth
            knowing, and perks reserved for our clients.
          </p>
          <TravelNotesSignup />
        </div>
      </section>

      {/* She stands just left of centre in the photo, so on wide screens the text moves to the right half to keep her in view. */}
      <section className="relative isolate overflow-hidden px-6 py-32 text-center text-cream sm:py-44 lg:px-16 lg:text-left">
        <Image
          src={advisorStaircase}
          alt=""
          fill
          sizes="100vw"
          placeholder="blur"
          className="-z-20 object-cover object-[50%_55%] md:object-[90%_55%] lg:object-[50%_70%]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-black/50 lg:bg-transparent lg:bg-linear-to-l lg:from-black/75 lg:via-black/50 lg:to-black/10"
        />
        <div className="reveal mx-auto max-w-3xl lg:mr-0 lg:ml-[54%] lg:max-w-xl">
          <p className="text-[11px] font-light tracking-airy text-cream uppercase [text-shadow:0_1px_8px_rgb(0_0_0/0.6)] sm:text-xs">
            Ready When You Are
          </p>
          <h2 className="mt-6 font-display text-4xl leading-tight tracking-wider text-balance sm:text-6xl lg:text-5xl xl:text-6xl">
            Your Next Gathering Starts Here
          </h2>
          <span aria-hidden className="mx-auto my-10 block h-px w-16 bg-goldenrod lg:mx-0" />
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
