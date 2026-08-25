import SectionHead from "@/components/SectionHead";
import Link from "next/link";

export const metadata = { title: "Book — Wingman Toby" };

export default function BookPage() {
  return (
    <div className="container py-[var(--space-2xl)]">
      <SectionHead
        as="h1"
        eyebrow="Book"
        title="Book a clinic or coaching day"
        lede="Tell Toby which clinic, location, or coaching day you're after and he'll get back to you with availability."
      />

      <div className="mt-[var(--space-xl)] flex flex-col gap-[var(--space-sm)] max-w-[42rem]">
        <p className="text-[var(--text-md)] text-[var(--color-ink-2)]">
          Choose UK Clinics, International Clinics, or a private 1-to-1
          session, then reach out with your preferred dates.
        </p>
        <Link
          href="/contact"
          className="mt-[var(--space-2xs)] inline-block w-fit min-h-11 items-center flex rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-6 text-[var(--color-accent-ink)] font-medium hover:opacity-90 transition-opacity duration-[var(--dur-fast)]"
        >
          Start a booking enquiry
        </Link>
      </div>
    </div>
  );
}
