export default function Squiggle({ className = "", color = "var(--color-accent-deep)" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 120 20"
      className={className}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M2 14 C 18 4, 30 4, 42 14 S 66 24, 78 14 S 102 4, 118 14"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}
