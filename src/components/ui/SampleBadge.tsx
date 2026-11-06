/** Marks interactive demos as illustrative, using fictional data. */
export function SampleBadge({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-medium ${
        tone === "dark" ? "bg-white/10 text-white/80" : "bg-[#ebe8e0] text-ink-muted"
      }`}
    >
      Illustrative workflow • Fictional sample data
    </span>
  );
}
