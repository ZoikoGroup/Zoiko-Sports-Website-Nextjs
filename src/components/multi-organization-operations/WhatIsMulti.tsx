import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, altBg, cream, line, ruled, sectionPad, wrap } from "./shared";

const pills = ["Organizer-led schedule", "Venue-owned readiness", "Role-scoped access"];

export function WhatIsMulti() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-8 lg:grid-cols-[1fr_354px] lg:gap-10`}>
        <Reveal>
          <SectionTitle>What is multi-organization operations?</SectionTitle>
          <Lead className="mt-6 max-w-[900px] text-[16.5px]">
            Multi-organization operations describes how the organizer, venue team and clubs delivering one event can
            coordinate authorized information — schedules, readiness, exceptions and decisions — while each organization
            keeps its own decision authority. It is the Zoiko Sports path for programs where more than one organization
            shares the same event.
          </Lead>
          <ul className="mt-6 flex flex-wrap gap-3">
            {pills.map((p) => (
              <li
                key={p}
                className={`rounded-full border ${line} ${cream} px-4 py-2.5 font-heading text-[13.5px] font-semibold text-ink transition-colors duration-300 hover:border-brand-yellow`}
              >
                {p}
              </li>
            ))}
          </ul>
          <Link
            href="/solutions/multi-event-operating-model"
            className="group mt-7 inline-flex items-center gap-1.5 font-heading text-[14.5px] font-semibold text-[#3d2a63] transition-colors duration-300 hover:text-brand-blue"
          >
            Explore the Multi-Event Operating Model
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <Photo
            src="/images/multi-organization-operations/what-figure-skater.webp"
            alt="Figure skater in a red dress gliding with arms outstretched"
            sizes="(min-width: 1024px) 354px, 95vw"
            className="aspect-[354/268] w-full rounded-md!"
          />
        </Reveal>
      </div>
    </section>
  );
}
