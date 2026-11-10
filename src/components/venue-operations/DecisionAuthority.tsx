import { Reveal } from "@/components/ui/Reveal";
import { DataTable, Lead, SectionTitle, cell, rowClass, rowHead, sectionPad, wrap } from "./shared";

const decisions = [
  {
    type: "Venue access & safety",
    party: "Venue duty holder",
    record: "Recorded check status",
    disclaimer: "Not a certification or permission to open.",
  },
  {
    type: "Fixture start time",
    party: "Competition Director",
    record: "Request & decision record",
    disclaimer: "Venue may request; only the organizer decides.",
  },
  {
    type: "Medical / safeguarding",
    party: "Specialist authority",
    record: "Not modeled here",
    disclaimer: "Retains its own approved authority and process.",
  },
];

export function DecisionAuthority() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Shared information. Clear decision authority.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Zoiko Sports can be used to coordinate and record agreed operating information where the relevant capability
            is implemented. Authorized venue personnel determine venue access and safety decisions. The relevant
            competition organization retains its own sporting decisions. A software check state is not a certificate
            or permission to open.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className="mt-9">
          <DataTable columns={["Decision type", "Accountable party", "Product record", "Public disclaimer"]}>
            {decisions.map((d) => (
              <tr key={d.type} className={rowClass}>
                <th scope="row" className={rowHead}>
                  {d.type}
                </th>
                <td className={cell}>{d.party}</td>
                <td className={cell}>{d.record}</td>
                <td className={cell}>{d.disclaimer}</td>
              </tr>
            ))}
          </DataTable>
        </Reveal>
      </div>
    </section>
  );
}
