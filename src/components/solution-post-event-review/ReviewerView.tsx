import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Note, SampleTag, SectionTitle, altBg, cream, ruled, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const meta = [
  "Event: Riverside Invitational",
  "Acting org: Riverside League",
  "Review opened: Sep 27, 09:00 PDT",
  "Version: 3",
];

const stats = [
  { value: 7, label: "Sources available" },
  { value: 1, label: "Follow-ups open" },
  { value: 2, label: "Decisions to examine" },
  { value: 0, label: "Awaiting acknowledgment" },
];

export function ReviewerView() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">What a reviewer sees first.</SectionTitle>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-2xl border border-[#DEDAD0] bg-white px-5 py-4 font-heading text-[13px] font-semibold text-ink">
            {meta.map((m, i) => (
              <li key={m} className="flex items-center gap-6">
                {i > 0 && <span aria-hidden className="hidden h-3 w-px bg-ink/20 sm:block" />}
                {m}
              </li>
            ))}
          </ul>
        </Reveal>

        <RevealGroup className="mt-8 grid gap-0.5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <RevealItem key={s.label} className={`border border-[#DEDAD0] ${cream} px-5 py-5`}>
              <p className="font-heading text-[26px] font-semibold leading-none text-ink">{s.value}</p>
              <p className="mt-3 text-[13px] font-medium text-ink-muted">{s.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15}>
          <Note>
            Source coverage: partial. Two source organizations confirmed; one import is still pending reconciliation.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
