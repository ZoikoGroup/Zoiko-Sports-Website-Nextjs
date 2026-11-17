"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { altBg, Footnote, Lead, ruled, sectionPad, SectionTitle, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: the design shows this panel collapsed, so its contents are not from the design — review before launch.
const coordinationPartners = [
  {
    name: "Officials & Event Staff",
    href: "/who-we-serve/officials-event-staff",
    text: "Invited by the organizer or venue for one event, with access to the instructions and acknowledgments addressed to their role.",
  },
  {
    name: "Contractors & Service Partners",
    href: "/who-we-serve/contractors-partners",
    text: "Sponsored by an organizer or venue for a bounded set of tasks, with access ending at expiry, revocation or the end of the agreed scope.",
  },
];

export function OtherParties() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Are officials, contractors and other parties involved?</SectionTitle>
          <Lead className="mt-5 max-w-[900px] text-[15.5px]">
            Officials and event staff, and contractors and service partners, may be included as scoped collaborators on
            an organizer&apos;s or venue&apos;s event once the relevant role and data-sharing permissions are approved.
            They are not positioned as an initial buyer, and no standalone portal or self-onboarding path is implied.
          </Lead>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-5 border-t border-[#ebe9df]">
            <button
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen(!open)}
              className="group flex w-full items-center justify-between gap-6 px-4 py-4 text-left"
            >
              <span className="font-heading text-[15px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                How participation is scoped
              </span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-ink/40 transition-transform duration-300 ${open ? "rotate-180 text-ink" : ""}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={panelId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-3 px-4 pb-4">
                    {coordinationPartners.map((p) => (
                      <li key={p.name} className="text-[14px] leading-[1.65] text-ink-muted">
                        <Link
                          href={p.href}
                          className="font-heading font-semibold text-ink transition-colors duration-300 hover:text-brand-blue"
                        >
                          {p.name}
                        </Link>{" "}
                        — {p.text}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Footnote className="mt-2">
            Additional participants and more specialized workflows may be considered as the platform expands and each
            scope is validated.
          </Footnote>
        </Reveal>
      </div>
    </section>
  );
}
