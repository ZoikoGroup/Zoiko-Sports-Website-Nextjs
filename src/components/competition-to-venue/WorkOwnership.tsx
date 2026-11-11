import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, Note, SectionTitle, altBg, ruled, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const venueWork = [
  { title: "East entrance ramp inspection — Open", meta: "Northfield Arena / Venue Operations · due 09:00" },
  { title: "PA test — Recorded complete", meta: "Northfield Arena / Venue Operations · due complete" },
];

export function WorkOwnership() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[760px]">Know which work is venue-owned, and which is organizer-owned.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Readiness checks are recorded work, not a safety certification.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className="mt-9 grid border border-[#DEDAD0] md:grid-cols-2">
          <div className="bg-white px-6 py-7">
            <Kicker className="font-semibold">Venue-side work</Kicker>
            <RevealGroup className="mt-4">
              {venueWork.map((w) => (
                <RevealItem
                  key={w.title}
                  className="border-t border-[#ebe9df] py-3.5 transition-colors duration-200 hover:bg-[#fbfaf6]"
                >
                  <h3 className="text-[15px] font-semibold text-ink">{w.title}</h3>
                  <p className="mt-1 text-[13.5px] text-ink-muted">{w.meta}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <div className="group/photo relative min-h-[220px] overflow-hidden bg-black/5">
            <Image
              src="/images/competition-to-venue/ownership-javelin-throw.webp"
              alt="Javelin thrower drawing back for a throw outdoors"
              fill
              sizes="(min-width: 768px) 640px, 95vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover/photo:scale-105"
            />
          </div>
        </Reveal>

        <Reveal>
          <Note variant="cream" className="mt-8">
            Software does not authorize venue opening. &quot;14 of 16 complete&quot; still has 2 checks open — never read as
            &quot;venue safe.&quot;
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
