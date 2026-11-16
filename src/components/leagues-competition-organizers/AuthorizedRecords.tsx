import { Fragment } from "react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, cream, dark, line, sectionPad, wrap } from "./shared";

const panels = [
  {
    label: "Organizer decides",
    text: "Competition schedule changes and approvals within its own authority — not venue safety.",
    isDark: true,
  },
  { label: "Venue owns", text: "Readiness checks, operational exceptions and local safety procedures.", isDark: false },
  {
    label: "Clubs acknowledge",
    text: "Updates directed to their own fixture — a response, not an approval.",
    isDark: false,
  },
];

const chain = ["Fixture", "Organizer", "Role", "Responsibility", "Allowed action"];

export function AuthorizedRecords() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[700px]">Your league sees its authorized records. Nothing more.</SectionTitle>
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
          <ol className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-3" aria-label="How your league's access is scoped">
            {chain.map((c, i) => (
              <Fragment key={c}>
                {i > 0 && (
                  <li aria-hidden className="text-ink/40">
                    →
                  </li>
                )}
                <li
                  className={`rounded-full border ${line} ${cream} px-4 py-2.5 font-heading text-[13.5px] font-semibold text-ink transition-colors duration-300 hover:border-brand-yellow`}
                >
                  {c}
                </li>
              </Fragment>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.15}>
          <p className={`mt-8 rounded-2xl border border-dashed ${line} ${cream} px-6 py-5 text-[13.5px] text-ink-muted`}>
            Denied example: a request for another league&apos;s fixture data receives &quot;Related record
            unavailable&quot; — never a reason that reveals restricted content.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
