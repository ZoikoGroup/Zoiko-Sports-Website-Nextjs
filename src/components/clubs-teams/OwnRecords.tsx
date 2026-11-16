import { Fragment } from "react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, dark, line, altBg, ruled, sectionPad, wrap } from "./shared";

const panels = [
  {
    label: "Club can see",
    text: "Its own assigned tasks, authorized venue-dependency status, and decisions directed to it.",
    isDark: false,
  },
  {
    label: "Organizer decides",
    text: "Schedule changes, competition approvals and who is authorized within that authority.",
    isDark: true,
  },
  { label: "Venue owns", text: "Readiness checks, operational exceptions and local safety procedures.", isDark: false },
];

const chain = ["Event", "Your Club", "Role", "Responsibility", "Allowed action"];

export function OwnRecords() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Your club sees its own records. Nothing more.</SectionTitle>
          <Lead className="mt-4 max-w-[780px] text-[15.5px]">
            Software does not certify a venue as safe, authorize gates to open, or replace sporting, security, medical,
            safeguarding or emergency decision makers.
          </Lead>
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

        <Reveal delay={0.1}>
          <ol className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-3" aria-label="How your club's access is scoped">
            {chain.map((c, i) => (
              <Fragment key={c}>
                {i > 0 && (
                  <li aria-hidden className="text-ink/40">
                    →
                  </li>
                )}
                <li
                  className={`rounded-full border ${line} bg-white px-4 py-2.5 font-heading text-[13.5px] font-semibold text-ink transition-colors duration-300 hover:border-brand-yellow`}
                >
                  {c}
                </li>
              </Fragment>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.15}>
          <p className={`mt-8 rounded-2xl border border-dashed ${line} bg-white px-6 py-5 text-[13.5px] text-ink-muted`}>
            Denied example: your club requesting another club&apos;s private contact or task record receives &quot;Related
            record unavailable&quot; — never a reason that reveals restricted content.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
