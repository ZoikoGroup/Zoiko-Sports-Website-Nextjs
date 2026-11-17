import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cream, dark, Lead, line, SampleTag, sectionPad, SectionTitle, wrap } from "./shared";

const parties = [
  { label: "Event", title: "Riverside Invitational", text: "Sep 26, 2026 · PDT (UTC−07)", tone: "cream" },
  { label: "Organizer", title: "Riverside League", text: "Schedule and approval authority", tone: "dark" },
  { label: "Venue", title: "Northfield Arena", text: "Local readiness owner; exception owner", tone: "cream" },
  {
    label: "Officials & staff",
    title: "No individual named by this source",
    text: "Shown only as a hypothetical scoped participant group.",
    tone: "dashed",
  },
] as const;

const tones = {
  cream: { box: `border ${line} ${cream}`, label: "text-ink/45", title: "text-ink", text: "text-ink-muted" },
  dark: { box: `border border-[#24163A] ${dark}`, label: "text-brand-yellow", title: "text-white", text: "text-white/65" },
  dashed: { box: `border border-dashed ${line} bg-white`, label: "text-ink/45", title: "text-ink", text: "text-ink-muted" },
};

export function OneEvent() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">One fictional event, named so nothing else is mistaken for real.</SectionTitle>
          <Lead className="mt-4 max-w-[720px] text-[15.5px]">
            Riverside Invitational and Northfield Arena are the same specimen used across Zoiko Sports. The source names
            no individual official, so none is shown.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {parties.map((p) => {
            const t = tones[p.tone];
            return (
              <RevealItem
                key={p.label}
                className={`h-full rounded-2xl px-5 pb-8 pt-6 transition-transform duration-300 hover:-translate-y-1 ${t.box}`}
              >
                <p className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${t.label}`}>{p.label}</p>
                <h3 className={`mt-1.5 text-[16px] font-semibold leading-[1.4] ${t.title}`}>{p.title}</h3>
                <p className={`mt-1.5 text-[13.5px] leading-[1.55] ${t.text}`}>{p.text}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
