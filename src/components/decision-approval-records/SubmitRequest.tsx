import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, Photo, SectionTitle, altBg, ruled, card, cream, dark, sectionPad, wrap } from "./shared";

const fields = [
  { title: "Event & source", text: "Preselected to the authorized event; linked source references required." },
  { title: "Proposed change", text: "The affected schedule field, current value and proposed value." },
  { title: "Requesting role & organization", text: "Captured automatically from the authenticated requester." },
  { title: "Review summary", text: "A confirmation screen before submission — nothing changes until it is sent." },
  { title: "Reason", text: "A required explanation, 10-1000 characters." },
  { title: "Evidence", text: "Optional attachments reviewed under agreed access rights." },
];

export function SubmitRequest() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[660px]">Submit a request without changing the schedule.</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            An eligible requester proposes a change. Nothing is authorized until a reviewer with the right authority
            records a decision.
          </Lead>
        </Reveal>

        <div className="mt-9 grid gap-10 lg:grid-cols-[1fr_500px] lg:gap-5">
          <RevealGroup className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {fields.map((f) => (
              <RevealItem key={f.title} className={`${card} bg-white p-5`}>
                <h3 className="text-[15.5px] font-semibold leading-snug text-ink">{f.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">{f.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.2} className="min-h-[277px]">
            <Photo
              src="/images/decision-approval-records/request-volleyball-dig.webp"
              alt="Volleyball player kneeling low to dig the ball on an indoor court"
              sizes="(min-width: 1024px) 500px, 95vw"
              className="h-full w-full border border-[#DEDAD0]"
            />
          </Reveal>
        </div>

        {/* Confirmation messages shown to the requester */}
        <Reveal delay={0.1} className="mt-8 grid overflow-hidden rounded-2xl md:grid-cols-2">
          <div className={`${cream} px-6 py-7`}>
            <Kicker className="font-semibold">On submit</Kicker>
            <p className="mt-3 text-[15px] leading-[1.6] text-ink">
              &quot;Request submitted for authorized review. The event schedule has not changed.&quot;
            </p>
          </div>
          <div className={`${dark} px-6 py-7`}>
            <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-yellow">On decision</p>
            <p className="mt-3 text-[15px] leading-[1.6]">
              &quot;Decision recorded at 12:15 PDT. Check whether the schedule update has been applied.&quot;
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
