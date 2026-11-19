import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { altBg, Kicker, Lead, line, ruled, sectionPad, SectionTitle, wrap } from "./shared";

const topics = [
  {
    title: "Event & format",
    text: "The sport or competition format, the specific event or fixture block, and when it happens.",
  },
  {
    title: "Organizations & responsibilities",
    text: "Who’s involved — organizer, venue, club or partner — and what each one is responsible for.",
  },
  {
    title: "Coordination problem",
    text: "The operational gap you want to close, and what stays with your own people and systems.",
  },
];

const canEvaluate = [
  "Competition schedule and venue dependencies",
  "Readiness checks and event-day exceptions",
  "Approvals, decisions and acknowledgments",
  "Cross-organization handoffs for one event or fixture block",
];

const notIncluded = [
  "Live scores, betting or spectator features",
  "Certified venue safety decisions",
  "Untested system integrations or guaranteed offline support",
  "Open-ended access across unrelated events or organizations",
];

export function ScopedConversation() {
  return (
    <section id="what-we-can-discuss" className={`scroll-mt-24 ${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>What a scoped conversation can cover.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            Three things make a first conversation useful — without promising a service before it&apos;s reviewed.
          </Lead>
        </Reveal>

        <RevealGroup className={`mt-9 grid overflow-hidden rounded-md border ${line} bg-white md:grid-cols-3`}>
          {topics.map((t, i) => (
            <RevealItem
              key={t.title}
              className={`group h-full px-6 py-6 transition-colors duration-300 hover:bg-[#fbfaf6] ${
                i > 0 ? `border-t md:border-l md:border-t-0 ${line}` : ""
              }`}
            >
              <h3 className="text-[15px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {t.title}
              </h3>
              <p className="mt-2.5 text-[13.5px] leading-[1.65] text-ink-muted">{t.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className={`mt-5 grid overflow-hidden rounded-md border ${line} md:grid-cols-2`}>
            <BoundaryColumn heading="We can evaluate" items={canEvaluate} />
            <BoundaryColumn heading="Not assumed or included" items={notIncluded} className={`border-t md:border-l md:border-t-0 ${line}`} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BoundaryColumn({ heading, items, className = "" }: { heading: string; items: string[]; className?: string }) {
  return (
    <div className={className}>
      <Kicker className={`border-b ${line} bg-[#f1efe8] px-5 py-3 text-[10.5px]!`}>{heading}</Kicker>
      <ul>
        {items.map((item, i) => (
          <li
            key={item}
            className={`bg-[#f9f8f4] px-5 py-3.5 text-[13.5px] text-ink-muted transition-colors duration-300 hover:bg-white hover:text-ink ${
              i > 0 ? `border-t ${line}` : ""
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
