import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { altBg, divider, Lead, line, sectionPad, SectionTitle, wrap } from "./shared";

const roles = [
  {
    title: "League fixture coordinator",
    text: "Share fixture and venue changes with every affected club and official.",
    note: "Not a promise of automatic synchronization to a named provider.",
  },
  {
    title: "Venue scheduling manager",
    text: "See what’s proposed for a venue without inheriting another organization’s calendar.",
    note: "Not universal interchange support.",
  },
  {
    title: "Club event lead",
    text: "Know what changed, who approved it, and whether their club has acknowledged it.",
    note: "Not a claim that a calendar edit itself authorizes a change.",
  },
  {
    title: "Technical integration lead",
    text: "Assess existing systems, formats and data rights before anything is built.",
    note: "Not self-service calendar access before a written scope.",
  },
];

export function WhoItsFor() {
  return (
    <section className={`${altBg} ${divider} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal className="max-w-[760px]">
          <SectionTitle>Who this assessment is for.</SectionTitle>
          <Lead className="mt-4">
            Four jobs recur when organizations consider schedule or calendar exchange. None implies a self-service
            account or confirmed eligibility.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((r) => (
            <RevealItem
              key={r.title}
              className={`flex h-full flex-col rounded-2xl border ${line} px-6 py-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_-24px_rgba(29,20,51,0.35)]`}
            >
              <h3 className="font-heading text-[17px] font-semibold text-ink">{r.title}</h3>
              <p className="mt-3 text-[14px] leading-[1.6] text-ink-muted">{r.text}</p>
              <p className={`mt-4 border-t ${line} pt-4 text-[12px] italic leading-[1.55] text-ink/45`}>{r.note}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
