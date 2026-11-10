import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Note, Photo, SectionTitle, altBg, sectionPad, wrap } from "./shared";

const recordFacts = [
  {
    title: "Source",
    text: "Which organization or system originated the entry, and whether it was entered manually or imported.",
  },
  { title: "Timing", text: "Event-applicable time is tracked separately from the time the platform recorded it." },
  { title: "Version", text: "A corrected record links to the entry it replaces; nothing is silently overwritten." },
];

export function RecordFacts() {
  return (
    <section id="record-anatomy" className={`scroll-mt-24 ${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <div className="grid lg:grid-cols-[1fr_512px]">
          <div className="flex flex-col">
            <Reveal className="lg:pr-12">
              <SectionTitle>Five facts anchor every record.</SectionTitle>
              <Lead className="mt-4 max-w-[680px]">
                A record is only useful once you can see where it came from, when it applied, what changed, who is
                responsible, and what it connects to. Zoiko Sports is designed to keep these facts attached rather than
                collapse them into one status.
              </Lead>
            </Reveal>

            {/* Joined grid: each card draws its right/bottom edge, the wrapper draws the outer top/left */}
            <RevealGroup className="mt-10 grid flex-1 border-l border-t border-[#DEDAD0] sm:grid-cols-3">
              {recordFacts.map((f) => (
                <RevealItem
                  key={f.title}
                  className="group relative border-b border-r border-[#DEDAD0] bg-white px-5 py-6 transition-colors duration-300 hover:bg-[#fbfaf6]"
                >
                  <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-brand-yellow transition-transform duration-500 group-hover:scale-x-100" />
                  <h3 className="text-[16px] font-semibold text-ink">{f.title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-ink-muted">{f.text}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal delay={0.2} className="mt-10 lg:mt-0">
            <Photo
              src="/images/operational-records/facts-hurdler.webp"
              alt="Hurdler crouched on the track after a race"
              sizes="(min-width: 1024px) 512px, 95vw"
              className="aspect-[512/335] w-full rounded-none! border border-[#DEDAD0] lg:aspect-auto lg:h-full lg:border-l-0"
            />
          </Reveal>
        </div>

        <Reveal>
          <Note variant="outline" className="mt-8">
            Record provenance explains where information came from. It is not, by itself, proof that an event condition
            is correct.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
