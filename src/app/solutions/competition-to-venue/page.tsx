import type { Metadata } from "next";
import { CoordinationHero } from "@/components/competition-to-venue/CoordinationHero";
import { OperatingPictures } from "@/components/competition-to-venue/OperatingPictures";
import { SharedEventContext } from "@/components/competition-to-venue/SharedEventContext";
import { AgreedWorkflow } from "@/components/competition-to-venue/AgreedWorkflow";
import { SharedPicture } from "@/components/competition-to-venue/SharedPicture";
import { FixtureConsequences } from "@/components/competition-to-venue/FixtureConsequences";
import { WorkOwnership } from "@/components/competition-to-venue/WorkOwnership";
import { NextAction } from "@/components/competition-to-venue/NextAction";
import { ScheduleChange } from "@/components/competition-to-venue/ScheduleChange";
import { SeparateRecords } from "@/components/competition-to-venue/SeparateRecords";
import { Acknowledgements } from "@/components/competition-to-venue/Acknowledgements";
import { ScopedAccess } from "@/components/competition-to-venue/ScopedAccess";
import { SourceSystems } from "@/components/competition-to-venue/SourceSystems";
import { CoordinationRoles } from "@/components/competition-to-venue/CoordinationRoles";
import { CoordinationLifecycle } from "@/components/competition-to-venue/CoordinationLifecycle";
import { Boundaries } from "@/components/competition-to-venue/Boundaries";
import { CoordinationFAQ } from "@/components/competition-to-venue/CoordinationFAQ";
import { CoordinationCTA } from "@/components/competition-to-venue/CoordinationCTA";

export const metadata: Metadata = {
  title: "Competition-to-Venue Coordination",
  description:
    "Bring the organizer's fixture context, venue responsibilities, readiness questions and event-day changes into one agreed coordination workflow, while keeping decisions with authorized people.",
};

export default function CompetitionToVenuePage() {
  return (
    <>
      <CoordinationHero />
      <OperatingPictures />
      <SharedEventContext />
      <AgreedWorkflow />
      <SharedPicture />
      <FixtureConsequences />
      <WorkOwnership />
      <NextAction />
      <ScheduleChange />
      <SeparateRecords />
      <Acknowledgements />
      <ScopedAccess />
      <SourceSystems />
      <CoordinationRoles />
      <CoordinationLifecycle />
      <Boundaries />
      <CoordinationFAQ />
      <CoordinationCTA />
    </>
  );
}
