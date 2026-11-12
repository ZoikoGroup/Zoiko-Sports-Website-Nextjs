import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, card, cream, pad2, sectionPad, wrap } from "./shared";

// The copy says "seven elements", but the design only shows six cards.
const elements = [
  { title: "Event(s) or fixture block", text: "The specific event or named fixtures in scope." },
  { title: "Participating organizations", text: "Every organizer, venue, club or partner included." },
  { title: "Objective", text: "The coordination problem the pilot is testing." },
  { title: "Workflow in scope", text: "Which parts of the operating model are evaluated." },
  { title: "Named owners", text: "Sponsor, operations lead, venue liaison, Zoiko pilot owner." },
  { title: "Data sources & rights", text: "Record types, ownership and retention terms." },
];

export function KickoffDocs() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>What must be documented before kickoff.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Seven elements belong in the written scope. Missing any one of them blocks acceptance.
          </Lead>
        </Reveal>

        <div className="mt-9 grid gap-10 lg:grid-cols-[1fr_502px] lg:gap-4">
          <RevealGroup className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {elements.map((e, i) => (
              <RevealItem key={e.title} className={`${card} ${cream} p-5`}>
                <p className="text-[12px] font-semibold text-ink/40">{pad2(i + 1)}</p>
                <h3 className="mt-2 text-[15.5px] font-semibold leading-snug text-ink">{e.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">{e.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.2} className="min-h-[260px]">
            <Photo
              src="/images/pilot-program/kickoff-baseball-batter.webp"
              alt="Baseball batter following through on a swing in front of a crowd"
              sizes="(min-width: 1024px) 502px, 95vw"
              className="h-full w-full border border-[#DEDAD0]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
