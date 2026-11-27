"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { altBg, divider, line, Photo, sectionPad, SectionTitle, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: the design only shows the first answer; the others are drafted from the page copy — review before launch.
const faqs = [
  {
    q: "Does requesting an integration mean Zoiko Sports already connects to our systems?",
    a: "No. A request starts a scoped conversation about your existing systems and data rights. It does not confirm that a specific connector, API or integration is available.",
  },
  {
    q: "Who decides what data can be shared?",
    a: "The organization that owns or administers the system or data. If a venue, club or league partner owns it, that organization authorizes its own disclosure.",
  },
  {
    q: "How long will it take to hear back?",
    a: "A request starts a review by the team. No response time, delivery date or timeline is confirmed by submitting it.",
  },
  {
    q: "Does this replace the pilot request we already submitted?",
    a: "No. Integration scoping feeds into the same written pilot scope — the five-stage pilot process remains one process, and this doesn't start a second one.",
  },
  {
    q: "Can we request integration with a specific named vendor?",
    a: "You can describe the vendor's system during scoping. Naming it does not mean a connector exists or will be built; any exchange method is assessed and confirmed in writing first.",
  },
  {
    q: "What happens after a request is reviewed?",
    a: "A reviewer confirms which exchange method applies to each system you describe — manual, assessed import/export, a future technical connection, or explicitly excluded — as part of the written pilot scope.",
  },
];

export function RequestFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`${altBg} ${divider} ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[318px_1fr] lg:gap-x-8`}>
        <Reveal className="lg:col-start-2">
          <SectionTitle>Questions about requesting an integration</SectionTitle>
        </Reveal>

        <Reveal className="mx-auto w-full max-w-[318px] lg:row-start-2 lg:mx-0">
          <Photo
            src="/images/request-an-integration/faq-padel-player.webp"
            alt="A padel player in a ready stance on a blue indoor court as the ball comes in"
            sizes="318px"
            className="aspect-[318/406] w-full"
          />
        </Reveal>

        <Reveal delay={0.1} className="lg:row-start-2">
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
