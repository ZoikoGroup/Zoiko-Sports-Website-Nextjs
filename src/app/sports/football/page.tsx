import type { Metadata } from "next";
import { FootballHero } from "@/components/football/FootballHero";
import { ApproachNotCapability } from "@/components/football/ApproachNotCapability";
import { OperatingWork } from "@/components/football/OperatingWork";
import { OperatingPillars } from "@/components/football/OperatingPillars";
import { EventLifecycle } from "@/components/football/EventLifecycle";
import { ApprovalChain } from "@/components/football/ApprovalChain";
import { WhoShouldStart } from "@/components/football/WhoShouldStart";
import { SharedAccess } from "@/components/football/SharedAccess";
import { ExistingInformation } from "@/components/football/ExistingInformation";
import { FiveStagePath } from "@/components/football/FiveStagePath";
import { FootballFAQ } from "@/components/football/FootballFAQ";
import { FootballCTA } from "@/components/football/FootballCTA";

export const metadata: Metadata = {
  title: "Football / Soccer",
  description:
    "How competition schedules, venue preparation, responsibilities and event-day changes could be coordinated across the organizations delivering a football or soccer fixture.",
};

export default function FootballPage() {
  return (
    <>
      <FootballHero />
      <ApproachNotCapability />
      <OperatingWork />
      <OperatingPillars />
      <EventLifecycle />
      <ApprovalChain />
      <WhoShouldStart />
      <SharedAccess />
      <ExistingInformation />
      <FiveStagePath />
      <FootballFAQ />
      <FootballCTA />
    </>
  );
}
