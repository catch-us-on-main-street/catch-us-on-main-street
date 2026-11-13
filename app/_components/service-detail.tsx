import Link from "next/link";
import type { StaticImageData } from "next/image";
import { PageBanner } from "./page-banner";
import { PageIntro } from "./page-intro";
import { INQUIRY_HREF, tiers } from "./site-info";

// Detail page for one service. The words come from `tiers` in site-info.ts, so the Services
// cards and these pages never disagree.
export function ServiceDetail({
  slug,
  image,
  focus,
}: {
  slug: (typeof tiers)[number]["slug"];
  image: StaticImageData;
  focus?: string;
}) {
  const tier = tiers.find((t) => t.slug === slug)!;
  const others = tiers.filter((t) => t.slug !== slug);

  return (
    <main className="flex-1 pb-24">
      <PageBanner image={image} focus={focus} />
      <PageIntro eyebrow="Services" title={tier.name}>
        <p>{tier.profile}</p>
      </PageIntro>

      <section className="mx-auto max-w-3xl px-6">
        <div className="border-y border-espresso/10 py-10 text-center">
          <p className="text-[11px] font-light tracking-luxe text-teal uppercase">Planning Fee</p>
          <p className="mt-3 font-display text-4xl text-espresso">{tier.fee}</p>
          {tier.feeNote && (
            <p className="mt-3 text-sm font-light text-espresso/70">{tier.feeNote}</p>
          )}
        </div>

        <h2 className="mt-16 text-center font-display text-3xl tracking-wide">What&apos;s Included</h2>
        <span aria-hidden className="mx-auto mt-8 mb-10 block h-px w-16 bg-goldenrod" />
        <ul className="grid gap-4 text-base leading-7 font-light text-espresso/80 sm:text-lg">
          {tier.includes.map((item) => (
            <li key={item} className="flex gap-4">
              <span aria-hidden className="text-goldenrod">
                ✦
              </span>
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-12 border border-espresso/10 bg-white/50 px-8 py-6 text-center text-sm leading-7 font-light text-espresso/75">
          <span className="font-normal text-espresso">Good to know:</span> {tier.goodToKnow}
        </p>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={INQUIRY_HREF}
            className="bg-teal px-10 py-4 text-xs font-light tracking-luxe text-cream uppercase transition-colors duration-300 hover:bg-goldenrod"
          >
            Start Your Trip Inquiry
          </Link>
          <Link
            href="/services"
            className="border border-espresso/30 px-10 py-4 text-xs font-light tracking-luxe text-espresso uppercase transition-colors duration-300 hover:border-goldenrod hover:bg-goldenrod hover:text-cream"
          >
            Compare Services
          </Link>
        </div>
      </section>

      <nav aria-label="Other services" className="mx-auto mt-24 max-w-3xl px-6 text-center">
        <p className="text-[11px] font-light tracking-airy text-teal uppercase sm:text-xs">
          Other Ways to Work Together
        </p>
        <ul className="mt-6 flex flex-col justify-center gap-4 sm:flex-row sm:gap-12">
          {others.map(({ slug: s, name }) => (
            <li key={s}>
              <Link
                href={`/services/${s}`}
                className="inline-block border-b border-goldenrod/60 pb-1 font-display text-xl tracking-wide transition-colors hover:border-goldenrod hover:text-teal"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
