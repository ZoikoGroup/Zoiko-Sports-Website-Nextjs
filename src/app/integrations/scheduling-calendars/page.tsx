import type { Metadata } from "next";
import { ScheduleHero } from "@/components/scheduling-calendars/ScheduleHero";
import { DesignProposal } from "@/components/scheduling-calendars/DesignProposal";
import { WhoItsFor } from "@/components/scheduling-calendars/WhoItsFor";
import { ThreeModes } from "@/components/scheduling-calendars/ThreeModes";
import { BaselineSchedule } from "@/components/scheduling-calendars/BaselineSchedule";
import { ChangeChain } from "@/components/scheduling-calendars/ChangeChain";
import { DeliveryMatrix } from "@/components/scheduling-calendars/DeliveryMatrix";
import { VenueRecurrence } from "@/components/scheduling-calendars/VenueRecurrence";
import { SystemsDataRights } from "@/components/scheduling-calendars/SystemsDataRights";
import { AvailabilityProof } from "@/components/scheduling-calendars/AvailabilityProof";
import { ScheduleFAQ } from "@/components/scheduling-calendars/ScheduleFAQ";
import { ScheduleCTA } from "@/components/scheduling-calendars/ScheduleCTA";

export const metadata: Metadata = {
  title: "Scheduling & Calendars",
  description:
    "An evidence-gated design for schedule exchange assessment and shared calendar visibility between organizations, clubs and venues — not a live calendar integration.",
};

export default function SchedulingCalendarsPage() {
  return (
    <>
      <ScheduleHero />
      <DesignProposal />
      <WhoItsFor />
      <ThreeModes />
      <BaselineSchedule />
      <ChangeChain />
      <DeliveryMatrix />
      <VenueRecurrence />
      <SystemsDataRights />
      <AvailabilityProof />
      <ScheduleFAQ />
      <ScheduleCTA />
    </>
  );
}
