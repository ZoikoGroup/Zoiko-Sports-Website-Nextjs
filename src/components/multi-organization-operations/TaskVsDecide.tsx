import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, cream, dark, sectionPad, wrap } from "./shared";

const lanes = [
  {
    label: "Operational task completion",
    owner: "Venue Operations",
    text: "A readiness check or exception is marked complete by the team that owns it. This confirms the task was done — not that the event is safe to proceed.",
    isDark: false,
  },
  {
    label: "Competition decision",
    owner: "Competition Director",
    text: "A schedule or competition decision is made by the organizer’s authorized role, timestamped and tied to the source evidence it responds to.",
    isDark: true,
  },
];

export function TaskVsDecide() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Finishing a task is not the same as deciding.</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            Operational task completion and a competition decision stay in separate lanes, each with its own accountable
            role.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid md:grid-cols-2">
          {lanes.map((l) => (
            <RevealItem key={l.label} className={`h-full px-7 py-8 ${l.isDark ? dark : cream}`}>
              <p
                className={`text-[11.5px] font-semibold uppercase tracking-[0.1em] ${l.isDark ? "text-brand-yellow" : "text-ink/45"}`}
              >
                {l.label}
              </p>
              <p className={`mt-1.5 text-[13.5px] font-semibold ${l.isDark ? "text-white/70" : "text-ink-muted"}`}>
                {l.owner}
              </p>
              <p
                className={`mt-3 font-heading text-[15.5px] font-medium leading-[1.6] ${l.isDark ? "text-white" : "text-ink"}`}
              >
                {l.text}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
