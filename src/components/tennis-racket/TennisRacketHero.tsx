import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export function TennisRacketHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#181236] text-white">
      {/* Background Gradient & Ambient Glows */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(115deg,#1b1139_0%,#1c164a_30%,#182e70_60%,#1f62cc_86%,#2674e0_100%)]" />
      <div className="absolute -left-24 -top-24 -z-10 h-[480px] w-[480px] rounded-full bg-[#5b38a6]/25 blur-[120px] pointer-events-none" />
      <div className="absolute right-0 top-1/4 -z-10 h-[520px] w-[520px] rounded-full bg-[#206fec]/30 blur-[130px] pointer-events-none" />

      {/* Main Container */}
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 xl:gap-16">
          {/* Left Column Content */}
          <div className="max-w-[640px]">
            {/* Eyebrow */}
            <p
              className="reveal text-[12px] font-bold uppercase tracking-[0.2em] text-[#fecf23]"
              style={delay(0)}
            >
              TENNIS &amp; RACKET SPORTS · OPERATING CONTEXT
            </p>

            {/* Headline */}
            <h1
              className="reveal mt-5 font-heading text-[clamp(2.35rem,4.4vw,3.35rem)] font-bold leading-[1.12] tracking-tight text-white"
              style={delay(100)}
            >
              Coordinate the organizations behind a racket-sport event.
            </h1>

            {/* Description */}
            <p
              className="reveal mt-6 max-w-[580px] text-[16px] sm:text-[16.5px] leading-[1.75] text-white/85"
              style={delay(200)}
            >
              Explore how match windows, court preparation, responsibilities and operational changes could be coordinated across the organizations delivering a tennis, badminton, squash, table tennis or pickleball event. Each discipline and format is distinct — none is presumed supported, and product fit and availability must be confirmed for the proposed event and market.
            </p>

            {/* Action Buttons */}
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
                href="/sports"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-[#211a45]/50 px-6 py-3.5 font-heading text-[14.5px] font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
              >
                Explore Sports Overview
              </Link>
            </div>

            {/* Disclaimer / Footnote */}
            <p
              className="reveal mt-8 max-w-[540px] text-[12.5px] leading-relaxed text-white/60"
              style={delay(400)}
            >
              No racket-sport-specific workflow is confirmed yet — this page explains an approach under review, not a live product claim.
            </p>
          </div>

          {/* Right Column Image */}
          <div className="reveal flex justify-center lg:justify-end" style={delay(250)}>
            <div className="relative w-full max-w-[540px] overflow-hidden rounded-2xl ring-1 ring-white/20 shadow-2xl shadow-indigo-950/60 transition-transform duration-300">
              <Image
                src="/images/Tennis-Racket-Sports/tr1.png"
                alt="Tennis player lunging on red clay court"
                width={736}
                height={920}
                priority
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 540px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
