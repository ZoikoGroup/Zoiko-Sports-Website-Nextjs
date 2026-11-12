import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cream, pad2 } from "./shared";

const cols = {
  4: "sm:grid-cols-2 lg:grid-cols-4",
  6: "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
};

/** One continuous cream band with a yellow top rule, split into numbered steps. */
export function StepBand({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <RevealGroup
      className={`mt-9 grid gap-y-2 border-t-[3px] border-brand-yellow ${cream} ${cols[steps.length as 4 | 6] ?? cols[4]}`}
    >
      {steps.map((s, i) => (
        <RevealItem key={s.title} className="group px-[18px] py-6 transition-colors duration-300 hover:bg-[#efede6]">
          <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-ink/40">Step {pad2(i + 1)}</p>
          <h3 className="mt-2.5 text-[15.5px] font-semibold leading-snug text-ink transition-colors duration-300 group-hover:text-brand-blue">
            {s.title}
          </h3>
          <p className="mt-2 max-w-[240px] text-[13.5px] leading-[1.6] text-ink-muted">{s.text}</p>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
