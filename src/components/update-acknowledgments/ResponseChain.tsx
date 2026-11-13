import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Footnote, Lead, SectionTitle, Tag, altBg, ruled, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const chain = [
  { time: "12:15", text: "Decision recorded by Competition Director, Riverside League.", tag: "Decision" },
  {
    time: "12:16",
    text: "Update v2 delivered; Match Officials, Riverside FC and Harbor City FC acknowledge.",
    tag: "Acknowledged",
  },
  { time: "12:18", text: "Stewarding Lead acknowledges update v2.", tag: "Acknowledged" },
  { time: "Sep 27", text: "Post-event review reconstructs the full response chain for EV-001.", tag: "Review" },
];

export function ResponseChain() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Can review reconstruct the response chain?</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            A mistaken response can be corrected without falsifying past facts. &quot;Correction recorded. Earlier
            acknowledgment remains visible in history.&quot;
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 overflow-hidden rounded-2xl border border-[#DEDAD0] bg-white">
          {chain.map((c, i) => (
            <RevealItem
              key={`${c.time}-${i}`}
              className={`grid grid-cols-[64px_1fr] items-center gap-x-4 gap-y-2 px-6 py-4 transition-colors duration-200 hover:bg-[#fbfaf6] md:grid-cols-[88px_1fr_auto] ${
                i > 0 ? "border-t border-[#ebe9df]" : ""
              }`}
            >
              <p className="font-heading text-[13px] font-semibold text-ink/45">{c.time}</p>
              <p className="text-[14.5px] text-ink-muted">{c.text}</p>
              <div className="col-start-2 md:col-start-3 md:mr-10">
                <Tag>{c.tag}</Tag>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Footnote className="mt-8">
          This response is recorded for update v2, not a blanket approval. No &quot;tamper-proof&quot; or &quot;legally
          binding&quot; claim is made here.
        </Footnote>
      </div>
    </section>
  );
}
