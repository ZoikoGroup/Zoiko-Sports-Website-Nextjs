import type { Metadata } from "next";
import { ReviewHero } from "@/components/post-event-review/ReviewHero";
import { ReviewDefinition } from "@/components/post-event-review/ReviewDefinition";
import { ReviewStage } from "@/components/post-event-review/ReviewStage";
import { ReviewerView } from "@/components/post-event-review/ReviewerView";
import { Reconstruct } from "@/components/post-event-review/Reconstruct";
import { DecisionAuthority } from "@/components/post-event-review/DecisionAuthority";
import { Acknowledgments } from "@/components/post-event-review/Acknowledgments";
import { ReviewAgenda } from "@/components/post-event-review/ReviewAgenda";
import { FollowUps } from "@/components/post-event-review/FollowUps";
import { ScopedReview } from "@/components/post-event-review/ScopedReview";
import { CorrectionRevision } from "@/components/post-event-review/CorrectionRevision";
import { ConcludeReview } from "@/components/post-event-review/ConcludeReview";
import { EvaluateWorkflow } from "@/components/post-event-review/EvaluateWorkflow";
import { OrganizedContext } from "@/components/post-event-review/OrganizedContext";
import { ReviewFAQ } from "@/components/post-event-review/ReviewFAQ";
import { ReviewCTA } from "@/components/post-event-review/ReviewCTA";

export const metadata: Metadata = {
  title: "Post-Event Review",
  description:
    "Revisit agreed event records, clarify accountable follow-up, and evaluate the workflow after event day, with decisions and follow-up kept connected.",
};

export default function PostEventReviewPage() {
  return (
    <>
      <ReviewHero />
      <ReviewDefinition />
      <ReviewStage />
      <ReviewerView />
      <Reconstruct />
      <DecisionAuthority />
      <Acknowledgments />
      <ReviewAgenda />
      <FollowUps />
      <ScopedReview />
      <CorrectionRevision />
      <ConcludeReview />
      <EvaluateWorkflow />
      <OrganizedContext />
      <ReviewFAQ />
      <ReviewCTA />
    </>
  );
}
