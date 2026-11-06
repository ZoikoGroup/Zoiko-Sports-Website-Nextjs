"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { CSSProperties, MouseEvent } from "react";
import { ArrowRight, CalendarCheck, ChartColumnIncreasing, Play, Users } from "lucide-react";
import { StadiumIcon } from "@/components/ui/sportIcons";

const features = [
  { icon: CalendarCheck, title: "Manage", text: "Schedules" },
  { icon: StadiumIcon, title: "Coordinate", text: "Venues" },
  { icon: Users, title: "Align", text: "Organizations" },
  { icon: ChartColumnIncreasing, title: "Capture", text: "Decisions" },
];

/** Staggers the `.reveal` CSS animation, which starts once the preloader lifts. */
const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export function Hero() {
  // Subtle mouse parallax on the background banner
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 80, damping: 20 });
  const y = useSpring(useTransform(my, [-0.5, 0.5], [-8, 8]), { stiffness: 80, damping: 20 });

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative isolate overflow-hidden bg-[#150a2e] text-white"
    >
      {/* Full-bleed banner (desktop). Slightly oversized so the parallax never shows an edge. */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden xl:block">
        <motion.div style={{ x, y }} className="absolute -inset-4">
          <Image
            src="/images/home/hero-banner.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-image object-cover object-[right_center]"
          />
        </motion.div>
        {/* Darken the left side so the copy stays readable over the stadium */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#120827]/90 via-[#120827]/45 via-40% to-transparent to-60%" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#120827]/70 to-transparent" />
      </div>

      {/* Same container as the header, so the copy lines up with the logo */}
      <div className="relative mx-auto flex max-w-[1320px] items-center px-5 py-14 sm:px-8 xl:min-h-[min(50vw,860px)] xl:py-10">
        <div className="max-w-[620px]">
          <p
            className="reveal inline-flex rounded-full border border-white/40 bg-white/5 px-3 py-1.5 text-[9.5px] font-semibold uppercase tracking-[0.1em] sm:px-4 sm:text-[11px] sm:tracking-[0.16em] text-white/90 backdrop-blur"
            style={delay(0)}
          >
            The Operating &amp; Intelligence Layer for Sport
          </p>

          <h1
            className="reveal mt-5 max-w-[580px] text-[clamp(2.3rem,5vw,3.3rem)] font-bold leading-[1.08] tracking-tight xl:mt-4"
            style={delay(100)}
          >
            Connect the organizations behind every <span className="text-brand-yellow">sporting moment</span>
          </h1>

          <span
            className="reveal mt-5 block h-1 w-14 xl:mt-4 origin-left rounded-full bg-brand-yellow"
            style={delay(180)}
            aria-hidden="true"
          />

          <p className="reveal mt-5 max-w-[540px] text-[16.5px] leading-relaxed text-white/80 xl:mt-4" style={delay(240)}>
            Zoiko Sports connects competitions, venues, clubs and event teams around the schedules, readiness,
            decisions and operational intelligence that keep sport moving.
          </p>

          <p
            className="reveal mt-5 max-w-[520px] border-l-[3px] border-brand-yellow pl-4 text-[15.5px] font-semibold leading-snug text-white"
            style={delay(320)}
          >
            Built for leagues, federations, clubs, venues and sports operators worldwide.
          </p>

          <div className="reveal mt-8 flex flex-wrap gap-4 xl:mt-7" style={delay(420)}>
            <Link
              href="/platform"
              className="group inline-flex items-center gap-2.5 rounded-lg bg-brand-yellow px-7 py-3.5 font-heading text-[16px] font-semibold text-ink shadow-[0_12px_32px_-10px_rgba(254,207,35,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-yellow-hover"
            >
              <Play className="h-3.5 w-3.5 fill-current transition-transform duration-300 group-hover:scale-125" />
              Explore Zoiko Sports
            </Link>
            <a
              href="#pilot-request"
              className="group inline-flex items-center gap-2.5 rounded-lg border border-white/70 bg-white/5 px-7 py-3.5 font-heading text-[16px] font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/15"
            >
              Scope a Pilot
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <ul className="mt-9 grid max-w-[480px] grid-cols-4 xl:mt-7">
            {features.map(({ icon: Icon, title, text }, i) => (
              <li
                key={text}
                className={`reveal group flex flex-col items-center px-1 text-center sm:px-2 ${i > 0 ? "border-l border-white/20" : ""}`}
                style={delay(520 + i * 80)}
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-brand-yellow group-hover:text-ink group-hover:shadow-[0_8px_24px_-6px_rgba(254,207,35,0.7)]">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <p className="mt-2 text-[11.5px] leading-tight text-white/90 sm:text-[13.5px]">
                  {title}
                  <br />
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Banner below the copy on smaller screens */}
      <div className="relative aspect-[1440/723] w-full overflow-hidden xl:hidden">
        <Image
          src="/images/home/hero-banner.webp"
          alt="Zoiko Sports event operations dashboard on laptop and phone, in front of athletes from many sports"
          fill
          sizes="100vw"
          className="hero-image object-cover"
        />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#150a2e] to-transparent" />
      </div>
    </section>
  );
}
