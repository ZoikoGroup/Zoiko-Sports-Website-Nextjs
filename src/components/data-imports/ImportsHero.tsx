import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { GhostButton, PrimaryButton, wrap } from "./shared";

/** Staggers the `.reveal` CSS animation, which starts once the preloader lifts. */
const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export function ImportsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1f1640] text-white">
      {/* Purple top-left fading to bright blue bottom-right */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(120deg,#2a1745_0%,#24194a_35%,#20306f_70%,#2a7ad6_100%)]" />
      <div className="absolute -left-40 -top-40 -z-10 h-[420px] w-[420px] rounded-full bg-[#5b3aa8]/30 blur-[100px]" />

      <div className={`${wrap} grid items-center gap-12 py-16 lg:grid-cols-[1fr_586px] lg:gap-14 lg:py-24`}>
        <div className="max-w-[620px]">
          <nav aria-label="Breadcrumb" className="reveal text-[12.5px]" style={delay(0)}>
            <ol className="flex items-center gap-2.5">
              <li>
                <Link href="/integrations" className="text-white/60 transition-colors hover:text-white">
                  Integrations
                </Link>
              </li>
              <li aria-hidden className="text-white/40">
                /
              </li>
              <li aria-current="page" className="font-semibold text-white">
                Data Imports
              </li>
            </ol>
          </nav>

          <p
            className="reveal mt-9 text-[12px] font-bold uppercase tracking-[0.2em] text-brand-yellow"
            style={delay(60)}
          >
            Data Imports · Scoped Assessment
          </p>
          <h1
            className="reveal mt-5 text-[clamp(2.4rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-tight"
            style={delay(120)}
          >
            Bring existing records into the conversation.
          </h1>
          <p className="reveal mt-6 max-w-[590px] text-[17px] leading-[1.75] text-white/80" style={delay(220)}>
            Data imports may be considered as part of a defined pilot scope, subject to record ownership, rights, file
            and field validation, security requirements, and implementation evidence.
          </p>

          <div className="reveal mt-9 flex flex-wrap gap-4" style={delay(340)}>
            <PrimaryButton href="/pilot?topic=integrations">Discuss your data requirements</PrimaryButton>
            <GhostButton href="#scope-outcomes">Understand the scope</GhostButton>
          </div>

          <p className="reveal mt-6 max-w-[530px] text-[12.5px] leading-relaxed text-white/55" style={delay(440)}>
            No specific file format, connector, automatic sync, or self-service import is represented as supported by
            this page.
          </p>
        </div>

        <div className="hero-image relative aspect-[586/471] w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
          <Image
            src="/images/data-imports/hero-arena-records-review.webp"
            alt="Two event operations professionals reviewing records on a tablet inside an empty arena"
            fill
            priority
            sizes="(min-width: 1024px) 586px, 95vw"
            className="object-cover"
          />

          {/* Overlay card from the design */}
          <div className="absolute inset-x-4 bottom-4 rounded-xl bg-[#f3f2ef]/95 px-5 py-4 text-ink shadow-[0_12px_30px_-12px_rgba(0,0,0,0.5)] backdrop-blur-sm sm:inset-x-6 sm:bottom-6">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/50">Assessment first</p>
              <span className="rounded-full bg-[#e9e1fb] px-2 py-1 text-[9.5px] font-bold uppercase tracking-[0.1em] text-[#6a4fb0]">
                Illustrative
              </span>
            </div>
            <p className="mt-1.5 font-heading text-[16px] font-semibold">Source record review</p>
            <div className="mt-4 flex gap-1.5" aria-hidden>
              <span className="h-[5px] flex-[2.35] rounded-full bg-[#dcd8e6]" />
              <span className="h-[5px] flex-[1.5] rounded-full bg-[#dcd8e6]" />
              <span className="h-[5px] flex-1 rounded-full bg-[#dcd8e6]" />
            </div>
            <dl className="mt-3.5 grid grid-cols-2 gap-4 text-[11px]">
              <div className="flex gap-2">
                <dt className="uppercase tracking-[0.08em] text-ink/45">Owner</dt>
                <dd className="font-semibold">Confirmed in scope</dd>
              </div>
              <div className="flex gap-2">
                <dt className="uppercase tracking-[0.08em] text-ink/45">Purpose</dt>
                <dd className="font-semibold">Event operations</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
