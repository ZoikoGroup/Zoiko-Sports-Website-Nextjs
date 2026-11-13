import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, cream, pad2, sectionPad, wrap } from "./shared";

const stages = ["Qualify", "Scope", "Configure", "Operate", "Evaluate"];

const measures = [
  "Delivery confirmation rate (supported channels)",
  "Median time to acknowledgment",
  "Outstanding acknowledgments at event close",
  "Correction / re-acknowledgment frequency",
];

export function StartOneEvent() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Start with one event or fixture block.</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            Agree the participants, update requirements, channels, response expectations and measures before live use.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-10 grid grid-cols-2 gap-y-5 border-t-2 border-brand-yellow pt-4 sm:grid-cols-3 lg:grid-cols-5">
          {stages.map((s, i) => (
            <RevealItem key={s}>
              <p className="text-[12px] font-medium text-ink/40">{pad2(i + 1)}</p>
              <h3 className="mt-1 text-[15px] font-semibold text-ink">{s}</h3>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15} className={`mt-10 rounded-2xl border border-[#DEDAD0] ${cream} px-7 py-6`}>
          <h3 className="text-[14px] font-semibold text-ink">Example evaluation measures</h3>
          <ul className="mt-3 flex flex-wrap gap-2.5">
            {measures.map((m) => (
              <li
                key={m}
                className="rounded-full border border-[#DEDAD0] bg-white px-3.5 py-2 text-[13px] text-ink-muted"
              >
                {m}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
