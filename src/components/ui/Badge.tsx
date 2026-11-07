import type { Badge as BadgeKind } from "@/data/navigation";

const tones = {
  light: {
    GATED: "bg-[#ecebe6] text-[#6f6a7c]",
    FUTURE: "bg-[#ecebe6] text-[#6f6a7c]",
    EXTERNAL: "bg-[#e6eef6] text-brand-blue",
  },
  dark: {
    GATED: "bg-white/15 text-white/75",
    FUTURE: "bg-white/10 text-white/60",
    EXTERNAL: "bg-brand-blue/20 text-brand-blue-light",
  },
} as const;

export function Badge({
  kind,
  tone = "light",
}: {
  kind: BadgeKind;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full px-2 py-[3px] text-[9.5px] font-semibold leading-none tracking-[0.08em] ${tones[tone][kind]}`}
    >
      {kind}
    </span>
  );
}
