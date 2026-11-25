import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowBadge, Kicker, Lead, Photo, sand, sectionPad, wrap } from "./shared";

export function WrittenScope() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <div
          className={`${sand} grid items-center gap-10 rounded-3xl px-6 py-10 sm:px-10 lg:grid-cols-[1fr_633px] lg:gap-24 lg:px-[62px] lg:py-[62px]`}
        >
          <Reveal>
            <Kicker>Written scope</Kicker>
            <h2 className="mt-4 text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold leading-[1.12] tracking-tight text-ink">
              The scope turns assumptions into responsibilities.
            </h2>
            <Lead className="mt-5 max-w-[380px]">
              Specific sources, transfer methods, responsibilities, and support arrangements are confirmed only through
              approved scope and implementation evidence.
            </Lead>
            <Link
              href="#systems-assessment"
              className="group mt-7 inline-flex items-center gap-2 border-b border-ink pb-1.5 font-heading text-[15px] font-semibold text-ink transition-colors duration-300 hover:border-brand-blue hover:text-brand-blue"
            >
              See the questions we assess
              <ArrowBadge />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <Photo
              src="/images/integration-overview/scope-athletes-stretching.webp"
              alt="Four athletes chatting and stretching beside a concrete wall before a workout"
              sizes="(min-width: 1024px) 633px, 90vw"
              className="aspect-[635/375] w-full rounded-xl shadow-[0_24px_50px_-24px_rgba(29,20,51,0.45)]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
