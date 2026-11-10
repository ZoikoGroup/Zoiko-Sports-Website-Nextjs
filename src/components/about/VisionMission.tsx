import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Photo, wrap } from "./shared";

const principles = [
  {
    title: "Connected, not centralized by default",
    text: "Shared context should not mean universal visibility. Access follows organization, role and responsibility.",
  },
  {
    title: "Operational before ornamental",
    text: "The platform starts with real workflows and decisions, not dashboards that merely visualize disconnected data.",
  },
  {
    title: "Intelligence grounded in evidence",
    text: "Analytics and AI build on attributable, time-aware operational data rather than become the system of record by themselves.",
  },
  {
    title: "Integrate before replace",
    text: "Where a trusted specialist system already works, Zoiko Sports connects it rather than demanding unnecessary rip-and-replace.",
  },
  {
    title: "Expand by verified capability",
    text: "New public claims follow implemented, tested and governed capability — not precede it.",
  },
  {
    title: "Cross-sport by architecture",
    text: "The core model supports common sports operating patterns while allowing sport-specific rules and workflows.",
  },
];

const visionMission = [
  {
    label: "Vision",
    text: "A world where every sports organization can operate from trusted, connected information—across competitions, venues, teams, partners and the experiences built around them.",
  },
  {
    label: "Mission",
    text: "To build the trusted operating and intelligence infrastructure that helps sports organizations coordinate events, connect systems and data, and make better-informed decisions without losing organizational accountability.",
  },
];

export function VisionMission() {
  return (
    <section className="bg-[#24163A] py-16 text-white lg:py-24">
      <div className={wrap}>
        <RevealGroup className="grid gap-6 lg:grid-cols-2">
          {visionMission.map((v) => (
            <RevealItem
              key={v.label}
              className="rounded-2xl border border-white/15 bg-white/[0.02] p-8 transition-colors duration-300 hover:border-brand-yellow/50 sm:p-9"
            >
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand-yellow">{v.label}</p>
              <p className="mt-4 font-heading text-[clamp(1.1rem,1.6vw,1.3rem)] font-semibold leading-[1.6]">{v.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_296px] lg:gap-8">
          <RevealGroup className="grid gap-x-8 sm:grid-cols-2 xl:grid-cols-3">
            {principles.map((p) => (
              <RevealItem key={p.title} className="border-t border-white/15 py-6">
                <h3 className="text-[15.5px] font-semibold">{p.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.65] text-white/60">{p.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.2} className="lg:pt-0">
            <Photo
              src="/images/about/principles-rugby.webp"
              alt="Rugby player kicking a ball off a kicking tee"
              sizes="(min-width: 1024px) 296px, 95vw"
              className="aspect-[295/235] w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
