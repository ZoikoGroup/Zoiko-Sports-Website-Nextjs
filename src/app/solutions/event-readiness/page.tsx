import type { Metadata } from "next";
import { ReadinessHero } from "@/components/event-readiness/ReadinessHero";
import { WhatIsReadiness } from "@/components/event-readiness/WhatIsReadiness";
import { PreparationLists } from "@/components/event-readiness/PreparationLists";
import { FourElements } from "@/components/event-readiness/FourElements";
import { InspectChecks } from "@/components/event-readiness/InspectChecks";
import { CompletionRecord } from "@/components/event-readiness/CompletionRecord";
import { AuthorizedViews } from "@/components/event-readiness/AuthorizedViews";
import { WiderWorkflow } from "@/components/event-readiness/WiderWorkflow";
import { TrustBoundaries } from "@/components/event-readiness/TrustBoundaries";
import { Participation } from "@/components/event-readiness/Participation";
import { RelatedPages } from "@/components/event-readiness/RelatedPages";
import { ReadinessFAQ } from "@/components/event-readiness/ReadinessFAQ";
import { ReadinessCTA } from "@/components/event-readiness/ReadinessCTA";

export const metadata: Metadata = {
  title: "Event Readiness",
  description:
    "Help organizers and venue teams align agreed checks, accountable owners, due times and approval dependencies — within each organization's authorized view.",
};

export default function EventReadinessPage() {
  return (
    <>
      <ReadinessHero />
      <WhatIsReadiness />
      <PreparationLists />
      <FourElements />
      <InspectChecks />
      <CompletionRecord />
      <AuthorizedViews />
      <WiderWorkflow />
      <TrustBoundaries />
      <Participation />
      <RelatedPages />
      <ReadinessFAQ />
      <ReadinessCTA />
    </>
  );
}
