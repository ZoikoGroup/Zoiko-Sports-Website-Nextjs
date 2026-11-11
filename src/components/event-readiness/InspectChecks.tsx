import { Reveal } from "@/components/ui/Reveal";
import {
  DataTable,
  Footnote,
  Lead,
  SampleTag,
  SectionTitle,
  StatePill,
  altBg,
  cell,
  rowClass,
  rowHead,
  ruled,
  sectionPad,
  wrap,
} from "./shared";

/** Fictional sample data — illustrative only. */
const checks = [
  {
    check: "East entrance ramp inspection",
    owner: "Venue Operations",
    due: "09:00 PDT",
    state: "In progress",
    approval: "Not required",
  },
  {
    check: "Final steward count approval",
    owner: "Event Manager",
    due: "10:00 PDT",
    state: "Pending",
    approval: "Awaiting approval",
  },
  { check: "PA test", owner: "Venue Operations", due: "—", state: "Recorded complete", approval: "Not required" },
  {
    check: "Stewarding plan sign-off",
    owner: "Event Manager",
    due: "—",
    state: "Recorded complete",
    approval: "Reviewed",
  },
];

export function InspectChecks() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">See exactly what a responsible organization would inspect.</SectionTitle>
          <Lead className="mt-4 max-w-[700px] text-[15.5px]">
            A completion count is a coordination snapshot, fixed at 08:50 PDT — never a safety score or a verdict that
            the event or venue is approved to proceed.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className="mt-9">
          <DataTable columns={["Check", "Owner organization", "Due (local)", "Check state", "Approval"]} minWidth={860}>
            {checks.map((c) => (
              <tr key={c.check} className={rowClass}>
                <th scope="row" className={rowHead}>
                  {c.check}
                </th>
                <td className={cell}>{c.owner}</td>
                <td className={`${cell} whitespace-nowrap`}>{c.due}</td>
                <td className={cell}>
                  <StatePill>{c.state}</StatePill>
                </td>
                <td className={cell}>{c.approval}</td>
              </tr>
            ))}
          </DataTable>
        </Reveal>

        <Footnote>
          The other 12 completed checks in this scope are not itemized in the source and are not named here. Checks,
          organizations and times shown are fictional specimen data.
        </Footnote>
      </div>
    </section>
  );
}
