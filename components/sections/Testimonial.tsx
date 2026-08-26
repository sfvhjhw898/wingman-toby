import BlurReveal from "@/components/motion/BlurReveal";
import Squiggle from "@/components/Squiggle";
import SponsorRow from "@/components/SponsorRow";

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

      <BlurReveal delay={0.16} className="mt-[var(--space-xl)] max-w-[36rem] mx-auto rounded-[var(--radius-lg)] border border-[var(--color-rule)] p-8 text-center">
        <p
          className="text-[var(--text-xl)]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
        >
          &ldquo;I gained confidence to try my next tricks with more of a
          clear idea.&rdquo;
        </p>
        <cite className="mt-[var(--space-sm)] block eyebrow not-italic">
          Emma · Alton Water clinic
        </cite>
      </BlurReveal>

      <div className="mt-[var(--space-3xl)]">
        <SponsorRow />
      </div>
    </section>
  );
}
