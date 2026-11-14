import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "../_components/page-banner";
import { PageIntro } from "../_components/page-intro";
import luxuryVilla from "../../public/luxury-villa.jpg";

export const metadata: Metadata = {
  title: "Preferred Partners",
  description: "The hotels, resorts, and cruise lines I partner with. Coming soon.",
};

export default function PartnersPage() {
  return (
    <main className="flex-1 pb-24">
      <PageBanner image={luxuryVilla} focus="60% center" />
      <PageIntro eyebrow="Preferred Partners" title="Coming Soon">
        <p>
          A closer look at the hotels, resorts, and cruise lines I partner with, and the perks they extend
          to my clients. In the meantime, the Services page shows how we can work together.
        </p>
      </PageIntro>
      <div className="text-center">
        <Link
          href="/services"
          className="inline-block border-b border-goldenrod/60 pb-1 text-xs font-light tracking-luxe uppercase transition-colors hover:border-goldenrod hover:text-teal"
        >
          Explore Services <span aria-hidden>→</span>
        </Link>
      </div>
    </main>
  );
}
