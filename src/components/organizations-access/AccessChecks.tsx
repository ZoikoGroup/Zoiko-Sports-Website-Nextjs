import { Fragment } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Lead, SectionTitle, cream, ruled, sectionPad, wrap } from "./shared";

const checks = ["Actor", "Acting organization", "Event membership", "Record audience", "Action permission"];

export function AccessChecks() {
  return (
    <section id="how-access-works" className={`scroll-mt-24 bg-white ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[760px]">Every action is checked against five things, in order.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Access is evaluated for a specific actor, acting organization, event, record and action — never inferred
            from a URL, a visible button or a shared event name.
          </Lead>
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-3">
            {checks.map((c, i) => (
              <Fragment key={c}>
                {i > 0 && (
                  <li aria-hidden="true" className="text-ink/30">
                    →
                  </li>
                )}
                <li
                  className={`cursor-default rounded-full border border-[#DEDAD0] ${cream} px-5 py-3 font-heading text-[14px] font-semibold text-ink transition-colors duration-300 hover:border-brand-yellow hover:bg-brand-yellow`}
                >
                  {c}
                </li>
              </Fragment>
            ))}
          </ol>
        </Reveal>

        {/* Allowed / denied examples joined by a 4px gutter */}
        <Reveal delay={0.15} className="mt-8 grid gap-1 overflow-hidden rounded-2xl md:grid-cols-2">
          <div className={`border border-[#DEDAD0] ${cream} px-7 py-8 md:rounded-l-2xl`}>
            <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#2f7d4a]">Allowed</p>
            <h3 className="mt-4 text-[19px] font-semibold text-ink">View: event schedule</h3>
            <p className="mt-4 text-[14px] leading-[1.65] text-ink-muted">
              Northfield Arena · Venue Operations is an authorized participant in Riverside Invitational, and the
              schedule is an event-shared record.
            </p>
          </div>
          <div className="bg-[#24163A] px-7 py-8 text-white">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-brand-yellow">Denied</p>
            <p className="mt-4 font-heading text-[15.5px] font-medium leading-[1.6]">
              View: Cedarfield Athletic Club private roster, requested by Venue Operations.
            </p>
            <p className="mt-4 text-[13px] leading-[1.65] text-white/55">
              &quot;This information is not available in your current access context.&quot; No record title, count or
              user detail is disclosed.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
