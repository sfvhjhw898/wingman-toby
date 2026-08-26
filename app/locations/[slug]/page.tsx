import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LOCATIONS, getLocation } from "@/lib/locations";
import LocationHero from "@/components/sections/LocationHero";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = getLocation(slug);
  return { title: loc ? `${loc.name} — Wingman Toby` : "Location — Wingman Toby" };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const related = LOCATIONS.filter((l) => l.category === loc.category && l.slug !== loc.slug);

  return (
    <div>
      <LocationHero img={loc.img} name={loc.name} area={loc.area} category={loc.category} />

      <div className="container py-[var(--space-2xl)]">
        <p className="text-[var(--text-md)] text-[var(--color-ink-2)] max-w-[52ch]">{loc.desc}</p>

        <div className="mt-[var(--space-lg)] flex flex-wrap gap-4">
          <a
            href="https://tc.sailia.com/"
            target="_blank"
            rel="noreferrer"
            className="min-h-11 inline-flex items-center rounded-[var(--radius-sm)] bg-[var(--color-accent-deep)] px-6 font-medium text-[var(--color-on-navy)] hover:opacity-90 transition-opacity duration-[var(--dur-fast)]"
          >
            Book a clinic here
          </a>
          <Link
            href="/#locations"
            className="min-h-11 inline-flex items-center rounded-[var(--radius-sm)] border border-[var(--color-rule)] px-6 font-medium hover:bg-[var(--color-paper-2)] transition-colors duration-[var(--dur-fast)]"
          >
            ← All locations
          </Link>
        </div>

        {related.length > 0 ? (
          <div className="mt-[var(--space-3xl)]">
            <p className="eyebrow mb-[var(--space-md)]">More {loc.category} locations</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-[var(--space-md)]">
              {related.map((l) => (
                <Link key={l.slug} href={`/locations/${l.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-[var(--radius-md)]" style={{ aspectRatio: "4 / 3" }}>
                    <Image
                      src={l.img}
                      alt={l.name}
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-[var(--dur-slow)] ease-[var(--ease-out)] group-hover:scale-[1.06]"
                      sizes="(min-width: 640px) 22vw, 45vw"
                    />
                  </div>
                  <p className="mt-[var(--space-2xs)] text-[var(--text-sm)] font-medium">{l.name}</p>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
