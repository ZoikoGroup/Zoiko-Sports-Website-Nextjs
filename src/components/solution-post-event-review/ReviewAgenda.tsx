import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, altBg, pad2, ruled, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const agenda = [
  { title: "Confirm equipment vs. operational impact timeline", text: "Source: EX-104, EX-105. Evidence-linked, not assumed." },
  { title: "Review DEC-021 authority and timing", text: "Confirm requesting and approving organizations match recorded roles." },
  { title: "Check acknowledgment completeness", text: "One recipient group acknowledged late — note cause for the next event." },
  { title: "Assign remaining follow-up", text: "Turnstile 4 reader replacement needs an owner and due date." },
];

export function ReviewAgenda() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[760px]">An agenda built from evidence, and follow-up that stays assigned.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Facilitating a review meeting is a separate privilege from signing off an incident or competition decision.
          </Lead>
        </Reveal>

        <div className="mt-9 grid gap-2.5 lg:grid-cols-[1fr_338px]">
          <RevealGroup className="space-y-1">
            {agenda.map((a, i) => (
              <RevealItem
                key={a.title}
                className="group grid grid-cols-[44px_1fr] border border-[#DEDAD0] bg-white px-4 py-[18px] transition-colors duration-300 hover:border-brand-yellow/70"
              >
                <span className="pt-0.5 text-[12px] font-semibold text-ink/40">{pad2(i + 1)}</span>
                <div>
                  <h3 className="text-[15px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-[13.5px] text-ink-muted">{a.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.15} className="min-h-[300px]">
            <Photo
              src="/images/solution-post-event-review/agenda-tennis-serve.webp"
              alt="Tennis player tossing the ball overhead to serve, seen from above"
              sizes="(min-width: 1024px) 338px, 95vw"
              className="h-full w-full rounded-lg!"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
