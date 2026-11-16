import type { Metadata } from "next";
import { LeagueHero } from "@/components/leagues-competition-organizers/LeagueHero";
import { WhatForLeagues } from "@/components/leagues-competition-organizers/WhatForLeagues";
import { ThreeJobs } from "@/components/leagues-competition-organizers/ThreeJobs";
import { HandoffsBreak } from "@/components/leagues-competition-organizers/HandoffsBreak";
import { OneFixture } from "@/components/leagues-competition-organizers/OneFixture";
import { Outstanding } from "@/components/leagues-competition-organizers/Outstanding";
import { WhoPasses } from "@/components/leagues-competition-organizers/WhoPasses";
import { HardwareFails } from "@/components/leagues-competition-organizers/HardwareFails";
import { ExceptionNotDecision } from "@/components/leagues-competition-organizers/ExceptionNotDecision";
import { UpdateNotAck } from "@/components/leagues-competition-organizers/UpdateNotAck";
import { FixtureJourney } from "@/components/leagues-competition-organizers/FixtureJourney";
import { StartOne } from "@/components/leagues-competition-organizers/StartOne";
import { AuthorizedRecords } from "@/components/leagues-competition-organizers/AuthorizedRecords";
import { LeagueFAQ } from "@/components/leagues-competition-organizers/LeagueFAQ";
import { LeagueCTA } from "@/components/leagues-competition-organizers/LeagueCTA";

export const metadata: Metadata = {
  title: "Leagues & Competition Organizers",
  description:
    "Coordinate the competition and keep responsibilities clear: competition schedules, venue readiness, operational exceptions and authorized decisions across venues and clubs.",
};

export default function LeaguesOrganizersPage() {
  return (
    <>
      <LeagueHero />
      <WhatForLeagues />
      <ThreeJobs />
      <HandoffsBreak />
      <OneFixture />
      <Outstanding />
      <WhoPasses />
      <HardwareFails />
      <ExceptionNotDecision />
      <UpdateNotAck />
      <FixtureJourney />
      <StartOne />
      <AuthorizedRecords />
      <LeagueFAQ />
      <LeagueCTA />
    </>
  );
}
