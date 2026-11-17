import type { Metadata } from "next";
import { VenueHero } from "@/components/venue-operators/VenueHero";
import { WhatItMeans } from "@/components/venue-operators/WhatItMeans";
import { ThreeJobs } from "@/components/venue-operators/ThreeJobs";
import { OwnsReadiness } from "@/components/venue-operators/OwnsReadiness";
import { OneEvent } from "@/components/venue-operators/OneEvent";
import { ReadinessChecks } from "@/components/venue-operators/ReadinessChecks";
import { WhoSupplies } from "@/components/venue-operators/WhoSupplies";
import { RepairImpact } from "@/components/venue-operators/RepairImpact";
import { RequestDecision } from "@/components/venue-operators/RequestDecision";
import { OwnRecords } from "@/components/venue-operators/OwnRecords";
import { VenueJourney } from "@/components/venue-operators/VenueJourney";
import { StartPilot } from "@/components/venue-operators/StartPilot";
import { VenueFAQ } from "@/components/venue-operators/VenueFAQ";
import { VenueCTA } from "@/components/venue-operators/VenueCTA";

export const metadata: Metadata = {
  title: "Venue Operators",
  description:
    "Turn the organizer's schedule into clear venue ownership: agreed readiness checks, accountable owners and event-day exceptions, scoped to your venue's role.",
};

export default function VenueOperatorsPage() {
  return (
    <>
      <VenueHero />
      <WhatItMeans />
      <ThreeJobs />
      <OwnsReadiness />
      <OneEvent />
      <ReadinessChecks />
      <WhoSupplies />
      <RepairImpact />
      <RequestDecision />
      <OwnRecords />
      <VenueJourney />
      <StartPilot />
      <VenueFAQ />
      <VenueCTA />
    </>
  );
}
