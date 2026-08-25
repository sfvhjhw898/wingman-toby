"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { LOCATIONS } from "@/lib/locations";

export default function LocationsGrid() {
  const intl = LOCATIONS.filter((l) => l.category === "International");
  const uk = LOCATIONS.filter((l) => l.category === "UK");

  return (
    <section id="locations" className="container py-[var(--space-3xl)] scroll-mt-[4.5rem]">
      <Reveal>
        <p className="eyebrow mb-[var(--space-2xs)]">Locations</p>
        <h2
          className="uppercase"
          style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}
        >
          Where we ride
        </h2>
        <p className="mt-[var(--space-sm)] text-[var(--text-md)] text-[var(--color-ink-2)] max-w-[46ch]">
          Tap a location to see what to expect there.
        </p>
      </Reveal>

      {[
        { title: "International", items: intl },
        { title: "UK", items: uk },
      ].map((group) => (
        <div key={group.title} className="mt-[var(--space-xl)]">
          <p className="eyebrow mb-[var(--space-md)]">{group.title}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-[var(--space-md)]">
            {group.items.map((loc, i) => (
              <Reveal key={loc.slug} delay={i * 0.05}>
                <Link href={`/locations/${loc.slug}`} className="group block">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative overflow-hidden rounded-[var(--radius-md)]"
                    style={{ aspectRatio: "4 / 3" }}
                  >
                    <Image
                      src={loc.img}
                      alt={`${loc.name}, ${loc.area}`}
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-[var(--dur-slow)] ease-[var(--ease-out)] group-hover:scale-[1.06]"
                      sizes="(min-width: 640px) 30vw, 50vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(0deg, rgba(27,70,106,0.6), transparent 55%)" }}
                      aria-hidden="true"
                    />
                    <div className="absolute left-3 bottom-3 text-white">
                      <p className="font-medium text-[var(--text-sm)] leading-tight">{loc.name}</p>
                      <p className="text-[10px] uppercase tracking-wide text-white/80">{loc.area}</p>
                    </div>
                  </motion.div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
