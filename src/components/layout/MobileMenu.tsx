"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { headerCtas, megaMenus } from "@/data/navigation";
import { Badge } from "@/components/ui/Badge";
import { SmartLink } from "@/components/ui/SmartLink";
import { ArrowRight, ChevronDown } from "@/components/ui/icons";

const EASE = [0.16, 1, 0.3, 1] as const;

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          className="absolute inset-x-0 top-full flex h-[calc(100dvh-76px)] flex-col border-t border-white/10 bg-navy-900 nav:hidden"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)", transition: { duration: 0.35, ease: [0.7, 0, 0.84, 0] } }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 pb-6 sm:px-8">
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.04, delayChildren: 0.12 } } }}
            >
              {megaMenus.map((menu) => {
                const isOpen = expanded === menu.id;
                return (
                  <motion.li
                    key={menu.id}
                    className="border-b border-white/10"
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
                    }}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setExpanded(isOpen ? null : menu.id)}
                      className="flex w-full items-center justify-between py-4 font-heading text-[17px] font-semibold text-white"
                    >
                      {menu.label}
                      <span
                        className={`grid h-8 w-8 place-items-center rounded-full transition-colors duration-300 ${
                          isOpen ? "bg-brand-yellow text-ink" : "bg-white/10 text-white"
                        }`}
                      >
                        <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-6 pb-6">
                            {menu.columns.map((col) => (
                              <div key={col.heading}>
                                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-yellow">
                                  {col.heading}
                                </p>
                                <ul>
                                  {col.links.map((link) => (
                                    <li key={link.label}>
                                      <SmartLink
                                        href={link.href}
                                        onClick={onClose}
                                        className="-mx-3 block rounded-lg px-3 py-2.5 transition-colors active:bg-white/5"
                                      >
                                        <span className="flex flex-wrap items-center gap-2 text-[15px] font-medium text-white">
                                          {link.label}
                                          {link.badge && <Badge kind={link.badge} tone="dark" />}
                                        </span>
                                        {link.description && (
                                          <span className="mt-0.5 block text-[13px] leading-snug text-white/55">
                                            {link.description}
                                          </span>
                                        )}
                                      </SmartLink>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                            <SmartLink
                              href={menu.feature.cta.href}
                              onClick={onClose}
                              className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-yellow"
                            >
                              {menu.feature.cta.label}
                              <ArrowRight className="h-3.5 w-3.5" />
                            </SmartLink>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </motion.ul>
          </nav>

          <motion.div
            className="grid grid-cols-2 gap-3 border-t border-white/10 bg-navy-950/60 px-5 py-4 sm:px-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4, ease: EASE }}
          >
            <Link
              href={headerCtas.signIn.href}
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-lg border border-white/50 py-3 font-heading text-[15px] font-semibold text-white"
            >
              {headerCtas.signIn.label}
            </Link>
            <Link
              href={headerCtas.primary.href}
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-yellow py-3 font-heading text-[15px] font-semibold text-ink"
            >
              {headerCtas.primary.label}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
