import { Reveal } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, altBg, sectionPad, wrap } from "./shared";

export function WhatIsZoiko() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-12 lg:grid-cols-[1fr_440px] lg:gap-8 xl:gap-16`}>
        <Reveal>
          <SectionTitle>What is Zoiko Sports?</SectionTitle>
          <Lead className="mt-5 text-[17px]">
            Zoiko Sports is sports operations and intelligence infrastructure for organizations that deliver sport. Its
            initial focus is competition and venue coordination: connecting schedules, readiness, responsibilities,
            approvals and event-day exceptions across authorized teams. Over time, that operating foundation is
            designed to support a broader, governed sports data and intelligence layer.
          </Lead>
          <blockquote className="mt-9 rounded-2xl border border-[#DEDAD0] border-l-4 bg-white border-l-brand-yellow px-7 py-6 font-heading text-[15.5px] font-semibold leading-relaxed text-ink">
            &ldquo;Zoiko Sports is building connected sports operations and intelligence infrastructure for the
            organizations that plan, stage and grow sport.&rdquo;
          </blockquote>
        </Reveal>

        {/* Two overlapping photos */}
        <Reveal delay={0.15} className="relative mx-auto aspect-[440/360] w-full max-w-[440px]">
          <Photo
            src="/images/about/what-padel.webp"
            alt="Padel player lining up a backhand on a glass-walled court"
            sizes="(min-width: 1024px) 390px, 80vw"
            className="absolute left-0 top-0 h-[79%] w-[89%] shadow-[0_24px_50px_-28px_rgba(29,20,51,0.5)]"
          />
          <div className="absolute bottom-0 right-0 h-[64%] w-[70%] rounded-[20px] bg-white p-1.5 shadow-[0_30px_60px_-24px_rgba(29,20,51,0.45)] transition-transform duration-500 hover:-translate-y-1.5">
            <Photo
              src="/images/about/what-tennis.webp"
              alt="Tennis player stretching for a forehand on a green hard court"
              sizes="(min-width: 1024px) 310px, 60vw"
              className="h-full w-full rounded-[14px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
