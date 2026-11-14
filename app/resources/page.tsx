import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GuideDownload } from "../_components/guide-download";
import { PageIntro } from "../_components/page-intro";
import { SectionHeading } from "../_components/section-heading";
import { socials } from "../_components/site-info";
import passportsTote from "../../public/passports-tote.jpg";

export const metadata: Metadata = {
  title: "Resources",
  description: "Free travel planning resources: the How We Work Together guide, Travel Notes, Substack, and more.",
};

const linkClass =
  "mt-auto inline-block self-center border-b border-goldenrod/60 pb-1 text-xs font-light tracking-luxe uppercase transition-colors hover:border-goldenrod hover:text-teal";

export default function ResourcesPage() {
  const resources = [
    {
      eyebrow: "Newsletter",
      title: "Travel Notes",
      body: "Destination ideas, booking windows worth knowing, and perks reserved for my clients, in your inbox.",
      href: socials.newsletter,
      label: "Join Travel Notes",
    },
    {
      eyebrow: "Writing",
      title: "On Substack",
      body: "Longer stories from our family's travels and what I'm learning along the way.",
      href: socials.substack,
      label: "Read on Substack",
    },
    {
      eyebrow: "Everyday",
      title: "On Instagram",
      body: "Trips in progress, family moments, and the places I'm planning for right now.",
      href: socials.instagram,
      label: "Follow Along",
    },
    {
      eyebrow: "Answers",
      title: "Frequently Asked Questions",
      body: "Planning fees, timing, already-booked trips, and traveling with food allergies.",
      href: "/faq",
      label: "Read the FAQ",
    },
  ];

  return (
    <main className="flex-1 pb-24">
      <PageIntro eyebrow="Resources" title="Plan With a Little Help">
        <p>Free guides, notes, and stories for families who love to travel well.</p>
      </PageIntro>

      <section aria-labelledby="guide-heading" className="bg-[#E3EDEF] px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden">
            <Image
              src={passportsTote}
              alt="Passports in an organizer beside a Weekend Vibes tote"
              fill
              sizes="(min-width: 768px) 20rem, 100vw"
              placeholder="blur"
              style={{ objectPosition: "50% 60%" }}
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading id="guide-heading" eyebrow="Free Guide" title="How We Work Together" align="left" />
            <p className="mt-8 mb-10 text-center leading-8 font-light text-espresso/80 md:text-left">
              My services, what&apos;s included, how planning fees work, and what to expect from our first
              call to your welcome home.
            </p>
            <GuideDownload />
          </div>
        </div>
      </section>

      <ul className="mx-auto mt-20 grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {resources.map(({ eyebrow, title, body, href, label }) => {
          const external = href.startsWith("http");
          return (
            <li key={title} className="reveal flex flex-col border border-espresso/15 bg-white/40 px-8 py-10 text-center">
              <p className="text-[11px] font-light tracking-luxe text-teal uppercase">{eyebrow}</p>
              <h2 className="mt-3 font-display text-xl tracking-wide">{title}</h2>
              <span aria-hidden className="mx-auto my-5 block h-px w-10 bg-goldenrod" />
              <p className="mb-8 leading-7 font-light text-espresso/75">{body}</p>
              {!href ? (
                <p className="mt-auto text-xs font-light tracking-luxe text-espresso/50 uppercase">Coming Soon</p>
              ) : external ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {label} <span aria-hidden>↗</span>
                </a>
              ) : (
                <Link href={href} className={linkClass}>
                  {label} <span aria-hidden>→</span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
