import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, cream, pad2, sectionPad, wrap } from "./shared";

const stages = [
  { title: "Record", text: "An eligible reporter logs what was observed." },
  { title: "Assign", text: "An accountable organization and role take ownership." },
  { title: "Assess impact", text: "Continuing effect on the event is evaluated separately." },
  { title: "Request decision", text: "A change is proposed to the authorized decider." },
  { title: "Communicate", text: "An agreed update is shared with affected parties." },
  { title: "Verify & review", text: "Acknowledgment and follow-up are recorded." },
];

export function CoordinationStages() {
  return (
    <section id="coordination-flow" className={`scroll-mt-24 bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[760px]">One event. Clear ownership at every change.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Six stages carry a change from first report to recorded review. No stage auto-advances the next.
          </Lead>
        </Reveal>

        {/* One continuous cream band with a yellow top rule, as in the design */}
        <RevealGroup
          className={`mt-9 grid gap-y-2 border-t-[3px] border-brand-yellow ${cream} sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6`}
        >
          {stages.map((s, i) => (
            <RevealItem
              key={s.title}
              className="group px-[18px] py-6 transition-colors duration-300 hover:bg-[#efede6]"
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-ink/40">Step {pad2(i + 1)}</p>
              <h3 className="mt-2.5 text-[15.5px] font-semibold leading-snug text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {s.title}
              </h3>
              <p className="mt-2 max-w-[190px] text-[13.5px] leading-[1.6] text-ink-muted">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
