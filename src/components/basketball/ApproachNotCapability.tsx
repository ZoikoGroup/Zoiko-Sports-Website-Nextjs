import { Reveal } from "@/components/ui/Reveal";
import { cream, Kicker, Lead, line, Photo, sectionPad, SectionTitle, wrap } from "./shared";

const focus = [
  "Game windows and court or venue dependencies for one fixture or event block",
  "Readiness checks tied to an owner and a due time",
  "Event-day exceptions and the decision that resolves them",
  "Approvals, decisions and acknowledgment records for one event or fixture block",
];

export function ApproachNotCapability() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[760px]">This page describes an approach, not a published capability.</SectionTitle>
          <Lead className="mt-4 max-w-[780px] text-[15.5px]">
            Basketball is not yet a validated sport on Zoiko Sports. The content below explains how a scoped
            conversation could work — it is not a live-score, shot-clock, federation-compliance or fan-engagement product, and it
            does not confirm that basketball is currently supported.
          </Lead>
        </Reveal>

        <div className="mt-8 grid gap-0.5 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <div className={`h-full rounded-2xl border ${line} ${cream} px-6 py-6`}>
              <Kicker className="text-[11px]!">Initial operating focus</Kicker>
              <ul className="mt-3">
                {focus.map((f) => (
                  <li
                    key={f}
                    className={`border-t ${line} py-3 text-[14px] font-medium text-ink transition-colors duration-300 hover:text-brand-blue`}
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="min-h-[242px]">
            <Photo
              src="/images/basketball/focus-basketball-drive.webp"
              alt="Basketball player in purple dribbling low past a defender"
              sizes="(min-width: 1024px) 640px, 95vw"
              className={`h-full min-h-[242px] w-full border ${line}`}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
