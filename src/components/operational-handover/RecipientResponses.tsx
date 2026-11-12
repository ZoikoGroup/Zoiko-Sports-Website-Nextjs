import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, card, pad2, sectionPad, wrap } from "./shared";

const lifecycle = ["Drafted", "Submitted", "Recipient action requested", "Response recorded"];

const responses = [
  {
    title: "Accepted",
    text: "Accepted for the stated next action — version 1.",
    note: "Not formal schedule approval, safety authorization or liability transfer.",
  },
  {
    title: "Clarification requested",
    text: "The receiving team needs more information before accepting this version.",
    note: "Neither accepted nor declined; sender follow-up required.",
  },
  {
    title: "Declined",
    text: "This proposed handover was declined. The sender must review the next step.",
    note: "An explicit, bounded refusal — not a fault assignment.",
  },
  {
    title: "Escalation requested",
    text: "Escalation requested. No decision is implied until a responsible person responds.",
    note: "Policy-defined human review, not an automatic verdict.",
  },
];

export function RecipientResponses() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[740px]">
            Accept, clarify, decline or escalate — never equate delivery with response.
          </SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            A sender cannot accept on the recipient&apos;s behalf without separately verified delegated authority.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-y-5 border-t-[3px] border-brand-yellow pt-5 sm:grid-cols-2 lg:grid-cols-4">
          {lifecycle.map((s, i) => (
            <RevealItem key={s} className="group">
              <p className="text-[12px] font-semibold text-ink/40">{pad2(i + 1)}</p>
              <h3 className="mt-2 text-[15.5px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {s}
              </h3>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {responses.map((r) => (
            <RevealItem key={r.title} className={`${card} bg-white p-6`}>
              <h3 className="text-[16px] font-semibold text-ink">{r.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">{r.text}</p>
              <p className="mt-3 text-[13px] italic leading-[1.55] text-ink/45">{r.note}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
