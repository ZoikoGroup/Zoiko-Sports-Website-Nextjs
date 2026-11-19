import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { altBg, Kicker, Lead, line, ruled, sectionPad, SectionTitle, wrap } from "./shared";

const roles = [
  {
    role: "Competition organizer",
    incoming: "A fixture’s venue or kickoff time changes.",
    next: "Confirm the updated schedule with every affected club and venue.",
    note: "A proposed change is recorded, not auto-applied.",
  },
  {
    role: "Venue operations",
    incoming: "Readiness checks due ahead of kickoff.",
    next: "Confirm owned checks and flag what’s outstanding.",
    note: "A completed check is not a safety certification.",
  },
  {
    role: "Club / team operations",
    incoming: "A notification about a gate, timing or access change.",
    next: "Acknowledge receipt so the sender has a record.",
    note: "Sent is not the same as received or acknowledged.",
  },
];

export function OperatingWork() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[720px]">The operating work between fixtures and venues.</SectionTitle>
          <Lead className="mt-4 max-w-[780px] text-[15.5px]">
            A fixture touches several organizations before, during and after kickoff. These are examples of the kind of
            handoff a scoped conversation could cover — not a description of shipped football features.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-0.5 md:grid-cols-3">
          {roles.map((r) => (
            <RevealItem
              key={r.role}
              className={`group flex h-full flex-col rounded-2xl border ${line} bg-white px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/70 hover:shadow-[0_18px_40px_-24px_rgba(36,22,58,0.35)]`}
            >
              <h3 className="text-[16px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {r.role}
              </h3>
              <Kicker className="mt-4 text-[10.5px]!">Incoming</Kicker>
              <p className="mt-1 text-[13.5px] leading-[1.6] text-ink-muted">{r.incoming}</p>
              <Kicker className="mt-3 text-[10.5px]!">Accountable next step</Kicker>
              <p className="mt-1 text-[13.5px] leading-[1.6] text-ink-muted">{r.next}</p>
              <div className="mt-auto pt-4">
                <p className={`border-t ${line} pt-3 text-[12.5px] italic text-ink/45`}>{r.note}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
