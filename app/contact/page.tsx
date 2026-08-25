import SectionHead from "@/components/SectionHead";
import ContactForm from "@/components/ContactForm";
import { Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/icons";

export const metadata = { title: "Contact — Wingman Toby" };

export default function ContactPage() {
  return (
    <div className="container py-[var(--space-2xl)]">
      <SectionHead as="h1" eyebrow="Contact" title="Let's talk" />

      <div className="mt-[var(--space-xl)] grid grid-cols-1 sm:grid-cols-[1fr_1.2fr] gap-[var(--space-xl)]">
        <div className="flex flex-col gap-[var(--space-md)]">
          <a
            href="mailto:wingmantoby@gmail.com"
            className="inline-flex items-center gap-2 text-[var(--text-md)] hover:text-[var(--color-accent)] transition-colors duration-[var(--dur-fast)]"
          >
            <Mail size={20} aria-hidden="true" />
            wingmantoby@gmail.com
          </a>
          <div className="flex items-center gap-5">
            <a
              href="https://www.facebook.com/toby.cunliffe.1/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-[var(--color-accent)] transition-colors duration-[var(--dur-fast)]"
            >
              <FacebookIcon size={22} aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/toby_cunliffe?igsh=Z3UwdDZ2OXN3a2Vz&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-[var(--color-accent)] transition-colors duration-[var(--dur-fast)]"
            >
              <InstagramIcon size={22} aria-hidden="true" />
            </a>
            <a
              href="https://youtube.com/@wingmantoby?si=NBypn3p4Vhbnw70R"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="hover:text-[var(--color-accent)] transition-colors duration-[var(--dur-fast)]"
            >
              <YoutubeIcon size={22} aria-hidden="true" />
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
