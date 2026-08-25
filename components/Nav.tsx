"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/uk-clinics", label: "UK Clinics" },
  { href: "/international-clinics", label: "International Clinics" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[var(--color-paper)]/95 backdrop-blur">
      <div className="container flex items-center justify-between py-2 sm:block">
        <p className="hidden sm:block text-center eyebrow py-2">
          Vassiliki, Greece · Wingfoil Coaching
        </p>

        <div className="flex items-center justify-between sm:justify-center sm:relative py-2">
          <Link
            href="/"
            className="font-[var(--font-display)] font-800 uppercase tracking-tight text-[var(--text-2xl)] leading-none"
            style={{ fontWeight: 800 }}
          >
            Wingman Toby
          </Link>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((v) => !v)}
            className="sm:hidden inline-flex flex-col justify-center gap-1.5 w-11 h-11 items-center"
          >
            <span className="sr-only">Menu</span>
            <span
              className={`block h-[2px] w-6 bg-[var(--color-ink)] transition-transform duration-[var(--dur-base)] ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-[2px] w-6 bg-[var(--color-ink)] transition-opacity duration-[var(--dur-base)] ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-[2px] w-6 bg-[var(--color-ink)] transition-transform duration-[var(--dur-base)] ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>

        <nav
          id="primary-nav"
          className={`${open ? "flex" : "hidden"} sm:flex flex-col sm:flex-row flex-wrap sm:justify-center gap-x-6 gap-y-3 pb-4 sm:pb-3 text-[var(--text-sm)]`}
        >
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="uppercase tracking-wide text-[var(--color-ink-2)] hover:text-[var(--color-accent)] transition-colors duration-[var(--dur-fast)] py-1 min-h-11 sm:min-h-0 flex items-center"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="uppercase tracking-wide text-[var(--color-accent-ink)] bg-[var(--color-accent)] px-3 py-1 rounded-[var(--radius-sm)] min-h-11 sm:min-h-0 flex items-center justify-center"
          >
            Book
          </Link>
        </nav>
      </div>
      <hr className="hairline" />
      <hr className="hairline mt-[3px]" />
    </header>
  );
}
