import type { Metadata } from "next";
import { ReviewHero } from "@/components/solution-post-event-review/ReviewHero";
import { ReviewDefinition } from "@/components/solution-post-event-review/ReviewDefinition";
import { EventEnds } from "@/components/solution-post-event-review/EventEnds";
import { ReviewStage } from "@/components/solution-post-event-review/ReviewStage";
import { ReviewerView } from "@/components/solution-post-event-review/ReviewerView";
import { Reconstruct } from "@/components/solution-post-event-review/Reconstruct";
import { DecisionAuthority } from "@/components/solution-post-event-review/DecisionAuthority";
import { Acknowledgments } from "@/components/solution-post-event-review/Acknowledgments";
import { ReviewAgenda } from "@/components/solution-post-event-review/ReviewAgenda";
import { Observations } from "@/components/solution-post-event-review/Observations";
import { FollowUps } from "@/components/solution-post-event-review/FollowUps";
import { CorrectionRevision } from "@/components/solution-post-event-review/CorrectionRevision";
import { EvaluateWorkflow } from "@/components/solution-post-event-review/EvaluateWorkflow";
import { OrganizedContext } from "@/components/solution-post-event-review/OrganizedContext";
import { ReviewFAQ } from "@/components/solution-post-event-review/ReviewFAQ";
import { ReviewCTA } from "@/components/solution-post-event-review/ReviewCTA";

export const metadata: Metadata = {
  title: "Post-Event Review",
  description:
    "Revisit agreed event records, clarify accountable follow-up, and evaluate the workflow after event day — with decisions and follow-up kept connected.",
};

export default function SolutionPostEventReviewPage() {
  return (
    <>
      <ReviewHero />
      <ReviewDefinition />
      <EventEnds />
      <ReviewStage />
      <ReviewerView />
      <Reconstruct />
      <DecisionAuthority />
      <Acknowledgments />
      <ReviewAgenda />
      <Observations />
      <FollowUps />
      <CorrectionRevision />
      <EvaluateWorkflow />
      <OrganizedContext />
      <ReviewFAQ />
      <ReviewCTA />
    </>
  );
}
