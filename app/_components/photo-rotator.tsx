"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type Photo = { src: StaticImageData; alt: string; focus?: string };

// Three tiles that slowly cross-fade through a set of photos, one tile at a time.
// Holds still for people who prefer reduced motion.
export function PhotoRotator({ photos, interval = 3500 }: { photos: Photo[]; interval?: number }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setStep((s) => s + 1), interval);
    return () => window.clearInterval(id);
  }, [interval]);

  // Tiles take turns: tile t moves on steps where step % 3 === t, jumping 3 photos ahead, so with a
  // multiple of three photos the tiles never show the same one.
  const shown = (tile: number) =>
    (tile + 3 * Math.floor((step + ((3 - tile) % 3)) / 3)) % photos.length;

  return (
    <ul className="grid grid-cols-3 gap-2 sm:gap-6">
      {[0, 1, 2].map((tile) => (
        <li key={tile} className={`relative aspect-[4/5] overflow-hidden ${tile === 1 ? "sm:-translate-y-6" : ""}`}>
          {photos.map((photo, i) => (
            <Image
              key={photo.alt}
              src={photo.src}
              alt={i === shown(tile) ? photo.alt : ""}
              aria-hidden={i !== shown(tile)}
              fill
              sizes="(min-width: 640px) 30vw, 33vw"
              placeholder="blur"
              style={{ objectPosition: photo.focus ?? "center" }}
              className={`object-cover transition-opacity duration-[1400ms] ${
                i === shown(tile) ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </li>
      ))}
    </ul>
  );
}
