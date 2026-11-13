import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Note, SectionTitle, altBg, ruled, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const panels = [
  {
    label: "Requested",
    title: "Start moved 12:15 → 12:25 PDT",
    text: "Requested by Northfield Arena Venue Operations, citing EX-105.",
  },
  {
    label: "Approved",
    title: "DEC-021 · Approved 12:15 PDT",
    text: "Recorded by the Riverside League Competition Director, role-at-time verified.",
    dark: true,
  },
  {
    label: "Source",
    title: "Linked to EX-104, EX-105",
    text: "Version 2 of 2 · earlier revision remains readable.",
  },
];

export function DecisionAuthority() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[680px]">Who requested the change, and who had authority to approve it.</SectionTitle>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-1 md:grid-cols-3">
          {panels.map((p) => (
            <RevealItem
              key={p.label}
              className={`h-full px-6 py-7 ${p.dark ? "bg-[#24163A] text-white" : "border border-[#DEDAD0] bg-white"}`}
            >
              <p
                className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${
                  p.dark ? "text-brand-yellow" : "text-ink/40"
                }`}
              >
                {p.label}
              </p>
              <h3 className={`mt-3 text-[15px] font-semibold ${p.dark ? "text-white" : "text-ink"}`}>{p.title}</h3>
              <p className={`mt-3 text-[13.5px] leading-[1.6] ${p.dark ? "text-white/60" : "text-ink-muted"}`}>{p.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15}>
          <Note className="mt-8 text-[13.5px]">
            A record contributor cannot approve a decision by editing a field. Authority is checked server-side against
            role-at-time before any commit.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
