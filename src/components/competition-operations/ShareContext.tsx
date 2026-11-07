import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { visibility } from "@/data/competition-operations";
import { Lead, Photo, SectionTitle, altBg, sectionPad, wrap } from "./shared";

export function ShareContext() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={`${wrap} grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-16 xl:gap-24`}>
        <div>
          <Reveal>
            <SectionTitle className="max-w-[800px]">Share relevant context. Keep each organization&apos;s authority.</SectionTitle>
            <Lead className="mt-4 text-[15.5px]">
              A participating organization sees the records and actions its approved role and event scope allow.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2 xl:grid-cols-3">
            {visibility.map((v) => (
              <RevealItem
                key={v.title}
                className="border-l-2 border-transparent transition-all duration-300 hover:border-brand-yellow hover:pl-3"
              >
                <h3 className="text-[15.5px] font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">{v.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal>
            <p className="mt-8 rounded-2xl border border-[#DEDAD0] bg-white px-6 py-5 text-[14px] leading-[1.7] text-ink-muted">
              Pilot scoping identifies the source schedules, approved data exchange, update ownership and fallback
              procedure — Zoiko Sports connects existing systems rather than assuming replacement.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="self-start rounded-2xl border border-[#DEDAD0] bg-white p-7">
          <Photo
            src="/images/competition-operations/trust-swimmer.webp"
            alt="Swimmer crouched on the starting block, ready to dive"
            sizes="(min-width: 1024px) 322px, 90vw"
            className="aspect-[321/251] w-full"
          />
          <h3 className="mt-5 text-[19px] font-semibold text-ink">Trust Center</h3>
          <p className="mt-3 text-[14.5px] leading-[1.65] text-ink-muted">
            Security, privacy, data governance and accessibility, in one place for buyer diligence.
          </p>
          <Link
            href="/trust"
            className="group mt-6 flex items-center justify-center gap-2 rounded-lg bg-brand-yellow px-6 py-3 font-heading text-[15px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-yellow-hover hover:shadow-[0_12px_28px_-12px_rgba(254,207,35,0.9)]"
          >
            Visit Trust Center
            <ArrowRight className="h-4 w-0 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
