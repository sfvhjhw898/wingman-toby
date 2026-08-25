import SectionHead from "@/components/SectionHead";
import PlaceholderCard from "@/components/PlaceholderCard";
import Link from "next/link";

export const metadata = { title: "Events — Wingman Toby" };

export default function EventsPage() {
  return (
    <div className="container py-[var(--space-2xl)]">
      <SectionHead
        as="h1"
        eyebrow="Events"
        title="Competition & community"
        lede="Toby competes on the Global WingFoil Association tour across Freestyle, Surf Freestyle, and Wave Riding — and runs community sessions alongside clinics wherever he's coaching."
      />

      <div className="mt-[var(--space-xl)] grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-lg)]">
        <PlaceholderCard label="GWA competition" ratio="4 / 3" />
        <div className="flex flex-col justify-center gap-[var(--space-sm)]">
          <p className="text-[var(--text-md)] text-[var(--color-ink-2)]">
            Upcoming event dates are announced on the mailing list and
            social channels ahead of each season — join the list on the
            homepage to hear first.
          </p>
          <Link
            href="/contact"
            className="mt-[var(--space-2xs)] inline-block w-fit min-h-11 items-center flex rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-6 text-[var(--color-accent-ink)] font-medium hover:opacity-90 transition-opacity duration-[var(--dur-fast)]"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
