import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import queenmary from "@/public/images/site/loc-queenmary.jpg";
import xs2 from "@/public/images/site/loc-2xs.jpg";
import stithians from "@/public/images/site/event-stithians-1.jpg";

const EVENTS = [
  {
    name: "Queen Mary",
    dates: "10th or 11th October",
    desc: "A day of wingfoiling tuition and inspiration with Toby Cunliffe and Simon Winkley. 12 places maximum, pre-booking required.",
    price: null,
    href: "https://sw.sailia.com/?folderID=11626&sessionID=5635",
    img: queenmary,
  },
  {
    name: "2XS",
    dates: "17th or 18th October 2026",
    desc: "For those wanting to progress — you'll need to be up on the foil and staying upwind.",
    price: null,
    href: "https://www.2xs.co.uk/product/toby-cunliffe-wing-foil-clinic/",
    img: xs2,
  },
  {
    name: "Stithians",
    dates: "24th & 25th October",
    desc: "Improve your skills covering gybes, tacks, and jumps.",
    price: "£125 per person",
    href: "https://solution-cornwall.com/pages/toby-cunliffe-wingfoil-clinic",
    img: stithians,
  },
];

export default function EventsStrip() {
  return (
    <section id="events" className="container py-[var(--space-3xl)] scroll-mt-[4.5rem]">
      <Reveal>
        <p className="eyebrow mb-[var(--space-2xs)]">Events</p>
        <h2
          className="uppercase"
          style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}
        >
          Upcoming October Clinics
        </h2>
      </Reveal>

      <div className="mt-[var(--space-xl)] grid grid-cols-1 sm:grid-cols-3 gap-[var(--space-lg)]">
        {EVENTS.map((e, i) => (
          <Reveal key={e.name} delay={i * 0.08}>
            <div className="relative overflow-hidden rounded-[var(--radius-md)]" style={{ aspectRatio: "4 / 5" }}>
              <Image src={e.img} alt={e.name} fill loading="lazy" className="object-cover" sizes="(min-width: 640px) 30vw, 100vw" />
            </div>
            <div className="mt-[var(--space-sm)] flex items-baseline justify-between gap-2">
              <h3 className="uppercase text-[var(--text-lg)]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
                {e.name}
              </h3>
              <span className="eyebrow">{e.dates}</span>
            </div>
            <p className="mt-[var(--space-3xs)] text-[var(--text-sm)] text-[var(--color-ink-2)]">{e.desc}</p>
            {e.price ? <p className="mt-[var(--space-2xs)] text-[var(--text-sm)] font-medium">{e.price}</p> : null}
            <a
              href={e.href}
              target="_blank"
              rel="noreferrer"
              className="mt-[var(--space-sm)] inline-block min-h-11 items-center flex w-fit rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-5 text-[var(--text-sm)] text-[var(--color-accent-ink)] font-medium hover:opacity-90 transition-opacity duration-[var(--dur-fast)]"
            >
              Book or find out more
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
