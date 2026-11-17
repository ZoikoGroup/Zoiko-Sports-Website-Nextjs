import type { Metadata } from "next";
import { StaffHero } from "@/components/officials-event-staff/StaffHero";
import { WhatItMeans } from "@/components/officials-event-staff/WhatItMeans";
import { SixRoles } from "@/components/officials-event-staff/SixRoles";
import { CoordinationGaps } from "@/components/officials-event-staff/CoordinationGaps";
import { OneEvent } from "@/components/officials-event-staff/OneEvent";
import { Milestones } from "@/components/officials-event-staff/Milestones";
import { CurrentInstruction } from "@/components/officials-event-staff/CurrentInstruction";
import { TransmissionVsAck } from "@/components/officials-event-staff/TransmissionVsAck";
import { OneDecision } from "@/components/officials-event-staff/OneDecision";
import { SeparateLanes } from "@/components/officials-event-staff/SeparateLanes";
import { BoundedQuestion } from "@/components/officials-event-staff/BoundedQuestion";
import { InvitedScope } from "@/components/officials-event-staff/InvitedScope";
import { ControlledInvitation } from "@/components/officials-event-staff/ControlledInvitation";
import { Connectivity } from "@/components/officials-event-staff/Connectivity";
import { EventDayMoments } from "@/components/officials-event-staff/EventDayMoments";
import { PilotDecision } from "@/components/officials-event-staff/PilotDecision";
import { NoRecords } from "@/components/officials-event-staff/NoRecords";
import { StaffFAQ } from "@/components/officials-event-staff/StaffFAQ";
import { StaffCTA } from "@/components/officials-event-staff/StaffCTA";

export const metadata: Metadata = {
  title: "Officials & Event Staff",
  description:
    "Keep officials and event staff informed when event plans change: role-scoped, invitation-only participation inside an organizer- or venue-led pilot.",
};

export default function OfficialsEventStaffPage() {
  return (
    <>
      <StaffHero />
      <WhatItMeans />
      <SixRoles />
      <CoordinationGaps />
      <OneEvent />
      <Milestones />
      <CurrentInstruction />
      <TransmissionVsAck />
      <OneDecision />
      <SeparateLanes />
      <BoundedQuestion />
      <InvitedScope />
      <ControlledInvitation />
      <Connectivity />
      <EventDayMoments />
      <PilotDecision />
      <NoRecords />
      <StaffFAQ />
      <StaffCTA />
    </>
  );
}
