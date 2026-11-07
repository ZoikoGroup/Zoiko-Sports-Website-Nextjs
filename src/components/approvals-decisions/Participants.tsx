import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { participants, pilotStages } from "@/data/approvals-decisions";
import { SectionTitle, altBg, card, sectionPad, wrap } from "./shared";

export function Participants() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Built around how each organization participates.</SectionTitle>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-3 md:grid-cols-3">
          {participants.map((p) => (
            <RevealItem key={p.title} className={`${card} flex flex-col p-6 sm:p-7`}>
              <h3 className="text-[17px] font-semibold text-ink">{p.title}</h3>
              <p className="mt-3 text-[14px] leading-[1.65] text-ink-muted">{p.text}</p>
              <p className="mt-auto pt-4 text-[12.5px] text-ink/45">{p.note}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-10 rounded-2xl bg-[#24163A] p-6 text-white sm:p-8">
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand-yellow">Pilot stages</p>
          <ol className="mt-5 grid grid-cols-2 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
            {pilotStages.map((s, i) => (
              <li key={s.title} className="group">
                <div className="relative aspect-[244/283] overflow-hidden">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 1024px) 244px, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  {/* Yellow underline that fills on hover */}
                  <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand-yellow transition-transform duration-500 group-hover:scale-x-100" />
                </div>
                <p className="mt-4 text-[11.5px] text-white/50">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-1 font-heading text-[15px] font-semibold transition-colors duration-300 group-hover:text-brand-yellow">
                  {s.title}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
