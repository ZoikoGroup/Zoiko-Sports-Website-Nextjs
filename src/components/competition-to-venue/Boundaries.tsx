import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Photo, SectionTitle, sectionPad, wrap } from "./shared";

const boundaries = [
  { title: "Scoped access", text: "Only authorized organizations and roles should access event information." },
  { title: "Accountable approvals", text: "Human authorities retain competition and venue decisions." },
  { title: "Source context", text: "Data source and update context matter." },
  { title: "Connectivity planning", text: "Live-event connectivity procedures must be agreed in advance." },
];

export function Boundaries() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1fr_380px] lg:gap-14`}>
        <div>
          <Reveal>
            <SectionTitle>Specific boundaries, not badges.</SectionTitle>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {boundaries.map((b) => (
              <RevealItem
                key={b.title}
                className="border-l-2 border-transparent transition-all duration-300 hover:border-brand-yellow hover:pl-3"
              >
                <h3 className="text-[15.5px] font-semibold text-ink">{b.title}</h3>
                <p className="mt-2 max-w-[250px] text-[14px] leading-[1.6] text-ink-muted">{b.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.2}>
          <Photo
            src="/images/competition-to-venue/boundaries-weightlifter.webp"
            alt="Weightlifter holding a barbell overhead in a squat"
            sizes="(min-width: 1024px) 380px, 95vw"
            className="aspect-[380/231] w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
