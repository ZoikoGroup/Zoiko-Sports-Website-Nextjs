import Image from "next/image";
import type { CSSProperties } from "react";
import { GhostButton, PrimaryButton, wrap } from "./shared";

/** Staggers the `.reveal` CSS animation, which starts once the preloader lifts. */
const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export function IntegrationHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1f1640] text-white">
      {/* Purple top-left fading to bright blue bottom-right */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(120deg,#2a1745_0%,#24194a_35%,#20306f_70%,#2a7ad6_100%)]" />
      <div className="absolute -left-40 -top-40 -z-10 h-[420px] w-[420px] rounded-full bg-[#5b3aa8]/30 blur-[100px]" />

      <div className={`${wrap} grid items-center gap-12 py-16 lg:grid-cols-[1fr_585px] lg:gap-14 lg:py-24`}>
        <div className="max-w-[600px]">
          <p className="reveal text-[12px] font-bold uppercase tracking-[0.2em] text-brand-yellow" style={delay(0)}>
            Integrations · Systems Assessment
          </p>
          <h1
            className="reveal mt-5 text-[clamp(2.4rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-tight"
            style={delay(100)}
          >
            Understand the systems behind each event.
          </h1>
          <p className="reveal mt-6 max-w-[590px] text-[17px] leading-[1.75] text-white/80" style={delay(220)}>
            Zoiko Sports approaches imports, data connections, and permissions through a scoped review of the event, its
            participating organizations, and existing systems.
          </p>

          <div className="reveal mt-9 flex flex-wrap gap-4" style={delay(340)}>
            <PrimaryButton href="/pilot?topic=integrations">Discuss Integrations</PrimaryButton>
            <GhostButton href="#systems-assessment">How assessment works</GhostButton>
          </div>

          <p className="reveal mt-6 max-w-[530px] text-[12.5px] leading-relaxed text-white/55" style={delay(440)}>
            The agreed pilot scope says what is included and what is not. No connector is promised by this page.
          </p>
        </div>

        <div className="hero-image relative aspect-[585/464] w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
          <Image
            src="/images/integration-overview/hero-coordinator-stadium-tablet.webp"
            alt="Event operations coordinator holding a tablet while reviewing a floodlit stadium setup at dusk"
            fill
            priority
            sizes="(min-width: 1024px) 585px, 95vw"
            className="object-cover"
          />

          {/* Overlay card from the design */}
          <div className="absolute inset-x-4 bottom-4 rounded-xl bg-[#f3f2ef]/95 px-5 py-4 text-ink shadow-[0_12px_30px_-12px_rgba(0,0,0,0.5)] backdrop-blur-sm sm:inset-x-6 sm:bottom-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/50">Start with the event</p>
            <p className="mt-1.5 font-heading text-[16px] font-semibold">Systems, rights, and responsibilities</p>
            <div className="mt-4 flex gap-[clamp(3rem,15%,6.5rem)]" aria-hidden>
              {[0, 1, 2, 3].map((d) => (
                <span key={d} className="h-2.5 w-2.5 rounded-full border border-ink bg-brand-yellow" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
