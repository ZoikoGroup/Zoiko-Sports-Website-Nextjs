import type { Metadata } from "next";
import { HandoverHero } from "@/components/operational-handover/HandoverHero";
import { WhatIsHandover } from "@/components/operational-handover/WhatIsHandover";
import { MissingActions } from "@/components/operational-handover/MissingActions";
import { FiveParts } from "@/components/operational-handover/FiveParts";
import { HandoverStages } from "@/components/operational-handover/HandoverStages";
import { HandoverLedger } from "@/components/operational-handover/HandoverLedger";
import { HandoverDetail } from "@/components/operational-handover/HandoverDetail";
import { TaskScope } from "@/components/operational-handover/TaskScope";
import { SourceChanges } from "@/components/operational-handover/SourceChanges";
import { RecipientResponses } from "@/components/operational-handover/RecipientResponses";
import { DeliveryStates } from "@/components/operational-handover/DeliveryStates";
import { RoleAccess } from "@/components/operational-handover/RoleAccess";
import { ReviewOutcomes } from "@/components/operational-handover/ReviewOutcomes";
import { HandoverFAQ } from "@/components/operational-handover/HandoverFAQ";
import { HandoverCTA } from "@/components/operational-handover/HandoverCTA";

export const metadata: Metadata = {
  title: "Operational Handover",
  description:
    "Make the next responsibility clear before event day: hand over agreed event work between organizers, venues and clubs with named owners, next steps and context.",
};

export default function OperationalHandoverPage() {
  return (
    <>
      <HandoverHero />
      <WhatIsHandover />
      <MissingActions />
      <FiveParts />
      <HandoverStages />
      <HandoverLedger />
      <HandoverDetail />
      <TaskScope />
      <SourceChanges />
      <RecipientResponses />
      <DeliveryStates />
      <RoleAccess />
      <ReviewOutcomes />
      <HandoverFAQ />
      <HandoverCTA />
    </>
  );
}
