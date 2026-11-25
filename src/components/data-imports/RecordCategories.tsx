import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, line, sand, sectionPad, soft, wrap } from "./shared";

const categories = [
  { title: "Schedules", text: "Event dates, times, locations, and responsible competition roles." },
  { title: "Readiness records", text: "Operational checks contributed by the organization responsible for them." },
  { title: "Organization handoffs", text: "Information that moves between organizer, venue, and club workflows." },
];

export function RecordCategories() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <div
          className={`${sand} grid items-center gap-10 rounded-3xl px-6 py-10 sm:px-10 lg:grid-cols-[1fr_555px] lg:gap-16 lg:px-[62px] lg:py-[62px]`}
        >
          <Reveal>
            <Kicker>Record categories to assess</Kicker>
            <h2 className="mt-4 max-w-[340px] text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold leading-[1.12] tracking-tight text-ink">
              Start with the records behind the workflow.
            </h2>
            <Lead className="mt-5 max-w-[380px]">
              These are discovery categories, not promised schemas or supported formats. Detailed records stay out of the
              public inquiry.
            </Lead>
          </Reveal>

          <Reveal
            delay={0.1}
            className={`overflow-hidden rounded-2xl border ${line} ${soft} shadow-[0_24px_50px_-28px_rgba(29,20,51,0.35)]`}
          >
            <RevealGroup>
              {categories.map((c, i) => (
                <RevealItem
                  key={c.title}
                  className={`group flex items-center gap-6 px-6 py-7 transition-colors duration-300 hover:bg-white sm:gap-11 sm:px-7 ${
                    i > 0 ? `border-t ${line}` : ""
                  }`}
                >
                  <span className="w-5 shrink-0 text-[11px] font-semibold tracking-[0.12em] text-ink/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading text-[18px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 text-[13.5px] leading-[1.6] text-ink-muted">{c.text}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-ink transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </RevealItem>
              ))}
            </RevealGroup>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
