import Image from "next/image";
import BlurReveal from "@/components/motion/BlurReveal";
import Squiggle from "@/components/Squiggle";
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
      <div className="text-center">
        <BlurReveal as="p" className="eyebrow">
          Events
        </BlurReveal>
        <BlurReveal as="h2" delay={0.08} className="relative inline-block uppercase mt-[var(--space-2xs)]">
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.6rem)" }}>
            Upcoming October Clinics
          </span>
          <Squiggle className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-40 h-3" />
        </BlurReveal>
      </div>

      <div className="mt-[var(--space-2xl)] grid grid-cols-1 sm:grid-cols-3 gap-[var(--space-lg)]">
        {EVENTS.map((e, i) => (
          <BlurReveal
            key={e.name}
            delay={i * 0.08}
            className="rounded-[var(--radius-lg)] border border-[var(--color-rule)] overflow-hidden"
          >
            <div className="relative" style={{ aspectRatio: "4 / 5" }}>
              <Image src={e.img} alt={e.name} fill loading="lazy" className="object-cover" sizes="(min-width: 640px) 30vw, 100vw" />
            </div>
            <div className="p-5">
              <div className="flex items-baseline justify-between gap-2">
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
                className="mt-[var(--space-sm)] inline-block min-h-11 items-center flex w-fit rounded-full bg-[var(--color-accent)] px-5 text-[var(--text-sm)] text-[var(--color-accent-ink)] font-medium hover:opacity-90 transition-opacity duration-[var(--dur-fast)]"
              >
                Book or find out more
              </a>
            </div>
          </BlurReveal>
        ))}
      </div>
    </section>
  );
}
