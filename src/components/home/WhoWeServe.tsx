import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const audiences = [
  {
    image: "/images/home/serve-leagues.png",
    alt: "Floodlit football stadium full of spectators",
    title: "Leagues & competition organizers",
    roles: "Competition directors, operations leaders, event managers",
    text: "Coordinate schedules, cross-venue readiness, approvals, and event-day changes across the information your organization is authorized to use.",
    pilot: "One event or fixture block involving the organizer and at least one venue.",
    link: { label: "Explore organizer solutions", href: "/who-we-serve/leagues-organizers" },
  },
  {
    image: "/images/home/serve-clubs.png",
    alt: "Players celebrating together on the pitch",
    title: "Clubs",
    roles: "Club operations managers, club secretaries, event-day leads",
    text: "Connect club preparation to venue responsibilities, scheduled milestones, and recorded event-day decisions.",
    pilot: "One home event or event series with the relevant venue workflow.",
    link: { label: "Explore club solutions", href: "/who-we-serve/clubs-teams" },
  },
  {
    image: "/images/home/serve-venues.png",
    alt: "Ice hockey arena with a packed seating bowl",
    title: "Venue operators",
    roles: "Venue directors, operations managers, safety and event operations roles",
    text: "Coordinate readiness checks and operational exceptions around the organizer’s schedule, with clear ownership for agreed actions.",
    pilot: "One event with explicit venue checks, approval points, and exception handling.",
    link: { label: "Explore venue solutions", href: "/who-we-serve/venue-operators" },
  },
];

export function WhoWeServe() {
  return (
    <section className="bg-[#f4f2ec] py-20 lg:py-28">
      <div className="container-page">
        <Reveal>
          <h2 className="max-w-3xl text-[clamp(1.9rem,3.4vw,2.7rem)] font-bold leading-tight tracking-tight text-ink">
            Designed for the organizations that deliver the event.
          </h2>
        </Reveal>

        <RevealGroup className="mx-auto mt-10 grid max-w-[640px] gap-6 lg:max-w-none lg:grid-cols-3">
          {audiences.map((a) => (
            <RevealItem key={a.title} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.07] bg-[#fbfaf7] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-24px_rgba(29,20,51,0.3)]">
                <div className="overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.alt}
                    width={382}
                    height={205}
                    sizes="(min-width: 768px) 400px, 100vw"
                    className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[21px] font-bold leading-snug text-ink">{a.title}</h3>
                  <p className="mt-3 text-[12.5px] leading-snug text-ink-muted">{a.roles}</p>
                  <p className="mt-4 text-[14.5px] leading-[1.65] text-ink">{a.text}</p>
                  <div className="mt-5 rounded-xl bg-[#efece4] p-4 transition-colors duration-500 group-hover:bg-[#fdf3cc]">
                    <p className="font-heading text-[13px] font-semibold text-ink">Pilot starting point</p>
                    <p className="mt-1 text-[13px] leading-snug text-ink-muted">{a.pilot}</p>
                  </div>
                  <Link
                    href={a.link.href}
                    className="mt-auto inline-flex items-center gap-2 pt-7 font-heading text-[14px] font-semibold text-ink underline decoration-ink/40 underline-offset-4 transition-colors hover:text-brand-blue hover:decoration-brand-blue"
                  >
                    {a.link.label}
                    <ArrowRight className="h-4 w-4 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <p className="mt-10 flex max-w-3xl gap-4 text-[14px] leading-relaxed text-ink-muted">
            <span aria-hidden="true" className="mt-1 flex shrink-0">
              <span className="h-5 w-5 rounded-full border-2 border-navy-950" />
              <span className="-ml-2 h-5 w-5 rounded-full border-2 border-brand-blue" />
            </span>
            A strong pilot usually involves the organizations that actually share responsibility for the chosen
            workflow. Invite the relevant organizer, club, or venue into scoping so participants, permissions,
            responsibilities, support boundaries, and evaluation measures can be agreed before live operation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
