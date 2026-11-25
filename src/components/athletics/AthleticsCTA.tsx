"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const CTA_ACTIONS = [
  {
    label: "Discuss Your Sport",
    href: "#",
    variant: "primary",
  },
  {
    label: "Explore Sports Overview",
    href: "#",
    variant: "secondary",
  },
] as const;

export default function AthleticsCTA() {
  return (
    <section className="group/cta relative isolate w-full overflow-hidden bg-[#140B36] text-white antialiased selection:bg-[#FFD60A] selection:text-[#111827]">
      <Image
        src="/images/footer/cta-stadium-banner.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center transition-transform duration-[2500ms] ease-out group-hover/cta:scale-105"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 75% 85% at 50% 50%, rgba(16, 10, 46, 0.58) 0%, rgba(12, 16, 56, 0.34) 65%, rgba(10, 14, 48, 0.52) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 py-16 text-center sm:px-10 lg:px-16 lg:py-[72px]">
        <h2 className="mx-auto max-w-[780px] text-[30px] leading-[1.14] font-bold tracking-[-0.02em] text-white sm:text-[36px] lg:text-[42px]">
          Describe the event, not a claim of
          <br />
          support.
        </h2>

        <p className="mx-auto mt-4 max-w-[740px] text-[13.5px] leading-[1.6] font-normal text-[#CBD0E0] sm:text-[14px]">
          Tell us about the athletics discipline, the competition, the
          organizations involved and the coordination problem. Discuss Your
          Sport routes to one shared review — never automatic acceptance or
          confirmation that an athletics discipline is supported.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
          {CTA_ACTIONS.map((action) =>
            action.variant === "primary" ? (
              <a
                key={action.label}
                href={action.href}
                className="group relative inline-flex h-[44px] items-center justify-center overflow-hidden rounded-[6px] bg-[#FFD60A] px-6 text-[13px] font-semibold text-[#111827] shadow-[0_10px_28px_-8px_rgba(255,214,10,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFE033] focus:outline-none focus:ring-2 focus:ring-[#FFD60A]/60"
              >
                <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/45 transition-all duration-700 group-hover:left-[120%]" />
                <span className="relative">{action.label}</span>
              </a>
            ) : (
              <a
                key={action.label}
                href={action.href}
                className="group inline-flex h-[44px] items-center justify-center gap-1.5 rounded-[6px] border border-white/35 bg-[#121646]/55 px-6 text-[13px] font-medium text-white backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/65 hover:bg-[#1B2264]/75 focus:outline-none focus:ring-2 focus:ring-white/35"
              >
                <span>{action.label}</span>
                <ArrowRight className="h-3.5 w-0 opacity-0 transition-all duration-300 group-hover:w-3.5 group-hover:opacity-100" />
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
