import { Reveal } from "@/components/ui/Reveal";
import { DataTable, Lead, SectionTitle, cell, rowClass, rowHead, sectionPad, wrap } from "./shared";

const rows = [
  {
    org: "Organizer (Riverside League)",
    view: "Own event, full plan",
    request: "Yes",
    approve: "Yes — competition only",
    ack: "N/A",
  },
  {
    org: "Venue Operations",
    view: "Own venue records",
    request: "Yes — schedule review",
    approve: "Venue checks only",
    ack: "N/A",
  },
  { org: "Participating Clubs", view: "Own fixture only", request: "No", approve: "No", ack: "Yes" },
];

export function PermissionMatrix() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[640px]">Who can view, request, approve or acknowledge — by organization.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            No organization holds every permission. Approval authority stays with the organizer&apos;s competition role;
            readiness ownership stays with the venue.
          </Lead>
        </Reveal>

        <Reveal delay={0.15} className="mt-9">
          <DataTable
            columns={["Organization", "View", "Request", "Approve", "Acknowledge"]}
            headClass="bg-[#ece8df]"
            minWidth={820}
          >
            {rows.map((r) => (
              <tr key={r.org} className={rowClass}>
                <th scope="row" className={`w-[25%] ${rowHead}`}>
                  {r.org}
                </th>
                <td className={`w-[22%] ${cell}`}>{r.view}</td>
                <td className={`w-[16%] ${cell}`}>{r.request}</td>
                <td className={`w-[21%] ${cell}`}>{r.approve}</td>
                <td className={cell}>{r.ack}</td>
              </tr>
            ))}
          </DataTable>
        </Reveal>
      </div>
    </section>
  );
}
