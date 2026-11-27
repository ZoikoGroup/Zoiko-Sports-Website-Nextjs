import { Reveal } from "@/components/ui/Reveal";
import { altBg, divider, Label, Lead, line, Photo, sectionPad, SectionTitle, wrap } from "./shared";

const requirements = [
  "Event-local IANA zone, a stored UTC instant and the local rendering are all kept, not just one",
  "Ambiguous local times from a daylight-saving overlap are flagged, never silently assigned an offset",
  "Nonexistent local times from a daylight-saving gap block conversion and route to review",
  "Viewer-local and event-local displays are both labeled so they are never confused",
];

export function BaselineSchedule() {
  return (
    <section className={`${altBg} ${divider} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal className="max-w-[720px]">
          <span className="inline-block rounded-full bg-[#ECEAE3] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink/50">
            Illustrative timeline · Fictional static sample
          </span>
          <SectionTitle className="mt-3">A baseline event schedule, not a live feed.</SectionTitle>
          <Lead className="mt-4">
            No calendar feed, API, export, recurrence engine or vendor connection is demonstrated by this sample. It
            illustrates the time-zone and version discipline any future design would require.
          </Lead>
        </Reveal>

        <div className="mt-8 grid gap-7 lg:grid-cols-[505px_1fr]">
          <Reveal>
            <Photo
              src="/images/scheduling-calendars/timeline-tennis-serve.webp"
              alt="A tennis player stretching back into a serve against a pale sky"
              sizes="(min-width: 1024px) 505px, 92vw"
              className={`aspect-[505/600] w-full border ${line} lg:aspect-auto lg:h-full lg:min-h-[600px]`}
            />
          </Reveal>

          <Reveal delay={0.1} className={`rounded-2xl border ${line} px-6 py-8 sm:px-8`}>
            <Label>Time-zone &amp; DST requirements (proposed)</Label>
            <ul className="mt-4">
              {requirements.map((r) => (
                <li
                  key={r}
                  className={`border-t ${line} py-3.5 text-[14px] font-medium leading-[1.5] text-ink transition-colors duration-300 hover:text-brand-blue`}
                >
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
