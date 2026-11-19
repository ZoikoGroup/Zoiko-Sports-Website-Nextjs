import type { Metadata } from "next";
import { DiscussHero } from "@/components/discuss-your-sport/DiscussHero";
import { NotAnOffer } from "@/components/discuss-your-sport/NotAnOffer";
import { ScopedConversation } from "@/components/discuss-your-sport/ScopedConversation";
import { WhoShouldStart } from "@/components/discuss-your-sport/WhoShouldStart";
import { CoordinationPattern } from "@/components/discuss-your-sport/CoordinationPattern";
import { AfterYouReachOut } from "@/components/discuss-your-sport/AfterYouReachOut";
import { BeforeYouStart } from "@/components/discuss-your-sport/BeforeYouStart";
import { DiscussFAQ } from "@/components/discuss-your-sport/DiscussFAQ";
import { DiscussCTA } from "@/components/discuss-your-sport/DiscussCTA";

export const metadata: Metadata = {
  title: "Discuss Your Sport",
  description:
    "Share the sport or competition format, the organizations involved and the coordination problem. Zoiko Sports will review whether a scoped pilot conversation is appropriate.",
};

export default function DiscussYourSportPage() {
  return (
    <>
      <DiscussHero />
      <NotAnOffer />
      <ScopedConversation />
      <WhoShouldStart />
      <CoordinationPattern />
      <AfterYouReachOut />
      <BeforeYouStart />
      <DiscussFAQ />
      <DiscussCTA />
    </>
  );
}
