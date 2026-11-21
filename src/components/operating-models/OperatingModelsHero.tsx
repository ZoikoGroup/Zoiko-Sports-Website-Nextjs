import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export function OperatingModelsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#181236] text-white">
      {/* Background Gradient & Ambient Glows */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(115deg,#1b1139_0%,#1c164a_30%,#182e70_60%,#1f62cc_86%,#2674e0_100%)]" />
      <div className="absolute -left-24 -top-24 -z-10 h-[480px] w-[480px] rounded-full bg-[#5b38a6]/25 blur-[120px] pointer-events-none" />
      <div className="absolute right-0 top-1/4 -z-10 h-[520px] w-[520px] rounded-full bg-[#206fec]/30 blur-[130px] pointer-events-none" />

      {/* Main Container */}
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:gap-12 xl:gap-16">
          {/* Left Column Content */}
          <div className="max-w-[680px]">
            {/* Eyebrow */}
            <p
              className="reveal text-[12px] font-bold uppercase tracking-[0.2em] text-[#fecf23]"
              style={delay(0)}
            >
              SPORTS · OPERATING MODELS
            </p>

            {/* Headline */}
            <h1
              className="reveal mt-5 text-[clamp(2.25rem,4.2vw,3.25rem)] font-bold leading-[1.12] tracking-tight text-white font-heading"
              style={delay(100)}
            >
              Different sports. Shared operational responsibilities.
            </h1>

            {/* Description */}
            <p
              className="reveal mt-6 max-w-[580px] text-[16px] sm:text-[16.5px] leading-[1.75] text-white/80"
              style={delay(200)}
            >
              Zoiko Sports is being built around competition and venue coordination. Each sport and event format has its own rules, roles and operating requirements — these are reviewed before a workflow is agreed, sport by sport.
            </p>

            {/* Buttons */}
            <div
              className="reveal mt-9 flex flex-wrap items-center gap-4"
              style={delay(300)}
            >
              <Link
                href="/sports/discuss-your-sport"
                className="inline-flex items-center justify-center rounded-lg bg-[#fecf23] px-6 py-3.5 font-heading text-[14.5px] font-semibold text-[#1d1433] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f5c400] hover:shadow-lg shadow-black/10"
              >
                Discuss Your Sport
              </Link>

              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-[#20183d]/50 px-6 py-3.5 font-heading text-[14.5px] font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
              >
                See How It Works
              </Link>
            </div>

            {/* Disclaimer / Footnote */}
            <p
              className="reveal mt-8 max-w-[560px] text-[12.5px] leading-relaxed text-white/55"
              style={delay(400)}
            >
              This page explains an approach and a review process — it is not an inventory of currently supported sports.
            </p>
          </div>

          {/* Right Column Image */}
          <div className="reveal flex justify-center lg:justify-end" style={delay(250)}>
            <div className="relative w-full max-w-[530px] overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-2xl shadow-indigo-950/60 transition-transform duration-300">
              <Image
                src="/images/OPERATING-MODELS/om1.png"
                alt="Rugby players competing on pitch"
                width={665}
                height={557}
                priority
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 530px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
