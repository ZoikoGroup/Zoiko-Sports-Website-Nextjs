import type { Metadata } from "next";
import { OperatingModelsHero } from "@/components/operating-models/OperatingModelsHero";
import { ApproachDifferentSports } from "@/components/operating-models/ApproachDifferentSports";
import { ConsistentEventFormats } from "@/components/operating-models/ConsistentEventFormats";
import { DefinedForYourSport } from "@/components/operating-models/DefinedForYourSport";
import { DifferentOrganizations } from "@/components/operating-models/DifferentOrganizations";
import { IllustrativeWorkflow } from "@/components/operating-models/IllustrativeWorkflow";
import { SupportedDestination } from "@/components/operating-models/SupportedDestination";
import { StartSpecificEvent } from "@/components/operating-models/StartSpecificEvent";
import { OperatingScopeFAQ } from "@/components/operating-models/OperatingScopeFAQ";
import { OperatingModelsCTA } from "@/components/operating-models/OperatingModelsCTA";

export const metadata: Metadata = {
  title: "Sports Operating Models",
  description:
    "Different sports. Shared operational responsibilities. How Zoiko Sports coordinates competition and venue responsibilities across event formats.",
};

export default function OperatingModelsPage() {
  return (
    <>
      <OperatingModelsHero />
      <ApproachDifferentSports />
      <ConsistentEventFormats />
      <DefinedForYourSport />
      <DifferentOrganizations />
      <IllustrativeWorkflow />
      <SupportedDestination />
      <StartSpecificEvent />
      <OperatingScopeFAQ />
      <OperatingModelsCTA />
    </>
  );
}
