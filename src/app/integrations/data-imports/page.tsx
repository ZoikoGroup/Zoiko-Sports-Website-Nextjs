import type { Metadata } from "next";
import { ImportsHero } from "@/components/data-imports/ImportsHero";
import { StartsWithPermission } from "@/components/data-imports/StartsWithPermission";
import { ScopeOutcomes } from "@/components/data-imports/ScopeOutcomes";
import { RecordCategories } from "@/components/data-imports/RecordCategories";
import { RecordOwnership } from "@/components/data-imports/RecordOwnership";
import { ValidationSequence } from "@/components/data-imports/ValidationSequence";
import { SafeFailure } from "@/components/data-imports/SafeFailure";
import { HumanAuthority } from "@/components/data-imports/HumanAuthority";
import { PilotAssessment } from "@/components/data-imports/PilotAssessment";
import { ImportsFAQ } from "@/components/data-imports/ImportsFAQ";
import { ImportsCTA } from "@/components/data-imports/ImportsCTA";

export const metadata: Metadata = {
  title: "Data Imports",
  description:
    "How existing records may be considered within a defined pilot scope, subject to record ownership, rights, validation, security requirements and implementation evidence.",
};

export default function DataImportsPage() {
  return (
    <>
      <ImportsHero />
      <StartsWithPermission />
      <ScopeOutcomes />
      <RecordCategories />
      <RecordOwnership />
      <ValidationSequence />
      <SafeFailure />
      <HumanAuthority />
      <PilotAssessment />
      <ImportsFAQ />
      <ImportsCTA />
    </>
  );
}
