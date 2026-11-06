"use client";

import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";
import type { MegaMenu } from "@/data/navigation";
import { Badge } from "@/components/ui/Badge";
import { SmartLink } from "@/components/ui/SmartLink";
import { ArrowRight, ExternalArrow } from "@/components/ui/icons";

const EASE = [0.16, 1, 0.3, 1] as const;

const content: Variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 28 }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: EASE, staggerChildren: 0.045, delayChildren: 0.03 },
  },
  exit: (dir: number) => ({ opacity: 0, x: dir * -28, transition: { duration: 0.14, ease: "easeIn" } }),
};

const column: Variants = {
  enter: { opacity: 0, y: 10 },
  center: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE, staggerChildren: 0.035 } },
  exit: { opacity: 0 },
};

const item: Variants = {
  enter: { opacity: 0, y: 6 },
  center: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
  exit: { opacity: 0 },
};

type Props = {
  menu: MegaMenu;
  direction: number;
  onNavigate: () => void;
};

export function MegaMenuPanel({ menu, direction, onNavigate }: Props) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | "auto">("auto");

  // Smoothly animate the panel height when switching between menus.
  useLayoutEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setHeight(entry.contentRect.height));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <motion.div
      animate={{ height }}
      transition={{ duration: 0.38, ease: EASE }}
      className="overflow-hidden"
    >
      <div ref={innerRef}>
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={menu.id}
            custom={direction}
            variants={content}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid grid-cols-[1fr_1fr_1fr_18rem] gap-x-8 p-9 xl:gap-x-10 xl:p-10"
          >
            {menu.columns.map((col) => (
              <motion.div key={col.heading} variants={column}>
                <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.16em] text-ink">
                  {col.heading}
                </p>
                <ul className="space-y-1.5">
                  {col.links.map((link) => {
                    const external = link.badge === "EXTERNAL";
                    return (
                      <motion.li key={link.label} variants={item}>
                        <SmartLink
                          href={link.href}
                          onClick={onNavigate}
                          className="group relative -mx-3 block rounded-xl py-2.5 pl-3 pr-7 transition-colors duration-200 hover:bg-[#f1efe8] focus-visible:bg-[#f1efe8]"
                        >
                          <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <span className="font-heading text-[15px] font-semibold leading-snug text-ink transition-colors group-hover:text-brand-blue">
                              {link.label}
                            </span>
                            {link.badge && <Badge kind={link.badge} />}
                          </span>
                          {external ? (
                            <ExternalArrow className="absolute right-2.5 top-3.5 h-3.5 w-3.5 text-ink-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          ) : (
                            <ArrowRight className="absolute right-2.5 top-3.5 h-3.5 w-3.5 -translate-x-1.5 text-brand-blue opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                          )}
                          {link.description && (
                            <span className="mt-1 block text-[13px] leading-[1.45] text-ink-muted">
                              {link.description}
                            </span>
                          )}
                        </SmartLink>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}

            <motion.aside
              variants={{
                enter: { opacity: 0, y: 14, scale: 0.98 },
                center: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE, delay: 0.08 } },
                exit: { opacity: 0 },
              }}
              className="flex flex-col self-start rounded-2xl border border-black/[0.08] bg-white p-4 shadow-[0_1px_0_rgba(0,0,0,0.02)]"
            >
              {/* Images are exported with rounded corners, so show them at their natural shape */}
              <div className="overflow-hidden rounded-[10px]">
                <Image
                  src={menu.feature.image.src}
                  alt={menu.feature.imageAlt}
                  width={menu.feature.image.width}
                  height={menu.feature.image.height}
                  sizes="256px"
                  className="h-auto w-full transition-transform duration-[1.2s] ease-out hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-[18px] font-bold leading-tight text-ink">{menu.feature.title}</h3>
              <p className="mt-2 text-[13px] leading-[1.5] text-ink-muted">{menu.feature.text}</p>
              <SmartLink
                href={menu.feature.cta.href}
                onClick={onNavigate}
                className="group mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-yellow px-4 py-3 font-heading text-[14px] font-semibold text-ink transition-all duration-300 hover:bg-brand-yellow-hover hover:shadow-[0_8px_24px_-8px_rgba(254,207,35,0.8)]"
              >
                {menu.feature.cta.label}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </SmartLink>
            </motion.aside>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
