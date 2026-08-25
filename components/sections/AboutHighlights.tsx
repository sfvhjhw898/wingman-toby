import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import photo1 from "@/public/images/site/toby-about-1.jpg";
import photo2 from "@/public/images/site/toby-about-2.jpg";

const HIGHLIGHTS = [
  { label: "Duotone Team Rider" },
  { label: "GWA Competitor — Freestyle, Surf Freestyle, Wave" },
  { label: "UK & International Clinics" },
];

export default function AboutHighlights() {
  return (
    <section id="about" className="container py-[var(--space-3xl)] scroll-mt-[4.5rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-2xl)] items-center">
        <Reveal>
          <p className="eyebrow mb-[var(--space-2xs)]">Who we are</p>
          <h2
            className="uppercase"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}
          >
            Take your foiling further
          </h2>
          <p className="mt-[var(--space-md)] text-[var(--text-md)] text-[var(--color-ink-2)] max-w-[46ch]">
            Toby Cunliffe began water sports at age ten, on a windsurfing
            trip to Vassiliki — the same bay where he later discovered, and
            excelled in, wing foiling. Wingman Toby brings that love for the
            sport, and a proven coaching style, to more people than ever
            before.
          </p>
          <div className="mt-[var(--space-lg)] flex flex-col gap-3">
            {HIGHLIGHTS.map((h) => (
              <div key={h.label} className="flex items-center gap-3">
                <span
                  className="inline-block shrink-0 rounded-full"
                  style={{ width: 8, height: 8, background: "var(--color-accent)" }}
                  aria-hidden="true"
                />
                <span className="text-[var(--text-sm)] font-medium">{h.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="grid grid-cols-2 gap-[var(--space-sm)]">
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] mt-[var(--space-xl)]" style={{ aspectRatio: "3 / 4" }}>
            <Image src={photo1} alt="Toby Cunliffe wingfoiling" fill className="object-cover" sizes="(min-width: 640px) 22vw, 45vw" />
          </div>
          <div className="relative overflow-hidden rounded-[var(--radius-lg)]" style={{ aspectRatio: "3 / 4" }}>
            <Image src={photo2} alt="Toby Cunliffe wingfoiling" fill className="object-cover" sizes="(min-width: 640px) 22vw, 45vw" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
