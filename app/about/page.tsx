import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBanner } from "../_components/page-banner";
import { PageIntro } from "../_components/page-intro";
import { PhotoRotator } from "../_components/photo-rotator";
import { SectionHeading } from "../_components/section-heading";
import { INQUIRY_HREF } from "../_components/site-info";
import advisorArmchair from "../../public/advisor-armchair.jpg";
import advisorBedside from "../../public/advisor-bedside.jpg";
import advisorDisney from "../../public/advisor-disney.jpg";
import advisorElevator from "../../public/advisor-elevator.jpg";
import advisorLaptopStanding from "../../public/advisor-laptop-standing.jpg";
import couplePortrait from "../../public/couple-portrait.jpg";
import familyStanding from "../../public/family-standing.jpg";
import familyTogether from "../../public/family-together.jpg";
import passportsTote from "../../public/passports-tote.jpg";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Jennifer Covington: wife, mom of three, proud Disney family, and the travel advisor behind Catch Us on Main Street in Prosper, Texas.",
};

const highlights = [
  { value: "15+", label: "Years in management consulting" },
  { value: "Family of Five", label: "Traveling together" },
  { value: "Disney & Universal", label: "Credentialed advisor" },
];

// Real trip types she plans, grouped by the experience the family is after.
const expertise = [
  {
    title: "Multigenerational Disney",
    body: "Three generations, one park day that works for everyone, with rest built in for the littlest and the grandparents.",
  },
  {
    title: "Family Disney & Universal",
    body: "The spring break or summer trip, with dining, Lightning Lane strategy, and park routing handled before you land.",
  },
  {
    title: "Milestone Celebrations",
    body: "Milestone birthdays and guys' or girls' trips, with the dinners, experiences, and timing that make it feel like an occasion.",
  },
  {
    title: "Anniversary Escapes",
    body: "Twenty years deserves more than a reservation: the suite, the view, and quiet moments planned for two.",
  },
  {
    title: "Reunion Cruises",
    body: "A whole family on one ship, with cabins close together, shore days for every age, and one advisor tracking it all.",
  },
  {
    title: "Care for Every Traveler",
    body: "Food allergies and medical needs planned around from day one, shaped by my own family's experience.",
  },
];

// From "Where We Plan" in the guide.
const partners = [
  {
    title: "Cruises",
    body: "Royal Caribbean, Celebrity, Disney Cruise Line, Norwegian, Princess, and MSC, plus Virgin Voyages for adults-only escapes. Luxury and river cruises on request.",
  },
  {
    title: "All-Inclusive & Luxury Resorts",
    body: "Beaches, Sandals, Club Med, Hyatt Inclusive, Grand Velas, Excellence Collection, and AMResorts, including Secrets, Dreams, and Zoëtry, plus Aulani in Hawai‘i.",
  },
  {
    title: "Theme Parks",
    body: "Walt Disney World, Disneyland, Universal Orlando and Epic Universe, and Universal Hollywood.",
  },
  {
    title: "International & Guided Journeys",
    body: "Custom itineraries across Europe, the Caribbean, Mexico, and beyond, plus guided family journeys like Adventures by Disney.",
  },
  {
    title: "Luxury Stays & U.S. Getaways",
    body: "Boutique and luxury hotels for anniversaries, milestone weekends, and family escapes closer to home.",
  },
];

const expertisePhotos = [
  { src: advisorDisney, alt: "Jennifer in rose-gold Minnie ears with a Disney Parks backpack", focus: "50% 25%" },
  { src: couplePortrait, alt: "Jennifer and her husband arm in arm at golden hour", focus: "50% 55%" },
  { src: advisorElevator, alt: "Jennifer in a hotel elevator with her suitcase and tote", focus: "50% 45%" },
];

