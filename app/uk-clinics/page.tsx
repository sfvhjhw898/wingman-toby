import PlaceholderCard from "@/components/PlaceholderCard";
import SectionHead from "@/components/SectionHead";
import Link from "next/link";

export const metadata = { title: "UK Clinics — Wingman Toby" };

export default function UkClinicsPage() {
  return (
    <div className="container py-[var(--space-2xl)]">
      <SectionHead
        as="h1"
        eyebrow="UK Clinics"
        title="Coaching, closer to home"
        lede="One and two-day coaching days at UK wind and water venues, run in partnership with Cornwall Solutions and 2XS Pro Center — small groups, video-reviewed sessions, all levels welcome."
      />

      <div className="mt-[var(--space-xl)] grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-lg)]">
        <PlaceholderCard label="UK coaching day" ratio="4 / 3" />
        <div className="flex flex-col justify-center gap-[var(--space-sm)]">
          <p className="text-[var(--text-md)] text-[var(--color-ink-2)]">
            Whether it's your first flight or you're chasing your first
            freestyle move, UK clinics bring the same competition-level
            coaching Toby uses abroad to home waters — no travel required.
          </p>
          <p className="text-[var(--text-sm)] text-[var(--color-muted)]">
            Dates are announced through the mailing list and social
            channels ahead of each season.
          </p>
          <Link
            href="/contact"
            className="mt-[var(--space-2xs)] inline-block w-fit min-h-11 items-center flex rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-6 text-[var(--color-accent-ink)] font-medium hover:opacity-90 transition-opacity duration-[var(--dur-fast)]"
          >
            Ask about UK dates
          </Link>
        </div>
      </div>
    </div>
  );
}
