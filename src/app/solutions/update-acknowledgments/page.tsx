import type { Metadata } from "next";
import { AckHero } from "@/components/update-acknowledgments/AckHero";
import { WhatIsAck } from "@/components/update-acknowledgments/WhatIsAck";
import { AwarenessStates } from "@/components/update-acknowledgments/AwarenessStates";
import { WhatChanged } from "@/components/update-acknowledgments/WhatChanged";
import { StatusMeaning } from "@/components/update-acknowledgments/StatusMeaning";
import { RequiredResponses } from "@/components/update-acknowledgments/RequiredResponses";
import { ExactInstruction } from "@/components/update-acknowledgments/ExactInstruction";
import { WhoResponds } from "@/components/update-acknowledgments/WhoResponds";
import { AffirmVersion } from "@/components/update-acknowledgments/AffirmVersion";
import { LegitimateFollowUp } from "@/components/update-acknowledgments/LegitimateFollowUp";
import { RevisedUpdate } from "@/components/update-acknowledgments/RevisedUpdate";
import { ParticipantViews } from "@/components/update-acknowledgments/ParticipantViews";
import { ResponseChain } from "@/components/update-acknowledgments/ResponseChain";
import { Unavailable } from "@/components/update-acknowledgments/Unavailable";
import { LeastPrivilege } from "@/components/update-acknowledgments/LeastPrivilege";
import { StartOneEvent } from "@/components/update-acknowledgments/StartOneEvent";
import { AckFAQ } from "@/components/update-acknowledgments/AckFAQ";
import { AckCTA } from "@/components/update-acknowledgments/AckCTA";

export const metadata: Metadata = {
  title: "Update Acknowledgments",
  description:
    "Know which event updates have been acknowledged: a clearer, version-linked record of operational updates and acknowledgments across authorized teams.",
};

export default function UpdateAcknowledgmentsPage() {
  return (
    <>
      <AckHero />
      <WhatIsAck />
      <AwarenessStates />
      <WhatChanged />
      <StatusMeaning />
      <RequiredResponses />
      <ExactInstruction />
      <WhoResponds />
      <AffirmVersion />
      <LegitimateFollowUp />
      <RevisedUpdate />
      <ParticipantViews />
      <ResponseChain />
      <Unavailable />
      <LeastPrivilege />
      <StartOneEvent />
      <AckFAQ />
      <AckCTA />
    </>
  );
}
