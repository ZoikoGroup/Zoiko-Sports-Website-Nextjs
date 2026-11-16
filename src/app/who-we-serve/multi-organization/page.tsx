import type { Metadata } from "next";
import { MultiHero } from "@/components/multi-organization-operations/MultiHero";
import { WhatIsMulti } from "@/components/multi-organization-operations/WhatIsMulti";
import { ThreeOrgs } from "@/components/multi-organization-operations/ThreeOrgs";
import { WhatMoves } from "@/components/multi-organization-operations/WhatMoves";
import { OneSpine } from "@/components/multi-organization-operations/OneSpine";
import { SnapshotViews } from "@/components/multi-organization-operations/SnapshotViews";
import { ScheduleChange } from "@/components/multi-organization-operations/ScheduleChange";
import { WhichOrgs } from "@/components/multi-organization-operations/WhichOrgs";
import { PermissionMatrix } from "@/components/multi-organization-operations/PermissionMatrix";
import { HandoffSteps } from "@/components/multi-organization-operations/HandoffSteps";
import { TaskVsDecide } from "@/components/multi-organization-operations/TaskVsDecide";
import { EventDayMoments } from "@/components/multi-organization-operations/EventDayMoments";
import { DeliveredNotAck } from "@/components/multi-organization-operations/DeliveredNotAck";
import { TwoRequests } from "@/components/multi-organization-operations/TwoRequests";
import { ClosedEvent } from "@/components/multi-organization-operations/ClosedEvent";
import { AccessBounded } from "@/components/multi-organization-operations/AccessBounded";
import { PeopleInCharge } from "@/components/multi-organization-operations/PeopleInCharge";
import { StartOneEvent } from "@/components/multi-organization-operations/StartOneEvent";
import { MultiFAQ } from "@/components/multi-organization-operations/MultiFAQ";
import { MultiCTA } from "@/components/multi-organization-operations/MultiCTA";

export const metadata: Metadata = {
  title: "Multi-Organization Operations",
  description:
    "Coordinate one event across organizations and keep responsibility clear: shared event context for organizers, venues and clubs, with separate decisions, records and access.",
};

export default function MultiOrganizationPage() {
  return (
    <>
      <MultiHero />
      <WhatIsMulti />
      <ThreeOrgs />
      <WhatMoves />
      <OneSpine />
      <SnapshotViews />
      <ScheduleChange />
      <WhichOrgs />
      <PermissionMatrix />
      <HandoffSteps />
      <TaskVsDecide />
      <EventDayMoments />
      <DeliveredNotAck />
      <TwoRequests />
      <ClosedEvent />
      <AccessBounded />
      <PeopleInCharge />
      <StartOneEvent />
      <MultiFAQ />
      <MultiCTA />
    </>
  );
}
