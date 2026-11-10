import type { Metadata } from "next";
import { RecordsHero } from "@/components/operational-records/RecordsHero";
import { RecordFacts } from "@/components/operational-records/RecordFacts";
import { LostSource } from "@/components/operational-records/LostSource";
import { EventTimeline } from "@/components/operational-records/EventTimeline";
import { RecordFamilies } from "@/components/operational-records/RecordFamilies";
import { ScopedSearch } from "@/components/operational-records/ScopedSearch";
import { RecordDetail } from "@/components/operational-records/RecordDetail";
import { OriginStates } from "@/components/operational-records/OriginStates";
import { ScopedAccess } from "@/components/operational-records/ScopedAccess";
import { Governance } from "@/components/operational-records/Governance";
import { RoleViews } from "@/components/operational-records/RoleViews";
import { PilotStart } from "@/components/operational-records/PilotStart";
import { RecordsFAQ } from "@/components/operational-records/RecordsFAQ";
import { RecordsCTA } from "@/components/operational-records/RecordsCTA";

export const metadata: Metadata = {
  title: "Operational Records",
  description:
    "Connect each event record with its source, responsible organization, version history, and the decisions and notices that reference it.",
};

export default function OperationalRecordsPage() {
  return (
    <>
      <RecordsHero />
      <RecordFacts />
      <LostSource />
      <EventTimeline />
      <RecordFamilies />
      <ScopedSearch />
      <RecordDetail />
      <OriginStates />
      <ScopedAccess />
      <Governance />
      <RoleViews />
      <PilotStart />
      <RecordsFAQ />
      <RecordsCTA />
    </>
  );
}
