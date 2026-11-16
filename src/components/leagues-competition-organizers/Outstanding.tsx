import { Reveal } from "@/components/ui/Reveal";
import { Footnote, Lead, SectionTitle, Tag, altBg, cream, line, ruled, sectionPad, wrap } from "./shared";

const columns = ["Check", "Owner", "Organization", "Due", "Status"];

const checks = [
  {
    check: "East entrance ramp inspection",
    owner: "Venue Operations",
    org: "Northfield Arena",
    due: "09:00 PDT",
    status: "In progress",
  },
  {
    check: "Final steward count approval",
    owner: "League Event Manager",
    org: "Riverside League",
    due: "10:00 PDT",
    status: "Awaiting approval",
  },
];

export function Outstanding() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>What remains outstanding before the event.</SectionTitle>
          <Lead className="mt-4 max-w-[700px] text-[15.5px]">
            14 of 16 venue checks complete is a coordination indicator with a named owner and due time — never a
            safe-to-open certification.
          </Lead>
        </Reveal>

        <Reveal delay={0.15}>
          <div className={`mt-9 overflow-x-auto rounded-2xl border ${line} bg-white`}>
            <table className="w-full min-w-[760px] text-left">
              <thead className={cream}>
                <tr>
                  {columns.map((c) => (
                    <th
                      key={c}
                      scope="col"
                      className="px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink/45"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {checks.map((c) => (
                  <tr
                    key={c.check}
                    className="border-t border-[#ebe9df] text-[13.5px] text-ink-muted transition-colors duration-200 hover:bg-[#fbfaf6]"
                  >
                    <th scope="row" className="w-[30%] px-4 py-4 font-heading font-semibold text-ink">
                      {c.check}
                    </th>
                    <td className="w-[20%] px-4 py-4">{c.owner}</td>
                    <td className="w-[18%] px-4 py-4">{c.org}</td>
                    <td className="w-[13%] px-4 py-4">{c.due}</td>
                    <td className="px-4 py-4">
                      <Tag>{c.status}</Tag>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <Footnote className="mt-6">
            Status legend: Not started · In progress · Awaiting approval · Completed · Blocked · Past due.
          </Footnote>
        </Reveal>
      </div>
    </section>
  );
}
