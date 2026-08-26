"use client";

import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BlurReveal from "@/components/motion/BlurReveal";

export default function LocationHero({
  img,
  name,
  area,
  category,
}: {
  img: StaticImageData;
  name: string;
  area: string;
  category: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} className="relative w-full overflow-hidden" style={{ minHeight: "80vh" }}>
      <motion.div style={{ y }} className="absolute inset-0 h-[130%] -top-[15%]">
        <Image src={img} alt={`${name}, ${area}`} fill priority className="object-cover" sizes="100vw" />
      </motion.div>
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(0deg, rgba(27,70,106,0.65), transparent 55%)" }}
        aria-hidden="true"
      />

      <motion.div style={{ opacity }} className="relative h-full min-h-[inherit] flex items-end pb-[var(--space-lg)]">
        <div className="container">
          <BlurReveal as="p" className="eyebrow text-white/80">
            {category} Clinics
          </BlurReveal>
          <BlurReveal
            as="h1"
            delay={0.1}
            className="uppercase text-white"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(3rem, 10vw, 7rem)", lineHeight: 0.88 }}
          >
            {name}
          </BlurReveal>
          <BlurReveal delay={0.2}>
            <p className="mt-1 text-[var(--text-md)] text-white/90">{area}</p>
          </BlurReveal>
        </div>
      </motion.div>
    </section>
  );
}
