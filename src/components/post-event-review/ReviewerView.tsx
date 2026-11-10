import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Note, SampleTag, SectionTitle, altBg, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const context = [
  "Event: Riverside Invitational",
  "Acting org: Riverside League",
  "Review opened: Sep 27, 09:00 PDT",
  "Version: 3",
];

/** Fictional sample data — illustrative only. */
const stats = [
  { value: 7, label: "Sources available" },
  { value: 1, label: "Follow-ups open" },
  { value: 2, label: "Decisions to examine" },
  { value: 0, label: "Awaiting acknowledgment" },
];

export function ReviewerView() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">What a reviewer sees first.</SectionTitle>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-8 flex flex-wrap items-center gap-y-2 rounded-xl border border-[#DEDAD0] bg-white px-5 py-4">
            {context.map((c, i) => (
              <li key={c} className="flex items-center font-heading text-[13.5px] font-semibold text-ink">
                {i > 0 && (
                  <span aria-hidden="true" className="mx-5 h-3.5 w-px bg-[#DEDAD0]" />
                )}
                {c}
              </li>
            ))}
          </ul>
        </Reveal>

        <RevealGroup className="mt-8 grid grid-cols-2 border-l border-t border-[#DEDAD0] lg:grid-cols-4">
          {stats.map((s) => (
            <RevealItem
              key={s.label}
              className="border-b border-r border-[#DEDAD0] bg-white px-5 py-6 transition-colors duration-300 hover:bg-[#fbfaf6]"
            >
              <p className="font-heading text-[26px] font-bold leading-none text-ink">{s.value}</p>
              <p className="mt-3 text-[13.5px] text-ink-muted">{s.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <Note className="mt-8">
            Source coverage: partial. Two source organizations confirmed; one import is still pending reconciliation.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
