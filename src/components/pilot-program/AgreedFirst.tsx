import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Footnote, SectionTitle, StatePill, sectionPad, wrap } from "./shared";

const agreements = [
  {
    title: "Access & role scope",
    text: "Organization, event and role boundaries enforced server-side.",
    state: "Reviewed per pilot",
  },
  { title: "Connectivity mode", text: "Selected operating mode and interruption handling.", state: "Agreed before Operate" },
  {
    title: "Source systems",
    text: "Existing systems assessed — not a confirmed connector.",
    state: "Assessed, not pre-confirmed",
  },
  { title: "Data rights", text: "Retention, ownership and export rights.", state: "Contractual review required" },
  { title: "Commercial terms", text: "Written pilot terms, markets and capacity.", state: "Required before CTA is active" },
];

export function AgreedFirst() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[640px]">What must be agreed before anything operates.</SectionTitle>
        </Reveal>

        <RevealGroup className="mt-9 overflow-hidden rounded-2xl border border-[#DEDAD0] bg-white">
          {agreements.map((a, i) => (
            <RevealItem
              key={a.title}
              className={`grid gap-2 px-6 py-5 transition-colors duration-200 hover:bg-[#fbfaf6] md:grid-cols-[1fr_1.4fr_1fr] md:items-center md:gap-6 ${
                i > 0 ? "border-t border-[#ebe9df]" : ""
              }`}
            >
              <p className="font-heading text-[15px] font-semibold text-ink">{a.title}</p>
              <p className="text-[14px] text-ink-muted">{a.text}</p>
              <span>
                <StatePill>{a.state}</StatePill>
              </span>
            </RevealItem>
          ))}
        </RevealGroup>

        <Footnote>
          Unknown status never counts as passed. No record enters the Operate stage until its owner has approved evidence.
        </Footnote>
      </div>
    </section>
  );
}
