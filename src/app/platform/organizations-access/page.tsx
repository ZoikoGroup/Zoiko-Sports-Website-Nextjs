import type { Metadata } from "next";
import { AccessHero } from "@/components/organizations-access/AccessHero";
import { AccessFacts } from "@/components/organizations-access/AccessFacts";
import { AccessProblems } from "@/components/organizations-access/AccessProblems";
import { ThreeScopes } from "@/components/organizations-access/ThreeScopes";
import { AccessChecks } from "@/components/organizations-access/AccessChecks";
import { RoleBoundaries } from "@/components/organizations-access/RoleBoundaries";
import { AudienceClasses } from "@/components/organizations-access/AudienceClasses";
import { DenialSafety } from "@/components/organizations-access/DenialSafety";
import { AccessGovernance } from "@/components/organizations-access/AccessGovernance";
import { OrgViews } from "@/components/organizations-access/OrgViews";
import { PilotScope } from "@/components/organizations-access/PilotScope";
import { AccessFAQ } from "@/components/organizations-access/AccessFAQ";
import { AccessCTA } from "@/components/organizations-access/AccessCTA";

export const metadata: Metadata = {
  title: "Organizations & Access",
  description:
    "Scope event information and actions to participating organizations, authorized roles and defined responsibilities, without blanket visibility into another organization's records.",
};

export default function OrganizationsAccessPage() {
  return (
    <>
      <AccessHero />
      <AccessFacts />
      <AccessProblems />
      <ThreeScopes />
      <AccessChecks />
      <RoleBoundaries />
      <AudienceClasses />
      <DenialSafety />
      <AccessGovernance />
      <OrgViews />
      <PilotScope />
      <AccessFAQ />
      <AccessCTA />
    </>
  );
}
