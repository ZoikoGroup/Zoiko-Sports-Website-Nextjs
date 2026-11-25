import { Reveal } from "@/components/ui/Reveal";
import { Lead, line, Photo, sectionPad, soft, wrap } from "./shared";

export function StartsWithUnderstanding() {
  return (
    <section className={`${soft} border-b ${line} ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-10 md:grid-cols-[250px_1fr] lg:gap-14`}>
        <Reveal>
          <Photo
            src="/images/integration-overview/understanding-runners-steps.webp"
            alt="Group of runners resting on concrete steps, one tying his shoelaces"
            sizes="250px"
            className="mx-auto aspect-square w-full max-w-[250px] rounded-xl"
          />
        </Reveal>

        <Reveal delay={0.1} className="max-w-[790px]">
          <h2 className="text-[clamp(1.9rem,3.4vw,2.6rem)] font-bold leading-[1.15] tracking-tight text-ink">
            Integration starts with understanding, not a connector.
          </h2>
          <Lead className="mt-5">
            Zoiko Sports considers how information may move between existing systems during pilot scoping. We look at
            who owns the source, why the event needs it, who may use it, and what happens when it changes. Only a written
            scope can define a manual handoff, file exchange, technical connection, or no new connection at all.
          </Lead>
        </Reveal>
      </div>
    </section>
  );
}
