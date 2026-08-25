"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/public/images/site/home-hero.jpg";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ minHeight: "clamp(60vh, 92dvh, 100dvh)" }}
    >
      <motion.div style={{ y }} className="absolute inset-0 h-[130%] -top-[15%]">
        <Image
          src={heroImg}
          alt="Toby Cunliffe wingfoiling at sunset"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(27,70,106,0.55), rgba(27,70,106,0.05) 55%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        style={{ opacity }}
        className="relative h-full min-h-[inherit] flex flex-col justify-end"
      >
        <div className="container pb-[var(--space-2xl)]">
          <p className="eyebrow text-white/85">Wingfoil Pro Coach · Vassiliki, Greece</p>
          <h1
            className="mt-[var(--space-2xs)] uppercase text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(3rem, 9vw, 7rem)",
              lineHeight: 0.95,
            }}
          >
            Wingman Toby
          </h1>
          <p className="mt-[var(--space-sm)] max-w-[38ch] text-white/90 text-[var(--text-md)]">
            UK and international wingfoil clinics with Duotone Team Rider
            Toby Cunliffe — bringing his love for the sport to riders of
            every level.
          </p>
          <div className="mt-[var(--space-lg)] flex flex-wrap gap-4">
            <Link
              href="/#locations"
              className="min-h-11 inline-flex items-center rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-6 font-medium text-[var(--color-accent-ink)] hover:opacity-90 transition-opacity duration-[var(--dur-fast)]"
            >
              Explore locations
            </Link>
            <Link
              href="/book"
              className="min-h-11 inline-flex items-center rounded-[var(--radius-sm)] border border-white/60 px-6 font-medium text-white hover:bg-white/10 transition-colors duration-[var(--dur-fast)]"
            >
              Book a clinic
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
