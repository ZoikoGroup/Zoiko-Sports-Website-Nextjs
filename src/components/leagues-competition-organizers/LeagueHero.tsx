import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { PrimaryButton, wrap } from "./shared";

/** Staggers the `.reveal` CSS animation, which starts once the preloader lifts. */
const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export function LeagueHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1f1640] text-white">
      {/* Purple top-left fading to bright blue bottom-right */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(120deg,#2a1745_0%,#24194a_35%,#20306f_70%,#2a7ad6_100%)]" />
      <div className="absolute -left-40 -top-40 -z-10 h-[420px] w-[420px] rounded-full bg-[#5b3aa8]/30 blur-[100px]" />

      <div className={`${wrap} grid items-center gap-12 py-16 lg:grid-cols-[1fr_560px] lg:gap-14 lg:py-24`}>
        <div className="max-w-[640px]">
          <p className="reveal text-[12px] font-bold uppercase tracking-[0.2em] text-brand-yellow" style={delay(0)}>
            Leagues &amp; Competition Organizers
          </p>
          <h1
            className="reveal mt-5 text-[clamp(2.3rem,5vw,3.4rem)] font-bold leading-[1.1] tracking-tight"
            style={delay(100)}
          >
            Coordinate the competition. Keep responsibilities clear.
          </h1>
          <p className="reveal mt-6 max-w-[560px] text-[17px] leading-[1.75] text-white/80" style={delay(220)}>
            Zoiko Sports is being built as a connected operating workflow for competition schedules, venue readiness,
            operational exceptions and authorized decisions — designed to help leagues and event organizers coordinate
            with participating venues and clubs without blurring who owns each action.
          </p>

          <div className="reveal mt-9 flex flex-wrap gap-4" style={delay(340)}>
            <PrimaryButton href="/pilot">Scope a Pilot</PrimaryButton>
            <a
              href="#organizer-workflow"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/70 px-6 py-3.5 font-heading text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink"
            >
              See the Organizer Workflow
              <ArrowRight className="h-4 w-0 rotate-90 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
            </a>
          </div>

          <p className="reveal mt-8 max-w-[500px] text-[12.5px] leading-relaxed text-white/55" style={delay(440)}>
            Organizers and venues retain their own schedule, safety and operational decision authority. A venue-reported
            issue is not an organizer approval.
          </p>
        </div>

        <div className="hero-image relative aspect-[560/419] w-full overflow-hidden rounded-2xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
          <Image
            src="/images/leagues-competition-organizers/hero-table-tennis-forehand.webp"
            alt="Table tennis player in blue twisting into a forehand as the ball approaches"
            fill
            priority
            sizes="(min-width: 1024px) 560px, 95vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
