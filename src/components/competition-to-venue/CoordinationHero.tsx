import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { wrap } from "./shared";

/** Staggers the `.reveal` CSS animation, which starts once the preloader lifts. */
const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export function CoordinationHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1f1640] text-white">
      {/* Purple top-left fading to bright blue bottom-right */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(120deg,#2a1745_0%,#24194a_35%,#20306f_70%,#2a7ad6_100%)]" />
      <div className="absolute -left-40 -top-40 -z-10 h-[420px] w-[420px] rounded-full bg-[#5b3aa8]/30 blur-[100px]" />

      <div className={`${wrap} grid items-center gap-12 py-16 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:py-24`}>
        <div className="max-w-[640px]">
          <p className="reveal text-[12px] font-bold uppercase tracking-[0.2em] text-brand-yellow" style={delay(0)}>
            Solutions · Coordination
          </p>
          <h1
            className="reveal mt-5 text-[clamp(2.3rem,5vw,3.4rem)] font-bold leading-[1.1] tracking-tight"
            style={delay(100)}
          >
            Connect competition plans with venue operations.
          </h1>
          <p className="reveal mt-6 text-[17px] leading-[1.75] text-white/80" style={delay(220)}>
            Bring the organizer&apos;s fixture context, venue responsibilities, readiness questions and event-day changes
            into one agreed coordination workflow — while keeping decisions with authorized people.
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
              href="#coordination-workflow"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/70 px-6 py-3.5 font-heading text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink"
            >
              See the Workflow
              <ArrowRight className="h-4 w-0 rotate-90 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
            </a>
          </div>

          <p className="reveal mt-8 max-w-[520px] text-[12.5px] leading-relaxed text-white/55" style={delay(440)}>
            Sharing event context never transfers venue safety or competition decision authority. Authorized people in
            each organization keep responsibility.
          </p>
        </div>

        <div className="hero-image relative aspect-[536/323] w-full overflow-hidden rounded-2xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
          <Image
            src="/images/competition-to-venue/hero-javelin-thrower.webp"
            alt="Javelin thrower in an orange vest releasing a throw"
            fill
            priority
            sizes="(min-width: 1024px) 604px, 95vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
