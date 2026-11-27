import { Check } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cream, divider, Lead, line, PrimaryButton, sectionPad, SectionTitle } from "./shared";

const checklist = [
  "The system category and its rough purpose",
  "Who owns or administers the data",
  "Timing and any scheduling constraints",
  "Whether a manual fallback would be acceptable",
];

export function BeforeYouStart() {
  return (
    <section className={`bg-white ${divider} ${sectionPad}`}>
      <div className="mx-auto w-full max-w-[980px] px-5 sm:px-8">
        <Reveal>
          <SectionTitle>Before you start.</SectionTitle>
          <Lead className="mt-4">
            Keep the first message high-level. A reviewer asks for specifics during scoping — not through this page.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-6 space-y-2.5">
          {checklist.map((c) => (
            <RevealItem
              key={c}
              className={`flex items-center gap-3 rounded-lg border ${line} ${cream} px-5 py-3.5 text-[14px] text-ink/80 transition-colors duration-300 hover:bg-white`}
            >
              <Check className="h-3.5 w-3.5 shrink-0 text-ink" strokeWidth={2.5} aria-hidden />
              {c}
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <p
            className={`mt-5 rounded-lg border border-dashed border-[#D9D5C6] ${cream} px-5 py-5 text-[13.5px] leading-[1.6] text-ink/75`}
          >
            Do not include credentials, API keys, certificates, exported files or screenshots containing personal or
            sensitive data in your request.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
            <PrimaryButton href="/pilot?topic=integrations">Discuss Integrations</PrimaryButton>
            <p className="text-[12.5px] text-ink/45">
              A request starts a review; it is not confirmation of a connector, price or delivery date.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
