import type { Metadata } from "next";
import { BasketballHero } from "@/components/basketball/BasketballHero";
import { ApproachNotCapability } from "@/components/basketball/ApproachNotCapability";
import { OperatingWork } from "@/components/basketball/OperatingWork";
import { OperatingPillars } from "@/components/basketball/OperatingPillars";
import { EventLifecycle } from "@/components/basketball/EventLifecycle";
import { ApprovalChain } from "@/components/basketball/ApprovalChain";
import { WhoShouldStart } from "@/components/basketball/WhoShouldStart";
import { SharedAccess } from "@/components/basketball/SharedAccess";
import { ExistingInformation } from "@/components/basketball/ExistingInformation";
import { FiveStagePath } from "@/components/basketball/FiveStagePath";
import { BasketballFAQ } from "@/components/basketball/BasketballFAQ";
import { BasketballCTA } from "@/components/basketball/BasketballCTA";

export const metadata: Metadata = {
  title: "Basketball",
  description:
    "How game schedules, court or venue preparation, assigned responsibilities and event-day changes could be coordinated across the organizations delivering a basketball fixture.",
};

export default function BasketballPage() {
  return (
    <>
      <BasketballHero />
      <ApproachNotCapability />
      <OperatingWork />
      <OperatingPillars />
      <EventLifecycle />
      <ApprovalChain />
      <WhoShouldStart />
      <SharedAccess />
      <ExistingInformation />
      <FiveStagePath />
      <BasketballFAQ />
      <BasketballCTA />
    </>
  );
}
