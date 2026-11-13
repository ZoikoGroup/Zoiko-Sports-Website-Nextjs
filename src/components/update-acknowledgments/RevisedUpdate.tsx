import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, altBg, cream, ruled, sectionPad, wrap } from "./shared";

const versions = [
  {
    label: "Superseded",
    title: "Update v1",
    text: "Original notice; acknowledgments recorded against it are preserved as historical.",
    tone: "text-ink/40",
  },
  {
    label: "Current",
    title: "Update v2",
    text: "Revised start time; a fresh acknowledgment is required for this version.",
    tone: "text-[#9a6b00]",
  },
];

const responses = [
  { title: "Acknowledge v2", text: "Affirms the current update version for the authorized recipient." },
  { title: "Request clarification", text: "\"I need clarification about this update\" is not itself an acknowledgment." },
  { title: "Unable to acknowledge", text: "Recorded as its own state; no forced false agreement is ever implied." },
];

export function RevisedUpdate() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[700px]">What if a revised update replaces the old one?</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            An old acknowledgment never satisfies a new revision. And if someone cannot truthfully acknowledge, that is
            recorded as its own distinct state.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-0.5 md:grid-cols-2">
          {versions.map((v) => (
            <RevealItem key={v.title} className={`h-full rounded-2xl border border-[#DEDAD0] ${cream} px-5 py-6`}>
              <p className={`text-[11px] font-bold uppercase tracking-[0.08em] ${v.tone}`}>{v.label}</p>
              <h3 className="mt-1.5 text-[15.5px] font-semibold text-ink">{v.title}</h3>
              <p className="mt-1.5 text-[13.5px] text-ink-muted">{v.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup className="mt-8 grid gap-0.5 md:grid-cols-3">
          {responses.map((r) => (
            <RevealItem
              key={r.title}
              className="group h-full rounded-2xl border border-[#DEDAD0] bg-white px-6 py-7 transition-colors duration-300 hover:border-brand-yellow/70"
            >
              <h3 className="text-[15px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {r.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-[1.6] text-ink-muted">{r.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
