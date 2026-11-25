"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker, Lead, sectionPad, SectionTitle, soft, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: the design only shows the questions; these answers are drafted from the page copy — review before launch.
const faqs = [
  {
    q: "What does Integrations Overview explain?",
    a: "It explains how Zoiko Sports approaches imports, data connections and permissions during pilot scoping. It describes a process, not a list of available connectors.",
  },
  {
    q: "Does Zoiko Sports connect to our current systems?",
    a: "Not by default. Any connection is considered only during pilot scoping and is included only when the exact method has been assessed, implemented, tested and written into scope.",
  },
  {
    q: "Do we have to replace our current scheduling software?",
    a: "No. Existing systems stay with the organizations that own them. A scope may conclude that no new connection is needed at all.",
  },
  {
    q: "Are data imports currently supported?",
    a: "A file-based exchange may be considered only after its format, validation, permissions and recovery process are agreed. No import is included unless expressly agreed in writing.",
  },
  {
    q: "Is there a public API or webhook documentation?",
    a: "No public API or webhook documentation is released on this site. Technical details are discussed only within a scoped, staff-led assessment.",
  },
  {
    q: "Can Zoiko Sports synchronize with calendars or use single sign-on?",
    a: "Calendar exchange and single sign-on are not claimed as available. Either would need to be assessed and agreed in a written scope before being included.",
  },
  {
    q: "Who can use data shared between organizations?",
    a: "Only those with a documented, authorized basis. Participation in the same event does not create unrestricted access to another organization's records.",
  },
  {
    q: "How do we discuss integration requirements?",
    a: "Start a scoped discussion with the event context, participating organizations and the kind of information exchange you need to assess. Never include credentials, tokens or sensitive production files.",
  },
];

export function IntegrationFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <section className={`${soft} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal className="mx-auto max-w-[780px] text-center">
          <Kicker>Common questions</Kicker>
          <SectionTitle className="mx-auto mt-4 max-w-[680px]">Clear answers before a scoped discussion.</SectionTitle>
          <Lead className="mt-5">
            The overview stays useful even when technical integration details are not released.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-[900px]">
          <ul className="border-t border-[#E6E2D8]">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              const panelId = `${baseId}-panel-${i}`;
              return (
                <li key={f.q} className="border-b border-[#E6E2D8]">
                  <button
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center gap-6 py-[26px] text-left sm:gap-8"
                  >
                    <span className="w-6 shrink-0 text-[10.5px] font-semibold tracking-[0.12em] text-ink/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-heading text-[16px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                      {f.q}
                    </span>
                    <Plus
                      className={`h-4 w-4 shrink-0 text-ink transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
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
                        <p className="max-w-[760px] pb-6 pl-12 pr-10 text-[14.5px] leading-[1.7] text-ink-muted sm:pl-14">
                          {f.a}
                        </p>
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
