import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { altBg, Lead, line, Photo, ruled, sectionPad, SectionTitle, wrap } from "./shared";

const chips = ["Role-scoped participation", "Organizer/venue-led pilot", "No staff self-signup"];

export function WhatItMeans() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[353px_1fr] lg:gap-7`}>
        <Reveal>
          <Photo
            src="/images/officials-event-staff/means-tennis-serve.webp"
            alt="Tennis player following through on a serve with the racquet overhead"
            sizes="(min-width: 1024px) 353px, 95vw"
            className={`aspect-[353/324] w-full border ${line}`}
          />
        </Reveal>

        <Reveal delay={0.15}>
          <SectionTitle>What official and event-staff participation means here.</SectionTitle>
          <Lead className="mt-6">
            Officials and event staff are potential participants in the Zoiko Sports event-coordination model — not its
            initial buyers. Within an agreed, role-scoped pilot, an invited official, stewarding lead or event-operations
            team member could receive the event information and acknowledgment tasks relevant to their own
            responsibility, while a league, club or venue remains the commercial decision-maker. The aim is to stop event
            plans fragmenting across emails, calls and spreadsheets — not to offer credentialing, licensing or safety
            certification.
          </Lead>

          <ul className="mt-6 flex flex-wrap gap-2.5">
            {chips.map((c) => (
              <li
                key={c}
                className={`rounded-full border ${line} bg-[#f6f4ee] px-4 py-2 font-heading text-[13px] font-semibold text-ink transition-colors duration-300 hover:border-brand-yellow`}
              >
                {c}
              </li>
            ))}
          </ul>

          <a
            href="#who-does-what"
            className="group mt-7 inline-flex items-center gap-1.5 font-heading text-[14px] font-semibold text-[#4b3a78] transition-colors duration-300 hover:text-brand-blue"
          >
            See who does what
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
