import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { INQUIRY_HREF, tiers } from "./site-info";

type TierPhoto = { src: StaticImageData; alt: string; focus?: string };

// The three services side by side: The Stay, The Concierge Journey (highlighted), The Itinerary.
// Each card is a CSS subgrid over the same rows, so the labels, fees, taglines and buttons line up
// across all three cards no matter how long each piece of copy is.
export function TierCards({
  photos,
  detailed = false,
  cta = { href: INQUIRY_HREF, label: "Start Your Trip" },
}: {
  photos?: TierPhoto[];
  detailed?: boolean;
  cta?: { href: string; label: string };
}) {
  const rows = (photos ? 1 : 0) + 4 + (detailed ? 2 : 0);
  return (
    <ul className="mx-auto grid max-w-6xl gap-x-6 md:grid-cols-3">
      {tiers.map((tier, i) => {
        const dark = tier.featured;
        const photo = photos?.[i];
        return (
          <li
            key={tier.name}
            style={{ gridRow: `span ${rows}` }}
            className={`reveal mb-10 grid grid-rows-subgrid border text-center last:mb-0 md:mb-0 ${
              dark ? "border-teal bg-teal text-cream" : "border-espresso/15 bg-white/50 text-espresso"
            }`}
          >
            {photo && (
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  placeholder="blur"
                  style={{ objectPosition: photo.focus ?? "center" }}
                  className="object-cover"
                />
              </div>
            )}
            <div className="px-8 pt-10">
              <h3 className="font-display text-2xl tracking-wide">{tier.name}</h3>
            </div>
            <div className="px-8 pt-6">
              <p className="font-display text-3xl">{tier.fee}</p>
              <p className={`mt-2 text-sm font-light ${dark ? "text-cream/75" : "text-espresso/60"}`}>
                {tier.feeNote}
              </p>
              <span aria-hidden className="mx-auto mt-6 block h-px w-10 bg-goldenrod" />
            </div>
            <p className={`px-8 pt-6 font-display text-lg leading-7 italic ${dark ? "text-cream" : "text-espresso/85"}`}>
              {tier.tagline}
            </p>
            {detailed && (
              <ul
                className={`mx-8 mt-6 grid content-start gap-3 border-t pt-6 text-left text-sm leading-6 font-light ${
                  dark ? "border-cream/20 text-cream/85" : "border-espresso/10 text-espresso/75"
                }`}
              >
                {tier.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="text-goldenrod">
                      ✦
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {detailed && (
              <p
                className={`mx-8 mt-6 px-4 py-3 text-left text-sm leading-6 font-light ${
                  dark ? "bg-cream/10 text-cream/90" : "bg-teal/5 text-espresso/80"
                }`}
              >
                <span className="font-normal">Who books:</span> {tier.whoBooks}
              </p>
            )}
            <div className="self-end px-4 pt-8 pb-10 lg:px-8">
              <Link
                href={cta.href}
                className={`inline-block border px-5 py-3.5 text-xs font-light tracking-luxe whitespace-nowrap lg:px-6 uppercase transition-colors duration-300 hover:border-goldenrod hover:bg-goldenrod hover:text-cream ${
                  dark ? "border-cream/70" : "border-espresso/30"
                }`}
              >
                {cta.label}
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
