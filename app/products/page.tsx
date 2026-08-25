import SectionHead from "@/components/SectionHead";
import PlaceholderCard from "@/components/PlaceholderCard";

export const metadata = { title: "Products — Wingman Toby" };

const KIT = [
  { brand: "Duotone", desc: "Wings and boards — Toby's primary team-rider kit." },
  { brand: "ION", desc: "Harnesses, wetsuits, and protection." },
  { brand: "BW", desc: "Boards for foiling and freestyle." },
];

export default function ProductsPage() {
  return (
    <div className="container py-[var(--space-2xl)]">
      <SectionHead
        as="h1"
        eyebrow="Products"
        title="Kit Toby rides"
        lede="The gear behind every clinic — sponsor kit Toby rides and recommends, with a shop coming soon."
      />

      <div className="mt-[var(--space-xl)] grid grid-cols-1 sm:grid-cols-3 gap-[var(--space-lg)]">
        {KIT.map((k) => (
          <div key={k.brand}>
            <PlaceholderCard label={k.brand} ratio="4 / 5" />
            <h3
              className="mt-[var(--space-sm)] uppercase text-[var(--text-lg)]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              {k.brand}
            </h3>
            <p className="mt-[var(--space-3xs)] text-[var(--text-sm)] text-[var(--color-ink-2)]">
              {k.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
