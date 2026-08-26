import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import BlurReveal from "@/components/motion/BlurReveal";
import Squiggle from "@/components/Squiggle";
import ukClinicsImg from "@/public/images/site/ukclinics-hero.jpg";
import intlClinicsImg from "@/public/images/site/intl-header.jpg";
import tobyImg from "@/public/images/site/toby-1.jpg";

const CLINICS: {
  title: string;
  desc: string;
  meta: string;
  href: string;
  img: StaticImageData;
}[] = [
  {
    title: "UK Clinics",
    desc: "Small-group coaching days at home waters — beginner-friendly, small groups, all run to the same standard Toby brings everywhere.",
    meta: "Cornwall · London · Suffolk · Rutland",
    href: "/#locations",
    img: ukClinicsImg,
  },
  {
    title: "International Clinics",
    desc: "Full coaching weeks abroad, chasing warm water and consistent wind wherever the season's best.",
    meta: "Vassiliki · Jericoacoara · Tenerife",
    href: "/#locations",
    img: intlClinicsImg,
  },
  {
    title: "1-to-1 Coaching",
    desc: "Video-reviewed private sessions, tailored to freestyle, wave, or your first flight.",
    meta: "Book direct via Sailia",
    href: "/book",
    img: tobyImg,
  },
];

export default function ClinicsGrid() {
  return (
    <section id="clinics" className="pt-[var(--space-3xl)] pb-[var(--space-lg)] scroll-mt-[4.5rem]">
      <div className="container text-center">
        <BlurReveal as="p" className="eyebrow">
          Coaching
        </BlurReveal>
        <BlurReveal as="h2" delay={0.08} className="relative inline-block uppercase mt-[var(--space-2xs)]">
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.6rem)" }}>
            Clinics &amp; coaching days
          </span>
          <Squiggle className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-40 h-3" />
        </BlurReveal>
      </div>

      <div className="mt-[var(--space-2xl)]">
        {CLINICS.map((c, i) => (
          <div
            key={c.title}
            className="sticky"
            style={{ top: `calc(4.5rem + ${i * 22}px)`, zIndex: i + 1 }}
          >
            <div className="container pb-[var(--space-lg)]">
              <div
                className="relative overflow-hidden rounded-[var(--radius-lg)] shadow-xl ring-1 ring-black/5"
                style={{ aspectRatio: "16 / 8", background: "var(--color-paper)" }}
              >
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  loading="lazy"
                  placeholder="blur"
                  className="object-cover"
                  sizes="100vw"
                />
                <div
                  className={`absolute bottom-0 ${i % 2 === 0 ? "left-0 sm:left-8" : "right-0 sm:right-8"} m-4 sm:m-0 sm:bottom-8 max-w-[24rem] rounded-[var(--radius-md)] bg-[var(--color-paper)] p-6 shadow-lg`}
                >
                  <h3
                    className="uppercase text-[var(--text-xl)]"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                  >
                    {c.title}
                  </h3>
                  <p className="mt-[var(--space-2xs)] text-[var(--text-sm)] text-[var(--color-ink-2)]">{c.desc}</p>
                  <p className="mt-[var(--space-2xs)] eyebrow">{c.meta}</p>
                  <Link
                    href={c.href}
                    className="mt-[var(--space-sm)] inline-flex min-h-11 items-center rounded-full bg-[var(--color-accent-deep)] px-5 text-[var(--text-sm)] font-medium text-[var(--color-on-navy)] hover:opacity-90 transition-opacity duration-[var(--dur-hover)] ease-[var(--ease-hover)]"
                  >
                    View →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
