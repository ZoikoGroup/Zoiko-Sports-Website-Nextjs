import { Reveal } from "@/components/ui/Reveal";
import { DataTable, Footnote, Lead, SectionTitle, Tag, altBg, cell, rowClass, rowHead, ruled, sectionPad, wrap } from "./shared";

const orgs = [
  { name: "Riverside League", type: "Organizer", role: "Program sponsor", status: "Confirmed" },
  { name: "Northfield Arena", type: "Venue", role: "Participating venue", status: "Confirmed" },
  { name: "Example Club — not an actual club", type: "Club", role: "Participating club", status: "Invited" },
  {
    name: "Example Partner — not an actual partner",
    type: "Contractor / official",
    role: "Coordination partner",
    status: "Gated — not yet available",
  },
];

export function WhichOrgs() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[720px]">Which organizations are part of this event, and how they joined.</SectionTitle>
          <Lead className="mt-4 max-w-[720px] text-[15.5px]">
            An invitation only grants that organization&apos;s own participation — never new visibility into another
            organization&apos;s records.
          </Lead>
        </Reveal>

        <Reveal delay={0.15} className="mt-9">
          <DataTable columns={["Organization", "Type", "Role", "Status"]}>
            {orgs.map((o) => (
              <tr key={o.name} className={rowClass}>
                <th scope="row" className={`w-[35%] ${rowHead}`}>
                  {o.name}
                </th>
                <td className={`w-[19%] ${cell}`}>{o.type}</td>
                <td className={`w-[26%] ${cell}`}>{o.role}</td>
                <td className={cell}>
                  <Tag>{o.status}</Tag>
                </td>
              </tr>
            ))}
          </DataTable>
        </Reveal>

        <Reveal delay={0.2}>
          <Footnote className="mt-6">
            All organization names above are fictional specimen data, not an actual customer list.
          </Footnote>
        </Reveal>
      </div>
    </section>
  );
}
