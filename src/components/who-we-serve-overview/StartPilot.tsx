import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { cream, Footnote, Kicker, Lead, line, PrimaryButton, sectionPad, SectionTitle, wrap } from "./shared";

const pilots = [
  {
    buyer: "Organizer",
    scope: "One fixture, or a bounded block with participating venues.",
    workflow: "Schedule, venue dependency and approved-change tracking.",
    measure: "Approval turnaround time",
  },
  {
    buyer: "Club",
    scope: "One home event for a single team.",
    workflow: "Milestone awareness and update acknowledgment.",
    measure: "Acknowledgment closure rate",
  },
  {
    buyer: "Venue",
    scope: "One home event, with the relevant organizer involved.",
    workflow: "Readiness checks and event-day exception handling.",
    measure: "Check completion and exception resolution time",
  },
];

const headers = ["Buyer", "Scope", "Workflow in scope", "Success measure"];
const cols = "md:grid-cols-[0.8fr_1.2fr_1.2fr_1.1fr]";

export function StartPilot() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Start with one event or fixture block.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            A credible first pilot looks different for each audience. Agree the participants, workflow, operating limits
            and measures before it begins.
          </Lead>
        </Reveal>

        <Reveal delay={0.15}>
          <div className={`mt-9 overflow-hidden rounded-2xl border ${line} bg-white`}>
            <div className={`hidden gap-4 border-b ${line} ${cream} px-4 py-4 md:grid ${cols}`}>
              {headers.map((h) => (
                <Kicker key={h} className="text-[10.5px]">
                  {h}
                </Kicker>
              ))}
            </div>
            {pilots.map((p, i) => (
              <div
                key={p.buyer}
                className={`grid gap-1.5 px-4 py-5 text-[13.5px] leading-[1.55] text-ink-muted transition-colors duration-200 hover:bg-[#fbfaf6] md:items-center md:gap-4 ${cols} ${i > 0 ? "border-t border-[#ebe9df]" : ""}`}
              >
                <p className="font-heading text-[14.5px] font-semibold text-ink">{p.buyer}</p>
                <p>{p.scope}</p>
                <p>{p.workflow}</p>
                <p>{p.measure}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <PrimaryButton href="/pilot">Scope a Pilot</PrimaryButton>
            <Link
              href="/solutions/pilot-program"
              className="group inline-flex items-center gap-1.5 font-heading text-[14px] font-semibold text-[#4b3a78] transition-colors duration-300 hover:text-brand-blue"
            >
              See the full pilot process
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <Footnote className="mt-7">A request starts a review; it is not confirmation of a pilot.</Footnote>
        </Reveal>
      </div>
    </section>
  );
}
