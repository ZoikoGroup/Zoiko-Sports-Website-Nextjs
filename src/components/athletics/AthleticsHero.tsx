"use client";

import React from "react";

export default function AthleticsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#161233] text-white antialiased selection:bg-[#FFD60A] selection:text-[#111827]">
      {/* Exact Ambient Background Gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 0% 0%, rgba(54, 34, 118, 0.72) 0%, rgba(22, 18, 51, 0) 70%), radial-gradient(75% 110% at 100% 85%, #174999 0%, #15265E 48%, #161233 88%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[540px] max-w-[1280px] flex-col justify-center px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:px-16 lg:py-20">
        {/* Left Column Content */}
        <div className="flex w-full max-w-[540px] flex-col items-start">
          {/* Eyebrow Label */}
          <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-[#E6B800] uppercase">
            <span>ATHLETICS</span>
            <span className="text-[#E6B800]/80">·</span>
            <span>OPERATING CONTEXT</span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-5 text-[38px] leading-[1.12] font-bold tracking-[-0.02em] text-white sm:text-[44px] lg:text-[48px]">
            Coordinate the
            <br />
            organizations behind an
            <br />
            athletics event.
          </h1>

          {/* Supporting Description */}
          <p className="mb-8 max-w-[515px] text-[14.5px] leading-[1.62] font-normal text-[#C2C7D6] sm:text-[15px]">
            Explore how session windows, track and field area preparation,
            responsibilities and operational changes could be coordinated across
            the organizations delivering an athletics meet. Track, field, road,
            cross-country and relay events are each distinct — none is presumed
            supported, and product fit and availability must be confirmed for
            the proposed event and market.
          </p>

          {/* CTA Buttons */}
          <div className="mb-7 flex flex-wrap items-center gap-3.5">
            <a
              href="#"
              className="inline-flex h-[46px] items-center justify-center rounded-[7px] bg-[#FFD60A] px-6 text-[13.5px] font-semibold text-[#111827] shadow-[0_4px_18px_rgba(255,214,10,0.22)] transition-all duration-200 hover:bg-[#FFE033] focus:outline-none focus:ring-2 focus:ring-[#FFD60A]/60"
            >
              Discuss Your Sport
            </a>

            <a
              href="#"
              className="inline-flex h-[46px] items-center justify-center rounded-[7px] border border-white/25 bg-white/[0.02] px-6 text-[13.5px] font-medium text-white backdrop-blur-[2px] transition-all duration-200 hover:border-white/45 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Explore Sports Overview
            </a>
          </div>

          {/* Disclaimer Footnote */}
          <p className="max-w-[460px] text-[11.5px] leading-[1.5] text-[#8E95A9]">
            No athletics-specific workflow is confirmed yet — this page explains
            an approach under review, not a live product claim.
          </p>
        </div>

        {/* Right Column Media */}
        <div className="mt-10 flex w-full justify-center lg:mt-0 lg:w-[50%] lg:justify-end">
          <div className="relative w-full max-w-[520px] overflow-hidden rounded-[12px] shadow-[0_24px_50px_rgba(0,0,0,0.42)] ring-1 ring-white/10">
            <img
              src="/images/athletics/7.png"
              alt="Athletes competing in track hurdles event"
              className="aspect-[16/10.6] h-auto w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
