import { Fragment } from "react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, cream, sectionPad, wrap } from "./shared";

/** Fictional sample data — `dark` marks the steps the design highlights. */
const chain = [
  { kicker: "Exception", title: "EX-104 · Turnstile offline", meta: "Restored 12:07 · Venue Operations", dark: true },
  { kicker: "Impact", title: "EX-105 · Entry backlog", meta: "Active · related to EX-104" },
  { kicker: "Change request", title: "Start change requested", meta: "12:15 → 12:25 PDT proposed" },
  { kicker: "Decision", title: "Approved by Competition Director", meta: "Recorded 12:15 PDT", dark: true },
  { kicker: "Notification", title: "Update shared", meta: "Officials & clubs acknowledged" },
  { kicker: "Follow-up", title: "Replace turnstile reader", meta: "Due Oct 2 · Venue Operations" },
];

export function LinkedImpact() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[680px]">
            The equipment was restored. The event impact still needed attention.
          </SectionTitle>
          <Lead className="mt-4 max-w-[700px] text-[15.5px]">
            A technical fix and its continuing operational impact are linked but independently owned and independently
            closed.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-4">
          {chain.map((c, i) => (
            <Fragment key={c.kicker}>
              <RevealItem
                className={`rounded-xl px-[18px] py-4 transition-transform duration-300 hover:-translate-y-0.5 ${
                  c.dark ? "bg-[#24163A] text-white" : ""
                }`}
              >
                <p
                  className={`text-[11px] font-bold uppercase tracking-[0.12em] ${
                    c.dark ? "text-brand-yellow" : "text-ink/40"
                  }`}
                >
                  {c.kicker}
                </p>
                <h3 className={`mt-1.5 text-[15px] font-semibold ${c.dark ? "text-white" : "text-ink"}`}>{c.title}</h3>
                <p className={`mt-1 text-[13px] ${c.dark ? "text-white/60" : "text-ink-muted"}`}>{c.meta}</p>
              </RevealItem>
              {/* The design's arrow trails every step except the last */}
              {i < chain.length - 1 && (
                <span aria-hidden className="text-ink/30">
                  →
                </span>
              )}
            </Fragment>
          ))}
        </RevealGroup>

        <Reveal>
          <p
            className={`mt-10 flex flex-col gap-1 rounded-2xl border border-dashed border-[#DEDAD0] ${cream} px-6 py-5 text-[14px] text-ink-muted sm:flex-row sm:items-center sm:gap-4`}
          >
            <span className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-ink/40">
              Related record unavailable
            </span>
            A cross-organization record outside your access shows this label rather than revealing why it is withheld.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
