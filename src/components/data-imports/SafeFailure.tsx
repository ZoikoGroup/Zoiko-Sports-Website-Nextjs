import { Reveal } from "@/components/ui/Reveal";
import { Kicker, Lead, Photo, sand, sectionPad, wrap } from "./shared";

const states = [
  { label: "Needs review", dot: "bg-[#D6951F]" },
  { label: "Blocked", dot: "bg-[#A8364F]" },
  { label: "Structurally clear", dot: "bg-[#3F7D5C]" },
];

export function SafeFailure() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <div
          className={`${sand} grid items-center gap-10 rounded-3xl px-6 py-10 sm:px-10 lg:grid-cols-[1fr_560px] lg:gap-20 lg:px-[62px] lg:py-[62px]`}
        >
          <Reveal>
            <Kicker>Safe failure semantics</Kicker>
            <h2 className="mt-4 max-w-[400px] text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold leading-[1.12] tracking-tight text-ink">
              Errors should stop a silent change.
            </h2>
            <Lead className="mt-5 max-w-[410px]">
              Invalid identifiers, missing time zones, or conflicting records would require correction rather than being
              silently attached to another organization&apos;s event. A clean parse does not prove that information is
              true or authorized.
            </Lead>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
              {states.map((s) => (
                <li key={s.label} className="flex items-center gap-2 text-[11.5px] font-medium text-ink/70">
                  <span className={`h-2 w-2 rounded-full ${s.dot}`} />
                  {s.label}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <Photo
              src="/images/data-imports/failure-kettlebell-squat.webp"
              alt="Two athletes holding kettlebells at chest height during a squat workout"
              sizes="(min-width: 1024px) 560px, 90vw"
              className="aspect-[560/360] w-full rounded-xl shadow-[0_24px_50px_-24px_rgba(29,20,51,0.45)]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
