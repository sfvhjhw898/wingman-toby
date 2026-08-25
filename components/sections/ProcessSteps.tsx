import Reveal from "@/components/motion/Reveal";

const STEPS = [
  { title: "Arrival & goal setting", desc: "We start by understanding where you're at and what you want out of the session." },
  { title: "Briefing & launch", desc: "Kit check, safety briefing, and a smooth launch onto the water." },
  { title: "On water session", desc: "Focused coaching time, tailored to your ability level." },
  { title: "Applied practice", desc: "Put the technique into action with guided repetition." },
  { title: "Debrief, progression & review", desc: "Review what worked, what's next, and how to keep improving." },
];

export default function ProcessSteps() {
  return (
    <section className="bg-[var(--color-accent-deep)] text-[var(--color-on-navy)] py-[var(--space-3xl)]">
      <div className="container">
        <Reveal>
          <p className="eyebrow text-white/60 mb-[var(--space-2xs)]">What to expect</p>
          <h2
            className="uppercase"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}
          >
            Train together. Progress individually.
          </h2>
        </Reveal>

        <div className="mt-[var(--space-xl)] grid grid-cols-1 sm:grid-cols-5 gap-[var(--space-lg)]">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <span className="font-[var(--font-outlier)] text-[var(--color-accent)] text-[var(--text-sm)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-[var(--space-2xs)] text-[var(--text-md)] font-medium">{s.title}</h3>
              <p className="mt-[var(--space-3xs)] text-[var(--text-sm)] text-white/75">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
