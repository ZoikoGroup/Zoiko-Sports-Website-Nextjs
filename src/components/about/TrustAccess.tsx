import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, sectionPad, wrap } from "./shared";

const trustPoints = [
  {
    title: "Organization and role scope",
    text: "Users access the records and actions authorized for their organization, role and event responsibility.",
  },
  {
    title: "Recorded responsibility",
    text: "Important workflow actions identify the acting user, organization, role and time where supported.",
  },
  {
    title: "Approval integrity",
    text: "Approval history preserves changes and corrections rather than silently overwriting context.",
  },
  {
    title: "Notification clarity",
    text: "A queued or delivered message is not the same as a human acknowledgment; status language distinguishes them.",
  },
  {
    title: "Integration control",
    text: "Imported data retains source context and permissions appropriate to the connected system and agreement.",
  },
  {
    title: "Sensitive data discipline",
    text: "Medical, safeguarding and participant-sensitive workflows require separately approved scope, controls and evidence.",
  },
  {
    title: "AI accountability",
    text: "AI may assist with analysis and workflow, but authoritative records, permissions and responsibility remain governed outside the model.",
  },
];

export function TrustAccess() {
  return (
    <section className={`border-y border-[#ebe9df] bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-16`}>
        <div>
          <Reveal>
            <SectionTitle>Connected sport requires accountable access.</SectionTitle>
            <Lead className="mt-4 max-w-[780px]">
              A platform that spans organizations must be explicit about boundaries. Trust is part of the product
              model, not a late-stage compliance page.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {trustPoints.map((t) => (
              <RevealItem key={t.title} className="border-l-2 border-transparent pl-0 transition-all duration-300 hover:border-brand-yellow hover:pl-3">
                <h3 className="text-[15.5px] font-semibold text-ink">{t.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">{t.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.2} className="self-start rounded-2xl border border-[#DEDAD0] bg-[#f6f4ee] p-7">
          <Photo
            src="/images/about/trust-football.webp"
            alt="Footballer striking an overhead bicycle kick"
            sizes="(min-width: 1024px) 322px, 90vw"
            className="aspect-[322/273] w-full"
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
