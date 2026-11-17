"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { altBg, Photo, ruled, sectionPad, SectionTitle, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: only the first answer came from the design; review the rest before launch.
const staffFaqs = [
  {
    q: "What role do officials and event staff have in Zoiko Sports?",
    a: "They are potential authorized participants in an event-coordination workflow. The initial Zoiko Sports buyers remain leagues and competition organizers, clubs and venue operators. An individual staff role would be included only where a scoped, validated pilot or released workflow supports that participation.",
  },
  {
    q: "What information is shown about the event?",
    a: "Only the event, briefing milestone and current instruction authorized for the participant's own organization and role — with its revision and source — plus the delivery and acknowledgment status of their own response.",
  },
  {
    q: "Can officials or event staff report concerns?",
    a: "They can raise a bounded question tied to the current instruction, routed only to the accountable organizer or venue role. Urgent incidents, medical issues and safeguarding concerns stay with the organizer's and venue's established real-world procedures.",
  },
  {
    q: "Who approves a change to the event schedule?",
    a: "Only the organizer's Competition Director role. Venue Operations or an official can request a review, and participants acknowledge the change — but acknowledgment never substitutes for the decision.",
  },
  {
    q: "Does this page mean officials and staff can sign up now?",
    a: "No. There is no self-service sign-up. Participation is by controlled invitation from the organizer or venue that owns the event, within an agreed pilot scope.",
  },
  {
    q: "How is staff information protected?",
    a: "Access is bound to one event, organization and role at a time. No medical, safeguarding or participant-sensitive data is collected without separately approved scope, and retention, export and deletion follow the applicable agreement.",
  },
  {
    q: "How can an organizer include officials or staff in a pilot?",
    a: "An organizer or venue scopes the pilot to one event or fixture block, names the officials and staff roles involved, and agrees responsibilities, support and evaluation measures in writing before the pilot begins.",
  },
];

export function StaffFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[358px_1fr] lg:gap-[22px]`}>
        {/* Heading sits above the list on desktop, so the photo starts level with the first question */}
        <Reveal className="lg:col-start-2">
          <SectionTitle>Questions about officials and event staff</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:row-start-2 lg:mt-4 lg:block">
          <Photo
            src="/images/officials-event-staff/faq-hurdler-crouch.webp"
            alt="Hurdler crouching on the track with one hand on the ground after a race"
            sizes="358px"
            className="aspect-[358/487] w-full rounded-md!"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-2">
          <ul>
            {staffFaqs.map((f, i) => {
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
