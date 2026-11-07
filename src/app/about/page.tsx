import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { WhatIsZoiko } from "@/components/about/WhatIsZoiko";
import { Fragmentation } from "@/components/about/Fragmentation";
import { Problems } from "@/components/about/Problems";
import { VisionMission } from "@/components/about/VisionMission";
import { OperatingLayer } from "@/components/about/OperatingLayer";
import { Audiences } from "@/components/about/Audiences";
import { Differentiators } from "@/components/about/Differentiators";
import { Lifecycle } from "@/components/about/Lifecycle";
import { PlatformLayers } from "@/components/about/PlatformLayers";
import { TrustAccess } from "@/components/about/TrustAccess";
import { CompanyInfo } from "@/components/about/CompanyInfo";
import { AboutFAQ } from "@/components/about/AboutFAQ";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zoiko Sports is a global sports technology platform from Zoiko Tech Inc. helping competitions, venues and clubs coordinate operations, connect trusted information and make better-informed decisions.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhatIsZoiko />
      <Fragmentation />
      <Problems />
      <VisionMission />
      <OperatingLayer />
      <Audiences />
      <Differentiators />
      <Lifecycle />
      <PlatformLayers />
      <TrustAccess />
      <CompanyInfo />
      <AboutFAQ />
      <AboutCTA />
    </>
  );
}
