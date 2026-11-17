import { Reveal } from "@/components/ui/Reveal";
import { Footnote, Lead, line, Photo, sectionPad, SectionTitle, wrap } from "./shared";

export function CurrentInstruction() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1fr_462px] lg:gap-16`}>
        <Reveal className="lg:pl-5">
          <SectionTitle className="max-w-[740px]">One current instruction, with its version and source.</SectionTitle>
          <Lead className="mt-5 max-w-[740px] text-[15.5px]">
            A participant sees the current permitted instruction and knows when it changed — never an unmarked
            replacement or an all-events dashboard.
          </Lead>
          <Footnote>Superseded revisions stay visible as history rather than disappearing.</Footnote>
        </Reveal>

        <Reveal delay={0.15}>
          <Photo
            src="/images/officials-event-staff/instruction-baseball-swing.webp"
            alt="Baseball batter in a white uniform finishing a swing"
            sizes="(min-width: 1024px) 462px, 95vw"
            className={`aspect-[462/202] w-full border ${line}`}
          />
        </Reveal>
      </div>
    </section>
  );
}
