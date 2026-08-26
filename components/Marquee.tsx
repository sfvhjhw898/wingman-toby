const ITEMS = ["Check the wind", "Book your clinic", "Pack your wing", "Foil ready", "Chase the swell", "Fly"];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden bg-[var(--color-accent)] py-4" aria-hidden="true">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] motion-reduce:animate-none">
        {loop.map((item, i) => (
          <span
            key={i}
            className="mx-6 flex items-center gap-6 uppercase tracking-wide text-[var(--text-md)] font-medium text-[var(--color-accent-ink)] whitespace-nowrap"
          >
            {item}
            <span aria-hidden="true">✺</span>
          </span>
        ))}
      </div>
    </div>
  );
}
