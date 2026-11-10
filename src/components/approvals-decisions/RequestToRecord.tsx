import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, altBg, sectionPad, wrap } from "./shared";

const workflowSteps = [
  { title: "Submit", text: "Proposed change, rationale and source references are entered." },
  { title: "Review", text: "Evidence, linked records and requester role are checked." },
  { title: "Decide", text: "An authorized role approves, rejects or requests changes." },
  { title: "Record", text: "The decision, actor, role and time are recorded against the event." },
  { title: "Notify & acknowledge", text: "Scoped recipients are informed and may confirm receipt." },
];

export function RequestToRecord() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>From request to record.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            The proposed workflow separates each step so responsibility and timing stay attributable.
          </Lead>
        </Reveal>

        {/* White panel under the yellow rule */}
        <RevealGroup className="mt-8 grid border-t-2 border-brand-yellow bg-white pb-3 sm:grid-cols-2 lg:grid-cols-5">
          {workflowSteps.map((s, i) => (
            <RevealItem key={s.title} className="group relative px-5 pt-7 pb-4 sm:px-6">
              {/* Marker on the line that grows on hover */}
              <span className="absolute -top-[5px] left-5 h-2 w-2 rounded-full bg-brand-yellow transition-transform duration-300 group-hover:scale-150 sm:left-6" />
              <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink/40">
                Step {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-[17px] font-semibold text-ink">{s.title}</h3>
              <p className="mt-3 text-[14px] leading-[1.65] text-ink-muted">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
