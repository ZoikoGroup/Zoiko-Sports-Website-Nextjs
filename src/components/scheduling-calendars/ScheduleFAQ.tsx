"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { altBg, divider, line, Photo, sectionPad, SectionTitle, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: the design only shows the first answer; the others are drafted from the page copy — review before launch.
const faqs = [
  {
    q: "Does Zoiko Sports connect to our existing calendar?",
    a: "The public source specifications do not confirm a supported calendar connection. During an approved pilot-scoping discussion, the team can assess the systems involved, data rights, technical constraints and whether any exchange is included in a written scope.",
  },
  {
    q: "Do you support Google Calendar, Outlook or other named services?",
    a: "No named provider is verified today. Any provider-specific connection would need to be built, security-reviewed and supported in writing before it could be offered.",
  },
  {
    q: "Can a schedule be imported or exported?",
    a: "Only as a scoped file exchange — a defined, reviewed format tested for a specific pilot. It is not a general interchange, and it is assessed per pilot.",
  },
  {
    q: "How are time zones and daylight-saving changes handled?",
    a: "Any future design would keep the event-local zone, a stored UTC instant and the local rendering. Ambiguous or nonexistent local times from daylight-saving changes are flagged and routed to review, never silently converted.",
  },
  {
    q: "Does calendar delivery mean the recipient approved a change?",
    a: "No. Sent, delivered and acknowledged are three different facts, and an external calendar RSVP is never read as approval. A named person confirms receipt.",
  },
  {
    q: "Do we have to adopt a new calendar to run a pilot?",
    a: "No. Manual exchange of schedules, venue-area requirements and exceptions is available by default during scoping, per organization.",
  },
  {
    q: "How do we discuss our scheduling needs?",
    a: "Use Scope a Pilot to tell us which schedules, venues and organizations are involved today. It routes to one shared review — never automatic acceptance.",
  },
];

export function ScheduleFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`${altBg} ${divider} ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[318px_1fr] lg:gap-5`}>
        <Reveal className="lg:col-start-2">
          <SectionTitle>Questions about scheduling &amp; calendars</SectionTitle>
        </Reveal>

        <Reveal className="mx-auto w-full max-w-[318px] lg:row-start-2 lg:mx-0">
          <Photo
            src="/images/scheduling-calendars/faq-athlete-towel.webp"
            alt="A laughing athlete with a towel round her neck holding a water bottle"
            sizes="318px"
            className="aspect-[318/446] w-full"
          />
        </Reveal>

        <Reveal delay={0.1} className="lg:row-start-2 lg:pl-0">
          <ul>
            {faqs.map((f, i) => {
              const isOpen = open === i;
              const panelId = `${baseId}-panel-${i}`;
              return (
                <li key={f.q} className={`border-b ${line}`}>
                  <button
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className={`w-full text-left font-heading text-[15.5px] font-semibold text-ink transition-colors duration-300 hover:text-brand-blue ${
                      i === 0 ? "pb-4" : "py-4"
                    }`}
                  >
                    {f.q}
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-[14px] leading-[1.65] text-ink-muted">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
