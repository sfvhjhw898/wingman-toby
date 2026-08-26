import CountUp from "@/components/motion/CountUp";
import BlurReveal from "@/components/motion/BlurReveal";

const STATS = [
  { to: 9, suffix: "", label: "Coaching locations" },
  { to: 3, suffix: "", label: "GWA disciplines raced" },
  { to: 6, suffix: "", label: "Sponsors & partners" },
];

export default function Stats() {
  return (
    <section className="container pb-[var(--space-2xl)]">
      <div className="grid grid-cols-3 gap-[var(--space-md)] max-w-[40rem] mx-auto">
        {STATS.map((s, i) => (
          <BlurReveal key={s.label} delay={i * 0.1} className="text-center">
            <p
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
              className="text-[var(--color-accent-deep)]"
            >
              <CountUp to={s.to} suffix={s.suffix} />
              <span aria-hidden="true">+</span>
            </p>
            <p className="mt-1 text-[var(--text-xs)] sm:text-[var(--text-sm)] text-[var(--color-ink-2)]">{s.label}</p>
          </BlurReveal>
        ))}
      </div>
    </section>
  );
}
