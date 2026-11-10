import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Note, Photo, SectionTitle, altBg, sectionPad, wrap } from "./shared";

const accessFacts = [
  { title: "Actor identity", text: "Who is authenticated — a verified person, not an email address alone." },
  { title: "Acting organization", text: "Which single organization a person is currently representing." },
  { title: "Event participation", text: "Whether that organization is an authorized participant in this event." },
];

export function AccessFacts() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <div className="grid lg:grid-cols-[1fr_512px]">
          <div className="flex flex-col">
            <Reveal className="lg:pr-12">
              <SectionTitle className="max-w-[560px]">Five facts decide what a person can see and do.</SectionTitle>
              <Lead className="mt-4 max-w-[700px]">
                Organization-based access means each participant sees and acts on only the event information authorized
                for their organization, role and responsibility. Shared event context does not create blanket
                visibility into another organization&apos;s records.
              </Lead>
            </Reveal>

            {/* Joined grid: each card draws its right/bottom edge, the wrapper draws the outer top/left */}
            <RevealGroup className="mt-10 grid flex-1 border-l border-t border-[#DEDAD0] sm:grid-cols-3">
              {accessFacts.map((f) => (
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
              src="/images/organizations-access/facts-hurdler.webp"
              alt="Hurdler clearing a hurdle mid-stride in a stadium race"
              sizes="(min-width: 1024px) 512px, 95vw"
              className="aspect-[512/361] w-full rounded-none! border border-[#DEDAD0] lg:aspect-auto lg:h-full lg:border-l-0"
            />
          </Reveal>
        </div>

        <Reveal>
          <Note className="mt-8">
            Access is considered for a specific action on a specific record — never granted simply because two
            organizations participate in the same event.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
