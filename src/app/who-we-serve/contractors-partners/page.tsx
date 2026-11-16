import type { Metadata } from "next";
import { PartnerHero } from "@/components/contractors-service-partners/PartnerHero";
import { WhatPartnersMean } from "@/components/contractors-service-partners/WhatPartnersMean";
import { WhyHard } from "@/components/contractors-service-partners/WhyHard";
import { OneEvent } from "@/components/contractors-service-partners/OneEvent";
import { PartnerJourney } from "@/components/contractors-service-partners/PartnerJourney";
import { PartnerSees } from "@/components/contractors-service-partners/PartnerSees";
import { AuthorityLevels } from "@/components/contractors-service-partners/AuthorityLevels";
import { ControlledInvitation } from "@/components/contractors-service-partners/ControlledInvitation";
import { TaskBrief } from "@/components/contractors-service-partners/TaskBrief";
import { QuestionNotChange } from "@/components/contractors-service-partners/QuestionNotChange";
import { SentVsAck } from "@/components/contractors-service-partners/SentVsAck";
import { PlansChange } from "@/components/contractors-service-partners/PlansChange";
import { StillDecide } from "@/components/contractors-service-partners/StillDecide";
import { PilotScope } from "@/components/contractors-service-partners/PilotScope";
import { PartnerFAQ } from "@/components/contractors-service-partners/PartnerFAQ";
import { PartnerCTA } from "@/components/contractors-service-partners/PartnerCTA";

export const metadata: Metadata = {
  title: "Contractors & Service Partners",
  description:
    "Bring service partners into the event workflow without losing accountability: scoped, sponsor-invited participation inside an agreed pilot.",
};

export default function ContractorsPartnersPage() {
  return (
    <>
      <PartnerHero />
      <WhatPartnersMean />
      <WhyHard />
      <OneEvent />
      <PartnerJourney />
      <PartnerSees />
      <AuthorityLevels />
      <ControlledInvitation />
      <TaskBrief />
      <QuestionNotChange />
      <SentVsAck />
      <PlansChange />
      <StillDecide />
      <PilotScope />
      <PartnerFAQ />
      <PartnerCTA />
    </>
  );
}
