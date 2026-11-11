import { Reveal } from "@/components/ui/Reveal";
import {
  DataTable,
  Footnote,
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

/** Fictional sample data — illustrative only. */
const decisions = [
  {
    ref: "DA-0192",
    event: "Riverside Invitational",
    requestedBy: "Venue Operations",
    state: "Approved",
    recorded: "Sep 26, 12:15 PDT",
  },
  {
    ref: "DA-0193",
    event: "Fairview Classic",
    requestedBy: "Venue Operations",
    state: "Changes requested",
    recorded: "Sep 26, 09:10 PDT",
  },
  {
    ref: "DA-0194",
    event: "Riverside Invitational",
    requestedBy: "Northfield Arena Ops",
    state: "Pending",
    recorded: "Sep 26, 11:40 PDT",
  },
];

export function PendingDecisions() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">See which decisions are pending, without seeing unrelated organizations.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Search and filters are scoped server-side to each organization&apos;s authorized events.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className="mt-9">
          <DataTable columns={["Reference", "Event", "Requested by", "Decision state", "Recorded at"]} minWidth={820}>
            {decisions.map((d) => (
              <tr key={d.ref} className={rowClass}>
                <th scope="row" className={rowHead}>
                  {d.ref}
                </th>
                <td className={cell}>{d.event}</td>
                <td className={cell}>{d.requestedBy}</td>
                <td className={cell}>
                  <StatePill>{d.state}</StatePill>
                </td>
                <td className={`${cell} whitespace-nowrap`}>{d.recorded}</td>
              </tr>
            ))}
          </DataTable>
        </Reveal>

        <Footnote>All references, organizations and counts above are fictional specimen data.</Footnote>
      </div>
    </section>
  );
}
