import { Reveal } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, altBg, ruled, sectionPad, wrap } from "./shared";

export function ExceptionModel() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1fr_360px] lg:gap-16`}>
        <Reveal>
          <SectionTitle className="max-w-[740px]">The same exception model, applied once per event.</SectionTitle>
          <Lead className="mt-6 max-w-[800px] text-[15.5px]">
            Every fixture in a program uses the same event-day coordination workflow. An exception on one event is never
            inherited, merged or implied on another, even when the pattern and sometimes the organizations are shared.
          </Lead>
        </Reveal>

        <Reveal delay={0.2}>
          <Photo
            src="/images/multi-event-operating-model/exception-baseball-pitcher.webp"
            alt="Baseball pitcher in a vintage uniform delivering a pitch"
            sizes="(min-width: 1024px) 360px, 95vw"
            className="aspect-[360/224] w-full rounded-none!"
          />
        </Reveal>
      </div>
    </section>
  );
}
