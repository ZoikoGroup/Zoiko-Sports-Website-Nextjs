"use client";

import { useSyncExternalStore } from "react";

const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-loaded"] });
  return () => observer.disconnect();
};

/**
 * True once the intro preloader has lifted (it sets `data-loaded` on <html>).
 * Use it to hold entrance animations so they don't play hidden behind the loader.
 */
export function usePageReady() {
  return useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.loaded === "true",
    () => false,
  );
}
