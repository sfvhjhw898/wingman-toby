import Image, { StaticImageData } from "next/image";

import duotone from "@/public/images/site/sponsor-duotone.webp";
import ion from "@/public/images/site/sponsor-ion.webp";
import bw from "@/public/images/site/sponsor-bw.png";
import swm from "@/public/images/site/partner-swm.png";
import cornwall from "@/public/images/site/partner-cornwall.png";
import xs2 from "@/public/images/site/partner-2xs.png";

const LOGOS: { name: string; src: StaticImageData; h: number }[] = [
  { name: "Duotone", src: duotone, h: 32 },
  { name: "ION", src: ion, h: 30 },
  { name: "BW", src: bw, h: 32 },
  { name: "SWM", src: swm, h: 20 },
  { name: "Cornwall Solutions", src: cornwall, h: 40 },
  { name: "2XS Pro Center", src: xs2, h: 40 },
];

export default function SponsorRow({ label = "Riding for & supported by" }: { label?: string }) {
  return (
    <div>
      <p className="eyebrow text-center mb-[var(--space-md)]">{label}</p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {LOGOS.map((l) => (
          <Image
            key={l.name}
            src={l.src}
            alt={l.name}
            height={l.h}
            style={{ width: "auto", height: l.h }}
            className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-[filter,opacity] duration-[var(--dur-base)]"
          />
        ))}
      </div>
    </div>
  );
}
