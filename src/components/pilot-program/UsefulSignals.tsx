import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, altBg, card, ruled, sectionPad, wrap } from "./shared";

const signals = [
  { title: "In-scope items tracked", text: "What was included in the agreed workflow." },
  { title: "Observed evidence", text: "What was actually recorded during the event." },
  { title: "Unknown / not available", text: "Explicitly distinct from zero — never assumed." },
  { title: "Manual workarounds", text: "Counted and reviewed, not hidden from the result." },
];

export function UsefulSignals() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>How we&apos;ll know if the workflow was useful.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Missing data is distinct from zero. Coverage and manual workarounds are reported, not hidden.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid sm:grid-cols-2 lg:grid-cols-4">
          {signals.map((s) => (
            <RevealItem key={s.title} className={`${card} bg-white p-5`}>
              <h3 className="text-[15.5px] font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 max-w-[260px] text-[13.5px] leading-[1.6] text-ink-muted">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
