import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, cream, sectionPad, wrap } from "./shared";

const tags = ["Participating organizations", "Human decision authority"];

export function WhatIsCoordination() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[362px_1fr] lg:gap-[18px]`}>
        <Reveal className="order-2 lg:order-1">
          <Photo
            src="/images/exception-coordination/what-badminton.webp"
            alt="Badminton player lunging to return a low shuttle"
            sizes="(min-width: 1024px) 362px, 95vw"
            className="aspect-[362/296] w-full rounded-none!"
          />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <SectionTitle>What is exception coordination?</SectionTitle>
            <Lead className="mt-6 max-w-[900px]">
              It is the process of recording an event-day operational problem, assigning the responsible team,
              understanding its impact, escalating decisions to authorized people, and confirming which parties have
              acknowledged an agreed update. Zoiko Sports is designed around this coordinated operating model — not as a
              substitute for a sporting ruling, a safety authority or a venue&apos;s own judgment.
            </Lead>
          </Reveal>

          <Reveal delay={0.1} className="mt-6 flex flex-wrap gap-2.5">
            {tags.map((t) => (
              <span
                key={t}
                className={`rounded-full border border-[#DEDAD0] ${cream} px-4 py-2 font-heading text-[13px] font-semibold text-ink transition-colors duration-300 hover:border-brand-yellow`}
              >
                {t}
              </span>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="mt-7">
            <Link
              href="/platform/event-day-exceptions"
              className="group inline-flex items-center gap-1.5 font-heading text-[14.5px] font-semibold text-[#3d2c6b] transition-colors duration-300 hover:text-brand-blue"
            >
              Explore Event-Day Exceptions (Platform)
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
