import Image from "next/image";
import airbank from "@/public/images/site/product-airbank.png";
import bangproof from "@/public/images/site/product-bangproof.jpg";
import a3d from "@/public/images/site/product-a3d.webp";
import fbcLeash from "@/public/images/site/product-fbc-leash.webp";
import tricktionary from "@/public/images/site/product-tricktionary.jpg";
import shinguards from "@/public/images/site/product-shinguards.png";

export const metadata = { title: "Book & Shop — Wingman Toby" };

const PRODUCTS = [
  { name: "Air Bank", code: "Toby5", href: "https://www.airbankpump.com/products/airbank-pulse-pro-rechargeable-pump?_pos=1&_sid=4a95ab3e5&_ss=r&ref=Toby", img: airbank },
  { name: "Bangproof", code: "TOBYC10", href: "https://bangproof.com/collections/bangproof-collections?sca_ref=8276355.EC4J45wYg1a8keM", img: bangproof },
  { name: "A3D Sport", code: "Toby10", href: "https://a3dsport.fr/en/collections/frontpage", img: a3d },
  { name: "FBC Waist Leash V2", code: null, href: "https://shop.simonwinkley.com/products/fbc-wingfoil-waist-leash-v2", comingSoon: true, img: fbcLeash },
  { name: "Tricktionary Straps", code: null, href: "https://www.tricktionary.com/en/trickstrap-set-v3-x3-freestyle-wave-7", comingSoon: true, img: tricktionary },
  { name: "Wing man Shin Guards", code: null, href: null, comingSoon: true, img: shinguards },
];

export default function BookPage() {
  return (
    <div>
      <section className="bg-[var(--color-accent-deep)] text-[var(--color-on-navy)] py-[var(--space-3xl)]">
        <div className="container">
          <p className="eyebrow text-white/60 mb-[var(--space-2xs)]">Book</p>
          <h1
            className="uppercase"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Book a clinic or coaching day
          </h1>
          <p className="mt-[var(--space-sm)] text-[var(--text-md)] text-white/85 max-w-[46ch]">
            All bookings run through Toby's booking platform — pick your
            clinic, choose a date, and you're set.
          </p>
          <a
            href="https://tc.sailia.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-[var(--space-lg)] inline-flex min-h-11 items-center rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-6 font-medium text-[var(--color-accent-ink)] hover:opacity-90 transition-opacity duration-[var(--dur-fast)]"
          >
            Book now on Sailia →
          </a>
        </div>
      </section>

      <div className="container py-[var(--space-2xl)]">
        <p className="eyebrow mb-[var(--space-md)]">Specific clinic links</p>
        <div className="flex flex-col gap-3 max-w-[36rem]">
          <a href="https://sw.sailia.com/?folderID=11626&sessionID=5635" target="_blank" rel="noreferrer" className="flex items-center justify-between border-b border-[var(--color-rule)] py-3 hover:text-[var(--color-accent-deep)]">
            <span className="font-medium">Queen Mary — 10th or 11th October</span>
            <span>→</span>
          </a>
          <a href="https://www.2xs.co.uk/product/toby-cunliffe-wing-foil-clinic/" target="_blank" rel="noreferrer" className="flex items-center justify-between border-b border-[var(--color-rule)] py-3 hover:text-[var(--color-accent-deep)]">
            <span className="font-medium">2XS — 17th or 18th October 2026</span>
            <span>→</span>
          </a>
          <a href="https://solution-cornwall.com/pages/toby-cunliffe-wingfoil-clinic" target="_blank" rel="noreferrer" className="flex items-center justify-between border-b border-[var(--color-rule)] py-3 hover:text-[var(--color-accent-deep)]">
            <span className="font-medium">Stithians — 24th & 25th October (£125pp)</span>
            <span>→</span>
          </a>
        </div>
      </div>

      <div className="container py-[var(--space-2xl)]">
        <p className="eyebrow mb-[var(--space-2xs)]">Shop</p>
        <h2
          className="uppercase"
          style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
        >
          Kit Toby recommends
        </h2>

        <div className="mt-[var(--space-xl)] grid grid-cols-2 sm:grid-cols-3 gap-x-[var(--space-lg)] gap-y-[var(--space-xl)]">
          {PRODUCTS.map((p) => (
            <div key={p.name}>
              <div className="relative overflow-hidden rounded-[var(--radius-md)] bg-[var(--color-paper-2)]" style={{ aspectRatio: "4 / 5" }}>
                <Image src={p.img} alt={p.name} fill loading="lazy" className="object-contain p-4" sizes="(min-width: 640px) 17vw, 50vw" />
              </div>
              <h3 className="mt-[var(--space-sm)] uppercase text-[var(--text-md)]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
                {p.name}
              </h3>
              {p.comingSoon ? (
                <p className="eyebrow mt-1">Coming soon</p>
              ) : (
                <p className="mt-1 text-[var(--text-sm)] text-[var(--color-ink-2)]">
                  Discount code: <span className="font-medium text-[var(--color-ink)]">{p.code}</span>
                </p>
              )}
              {p.href ? (
                <a href={p.href} target="_blank" rel="noreferrer" className="mt-[var(--space-2xs)] inline-block text-[var(--text-sm)] underline decoration-1 underline-offset-4 hover:decoration-2 transition-[text-decoration-thickness] duration-[var(--dur-fast)]">
                  Shop →
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
