import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, Note, SectionTitle, cream, sectionPad, wrap } from "./shared";

const cases = [
  { label: "Pending", title: "Awaiting response", text: "Delivered, but no acknowledgment action has been recorded yet." },
  { label: "Unreachable", title: "Delivery not confirmed", text: "No channel evidence of delivery exists for this recipient." },
  { label: "Clarification", title: "Requires clarification", text: "The recipient asked a question before responding." },
  { label: "Unable", title: "Cannot affirm", text: "The recipient reported they could not truthfully acknowledge." },
];

export function LegitimateFollowUp() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Who needs a legitimate follow-up?</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            &quot;Still awaiting affirmative acknowledgment&quot; and &quot;unable to confirm delivery&quot; are distinct.
            An unknown status never auto-converts to failed or acknowledged after a timeout.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <RevealItem
              key={c.label}
              className={`group h-full rounded-2xl border border-[#DEDAD0] ${cream} px-5 py-6 transition-colors duration-300 hover:border-brand-yellow/70`}
            >
              <Kicker className="text-[10.5px]">{c.label}</Kicker>
              <h3 className="mt-2 text-[15px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {c.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-muted">{c.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15}>
          <Note variant="cream" className="mt-4 text-[13.5px]">
            &quot;We could not confirm delivery. Use the agreed event communication procedure.&quot; No unsanctioned
            reminder outreach is assumed.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
