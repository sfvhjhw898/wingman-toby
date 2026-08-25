import Image from "next/image";
import Link from "next/link";
import SectionHead from "@/components/SectionHead";
import PlaceholderCard from "@/components/PlaceholderCard";
import MailingListForm from "@/components/MailingListForm";
import heroImg from "@/public/images/hero-jump.jpg";
import bayImg from "@/public/images/vassiliki-bay.jpg";

const CLINICS = [
  {
    title: "UK Clinics",
    desc: "One and two-day coaching days at home waters — beginner-friendly, small groups.",
    href: "/uk-clinics",
  },
  {
    title: "International Clinics",
    desc: "Week-long trips to Vassiliki, Jericoacoara and Tenerife — warm water, consistent wind.",
    href: "/international-clinics",
  },
  {
    title: "1-to-1 Coaching",
    desc: "Video-reviewed private sessions, tailored to freestyle, wave, or your first flight.",
    href: "/contact",
  },
];

export default function Home() {
  return (
    <>
      <section
        className="relative w-full"
        style={{ minHeight: "clamp(60vh, 75dvh, 88dvh)" }}
      >
        <Image
          src={heroImg}
          alt="Wingfoiler mid-air jump silhouetted against a sunset sky over a Mediterranean bay"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, color-mix(in oklch, var(--color-ink) 55%, transparent), transparent 45%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute left-[var(--page-gutter)] bottom-[var(--space-xl)] text-white">
          <h1
            className="eyebrow"
            style={{
              color: "color-mix(in oklch, white 80%, var(--color-accent))",
              fontWeight: 500,
            }}
          >
            Wingman Toby · Wingfoil Pro Coach · Vassiliki, Greece
          </h1>
          <Link
            href="/about"
            className="mt-[var(--space-2xs)] inline-block text-[var(--text-lg)] underline decoration-1 underline-offset-4 hover:decoration-2 transition-[text-decoration-thickness] duration-[var(--dur-fast)]"
          >
            Meet Toby →
          </Link>
        </div>
      </section>

      <section className="container py-[var(--space-2xl)]">
        <SectionHead
          eyebrow="Who we are"
          title="Take your foiling further"
          lede="Wingman Toby endeavours to take Toby's love for the sport and proven coaching style to more people than ever before — offering both UK and international clinics and coaching days."
        />
      </section>

      <section className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
        <Image
          src={bayImg}
          alt="Wide turquoise bay at Vassiliki, Greece, wingfoilers scattered across the water"
          fill
          loading="lazy"
          className="object-cover"
          sizes="100vw"
        />
        <p className="absolute left-[var(--page-gutter)] bottom-[var(--space-md)] eyebrow text-white">
          Based in Vassiliki, Greece
        </p>
      </section>

      <section className="container py-[var(--space-2xl)]">
        <p className="text-[var(--text-md)] text-[var(--color-ink-2)] max-w-[50ch]">
          Toby is currently based out of Vassiliki, one of Europe's best-known
          wind and water sports bays — home to Club Vass's foiling facilities
          and consistent thermal wind through the summer season.
        </p>
      </section>

      <section className="container py-[var(--space-2xl)]">
        <SectionHead eyebrow="Coaching" title="Clinics & coaching days" />
        <div className="mt-[var(--space-xl)] grid grid-cols-1 sm:grid-cols-3 gap-[var(--space-lg)]">
          {CLINICS.map((c) => (
            <Link key={c.title} href={c.href} className="group block">
              <PlaceholderCard label={c.title} ratio="4 / 5" />
              <h3
                className="mt-[var(--space-sm)] uppercase text-[var(--text-lg)]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                {c.title}
              </h3>
              <p className="mt-[var(--space-3xs)] text-[var(--text-sm)] text-[var(--color-ink-2)]">
                {c.desc}
              </p>
              <span className="mt-[var(--space-2xs)] inline-block text-[var(--text-sm)] underline decoration-1 underline-offset-4 group-hover:decoration-2 transition-[text-decoration-thickness] duration-[var(--dur-fast)]">
                View →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-paper-2)] py-[var(--space-xl)]">
        <div className="container">
          <p className="eyebrow text-center mb-[var(--space-md)]">Riding for &amp; supported by</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {["Duotone", "ION", "BW", "SWM", "Cornwall Solutions", "2XS Pro Center"].map(
              (name, i) => (
                <span
                  key={name}
                  className="text-[var(--text-md)] uppercase tracking-wide text-[var(--color-ink-2)]"
                  style={{
                    borderLeft:
                      i === 0 ? "none" : "1px solid var(--color-rule)",
                    paddingLeft: i === 0 ? 0 : "var(--space-lg)",
                  }}
                >
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      <section className="container py-[var(--space-2xl)]">
        <SectionHead
          eyebrow="Stay in the loop"
          title="Join the mailing list"
          lede="Information on upcoming clinics, new kit, exclusive coaching videos and much more."
        />
        <div className="mt-[var(--space-lg)]">
          <MailingListForm />
        </div>
      </section>
    </>
  );
}
