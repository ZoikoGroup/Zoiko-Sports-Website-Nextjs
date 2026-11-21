import type { Metadata } from "next";
import { TennisRacketHero } from "@/components/tennis-racket/TennisRacketHero";
import { ApproachNotCapability } from "@/components/tennis-racket/ApproachNotCapability";
import { OperatingWork } from "@/components/tennis-racket/OperatingWork";
import { OperatingPillars } from "@/components/tennis-racket/OperatingPillars";
import { EventLifecycle } from "@/components/tennis-racket/EventLifecycle";
import { ApprovalChain } from "@/components/tennis-racket/ApprovalChain";
import { WhoShouldStart } from "@/components/tennis-racket/WhoShouldStart";
import { SharedAccess } from "@/components/tennis-racket/SharedAccess";
import { ExistingInformation } from "@/components/tennis-racket/ExistingInformation";
import { FiveStagePath } from "@/components/tennis-racket/FiveStagePath";
import { TennisRacketFAQ } from "@/components/tennis-racket/TennisRacketFAQ";
import { TennisRacketCTA } from "@/components/tennis-racket/TennisRacketCTA";

export const metadata: Metadata = {
  title: "Tennis & Racket Sports",
  description:
    "How match windows, court preparation, responsibilities and operational changes could be coordinated across the organizations delivering a tennis or racket-sport event.",
};

export default function TennisRacketPage() {
  return (
    <>
      <TennisRacketHero />
      <ApproachNotCapability />
      <OperatingWork />
      <OperatingPillars />
      <EventLifecycle />
      <ApprovalChain />
      <WhoShouldStart />
      <SharedAccess />
      <ExistingInformation />
      <FiveStagePath />
      <TennisRacketFAQ />
      <TennisRacketCTA />
    </>
  );
}
