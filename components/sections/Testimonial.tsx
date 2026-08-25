import Reveal from "@/components/motion/Reveal";
import SponsorRow from "@/components/SponsorRow";

export default function Testimonial() {
  return (
    <section className="container py-[var(--space-3xl)]">
      <Reveal>
        <blockquote className="max-w-[42rem] mx-auto text-center">
          <p
            className="text-[var(--text-xl)]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            &ldquo;I gained confidence to try my next tricks with more of a
            clear idea.&rdquo;
          </p>
          <cite className="mt-[var(--space-2xs)] block eyebrow not-italic">
            Emma · Alton Water clinic
          </cite>
        </blockquote>
      </Reveal>

      <div className="mt-[var(--space-3xl)]">
        <SponsorRow />
      </div>
    </section>
  );
}