const rotating = [
  { src: familyStanding, alt: "The Covington family of five under an oak tree", focus: "50% 45%" },
  { src: advisorLaptopStanding, alt: "Jennifer holding her laptop in a bright hallway", focus: "50% 30%" },
  { src: passportsTote, alt: "Passports in an organizer beside a Weekend Vibes tote", focus: "50% 60%" },
  { src: couplePortrait, alt: "Jennifer and her husband smiling together outdoors", focus: "50% 50%" },
  { src: advisorArmchair, alt: "Jennifer seated in a hotel suite armchair", focus: "50% 35%" },
  { src: advisorDisney, alt: "Jennifer looking back over her shoulder in Minnie ears", focus: "50% 25%" },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageBanner image={familyTogether} focus="50% 22%" />
      <PageIntro eyebrow="About" title="Hello, I'm Jennifer">
        <p className="font-display text-xl leading-9 text-teal italic sm:text-2xl">
          &ldquo;I don&apos;t simply book travel. I design elevated, intentional experiences for families
          who believe how you travel matters as much as where you go.&rdquo;
        </p>
      </PageIntro>

      <section className="mx-auto grid max-w-5xl gap-px border-y border-espresso/10 bg-espresso/10 sm:grid-cols-3">
        {highlights.map(({ value, label }) => (
          <div key={label} className="bg-cream px-6 py-10 text-center">
            <p className="font-display text-3xl text-teal">{value}</p>
            <p className="mt-3 text-[11px] font-light tracking-luxe text-espresso/70 uppercase">{label}</p>
          </div>
        ))}
      </section>

      <section aria-labelledby="note-heading" className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-[1fr_1.25fr] md:gap-20">
        <div className="reveal relative mx-auto w-full max-w-sm">
          <div aria-hidden className="absolute inset-0 -translate-x-4 translate-y-4 border border-goldenrod/60" />
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={advisorBedside}
              alt="Jennifer smiling, leaning against a bed in a hotel room"
              fill
              sizes="(min-width: 768px) 24rem, 100vw"
              placeholder="blur"
              style={{ objectPosition: "50% 30%" }}
              className="object-cover"
            />
          </div>
        </div>
        <div className="reveal">
          <SectionHeading id="note-heading" eyebrow="Welcome" title="A Note from Jennifer" align="left" />
          <div className="mt-8 grid gap-5 text-center text-base leading-8 font-light text-espresso/80 sm:text-lg md:text-left">
            <p>
              I plan for families who gather to celebrate: three generations traveling together, milestone
              birthdays and anniversaries, family reunions, and couples who want every detail handled with
              care.
            </p>
            <p>
              Before travel, I spent 15+ years in management consulting. That&apos;s where I learned to
              ask the right questions, sweat the details, and stay steady when plans change. My approach
              is also shaped by my own experience navigating travel with medical needs and food allergies,
              so I know what it takes for every person in your group to feel looked after.
            </p>
            <p>
              Three generations on one ship, a reunion of forty, or a quiet anniversary for two, my goal is
              the same: you enjoy the trip, and I carry the details.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="name-heading" className="bg-teal text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-[1.25fr_1fr] md:gap-20">
          <div className="reveal">
            <SectionHeading
              id="name-heading"
              eyebrow="The Name Behind the Brand"
              title="The name came from a feeling."
              tone="dark"
              align="left"
            />
            <div className="mt-8 grid gap-5 text-center leading-8 font-light text-cream/85 md:text-left">
              <p>
                I am a Disney adult, proudly. So is my husband, and our three kids are growing up as
                Disney kids. Main Street USA is not just an entrance to a theme park for us. It is where
                the magic starts.
              </p>
              <p>
                In March 2025 I was laid off. Four days after my last day of work, I was at Disneyland,
                leaning into faith and everything that matters most. This business came from that season:
                the belief that elevated, intentional family travel is something every family deserves.
                That you can be caught on Main Street USA, or anywhere in the world, doing it up and doing
                it well, in the middle of life&apos;s highs and lows.
              </p>
              <p>
                That is what this is really about. Creating the memories our children will carry forever,
                and helping other families do exactly the same.
              </p>
            </div>
          </div>
          <div className="reveal relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden">
            <Image
              src={familyStanding}
              alt="Jennifer, her husband, and their three children together under an oak tree"
              fill
              sizes="(min-width: 768px) 24rem, 100vw"
              placeholder="blur"
              style={{ objectPosition: "50% 50%" }}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="expertise-heading" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <SectionHeading id="expertise-heading" eyebrow="Areas of Expertise" title="The Memories You're Planning For" />
        <p className="mx-auto mt-8 max-w-2xl text-center leading-8 font-light text-espresso/75">
          Every trip starts with the experience your family wants to remember. These are the journeys I
          plan most.
        </p>
        <ul className="mt-14 grid grid-cols-3 gap-2 sm:gap-6">
          {expertisePhotos.map(({ src, alt, focus }) => (
            <li key={alt} className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 640px) 30vw, 33vw"
                placeholder="blur"
                style={{ objectPosition: focus }}
                className="object-cover"
              />
            </li>
          ))}
        </ul>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map(({ title, body }) => (
            <li key={title} className="reveal border border-espresso/15 bg-white/40 px-8 py-10 text-center">
              <h3 className="font-display text-xl tracking-wide">{title}</h3>
              <span aria-hidden className="mx-auto my-5 block h-px w-10 bg-goldenrod" />
              <p className="leading-7 font-light text-espresso/75">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="where-heading" className="bg-white/50 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeading id="where-heading" eyebrow="Destinations" title="Where I Plan" />
          <dl className="mt-14 divide-y divide-espresso/10 border-y border-espresso/10">
            {partners.map(({ title, body }) => (
              <div key={title} className="grid gap-2 py-6 text-center sm:grid-cols-[14rem_1fr] sm:gap-8 sm:text-left">
                <dt className="text-[11px] leading-7 font-light tracking-luxe text-teal uppercase">{title}</dt>
                <dd className="leading-7 font-light text-espresso/80">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="moments-heading" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <SectionHeading id="moments-heading" eyebrow="Life on Main Street" title="Our Family, Our Travels" />
        <div className="mt-16">
          <PhotoRotator photos={rotating} />
        </div>
        <div className="mt-16 text-center">
          <Link
            href={INQUIRY_HREF}
            className="inline-block bg-teal px-10 py-4 text-xs font-light tracking-luxe text-cream uppercase transition-colors duration-300 hover:bg-goldenrod"
          >
            Start Your Trip
          </Link>
        </div>
      </section>
    </main>
  );
}
