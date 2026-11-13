import type { ReactNode } from "react";

// Eyebrow, heading and a short goldenrod rule: the opening of most sections.
export function SectionHeading({
  id,
  eyebrow,
  title,
  tone = "light",
  align = "center",
  as: Tag = "h2",
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  tone?: "light" | "dark";
  align?: "center" | "left";
  as?: "h1" | "h2";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "text-center" : "text-center md:text-left"}>
      {eyebrow && (
        <p
          className={`text-[11px] font-light tracking-airy uppercase sm:text-xs ${
            tone === "dark" ? "text-cream/60" : "text-teal"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        id={id}
        className={`mt-6 font-display text-3xl leading-snug tracking-wide text-balance sm:text-4xl ${
          tone === "dark" ? "text-cream" : "text-espresso"
        }`}
      >
        {title}
      </Tag>
      <span
        aria-hidden
        className={`mt-8 block h-px w-16 bg-goldenrod ${centered ? "mx-auto" : "mx-auto md:mx-0"}`}
      />
    </div>
  );
}
