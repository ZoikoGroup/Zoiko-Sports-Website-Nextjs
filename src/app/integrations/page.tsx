import type { Metadata } from "next";
import { IntegrationHero } from "@/components/integration-overview/IntegrationHero";
import { StartsWithUnderstanding } from "@/components/integration-overview/StartsWithUnderstanding";
import { ScopeOutcomes } from "@/components/integration-overview/ScopeOutcomes";
import { WrittenScope } from "@/components/integration-overview/WrittenScope";
import { DataRights } from "@/components/integration-overview/DataRights";
import { SixQuestions } from "@/components/integration-overview/SixQuestions";
import { EventTimeline } from "@/components/integration-overview/EventTimeline";
import { ScopingPrinciple } from "@/components/integration-overview/ScopingPrinciple";
import { IntegrationFAQ } from "@/components/integration-overview/IntegrationFAQ";
import { IntegrationCTA } from "@/components/integration-overview/IntegrationCTA";

export const metadata: Metadata = {
  title: "Integrations Overview",
  description:
    "How Zoiko Sports approaches imports, data connections and permissions through a scoped review of the event, its participating organizations and existing systems.",
};

export default function IntegrationsOverviewPage() {
  return (
    <>
      <IntegrationHero />
      <StartsWithUnderstanding />
      <ScopeOutcomes />
      <WrittenScope />
      <DataRights />
      <SixQuestions />
      <EventTimeline />
      <ScopingPrinciple />
      <IntegrationFAQ />
      <IntegrationCTA />
    </>
  );
}
