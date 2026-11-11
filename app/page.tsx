import Image from "next/image";
import Link from "next/link";
import advisorArmchair from "../public/advisor-armchair.jpg";
import advisorDeskWriting from "../public/advisor-desk-writing.jpg";
import advisorDisney from "../public/advisor-disney.jpg";
import advisorLaptopBed from "../public/advisor-laptop-bed.jpg";
import advisorPortrait from "../public/advisor-portrait.jpg";
import advisorStaircase from "../public/advisor-staircase.jpg";
import couplePortrait from "../public/couple-portrait.jpg";
import familyHug from "../public/family-hug.jpg";
import familyPicnic from "../public/family-picnic.jpg";
import familyStanding from "../public/family-standing.jpg";
import familyTogether from "../public/family-together.jpg";
import keyHandoff from "../public/key-handoff.jpg";
import overwaterVillas from "../public/overwater-villas.jpg";
import passportsCloseup from "../public/passports-closeup.jpg";
import passportsTote from "../public/passports-tote.jpg";
import { GuideDownload } from "./_components/guide-download";
import { SectionHeading } from "./_components/section-heading";
import { INQUIRY_HREF, planningSteps, reviews } from "./_components/site-info";
import { TierCards } from "./_components/tier-cards";

const tierPhotos = [
  { src: keyHandoff, alt: "A hotel key card handed across a front desk", focus: "50% 45%" },
  { src: familyHug, alt: "Jennifer, her husband, and their three children hugging and laughing", focus: "50% 30%" },
  { src: passportsTote, alt: "Passports in an organizer beside a Weekend Vibes tote", focus: "50% 70%" },
];

// Who the site is for. The family of five comes first: it is Jennifer's own family.
const travelers = [
  {
    title: "Families",
    image: familyTogether,
    alt: "Jennifer, her husband, and their three children laughing together on a park path",
    focus: "50% 40%",
    body: "Spring break, a summer at the parks, the first cruise. I'm a mom of three, so I plan your trip the way I plan ours.",
  },
  {
    title: "Multigenerational Journeys",
    // Stand-in from the family shoot until a three-generation photo arrives.
    image: familyPicnic,
    alt: "The family laughing together on a blanket in the grass",
    focus: "45% center",
    body: "Grandparents, parents, and grandkids on one trip, at a pace that works for every generation.",
  },
  {
    title: "Milestone Escapes",
    image: couplePortrait,
    alt: "Jennifer and her husband arm in arm in a sunlit field",
    focus: "50% 55%",
    body: "Anniversaries, milestone birthdays, and the trip you have talked about for years.",
  },
  {
    title: "Groups & Reunions",
    image: passportsCloseup,
    alt: "Four passports tucked into a travel organizer",
    focus: "50% 30%",
    body: "Family reunions and celebrations with friends, on a ship, at a resort, or on a guided tour.",
  },
];

const credentials = [
  "Credentialed Disney & Universal advisor",
  "Food-allergy & medical travel planning",
  "15+ years in management consulting",
];

