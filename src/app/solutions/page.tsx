import type { Metadata } from "next";
import { SolutionsHero } from "@/components/solution-overview/SolutionsHero";
import { ProblemsAddressed } from "@/components/solution-overview/ProblemsAddressed";
import { FindSolution } from "@/components/solution-overview/FindSolution";
import { PlanPrepare } from "@/components/solution-overview/PlanPrepare";
import { EventDay } from "@/components/solution-overview/EventDay";
import { ReviewScale } from "@/components/solution-overview/ReviewScale";
import { FourStages } from "@/components/solution-overview/FourStages";
import { ThreeWorkflows } from "@/components/solution-overview/ThreeWorkflows";
import { OperatingPicture } from "@/components/solution-overview/OperatingPicture";
import { Participants } from "@/components/solution-overview/Participants";
import { SupportDecisions } from "@/components/solution-overview/SupportDecisions";
import { ConnectBeforeReplacing } from "@/components/solution-overview/ConnectBeforeReplacing";
import { StartOneEvent } from "@/components/solution-overview/StartOneEvent";
import { SolutionsFAQ } from "@/components/solution-overview/SolutionsFAQ";
import { SolutionsCTA } from "@/components/solution-overview/SolutionsCTA";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore how leagues, clubs and venues can bring schedules, responsibilities, event-day changes and decision context into a more connected operating workflow — starting with a scoped event or fixture block.",
};

export default function SolutionsOverviewPage() {
  return (
    <>
      <SolutionsHero />
      <ProblemsAddressed />
      <FindSolution />
      <PlanPrepare />
      <EventDay />
      <ReviewScale />
      <FourStages />
      <ThreeWorkflows />
      <OperatingPicture />
      <Participants />
      <SupportDecisions />
      <ConnectBeforeReplacing />
      <StartOneEvent />
      <SolutionsFAQ />
      <SolutionsCTA />
    </>
  );
}
