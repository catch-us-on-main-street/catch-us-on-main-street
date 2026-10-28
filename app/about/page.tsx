import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBanner } from "../_components/page-banner";
import { PageIntro } from "../_components/page-intro";
import advisorPortrait from "../../public/advisor-portrait.jpg";
import familyResort from "../../public/family-resort.jpg";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Jennifer: Prosper, TX family travel advisor with 15+ years in corporate consulting.",
};

const highlights = [
  { value: "15+", label: "Years in corporate consulting" },
  { value: "Prosper, TX", label: "Home base" },
  { value: "Family of Five", label: "Traveling together" },
];

const specialties = [
  {
    title: "Disney & Universal",
    body: "A credentialed Disney and Universal advisor who knows how to make the parks magical for every age, from first visits to seasoned fans.",
  },
  {
    title: "Medical Needs",
    body: "Careful planning for travelers with medical needs, so accommodations, logistics, and timing support everyone's well-being.",
  },
  {
    title: "Food Allergies",
    body: "Thoughtful coordination with resorts, restaurants, and cruise lines so families managing food allergies can travel with confidence.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1 pb-24">
      <PageBanner image={familyResort} focus="45% center" />
      <PageIntro eyebrow="About" title="Hello, I'm Jennifer">
        <p>
          After more than 15 years in corporate consulting, I brought the same
          attention to detail, organization, and client care to the work I love
          most: designing travel that families remember.
        </p>
      </PageIntro>

      <section className="mx-auto grid max-w-5xl gap-px border-y border-espresso/10 bg-espresso/10 sm:grid-cols-3">
        {highlights.map(({ value, label }) => (
          <div key={label} className="bg-cream px-6 py-10 text-center">
            <p className="font-display text-3xl text-teal">{value}</p>
            <p className="mt-3 text-[11px] font-light uppercase tracking-luxe text-espresso/70">
              {label}
            </p>
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-5xl items-center gap-14 px-6 py-24 md:grid-cols-[1fr_1.2fr]">
        <div className="reveal relative mx-auto w-full max-w-sm">
          <div aria-hidden className="absolute inset-0 -translate-x-4 translate-y-4 border border-goldenrod/60" />
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={advisorPortrait}
              alt="Jennifer, founder of Catch Us on Main Street Travel Co., smiling and holding a travel magazine"
              fill
              sizes="(min-width: 768px) 24rem, 100vw"
              placeholder="blur"
              style={{ objectPosition: "50% 20%" }}
              className="object-cover"
            />
          </div>
        </div>
        <div className="reveal text-center text-base leading-8 font-light text-espresso/80 sm:text-lg md:text-left">
          <p>
            From our home base in Prosper, Texas, my family of five has learned
            firsthand what makes a trip work for everyone, and what can make it
            hard. I plan every journey the way I plan our own: with care for each
            traveler&apos;s needs, room to breathe, and the details handled before
            you ever pack a bag.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-display text-3xl tracking-wide">
          Areas of Expertise
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {specialties.map(({ title, body }) => (
            <article
              key={title}
              className="reveal border border-espresso/15 bg-white/40 p-10 text-center"
            >
              <h3 className="font-display text-xl tracking-wide">{title}</h3>
              <span
                aria-hidden
                className="mx-auto my-6 block h-px w-10 bg-goldenrod"
              />
              <p className="leading-7 font-light text-espresso/75">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-16 text-center">
        <Link
          href="/start-here"
          className="inline-block bg-teal px-10 py-4 text-xs font-light uppercase tracking-luxe text-cream transition-colors duration-300 hover:bg-goldenrod"
        >
          Start Your Trip Inquiry
        </Link>
      </div>
    </main>
  );
}
