import Image from "next/image";
import BlurReveal from "@/components/motion/BlurReveal";
import Squiggle from "@/components/Squiggle";
import toby2 from "@/public/images/site/toby-2.jpg";
import altonwater from "@/public/images/site/coaching-altonwater.jpg";
import stithians from "@/public/images/site/loc-stithians.jpg";
import vassiliki from "@/public/images/site/vassiliki-drone.jpg";
import jericoacoara from "@/public/images/site/loc-jericoacoara.jpg";
import queenmary from "@/public/images/site/loc-queenmary.jpg";

const PHOTOS = [toby2, altonwater, stithians, vassiliki, jericoacoara, queenmary];

export default function Gallery() {
  return (
    <section className="container py-[var(--space-3xl)]">
      <div className="text-center">
        <BlurReveal as="p" className="eyebrow">
          Gallery
        </BlurReveal>
        <BlurReveal as="h2" delay={0.08} className="relative inline-block uppercase mt-[var(--space-2xs)]">
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.6rem)" }}>
            On the water
          </span>
          <Squiggle className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-40 h-3" />
        </BlurReveal>
      </div>

      <div className="mt-[var(--space-2xl)] columns-2 sm:columns-3 gap-[var(--space-md)]">
        {PHOTOS.map((src, i) => (
          <BlurReveal key={i} delay={(i % 3) * 0.08} className="mb-[var(--space-md)] break-inside-avoid">
            <div
              className="relative overflow-hidden rounded-[var(--radius-md)]"
              style={{ aspectRatio: i % 2 === 0 ? "4 / 5" : "4 / 3" }}
            >
              <Image
                src={src}
                alt="Wingman Toby coaching and riding"
                fill
                loading="lazy"
                placeholder="blur"
                className="object-cover"
                sizes="(min-width: 640px) 30vw, 50vw"
              />
            </div>
          </BlurReveal>
        ))}
      </div>
    </section>
  );
}
