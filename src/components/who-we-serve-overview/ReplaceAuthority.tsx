import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Lead, line, sectionPad, SectionTitle, wrap } from "./shared";

const safeguards = [
  {
    title: "Scoped access",
    text: "Access and actions follow the organization, role and event assignment — enforced on the server, not a hidden interface control.",
  },
  {
    title: "Approval integrity",
    text: "A request, a human approval and an acknowledgment are always separate, attributable records.",
  },
  {
    title: "Source context",
    text: "Every record keeps its source, actor and time, so a reviewer can tell what happened from what is merely proposed.",
  },
  {
    title: "Connectivity constraints",
    text: "No connector, import or existing-system integration is assumed until agreed and validated during pilot scoping.",
  },
];

export function ReplaceAuthority() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[640px]">Does this replace human authority or specialist systems?</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            No. Software does not certify a venue as safe, authorize gates to open, or replace sporting, security,
            medical, safeguarding or emergency decision makers.
          </Lead>
        </Reveal>

        <Reveal delay={0.15}>
          <dl className={`mt-9 overflow-hidden rounded-2xl border ${line} bg-white`}>
            {safeguards.map((s, i) => (
              <div
                key={s.title}
                className={`grid gap-1.5 px-6 py-5 transition-colors duration-200 hover:bg-[#fbfaf6] md:grid-cols-[397px_1fr] md:items-center md:gap-4 ${i > 0 ? "border-t border-[#ebe9df]" : ""}`}
              >
                <dt className="font-heading text-[14.5px] font-semibold text-ink">{s.title}</dt>
                <dd className="text-[13.5px] leading-[1.6] text-ink-muted">{s.text}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.2}>
          <Link
            href="/trust"
            className="group mt-8 inline-flex items-center gap-1.5 font-heading text-[14px] font-semibold text-[#4b3a78] transition-colors duration-300 hover:text-brand-blue"
          >
            Visit the Trust Center
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
