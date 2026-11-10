import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Footnote, Note, SampleTag, SectionTitle, card, ruled, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const counts = [
  { value: "14", title: "Recorded complete", text: "Submitted and marked complete by the owning organization." },
  { value: "2", title: "Not complete", text: "Named open items still awaiting owner action." },
  { value: "—", title: "Review pending", text: "Submitted but not yet reviewed by an authorized role." },
  { value: "—", title: "Unknown / out of scope", text: "Excluded with a recorded reason — never cast as zero." },
];

export function CompletionCount() {
  return (
    <section className={`bg-white ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">A completion count is not an approval count.</SectionTitle>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {counts.map((c) => (
            <RevealItem key={c.title} className={`${card} bg-white px-6 py-6`}>
              <p className="font-heading text-[28px] font-bold leading-none text-ink">{c.value}</p>
              <h3 className="mt-4 text-[14.5px] font-semibold text-ink">{c.title}</h3>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-muted">{c.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <Note variant="cream" className="mt-8">
            At this fictional snapshot, 14 of 16 included checks were recorded complete. Two named checks remain open.
            This summary does not determine whether the event or venue is approved to proceed. The remaining 12
            completed checks are not itemized in the source and are not named here.
          </Note>
        </Reveal>

        <Footnote>As of September 26, 2026 · 08:50 PDT (UTC−07:00) · Riverside Invitational · Northfield Arena.</Footnote>
      </div>
    </section>
  );
}
