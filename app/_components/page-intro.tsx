import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-20 pb-14 text-center sm:pt-28">
      <p className="mb-6 text-[11px] font-light uppercase tracking-airy text-teal sm:text-xs">
        {eyebrow}
      </p>
      <h1 className="font-display text-4xl leading-[1.15] tracking-wide sm:text-5xl">
        {title}
      </h1>
      <span aria-hidden className="mx-auto my-8 block h-px w-16 bg-goldenrod" />
      {children && (
        <div className="text-base leading-8 font-light text-espresso/80 sm:text-lg">
          {children}
        </div>
      )}
    </section>
  );
}
