import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Lead, Note, SectionTitle, ruled, sectionPad, wrap } from "./shared";

export function RecordDetail() {
  return (
    <section className={`bg-white ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>What a record detail actually shows.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Primary content and provenance metadata stay visually separated, so a reviewer can tell what happened from
            where it was confirmed.
          </Lead>
        </Reveal>

        {/* Photo (primary content) and provenance panel joined by a 4px gutter */}
        <Reveal delay={0.1} className="mt-9 grid gap-1 overflow-hidden rounded-2xl md:grid-cols-2">
          <div className="group relative min-h-[172px] overflow-hidden bg-black/5">
            <Image
              src="/images/operational-records/detail-cleats.webp"
              alt="Close-up of a player's cleats striding across the grass"
              fill
              sizes="(min-width: 768px) 640px, 95vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
          </div>
          <div className="bg-[#24163A] px-7 py-8 text-white">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-brand-yellow">Provenance</p>
            <p className="mt-4 font-heading text-[15.5px] font-medium leading-[1.6]">
              Source: Venue Operations, entered manually. Recorded 12:10 PDT. Responsible organization: Venue
              Operations.
            </p>
            <p className="mt-4 text-[13px] leading-[1.65] text-white/55">
              Visibility: event-scoped. Source metadata explains origin — it does not certify the underlying condition
              is correct.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <Note className="mt-8">
            A record detail is not a safety verdict. It reflects what was recorded, by whom, and when — a human duty
            holder remains responsible for the decision it supports.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
