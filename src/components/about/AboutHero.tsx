import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { wrap } from "./shared";

/** Staggers the `.reveal` CSS animation, which starts once the preloader lifts. */
const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1f1640] text-white">
      {/* Purple top-left fading to bright blue bottom-right */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(120deg,#2a1745_0%,#24194a_35%,#20306f_70%,#2a7ad6_100%)]" />
      <div className="absolute -left-40 -top-40 -z-10 h-[420px] w-[420px] rounded-full bg-[#5b3aa8]/30 blur-[100px]" />
      {/* Faint pitch-circle line art behind the photo */}
      <svg
        aria-hidden="true"
        className="absolute -right-40 top-1/2 -z-10 hidden h-[620px] w-[620px] -translate-y-1/2 text-white/15 lg:block"
        viewBox="0 0 620 620"
        fill="none"
      >
        <circle cx="310" cy="310" r="300" stroke="currentColor" />
        <line x1="0" y1="310" x2="620" y2="310" stroke="currentColor" />
      </svg>

      <div className={`${wrap} grid items-center gap-12 py-16 lg:grid-cols-[1fr_minmax(0,420px)] lg:gap-16 lg:py-24`}>
        <div className="max-w-[820px]">
          <p className="reveal text-[12px] font-bold uppercase tracking-[0.2em] text-brand-yellow" style={delay(0)}>
            About Zoiko Sports
          </p>
          <h1
            className="reveal mt-5 text-[clamp(2.3rem,5vw,3.6rem)] font-bold leading-[1.1] tracking-tight"
            style={delay(100)}
          >
            Building the operating and intelligence layer for connected sport.
          </h1>
          <p className="reveal mt-6 max-w-[660px] text-[17px] leading-[1.8] text-white/80" style={delay(220)}>
            Zoiko Sports is a global sports technology platform being built to help competitions, venues, clubs and
            the organizations around them coordinate operations, connect trusted information and make
            better-informed decisions across the event lifecycle.
          </p>

          <div className="reveal mt-9 flex flex-wrap gap-4" style={delay(340)}>
            <Link
              href="/pilot"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-brand-yellow px-6 py-3.5 font-heading text-[15px] font-semibold text-ink shadow-[0_14px_36px_-12px_rgba(254,207,35,0.9)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/50 transition-all duration-700 group-hover:left-[120%]" />
              <span className="relative">Scope a Pilot</span>
            </Link>
            <Link
              href="/platform"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/70 px-6 py-3.5 font-heading text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink"
            >
              Explore the Platform
              <ArrowRight className="h-4 w-0 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
            </Link>
          </div>

          <p className="reveal mt-8 text-[12.5px] text-white/60" style={delay(440)}>
            Zoiko Tech Inc. · A Zoiko Group company
          </p>
        </div>

        <div className="hero-image relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-2xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] lg:mx-0">
          <Image
            src="/images/about/hero-tennis-serve.webp"
            alt="Tennis player leaping into a serve under a bright blue sky"
            fill
            priority
            sizes="(min-width: 1024px) 420px, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
