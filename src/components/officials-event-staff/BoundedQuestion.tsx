import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cream, Footnote, line, Photo, sectionPad, SectionTitle, wrap } from "./shared";

const steps = [
  {
    stage: "Ask",
    title: "Raise a bounded question",
    text: "An official or staff member can raise a question tied to the current instruction.",
  },
  {
    stage: "Route",
    title: "Sent to the accountable organization only",
    text: "The question reaches only the accountable organizer or venue role — never a public forum.",
  },
];

export function BoundedQuestion() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-2.5 lg:grid-cols-[1fr_420px]`}>
        <div className="flex flex-col">
          <Reveal className="lg:pr-10">
            <SectionTitle className="max-w-[660px]">A bounded question, not an emergency channel.</SectionTitle>
          </Reveal>

          <RevealGroup className="mt-8 grid flex-1 gap-2.5 md:grid-cols-2">
            {steps.map((s, i) => (
              <RevealItem
                key={s.stage}
                className={`group h-full rounded-2xl border ${line} ${cream} px-7 py-7 transition-colors duration-300 hover:border-brand-yellow/70`}
              >
                <p className="text-[12px] font-semibold tracking-[0.04em] text-ink/40">
                  {String(i + 1).padStart(2, "0")} · {s.stage}
                </p>
                <h3 className="mt-2 text-[17px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                  {s.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-ink-muted">{s.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.15} className="mt-4 min-h-[302px] lg:mt-0">
          <Photo
            src="/images/officials-event-staff/question-volleyball-player.webp"
            alt="Volleyball player in a red jersey crouching courtside and looking up"
            sizes="(min-width: 1024px) 420px, 95vw"
            className={`h-full w-full border ${line}`}
          />
        </Reveal>
      </div>

      <div className={wrap}>
        <Reveal delay={0.2}>
          <Footnote className="mt-8">
            Urgent incidents, medical issues and safeguarding concerns remain subject to the organizer&apos;s and
            venue&apos;s established real-world procedures.
          </Footnote>
        </Reveal>
      </div>
    </section>
  );
}
