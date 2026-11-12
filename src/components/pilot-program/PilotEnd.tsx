import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, card, cream, sectionPad, wrap } from "./shared";

const outcomes = [
  {
    title: "Extend scope",
    text: "Continue with a new written agreement for additional events or fixtures.",
  },
  {
    title: "Revise and reassess",
    text: "Adjust scope, participants or measures and run a revised evaluation.",
  },
  {
    title: "Stop",
    text: "End the pilot with no further commitment — a legitimate outcome, not a failure state.",
  },
];

export function PilotEnd() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>What happens at the end of a pilot.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            A human decision — never an assumed success or automatic renewal.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid md:grid-cols-3">
          {outcomes.map((o) => (
            <RevealItem key={o.title} className={`${card} ${cream} p-6`}>
              <h3 className="text-[16px] font-semibold text-ink">{o.title}</h3>
              <p className="mt-2.5 max-w-[340px] text-[14px] leading-[1.6] text-ink-muted">{o.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
