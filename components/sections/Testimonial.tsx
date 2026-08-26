"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BlurReveal from "@/components/motion/BlurReveal";
import Squiggle from "@/components/Squiggle";
import SponsorRow from "@/components/SponsorRow";
import altonwater from "@/public/images/site/coaching-altonwater.jpg";
import altonwater2 from "@/public/images/site/loc-altonwater.jpg";
import altonwater3 from "@/public/images/site/level-intermediates.jpg";

type Quote = { quote: string; name: string; place: string; img: StaticImageData };

const QUOTES: Quote[] = [
  {
    quote: "I gained confidence to try my next tricks with more of a clear idea.",
    name: "Emma",
    place: "Alton Water clinic",
    img: altonwater,
  },
  {
    quote: "I enjoyed working on my foot placement on gybe as well as getting up wind better.",
    name: "Ian",
    place: "Alton Water clinic",
    img: altonwater2,
  },
  {
    quote: "My favourite part of the clinic was Toby's enthusiasm for the sport, knowledge and teaching style.",
    name: "Tom",
    place: "Alton Water clinic",
    img: altonwater3,
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const active = QUOTES[index];
  const multi = QUOTES.length > 1;

  return (
    <section className="container py-[var(--space-3xl)]">
      <div className="text-center">
        <BlurReveal as="p" className="eyebrow">
          Testimonials
        </BlurReveal>
        <BlurReveal as="h2" delay={0.08} className="relative inline-block uppercase mt-[var(--space-2xs)]">
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.6rem)" }}>
            Riders&rsquo; words
          </span>
          <Squiggle className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-40 h-3" />
        </BlurReveal>
      </div>

      <BlurReveal delay={0.16} className="mt-[var(--space-xl)] max-w-[36rem] mx-auto">
        <div className="relative flex items-center gap-4">
          {multi ? (
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => setIndex((i) => (i - 1 + QUOTES.length) % QUOTES.length)}
              className="hidden sm:flex shrink-0 items-center justify-center rounded-full border border-[var(--color-rule)] w-11 h-11 hover:bg-[var(--color-paper-2)] transition-colors duration-[var(--dur-hover)] ease-[var(--ease-hover)]"
            >
              <ChevronLeft size={20} />
            </button>
          ) : null}

          <div className="relative overflow-hidden rounded-[var(--radius-lg)] w-full" style={{ minHeight: "20rem" }}>
            <Image
              src={active.img}
              alt={`${active.name} testimonial`}
              fill
              loading="lazy"
              placeholder="blur"
              className="object-cover"
              sizes="36rem"
            />
            <div className="absolute inset-0" style={{ background: "rgba(27,70,106,0.72)" }} aria-hidden="true" />
            <div className="relative flex h-full min-h-[inherit] flex-col items-center justify-center text-center p-10 text-white">
              <p
                key={index}
                className="text-[var(--text-xl)]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                &ldquo;{active.quote}&rdquo;
              </p>
              <cite className="mt-[var(--space-sm)] block eyebrow not-italic text-white/70">
                {active.name} · {active.place}
              </cite>
            </div>
          </div>

          {multi ? (
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setIndex((i) => (i + 1) % QUOTES.length)}
              className="hidden sm:flex shrink-0 items-center justify-center rounded-full border border-[var(--color-rule)] w-11 h-11 hover:bg-[var(--color-paper-2)] transition-colors duration-[var(--dur-hover)] ease-[var(--ease-hover)]"
            >
              <ChevronRight size={20} />
            </button>
          ) : null}
        </div>

        {multi ? (
          <div className="mt-[var(--space-md)] flex justify-center gap-2">
            {QUOTES.map((q, i) => (
              <button
                key={q.name}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className="rounded-full transition-[background-color] duration-[var(--dur-hover)]"
                style={{
                  width: 8,
                  height: 8,
                  background: i === index ? "var(--color-accent-deep)" : "var(--color-rule)",
                }}
              />
            ))}
          </div>
        ) : null}
      </BlurReveal>

      <div className="mt-[var(--space-3xl)]">
        <SponsorRow />
      </div>
    </section>
  );
}
