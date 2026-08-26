import { Flag, LifeBuoy, Waves, Repeat, ClipboardCheck } from "lucide-react";
import BlurReveal from "@/components/motion/BlurReveal";
import Squiggle from "@/components/Squiggle";

const STEPS = [
  { icon: Flag, title: "Arrival & goal setting", desc: "We start by understanding where you're at and what you want out of the session." },
  { icon: LifeBuoy, title: "Briefing & launch", desc: "Kit check, safety briefing, and a smooth launch onto the water." },
  { icon: Waves, title: "On water session", desc: "Focused coaching time, tailored to your ability level." },
  { icon: Repeat, title: "Applied practice", desc: "Put the technique into action with guided repetition." },
  { icon: ClipboardCheck, title: "Debrief & review", desc: "Review what worked, what's next, and how to keep improving." },
];

export default function ProcessSteps() {
  return (
    <section className="bg-[var(--color-paper-2)] py-[var(--space-3xl)]">
      <div className="container text-center">
        <BlurReveal as="p" className="eyebrow">
          What to expect
        </BlurReveal>
        <BlurReveal as="h2" delay={0.08} className="relative inline-block uppercase mt-[var(--space-2xs)]">
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.6rem)" }}>
            Train together. Progress individually.
          </span>
          <Squiggle className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-40 h-3" />
        </BlurReveal>
      </div>

      <div className="container mt-[var(--space-2xl)] grid grid-cols-1 sm:grid-cols-3 gap-[var(--space-lg)]">
        {STEPS.map((s, i) => (
          <BlurReveal
            key={s.title}
            delay={(i % 3) * 0.08}
            className="rounded-[var(--radius-lg)] border border-[var(--color-rule)] bg-[var(--color-paper)] p-6"
          >
            <div className="flex items-start justify-between">
              <s.icon size={28} strokeWidth={1.75} color="var(--color-accent-deep)" />
              <span className="font-[var(--font-outlier)] text-[var(--color-accent)] text-[var(--text-sm)]">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-[var(--space-sm)] text-[var(--text-md)] font-medium">{s.title}</h3>
            <p className="mt-[var(--space-3xs)] text-[var(--text-sm)] text-[var(--color-ink-2)]">{s.desc}</p>
          </BlurReveal>
        ))}
      </div>
    </section>
  );
}
