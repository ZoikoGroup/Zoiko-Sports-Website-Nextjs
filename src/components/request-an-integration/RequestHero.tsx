import Image from "next/image";
import type { CSSProperties } from "react";
import { GhostButton, PrimaryButton, wrap } from "./shared";

/** Staggers the `.reveal` CSS animation, which starts once the preloader lifts. */
const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export function RequestHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1f1640] text-white">
      {/* Deep purple top-left fading to bright blue bottom-right */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(120deg,#2a1745_0%,#24194a_38%,#20306f_72%,#2a7ad6_100%)]" />
      <div className="absolute -left-40 -top-40 -z-10 h-[420px] w-[420px] rounded-full bg-[#5b3aa8]/30 blur-[100px]" />

      <div className={`${wrap} grid items-center gap-12 py-16 lg:grid-cols-[1fr_536px] lg:gap-14 lg:py-24`}>
        <div className="max-w-[620px]">
          <p className="reveal text-[12px] font-bold uppercase tracking-[0.2em] text-brand-yellow" style={delay(0)}>
            Integrations · Request an Integration
          </p>
          <h1
            className="reveal mt-5 text-[clamp(2.3rem,4.6vw,3.15rem)] font-bold leading-[1.15] tracking-tight"
            style={delay(100)}
          >
            Discuss how your existing systems fit a scoped pilot.
          </h1>
          <p className="reveal mt-6 max-w-[510px] text-[17px] leading-[1.7] text-white/80" style={delay(200)}>
            Share the systems, data rights, workflow and decision owners involved. No specific connector or delivery
            is implied.
          </p>

          <div className="reveal mt-9 flex flex-wrap gap-4" style={delay(320)}>
            <PrimaryButton href="/pilot?topic=integrations">Discuss Integrations</PrimaryButton>
            <GhostButton href="#how-scoping-works">How integration scoping works</GhostButton>
          </div>

          <p className="reveal mt-8 text-[12.5px] leading-relaxed text-white/55" style={delay(420)}>
            Requesting a conversation does not confirm compatibility, timing, cost or delivery.
          </p>
        </div>

        <div className="hero-image relative aspect-[536/389] w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
          <Image
            src="/images/request-an-integration/hero-rugby-kick.webp"
            alt="A rugby player striking a ball off a kicking tee on a stadium pitch"
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
