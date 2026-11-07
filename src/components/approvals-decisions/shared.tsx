import Image from "next/image";
import type { ReactNode } from "react";

/** Same container as the header and footer, so every section lines up with the logo. */
export const wrap = "mx-auto w-full max-w-[1320px] px-5 sm:px-8";

/** Background for the alternating (even-numbered) sections — a light tint of the #DEDAD0 border tone. */
export const altBg = "bg-[#F4F2EE]";

/** Vertical rhythm shared by the light content sections. */
export const sectionPad = "py-16 lg:py-24";

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

/** Light bordered card used across the content grids. */
export const card =
  "rounded-2xl border border-[#DEDAD0] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/70 hover:shadow-[0_18px_40px_-24px_rgba(29,20,51,0.35)]";

/** Small pill flagging that a section shows fictional sample data. */
export function SampleTag() {
  return (
    <span className="inline-flex rounded-full bg-[#ebe8df] px-3 py-1.5 text-[10.5px] font-semibold uppercase leading-none tracking-[0.08em] text-ink/50">
      Illustrative workflow · Fictional sample data
    </span>
  );
}

/** Muted cream note box (disclaimers). */
export function Note({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`rounded-2xl border border-[#DEDAD0] bg-[#f6f4ee] px-6 py-5 text-[14px] leading-[1.7] text-ink-muted sm:px-7 ${className}`}
    >
      {children}
    </p>
  );
}
