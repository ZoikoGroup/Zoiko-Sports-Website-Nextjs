import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionTitle, altBg, card, pad2, ruled, sectionPad, wrap } from "./shared";

const risks = [
  {
    title: "Missing owner",
    text: "A revised start time reaches one organization before the responsible recipient is named.",
  },
  {
    title: "Stale version",
    text: "A venue-side dependency is acted on against a schedule version that already changed.",
  },
  {
    title: "Wrong audience",
    text: "A club receives only the approved schedule update — never organizer-only context.",
  },
];

export function MissingActions() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[680px]">
            The next action can disappear between systems, teams and event-day changes.
          </SectionTitle>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-2.5 md:grid-cols-3">
          {risks.map((r, i) => (
            <RevealItem key={r.title} className={`${card} bg-white p-6 sm:p-7`}>
              <p className="text-[12px] font-semibold text-ink/40">{pad2(i + 1)}</p>
              <h3 className="mt-3 text-[16px] font-semibold text-ink">{r.title}</h3>
              <p className="mt-2 max-w-[360px] text-[14px] leading-[1.65] text-ink-muted">{r.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
