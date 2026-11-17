"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { altBg, Photo, ruled, sectionPad, SectionTitle, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: only the first answer came from the design; review the rest before launch.
const serveFaqs = [
  {
    q: "Who is Zoiko Sports designed for?",
    a: "Zoiko Sports initially focuses on three groups responsible for delivering events: leagues and competition organizers, clubs and teams, and venue operators. Its intended operating model connects the schedule, readiness work, exceptions and authorized decisions across their agreed responsibilities.",
  },
  {
    q: "Are officials and contractors already supported today?",
    a: "Not as buyers. Officials, event staff, contractors and service partners may be included as scoped collaborators on an organizer's or venue's event once the relevant role and data-sharing permissions are approved — there is no standalone portal or self-onboarding path.",
  },
  {
    q: "How does access stay scoped across organizations?",
    a: "Access and actions follow the organization, role and event assignment, enforced on the server. A request for another organization's private record receives \"Related record unavailable\" — never a reason that reveals restricted content.",
  },
  {
    q: "Is a sent update the same as an acknowledged one?",
    a: "No. Delivery and human acknowledgment are tracked as separate states for each recipient, so a delivered update is never shown as acknowledged until the person confirms it.",
  },
  {
    q: "What would a credible first pilot look like for us?",
    a: "It depends on your organization: one fixture or a bounded block for an organizer, one home event for a club, or one home event with the relevant organizer involved for a venue. Participants, workflow, operating limits and measures are agreed before it begins.",
  },
  {
    q: "How do we get started?",
    a: "Tell us which event and which other organizations are involved. A request starts a review — it is not confirmation of a pilot — and we agree the workflow and measures with you before use.",
  },
];

export function ServeFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[358px_1fr] lg:gap-[18px]`}>
        {/* Heading sits above the list on desktop, so the photo starts level with the first question */}
        <Reveal className="lg:col-start-2">
          <SectionTitle>Questions about who Zoiko Sports serves</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:row-start-2 lg:mt-4 lg:block">
          <Photo
            src="/images/who-we-serve/faq-baseball-player.webp"
            alt="Baseball player in a grey road uniform looking up, seen from above"
            sizes="358px"
            className="aspect-[357/412] w-full rounded-md!"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-2">
          <ul>
            {serveFaqs.map((f, i) => {
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
