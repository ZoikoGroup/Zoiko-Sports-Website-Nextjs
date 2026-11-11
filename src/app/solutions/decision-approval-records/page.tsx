import type { Metadata } from "next";
import { DecisionHero } from "@/components/decision-approval-records/DecisionHero";
import { WhatAreRecords } from "@/components/decision-approval-records/WhatAreRecords";
import { SeparateChecks } from "@/components/decision-approval-records/SeparateChecks";
import { ChangeLifecycle } from "@/components/decision-approval-records/ChangeLifecycle";
import { EvidenceChronology } from "@/components/decision-approval-records/EvidenceChronology";
import { ScopedContext } from "@/components/decision-approval-records/ScopedContext";
import { DecisionRecord } from "@/components/decision-approval-records/DecisionRecord";
import { PendingDecisions } from "@/components/decision-approval-records/PendingDecisions";
import { SubmitRequest } from "@/components/decision-approval-records/SubmitRequest";
import { ApprovalApplication } from "@/components/decision-approval-records/ApprovalApplication";
import { SentAcknowledged } from "@/components/decision-approval-records/SentAcknowledged";
import { CorrectionsAccess } from "@/components/decision-approval-records/CorrectionsAccess";
import { ConnectionLoss } from "@/components/decision-approval-records/ConnectionLoss";
import { Participation } from "@/components/decision-approval-records/Participation";
import { DecisionFAQ } from "@/components/decision-approval-records/DecisionFAQ";
import { DecisionCTA } from "@/components/decision-approval-records/DecisionCTA";

export const metadata: Metadata = {
  title: "Decision & Approval Records",
  description:
    "Keep the request, the authorized decision, the source context and the resulting update distinct when a competition plan changes across organizations.",
};

export default function DecisionApprovalRecordsPage() {
  return (
    <>
      <DecisionHero />
      <WhatAreRecords />
      <SeparateChecks />
      <ChangeLifecycle />
      <EvidenceChronology />
      <ScopedContext />
      <DecisionRecord />
      <PendingDecisions />
      <SubmitRequest />
      <ApprovalApplication />
      <SentAcknowledged />
      <CorrectionsAccess />
      <ConnectionLoss />
      <Participation />
      <DecisionFAQ />
      <DecisionCTA />
    </>
  );
}
