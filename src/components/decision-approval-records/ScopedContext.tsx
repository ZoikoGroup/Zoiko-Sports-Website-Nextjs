import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, card, cream, sectionPad, wrap } from "./shared";

const participants = [
  {
    title: "Venue Operations",
    text: "Requests a change and reports the operational condition behind it — without competition decision authority.",
  },
  {
    title: "Competition Director",
    text: "Reviews the request against agreed authority and records the decision, approved or not.",
  },
  {
    title: "Clubs & officials",
    text: "See the outcomes they are scoped to receive and are expected to acknowledge the current version.",
  },
];

export function ScopedContext() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_298px] lg:gap-7`}>
        <div className="flex flex-col">
          <Reveal>
            <SectionTitle className="max-w-[720px]">
              Shared event context does not mean every organization sees every record.
            </SectionTitle>
            <Lead className="mt-4 max-w-[760px] text-[15.5px]">
              Each participant sees only the context relevant to its own responsibility.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-6 md:mt-auto md:grid-cols-3 md:pt-10">
            {participants.map((p) => (
              <RevealItem key={p.title} className={`${card} ${cream} p-6`}>
                <h3 className="text-[15.5px] font-semibold text-ink">{p.title}</h3>
                <p className="mt-2.5 text-[14px] leading-[1.65] text-ink-muted">{p.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.2} className="min-h-[297px]">
          <Photo
            src="/images/decision-approval-records/access-tennis-smash.webp"
            alt="Tennis player leaping for an overhead smash"
            sizes="(min-width: 1024px) 298px, 95vw"
            className="h-full w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
