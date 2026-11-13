"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
];

export function SiteHeader({ hasLogo }: { hasLogo: boolean }) {
  const pathname = usePathname();
  const [logoFailed, setLogoFailed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // On the homepage the header floats, semi-transparent, over the hero image; elsewhere it sits on cream.
  // No backdrop blur: it would re-blur every frame of the hero's Ken Burns animation.
  const overHero = pathname === "/";

  // While the phone menu is open: Escape closes it and the page behind doesn't scroll.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={
        overHero
          ? "absolute inset-x-0 top-0 z-10 border-b border-cream/15 bg-black/20 text-cream"
          : "border-b border-espresso/10 bg-cream text-espresso"
      }
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-5 px-6 py-5 sm:px-10">
        <Link href="/" className="font-display text-lg tracking-[0.15em]">
          {hasLogo && !logoFailed ? (
            // Over the homepage photo the crest is white. logo-white.png is cropped tight to the crest;
            // logo.png is a square canvas with the crest filling only ~58% of it, so it scales up to match.
            <Image
              src={overHero ? "/logo-white.png" : "/logo.png"}
              alt="Catch Us on Main Street Travel Co."
              width={180}
              height={180}
              preload
              onError={() => setLogoFailed(true)}
              // onError can't fire for a load that failed before hydration, so check once on mount too.
              ref={(img) => {
                if (img?.complete && img.naturalWidth === 0) setLogoFailed(true);
              }}
              className={
                overHero
                  ? "size-12 object-contain drop-shadow-[0_1px_6px_rgb(0_0_0/0.35)]"
                  : "h-12 w-auto scale-[1.66] object-contain"
              }
            />
          ) : (
            <span className="font-display">Catch Us on Main Street Travel Co.</span>
          )}
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-10 text-xs font-light tracking-luxe uppercase">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={pathname === href ? "page" : undefined}
                  className="opacity-85 transition-opacity duration-300 hover:opacity-100 aria-[current=page]:opacity-100 aria-[current=page]:underline aria-[current=page]:decoration-goldenrod aria-[current=page]:underline-offset-8"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/start-here"
                aria-current={pathname === "/start-here" ? "page" : undefined}
                className={`border px-4 py-2.5 transition-colors duration-300 hover:border-goldenrod hover:bg-goldenrod hover:text-cream ${
                  overHero ? "border-cream/60" : "border-espresso/30"
                }`}
              >
                Start Your Trip Inquiry
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-3 py-2 text-[11px] font-light tracking-luxe uppercase lg:hidden"
        >
          Menu
          <span aria-hidden className="flex w-6 flex-col gap-1.5">
            <span className="h-px w-full bg-current" />
            <span className="h-px w-full bg-current" />
          </span>
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex flex-col bg-espresso px-6 py-5 text-cream lg:hidden"
        >
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              autoFocus
              className="py-2 text-[11px] font-light tracking-luxe uppercase"
            >
              Close <span aria-hidden>✕</span>
            </button>
          </div>
          <nav aria-label="Mobile" className="flex flex-1 flex-col items-center justify-center">
            <ul className="grid gap-8 text-center font-display text-3xl tracking-wide">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={pathname === href ? "page" : undefined}
                    className="aria-[current=page]:italic aria-[current=page]:text-goldenrod"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <span aria-hidden className="my-12 block h-px w-16 bg-goldenrod" />
            <Link
              href="/start-here"
              onClick={() => setMenuOpen(false)}
              className="bg-teal px-8 py-4 text-xs font-light tracking-widest text-white uppercase"
            >
              Start Your Trip Inquiry
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
