import { Fragment } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Lead, Note, SectionTitle, altBg, sectionPad, wrap } from "./shared";

const originStates = ["Entered manually", "Imported source", "Last checked", "Needs review", "Unknown"];

export function OriginStates() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[760px]">Know whether a fact was entered, imported, or still unresolved.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            Origin is tracked even when data arrives late, conflicts with another source, or can&apos;t yet be confirmed.
          </Lead>
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-3">
            {originStates.map((s, i) => (
              <Fragment key={s}>
                {i > 0 && (
                  <li aria-hidden="true" className="text-ink/30">
                    →
                  </li>
                )}
                <li className="cursor-default rounded-full border border-[#DEDAD0] bg-white px-5 py-3 font-heading text-[14px] font-semibold text-ink transition-colors duration-300 hover:border-brand-yellow hover:bg-brand-yellow">
                  {s}
                </li>
              </Fragment>
            ))}
          </ol>
        </Reveal>

        <Reveal>
          <Note variant="dashed" className="mt-8">
            An import never silently overwrites a newer local value. A conflicting source is held for review, not
            auto-resolved.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
