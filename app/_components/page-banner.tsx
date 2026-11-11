import Image, { type StaticImageData } from "next/image";

// Full-bleed photo strip that opens an interior page, above its PageIntro.
export function PageBanner({
  image,
  focus = "center",
  tall = false,
}: {
  image: StaticImageData;
  focus?: string;
  // For photos of people: the whole 3:2 photo on phones, a taller strip on wider screens, so faces aren't cut off.
  tall?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={`relative w-full overflow-hidden ${
        tall ? "aspect-[3/2] sm:aspect-auto sm:h-[56vh] lg:h-[64vh]" : "h-[38vh] min-h-64"
      }`}
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        placeholder="blur"
        loading="eager"
        style={{ objectPosition: focus }}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black/30" />
    </div>
  );
}
