import type { Metadata } from "next";
import { MultiEventHero } from "@/components/multi-event-operating-model/MultiEventHero";
import { WhatIsMultiEvent } from "@/components/multi-event-operating-model/WhatIsMultiEvent";
import { RepeatingPatterns } from "@/components/multi-event-operating-model/RepeatingPatterns";
import { AgreedProgram } from "@/components/multi-event-operating-model/AgreedProgram";
import { AgreeBeforeReuse } from "@/components/multi-event-operating-model/AgreeBeforeReuse";
import { WorkflowRepeats } from "@/components/multi-event-operating-model/WorkflowRepeats";
import { FixtureRegister } from "@/components/multi-event-operating-model/FixtureRegister";
import { ScheduleChanges } from "@/components/multi-event-operating-model/ScheduleChanges";
import { ProgramVisibility } from "@/components/multi-event-operating-model/ProgramVisibility";
import { ReuseWorkflow } from "@/components/multi-event-operating-model/ReuseWorkflow";
import { ReadinessItems } from "@/components/multi-event-operating-model/ReadinessItems";
import { FixtureApproval } from "@/components/multi-event-operating-model/FixtureApproval";
import { ExceptionModel } from "@/components/multi-event-operating-model/ExceptionModel";
import { ScopedComparison } from "@/components/multi-event-operating-model/ScopedComparison";
import { BlockBoundaries } from "@/components/multi-event-operating-model/BlockBoundaries";
import { ChoosePath } from "@/components/multi-event-operating-model/ChoosePath";
import { MultiEventFAQ } from "@/components/multi-event-operating-model/MultiEventFAQ";
import { MultiEventCTA } from "@/components/multi-event-operating-model/MultiEventCTA";

export const metadata: Metadata = {
  title: "Multi-Event Operating Model",
  description:
    "Coordinate a fixture block without losing event-level accountability: one agreed workflow, with readiness, approvals and exceptions kept specific to each event.",
};

export default function MultiEventOperatingModelPage() {
  return (
    <>
      <MultiEventHero />
      <WhatIsMultiEvent />
      <RepeatingPatterns />
      <AgreedProgram />
      <AgreeBeforeReuse />
      <WorkflowRepeats />
      <FixtureRegister />
      <ScheduleChanges />
      <ProgramVisibility />
      <ReuseWorkflow />
      <ReadinessItems />
      <FixtureApproval />
      <ExceptionModel />
      <ScopedComparison />
      <BlockBoundaries />
      <ChoosePath />
      <MultiEventFAQ />
      <MultiEventCTA />
    </>
  );
}
