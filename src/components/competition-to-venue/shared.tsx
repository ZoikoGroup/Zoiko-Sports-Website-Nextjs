import Image from "next/image";
import type { ReactNode } from "react";

/** Same container as the header and footer, so every section lines up with the logo. */
export const wrap = "mx-auto w-full max-w-[1320px] px-5 sm:px-8";

/** Vertical rhythm shared by the light content sections. */
export const sectionPad = "py-14 lg:py-20";

/** Background for the alternating sections (3, 5, 7, 9, 11, 13, 15). */
export const altBg = "bg-[#F6F5F0]";

/** Hairline that separates alternating white sections. */
export const ruled = "border-y border-[#ebe9df]";

/** Cream fill used by cards and notes. */
export const cream = "bg-[#f6f4ee]";

/** Dark purple used by the authority panels and pilot panel. */
export const dark = "bg-[#24163A] text-white";

export const pad2 = (n: number) => String(n).padStart(2, "0");

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
  "rounded-2xl border border-[#DEDAD0] transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/70 hover:shadow-[0_18px_40px_-24px_rgba(29,20,51,0.35)]";

/** Small pill flagging that a section shows fictional sample data. */
export function SampleTag() {
  return (
    <span className="inline-flex rounded-full bg-[#ebe8df] px-3 py-1.5 text-[10.5px] font-semibold uppercase leading-none tracking-[0.08em] text-ink/50">
      Illustrative workflow · Fictional sample data
    </span>
  );
}

const noteStyles = {
  outline: "border border-[#DEDAD0] bg-white",
  cream: `border border-[#DEDAD0] ${cream}`,
};

/** Disclaimer box; `variant` matches the treatments in the design. */
export function Note({
  children,
  variant = "outline",
  className = "",
}: {
  children: ReactNode;
  variant?: keyof typeof noteStyles;
  className?: string;
}) {
  return (
    <p
      className={`rounded-2xl px-6 py-5 text-[14px] leading-[1.7] text-ink-muted sm:px-7 ${noteStyles[variant]} ${className}`}
    >
      {children}
    </p>
  );
}

/** Small uppercase label above a card title. */
export function Kicker({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink/40 ${className}`}>{children}</p>;
}

/** Grey footnote under a block. */
export function Footnote({ children, className = "mt-7" }: { children: ReactNode; className?: string }) {
  return <p className={`text-[13px] text-ink/45 ${className}`}>{children}</p>;
}

/** Small status pill used in tables and lists. */
export function StatePill({ children, className = "bg-[#efede6]" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-[12px] font-semibold text-ink ${className}`}>
      {children}
    </span>
  );
}

/** Shared table chrome: cream header row, hairline rows. `bodyBg` sets the fill behind the rows. */
export function DataTable({
  columns,
  minWidth = 900,
  bodyBg = "bg-white",
  children,
}: {
  columns: string[];
  minWidth?: number;
  bodyBg?: string;
  children: ReactNode;
}) {
  return (
    <div className={`overflow-x-auto rounded-2xl border border-[#DEDAD0] ${bodyBg}`}>
      <table className="w-full text-left" style={{ minWidth }}>
        <thead className={cream}>
          <tr>
            {columns.map((c) => (
              <th
                key={c}
                scope="col"
                className="px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink/45 first:pl-6"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export const rowClass =
  "border-t border-[#ebe9df] text-[14px] text-ink-muted transition-colors duration-200 hover:bg-[#fbfaf6]";
export const rowHead = "py-4 pl-6 pr-4 font-heading font-semibold text-ink";
export const cell = "px-4 py-4";
