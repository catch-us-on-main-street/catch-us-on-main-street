import Image from "next/image";
import Link from "next/link";
import { clientHours, CONTACT_EMAIL, footerLinks, INQUIRY_HREF, primaryNav, socials } from "./site-info";

function InstagramIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </svg>
  );
}

const iconLink =
  "flex size-10 items-center justify-center border border-cream/25 text-cream/80 transition-colors hover:border-goldenrod hover:text-goldenrod";

export function SiteFooter({ hasLogo }: { hasLogo: boolean }) {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 sm:px-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
          {hasLogo ? (
            <Image
              src="/logo-white.png"
              alt="Catch Us on Main Street Travel Co."
              width={480}
              height={480}
              className="size-32 object-contain"
            />
          ) : (
            <p className="font-display text-xl tracking-wide">Catch Us on Main Street Travel Co.</p>
          )}
          <p className="max-w-xs leading-7 font-light text-cream/75">
            Elevated, intentional family travel, designed from Prosper, Texas.
          </p>
          <div className="flex gap-3">
            <a href={socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={iconLink}>
              <InstagramIcon />
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Email Jennifer" className={iconLink}>
              <MailIcon />
            </a>
          </div>
        </div>

        <nav aria-label="Footer" className="text-center md:text-left">
          <h2 className="text-[11px] font-light tracking-luxe text-cream/60 uppercase">Explore</h2>
          <ul className="mt-6 grid gap-3 font-display text-lg">
            <li>
              <Link href="/" className="transition-colors hover:text-goldenrod">
                Home
              </Link>
            </li>
            {[...primaryNav, ...footerLinks].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="transition-colors hover:text-goldenrod">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-center md:text-left">
          <h2 className="text-[11px] font-light tracking-luxe text-cream/60 uppercase">Hours</h2>
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
          <div className="mt-8 flex flex-col items-center gap-4 md:items-start">
            <Link
              href={INQUIRY_HREF}
              className="inline-block bg-teal px-8 py-3 text-xs font-light tracking-widest text-white uppercase transition-colors hover:bg-goldenrod"
            >
              Start Your Trip
            </Link>
            <a
              href={socials.newsletter}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-goldenrod/60 pb-1 text-xs font-light tracking-luxe text-cream/80 uppercase transition-colors hover:border-goldenrod hover:text-cream"
            >
              Join Travel Notes <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </div>

      <figure className="mx-auto max-w-2xl border-t border-cream/10 px-6 py-12 text-center">
        <blockquote className="font-display text-lg leading-8 text-cream/85 italic">
          &ldquo;The heart of man plans his way, but the Lord establishes his steps.&rdquo;
        </blockquote>
        <figcaption className="mt-3 text-[11px] font-light tracking-luxe text-goldenrod uppercase">
          Proverbs 16:9
        </figcaption>
      </figure>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs font-light tracking-wide text-cream/50 sm:flex-row sm:px-10">
          <p>© 2026 Catch Us on Main Street Travel Co. All rights reserved.</p>
          <p className="flex gap-5">
            <Link href="/policies#terms" className="hover:text-cream">
              Terms
            </Link>
            <Link href="/policies#privacy" className="hover:text-cream">
              Privacy
            </Link>
            <Link href="/policies#disclosures" className="hover:text-cream">
              Disclosures
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
