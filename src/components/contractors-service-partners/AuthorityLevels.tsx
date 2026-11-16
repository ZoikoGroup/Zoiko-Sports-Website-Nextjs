import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionTitle, dark, line, sectionPad, wrap } from "./shared";

const panels = [
  {
    label: "Service partner (scoped) can",
    text: "View its assigned task, respond to the current revision, and ask a routed clarification — never approve a decision.",
    isDark: false,
  },
  {
    label: "Organizer decides",
    text: "Schedule changes, competition approvals and who is authorized within that authority.",
    isDark: true,
  },
  {
    label: "Venue owns",
    text: "Readiness checks, operational exceptions and local safety procedures — never delegated to a task status.",
    isDark: false,
  },
];

export function AuthorityLevels() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[780px]">
            Organizer, venue and service partner — three different levels of authority.
          </SectionTitle>
        </Reveal>

        <RevealGroup className={`mt-9 grid overflow-hidden rounded-2xl border ${line} md:grid-cols-3`}>
          {panels.map((p, i) => (
            <RevealItem
              key={p.label}
              className={`h-full px-5 py-6 ${p.isDark ? dark : "bg-white"} ${i > 0 ? `border-t ${line} md:border-l md:border-t-0` : ""}`}
            >
              <p
                className={`text-[11.5px] font-semibold uppercase tracking-[0.1em] ${p.isDark ? "text-brand-yellow" : "text-ink/45"}`}
              >
                {p.label}
              </p>
              <p className={`mt-2 text-[14px] leading-[1.65] ${p.isDark ? "text-white/75" : "text-ink-muted"}`}>
                {p.text}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
