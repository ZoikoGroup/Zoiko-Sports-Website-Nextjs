import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Footnote, Lead, SectionTitle, altBg, dark, ruled, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const details = [
  { label: "Event", value: "Riverside Invitational · Northfield Arena (EV-001)" },
  { label: "Update", value: "Update v2 · supersedes v1" },
  { label: "Source decision", value: "Approved by Competition Director, Riverside League" },
  { label: "Issued", value: "September 26, 2026 · 12:15 PDT (UTC−07:00)" },
  { label: "Materiality", value: "Start-time change · required re-acknowledgment" },
];

export function ExactInstruction() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[560px]">Which exact instruction is being acknowledged?</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            Content comes before any action. Every visible change has an explicit before and after.
          </Lead>
        </Reveal>

        <div className="mt-9 grid gap-1 md:grid-cols-2">
          <Reveal delay={0.1} className="h-full rounded-2xl border border-[#DEDAD0] bg-white px-7 py-8">
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-ink/40">Original</p>
            <h3 className="mt-3 text-[22px] font-semibold text-ink">Start 12:15 PDT</h3>
            <p className="mt-3 text-[13.5px] text-ink-muted">
              Source schedule, as recorded before the exception chain began.
            </p>
          </Reveal>
          <Reveal delay={0.2} className={`h-full rounded-2xl ${dark} px-7 py-8`}>
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-brand-yellow">Approved — update v2</p>
            <h3 className="mt-3 text-[22px] font-semibold">Start 12:25 PDT</h3>
            <p className="mt-3 text-[13.5px] text-white/60">
              This is the current approved start-time update for this sample; action is illustrative.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-8 overflow-hidden rounded-2xl border border-[#DEDAD0] bg-white">
          <dl>
            {details.map((d, i) => (
              <RevealItem
                key={d.label}
                className={`grid gap-1 px-6 py-4 sm:grid-cols-[427px_1fr] sm:gap-0 ${i > 0 ? "border-t border-[#ebe9df]" : ""}`}
              >
                <dt className="text-[13px] font-medium text-ink/45">{d.label}</dt>
                <dd className="font-heading text-[14.5px] font-semibold text-ink">{d.value}</dd>
              </RevealItem>
            ))}
          </dl>
        </RevealGroup>

        <Footnote className="mt-9">
          A new revision never assumes the schedule system has already applied the time merely because a decision was
          approved.
        </Footnote>
      </div>
    </section>
  );
}
