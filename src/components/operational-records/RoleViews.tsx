import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionTitle, altBg, card, sectionPad, wrap } from "./shared";

const roleViews = [
  {
    title: "Organizer",
    text: "See the approved schedule decision and which record supports it.",
    link: { label: "See Approvals & Decisions", href: "/platform/approvals-decisions" },
  },
  {
    title: "Venue",
    text: "Track an owned exception from first report to closed follow-up.",
    link: { label: "See Event-Day Exceptions", href: "/platform/event-day-exceptions" },
  },
  {
    title: "Club",
    text: "See a shared update and its acknowledgment status, without other clubs' records.",
    link: { label: "See Notifications & Acknowledgments", href: "/platform/notifications" },
  },
];

export function RoleViews() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Three roles, three authorized views of the same event.</SectionTitle>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-2.5 md:grid-cols-3">
          {roleViews.map((r) => (
            <RevealItem key={r.title} className={`${card} flex flex-col bg-white p-6 sm:p-7`}>
              <h3 className="text-[17px] font-semibold text-ink">{r.title}</h3>
              <p className="mt-2 max-w-[330px] text-[14px] leading-[1.65] text-ink-muted">{r.text}</p>
              <Link
                href={r.link.href}
                className="group mt-auto inline-flex w-fit items-center gap-1 pt-5 font-heading text-[13.5px] font-semibold text-[#3d2a6b] transition-colors duration-300 hover:text-brand-blue"
              >
                {r.link.label}
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
