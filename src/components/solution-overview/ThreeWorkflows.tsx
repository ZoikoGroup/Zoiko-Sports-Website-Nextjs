import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Lead, SectionTitle, cream, sectionPad, wrap } from "./shared";

const columns = ["Problem", "Lead actor", "Depends on", "Outcome sought", ""];

const workflows = [
  {
    problem: "Schedule changes don’t reach venue tasks",
    lead: "Organizer",
    dependsOn: "Venue",
    outcome: "Agreed readiness work before the event",
    link: { label: "Coordination", href: "/solutions/competition-to-venue" },
  },
  {
    problem: "Event-day issues lack a recorded owner and decision",
    lead: "Operations lead",
    dependsOn: "Officials & clubs",
    outcome: "Tracked exception with an authorized decision",
    link: { label: "Exceptions", href: "/solutions/exception-coordination" },
  },
  {
    problem: "Decisions and follow-up are hard to reconstruct",
    lead: "Review owner",
    dependsOn: "Venue & organizer",
    outcome: "Closed decisions, open follow-up tracked separately",
    link: { label: "Review", href: "/solutions/post-event-review" },
  },
];

export function ThreeWorkflows() {
  return (
    <section id="workflows" className={`scroll-mt-24 bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Three workflows, one way of working.</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            A pilot can test one of these starting points. No workflow implies a guaranteed outcome or automatic
            coverage of every event.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className="mt-9 overflow-x-auto rounded-2xl border border-[#DEDAD0] bg-white">
          <table className="w-full min-w-[900px] text-left">
            <thead className={cream}>
              <tr>
                {columns.map((c, i) => (
                  <th
                    key={i}
                    scope="col"
                    className="px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink/45 first:pl-4"
                  >
                    {c || <span className="sr-only">Solution</span>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {workflows.map((w) => (
                <tr
                  key={w.problem}
                  className="border-t border-[#ebe9df] text-[14px] text-ink-muted transition-colors duration-200 hover:bg-[#fbfaf6]"
                >
                  <th scope="row" className="w-[30%] py-4 pl-4 pr-6 font-heading font-semibold text-ink">
                    {w.problem}
                  </th>
                  <td className="px-4 py-4">{w.lead}</td>
                  <td className="px-4 py-4">{w.dependsOn}</td>
                  <td className="px-4 py-4">{w.outcome}</td>
                  <td className="whitespace-nowrap px-4 py-4">
                    <Link
                      href={w.link.href}
                      className="group inline-flex items-center gap-1 font-heading font-semibold text-[#3a2a63] transition-colors duration-300 hover:text-brand-blue"
                    >
                      {w.link.label}
                      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
