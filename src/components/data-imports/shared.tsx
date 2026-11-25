import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

/** Same container as the header and footer, so every section lines up with the logo. */
export const wrap = "mx-auto w-full max-w-[1320px] px-5 sm:px-8";

/** Vertical rhythm shared by the light content sections. */
export const sectionPad = "py-14 lg:py-24";

/** Shaded section background (sections 3 and 8 here, matching the design). */
export const altBg = "bg-[#F6F5F0]";

/** Very light cream used by sections 2, 6 and the FAQ. */
export const soft = "bg-cream";

/** Warm sand used by the boxed sections (4 and 7). */
export const sand = "bg-[#EEE9E1]";

/** Dark purple used by the data-rights section. */
export const dark = "bg-[#24163A] text-white";

/** Card border colour from the design. */
export const line = "border-[#E6E2D8]";

/** Purple kicker used above light-section headings. */
export function Kicker({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#6a4fb0] ${className}`}>{children}</p>
  );
}

export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold leading-[1.12] tracking-tight text-ink ${className}`}
    >
      {children}
    </h2>
  );
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-[16px] leading-[1.75] text-ink-muted ${className}`}>{children}</p>;
}

/** Rounded photo with a slow zoom on hover. Fills its parent, which sets the size. */
export function Photo({
  src,
  alt,
  sizes,
  className = "",
  priority,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`group/photo relative overflow-hidden rounded-2xl bg-black/5 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-[1200ms] ease-out group-hover/photo:scale-105"
      />
    </div>
  );
}

/** Small blue square with an up-right arrow, as shown next to the design's buttons. */
export function ArrowBadge() {
  return (
    <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-[4px] bg-brand-blue-light text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
      <ArrowUpRight className="h-3 w-3" strokeWidth={2.75} />
    </span>
  );
}

/** Yellow primary button with a light sweep on hover. */
export function PrimaryButton({ href, children, arrow }: { href: string; children: ReactNode; arrow?: boolean }) {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-lg bg-brand-yellow px-6 py-3.5 font-heading text-[15px] font-semibold text-ink shadow-[0_14px_36px_-12px_rgba(254,207,35,0.9)] transition-all duration-300 hover:-translate-y-0.5"
    >
      <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/50 transition-all duration-700 group-hover:left-[120%]" />
      <span className="relative">{children}</span>
      {arrow && (
        <span className="relative">
          <ArrowBadge />
        </span>
      )}
    </Link>
  );
}

/** Outlined button for dark backgrounds. */
export function GhostButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-lg border border-white/70 px-6 py-3.5 font-heading text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink"
    >
      {children}
    </Link>
  );
}
