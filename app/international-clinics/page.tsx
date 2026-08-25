import PlaceholderCard from "@/components/PlaceholderCard";
import SectionHead from "@/components/SectionHead";
import Link from "next/link";

export const metadata = { title: "International Clinics — Wingman Toby" };

const LOCATIONS = [
  {
    name: "Vassiliki",
    country: "Greece",
    desc: "Toby's home bay — reliable thermal wind, flat water, and Club Vass's foiling facilities on the doorstep.",
  },
  {
    name: "Jericoacoara",
    country: "Brazil",
    desc: "Warm lagoons and dune-lined coastline, with steady trade winds through the season.",
  },
  {
    name: "Tenerife",
    country: "Canary Islands",
    desc: "Volcanic coastline and consistent Atlantic wind, a short flight from the UK.",
  },
];

export default function InternationalClinicsPage() {
  return (
    <div className="container py-[var(--space-2xl)]">
      <SectionHead
        as="h1"
        eyebrow="International Clinics"
        title="Week-long trips, warm water"
        lede="Full coaching weeks abroad — consistent wind, small groups, and the same proven coaching style Toby brings to every session."
      />

      <div className="mt-[var(--space-xl)] grid grid-cols-1 sm:grid-cols-3 gap-[var(--space-lg)]">
        {LOCATIONS.map((loc) => (
          <div key={loc.name} className="flex flex-col">
            <PlaceholderCard label={`${loc.name}, ${loc.country}`} ratio="3 / 4" />
            <h3
              className="mt-[var(--space-sm)] uppercase text-[var(--text-lg)]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              {loc.name}
            </h3>
            <p className="eyebrow mt-[2px]">{loc.country}</p>
            <p className="mt-[var(--space-2xs)] text-[var(--text-sm)] text-[var(--color-ink-2)]">
              {loc.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-[var(--space-2xl)]">
        <Link
          href="/contact"
          className="inline-block min-h-11 items-center flex rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-6 text-[var(--color-accent-ink)] font-medium hover:opacity-90 transition-opacity duration-[var(--dur-fast)]"
        >
          Ask about upcoming trips
        </Link>
      </div>
    </div>
  );
}
