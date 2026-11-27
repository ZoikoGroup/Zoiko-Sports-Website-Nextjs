import { Reveal } from "@/components/ui/Reveal";
import { cream, Label, Lead, line, Photo, sectionPad, wrap } from "./shared";

const focus = [
  "Manual schedule and venue-detail exchange during a scoped pilot",
  "A clear chain from proposed change → authorized human decision → delivery → acknowledgment",
  "Per-organization, per-event visibility so no one sees beyond their own scope",
  "Explicit time-zone, recurrence and cancellation handling in any future design",
];

export function DesignProposal() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal className="max-w-[770px]">
          <h2 className="text-[clamp(1.6rem,2.6vw,2rem)] font-bold leading-[1.2] tracking-tight text-ink">
            A design proposal, not a published capability.
          </h2>
          <Lead className="mt-4">
            No validated calendar connector, published provider, automatic synchronization or customer deployment
            exists today. A technical connection — if it is ever built — would never replace the authorized human
            decision that changes a fixture, opens a venue or approves a schedule. The content below explains how a
            scoped conversation could work; it is not a scheduling optimizer, calendar service or venue safety
            authority.
          </Lead>
        </Reveal>

        <div className="mt-8 grid md:grid-cols-2">
          <Reveal className={`${cream} rounded-xl border ${line} px-6 py-6`}>
            <Label>Initial operating focus</Label>
            <ul className="mt-3">
              {focus.map((f) => (
                <li
                  key={f}
                  className={`border-t ${line} py-3.5 text-[14px] font-medium leading-[1.45] text-ink transition-colors duration-300 hover:text-brand-blue`}
                >
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="min-h-[260px]">
            <Photo
              src="/images/scheduling-calendars/proposal-athletes-rooftop.webp"
              alt="An athlete resting on a rooftop with a training partner's hand on his shoulder"
              sizes="(min-width: 768px) 620px, 92vw"
              className={`h-full min-h-[260px] w-full border ${line}`}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
