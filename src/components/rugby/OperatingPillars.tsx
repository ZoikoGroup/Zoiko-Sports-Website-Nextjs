import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cream, Lead, line, sectionPad, SectionTitle, wrap } from "./shared";

const pillars = [
  { name: "Schedule", text: "Match window, pitch and the organizations responsible for each part." },
  {
    name: "Readiness",
    text: "Pitch, changing-room and equipment checks, owners and due times — tracked as status, not certification.",
  },
  { name: "Exceptions", text: "What changed on match day, who owns it, and what was decided." },
  { name: "Decisions", text: "Who requested, who approved, and the record that’s kept." },
];

export function OperatingPillars() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[720px]">Four operating pillars, reused across every sport.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            This is the same operating logic described across Zoiko Sports — its applicability to a rugby
            event is conditional on the review above, not assumed.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-0.5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <RevealItem
              key={p.name}
              className={`group h-full border ${line} ${cream} px-5 py-6 transition-colors duration-300 hover:border-brand-yellow/70`}
            >
              <p className="text-[12px] font-semibold tracking-[0.04em] text-ink/40">
                {String(i + 1).padStart(2, "0")} · {p.name}
              </p>
              <p className="mt-2.5 text-[13.5px] leading-[1.6] text-ink-muted transition-colors duration-300 group-hover:text-ink">
                {p.text}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
