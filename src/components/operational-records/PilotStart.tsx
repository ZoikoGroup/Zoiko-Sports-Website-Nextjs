import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Lead, SectionTitle, cream, pad2, ruled, sectionPad, wrap } from "./shared";

const img = (name: string) => `/images/operational-records/${name}.webp`;

const pilotStages = [
  { title: "Qualify", src: img("stage-qualify-football"), alt: "Footballer volleying a ball in mid-air" },
  { title: "Scope", src: img("stage-scope-beach-volleyball"), alt: "Beach volleyball player diving for a dig" },
  { title: "Configure", src: img("stage-configure-surfing"), alt: "Surfer crouched low on a breaking wave" },
  { title: "Operate", src: img("stage-operate-baseball"), alt: "Baseball batter kneeling in the on-deck circle" },
  { title: "Evaluate", src: img("stage-evaluate-tennis"), alt: "Tennis player reaching up into a serve on clay" },
];

const evaluationMeasures = [
  "Source completeness for in-scope records",
  "Time to trace a decision to its supporting record",
  "Correction / conflict frequency",
  "Open follow-ups at event close",
];

export function PilotStart() {
  return (
    <section className={`bg-white ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Start with one event&apos;s records.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Agree the sources, participating organizations, correction ownership and evaluation measures before a pilot
            begins.
          </Lead>
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="mt-6 grid grid-cols-2 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
            {pilotStages.map((s, i) => (
              <li key={s.title} className="group">
                <div className="relative aspect-[256/196] overflow-hidden border-b-2 border-brand-yellow">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 1024px) 256px, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                </div>
                <p className="mt-5 text-[11.5px] text-ink/40">{pad2(i + 1)}</p>
                <p className="mt-1 font-heading text-[15px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                  {s.title}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.1} className={`mt-8 rounded-2xl border border-[#DEDAD0] ${cream} p-6 sm:p-7`}>
          <h3 className="text-[14px] font-semibold text-ink">Example evaluation measures</h3>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {evaluationMeasures.map((m) => (
              <li
                key={m}
                className="cursor-default rounded-full border border-[#DEDAD0] bg-white px-3.5 py-2 text-[13px] text-ink/80 transition-colors duration-300 hover:border-brand-yellow hover:bg-brand-yellow hover:text-ink"
              >
                {m}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
