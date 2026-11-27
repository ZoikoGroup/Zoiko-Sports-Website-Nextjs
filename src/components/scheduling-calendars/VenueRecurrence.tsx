import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cream, divider, line, sectionPad, SectionTitle, wrap } from "./shared";

const rules = [
  {
    title: "Venue & resource dependencies",
    text: "A venue, pitch, court or zone is a scoped resource with its own owner — distinct from whoever requested the change.",
    note: "A completed handover record is not a safety certification.",
  },
  {
    title: "Recurrence & exceptions",
    text: "Series, single-occurrence overrides and cancellations are proposed as separate, explicitly identified records.",
    note: "No quiet deletion — a cancelled occurrence keeps a visible tombstone.",
  },
];

export function VenueRecurrence() {
  return (
    <section className={`bg-white ${divider} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[700px]">Venue dependencies and recurring events need their own rules.</SectionTitle>
        </Reveal>

        <RevealGroup className="mt-9 grid md:grid-cols-2">
          {rules.map((r) => (
            <RevealItem
              key={r.title}
              className={`flex h-full flex-col rounded-xl border ${line} ${cream} px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(29,20,51,0.35)]`}
            >
              <h3 className="font-heading text-[16px] font-semibold text-ink">{r.title}</h3>
              <p className="mt-3 flex-1 text-[14px] leading-[1.55] text-ink-muted">{r.text}</p>
              <p className={`mt-4 border-t ${line} pt-4 text-[12px] italic text-ink/45`}>{r.note}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
