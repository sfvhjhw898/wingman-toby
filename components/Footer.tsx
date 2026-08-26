import { Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/icons";
import Marquee from "@/components/Marquee";

const SPONSORS = ["Duotone", "ION", "BW"];
const PARTNERS = ["SWM", "Cornwall Solutions", "2XS Pro Center"];

const SITE_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#clinics", label: "Clinics" },
  { href: "/#locations", label: "Locations" },
  { href: "/#events", label: "Events" },
  { href: "/book", label: "Book" },
];

export default function Footer() {
  return (
    <footer id="contact" className="mt-[var(--space-3xl)]">
      <Marquee />
      <div className="bg-[var(--color-accent-deep)] text-[var(--color-on-navy)] container py-[var(--space-2xl)]">
        <p
          className="uppercase leading-[0.95] tracking-tight"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3.6rem)",
            maxWidth: "20ch",
          }}
        >
          Got a query? Reach out.
        </p>

        <div className="mt-[var(--space-lg)] flex flex-wrap gap-x-10 gap-y-4">
          <a
            href="mailto:wingmantoby@gmail.com"
            className="inline-flex items-center gap-2 text-[var(--text-md)] hover:text-[var(--color-accent)] transition-colors duration-[var(--dur-fast)]"
          >
            <Mail size={20} strokeWidth={2} aria-hidden="true" />
            wingmantoby@gmail.com
          </a>
          <div className="flex items-center gap-5">
            <a
              href="https://www.facebook.com/toby.cunliffe.1/"
              target="_blank"
              rel="noreferrer"
              aria-label="Wingman Toby on Facebook"
              className="hover:text-[var(--color-accent)] transition-colors duration-[var(--dur-fast)]"
            >
              <FacebookIcon size={22} />
            </a>
            <a
              href="https://www.instagram.com/toby_cunliffe?igsh=Z3UwdDZ2OXN3a2Vz&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              aria-label="Wingman Toby on Instagram"
              className="hover:text-[var(--color-accent)] transition-colors duration-[var(--dur-fast)]"
            >
              <InstagramIcon size={22} />
            </a>
            <a
              href="https://youtube.com/@wingmantoby?si=NBypn3p4Vhbnw70R"
              target="_blank"
              rel="noreferrer"
              aria-label="Wingman Toby on YouTube"
              className="hover:text-[var(--color-accent)] transition-colors duration-[var(--dur-fast)]"
            >
              <YoutubeIcon size={22} />
            </a>
          </div>
        </div>

        <hr className="my-[var(--space-xl)] border-t border-white/20" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-6">
          <nav className="col-span-2 sm:col-span-1 flex flex-col gap-2">
            <span className="eyebrow mb-1 text-white/60">Site</span>
            {SITE_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[var(--text-sm)] text-white/85 hover:text-[var(--color-accent)] transition-colors duration-[var(--dur-fast)] min-h-11 flex items-center sm:min-h-0"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2">
            <span className="eyebrow mb-1 text-white/60">Sponsors</span>
            {SPONSORS.map((s) => (
              <span key={s} className="text-[var(--text-sm)] text-white/85">
                {s}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <span className="eyebrow mb-1 text-white/60">Partners</span>
            {PARTNERS.map((p) => (
              <span key={p} className="text-[var(--text-sm)] text-white/85">
                {p}
              </span>
            ))}
          </div>
        </div>

        <hr className="my-[var(--space-lg)] border-t border-white/20" />

        <p
          className="uppercase leading-[0.85] tracking-tight text-center select-none"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 11vw, 8rem)",
            color: "color-mix(in srgb, var(--color-on-navy) 18%, var(--color-accent-deep))",
          }}
          aria-hidden="true"
        >
          Wingman Toby
        </p>

        <hr className="my-[var(--space-lg)] border-t border-white/20" />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="uppercase text-[var(--text-md)]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            Wingman Toby
          </span>
          <span className="text-[var(--text-xs)] text-white/60">
            © 2026 Wingman Toby. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
