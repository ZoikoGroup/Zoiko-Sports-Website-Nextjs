import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, altBg, card, ruled, sectionPad, wrap } from "./shared";

const related = [
  {
    title: "Platform Readiness Checks",
    text: "The in-product check worklist, detail and review states behind this workflow.",
    href: "/platform/readiness-checks",
  },
  {
    title: "Competition-to-Venue Coordination",
    text: "Align organizer schedules with venue responsibilities.",
    href: "/solutions/competition-to-venue",
  },
  {
    title: "Venue Operations",
    text: "Readiness, ownership and venue-side execution.",
    href: "/platform/venue-operations",
  },
];

export function RelatedPages() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[760px]">Explore how preparation connects to the rest of the event.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Agreed preparation work connects with the competition schedule and the venue work that surrounds it.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-0.5 md:grid-cols-3">
          {related.map((r) => (
            <RevealItem key={r.title}>
              <Link href={r.href} className={`${card} group block h-full bg-white p-6`}>
                <h3 className="flex items-center gap-2 text-[15.5px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                  {r.title}
                  <ArrowRight className="h-4 w-0 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
                </h3>
                <p className="mt-2.5 max-w-[340px] text-[14px] leading-[1.6] text-ink-muted">{r.text}</p>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
