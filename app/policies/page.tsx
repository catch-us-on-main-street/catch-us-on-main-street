import type { Metadata } from "next";
import { PageIntro } from "../_components/page-intro";
import { CONTACT_EMAIL } from "../_components/site-info";
import { TisPolicy, TisPolicyLoader } from "../_components/tis-policy";

export const metadata: Metadata = {
  title: "Policies",
  description: "Client terms and conditions, privacy policies, disclosures, and seller of travel information.",
};

// Codes from Travel Industry Solutions. The California Privacy Policy and the Ad + Affiliate
// Disclosures were sent with the same code (F232TSXWPUQhHC); a page can only show one copy of a code,
// so the disclosures section waits for its own code.
const policies = [
  { id: "terms", title: "Client Terms & Conditions", code: "sSEmTSXWPREW3M" },
  { id: "privacy", title: "Privacy Policy", code: "aA3eTSXWPTJXIf" },
  { id: "california-privacy", title: "California Privacy Policy", code: "F232TSXWPUQhHC" },
  { id: "disclosures", title: "Ad & Affiliate Disclosures", code: "" },
];

export default function PoliciesPage() {
  return (
    <main className="flex-1 pb-24">
      <TisPolicyLoader />
      <PageIntro eyebrow="Policies" title="Terms, Privacy & Disclosures" />

      <nav aria-label="Policies" className="mx-auto max-w-4xl px-6">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 border-y border-espresso/10 py-5 text-[11px] font-light tracking-luxe uppercase">
          {[...policies, { id: "seller-of-travel", title: "Seller of Travel" }].map(({ id, title }) => (
            <li key={id}>
              <a href={`#${id}`} className="transition-colors hover:text-teal">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto mt-16 grid max-w-3xl gap-20 px-6">
        {policies.map(({ id, title, code }) => (
          <section key={id} id={id} aria-labelledby={`${id}-heading`} className="min-w-0 scroll-mt-8">
            <h2 id={`${id}-heading`} className="font-display text-2xl tracking-wide text-balance sm:text-3xl">
              {title}
            </h2>
            <span aria-hidden className="mt-6 mb-8 block h-px w-16 bg-goldenrod" />
            <div className="leading-7 font-light [overflow-wrap:anywhere] text-espresso/80 [&_*]:max-w-full [&_a]:text-teal [&_a]:underline [&_h1]:mt-6 [&_h1]:font-display [&_h1]:text-xl [&_h2]:mt-6 [&_h2]:font-display [&_h2]:text-xl [&_h3]:mt-5 [&_h3]:font-display [&_h3]:text-lg [&_li]:mt-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
              {code ? (
                <TisPolicy code={code} />
              ) : (
                <p>Our ad and affiliate disclosures will appear here shortly.</p>
              )}
            </div>
          </section>
        ))}

        <section id="seller-of-travel" aria-labelledby="sot-heading" className="scroll-mt-8">
          <h2 id="sot-heading" className="font-display text-2xl tracking-wide sm:text-3xl">
            Seller of Travel
          </h2>
          <span aria-hidden className="mt-6 mb-8 block h-px w-16 bg-goldenrod" />
          {/* TODO: add the host agency's Seller of Travel registration numbers (e.g. California, Florida, Washington). */}
          <p className="leading-7 font-light text-espresso/80">
            Seller of Travel registration details will be listed here. For questions in the meantime,
            email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-teal underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
