import type { Metadata } from "next";
import { CompetitionHero } from "@/components/competition-operations/CompetitionHero";
import { WhatIsCompetitionOps } from "@/components/competition-operations/WhatIsCompetitionOps";
import { OneFixture } from "@/components/competition-operations/OneFixture";
import { FixtureContext } from "@/components/competition-operations/FixtureContext";
import { AlignSchedule } from "@/components/competition-operations/AlignSchedule";
import { ProposeChange } from "@/components/competition-operations/ProposeChange";
import { PublicationSteps } from "@/components/competition-operations/PublicationSteps";
import { ShareContext } from "@/components/competition-operations/ShareContext";
import { Participation } from "@/components/competition-operations/Participation";
import { CompetitionFAQ } from "@/components/competition-operations/CompetitionFAQ";
import { CompetitionCTA } from "@/components/competition-operations/CompetitionCTA";

export const metadata: Metadata = {
  title: "Competition Operations",
  description:
    "Bring fixture schedules, organizer responsibilities, venue dependencies and authorized changes into one scoped operating workflow for the organizations delivering an event.",
};

export default function CompetitionOperationsPage() {
  return (
    <>
      <CompetitionHero />
      <WhatIsCompetitionOps />
      <OneFixture />
      <FixtureContext />
      <AlignSchedule />
      <ProposeChange />
      <PublicationSteps />
      <ShareContext />
      <Participation />
      <CompetitionFAQ />
      <CompetitionCTA />
    </>
  );
}
