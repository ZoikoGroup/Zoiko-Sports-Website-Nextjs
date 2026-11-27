import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { altBg, divider, Lead, line, sectionPad, SectionTitle, wrap } from "./shared";

const steps = [
  { title: "Describe the workflow", text: "What you're trying to coordinate, and what isn't working today." },
  { title: "Identify the systems", text: "Name the systems involved and who owns the data in each one." },
  { title: "Scope the exchange", text: "A reviewer confirms what's manual, imported, connected or excluded." },
  { title: "Confirm written pilot scope", text: "The agreed method becomes part of your written pilot scope." },
];

export function ScopingSteps() {
  return (
    <section id="how-scoping-works" className={`scroll-mt-24 ${altBg} ${divider} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal className="max-w-[760px]">
          <SectionTitle>How a scoping conversation works.</SectionTitle>
          <Lead className="mt-4">
            Four steps lead into the same written pilot scope — not a separate onboarding wizard.
          </Lead>
        </Reveal>

        {/* 1px gaps over the border colour draw the dividers at every breakpoint */}
        <RevealGroup className={`mt-10 grid gap-px border ${line} bg-[#E3E0D6] sm:grid-cols-2 lg:grid-cols-4`}>
          {steps.map((s, i) => (
            <RevealItem
              key={s.title}
              className="group h-full bg-white px-6 py-8 transition-colors duration-300 hover:bg-[#FBFAF7]"
            >
              <span className="text-[11px] font-semibold tracking-[0.14em] text-ink/45">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-heading text-[16px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {s.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.55] text-ink-muted">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mt-10 text-[12.5px] text-ink/45">
          The actual five-stage pilot process remains one process — scoping an integration doesn&apos;t start a second
          one.
        </p>
      </div>
    </section>
  );
}
