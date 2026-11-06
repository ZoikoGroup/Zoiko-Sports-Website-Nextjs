"use client";

import { useSyncExternalStore } from "react";

const FALLBACK_YEAR = 2026; // used for the prerendered HTML
const subscribe = () => () => {};

/** Prerenders a fixed year, then shows the live year on the client so it never goes stale. */
export function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => FALLBACK_YEAR,
  );
  return <>{year}</>;
}
