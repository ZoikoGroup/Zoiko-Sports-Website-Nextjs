"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Calls `onChange` whenever the pathname changes (incl. back/forward).
 * Render inside <Suspense> so the shell stays prerenderable.
 */
export function RouteChangeListener({ onChange }: { onChange: () => void }) {
  const pathname = usePathname();
  const previous = useRef(pathname);

  useEffect(() => {
    if (previous.current !== pathname) {
      previous.current = pathname;
      onChange();
    }
  }, [pathname, onChange]);

  return null;
}
