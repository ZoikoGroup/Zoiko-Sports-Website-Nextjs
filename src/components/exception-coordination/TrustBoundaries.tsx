import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, card, cream, sectionPad, wrap } from "./shared";

const boundaries = [
  {
    title: "Source & provenance",
    text: "Source references remain attributable where supported; no record is silently overwritten.",
  },
  {
    title: "Scoped access",
    text: "Every read is authorized by organization, role and event — never a hidden interface control alone.",
  },
  {
    title: "Human decision authority",
    text: "Approvals are human actions by an authorized role, independent of task completion.",
  },
  { title: "Correction history", text: "A later correction is recorded alongside the original and marked superseded." },
];

/** Interface states shown when the view may be out of date. */
const states = [
  { title: "As-of snapshot", text: "Last confirmed at 12:18 PDT. Check the latest before acting on an older view." },
  {
    title: "Version conflict",
    text: "Another update exists for this record. Compare current and attempted values before reapplying.",
  },
  {
    title: "Could not confirm save",
    text: "Check submission status with a request reference before retrying — never assume success.",
  },
];

export function TrustBoundaries() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-14 lg:px-10`}>
        <div>
          <Reveal>
            <SectionTitle className="max-w-[700px]">Access, provenance and connectivity stay bounded.</SectionTitle>
            <Lead className="mt-4 max-w-[800px] text-[15.5px]">
              Access follows organization and role; source references remain attributable; approvals are human actions.
              Software supports coordination — authorized people retain responsibility for safety, security and
              competition decisions.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {boundaries.map((b) => (
              <RevealItem
                key={b.title}
                className="border-l-2 border-transparent transition-all duration-300 hover:border-brand-yellow hover:pl-3"
              >
                <h3 className="text-[15.5px] font-semibold text-ink">{b.title}</h3>
                <p className="mt-2 max-w-[250px] text-[14px] leading-[1.6] text-ink-muted">{b.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <RevealGroup className="mt-8 grid gap-4 md:grid-cols-3">
            {states.map((s) => (
              <RevealItem key={s.title} className={`${card} ${cream} p-5`}>
                <h3 className="text-[15px] font-semibold text-ink">{s.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-[1.6] text-ink-muted">{s.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.2} className={`flex flex-col self-stretch rounded-2xl border border-[#DEDAD0] ${cream} p-7`}>
          <Photo
            src="/images/exception-coordination/trust-baseball-pitcher.webp"
            alt="Baseball pitcher mid-delivery on the mound"
            sizes="(min-width: 1024px) 322px, 95vw"
            className="aspect-[322/291] w-full lg:aspect-auto lg:min-h-[240px] lg:flex-1"
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
