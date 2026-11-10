import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Photo, SectionTitle, altBg, card, sectionPad, wrap } from "./shared";

const problems = [
  {
    title: "Operational context is scattered",
    text: "Schedules, readiness checks, staffing dependencies, approvals and exception updates often live in separate systems, spreadsheets and messages.",
  },
  {
    title: "Organizations see different versions of the event",
    text: "The organizer, club and venue can each hold a valid part of the picture without a governed way to connect the context they are authorized to share.",
  },
  {
    title: "Responsibilities become unclear under pressure",
    text: "When plans change, teams need to know who owns the next action, who can approve the decision and what has already been communicated.",
  },
  {
    title: "Decisions are hard to reconstruct later",
    text: "Post-event review is weaker when the reason, source, approver, timestamp and follow-up are split across multiple channels.",
  },
];

export function Problems() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>The problems we are designed to address</SectionTitle>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr_1.95fr]">
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
            {problems.map((p, i) => (
              <RevealItem key={p.title} className={`${card} p-7`}>
                <p className="text-[12px] font-semibold text-ink/40">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-[17px] font-semibold leading-snug text-ink">{p.title}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-ink-muted">{p.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.2} className="min-h-[320px]">
            <Photo
              src="/images/about/problems-runner.webp"
              alt="Low-angle shot of a runner's shoe mid-stride on a city road"
              sizes="(min-width: 1024px) 628px, 95vw"
              className="h-full w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
