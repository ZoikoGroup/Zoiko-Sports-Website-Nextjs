import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, Note, SectionTitle, cream, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const states = [
  {
    rule: "border-brand-yellow",
    kicker: "Decision",
    title: "Approved",
    text: "Riverside League Competition Director · recorded 12:15 PDT.",
  },
  {
    rule: "border-[#24163A]",
    kicker: "Schedule application",
    title: "Confirmed applied",
    text: "Pending, Applied, Failed and Unknown are shown as distinct states — never inferred from the approval alone.",
  },
];

export function ApprovalApplication() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[740px]">An approval is not yet a confirmed schedule change.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            The decision and its application to the event schedule are recorded and verified independently.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-1 md:grid-cols-2">
          {states.map((s) => (
            <RevealItem key={s.kicker} className={`border-t-[3px] ${s.rule} ${cream} px-7 py-8`}>
              <Kicker className="font-semibold">{s.kicker}</Kicker>
              <h3 className="mt-3 text-[18px] font-bold text-ink">{s.title}</h3>
              <p className="mt-3 max-w-[560px] text-[14px] leading-[1.65] text-ink-muted">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <Note variant="cream" className="mt-8">
            If an application fails after approval, the decision is preserved and an owner is surfaced — never a silent
            revert.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
