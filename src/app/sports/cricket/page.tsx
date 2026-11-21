import type { Metadata } from "next";
import { CricketHero } from "@/components/cricket/CricketHero";
import { ApproachNotCapability } from "@/components/cricket/ApproachNotCapability";
import { OperatingWork } from "@/components/cricket/OperatingWork";
import { OperatingPillars } from "@/components/cricket/OperatingPillars";
import { EventLifecycle } from "@/components/cricket/EventLifecycle";
import { ApprovalChain } from "@/components/cricket/ApprovalChain";
import { WhoShouldStart } from "@/components/cricket/WhoShouldStart";
import { SharedAccess } from "@/components/cricket/SharedAccess";
import { ExistingInformation } from "@/components/cricket/ExistingInformation";
import { FiveStagePath } from "@/components/cricket/FiveStagePath";
import { CricketFAQ } from "@/components/cricket/CricketFAQ";
import { CricketCTA } from "@/components/cricket/CricketCTA";

export const metadata: Metadata = {
  title: "Cricket",
  description:
    "How event windows, ground preparation, responsibilities and operational changes could be coordinated across the organizations delivering a cricket event.",
};

export default function CricketPage() {
  return (
    <>
      <CricketHero />
      <ApproachNotCapability />
      <OperatingWork />
      <OperatingPillars />
      <EventLifecycle />
      <ApprovalChain />
      <WhoShouldStart />
      <SharedAccess />
      <ExistingInformation />
      <FiveStagePath />
      <CricketFAQ />
      <CricketCTA />
    </>
  );
}
