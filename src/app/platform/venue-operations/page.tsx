import type { Metadata } from "next";
import { VenueHero } from "@/components/venue-operations/VenueHero";
import { WhatIsVenueOps } from "@/components/venue-operations/WhatIsVenueOps";
import { PlanChanges } from "@/components/venue-operations/PlanChanges";
import { VenuePicture } from "@/components/venue-operations/VenuePicture";
import { CheckHistory } from "@/components/venue-operations/CheckHistory";
import { Timetable } from "@/components/venue-operations/Timetable";
import { RaiseImpact } from "@/components/venue-operations/RaiseImpact";
import { DecisionAuthority } from "@/components/venue-operations/DecisionAuthority";
import { RepairImpact } from "@/components/venue-operations/RepairImpact";
import { RequestDecisionPublish } from "@/components/venue-operations/RequestDecisionPublish";
import { SharedAccess } from "@/components/venue-operations/SharedAccess";
import { SourceContext } from "@/components/venue-operations/SourceContext";
import { Participation } from "@/components/venue-operations/Participation";
import { VenueFAQ } from "@/components/venue-operations/VenueFAQ";
import { VenueCTA } from "@/components/venue-operations/VenueCTA";

export const metadata: Metadata = {
  title: "Venue Operations",
  description:
    "Connect agreed venue checks, accountable owners, organizer handoffs and event-day updates around a shared event plan, while each organization retains its own decisions and permissions.",
};

export default function VenueOperationsPage() {
  return (
    <>
      <VenueHero />
      <WhatIsVenueOps />
      <PlanChanges />
      <VenuePicture />
      <CheckHistory />
      <Timetable />
      <RaiseImpact />
      <DecisionAuthority />
      <RepairImpact />
      <RequestDecisionPublish />
      <SharedAccess />
      <SourceContext />
      <Participation />
      <VenueFAQ />
      <VenueCTA />
    </>
  );
}
