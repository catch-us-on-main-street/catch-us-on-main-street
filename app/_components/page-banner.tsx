import Image, { type StaticImageData } from "next/image";

// Full-bleed photo strip that opens an interior page, above its PageIntro.
export function PageBanner({
  image,
  focus = "center",
}: {
  image: StaticImageData;
  focus?: string;
}) {
  return (
    <div aria-hidden className="relative h-[38vh] min-h-64 w-full overflow-hidden">
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
