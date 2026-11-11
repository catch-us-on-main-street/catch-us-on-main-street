import { tickerPhrases } from "./site-info";

// Slow moving band shown above the footer on every page. The track repeats the phrases so the loop is seamless;
// the sparkle echoes the star in the crest. Screen readers get the phrases once, as a plain list.
export function Ticker() {
  const loop = Array.from({ length: 4 }, () => tickerPhrases).flat();
  return (
    <div className="overflow-hidden bg-teal py-6 text-cream">
      <ul className="sr-only">
        {tickerPhrases.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <div aria-hidden className="marquee-track">
        {[...loop, ...loop].map((phrase, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-10 pr-10 font-display text-xl tracking-wider whitespace-nowrap italic sm:text-2xl"
          >
            {phrase}
            <span className="text-goldenrod not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
