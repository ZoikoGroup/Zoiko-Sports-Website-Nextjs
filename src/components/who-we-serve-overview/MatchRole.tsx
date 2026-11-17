import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { altBg, Kicker, Lead, line, Photo, ruled, sectionPad, SectionTitle, wrap } from "./shared";

// NOTE: the design shows two cards plus a photo — no Venue Operators card — built as shown.
const audiences = [
  {
    roles: "Competition Director · Operations Lead · Event Manager",
    title: "Leagues & Competition Organizers",
    job: "Coordinate the competition schedule and venue dependencies; approve changes within scope.",
    dependsOn: "Venue readiness status and club confirmations.",
    firstPilot: "One fixture, or a bounded block with participating venues in scope.",
    link: { label: "Explore organizer fit", href: "/who-we-serve/leagues-organizers" },
  },
  {
    roles: "Operations Manager · Secretary · Event-Day Lead",
    title: "Clubs & Teams",
    job: "Prepare your team, track milestones, and acknowledge the updates addressed to you.",
    dependsOn: "The organizer’s published schedule and venue-related updates.",
    firstPilot: "One home event, with authorized updates and acknowledgments.",
    link: { label: "Explore club fit", href: "/who-we-serve/clubs-teams" },
  },
];

export function MatchRole() {
  return (
    <section id="who-its-for" className={`scroll-mt-24 ${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Which organization matches your role?</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Each card names the roles involved, the primary job, what the organization depends on from others, and a
            credible first pilot.
          </Lead>
        </Reveal>

        <div className="mt-9 grid gap-0.5 lg:grid-cols-3">
          <RevealGroup className="grid gap-0.5 md:grid-cols-2 lg:col-span-2">
            {audiences.map((a) => (
              <RevealItem
                key={a.title}
                className={`group flex h-full flex-col rounded-2xl border ${line} bg-white px-7 py-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/70 hover:shadow-[0_18px_40px_-24px_rgba(36,22,58,0.35)]`}
              >
                <Kicker className="text-[10.5px] leading-[1.5]">{a.roles}</Kicker>
                <h3 className="mt-3 text-[19px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                  {a.title}
                </h3>
                <p className="mt-4 border-b border-[#ebe9df] pb-4 text-[15px] leading-[1.65] text-ink-muted">{a.job}</p>

                <Kicker className="mt-4 text-[10.5px]">Depends on</Kicker>
                <p className="mt-1 text-[13.5px] leading-[1.55] text-ink-muted">{a.dependsOn}</p>
                <Kicker className="mt-4 text-[10.5px]">First pilot</Kicker>
                <p className="mt-1 text-[13.5px] leading-[1.55] text-ink-muted">{a.firstPilot}</p>

                <Link
                  href={a.link.href}
                  className="mt-auto inline-flex w-fit items-center gap-1 pt-6 font-heading text-[14px] font-semibold text-[#4b3a78] transition-colors duration-300 hover:text-brand-blue"
                >
                  {a.link.label}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.15} className="mt-2 min-h-[352px] lg:mt-0">
            <Photo
              src="/images/who-we-serve/match-roller-skate.webp"
              alt="Low-angle shot of a roller skater's pink skate mid-stride at a skatepark"
              sizes="(min-width: 1024px) 427px, 95vw"
              className={`h-full w-full border ${line}`}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
