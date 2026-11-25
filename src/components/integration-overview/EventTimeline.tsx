import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, sand, sectionPad, wrap } from "./shared";

const steps = [
  { time: "08:00", role: "Organizer", title: "Baseline recorded", text: "Readiness information is attached to the event." },
  { time: "08:18", role: "Venue", title: "Exception raised", text: "A local operational constraint is reported." },
  { time: "08:31", role: "Authorized lead", title: "Decision recorded", text: "A time adjustment is approved by a person." },
  {
    time: "08:37",
    role: "Club operations",
    title: "Update acknowledged",
    text: "A recipient records acknowledgment separately.",
  },
];

export function EventTimeline() {
  return (
    <section className={`${sand} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Kicker>Fictional event example</Kicker>
            <h2 className="mt-4 text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold leading-[1.12] tracking-tight text-ink">
              One event. Four accountable steps.
            </h2>
          </div>
          <p className="max-w-[340px] text-[13.5px] leading-[1.65] text-ink/55 lg:pb-2">
            Illustrative only—not a live connection or customer deployment.
          </p>
        </Reveal>

        <div className="relative mt-8">
          {/* Shared horizontal rule the time badges and step numbers sit on (desktop) */}
          <div className="absolute inset-x-0 top-[15px] hidden h-px bg-[#C9C2B2] lg:block" />

          <RevealGroup className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {steps.map((s, i) => (
              <RevealItem key={s.time} className="group relative lg:pl-6 lg:pr-0">
                <div className="flex items-center justify-between gap-4">
                  <span className="relative rounded-md bg-[#24163A] px-2.5 py-2 text-[11px] font-bold leading-none text-white">
                    {s.time}
                  </span>
                  <span className="h-px flex-1 bg-[#C9C2B2] lg:hidden" />
                  <span className="relative flex h-[27px] w-[27px] items-center justify-center rounded-full border border-ink bg-brand-yellow text-[11px] font-bold text-ink transition-transform duration-300 group-hover:scale-110">
                    {i + 1}
                  </span>
                </div>
                <div className="mt-11 lg:pr-12">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/50">{s.role}</p>
                  <h3 className="mt-1.5 font-heading text-[19px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-ink-muted">{s.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
