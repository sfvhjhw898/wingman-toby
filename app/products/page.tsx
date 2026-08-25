import SectionHead from "@/components/SectionHead";

export const metadata = { title: "Products — Wingman Toby" };

const PRODUCTS = [
  {
    name: "Air Bank",
    code: "Toby5",
    href: "https://www.airbankpump.com/products/airbank-pulse-pro-rechargeable-pump?_pos=1&_sid=4a95ab3e5&_ss=r&ref=Toby",
  },
  {
    name: "Bangproof",
    code: "TOBYC10",
    href: "https://bangproof.com/collections/bangproof-collections?sca_ref=8276355.EC4J45wYg1a8keM",
  },
  {
    name: "A3D Sport",
    code: "Toby10",
    href: "https://a3dsport.fr/en/collections/frontpage",
  },
  {
    name: "FBC Waist Leash V2",
    code: null,
    href: "https://shop.simonwinkley.com/products/fbc-wingfoil-waist-leash-v2",
    comingSoon: true,
  },
  {
    name: "Tricktionary Straps",
    code: null,
    href: "https://www.tricktionary.com/en/trickstrap-set-v3-x3-freestyle-wave-7",
    comingSoon: true,
  },
  {
    name: "Wing man Shin Guards",
    code: null,
    href: null,
    comingSoon: true,
  },
];

export default function ProductsPage() {
  return (
    <div className="container py-[var(--space-2xl)]">
      <SectionHead
        as="h1"
        eyebrow="Products"
        title="Products"
        lede="Below are the products I use every day and highly recommend."
      />

      <div className="mt-[var(--space-xl)] grid grid-cols-1 sm:grid-cols-2 gap-x-[var(--space-xl)] gap-y-[var(--space-lg)] max-w-[52rem]">
        {PRODUCTS.map((p) => (
          <div key={p.name} className="border-t border-[var(--color-rule)] pt-[var(--space-sm)]">
            <h2
              className="uppercase text-[var(--text-lg)]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              {p.name}
            </h2>
            {p.comingSoon ? (
              <p className="eyebrow mt-1">Coming soon</p>
            ) : (
              <p className="mt-1 text-[var(--text-sm)] text-[var(--color-ink-2)]">
                Discount code: <span className="font-medium text-[var(--color-ink)]">{p.code}</span>
              </p>
            )}
            {p.href ? (
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="mt-[var(--space-2xs)] inline-block text-[var(--text-sm)] underline decoration-1 underline-offset-4 hover:decoration-2 transition-[text-decoration-thickness] duration-[var(--dur-fast)]"
              >
                Shop →
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
