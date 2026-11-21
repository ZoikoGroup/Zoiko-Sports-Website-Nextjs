import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    role: "ORGANIZER",
    title: "Leagues & Competition Organizers",
    description: "Confirms the competition schedule and approves changes within scope.",
    linkText: "Explore the organizer workflow",
    href: "/who-we-serve/leagues-organizers",
  },
  {
    role: "VENUE",
    title: "Venue Operators",
    description: "Tracks readiness checks and raises event-day exceptions tied to the schedule.",
    linkText: "Explore the venue workflow",
    href: "/who-we-serve/venue-operators",
  },
  {
    role: "CLUB / TEAM",
    title: "Clubs & Teams",
    description: "Prepares its own team and acknowledges the updates and decisions addressed to it.",
    linkText: "Explore the club workflow",
    href: "/who-we-serve/clubs-teams",
  },
];

export function DifferentOrganizations() {
  return (
    <section className="relative border-t border-[#ebe7dc] bg-[#F7F6F1] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Header Block */}
        <div className="max-w-[780px]">
          <h2 className="font-heading text-[clamp(1.75rem,2.8vw,2.35rem)] font-bold leading-[1.2] tracking-tight text-[#1d1433]">
            Different organizations. Clear responsibilities.
          </h2>
          <p className="mt-4 text-[15.5px] sm:text-[16px] leading-[1.7] text-[#5d5670]">
            The organizer sets the competition context, the venue owns local operational duties, and clubs handle the preparation and updates relevant to them — whatever the sport.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {cards.map((c) => (
            <div
              key={c.role}
              className="flex flex-col justify-between rounded-xl border border-[#ded9cb] bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#868096]">
                  {c.role}
                </p>
                <h3 className="mt-2.5 font-heading text-[18px] sm:text-[19px] font-bold text-[#1d1433] leading-snug">
                  {c.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-[#5d5670]">
                  {c.description}
                </p>
              </div>

              <div className="mt-6 pt-2">
                <Link
                  href={c.href}
                  className="group inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#1d1433] transition-colors hover:text-[#377eb8]"
                >
                  <span>{c.linkText}</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <p className="mt-8 text-[12px] sm:text-[12.5px] leading-relaxed text-[#868096]">
          Officials, contractors and other event-day staff may take part only within an individually approved scope — there is no public self-onboarding path for those roles yet.
        </p>
      </div>
    </section>
  );
}
