import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Lead, SampleTag, SectionTitle, altBg, sectionPad, wrap } from "./shared";

export function ProposeChange() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">Propose a change. Record the decision that follows.</SectionTitle>
          <Lead className="mt-4 max-w-[680px] text-[15.5px]">
            A requested change is distinct from an authorized decision, and the resulting schedule version carries its
            own history.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className="group mt-9 grid overflow-hidden rounded-2xl md:grid-cols-2">
          <div className="relative min-h-[170px] overflow-hidden border border-[#DEDAD0] md:rounded-l-2xl">
            <Image
              src="/images/competition-operations/change-volleyball-dig.webp"
              alt="Volleyball player diving to dig a low ball"
              fill
              sizes="(min-width: 768px) 640px, 95vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center bg-[#24163A] px-7 py-8 text-white">
            <p className="flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-yellow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-yellow opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-yellow" />
              </span>
              Decision recorded
            </p>
            <p className="mt-4 font-heading text-[16px] font-semibold leading-[1.65]">
              Start time changed 12:15 → 12:25 PDT. Approved by: Competition Director / Riverside League. Recorded
              12:15 PDT.
            </p>
            <p className="mt-4 text-[13px] text-white/50">Linked EX-104 / EX-105 · Schedule version v2 → v3</p>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-9 rounded-2xl border border-[#DEDAD0] bg-white px-6 py-5 text-[14px] leading-[1.7] text-ink-muted">
            A later correction is recorded alongside the original and marked superseded — never silently overwritten.
            EX-104 and EX-105 are fictional source records.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
