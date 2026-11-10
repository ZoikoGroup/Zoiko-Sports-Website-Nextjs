import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Note, Photo, SectionTitle, card, sectionPad, wrap } from "./shared";

const audiences = [
  {
    title: "Leagues & competition organizers",
    text: "Competition directors, operations leaders and event managers coordinating schedules, venues, approvals and delivery across multiple participants.",
  },
  {
    title: "Clubs",
    text: "Club operations managers, secretaries and event-day leads connecting team preparation with organizer and venue responsibilities.",
  },
  {
    title: "Venue operators",
    text: "Venue directors, operations managers and safety/operations leads coordinating readiness, dependencies and event-day exceptions.",
  },
];

export function Audiences() {
  return (
    <section className={`border-t border-[#ebe9df] bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Built for the organizations responsible for making sport happen.</SectionTitle>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <RevealItem key={a.title} className={`${card} p-6`}>
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-[16.5px] font-semibold leading-snug text-ink">{a.title}</h3>
                <span className="mt-0.5 shrink-0 rounded-full bg-[#efede6] px-2.5 py-1 text-[9.5px] font-semibold uppercase leading-none tracking-[0.08em] text-ink/45">
                  Initial buyer
                </span>
              </div>
              <p className="mt-3 text-[14px] leading-[1.6] text-ink-muted">{a.text}</p>
            </RevealItem>
          ))}
          <RevealItem className="min-h-[220px]">
            <Photo
              src="/images/about/audience-basketball.webp"
              alt="Basketball player driving to the basket during a professional game"
              sizes="(min-width: 1024px) 293px, (min-width: 640px) 45vw, 95vw"
              className="h-full w-full"
            />
          </RevealItem>
        </RevealGroup>

        <Reveal>
          <Lead className="mt-10 max-w-[800px] text-[15px]">
            The core platform is sport-agnostic where the operating pattern is common—events, venues,
            responsibilities, approvals, exceptions and records—and sport-specific where rules, structures and
            workflows differ. Initial product and market sequencing can prioritize selected sports without changing
            the architecture into a single-sport product.
          </Lead>
          <Note className="mt-10">
            Zoiko Sports is not positioned as a sportsbook, betting service, generic sports-media site or fan-score
            application. The initial commercial proposition is operational infrastructure for sports organizations.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
