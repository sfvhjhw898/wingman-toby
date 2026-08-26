"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BlurReveal from "@/components/motion/BlurReveal";
import Squiggle from "@/components/Squiggle";
import { LOCATIONS } from "@/lib/locations";

const OFFSET = ["sm:mt-0", "sm:mt-10", "sm:mt-4", "sm:mt-14", "sm:mt-2", "sm:mt-10", "sm:mt-0", "sm:mt-12", "sm:mt-4"];

export default function LocationsGrid() {
  return (
    <section id="locations" className="container py-[var(--space-3xl)] scroll-mt-[4.5rem]">
      <div className="text-center">
        <BlurReveal as="p" className="eyebrow">
          Locations
        </BlurReveal>
        <BlurReveal as="h2" delay={0.08} className="relative inline-block uppercase mt-[var(--space-2xs)]">
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.6rem)" }}>
            Where we ride
          </span>
          <Squiggle className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-40 h-3" />
        </BlurReveal>
        <BlurReveal delay={0.14} className="mt-[var(--space-sm)] text-[var(--text-md)] text-[var(--color-ink-2)] max-w-[46ch] mx-auto">
          Tap a location to see what to expect there.
        </BlurReveal>
      </div>

      <div className="mt-[var(--space-2xl)] grid grid-cols-2 sm:grid-cols-3 gap-[var(--space-lg)] items-start">
        {LOCATIONS.map((loc, i) => (
          <BlurReveal key={loc.slug} delay={(i % 3) * 0.08} className={OFFSET[i % OFFSET.length]}>
            <Link href={`/locations/${loc.slug}`} className="group block">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-rule)]"
              >
                <div className="relative" style={{ aspectRatio: "4 / 3" }}>
                  <Image
                    src={loc.img}
                    alt={`${loc.name}, ${loc.area}`}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-[var(--dur-slow)] ease-[var(--ease-out)] group-hover:scale-[1.06]"
                    sizes="(min-width: 640px) 30vw, 50vw"
                  />
                </div>
                <div className="p-4">
                  <p className="font-medium text-[var(--text-sm)]">{loc.name}</p>
                  <p className="eyebrow mt-1">{loc.area}</p>
                </div>
              </motion.div>
            </Link>
          </BlurReveal>
        ))}
      </div>
    </section>
  );
}
