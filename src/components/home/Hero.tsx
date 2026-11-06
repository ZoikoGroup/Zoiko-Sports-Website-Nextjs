"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { CSSProperties, MouseEvent } from "react";
import { ArrowRight, CalendarDays, CircleAlert, CircleCheck, Layers, Play } from "lucide-react";

const features = [
  { icon: CalendarDays, title: "Schedule", text: "Events & venues" },
  { icon: CircleCheck, title: "Readiness", text: "Checks & approvals" },
  { icon: CircleAlert, title: "Exceptions", text: "Issues & impact" },
  { icon: Layers, title: "Decisions", text: "Requests & records" },
];

/** Staggers the `.reveal` CSS animation, which starts once the preloader lifts. */
const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export function Hero() {
  // Subtle mouse parallax on the product visual
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 80, damping: 20 });
  const y = useSpring(useTransform(my, [-0.5, 0.5], [-10, 10]), { stiffness: 80, damping: 20 });

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
      // Background matches the banner's own edge colours so the image blends in
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#1d0c38] via-[#230c44] to-[#2f1459] text-white"
    >
      {/* Product visual (desktop): anchored bottom-right at its natural shape so the
          athletes and laptop always sit to the right of the copy. Edges are masked to blend. */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 -z-10 hidden aspect-[1440/723] h-[90%] xl:block"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 18%), linear-gradient(to bottom, transparent, #000 12%, #000 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 18%), linear-gradient(to bottom, transparent, #000 12%, #000 94%, transparent)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      >
        <motion.div style={{ x, y }} className="absolute inset-0">
          <div className="hero-float absolute inset-0">
            <Image
              src="/images/home/hero.webp"
              alt=""
              fill
              priority
              sizes="(min-width: 1280px) 1400px, 100vw"
              className="hero-image object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Same container as the header, so the copy lines up with the logo */}
      <div className="relative mx-auto grid max-w-[1320px] items-center px-5 py-16 sm:px-8 xl:min-h-[720px] xl:py-20">
        <div className="max-w-[600px] xl:max-w-[520px]">
          <p
            className="reveal inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur"
            style={delay(0)}
          >
            Global Sports Operations Platform
          </p>

          <h1
            className="reveal mt-6 text-[clamp(2.5rem,5.4vw,3.6rem)] font-bold leading-[1.06] tracking-tight xl:text-[3.4rem]"
            style={delay(100)}
          >
            Coordinate the organizations behind <span className="text-brand-yellow">event day.</span>
          </h1>

          <p className="reveal mt-6 max-w-[540px] text-[17px] xl:max-w-[500px] xl:text-[16.5px] leading-relaxed text-white/75" style={delay(200)}>
            Unify leagues, clubs, venues and event teams on one secure platform to plan, prepare, coordinate and
            record decisions — with clear ownership and access.
          </p>

          <ul className="mt-9 grid grid-cols-2 gap-y-6 sm:grid-cols-4">
            {features.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                className={`reveal group pr-4 sm:pl-5 sm:first:pl-0 ${i > 0 ? "sm:border-l sm:border-white/15" : ""}`}
                style={delay(300 + i * 80)}
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-brand-yellow group-hover:text-ink group-hover:shadow-[0_8px_24px_-6px_rgba(254,207,35,0.7)]">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <p className="mt-3 font-heading text-[16px] font-semibold">{title}</p>
                <p className="mt-1 text-[13.5px] leading-snug text-white/65">{text}</p>
              </li>
            ))}
          </ul>

          <div className="reveal mt-10 flex flex-wrap gap-4" style={delay(650)}>
            <a
              href="#pilot-request"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-brand-yellow px-7 py-4 font-heading text-[16px] font-semibold text-ink shadow-[0_12px_32px_-10px_rgba(254,207,35,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-yellow-hover"
            >
              Scope a Pilot
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#workflow"
              className="group inline-flex items-center gap-3 rounded-xl border border-white/40 bg-white/5 px-6 py-4 font-heading text-[16px] font-semibold text-white backdrop-blur transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              <span className="relative grid h-7 w-7 place-items-center rounded-full border-2 border-white">
                <span className="absolute inset-0 animate-ping rounded-full border border-white/50 [animation-duration:2.2s]" />
                <Play className="h-3 w-3 translate-x-px fill-current" />
              </span>
              See the Workflow
            </a>
          </div>
        </div>
      </div>

      {/* Product visual: below the copy on smaller screens */}
      <div className="relative -mt-6 aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9] xl:hidden">
        <Image
          src="/images/home/hero.webp"
          alt="Zoiko Sports event operations dashboard on laptop and phone"
          fill
          sizes="100vw"
          className="hero-image object-cover object-[80%_center]"
        />
      </div>
    </section>
  );
}
