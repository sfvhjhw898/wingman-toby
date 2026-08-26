import Image from "next/image";
import BlurReveal from "@/components/motion/BlurReveal";
import Squiggle from "@/components/Squiggle";
import SponsorRow from "@/components/SponsorRow";
import altonwater from "@/public/images/site/coaching-altonwater.jpg";

export default function Testimonial() {
  return (
    <section className="container py-[var(--space-3xl)]">
      <div className="text-center">
        <BlurReveal as="p" className="eyebrow">
          Testimonials
        </BlurReveal>
        <BlurReveal as="h2" delay={0.08} className="relative inline-block uppercase mt-[var(--space-2xs)]">
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.6rem)" }}>
            Riders&rsquo; words
          </span>
          <Squiggle className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-40 h-3" />
        </BlurReveal>
      </div>

      <BlurReveal delay={0.16} className="mt-[var(--space-xl)] max-w-[36rem] mx-auto">
        <div className="relative overflow-hidden rounded-[var(--radius-lg)]" style={{ minHeight: "20rem" }}>
          <Image
            src={altonwater}
            alt="Alton Water coaching day"
            fill
            loading="lazy"
            placeholder="blur"
            className="object-cover"
            sizes="36rem"
          />
          <div className="absolute inset-0" style={{ background: "rgba(27,70,106,0.72)" }} aria-hidden="true" />
          <div className="relative flex h-full min-h-[inherit] flex-col items-center justify-center text-center p-10 text-white">
            <p
              className="text-[var(--text-xl)]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              &ldquo;I gained confidence to try my next tricks with more of a
              clear idea.&rdquo;
            </p>
            <cite className="mt-[var(--space-sm)] block eyebrow not-italic text-white/70">
              Emma · Alton Water clinic
            </cite>
          </div>
        </div>
      </BlurReveal>

      <div className="mt-[var(--space-3xl)]">
        <SponsorRow />
      </div>
    </section>
  );
}
