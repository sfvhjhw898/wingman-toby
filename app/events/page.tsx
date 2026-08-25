import SectionHead from "@/components/SectionHead";

export const metadata = { title: "Events — Wingman Toby" };

const EVENTS = [
  {
    name: "Queen Mary",
    dates: "10th or 11th October",
    desc: "Join Club Vass Pro Coach Toby Cunliffe and Simon Winkley for a day of wingfoiling tuition and inspiration.",
    details: "12 places maximum · pre-booking required · complimentary on-water photography included.",
    price: null,
    href: "https://sw.sailia.com/?folderID=11626&sessionID=5635",
  },
  {
    name: "2XS",
    dates: "17th or 18th October 2026",
    desc: "A clinic for those wanting to progress — you'll need to be up on the foil and staying upwind.",
    details: "Please provide your kit, wing, and foil details when booking.",
    price: null,
    href: "https://www.2xs.co.uk/product/toby-cunliffe-wing-foil-clinic/",
  },
  {
    name: "Stithians",
    dates: "24th & 25th October",
    desc: "Come and improve your skills with Toby Cunliffe, Club Vass Pro Coach — covering gybes, tacks, and jumps.",
    details: null,
    price: "Entry is only £125 per person",
    href: "https://solution-cornwall.com/pages/toby-cunliffe-wingfoil-clinic",
  },
];

export default function EventsPage() {
  return (
    <div className="container py-[var(--space-2xl)]">
      <SectionHead as="h1" eyebrow="Events" title="Upcoming October Clinics" />

      <div className="mt-[var(--space-xl)] flex flex-col gap-[var(--space-lg)] max-w-[46rem]">
        {EVENTS.map((e) => (
          <div key={e.name} className="border-t border-[var(--color-rule)] pt-[var(--space-md)]">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h2
                className="uppercase text-[var(--text-lg)]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                {e.name}
              </h2>
              <span className="eyebrow">{e.dates}</span>
            </div>
            <p className="mt-[var(--space-2xs)] text-[var(--text-md)] text-[var(--color-ink-2)]">
              {e.desc}
            </p>
            {e.details ? (
              <p className="mt-[var(--space-2xs)] text-[var(--text-sm)] text-[var(--color-muted)]">
                {e.details}
              </p>
            ) : null}
            {e.price ? (
              <p className="mt-[var(--space-2xs)] text-[var(--text-sm)] font-medium">{e.price}</p>
            ) : null}
            <a
              href={e.href}
              target="_blank"
              rel="noreferrer"
              className="mt-[var(--space-sm)] inline-block min-h-11 items-center flex w-fit rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-6 text-[var(--color-accent-ink)] font-medium hover:opacity-90 transition-opacity duration-[var(--dur-fast)]"
            >
              Book or find out more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
