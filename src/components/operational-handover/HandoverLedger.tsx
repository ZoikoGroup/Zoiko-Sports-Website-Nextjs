import { Search } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import {
  DataTable,
  Lead,
  SampleTag,
  SectionTitle,
  StatePill,
  cell,
  rowClass,
  rowHead,
  sectionPad,
  wrap,
} from "./shared";

const filters = ["Status: Clarification requested", "Org scope: Northfield Arena", "Due: Today"];

/** Fictional sample data — illustrative only. */
const handovers = [
  {
    id: "HO-F01",
    action: "Access-plan review",
    route: "Riverside League → Northfield Arena",
    role: "Venue Operations",
    due: "Sep 25 · 17:00 PDT",
    status: "Clarification requested",
  },
  {
    id: "HO-F02",
    action: "Steward count approval",
    route: "Northfield Arena → Riverside League",
    role: "Event Manager",
    due: "Sep 26 · 10:00 PDT",
    status: "Awaiting response",
  },
  {
    id: "HO-F03",
    action: "Officials briefing recipient",
    route: "Riverside League → Northfield Arena",
    role: "Venue Operations",
    due: "Briefing 10:15 PDT",
    status: "Accepted in sample",
  },
];

export function HandoverLedger() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">A fictional handover ledger — searchable, filterable, scoped.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Shown count reflects only this authorized scope. Universal counts are never implied.
          </Lead>
        </Reveal>

        {/* Static specimen controls — they illustrate the interface and do not filter the table */}
        <Reveal delay={0.05} className="mt-9 flex flex-col gap-2.5 lg:flex-row lg:items-center">
          <div
            aria-hidden
            className="flex h-10 flex-1 items-center gap-2 rounded-lg border border-[#DEDAD0] bg-white px-4 text-[14px] text-ink/45"
          >
            <Search className="h-3.5 w-3.5 lg:hidden" />
            Search handovers
          </div>
          <div className="flex flex-wrap gap-2.5">
            {filters.map((f) => (
              <span
                key={f}
                className="rounded-full border border-[#DEDAD0] bg-[#f6f4ee] px-3.5 py-2 font-heading text-[13px] font-semibold text-ink/80"
              >
                {f}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-7">
          <DataTable columns={["ID", "Action", "Sender → Recipient", "Role", "Due", "Status"]} minWidth={1040}>
            {handovers.map((h) => (
              <tr key={h.id} className={rowClass}>
                <td className="py-4 pl-6 pr-4 font-heading font-semibold text-ink/45">{h.id}</td>
                <th scope="row" className={`${rowHead} pl-4!`}>
                  {h.action}
                </th>
                <td className={`${cell} whitespace-nowrap text-[13.5px]`}>{h.route}</td>
                <td className={cell}>{h.role}</td>
                <td className={`${cell} whitespace-nowrap`}>{h.due}</td>
                <td className={cell}>
                  <StatePill>{h.status}</StatePill>
                </td>
              </tr>
            ))}
          </DataTable>
        </Reveal>
      </div>
    </section>
  );
}
