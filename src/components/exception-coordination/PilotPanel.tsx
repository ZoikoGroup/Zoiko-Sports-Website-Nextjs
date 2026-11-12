import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { dark, pad2, sectionPad, wrap } from "./shared";

const stages = [
  { title: "Qualify", src: "pilot-pole-vault", alt: "Pole vaulter celebrating a clearance" },
  { title: "Scope", src: "pilot-javelin", alt: "Javelin thrower releasing a throw" },
  { title: "Configure", src: "pilot-volleyball-spike", alt: "Volleyball player leaping to spike" },
  { title: "Operate", src: "pilot-rugby-kick", alt: "Player kicking a rugby ball on a grass pitch" },
  { title: "Evaluate", src: "pilot-roller-skate", alt: "Roller skater mid-trick at a skate park" },
];

export function PilotPanel() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal className={`rounded-2xl ${dark} p-6 sm:p-[30px]`}>
          <p className="text-[12.5px] font-bold uppercase tracking-[0.12em] text-brand-yellow">
            Start with one event or fixture block
          </p>
          <p className="mt-4 max-w-[640px] text-[14.5px] leading-[1.75] text-white/70">
            Agree the participating organizer, clubs and venue, the exception taxonomy, decision authority, communication
            steps and evaluation measures before the pilot begins.
          </p>

          <RevealGroup className="mt-7 grid grid-cols-2 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
            {stages.map((s, i) => (
              <RevealItem key={s.title} className="group">
                <div className="relative aspect-[244/202] overflow-hidden border-x border-white/10">
                  <Image
                    src={`/images/exception-coordination/${s.src}.webp`}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 1024px) 244px, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="border-t border-white/20 pt-4">
                  <p className="text-[11.5px] text-white/45">{pad2(i + 1)}</p>
                  <p className="mt-1 font-heading text-[15px] font-semibold transition-colors duration-300 group-hover:text-brand-yellow">
                    {s.title}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>
      </div>
    </section>
  );
}
