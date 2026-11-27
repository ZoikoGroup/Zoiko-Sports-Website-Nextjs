import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

/** Same container as the header and footer, so every section lines up with the logo. */
export const wrap = "mx-auto w-full max-w-[1320px] px-5 sm:px-8";

/** Vertical rhythm shared by the light content sections. */
export const sectionPad = "py-14 lg:py-24";

/** Shaded section background (sections 3, 5, 7, 9 and the FAQ, matching the design). */
export const altBg = "bg-[#F6F5F0]";

/** Cream fill used by the boxed cards inside white sections. */
export const cream = "bg-[#F5F4EF]";

/** Card border colour from the design. */
export const line = "border-[#E3E0D6]";

/** Thin rule at the top of each light section, as in the design. */
export const divider = `border-t ${line}`;

/** Small grey uppercase label used above lists and under cards. */
export function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/45 ${className}`}>{children}</p>
  );
}

export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`text-[clamp(1.8rem,3.2vw,2.4rem)] font-bold leading-[1.22] tracking-tight text-ink ${className}`}>
      {children}
    </h2>
  );
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-[15.5px] leading-[1.7] text-ink-muted ${className}`}>{children}</p>;
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
    <div className={`group/photo relative overflow-hidden rounded-xl bg-black/5 ${className}`}>
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

/** Yellow primary button with a light sweep on hover. */
export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center overflow-hidden rounded-lg bg-brand-yellow px-6 py-3.5 font-heading text-[15px] font-semibold text-ink shadow-[0_14px_36px_-12px_rgba(254,207,35,0.9)] transition-all duration-300 hover:-translate-y-0.5"
    >
      <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/50 transition-all duration-700 group-hover:left-[120%]" />
      <span className="relative">{children}</span>
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
