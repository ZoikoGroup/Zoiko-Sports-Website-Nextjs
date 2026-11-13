import { Fragment } from "react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Note, SectionTitle, cream, sectionPad, wrap } from "./shared";

const chain = ["Event", "Organization", "Role", "Recipient group", "Required / optional"];

const roles = [
  { title: "Notice Author", text: "Drafts a proposed update tied to a source decision; cannot send without a separate grant." },
  { title: "Authorized Sender", text: "Verifies the audience and dispatches the update to approved recipients only." },
  { title: "Required Recipient", text: "Must acknowledge the current version for the event to show a complete response." },
  { title: "Optional Recipient", text: "Receives the update for awareness; no acknowledgment is counted as outstanding." },
];

export function WhoResponds() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Who is required to respond?</SectionTitle>
          <Lead className="mt-4 max-w-[720px] text-[15.5px]">
            Required recipients are agreed during event setup; access follows organization and role. There is no
            &quot;notify everyone&quot; default.
          </Lead>
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-3" aria-label="How required recipients are scoped">
            {chain.map((c, i) => (
              <Fragment key={c}>
                {i > 0 && (
                  <li aria-hidden className="text-ink/40">
                    →
                  </li>
                )}
                <li
                  className={`rounded-full border border-[#DEDAD0] ${cream} px-4 py-2.5 font-heading text-[13.5px] font-semibold text-ink`}
                >
                  {c}
                </li>
              </Fragment>
            ))}
          </ol>
        </Reveal>

        <RevealGroup className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((r) => (
            <RevealItem
              key={r.title}
              className={`group h-full rounded-2xl border border-[#DEDAD0] ${cream} px-5 py-6 transition-colors duration-300 hover:border-brand-yellow/70`}
            >
              <h3 className="text-[15px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {r.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-muted">{r.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15}>
          <Note variant="creamDashed" className="mt-8 text-[13.5px]">
            Denied example: a club requesting another organization&apos;s recipient list receives &quot;Related record
            unavailable&quot; — never a reason that reveals who else was notified.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
