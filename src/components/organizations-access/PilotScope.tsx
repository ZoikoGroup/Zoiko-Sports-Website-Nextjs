import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Lead, SectionTitle, cream, pad2, ruled, sectionPad, wrap } from "./shared";

const img = (name: string) => `/images/organizations-access/${name}.webp`;

const pilotStages = [
  { title: "Qualify", src: img("stage-qualify-weightlifting"), alt: "Weightlifter celebrating after a lift" },
  { title: "Scope", src: img("stage-scope-wrestling"), alt: "Wrestler flipping an opponent onto the mat" },
  { title: "Configure", src: img("stage-configure-wrestling"), alt: "Wrestler pinning an opponent during a bout" },
  { title: "Operate", src: img("stage-operate-football"), alt: "Footballer striking the ball during a match" },
  { title: "Evaluate", src: img("stage-evaluate-grappling"), alt: "Two athletes grappling on the floor" },
];

const evaluationMeasures = [
  "Invitation acceptance time",
  "Access requests resolved",
  "Denied-access tests passed",
  "Guest grants expired on schedule",
];

export function PilotScope() {
  return (
    <section className={`bg-white ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[720px]">Scope one connected event before a pilot begins.</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            Identify the participating organizations, event, responsibilities, access boundaries and records before
            anyone is invited.
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
