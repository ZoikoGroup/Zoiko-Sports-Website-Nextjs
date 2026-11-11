import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, cream, pad2, sectionPad, wrap } from "./shared";

const stages = [
  { title: "Identify", text: "An operational condition is observed and linked to the event." },
  { title: "Request", text: "An eligible requester proposes a change and the reason behind it." },
  { title: "Review source", text: "The approver checks linked evidence and its freshness." },
  { title: "Authorize", text: "An authorized role approves, rejects or asks for changes." },
  { title: "Record", text: "The decision, actor, role and time are written against the event." },
  { title: "Apply & communicate", text: "The schedule update is confirmed and shared with scoped recipients." },
  { title: "Review", text: "Post-event reconstruction checks the full chain end to end." },
];

export function ChangeLifecycle() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[700px]">One change. An accountable record from request to review.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            A proposed seven-stage lifecycle keeps human authority at the point it belongs.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
          {stages.map((s, i) => (
            <RevealItem
              key={s.title}
              className={`group border-t-[3px] border-brand-yellow ${cream} px-[18px] py-6 transition-colors duration-300 hover:bg-[#efede6]`}
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-ink/40">Step {pad2(i + 1)}</p>
              <h3 className="mt-2.5 text-[15.5px] font-semibold leading-snug text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {s.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-muted">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
