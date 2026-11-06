"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const problems = [
  {
    image: "/images/home/problem-schedule-drift.png",
    alt: "Coach briefing players in training bibs",
    title: "Schedule drift",
    text: "A revised start time is approved, but a venue access plan or staffing schedule still reflects the previous time.",
  },
  {
    image: "/images/home/problem-open-work.png",
    alt: "Team discussing plans in an office",
    title: "Invisible open work",
    text: "Each organization sees its own checklist, while unresolved dependencies remain difficult to see across the event.",
  },
  {
    image: "/images/home/problem-decision.png",
    alt: "Coach reviewing a clipboard with basketball players",
    title: "Decision reconstruction",
    text: "After the event, teams spend time rebuilding who requested a change, who approved it, and what information the decision relied on.",
  },
];

export function TheProblem() {
  const collageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: collageRef, offset: ["start end", "end start"] });
  const backY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const frontY = useTransform(scrollYProgress, [0, 1], [70, -50]);

  return (
    <section className="bg-[#f4f2ec] py-20 lg:py-28">
      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] font-bold leading-[1.1] tracking-tight text-ink">
              One event. Several organizations. Different operating pictures.
            </h2>
            <p className="mt-5 max-w-[560px] text-[16px] leading-[1.7] text-ink-muted">
              Competition organizers manage schedules and sporting requirements. Venues manage buildings, access,
              staffing, and local operating procedures. Clubs, officials, contractors, and event teams each hold part
              of the delivery picture. When those updates live in separate systems and conversations, event-day
              decisions can be made from inconsistent information.
            </p>
          </Reveal>

          {/* Overlapping image collage with scroll parallax */}
          <div ref={collageRef} className="relative mx-auto aspect-[16/12] w-full max-w-[560px]">
            <motion.div
              style={{ y: backY }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: EASE }}
              className="absolute left-0 top-0 w-[74%]"
            >
              <Image
                src="/images/home/problem-arena.webp"
                alt="Arena seating bowl before an event"
                width={431}
                height={336}
                sizes="(min-width: 1024px) 420px, 74vw"
                className="h-auto w-full"
              />
            </motion.div>

            <motion.div
              style={{ y: frontY }}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: EASE, delay: 0.15 }}
              className="absolute bottom-[2%] right-0 z-10 w-[62%] drop-shadow-[0_24px_40px_rgba(29,20,51,0.25)]"
            >
              <Image
                src="/images/home/problem-tunnel.png"
                alt="Player waiting in the tunnel before kick-off"
                width={355}
                height={286}
                sizes="(min-width: 1024px) 350px, 62vw"
                className="h-auto w-full"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: "spring", stiffness: 220, damping: 20, delay: 0.45 }}
              className="absolute bottom-[10%] left-[2%] z-20 w-[44%] rounded-xl bg-white p-3.5 text-[12.5px] font-medium leading-snug text-ink shadow-[0_16px_40px_-12px_rgba(29,20,51,0.35)] sm:text-[13px]"
            >
              Venue, league, clubs and officials, each holding part of the plan.
            </motion.p>
          </div>
        </div>

        <RevealGroup className="mt-20 grid gap-6 md:grid-cols-3">
          {problems.map((p) => (
            <RevealItem key={p.title}>
              <article className="group h-full rounded-2xl border border-black/[0.07] bg-[#fbfaf7] p-4 transition-all duration-500 hover:-translate-y-1.5 hover:border-black/10 hover:bg-white hover:shadow-[0_24px_50px_-20px_rgba(29,20,51,0.25)]">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    width={330}
                    height={132}
                    sizes="(min-width: 768px) 360px, 100vw"
                    className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <div className="px-1 pb-4 pt-6">
                  <h3 className="text-[19px] font-bold text-ink">{p.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-[1.65] text-ink-muted">{p.text}</p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
