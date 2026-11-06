import { Hero } from "@/components/home/Hero";
import { SportsStrip } from "@/components/home/SportsStrip";
import { SportsMarquee } from "@/components/home/SportsMarquee";
import { TheProblem } from "@/components/home/TheProblem";
import { FourPillars } from "@/components/home/FourPillars";
import { EventJourney } from "@/components/home/EventJourney";
import { WhoWeServe } from "@/components/home/WhoWeServe";
import { SharedAuthority } from "@/components/home/SharedAuthority";
import { EventDayTimeline } from "@/components/home/EventDayTimeline";
import { PilotProcess } from "@/components/home/PilotProcess";
import { PilotRequest } from "@/components/home/PilotRequest";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SportsStrip />
      <SportsMarquee />
      <TheProblem />
      <FourPillars />
      <EventJourney />
      <WhoWeServe />
      <SharedAuthority />
      <EventDayTimeline />
      <PilotProcess />
      <PilotRequest />
      <FAQ />
      <CTA />
    </>
  );
}
