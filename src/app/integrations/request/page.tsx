import type { Metadata } from "next";
import { RequestHero } from "@/components/request-an-integration/RequestHero";
import { NotAConnectorPromise } from "@/components/request-an-integration/NotAConnectorPromise";
import { ScopingSteps } from "@/components/request-an-integration/ScopingSteps";
import { ExchangeMethods } from "@/components/request-an-integration/ExchangeMethods";
import { DataOwnership } from "@/components/request-an-integration/DataOwnership";
import { BeforeYouStart } from "@/components/request-an-integration/BeforeYouStart";
import { RequestFAQ } from "@/components/request-an-integration/RequestFAQ";
import { RequestCTA } from "@/components/request-an-integration/RequestCTA";

export const metadata: Metadata = {
  title: "Request an Integration",
  description:
    "Discuss how your existing systems, data rights, workflow and decision owners fit a scoped pilot. No specific connector or delivery is implied.",
};

export default function RequestIntegrationPage() {
  return (
    <>
      <RequestHero />
      <NotAConnectorPromise />
      <ScopingSteps />
      <ExchangeMethods />
      <DataOwnership />
      <BeforeYouStart />
      <RequestFAQ />
      <RequestCTA />
    </>
  );
}
