import Image from "next/image";
import { Waves, Target } from "lucide-react";
import BlurReveal from "@/components/motion/BlurReveal";
import Squiggle from "@/components/Squiggle";
import photo1 from "@/public/images/site/toby-about-1.jpg";

const BLOCKS = [
  {
    icon: Waves,
    title: "About Toby",
    desc: "Toby Cunliffe began water sports at age ten, on a windsurfing trip to Vassiliki — the same bay where he later discovered, and excelled in, wing foiling. He's now a Duotone Team Rider and GWA competitor across Freestyle, Surf Freestyle, and Wave Riding.",
  },
  {
    icon: Target,
    title: "Our Approach",
    desc: "Wingman Toby brings that love for the sport, and a proven coaching style, to more people than ever before — small-group clinics, video-reviewed sessions, and coaching that adapts to how you learn.",
  },
];

export default function AboutHighlights() {
  return (
    <section id="about" className="container py-[var(--space-3xl)] scroll-mt-[4.5rem]">
      <div className="text-center">
        <BlurReveal as="p" className="eyebrow">
          Who we are
        </BlurReveal>
        <BlurReveal as="h2" delay={0.08} className="relative inline-block uppercase mt-[var(--space-2xs)]">
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.6rem)" }}>
            Take your foiling further
          </span>
          <Squiggle className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-40 h-3" />
        </BlurReveal>
      </div>

      <div className="mt-[var(--space-2xl)] grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-2xl)] items-center">
        <BlurReveal delay={0.1} className="relative overflow-hidden rounded-[var(--radius-lg)]" >
          <div className="relative" style={{ aspectRatio: "4 / 5" }}>
            <Image src={photo1} alt="Toby Cunliffe wingfoiling" fill className="object-cover" sizes="(min-width: 640px) 40vw, 90vw" />
          </div>
        </BlurReveal>

        <div className="flex flex-col gap-[var(--space-xl)]">
          {BLOCKS.map((b, i) => (
            <BlurReveal key={b.title} delay={0.16 + i * 0.08}>
              <div className="flex items-center gap-3">
                <b.icon size={24} strokeWidth={1.75} color="var(--color-accent-deep)" />
                <h3 className="text-[var(--text-lg)] font-medium">{b.title}</h3>
              </div>
              <p className="mt-[var(--space-2xs)] text-[var(--text-md)] text-[var(--color-ink-2)]">{b.desc}</p>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
