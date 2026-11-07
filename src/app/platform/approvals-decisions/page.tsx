import type { Metadata } from "next";
import { ApprovalsHero } from "@/components/approvals-decisions/ApprovalsHero";
import { RequestNotDecision } from "@/components/approvals-decisions/RequestNotDecision";
import { DecisionRecord } from "@/components/approvals-decisions/DecisionRecord";
import { CoordinateAuthority } from "@/components/approvals-decisions/CoordinateAuthority";
import { ApprovalRequests } from "@/components/approvals-decisions/ApprovalRequests";
import { RequestToRecord } from "@/components/approvals-decisions/RequestToRecord";
import { CorrectionsAccess } from "@/components/approvals-decisions/CorrectionsAccess";
import { Participants } from "@/components/approvals-decisions/Participants";
import { ApprovalsFAQ } from "@/components/approvals-decisions/ApprovalsFAQ";
import { ApprovalsCTA } from "@/components/approvals-decisions/ApprovalsCTA";

export const metadata: Metadata = {
  title: "Approvals & Decisions",
  description:
    "Make decision authority visible across event operations: distinguish who requested an action, who was authorized to decide, and what was recorded.",
};

export default function ApprovalsDecisionsPage() {
  return (
    <>
      <ApprovalsHero />
      <RequestNotDecision />
      <DecisionRecord />
      <CoordinateAuthority />
      <ApprovalRequests />
      <RequestToRecord />
      <CorrectionsAccess />
      <Participants />
      <ApprovalsFAQ />
      <ApprovalsCTA />
    </>
  );
}
