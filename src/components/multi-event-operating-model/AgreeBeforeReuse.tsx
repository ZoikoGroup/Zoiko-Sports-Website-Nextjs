import { Reveal } from "@/components/ui/Reveal";
import { StepBand } from "./StepBand";
import { Lead, SectionTitle, altBg, ruled, sectionPad, wrap } from "./shared";

const steps = [
  { title: "Events", text: "Select which fixtures are proposed for this program." },
  { title: "Organizations", text: "Confirm every organizer, club and venue who will participate." },
  { title: "Responsibilities", text: "Agree what each organization owns for every event." },
  { title: "Records", text: "Decide which fields are shared template data vs private per-event facts." },
  { title: "Connectivity", text: "Document how each venue reports status, and what happens offline." },
  { title: "Success measures", text: "Set the measures used to decide whether to extend, change or stop." },
];

export function AgreeBeforeReuse() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[640px]">What must be agreed before reusing a workflow.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            A proposed six-step intake — not an automatic configuration step.
          </Lead>
        </Reveal>

        <StepBand steps={steps} />
      </div>
    </section>
  );
}
