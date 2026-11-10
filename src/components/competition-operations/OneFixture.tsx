import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, card, sectionPad, wrap } from "./shared";

const fixtureProblems = [
  {
    title: "Schedule drift",
    text: "A revised start time reaches the competition office, while venue access and club travel plans still reflect the old schedule.",
  },
  {
    title: "Responsibility gaps",
    text: "When a schedule changes, it is not always clear who owns the next action or who is authorized to approve it.",
  },
  {
    title: "Decision reconstruction",
    text: "Reviewing a fixture afterward is harder when the reason, approver and timing are split across separate channels.",
  },
];

export function OneFixture() {
  return (
    <section className={`border-y border-[#ebe9df] bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>One fixture. Multiple operating versions.</SectionTitle>
          <Lead className="mt-4 max-w-[720px]">
            A revised start time can reach the competition office while venue access plans and club travel arrangements
            still reflect the old schedule.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-3 md:grid-cols-3">
          {fixtureProblems.map((p, i) => (
            <RevealItem key={p.title} className={`${card} p-7`}>
              <p className="text-[12px] font-semibold text-ink/40">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-[17px] font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 max-w-[340px] text-[14px] leading-[1.65] text-ink-muted">{p.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
