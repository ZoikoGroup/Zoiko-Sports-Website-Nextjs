import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { PrimaryButton, wrap } from "./shared";

/** Staggers the `.reveal` CSS animation, which starts once the preloader lifts. */
const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export function FootballHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1f1640] text-white">
      {/* Purple top-left fading to bright blue bottom-right */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(120deg,#2a1745_0%,#24194a_35%,#20306f_70%,#2a7ad6_100%)]" />
      <div className="absolute -left-40 -top-40 -z-10 h-[420px] w-[420px] rounded-full bg-[#5b3aa8]/30 blur-[100px]" />

      <div className={`${wrap} grid items-center gap-12 py-16 lg:grid-cols-[1fr_536px] lg:gap-14 lg:py-24`}>
        <div className="max-w-[640px]">
          <p className="reveal text-[12px] font-bold uppercase tracking-[0.2em] text-brand-yellow" style={delay(0)}>
            Football / Soccer · Operating Context
          </p>
          <h1
            className="reveal mt-5 text-[clamp(2.3rem,5vw,3.4rem)] font-bold leading-[1.1] tracking-tight"
            style={delay(100)}
          >
            Coordinate the organizations behind a football or soccer event.
          </h1>
          <p className="reveal mt-6 max-w-[580px] text-[17px] leading-[1.75] text-white/80" style={delay(220)}>
            Explore how competition schedules, venue preparation, responsibilities and event-day changes could be
            coordinated across the organizations delivering a fixture. Product fit and availability must be confirmed
            for the proposed event and market.
          </p>

          <div className="reveal mt-9 flex flex-wrap gap-4" style={delay(340)}>
            <PrimaryButton href="/sports/discuss-your-sport">Discuss Your Sport</PrimaryButton>
            <Link
              href="/sports"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/70 px-6 py-3.5 font-heading text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink"
            >
              Explore Sports Overview
              <ArrowRight className="h-4 w-0 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
            </Link>
          </div>

          <p className="reveal mt-8 max-w-[520px] text-[12.5px] leading-relaxed text-white/55" style={delay(440)}>
            No football/soccer-specific workflow is confirmed yet — this page explains an approach under review, not a
            live product claim.
          </p>
        </div>

        <div className="hero-image relative aspect-[536/335] w-full overflow-hidden rounded-2xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
          <Image
            src="/images/football/hero-football-sprint.webp"
            alt="Footballer in a black-and-white striped kit sprinting during a match"
            fill
            priority
            sizes="(min-width: 1024px) 536px, 95vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