const strip = [
  { src: familyStanding, alt: "The Covington family of five under an oak tree", focus: "50% 45%" },
  { src: advisorDisney, alt: "Jennifer in Minnie ears with a Disney Parks backpack", focus: "50% 30%" },
  { src: advisorDeskWriting, alt: "Jennifer writing out a trip plan beside her laptop", focus: "50% 35%" },
  { src: advisorLaptopBed, alt: "Jennifer planning a trip on her laptop", focus: "50% 30%" },
  { src: advisorArmchair, alt: "Jennifer seated in a hotel suite", focus: "50% 35%" },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative isolate flex min-h-[90vh] w-full flex-col overflow-hidden text-cream">
        <div aria-hidden className="absolute inset-0 -z-20 will-change-transform motion-safe:animate-ken-burns">
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
        <div aria-hidden className="absolute inset-0 -z-10 bg-black/30" />

        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 pt-44 pb-24 text-center">
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
            Intentional trips for families who gather to celebrate, from a first Disney visit to
            three generations on one ship. You enjoy the trip. I carry the details.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href={INQUIRY_HREF}
              className="w-56 bg-teal px-8 py-3.5 text-sm font-light tracking-widest text-white uppercase transition-colors hover:bg-goldenrod focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-goldenrod"
            >
              Start Your Trip
            </Link>
            <Link
              href="/how-we-work"
              className="w-56 border border-cream/60 px-8 py-3.5 text-sm font-light tracking-widest uppercase transition-colors hover:border-goldenrod hover:bg-goldenrod focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-goldenrod"
            >
              How We Work
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

      <section id="approach" aria-labelledby="approach-heading" className="bg-cream px-6 pt-24 pb-8 text-center sm:pt-32">
        <div className="reveal mx-auto max-w-3xl">
          <p className="text-[11px] font-light tracking-airy text-teal uppercase sm:text-xs">Our Approach</p>
          <h2
            id="approach-heading"
            className="mt-6 font-display text-3xl leading-snug tracking-wide text-balance text-espresso sm:text-[2.6rem]"
          >
            How you travel matters <span className="italic">as much as where you go.</span>
          </h2>
          <span aria-hidden className="mx-auto my-10 block h-px w-16 bg-goldenrod" />
          <p className="mx-auto max-w-2xl text-base leading-8 font-light text-espresso/80 sm:text-lg">
            I don&apos;t simply book travel. Every trip starts with a conversation about who is coming
            and how they like to travel: the toddler&apos;s nap, the grandparents&apos; pace, the
            allergy that needs a chef who listens. Then I research, refine, and handle the details, so
            your family gets to simply be together.
          </p>
        </div>
      </section>

      <section aria-labelledby="services-heading" className="bg-cream px-6 py-24 md:px-12">
        <SectionHeading id="services-heading" eyebrow="Ways to Work Together" title="Choose How Much I Carry" />
        <p className="mx-auto mt-8 mb-16 max-w-xl text-center leading-8 font-light text-espresso/75">
          Three ways to work together. Final fees are confirmed on your complimentary Discovery Call.
        </p>
        <TierCards photos={tierPhotos} cta={{ href: "/services", label: "View Details" }} />
      </section>

      <section aria-labelledby="travelers-heading" className="bg-white/50 px-6 py-24 sm:py-32 md:px-12">
        <SectionHeading id="travelers-heading" eyebrow="Who I Plan For" title="Families Who Gather to Celebrate" />
        <ul className="mx-auto mt-16 grid max-w-7xl gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {travelers.map(({ title, image, alt, focus, body }) => (
            <li key={title} className="reveal text-center">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  placeholder="blur"
                  style={{ objectPosition: focus }}
                  className="object-cover"
                />
              </div>
              <h3 className="mt-8 font-display text-2xl tracking-wide text-espresso">{title}</h3>
              <span aria-hidden className="mx-auto mt-5 block h-px w-10 bg-goldenrod" />
              <p className="mx-auto mt-5 max-w-xs leading-7 font-light text-espresso/75">{body}</p>
            </li>
          ))}
        </ul>
      </section>

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
            <p className="text-[11px] font-light tracking-airy text-teal uppercase sm:text-xs">Meet Your Advisor</p>
            <h2 id="advisor-heading" className="mt-6 font-display text-4xl tracking-wide text-espresso sm:text-5xl">
              Hello, I&apos;m <span className="italic">Jennifer</span>
            </h2>
            <span aria-hidden className="mx-auto mt-8 block h-px w-16 bg-goldenrod md:mx-0" />
            <div className="mt-8 grid gap-5 text-base leading-8 font-light text-espresso/80 sm:text-lg">
              <p>
                Before travel, I spent 15+ years in management consulting. That&apos;s where I learned to
                ask the right questions, sweat the details, and stay steady when plans change.
              </p>
              <p>
                I&apos;m also a wife, a mom of three, and a proud Disney family. My own experience
                traveling with medical needs and food allergies means every person in your group is
                looked after.
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
          <SectionHeading id="process-heading" eyebrow="How We Work Together" title="Your Client Journey" tone="dark" />
          <ol className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-cream/10">
            {planningSteps.map(({ title, body }, i) => (
              <li key={title} className="reveal text-center lg:px-8">
                <p className="font-display text-5xl text-goldenrod italic">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-6 font-display text-xl tracking-wide">{title}</h3>
                <p className="mx-auto mt-4 max-w-xs leading-7 font-light text-cream/70">{body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-16 text-center">
            <Link
              href="/how-we-work"
              className="inline-block border-b border-goldenrod/60 pb-1 text-xs font-light tracking-luxe uppercase transition-colors hover:border-goldenrod hover:text-goldenrod"
            >
              See the Full Process <span aria-hidden>→</span>
            </Link>
          </p>
        </div>
      </section>

      <section aria-labelledby="reviews-heading" className="bg-cream px-6 py-24 sm:py-32 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading id="reviews-heading" eyebrow="Kind Words" title="From the Families I've Served" />
          <ul className="mt-16 grid gap-6 md:grid-cols-2">
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
        </div>
      </section>

      <section aria-labelledby="guide-heading" className="bg-[#E3EDEF] px-6 py-24 text-center sm:py-28">
        <div className="reveal mx-auto max-w-3xl">
          <SectionHeading id="guide-heading" eyebrow="Free Guide" title="How We Work Together" />
          <p className="mx-auto mt-8 mb-10 max-w-xl text-base leading-8 font-light text-espresso/80">
            My services, what&apos;s included, how planning fees work, and what to expect from our first
            call to your welcome home. Tell me where to send it.
          </p>
          <GuideDownload />
        </div>
      </section>

      {/* Lower photo band: a glimpse of the family and the brand shoot. Two photos drop out on phones. */}
      <ul aria-label="Moments from our family and our travels" className="grid grid-cols-3 md:grid-cols-5">
        {strip.map(({ src, alt, focus }, i) => (
          <li key={alt} className={`relative aspect-square overflow-hidden ${i > 2 ? "hidden md:block" : ""}`}>
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 768px) 20vw, 33vw"
              placeholder="blur"
              style={{ objectPosition: focus }}
              className="object-cover"
            />
          </li>
        ))}
      </ul>

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
            href={INQUIRY_HREF}
            className="inline-block bg-teal px-8 py-3 text-sm font-light tracking-widest text-white uppercase transition-colors hover:bg-goldenrod"
          >
            Start Your Trip
          </Link>
        </div>
      </section>
    </main>
  );
}
