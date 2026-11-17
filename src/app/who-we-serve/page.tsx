import type { Metadata } from "next";
import { ServeHero } from "@/components/who-we-serve-overview/ServeHero";
import { DesignedFor } from "@/components/who-we-serve-overview/DesignedFor";
import { MatchRole } from "@/components/who-we-serve-overview/MatchRole";
import {
  ClubSpotlight,
  OrganizerSpotlight,
  VenueSpotlight,
} from "@/components/who-we-serve-overview/AudienceSpotlight";
import { OneEvent } from "@/components/who-we-serve-overview/OneEvent";
import { WorkMoves } from "@/components/who-we-serve-overview/WorkMoves";
import { FourRecords } from "@/components/who-we-serve-overview/FourRecords";
import { WhoCanApprove } from "@/components/who-we-serve-overview/WhoCanApprove";
import { VenueChange } from "@/components/who-we-serve-overview/VenueChange";
import { StartPilot } from "@/components/who-we-serve-overview/StartPilot";
import { OtherParties } from "@/components/who-we-serve-overview/OtherParties";
import { ReplaceAuthority } from "@/components/who-we-serve-overview/ReplaceAuthority";
import { ServeFAQ } from "@/components/who-we-serve-overview/ServeFAQ";
import { ServeCTA } from "@/components/who-we-serve-overview/ServeCTA";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Built for the organizations that deliver sport: leagues and competition organizers, clubs and teams, and venue operators, each with clear, scoped responsibilities.",
};

export default function WhoWeServePage() {
  return (
    <>
      <ServeHero />
      <DesignedFor />
      <MatchRole />
      <OrganizerSpotlight />
      <ClubSpotlight />
      <VenueSpotlight />
      <OneEvent />
      <WorkMoves />
      <FourRecords />
      <WhoCanApprove />
      <VenueChange />
      <StartPilot />
      <OtherParties />
      <ReplaceAuthority />
      <ServeFAQ />
      <ServeCTA />
    </>
  );
}
