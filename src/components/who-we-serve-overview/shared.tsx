import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

/** Same container as the header and footer, so every section lines up with the logo. */
export const wrap = "mx-auto w-full max-w-[1320px] px-5 sm:px-8";

/** Vertical rhythm shared by the light content sections. */
export const sectionPad = "py-14 lg:py-20";

/** Background for the alternating sections (3, 5, 7, 9, 11, 13, 15). */
export const altBg = "bg-[#F6F5F0]";

/** Hairline that separates alternating sections. */
export const ruled = "border-y border-[#ebe9df]";

/** Cream fill used by cards and notes. */
export const cream = "bg-[#f6f4ee]";

/** Dark purple used by the highlight panels. */
export const dark = "bg-[#24163A] text-white";

/** Card border colour from the design. */
export const line = "border-[#DEDAD0]";

export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`text-[clamp(1.75rem,3.2vw,2.35rem)] font-bold leading-[1.15] tracking-tight text-ink ${className}`}
    >
      {children}
    </h2>
  );
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-[16px] leading-[1.75] text-ink-muted ${className}`}>{children}</p>;
}

/** Small uppercase label above a title or text. */
export function Kicker({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-[11.5px] font-semibold uppercase tracking-[0.12em] text-ink/40 ${className}`}>{children}</p>
  );
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

/** Small pill flagging that a section shows fictional sample data. */
export function SampleTag() {
  return (
    <span className="inline-flex rounded-full bg-[#ebe8df] px-3 py-1.5 text-[10.5px] font-semibold uppercase leading-none tracking-[0.08em] text-ink/50">
      Illustrative workflow · Fictional sample data
    </span>
  );
}

/** Small rounded status tag. */
export function Tag({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-full bg-[#efede6] px-2.5 py-1 text-[11px] font-bold text-ink ${className}`}
    >
      {children}
    </span>
  );
}

/** Grey footnote under a block. */
export function Footnote({ children, className = "mt-6" }: { children: ReactNode; className?: string }) {
  return <p className={`text-[12.5px] leading-[1.7] text-ink/45 ${className}`}>{children}</p>;
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
