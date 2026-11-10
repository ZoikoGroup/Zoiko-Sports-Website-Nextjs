import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, sectionPad, wrap } from "./shared";

const safeguards = [
  { title: "History & corrections", text: "A later correction is recorded alongside the original, not written over it." },
  { title: "Permissions model", text: "View, request, approve and export rights are scoped by organization and event." },
  { title: "Data rights & export", text: "Retention, export and access follow the agreed pilot or customer terms." },
  {
    title: "Conflict & error handling",
    text: "Concurrent edits, stale data and failed notifications are surfaced, not hidden.",
  },
];

export function CorrectionsAccess() {
  return (
    <section className={`border-y border-[#ebe9df] bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-14`}>
        <div>
          <Reveal>
            <SectionTitle>Corrections and access stay accountable.</SectionTitle>
            <Lead className="mt-4 max-w-[800px]">
              A platform spanning organizations must be explicit about what can change, who can see it, and what
              happens when something goes wrong.
            </Lead>
          </Reveal>

          <div className="mt-8 grid items-center gap-8 md:grid-cols-[1fr_250px]">
            <RevealGroup className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {safeguards.map((s) => (
                <RevealItem
                  key={s.title}
                  className="border-l-2 border-transparent transition-all duration-300 hover:border-brand-yellow hover:pl-3"
                >
                  <h3 className="text-[15.5px] font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">{s.text}</p>
                </RevealItem>
              ))}
            </RevealGroup>
            <Reveal delay={0.2}>
              <Photo
                src="/images/approvals-decisions/corrections-baseball.webp"
                alt="Baseball pitcher's leg kick during the wind-up"
                sizes="(min-width: 768px) 250px, 95vw"
                className="aspect-[248/156] w-full"
              />
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.2} className="flex flex-col self-stretch rounded-2xl border border-[#DEDAD0] bg-[#f6f4ee] p-7">
          <h3 className="text-[19px] font-semibold text-ink">Trust Center</h3>
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
