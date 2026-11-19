import type { Metadata } from "next";
import { RugbyHero } from "@/components/rugby/RugbyHero";
import { ApproachNotCapability } from "@/components/rugby/ApproachNotCapability";
import { OperatingWork } from "@/components/rugby/OperatingWork";
import { OperatingPillars } from "@/components/rugby/OperatingPillars";
import { EventLifecycle } from "@/components/rugby/EventLifecycle";
import { ApprovalChain } from "@/components/rugby/ApprovalChain";
import { WhoShouldStart } from "@/components/rugby/WhoShouldStart";
import { SharedAccess } from "@/components/rugby/SharedAccess";
import { ExistingInformation } from "@/components/rugby/ExistingInformation";
import { FiveStagePath } from "@/components/rugby/FiveStagePath";
import { RugbyFAQ } from "@/components/rugby/RugbyFAQ";
import { RugbyCTA } from "@/components/rugby/RugbyCTA";

export const metadata: Metadata = {
  title: "Rugby",
  description:
    "How match windows, pitch and venue preparation, responsibilities and match-day changes could be coordinated across the organizations delivering a rugby fixture.",
};

export default function RugbyPage() {
  return (
    <>
      <RugbyHero />
      <ApproachNotCapability />
      <OperatingWork />
      <OperatingPillars />
      <EventLifecycle />
      <ApprovalChain />
      <WhoShouldStart />
      <SharedAccess />
      <ExistingInformation />
      <FiveStagePath />
      <RugbyFAQ />
      <RugbyCTA />
    </>
  );
}
