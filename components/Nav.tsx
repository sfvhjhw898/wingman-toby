"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#clinics", label: "Clinics" },
  { href: "/#locations", label: "Locations" },
  { href: "/#events", label: "Events" },
  { href: "/products", label: "Products" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-[var(--color-paper)]/90 backdrop-blur transition-shadow duration-[var(--dur-base)] ${
        scrolled ? "shadow-[0_1px_0_var(--color-rule)]" : ""
      }`}
    >
      <div className="container flex items-center justify-between py-3">
        <Link
          href="/"
          className="font-[var(--font-display)] uppercase tracking-tight text-[var(--text-xl)] leading-none"
          style={{ fontWeight: 800 }}
        >
          Wingman Toby
        </Link>

        <nav className="hidden sm:flex items-center gap-7 text-[var(--text-sm)]">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="uppercase tracking-wide text-[var(--color-ink-2)] hover:text-[var(--color-accent-deep)] transition-colors duration-[var(--dur-fast)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/book"
            className="hidden sm:inline-flex min-h-11 items-center rounded-[var(--radius-sm)] bg-[var(--color-accent-deep)] px-5 text-[var(--text-sm)] font-medium text-[var(--color-on-navy)] hover:opacity-90 transition-opacity duration-[var(--dur-fast)]"
          >
            Book
          </Link>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
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
      </div>

      <nav
        id="mobile-nav"
        className={`${open ? "flex" : "hidden"} sm:hidden flex-col gap-1 px-[var(--page-gutter)] pb-4`}
      >
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="min-h-11 flex items-center uppercase tracking-wide text-[var(--color-ink-2)]"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/book"
          onClick={() => setOpen(false)}
          className="mt-2 min-h-11 flex items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent-deep)] text-[var(--color-on-navy)] font-medium"
        >
          Book
        </Link>
      </nav>
    </header>
  );
}
