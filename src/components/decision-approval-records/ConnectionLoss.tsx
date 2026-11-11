import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, altBg, ruled, card, sectionPad, wrap } from "./shared";

const steps = [
  { title: "Verify source freshness", text: "Check the latest recorded state before deciding or communicating." },
  {
    title: "Use agreed operating procedure",
    text: "Real-world authority and communication channels take over when connectivity is interrupted.",
  },
  {
    title: "Reconcile after reconnecting",
    text: "The record is reconciled once connectivity returns, within the validated pilot scope.",
  },
];

export function ConnectionLoss() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[740px]">Know what to do when a connection can&apos;t be confirmed.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Event-day connectivity is agreed in advance. Real-world authority and communication take over when a
            connection is interrupted.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-0.5 md:grid-cols-3">
          {steps.map((s) => (
            <RevealItem key={s.title} className={`${card} bg-white p-6`}>
              <h3 className="text-[15.5px] font-semibold text-ink">{s.title}</h3>
              <p className="mt-2.5 max-w-[340px] text-[14px] leading-[1.6] text-ink-muted">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
