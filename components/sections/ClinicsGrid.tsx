import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import ukClinicsImg from "@/public/images/site/ukclinics-hero.jpg";
import intlClinicsImg from "@/public/images/site/intl-header.jpg";
import tobyImg from "@/public/images/site/toby-1.jpg";

const CLINICS = [
  {
    title: "UK Clinics",
    desc: "Small-group coaching days at home waters across Cornwall, London, Suffolk and Rutland.",
    href: "/#locations",
    img: ukClinicsImg,
  },
  {
    title: "International Clinics",
    desc: "Week-long trips to Vassiliki, Jericoacoara and Tenerife — warm water, consistent wind.",
    href: "/#locations",
    img: intlClinicsImg,
  },
  {
    title: "1-to-1 Coaching",
    desc: "Video-reviewed private sessions, tailored to freestyle, wave, or your first flight.",
    href: "/book",
    img: tobyImg,
  },
];

export default function ClinicsGrid() {
  return (
    <section id="clinics" className="bg-[var(--color-paper-2)] py-[var(--space-3xl)] scroll-mt-[4.5rem]">
      <div className="container">
        <Reveal>
          <p className="eyebrow mb-[var(--space-2xs)]">Coaching</p>
          <h2
            className="uppercase"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}
          >
            Clinics & coaching days
          </h2>
        </Reveal>

        <div className="mt-[var(--space-xl)] grid grid-cols-1 sm:grid-cols-3 gap-[var(--space-lg)]">
          {CLINICS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <Link href={c.href} className="group block">
                <div className="relative overflow-hidden rounded-[var(--radius-lg)]" style={{ aspectRatio: "4 / 5" }}>
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-[var(--dur-slow)] ease-[var(--ease-out)] group-hover:scale-[1.04]"
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                </div>
                <h3
                  className="mt-[var(--space-sm)] uppercase text-[var(--text-lg)]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  {c.title}
                </h3>
                <p className="mt-[var(--space-3xs)] text-[var(--text-sm)] text-[var(--color-ink-2)]">
                  {c.desc}
                </p>
                <span className="mt-[var(--space-2xs)] inline-block text-[var(--text-sm)] font-medium text-[var(--color-accent-deep)] underline decoration-1 underline-offset-4 group-hover:decoration-2 transition-[text-decoration-thickness] duration-[var(--dur-fast)]">
                  View →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
