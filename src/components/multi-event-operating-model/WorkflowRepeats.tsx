import { Reveal } from "@/components/ui/Reveal";
import { StepBand } from "./StepBand";
import { Lead, Note, SectionTitle, sectionPad, wrap } from "./shared";

const steps = [
  { title: "Plan", text: "Confirm scope, organizations and responsibilities for this event." },
  { title: "Prepare", text: "Complete event-specific readiness checks and approvals." },
  { title: "Coordinate", text: "Record exceptions, decisions and acknowledgments as they happen." },
  { title: "Review", text: "Close the event record and surface independent follow-up." },
];

export function WorkflowRepeats() {
  return (
    <section id="fixture-block-workflow" className={`scroll-mt-24 bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[720px]">How the agreed workflow repeats without flattening events.</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            Four stages carry every fixture from plan to review. No stage auto-advances the next, and no event inherits
            another event&apos;s completed state.
          </Lead>
        </Reveal>

        <StepBand steps={steps} />

        <Reveal>
          <Note variant="cream" className="mt-8">
            Riverside Invitational is currently in Coordinate. Example Fixture 2 and Example Fixture 3 have not entered
            Plan — illustrative, not actual progress.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
