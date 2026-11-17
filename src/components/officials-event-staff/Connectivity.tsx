import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { altBg, cream, Lead, line, ruled, sectionPad, SectionTitle, wrap } from "./shared";

const limits = [
  {
    title: "No offline guarantee",
    text: "Operating procedure for interruptions is agreed before a live event.",
  },
  {
    title: "No guaranteed instant delivery",
    text: "Delivery depends on the implemented, verified pilot scope.",
  },
  {
    title: "Unknown is never shown as success",
    text: "A failed or unknown transport state is never displayed as delivered or acknowledged.",
  },
];

export function Connectivity() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[740px]">Connectivity limits are agreed before event day, not assumed.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            An interruption procedure is agreed between the organizer, venue and participating staff before a pilot
            begins. An unknown delivery status is never shown as a successful one.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-2.5 md:grid-cols-3">
          {limits.map((l) => (
            <RevealItem
              key={l.title}
              className={`group h-full rounded-2xl border ${line} ${cream} px-5 py-5 transition-colors duration-300 hover:border-brand-yellow/70`}
            >
              <h3 className="text-[15px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {l.title}
              </h3>
              <p className="mt-1.5 text-[13.5px] leading-[1.6] text-ink-muted">{l.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
