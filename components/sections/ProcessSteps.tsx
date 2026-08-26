import Image from "next/image";
import BlurReveal from "@/components/motion/BlurReveal";
import Squiggle from "@/components/Squiggle";
import queenmary from "@/public/images/site/loc-queenmary.jpg";
import beginners from "@/public/images/site/level-beginners.jpg";
import intermediates from "@/public/images/site/level-intermediates.jpg";
import advanced from "@/public/images/site/level-advanced.jpg";

const STEPS = [
  "Arrival & goal setting",
  "Briefing & launch",
  "On water session",
  "Applied practice",
  "Debrief, progression & review",
];

const LEVELS = [
  { level: "Beginners", focus: "Fundamentals, safety and enjoyment.", img: beginners },
  { level: "Intermediates", focus: "Refinement and progression.", img: intermediates },
  { level: "Advanced", focus: "High level performance and decision making.", img: advanced },
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

      <div className="container mt-[var(--space-2xl)]">
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-6">
          {STEPS.map((s, i) => (
            <BlurReveal key={s} delay={i * 0.06} className="flex items-center">
              <div className="flex flex-col items-center w-28 sm:w-36 text-center">
                <span
                  className="flex items-center justify-center rounded-full text-[var(--text-sm)] font-medium"
                  style={{
                    width: 40,
                    height: 40,
                    border: "2px solid var(--color-accent-deep)",
                    color: "var(--color-accent-deep)",
                  }}
                >
                  {i + 1}
                </span>
                <p className="mt-[var(--space-2xs)] text-[var(--text-sm)] font-medium">{s}</p>
              </div>
              {i < STEPS.length - 1 ? (
                <span className="hidden sm:block w-8 md:w-14 h-px bg-[var(--color-rule)] mb-6" aria-hidden="true" />
              ) : null}
            </BlurReveal>
          ))}
        </div>

        <BlurReveal delay={0.3} className="mt-[var(--space-2xl)] relative overflow-hidden rounded-[var(--radius-lg)]" style={{ aspectRatio: "21 / 9" }}>
          <Image
            src={queenmary}
            alt="Coaching session at Queen Mary"
            fill
            loading="lazy"
            placeholder="blur"
            className="object-cover"
            sizes="100vw"
          />
        </BlurReveal>
      </div>

      <div className="container mt-[var(--space-2xl)]">
        <p className="eyebrow text-center mb-[var(--space-md)]">Ability levels</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[var(--space-lg)]">
          {LEVELS.map((l, i) => (
            <BlurReveal
              key={l.level}
              delay={i * 0.08}
              className="relative overflow-hidden rounded-[var(--radius-lg)]"
              style={{ aspectRatio: "3 / 4" }}
            >
              <Image
                src={l.img}
                alt={l.level}
                fill
                loading="lazy"
                placeholder="blur"
                className="object-cover"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(0deg, rgba(27,70,106,0.75), transparent 55%)" }}
                aria-hidden="true"
              />
              <div className="absolute left-5 bottom-5 right-5 text-white">
                <h3
                  className="uppercase text-[var(--text-xl)]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                >
                  {l.level}
                </h3>
                <p className="mt-1 text-[var(--text-sm)] text-white/85">{l.focus}</p>
              </div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
