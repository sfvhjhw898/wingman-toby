import Image, { StaticImageData } from "next/image";
import { Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/icons";
import Marquee from "@/components/Marquee";

import duotone from "@/public/images/site/sponsor-duotone.webp";
import ion from "@/public/images/site/sponsor-ion.webp";
import bw from "@/public/images/site/sponsor-bw.png";
import swm from "@/public/images/site/partner-swm.png";
import cornwall from "@/public/images/site/partner-cornwall.png";
import xs2 from "@/public/images/site/partner-2xs.png";

const SPONSOR_LOGOS: { name: string; src: StaticImageData; h: number }[] = [
  { name: "Duotone", src: duotone, h: 20 },
  { name: "ION", src: ion, h: 18 },
  { name: "BW", src: bw, h: 20 },
];

const PARTNER_LOGOS: { name: string; src: StaticImageData; h: number }[] = [
  { name: "SWM", src: swm, h: 14 },
  { name: "Cornwall Solutions", src: cornwall, h: 24 },
  { name: "2XS Pro Center", src: xs2, h: 24 },
];

// DPC Tenerife has no logo asset on file — shown as text so nothing is invented.
const PARTNER_TEXT_ONLY = ["DPC Tenerife"];

const SITE_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#clinics", label: "Clinics" },
  { href: "/#locations", label: "Locations" },
  { href: "/#events", label: "Events" },
  { href: "/products", label: "Products" },
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

          <div className="flex flex-col gap-3">
            <span className="eyebrow mb-1 text-white/60">Sponsors</span>
            {SPONSOR_LOGOS.map((s) => (
              <span key={s.name} className="inline-flex w-fit items-center rounded-[var(--radius-sm)] bg-white px-3 py-2">
                <Image src={s.src} alt={s.name} height={s.h} style={{ width: "auto", height: s.h }} />
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="eyebrow mb-1 text-white/60">Partners</span>
            {PARTNER_LOGOS.map((p) => (
              <span key={p.name} className="inline-flex w-fit items-center rounded-[var(--radius-sm)] bg-white px-3 py-2">
                <Image src={p.src} alt={p.name} height={p.h} style={{ width: "auto", height: p.h }} />
              </span>
            ))}
            {PARTNER_TEXT_ONLY.map((p) => (
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
