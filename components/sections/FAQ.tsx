"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import BlurReveal from "@/components/motion/BlurReveal";
import Squiggle from "@/components/Squiggle";

const FAQS = [
  {
    q: "Do I need experience to join a clinic?",
    a: "No — clinics are grouped by ability. Beginner sessions focus on fundamentals, safety and enjoyment; intermediate and advanced groups work on refinement, progression, and high-level decision making.",
  },
  {
    q: "What do I need to bring?",
    a: "For progression-level clinics you'll need your own kit, wing and foil — let Toby know your setup when you book. Beginner sessions can usually be arranged with kit provided by the host venue.",
  },
  {
    q: "How do I book?",
    a: "All clinics and coaching days are booked through Toby's booking platform. Head to the Book page for the general link, or the specific event link for that clinic.",
  },
  {
    q: "Where do clinics run?",
    a: "UK clinics run across Cornwall, London, Suffolk and Rutland. International clinics run in Vassiliki (Greece), Jericoacoara (Brazil) and Tenerife.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="container py-[var(--space-3xl)]">
      <div className="text-center">
        <BlurReveal as="p" className="eyebrow">
          FAQs
        </BlurReveal>
        <BlurReveal as="h2" delay={0.08} className="relative inline-block uppercase mt-[var(--space-2xs)]">
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.6rem)" }}>
            Got questions?
          </span>
          <Squiggle className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-40 h-3" />
        </BlurReveal>
      </div>

      <div className="mt-[var(--space-2xl)] max-w-[42rem] mx-auto flex flex-col gap-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="rounded-[var(--radius-lg)] border border-[var(--color-rule)] overflow-hidden">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 min-h-11 text-left font-medium"
              >
                {f.q}
                <span
                  className="shrink-0 inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-accent-ink)] transition-transform duration-[var(--dur-base)]"
                  style={{ width: 28, height: 28, transform: isOpen ? "rotate(45deg)" : "none" }}
                >
                  <Plus size={16} strokeWidth={2.5} />
                </span>
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-[var(--dur-base)] ease-[var(--ease-out)]"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-[var(--text-sm)] text-[var(--color-ink-2)]">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
