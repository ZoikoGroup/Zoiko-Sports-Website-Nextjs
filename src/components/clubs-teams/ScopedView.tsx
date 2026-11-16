import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, cream, dark, line, sectionPad, wrap } from "./shared";

const parties = [
  { label: "Event", title: "EV-001 · Riverside Invitational", text: "Sep 26, 2026 · PDT (UTC−07)", tone: "cream" },
  { label: "Organizer", title: "Riverside League", text: "Schedule and approval authority", tone: "dark" },
  { label: "Venue", title: "Northfield Arena", text: "Local readiness owner", tone: "cream" },
  { label: "Your club", title: "Club A (fictional)", text: "Liaison: Club Operations Manager", tone: "club" },
] as const;

const tones = {
  cream: { box: `border ${line} ${cream}`, label: "text-ink/45", title: "text-ink", text: "text-ink-muted" },
  dark: { box: `border border-[#24163A] ${dark}`, label: "text-brand-yellow", title: "text-white", text: "text-white/65" },
  club: { box: "border border-brand-yellow bg-white", label: "text-ink/45", title: "text-ink", text: "text-ink-muted" },
};

export function ScopedView() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>One event. Your club&apos;s scoped view.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            Your club retains its own responsibilities and access boundaries inside the shared event context.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {parties.map((p) => {
            const t = tones[p.tone];
            return (
              <RevealItem
                key={p.label}
                className={`h-full rounded-2xl px-5 py-6 transition-transform duration-300 hover:-translate-y-1 ${t.box}`}
              >
                <p className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${t.label}`}>{p.label}</p>
                <h3 className={`mt-1.5 text-[16px] font-semibold ${t.title}`}>{p.title}</h3>
                <p className={`mt-1 text-[13.5px] ${t.text}`}>{p.text}</p>
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
            <p className="text-[12.5px] text-ink/45">
              Event, venue, organizer and club identifiers shown are fictional specimen data.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
