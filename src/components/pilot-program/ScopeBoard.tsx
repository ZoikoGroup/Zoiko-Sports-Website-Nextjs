import { Reveal } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, StatePill, altBg, ruled, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const fields = [
  { label: "Organizations", value: "Riverside League (organizer) · Northfield Arena (venue)" },
  { label: "Sample checks", value: "14 of 16 complete · 2 open · Sep 26, 2026 · 08:50 PDT" },
  { label: "Coordination point", value: "Access-plan review and steward count approval" },
  { label: "Status", value: "Illustrative — not a live readiness signal" },
];

export function ScopeBoard() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <span className="inline-flex rounded-full bg-[#ebe8df] px-3 py-1.5 text-[10.5px] font-semibold uppercase leading-none tracking-[0.08em] text-ink/50">
            Illustrative scope board · Fictional sample data
          </span>
          <SectionTitle className="mt-4">Picture the first event and shared responsibility.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            No live signal, aggregate &quot;safe to open&quot; status, or real customer proof is implied by this sample.
          </Lead>
        </Reveal>

        <div className="mt-9 grid gap-5 lg:grid-cols-[1fr_560px]">
          <Reveal delay={0.1} className="rounded-2xl border border-[#DEDAD0] bg-white px-6 py-6 sm:px-[30px]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#ebe9df] pb-4 pt-2">
              <p className="font-heading text-[15px] font-semibold text-ink">Riverside Invitational · Northfield Arena</p>
              <StatePill>14 of 16 checks complete</StatePill>
            </div>
            <dl>
              {fields.map((f, i) => (
                <div key={f.label} className={`py-4 ${i < fields.length - 1 ? "border-b border-[#ebe9df]" : ""}`}>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink/40">{f.label}</dt>
                  <dd className="mt-1 font-heading text-[15px] font-medium text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.2} className="min-h-[300px]">
            <Photo
              src="/images/pilot-program/scope-board-pitcher.webp"
              alt="Baseball pitcher in an orange jersey following through after a pitch"
              sizes="(min-width: 1024px) 560px, 95vw"
              className="h-full w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
