import Image from "next/image";
import Link from "next/link";
import advisorPortrait from "../public/advisor-portrait.jpg";
import advisorStaircase from "../public/advisor-staircase.jpg";
import couplePortrait from "../public/couple-portrait.jpg";
import familyTogether from "../public/family-together.jpg";
import overwaterVillas from "../public/overwater-villas.jpg";
import passportsOrganizer from "../public/passports-organizer.jpg";
import { GuideDownload } from "./_components/guide-download";
import { planningSteps, reviews, tickerPhrases } from "./_components/site-info";

// Photos in mixed orientations; `focus` keeps each subject in frame when cropped to a tall 4:5 tile.
const experiences = [
  {
    title: "Multigenerational Journeys",
    image: passportsOrganizer,
    alt: "A family's passports tucked into a travel organizer",
    focus: "50% 30%",
    body: "Spacious coastal havens designed to bring every generation together seamlessly.",
    cta: "Explore Family Services",
    href: "/services",
  },
  {
    title: "Milestone Escapes",
    image: couplePortrait,
    alt: "Jennifer and her husband arm in arm in a sunlit field",
    focus: "50% 55%",
    body: "Secluded coves, private yacht charters, and tailored planning for your biggest milestones.",
    cta: "Plan a Celebration",
    href: "/start-here",
  },
  {
    title: "Family Getaways",
    image: familyTogether,
    alt: "Jennifer, her husband, and their three children laughing together on a park path",
    focus: "50% 40%",
    body: "Spring break, a week at the parks, the first cruise. Room to play, room to rest, and nothing left to figure out.",
    cta: "View Services",
    href: "/services",
  },
];

// Three of the real client quotes; the Services page shows all of them.
const homeReviews = [reviews[0], reviews[1], reviews[3]];

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
          href="#philosophy"
          className="mx-auto mb-8 flex flex-col items-center gap-3 text-[10px] font-light tracking-luxe text-cream/75 uppercase transition-colors hover:text-cream"
        >
          Discover
          <span aria-hidden className="block h-10 w-px bg-cream/50" />
        </a>
      </section>

      {/* TODO: placeholder wording for the mock-up; replace with her own words. */}
      <section
        id="philosophy"
        aria-labelledby="philosophy-heading"
        className="bg-cream px-6 pt-24 pb-8 text-center sm:pt-32"
      >
        <div className="reveal mx-auto max-w-3xl">
          <p className="text-[11px] font-light tracking-airy text-teal uppercase sm:text-xs">
            Our Philosophy
          </p>
          <h2
            id="philosophy-heading"
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
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-light tracking-airy text-teal uppercase sm:text-xs">
            Why Families Work With Us
          </p>
          <h2
            id="experiences-heading"
            className="mt-6 font-display text-3xl font-normal tracking-wide text-espresso sm:text-4xl"
          >
            Curated Experiences, Tailored for You
          </h2>
          <span aria-hidden className="mx-auto my-8 block h-px w-16 bg-goldenrod" />
          <p className="text-base leading-8 font-light text-espresso/80 sm:text-lg">
            Less planning, more together. Every detail is handled, so no one
            comes home needing a vacation from the vacation.
          </p>
        </div>

        {/* Each card spans four shared rows (photo, title, text, button), so titles, text, and buttons line up across all three. */}
        <ul className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-8 md:grid-cols-3">
          {experiences.map(({ title, image, alt, focus, body, cta, href }) => (
            <li key={title} className="reveal row-span-4 grid grid-cols-[minmax(0,1fr)] grid-rows-subgrid pb-12 md:pb-0">
              <Link
                href={href}
                className="group row-span-4 grid grid-cols-[minmax(0,1fr)] grid-rows-subgrid text-center text-espresso"
              >
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
                <h3 className="px-2 pt-10 font-display text-xl leading-snug tracking-wide lg:text-2xl">
                  {title}
                </h3>
                <p className="mx-auto mt-5 max-w-xs px-2 leading-7 font-light text-espresso/75">
                  {body}
                </p>
                <p className="mt-8 pb-4 text-xs leading-6 font-light tracking-luxe uppercase">
                  <span className="text-balance underline decoration-goldenrod/60 underline-offset-[7px] transition-colors duration-300 group-hover:text-teal group-hover:decoration-goldenrod">
                    {cta}&nbsp;<span aria-hidden>→</span>
                  </span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Moving banner; the sparkle echoes the star in the crest. Screen readers get the phrases once. */}
      <div className="overflow-hidden bg-teal py-6 text-cream">
        <ul className="sr-only">
          {tickerPhrases.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <div aria-hidden className="marquee-track">
          {Array.from({ length: 4 }, () => tickerPhrases)
            .flat()
            .map((phrase, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-10 pr-10 font-display text-xl tracking-wider whitespace-nowrap italic sm:text-2xl"
              >
                {phrase}
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
            {homeReviews.map(({ quote, trip }) => (
              <li key={trip} className="reveal">
                <figure className="flex h-full flex-col border border-espresso/10 bg-white/50 p-10 text-center">
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
        </div>
      </section>

      <section aria-labelledby="guide-heading" className="bg-[#E3EDEF] px-6 py-24 text-center sm:py-28">
        <div className="reveal mx-auto max-w-3xl">
          <p className="text-[11px] font-light tracking-airy text-teal uppercase sm:text-xs">
            Free Guide
          </p>
          <h2
            id="guide-heading"
            className="mt-6 font-display text-3xl tracking-wide text-balance text-espresso sm:text-4xl"
          >
            Want to Learn More About How We Work Together?
          </h2>
          <span aria-hidden className="mx-auto my-8 block h-px w-16 bg-goldenrod" />
          <p className="mx-auto mb-10 max-w-xl text-base leading-8 font-light text-espresso/80">
            Share your name and email to receive the How We Work Together
            Services &amp; Investment Guide: each service, what&apos;s included,
            and how planning fees work.
          </p>
          <GuideDownload />
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
