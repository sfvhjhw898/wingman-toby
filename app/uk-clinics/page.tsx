import SectionHead from "@/components/SectionHead";

export const metadata = { title: "UK Clinics — Wingman Toby" };

const LOCATIONS = [
  { name: "Stithians Lake", area: "South Cornwall" },
  { name: "Daymer Bay", area: "North Cornwall" },
  { name: "Queen Mary", area: "West London" },
  { name: "Alton Water", area: "Suffolk" },
  { name: "2XS", area: "West Wittering" },
  { name: "Rutland", area: "Rutland Water" },
];

const STRUCTURE = [
  "Arrival and goal setting",
  "Briefing and launch",
  "On water session",
  "Applied practice",
  "Debrief, progression & review",
];

const LEVELS = [
  { level: "Beginners", focus: "Fundamentals, safety and enjoyment." },
  { level: "Intermediates", focus: "Refinement and progression." },
  { level: "Advanced", focus: "High level performance and decision making." },
];

export default function UkClinicsPage() {
  return (
    <div className="container py-[var(--space-2xl)]">
      <SectionHead
        as="h1"
        eyebrow="UK Clinics"
        title="Train together. Progress individually."
        lede="Small-group coaching experiences designed to fast-track improvement while keeping things social, focused and motivating."
      />

      <div className="mt-[var(--space-xl)] flex flex-wrap gap-x-8 gap-y-3">
        {LOCATIONS.map((l) => (
          <div key={l.name} className="text-[var(--text-sm)]">
            <span className="font-medium">{l.name}</span>{" "}
            <span className="text-[var(--color-muted)]">— {l.area}</span>
          </div>
        ))}
      </div>

      <div className="mt-[var(--space-2xl)] grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-xl)]">
        <div>
          <p className="eyebrow mb-[var(--space-2xs)]">What to expect</p>
          <ol className="flex flex-col gap-2">
            {STRUCTURE.map((step, i) => (
              <li key={step} className="flex gap-3 text-[var(--text-md)] text-[var(--color-ink-2)]">
                <span className="font-[var(--font-outlier)] text-[var(--color-muted)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-[var(--space-sm)] text-[var(--text-sm)] text-[var(--color-muted)]">
            Typically, 2–5 days.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-[var(--space-2xs)]">Ability levels</p>
          <div className="flex flex-col gap-3">
            {LEVELS.map((l) => (
              <div key={l.level}>
                <h3
                  className="uppercase text-[var(--text-md)]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  {l.level}
                </h3>
                <p className="text-[var(--text-sm)] text-[var(--color-ink-2)]">{l.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <blockquote className="mt-[var(--space-2xl)] max-w-[42rem] border-l-2 border-[var(--color-accent)] pl-[var(--space-md)]">
        <p className="text-[var(--text-lg)] text-[var(--color-ink-2)]">
          &ldquo;I gained confidence to try my next tricks with more of a clear idea.&rdquo;
        </p>
        <cite className="mt-[var(--space-2xs)] block eyebrow not-italic">
          Emma · Alton Water clinic
        </cite>
      </blockquote>
    </div>
  );
}
