import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, altBg, pad2, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const agenda = [
  { title: "Confirm equipment vs. operational impact timeline", text: "Source: EX-104, EX-105. Evidence-linked, not assumed." },
  { title: "Review DEC-021 authority and timing", text: "Confirm requesting and approving organizations match recorded roles." },
  { title: "Check acknowledgment completeness", text: "One recipient group acknowledged late — note cause for the next event." },
  { title: "Assign remaining follow-up", text: "Turnstile 4 reader replacement needs an owner and due date." },
];

export function ReviewAgenda() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[760px]">An agenda built from evidence, and follow-up that stays assigned.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            Facilitating a review meeting is a separate privilege from signing off an incident or competition decision.
          </Lead>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_300px] lg:gap-7">
          <RevealGroup className="grid gap-1 lg:pl-5">
            {agenda.map((a, i) => (
              <RevealItem
                key={a.title}
                className="group flex gap-6 border border-[#DEDAD0] bg-white px-5 py-4 transition-colors duration-300 hover:border-brand-yellow"
              >
                <span className="pt-0.5 text-[12px] font-semibold text-ink/40">{pad2(i + 1)}</span>
                <div>
                  <h3 className="text-[15px] font-semibold text-ink">{a.title}</h3>
                  <p className="mt-1 text-[13.5px] leading-[1.6] text-ink-muted">{a.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.2} className="min-h-[300px]">
            <Photo
              src="/images/post-event-review/agenda-long-jump.webp"
              alt="Long jumper reaching forward in mid-flight"
              sizes="(min-width: 1024px) 300px, 95vw"
              className="h-full w-full border border-[#DEDAD0]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
