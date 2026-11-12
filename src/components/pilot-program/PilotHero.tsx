import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { wrap } from "./shared";

/** Staggers the `.reveal` CSS animation, which starts once the preloader lifts. */
const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export function PilotHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1f1640] text-white">
      {/* Purple top-left fading to bright blue bottom-right */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(120deg,#2a1745_0%,#24194a_35%,#20306f_70%,#2a7ad6_100%)]" />
      <div className="absolute -left-40 -top-40 -z-10 h-[420px] w-[420px] rounded-full bg-[#5b3aa8]/30 blur-[100px]" />

      <div className={`${wrap} grid items-center gap-12 py-16 lg:grid-cols-[1fr_537px] lg:gap-14 lg:py-24`}>
        <div className="max-w-[620px]">
          <p className="reveal text-[12px] font-bold uppercase tracking-[0.2em] text-brand-yellow" style={delay(0)}>
            Solutions · Review &amp; Scale
          </p>
          <h1
            className="reveal mt-5 text-[clamp(2.3rem,5vw,3.4rem)] font-bold leading-[1.1] tracking-tight"
            style={delay(100)}
          >
            Start with one event. Prove the workflow before expanding.
          </h1>
          <p className="reveal mt-6 text-[17px] leading-[1.75] text-white/80" style={delay(220)}>
            A scoped Zoiko Sports pilot starts with the organizations delivering the event. We define the coordination
            challenge, the people and records involved, the workflow and measures before anyone operates it.
          </p>

          <div className="reveal mt-9 flex flex-wrap gap-4" style={delay(340)}>
            <Link
              href="/pilot"
              className="group relative inline-flex items-center overflow-hidden rounded-lg bg-brand-yellow px-6 py-3.5 font-heading text-[15px] font-semibold text-ink shadow-[0_14px_36px_-12px_rgba(254,207,35,0.9)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/50 transition-all duration-700 group-hover:left-[120%]" />
              <span className="relative">Scope a Pilot</span>
            </Link>
            <a
              href="#five-stages"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/70 px-6 py-3.5 font-heading text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink"
            >
              See the Five Stages
              <ArrowRight className="h-4 w-0 rotate-90 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
            </a>
          </div>

          <p className="reveal mt-8 max-w-[520px] text-[12.5px] leading-relaxed text-white/55" style={delay(440)}>
            Scope is agreed in writing. Operational decisions remain with authorized people and organizations.
          </p>
        </div>

        <div className="hero-image relative aspect-[537/349] w-full overflow-hidden rounded-2xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
          <Image
            src="/images/pilot-program/hero-hurdler.webp"
            alt="Hurdler in red clearing a hurdle"
            fill
            priority
            sizes="(min-width: 1024px) 537px, 95vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
