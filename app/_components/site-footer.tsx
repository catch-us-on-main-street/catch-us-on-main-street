import Image from "next/image";
import Link from "next/link";
import { clientHours, primaryNav } from "./site-info";

export function SiteFooter({ hasLogo }: { hasLogo: boolean }) {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 sm:px-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
          {hasLogo ? (
            // The crest's own teal disappears on espresso, so render it in cream here.
            <Image
              src="/logo.png"
              alt="Catch Us on Main Street Travel Co."
              width={180}
              height={180}
              className="size-28 scale-[1.66] object-contain brightness-0 invert"
            />
          ) : (
            <p className="font-display text-xl tracking-wide">
              Catch Us on Main Street Travel Co.
            </p>
          )}
          <p className="max-w-xs leading-7 font-light text-cream/75">
            Elevated family travel, thoughtfully designed from Prosper, Texas.
          </p>
        </div>

        <nav aria-label="Footer" className="text-center md:text-left">
          <h2 className="text-[11px] font-light tracking-luxe text-cream/60 uppercase">
            Explore
          </h2>
          <ul className="mt-6 grid gap-3 font-display text-lg">
            <li>
              <Link href="/" className="transition-colors hover:text-goldenrod">
                Home
              </Link>
            </li>
            {primaryNav.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="transition-colors hover:text-goldenrod">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-center md:text-left">
          <h2 className="text-[11px] font-light tracking-luxe text-cream/60 uppercase">
            Hours
          </h2>
          <dl className="mt-6 grid gap-5">
            {clientHours.map(({ label, days, time }) => (
              <div key={label}>
                <dt className="font-display text-lg">{label}</dt>
                <dd className="mt-1 font-light text-cream/75">
                  {days}
                  <br />
                  {time}
                </dd>
              </div>
            ))}
          </dl>
          <Link
            href="/start-here"
            className="mt-8 inline-block bg-teal px-8 py-3 text-xs font-light tracking-widest text-white uppercase transition-colors hover:bg-goldenrod"
          >
            Start Planning
          </Link>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-7xl px-6 py-6 text-center text-xs font-light tracking-wide text-cream/50 sm:px-10">
          © 2026 Catch Us on Main Street Travel Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
