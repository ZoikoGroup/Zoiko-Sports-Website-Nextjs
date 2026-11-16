import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, SectionTitle, cream, line, sectionPad, wrap } from "./shared";

const states = ["Queued", "Delivered or Failed", "Acknowledged", "Retry (if needed)"];

const recipients = [
  { who: "Match Officials", delivered: "Delivered 12:16 PDT", ack: "Acknowledged 12:16 PDT" },
  { who: "Participating Clubs", delivered: "Delivered 12:16 PDT", ack: "Acknowledged 12:16 PDT" },
  { who: "Stewarding Lead", delivered: "Delivered 12:16 PDT", ack: "Pending until 12:18 PDT" },
];

export function DeliveredNotAck() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Delivered is not acknowledged.</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            Each organization&apos;s response to a decision is tracked on its own — not assumed from a message being
            sent.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-0.5 sm:grid-cols-2 lg:grid-cols-4">
          {states.map((s, i) => (
            <RevealItem
              key={s}
              className={`h-full border ${line} ${cream} px-5 py-6 transition-colors duration-300 hover:border-brand-yellow/70`}
            >
              <Kicker className="text-[11px]">State {String(i + 1).padStart(2, "0")}</Kicker>
              <h3 className="mt-1.5 text-[15.5px] font-semibold text-ink">{s}</h3>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15}>
          <div className={`mt-8 overflow-x-auto rounded-2xl border ${line} bg-white`}>
            <dl className="min-w-[560px]">
              {recipients.map((r, i) => (
                <div
                  key={r.who}
                  className={`grid grid-cols-[1.3fr_1.2fr_1fr] items-center px-6 py-4 text-[13.5px] transition-colors duration-200 hover:bg-[#fbfaf6] ${i > 0 ? "border-t border-[#ebe9df]" : ""}`}
                >
                  <dt className="font-heading text-[14.5px] font-semibold text-ink">{r.who}</dt>
                  <dd className="text-ink-muted">{r.delivered}</dd>
                  <dd className="font-heading font-semibold text-ink">{r.ack}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
