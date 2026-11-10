import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, altBg, card, sectionPad, wrap } from "./shared";

const layers = [
  { title: "Competition", text: "Scheduling, officiating context, tracking, statistics and competition operations." },
  { title: "Venue", text: "Readiness, operations, workforce, communications, access and event delivery." },
  { title: "Performance", text: "Athlete, training, biomechanics and performance systems through governed integrations." },
  { title: "Business", text: "Commercial operations, CRM, ticketing, sponsorship, merchandise and revenue context." },
  { title: "Fan", text: "Apps, communities, event discovery, second-screen and connected experiences." },
  { title: "Intelligence", text: "Scouting, recruitment, forecasting, decision support and cross-domain analysis." },
  { title: "Partner ecosystem", text: "Travel, hospitality, retail, service providers, developers and approved third parties." },
  { title: "Media", text: "Streaming, content, highlights, graphics, commentary and rights-linked workflows." },
];

export function PlatformLayers() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>A broader sports platform, built in deliberate layers.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15px]">
            The long-term opportunity extends beyond event operations because sports organizations operate across
            several connected technology layers, communicated as direction rather than a single launch release.
          </Lead>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_244px]">
          <RevealGroup className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {layers.map((l) => (
              <RevealItem key={l.title} className={`${card} p-5`}>
                <h3 className="text-[15px] font-semibold text-ink">{l.title}</h3>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-muted">{l.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.2} className="min-h-[280px]">
            <Photo
              src="/images/about/layers-streetball.webp"
              alt="Two players contesting a jump shot on an outdoor basketball court"
              sizes="(min-width: 1024px) 244px, 95vw"
              className="h-full w-full"
            />
          </Reveal>
        </div>

        <p className="mt-6 text-[13px] text-ink/45">
          These layers describe strategic direction, not a promise that every feature is currently released.
        </p>
      </div>
    </section>
  );
}
