/* Placeholder image slot — swap for real photography.
   Every instance sits behind a single constant so the client can find them: */
export const PLACEHOLDER_NOTE = "Photo to come";

export default function PlaceholderCard({
  label,
  ratio = "4 / 5",
  className = "",
}: {
  label: string;
  ratio?: string;
  className?: string;
}) {
  return (
    // TODO: Replace with real location / clinic photography, target ratio matches `ratio` below.
    <div
      role="img"
      aria-label={`${label} — photograph to be added`}
      className={`relative overflow-hidden rounded-[var(--radius-md)] ${className}`}
      style={{
        aspectRatio: ratio,
        background:
          "linear-gradient(150deg, color-mix(in oklch, var(--color-paper-2) 100%, var(--color-accent) 10%), var(--color-paper-2))",
      }}
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full opacity-[0.14]"
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
      >
        <path
          d="M0 140 Q 50 110 100 140 T 200 140 V200 H0 Z"
          fill="var(--color-accent)"
        />
        <path
          d="M0 165 Q 50 145 100 165 T 200 165 V200 H0 Z"
          fill="var(--color-ink)"
          opacity="0.4"
        />
      </svg>
      <span
        className="absolute left-[var(--space-sm)] bottom-[var(--space-sm)] eyebrow"
        style={{ color: "var(--color-muted)" }}
      >
        {label} · {PLACEHOLDER_NOTE}
      </span>
    </div>
  );
}
