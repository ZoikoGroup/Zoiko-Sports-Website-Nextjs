import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cream, Lead, line, sectionPad, SectionTitle, wrap } from "./shared";

const stages = [
  {
    stage: "Plan",
    title: "Organizer confirms the schedule; venue and clubs confirm dependencies.",
    output: "Output: agreed event plan.",
  },
  {
    stage: "Prepare",
    title: "Venue records readiness checks; clubs complete their own preparation.",
    output: "Output: readiness status by owner.",
  },
  {
    stage: "Coordinate",
    title: "Event-day exceptions are raised, requests are made, and the organizer decides.",
    output: "Output: exception and decision record.",
  },
  {
    stage: "Review",
    title: "Each organization reviews its own record and open follow-up work.",
    output: "Output: closed-loop summary.",
  },
];

export function WorkMoves() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[640px]">How work moves across organization boundaries.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            One event moves through four stages — each with its own owner, input and output.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-0.5 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((s, i) => (
            <RevealItem
              key={s.stage}
              className={`group h-full border ${line} ${cream} px-5 py-7 transition-colors duration-300 hover:border-brand-yellow/70`}
            >
              <p className="text-[12px] font-semibold tracking-[0.04em] text-ink/40">
                {String(i + 1).padStart(2, "0")} · {s.stage}
              </p>
              <h3 className="mt-2 text-[15px] font-semibold leading-[1.5] text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {s.title}
              </h3>
              <p className="mt-1.5 text-[13.5px] text-ink-muted">{s.output}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
