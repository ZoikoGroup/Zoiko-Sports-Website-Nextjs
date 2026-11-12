import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, cream, sectionPad, wrap } from "./shared";

const tags = ["Block scope", "Per-event control", "Human evaluation"];

export function WhatIsMultiEvent() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[364px_1fr] lg:gap-4`}>
        <Reveal className="order-2 lg:order-1">
          <Photo
            src="/images/multi-event-operating-model/what-judo-throw.webp"
            alt="Judoka in blue throwing an opponent in white onto the mat"
            sizes="(min-width: 1024px) 364px, 95vw"
            className="aspect-[364/312] w-full rounded-none!"
          />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <SectionTitle className="max-w-[800px]">What is a multi-event operating model in sports operations?</SectionTitle>
            <Lead className="mt-6 max-w-[900px]">
              A multi-event operating model is a structured way to apply an agreed coordination process across a defined
              set of fixtures. It identifies what can be prepared consistently and what must be reassessed for each
              event: venues, participating organizations, access permissions, checks, approvals, exceptions and reviews.
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
              href="/platform/post-event-review"
              className="group inline-flex items-center gap-1.5 font-heading text-[14.5px] font-semibold text-[#3d2c6b] transition-colors duration-300 hover:text-brand-blue"
            >
              Explore Post-Event Review (Platform)
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
