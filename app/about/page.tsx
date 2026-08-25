import PlaceholderCard from "@/components/PlaceholderCard";
import SectionHead from "@/components/SectionHead";

export const metadata = { title: "About — Wingman Toby" };

export default function AboutPage() {
  return (
    <div className="container py-[var(--space-2xl)]">
      <SectionHead
        as="h1"
        eyebrow="About"
        title="What are we all about?"
        lede="We're all about sharing our passion for foiling and helping riders take their skills to the next level."
      />

      <div className="mt-[var(--space-xl)] grid grid-cols-1 sm:grid-cols-[1fr_1.2fr] gap-[var(--space-xl)] items-start">
        <PlaceholderCard label="Toby Cunliffe" ratio="4 / 5" />

        <div className="flex flex-col gap-[var(--space-md)]">
          <p className="text-[var(--text-md)] text-[var(--color-ink-2)]">
            Toby Cunliffe is a Wingfoil Pro coach and Duotone Team Rider,
            based in Rutland, UK. He began water sports at age ten, on a
            windsurfing trip to Vassiliki — the same bay where he later
            discovered, and excelled in, wing foiling.
          </p>
          <p className="text-[var(--text-md)] text-[var(--color-ink-2)]">
            He competes in Global WingFoil Association events across
            Freestyle, Surf Freestyle, and Wave Riding disciplines, and
            brings that competition-level technique into every clinic and
            coaching day.
          </p>
          <p className="text-[var(--text-sm)] text-[var(--color-muted)]">
            Riding for Duotone · ION · BW. Supported by SWM · Cornwall
            Solutions · 2XS Pro Center.
          </p>
        </div>
      </div>
    </div>
  );
}
