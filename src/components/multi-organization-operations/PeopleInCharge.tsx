import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Lead, SectionTitle, cream, line, sectionPad, wrap } from "./shared";

export function PeopleInCharge() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-8 lg:grid-cols-[1fr_380px] lg:gap-16`}>
        <Reveal className="lg:pl-5">
          <SectionTitle>Software coordinates. People remain in charge.</SectionTitle>
          <Lead className="mt-4 max-w-[800px] text-[15.5px]">
            Zoiko Sports does not certify a venue as safe, authorize gates to open, or replace sporting, security,
            medical, safeguarding or emergency decision makers. Authorized people retain that responsibility across
            every organization involved.
          </Lead>
        </Reveal>

        <Reveal delay={0.1}>
          <div className={`rounded-2xl border ${line} ${cream} px-7 py-7`}>
            <h3 className="text-[17px] font-semibold text-ink">Trust Center</h3>
            <p className="mt-2 text-[14px] leading-[1.65] text-ink-muted">
              Security, privacy, data governance and accessibility, in one place for buyer diligence.
            </p>
            <Link
              href="/trust"
              className="group relative mt-5 flex items-center justify-center overflow-hidden rounded-lg bg-brand-yellow px-6 py-3 font-heading text-[15px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-12px_rgba(254,207,35,0.9)]"
            >
              <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/50 transition-all duration-700 group-hover:left-[120%]" />
              <span className="relative">Visit Trust Center</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
