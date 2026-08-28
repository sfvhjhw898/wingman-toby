"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BlurReveal from "@/components/motion/BlurReveal";
import Squiggle from "@/components/Squiggle";
import { LOCATIONS, type Location } from "@/lib/locations";

const COL_RANGES: [number, number][] = [
  [-50, 30],
  [40, -50],
  [-30, 40],
];

function toColumns(items: Location[]) {
  const cols: Location[][] = [[], [], []];
  items.forEach((item, i) => cols[i % 3].push(item));
  return cols;
}

function LocationCard({ loc }: { loc: Location }) {
  return (
    <Link href={`/locations/${loc.slug}`} className="group block">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.18, ease: [0.2, 0, 0, 1] }}
        className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-rule)] bg-[var(--color-paper)]"
      >
        <div className="relative" style={{ aspectRatio: "4 / 5" }}>
          <Image
            src={loc.img}
            alt={`${loc.name}, ${loc.area}`}
            fill
            loading="lazy"
            placeholder="blur"
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
  );
}

function ParallaxColumns({ items }: { items: Location[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const y0 = useTransform(scrollYProgress, [0, 1], COL_RANGES[0]);
  const y1 = useTransform(scrollYProgress, [0, 1], COL_RANGES[1]);
  const y2 = useTransform(scrollYProgress, [0, 1], COL_RANGES[2]);
  const columnY = [y0, y1, y2];

  const columns = toColumns(items);

  return (
    <div ref={ref} className="grid grid-cols-3 gap-[var(--space-xs)] sm:gap-[var(--space-lg)]">
      {columns.map((col, ci) =>
        col.length ? (
          <motion.div key={ci} style={{ y: columnY[ci] }} className="flex flex-col gap-[var(--space-lg)]">
            {col.map((loc, i) => (
              <BlurReveal key={loc.slug} delay={i * 0.06}>
                <LocationCard loc={loc} />
              </BlurReveal>
            ))}
          </motion.div>
        ) : null
      )}
    </div>
  );
}

export default function LocationsGrid() {
  const intl = LOCATIONS.filter((l) => l.category === "International");
  const uk = LOCATIONS.filter((l) => l.category === "UK");

  return (
    <section id="locations" className="container py-[var(--space-3xl)] overflow-hidden scroll-mt-[4.5rem]">
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

      {[
        { title: "International", items: intl },
        { title: "UK", items: uk },
      ].map((group) => (
        <div key={group.title} className="mt-[var(--space-2xl)]">
          <p className="eyebrow mb-[var(--space-lg)]">{group.title}</p>
          <ParallaxColumns items={group.items} />
        </div>
      ))}
    </section>
  );
}
