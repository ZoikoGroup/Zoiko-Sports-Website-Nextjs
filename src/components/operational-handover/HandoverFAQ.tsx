"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Photo, SectionTitle, sectionPad, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: only the first answer came from the design; review the rest before launch.
const handoverFaqs = [
  {
    q: "What is an operational handover in sports events?",
    a: "An operational handover is a structured way to clarify the next agreed action between participating event organizations: who is sending the request, which organization and role is expected to respond, what work is in scope, when it is due and which information supports it. The example on this page illustrates a proposed approach; its public availability must be validated separately.",
  },
  {
    q: "What should a handover record include?",
    a: "The sending organization, the authorized recipient and role, the agreed next action, the source and timezone-aware due context it is bound to, and an explicit response history recorded with actor and time.",
  },
  {
    q: "What happens if the event plan changes after a handover?",
    a: "A changed fixture or responsibility creates a new version. The earlier response becomes historical and the recipient is asked to respond to the current version — nothing is silently overwritten.",
  },
  {
    q: "Can organizations see each other’s records?",
    a: "No. Access is denied by default. Each person sees only what their organization and role allow, and checks apply to search, export, counts and every server operation.",
  },
  {
    q: "Does a handover confirm that a venue is safe to open?",
    a: "No. A recorded handover is not legal delegation, safety sign-off or approval. Authorized people keep that responsibility.",
  },
  {
    q: "Will the page connect to our existing scheduling or venue systems?",
    a: "Only where an integration is validated for the agreed workflow. Source system type and data owner are recorded where connected; no real-time or full-sync claim is made without validated evidence.",
  },
  {
    q: "How can our organization explore a pilot?",
    a: "Start with one event. Describe the organizer, venue, club and coordination point, then scope a pilot once the workflow and commercial arrangements are ready.",
  },
];

export function HandoverFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[346px_1fr] lg:gap-[34px]`}>
        {/* Heading sits above the list on desktop, so the photo starts level with the first question */}
        <Reveal className="lg:col-start-2">
          <SectionTitle>Questions about operational handover</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:row-start-2 lg:mt-4 lg:block">
          <Photo
            src="/images/operational-handover/faq-football-kick.webp"
            alt="Australian rules footballer kicking the ball on a training field"
            sizes="346px"
            className="aspect-[346/468] w-full rounded-none!"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-2">
          <ul>
            {handoverFaqs.map((f, i) => {
              const isOpen = open === i;
              const panelId = `${baseId}-panel-${i}`;
              return (
                <li key={f.q} className="border-b border-[#ebe9df]">
                  <button
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-[18px] text-left"
                  >
                    <span className="font-heading text-[16px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                      {f.q}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-ink/40 transition-transform duration-300 ${isOpen ? "rotate-180 text-ink" : ""}`}
                    />
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
                        <p className="max-w-[900px] pb-5 text-[14.5px] leading-[1.7] text-ink-muted">{f.a}</p>
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
