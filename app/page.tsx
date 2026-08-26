import Hero from "@/components/sections/Hero";
import AboutHighlights from "@/components/sections/AboutHighlights";
import Stats from "@/components/sections/Stats";
import ClinicsGrid from "@/components/sections/ClinicsGrid";
import LocationsGrid from "@/components/sections/LocationsGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Gallery from "@/components/sections/Gallery";
import EventsStrip from "@/components/sections/EventsStrip";
import Testimonial from "@/components/sections/Testimonial";
import FAQ from "@/components/sections/FAQ";
import Marquee from "@/components/Marquee";
import MailingList from "@/components/sections/MailingList";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutHighlights />
      <EventsStrip />
      <Stats />
      <ClinicsGrid />
      <LocationsGrid />
      <ProcessSteps />
      <Gallery />
      <Testimonial />
      <FAQ />
      <MailingList />
    </>
  );
}
