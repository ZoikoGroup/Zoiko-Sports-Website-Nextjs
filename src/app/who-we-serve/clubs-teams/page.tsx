import type { Metadata } from "next";
import { ClubHero } from "@/components/clubs-teams/ClubHero";
import { WhatForClubs } from "@/components/clubs-teams/WhatForClubs";
import { ThreeJobs } from "@/components/clubs-teams/ThreeJobs";
import { PrepareItsPart } from "@/components/clubs-teams/PrepareItsPart";
import { ScopedView } from "@/components/clubs-teams/ScopedView";
import { PrepareTasks } from "@/components/clubs-teams/PrepareTasks";
import { WhoSupplies } from "@/components/clubs-teams/WhoSupplies";
import { PlansChange } from "@/components/clubs-teams/PlansChange";
import { SentVsAck } from "@/components/clubs-teams/SentVsAck";
import { OwnRecords } from "@/components/clubs-teams/OwnRecords";
import { ClubJourney } from "@/components/clubs-teams/ClubJourney";
import { StartPilot } from "@/components/clubs-teams/StartPilot";
import { ClubFAQ } from "@/components/clubs-teams/ClubFAQ";
import { ClubCTA } from "@/components/clubs-teams/ClubCTA";

export const metadata: Metadata = {
  title: "Clubs & Teams",
  description:
    "Prepare your club for event day and stay aligned when plans change: club preparation connected to competition schedules, venue responsibilities and event-day decisions.",
};

export default function ClubsTeamsPage() {
  return (
    <>
      <ClubHero />
      <WhatForClubs />
      <ThreeJobs />
      <PrepareItsPart />
      <ScopedView />
      <PrepareTasks />
      <WhoSupplies />
      <PlansChange />
      <SentVsAck />
      <OwnRecords />
      <ClubJourney />
      <StartPilot />
      <ClubFAQ />
      <ClubCTA />
    </>
  );
}
