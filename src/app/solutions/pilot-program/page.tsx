import type { Metadata } from "next";
import { PilotHero } from "@/components/pilot-program/PilotHero";
import { WhatIsPilot } from "@/components/pilot-program/WhatIsPilot";
import { WhoShouldRequest } from "@/components/pilot-program/WhoShouldRequest";
import { BoundedScope } from "@/components/pilot-program/BoundedScope";
import { FiveStages } from "@/components/pilot-program/FiveStages";
import { KickoffDocs } from "@/components/pilot-program/KickoffDocs";
import { ProvideRoles } from "@/components/pilot-program/ProvideRoles";
import { AgreedFirst } from "@/components/pilot-program/AgreedFirst";
import { ScopeBoard } from "@/components/pilot-program/ScopeBoard";
import { AgreeMeasures } from "@/components/pilot-program/AgreeMeasures";
import { UsefulSignals } from "@/components/pilot-program/UsefulSignals";
import { PilotEnd } from "@/components/pilot-program/PilotEnd";
import { CostFacts } from "@/components/pilot-program/CostFacts";
import { PilotForm } from "@/components/pilot-program/PilotForm";
import { PilotCTA } from "@/components/pilot-program/PilotCTA";

export const metadata: Metadata = {
  title: "Pilot Program",
  description:
    "Start with one event and prove the workflow before expanding: a bounded, five-stage Zoiko Sports pilot agreed in writing with the organizations delivering the event.",
};

export default function PilotProgramPage() {
  return (
    <>
      <PilotHero />
      <WhatIsPilot />
      <WhoShouldRequest />
      <BoundedScope />
      <FiveStages />
      <KickoffDocs />
      <ProvideRoles />
      <AgreedFirst />
      <ScopeBoard />
      <AgreeMeasures />
      <UsefulSignals />
      <PilotEnd />
      <CostFacts />
      <PilotForm />
      <PilotCTA />
    </>
  );
}
