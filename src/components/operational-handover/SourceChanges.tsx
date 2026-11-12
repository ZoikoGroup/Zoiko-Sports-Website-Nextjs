import { Reveal } from "@/components/ui/Reveal";
import { altBg, cream, ruled, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const source = [
  { label: "Source type · Ref", value: "Schedule · AP-SAMPLE-02" },
  { label: "Source version", value: "v2 · updated Sep 25, 2026 08:40 PDT" },
  { label: "Access", value: "Shared within authorized scope · no public attachment link" },
];

const versions = [
  { v: "v1", text: "Original access-plan reference submitted by Riverside League." },
  {
    v: "v2",
    text: "Source schedule revised — the earlier response became historical and current recipient response is required.",
  },
];

export function SourceChanges() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal className="grid border-l border-t border-[#DEDAD0] md:grid-cols-2">
          <div className={`border-b border-r border-[#DEDAD0] ${cream} px-7 py-8`}>
            <h3 className="text-[19px] font-semibold text-ink">Source &amp; evidence</h3>
            <p className="mt-4 max-w-[540px] text-[14.5px] leading-[1.65] text-ink-muted">
              See what the next action is based on, when the source was updated, and whether access is permitted.
            </p>
            <dl className="mt-4">
              {source.map((s) => (
                <div key={s.label} className="border-t border-[#DEDAD0] py-3.5">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink/40">{s.label}</dt>
                  <dd className="mt-0.5 font-heading text-[14px] font-medium text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={`border-b border-r border-[#DEDAD0] ${cream} px-7 py-8`}>
            <h3 className="text-[19px] font-semibold text-ink">Changes &amp; supersession</h3>
            <p className="mt-4 max-w-[560px] text-[14.5px] leading-[1.65] text-ink-muted">
              A changed fixture or responsibility may require a new response; the previous response remains historical.
            </p>
            <ol className="mt-4">
              {versions.map((v) => (
                <li key={v.v} className="grid grid-cols-[70px_1fr] border-t border-[#DEDAD0] py-4 text-[13.5px]">
                  <span className="font-semibold text-ink/40">{v.v}</span>
                  <span className="leading-[1.55] text-ink">{v.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
