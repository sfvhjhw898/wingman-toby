import Hero from "@/components/sections/Hero";
import AboutHighlights from "@/components/sections/AboutHighlights";
import ClinicsGrid from "@/components/sections/ClinicsGrid";
import LocationsGrid from "@/components/sections/LocationsGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import EventsStrip from "@/components/sections/EventsStrip";
import Testimonial from "@/components/sections/Testimonial";
import FAQ from "@/components/sections/FAQ";
import Marquee from "@/components/Marquee";
import MailingList from "@/components/sections/MailingList";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutHighlights />
      <ClinicsGrid />
      <LocationsGrid />
      <ProcessSteps />
      <EventsStrip />
      <Testimonial />
      <FAQ />
      <Marquee />
      <MailingList />
    </>
  );
}
