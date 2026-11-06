"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { headerCtas, megaMenus } from "@/data/navigation";
import { Logo } from "@/components/ui/Logo";
import { ArrowRight, ChevronDown, MenuIcon } from "@/components/ui/icons";
import { MegaMenuPanel } from "./MegaMenuPanel";
import { MobileMenu } from "./MobileMenu";
import { RouteChangeListener } from "./RouteChangeListener";

/** Shared by the header row and the mega-menu panel so their edges line up. */
const HEADER_CONTAINER = "mx-auto max-w-[1320px] px-5 sm:px-8";

const OPEN_DELAY = 90;
const CLOSE_DELAY = 160;

export function Header() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [direction, setDirection] = useState(1);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const clearTimer = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
  };

  const open = (id: string) => {
    clearTimer();
    if (openId && openId !== id) {
      const from = megaMenus.findIndex((m) => m.id === openId);
      const to = megaMenus.findIndex((m) => m.id === id);
      setDirection(to > from ? 1 : -1);
    }
    setOpenId(id);
  };

  const close = useCallback(() => {
    clearTimer();
    setOpenId(null);
  }, []);

  const scheduleOpen = (id: string) => {
    clearTimer();
    // Switch instantly when a menu is already open; small intent delay otherwise.
    if (openId) open(id);
    else timer.current = setTimeout(() => open(id), OPEN_DELAY);
  };

  const scheduleClose = () => {
    clearTimer();
    timer.current = setTimeout(() => setOpenId(null), CLOSE_DELAY);
  };

  const closeAll = useCallback(() => {
    close();
    setMobileOpen(false);
  }, [close]);

  // Header elevation on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes and returns focus to the trigger
  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        triggerRefs.current[openId]?.focus();
        close();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openId, close]);

  useEffect(() => () => clearTimer(), []);

  const activeMenu = megaMenus.find((m) => m.id === openId);

  return (
    <>
      <Suspense fallback={null}>
        <RouteChangeListener onChange={closeAll} />
      </Suspense>
      <header
        className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
          scrolled || openId || mobileOpen
            ? "bg-navy-900/95 shadow-[0_10px_30px_-12px_rgba(10,4,25,0.6)] backdrop-blur-md"
            : "bg-navy-900"
        }`}
      >
        <div className={`${HEADER_CONTAINER} flex h-[76px] items-center justify-between gap-4 xl:gap-6`}>
          <Logo priority className="h-[34px] w-auto sm:h-[38px]" />

          {/* Desktop navigation */}
          <nav aria-label="Main" className="hidden nav:block">
            <ul className="flex items-center gap-0.5" onMouseLeave={scheduleClose}>
              {megaMenus.map((menu) => {
                const isOpen = openId === menu.id;
                return (
                  <li key={menu.id} className="relative">
                    <button
                      ref={(el) => {
                        triggerRefs.current[menu.id] = el;
                      }}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls="mega-panel"
                      onPointerEnter={(e) => e.pointerType === "mouse" && scheduleOpen(menu.id)}
                      onClick={() => (isOpen ? close() : open(menu.id))}
                      className={`relative flex items-center gap-1 whitespace-nowrap rounded-lg px-1.5 py-2 font-heading text-[14px] font-medium transition-colors duration-200 xl:px-2.5 xl:text-[14.5px] ${
                        isOpen ? "text-white" : "text-white/85 hover:text-white"
                      }`}
                    >
                      {menu.label}
                      <ChevronDown
                        className={`h-3 w-3 opacity-70 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                      {isOpen && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute inset-x-1.5 -bottom-[20px] xl:inset-x-2.5 h-[3px] rounded-full bg-brand-yellow"
                          transition={{ type: "spring", stiffness: 500, damping: 38 }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={headerCtas.signIn.href}
              className="hidden whitespace-nowrap rounded-lg border border-white/50 px-4 py-2.5 font-heading text-[14px] font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-navy-900 sm:inline-flex xl:px-5"
            >
              {headerCtas.signIn.label}
            </Link>
            <Link
              href={headerCtas.primary.href}
              className="group hidden items-center gap-2 whitespace-nowrap rounded-lg bg-brand-yellow px-4 py-2.5 font-heading text-[14px] font-semibold text-ink shadow-[0_6px_20px_-8px_rgba(254,207,35,0.7)] transition-all duration-300 hover:-translate-y-px hover:bg-brand-yellow-hover sm:inline-flex xl:px-6"
            >
              {headerCtas.primary.label}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-lg text-white transition-colors hover:bg-white/10 nav:hidden"
            >
              <MenuIcon open={mobileOpen} className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Desktop mega menu */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              key="mega"
              id="mega-panel"
              // The full-width wrapper ignores the pointer; only the visible panel
              // counts as "inside", so leaving it in any direction closes the menu.
              className="pointer-events-none absolute inset-x-0 top-full hidden pt-3 nav:block"
              initial={{ opacity: 0, y: -10, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.985, transition: { duration: 0.18, ease: "easeIn" } }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "top center" }}
            >
              {/* Same container as the header row, so the panel spans logo → CTA exactly */}
              <div className={HEADER_CONTAINER}>
                <div
                  onMouseEnter={clearTimer}
                  onMouseLeave={scheduleClose}
                  className="pointer-events-auto relative w-full rounded-[22px] bg-cream shadow-[0_30px_80px_-20px_rgba(10,4,25,0.55),0_0_0_1px_rgba(0,0,0,0.04)]"
                >
                  {/* Invisible hover bridge across the gap between the header and the panel */}
                  <div aria-hidden="true" className="absolute inset-x-0 -top-3 h-3" />
                  <MegaMenuPanel menu={activeMenu} direction={direction} onNavigate={close} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      </header>

      {/* Page scrim behind the open mega menu */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            key="scrim"
            aria-hidden="true"
            onClick={close}
            className="fixed inset-0 z-40 hidden bg-[#0d0719]/45 backdrop-blur-[2px] nav:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
