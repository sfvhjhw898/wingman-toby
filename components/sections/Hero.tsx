"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/public/images/site/home-hero.jpg";
import BlurReveal from "@/components/motion/BlurReveal";
import Squiggle from "@/components/Squiggle";

const WORD_STYLE: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontWeight: 800,
  fontSize: "clamp(3.2rem, 13vw, 10rem)",
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} className="relative w-full overflow-hidden" style={{ minHeight: "100dvh" }}>
      <motion.div style={{ y }} className="absolute inset-0 h-[130%] -top-[15%]">
        <Image src={heroImg} alt="Toby Cunliffe wingfoiling at sunset" fill priority className="object-cover" sizes="100vw" />
      </motion.div>
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(27,70,106,0.1), rgba(27,70,106,0.1) 55%, rgba(27,70,106,0.7))" }}
        aria-hidden="true"
      />

      <motion.div style={{ opacity }} className="relative h-full min-h-[inherit] flex flex-col justify-between pt-28 pb-10">
        <div className="container">
          <h1 className="uppercase text-white leading-[0.86] text-center">
            <BlurReveal as="span" delay={0} className="block" style={WORD_STYLE}>
              Wingman
            </BlurReveal>
            <BlurReveal as="span" delay={0.18} className="relative inline-block" style={WORD_STYLE}>
              Toby
              <Squiggle color="var(--color-accent)" className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-[70%] h-4" />
            </BlurReveal>
          </h1>
        </div>

        <div className="container flex flex-col items-center text-center">
          <BlurReveal delay={0.5} className="flex flex-col items-center gap-1">
            <p className="text-white font-medium text-[var(--text-md)]">
              Duotone Team Rider · GWA Competitor
            </p>
            <p className="text-white/85 max-w-[36ch] text-[var(--text-sm)]">
              UK and international wingfoil clinics — bringing Toby's love
              for the sport to riders of every level.
            </p>
          </BlurReveal>

          <BlurReveal delay={0.62} className="mt-[var(--space-md)] flex flex-wrap justify-center gap-4">
            <Link
              href="/#locations"
              className="min-h-11 inline-flex items-center rounded-full bg-[var(--color-accent)] px-7 font-medium text-[var(--color-accent-ink)] hover:opacity-90 transition-opacity duration-[var(--dur-hover)] ease-[var(--ease-hover)]"
            >
              Explore locations
            </Link>
            <Link
              href="/book"
              className="min-h-11 inline-flex items-center rounded-full border border-white/60 px-7 font-medium text-white hover:bg-white/10 transition-colors duration-[var(--dur-hover)] ease-[var(--ease-hover)]"
            >
              Book a clinic
            </Link>
          </BlurReveal>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="mt-[var(--space-md)] text-white/80"
            aria-hidden="true"
          >
            ↓
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
