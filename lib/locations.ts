import { StaticImageData } from "next/image";

import vassiliki from "@/public/images/site/vassiliki-drone.jpg";
import jericoacoara from "@/public/images/site/loc-jericoacoara.jpg";
import tenerife from "@/public/images/site/loc-tenerife.jpg";
import stithians from "@/public/images/site/loc-stithians.jpg";
import daymer from "@/public/images/site/loc-daymer.jpeg";
import queenmary from "@/public/images/site/loc-queenmary.jpg";
import altonwater from "@/public/images/site/loc-altonwater.jpg";
import xs2 from "@/public/images/site/loc-2xs.jpg";
import rutland from "@/public/images/site/loc-rutland.jpeg";

export type Location = {
  slug: string;
  name: string;
  area: string;
  category: "International" | "UK";
  desc: string;
  img: StaticImageData;
};

export const LOCATIONS: Location[] = [
  {
    slug: "vassiliki",
    name: "Vassiliki",
    area: "Greece",
    category: "International",
    desc: "Toby's home bay — reliable thermal wind, flat water, and Club Vass's foiling facilities on the doorstep.",
    img: vassiliki,
  },
  {
    slug: "jericoacoara",
    name: "Jericoacoara",
    area: "Brazil",
    category: "International",
    desc: "Warm lagoons and dune-lined coastline, with steady trade winds through the season.",
    img: jericoacoara,
  },
  {
    slug: "tenerife",
    name: "Tenerife",
    area: "Canary Islands",
    category: "International",
    desc: "Volcanic coastline and consistent Atlantic wind, a short flight from the UK.",
    img: tenerife,
  },
  {
    slug: "stithians-lake",
    name: "Stithians Lake",
    area: "South Cornwall",
    category: "UK",
    desc: "Sheltered inland water — a reliable, easy-access spot for small-group coaching days.",
    img: stithians,
  },
  {
    slug: "daymer-bay",
    name: "Daymer Bay",
    area: "North Cornwall",
    category: "UK",
    desc: "Open estuary bay with steady wind exposure, popular for progression sessions.",
    img: daymer,
  },
  {
    slug: "queen-mary",
    name: "Queen Mary",
    area: "West London",
    category: "UK",
    desc: "A big reservoir close to the city — consistent wind and easy access for London-based riders.",
    img: queenmary,
  },
  {
    slug: "alton-water",
    name: "Alton Water",
    area: "Suffolk",
    category: "UK",
    desc: "A calm, flat-water reservoir — ideal ground for building fundamentals.",
    img: altonwater,
  },
  {
    slug: "2xs",
    name: "2XS",
    area: "West Wittering",
    category: "UK",
    desc: "South-coast beach launch with reliable sea breeze, run in partnership with 2XS Pro Center.",
    img: xs2,
  },
  {
    slug: "rutland",
    name: "Rutland",
    area: "Rutland Water",
    category: "UK",
    desc: "Toby's local water — a large inland reservoir with dependable wind for regular coaching.",
    img: rutland,
  },
];

export function getLocation(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug);
}
