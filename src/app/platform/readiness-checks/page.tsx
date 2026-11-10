import type { Metadata } from "next";
import { ChecksHero } from "@/components/readiness-checks/ChecksHero";
import { WhatAreChecks } from "@/components/readiness-checks/WhatAreChecks";
import { DifferentLists } from "@/components/readiness-checks/DifferentLists";
import { DefinedChecks } from "@/components/readiness-checks/DefinedChecks";
import { Worklist } from "@/components/readiness-checks/Worklist";
import { CheckHistory } from "@/components/readiness-checks/CheckHistory";
import { CompletionCount } from "@/components/readiness-checks/CompletionCount";
import { Dependencies } from "@/components/readiness-checks/Dependencies";
import { RecordedCheck } from "@/components/readiness-checks/RecordedCheck";
import { UpdatesAndChanges } from "@/components/readiness-checks/UpdatesAndChanges";
import { SharedContext } from "@/components/readiness-checks/SharedContext";
import { ReadinessWorkflow } from "@/components/readiness-checks/ReadinessWorkflow";
import { Participation } from "@/components/readiness-checks/Participation";
import { ChecksFAQ } from "@/components/readiness-checks/ChecksFAQ";
import { ChecksCTA } from "@/components/readiness-checks/ChecksCTA";

export const metadata: Metadata = {
  title: "Readiness Checks",
  description:
    "Coordinate agreed event checks, responsible organizations, due times, evidence and review steps — without replacing operational decisions or certifying a venue as safe.",
};

export default function ReadinessChecksPage() {
  return (
    <>
      <ChecksHero />
      <WhatAreChecks />
      <DifferentLists />
      <DefinedChecks />
      <Worklist />
      <CheckHistory />
      <CompletionCount />
      <Dependencies />
      <RecordedCheck />
      <UpdatesAndChanges />
      <SharedContext />
      <ReadinessWorkflow />
      <Participation />
      <ChecksFAQ />
      <ChecksCTA />
    </>
  );
}
