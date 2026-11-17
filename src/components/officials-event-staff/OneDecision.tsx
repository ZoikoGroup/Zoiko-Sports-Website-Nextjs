import { Reveal } from "@/components/ui/Reveal";
import { cream, Lead, line, sectionPad, SectionTitle, wrap } from "./shared";

const recipients = [
  { who: "Match Officials", delivered: "Delivered 12:16 PDT", ack: "Acknowledged 12:16 PDT" },
  { who: "Participating Clubs", delivered: "Delivered 12:16 PDT", ack: "Acknowledged 12:16 PDT" },
  { who: "Stewarding Lead", delivered: "Delivered 12:16 PDT", ack: "Acknowledged 12:18 PDT" },
];

export function OneDecision() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[780px]">One human decision. Several separate human acknowledgments.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            Officials and clubs acknowledging a change records that they were informed — it is not the decision itself.
          </Lead>
        </Reveal>

        <Reveal delay={0.15}>
          <div className={`mt-9 overflow-x-auto rounded-2xl border ${line} bg-white`}>
            <dl className="min-w-[560px]">
              {recipients.map((r, i) => (
                <div
                  key={r.who}
                  className={`grid grid-cols-[1.3fr_1.2fr_1fr] items-center px-6 py-4 text-[13.5px] transition-colors duration-200 hover:bg-[#fbfaf6] ${i > 0 ? "border-t border-[#e7e4da]" : ""}`}
                >
                  <dt className="font-heading text-[14.5px] font-semibold text-ink">{r.who}</dt>
                  <dd className="text-ink-muted">{r.delivered}</dd>
                  <dd className="font-heading font-semibold text-ink">{r.ack}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className={`mt-8 rounded-2xl border ${line} ${cream} px-6 py-5 text-[13.5px] leading-[1.65] text-ink-muted`}>
            Only the Competition Director&apos;s 12:15 PDT approval changes the schedule. Acknowledgment by officials,
            clubs and staff never substitutes for that decision.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
