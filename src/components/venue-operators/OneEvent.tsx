import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cream, dark, Lead, line, sectionPad, SectionTitle, wrap } from "./shared";

const parties = [
  { label: "Event", title: "EV-001 · Riverside Invitational", text: "Sep 26, 2026 · PDT (UTC−07)", tone: "cream" },
  { label: "Organizer", title: "Riverside League", text: "Schedule and approval authority", tone: "dark" },
  { label: "Your venue", title: "Northfield Arena", text: "Local readiness owner; exception owner", tone: "venue" },
  {
    label: "Officials & clubs",
    title: "Participate within organizer's scope",
    text: "Your venue sees only what is addressed to it.",
    tone: "cream",
  },
] as const;

const tones = {
  cream: { box: `border ${line} ${cream}`, label: "text-ink/45", title: "text-ink", text: "text-ink-muted" },
  dark: { box: `border border-[#24163A] ${dark}`, label: "text-brand-yellow", title: "text-white", text: "text-white/65" },
  venue: { box: "border border-brand-yellow bg-white", label: "text-ink/45", title: "text-ink", text: "text-ink-muted" },
};

export function OneEvent() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>One event. Your venue&apos;s scoped view.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            Your venue retains its own responsibilities and access boundaries inside the shared event context.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
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

        <Reveal delay={0.15}>
          <div
            className={`mt-8 flex flex-col gap-2 rounded-2xl border ${line} ${cream} px-6 py-5 md:flex-row md:items-center md:justify-between`}
          >
            <p className="text-[14px] text-ink-muted">
              Next milestone: Officials briefing · 10:15 PDT — not a live schedule feed.
            </p>
            <p className="shrink-0 text-[12.5px] text-ink/45">
              Event, venue and organizer identifiers shown are fictional specimen data.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
