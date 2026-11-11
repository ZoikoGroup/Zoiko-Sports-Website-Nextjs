import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, altBg, ruled, pad2, sectionPad, wrap } from "./shared";

const steps = ["Decision recorded", "Update queued", "Delivered to recipients", "Acknowledged by recipient"];

/** Fictional sample data — illustrative only. */
const recipients = [
  { name: "Match Officials", delivered: "Delivered 12:16 PDT", ack: "Acknowledged 12:16 PDT" },
  { name: "Participating Clubs (2)", delivered: "Delivered 12:16 PDT", ack: "Acknowledged 12:16 PDT" },
  { name: "Stewarding Lead", delivered: "Delivered 12:16 PDT", ack: "Pending until 12:18 PDT" },
];

export function SentAcknowledged() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>&quot;Sent&quot; is not &quot;acknowledged.&quot;</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            A queued notice, a delivered message and a human acknowledgment are tracked as distinct, attributable
            events.
          </Lead>
        </Reveal>

        {/* Joined boxes: each cell draws its right/bottom edge, the grid draws the outer top/left. */}
        <RevealGroup className="mt-9 grid border-l border-t border-[#DEDAD0] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <RevealItem
              key={s}
              className="group border-b border-r border-[#DEDAD0] px-5 py-5 transition-colors duration-300 hover:bg-[#fbfaf6]"
            >
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-ink/40">Step {pad2(i + 1)}</p>
              <h3 className="mt-2 text-[15.5px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {s}
              </h3>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup className="mt-8 overflow-hidden rounded-2xl border border-[#DEDAD0] bg-white">
          {recipients.map((r, i) => (
            <RevealItem
              key={r.name}
              className={`grid gap-1 px-6 py-4 transition-colors duration-200 hover:bg-[#fbfaf6] sm:grid-cols-3 sm:items-center sm:gap-6 ${
                i > 0 ? "border-t border-[#ebe9df]" : ""
              }`}
            >
              <p className="font-heading text-[15px] font-semibold text-ink">{r.name}</p>
              <p className="text-[13.5px] text-ink-muted">{r.delivered}</p>
              <p className="text-[13.5px] font-semibold text-ink">{r.ack}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
