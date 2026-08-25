export default function SectionHead({
  eyebrow,
  title,
  lede,
  align = "left",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div className={`max-w-[42rem] ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <p className="eyebrow mb-[var(--space-2xs)]">{eyebrow}</p> : null}
      <Tag
        className="uppercase"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
          overflowWrap: "anywhere",
        }}
      >
        {title}
      </Tag>
      {lede ? (
        <p
          className={`mt-[var(--space-sm)] text-[var(--text-md)] text-[var(--color-ink-2)] ${align === "center" ? "mx-auto" : ""}`}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
