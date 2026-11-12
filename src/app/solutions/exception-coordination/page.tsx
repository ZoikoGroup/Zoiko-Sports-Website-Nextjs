import type { Metadata } from "next";
import { ExceptionHero } from "@/components/exception-coordination/ExceptionHero";
import { WhatIsCoordination } from "@/components/exception-coordination/WhatIsCoordination";
import { ResponsibilityPatterns } from "@/components/exception-coordination/ResponsibilityPatterns";
import { CoordinationStages } from "@/components/exception-coordination/CoordinationStages";
import { IssueTimeline } from "@/components/exception-coordination/IssueTimeline";
import { ScopedViews } from "@/components/exception-coordination/ScopedViews";
import { ExceptionWorklist } from "@/components/exception-coordination/ExceptionWorklist";
import { ReportIssue } from "@/components/exception-coordination/ReportIssue";
import { ExceptionRecord } from "@/components/exception-coordination/ExceptionRecord";
import { LinkedImpact } from "@/components/exception-coordination/LinkedImpact";
import { RequestDecision } from "@/components/exception-coordination/RequestDecision";
import { DeliveryAcknowledgment } from "@/components/exception-coordination/DeliveryAcknowledgment";
import { PostEventReview } from "@/components/exception-coordination/PostEventReview";
import { TrustBoundaries } from "@/components/exception-coordination/TrustBoundaries";
import { ChoosePath } from "@/components/exception-coordination/ChoosePath";
import { PilotPanel } from "@/components/exception-coordination/PilotPanel";
import { ExceptionFAQ } from "@/components/exception-coordination/ExceptionFAQ";
import { ExceptionCTA } from "@/components/exception-coordination/ExceptionCTA";

export const metadata: Metadata = {
  title: "Exception Coordination",
  description:
    "Coordinate event-day exceptions across the teams responsible: the issue, the accountable owner, the operational impact and the authorized next decision.",
};

export default function ExceptionCoordinationPage() {
  return (
    <>
      <ExceptionHero />
      <WhatIsCoordination />
      <ResponsibilityPatterns />
      <CoordinationStages />
      <IssueTimeline />
      <ScopedViews />
      <ExceptionWorklist />
      <ReportIssue />
      <ExceptionRecord />
      <LinkedImpact />
      <RequestDecision />
      <DeliveryAcknowledgment />
      <PostEventReview />
      <TrustBoundaries />
      <ChoosePath />
      <PilotPanel />
      <ExceptionFAQ />
      <ExceptionCTA />
    </>
  );
}
