import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, SampleTag, SectionTitle, altBg, ruled, card, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const summary = [
  { kicker: "Agreed checks", title: "16 in scope", text: "Fictional sample, this event only" },
  { kicker: "Recorded complete", title: "14 of 16", text: "Coordination indicator, not a safety score" },
  { kicker: "Open checks", title: "2", text: "East entrance ramp · Steward count" },
  { kicker: "Approvals", title: "1 pending", text: "Competition Director" },
];

export function SharedPicture() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">One event. A shared operating picture, with an honest as-of time.</SectionTitle>
          <Lead className="mt-4 max-w-[700px] text-[15.5px]">
            A completion count is a coordination snapshot — never a safety score or readiness verdict.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-0.5 sm:grid-cols-2 lg:grid-cols-4">
          {summary.map((s) => (
            <RevealItem key={s.kicker} className={`${card} bg-white p-5`}>
              <Kicker className="font-semibold">{s.kicker}</Kicker>
              <h3 className="mt-2 text-[16px] font-bold text-ink">{s.title}</h3>
              <p className="mt-1.5 text-[13.5px] text-ink-muted">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
