import Link from "next/link";

export const metadata = { title: "Book — Wingman Toby" };

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
        <p className="eyebrow mb-[var(--space-2xs)]">Kit</p>
        <h2
          className="uppercase"
          style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
        >
          Looking for kit?
        </h2>
        <p className="mt-[var(--space-sm)] text-[var(--text-md)] text-[var(--color-ink-2)] max-w-[46ch]">
          The products Toby uses and recommends now live on their own page.
        </p>
        <Link
          href="/products"
          className="mt-[var(--space-lg)] inline-flex min-h-11 items-center rounded-[var(--radius-sm)] bg-[var(--color-accent-deep)] px-6 font-medium text-[var(--color-on-navy)] hover:opacity-90 transition-opacity duration-[var(--dur-fast)]"
        >
          Shop products →
        </Link>
      </div>
    </div>
  );
}
