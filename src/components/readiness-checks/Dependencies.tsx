import { Reveal } from "@/components/ui/Reveal";
import {
  DataTable,
  Lead,
  Note,
  SectionTitle,
  StatePill,
  altBg,
  cell,
  rowClass,
  rowHead,
  sectionPad,
  wrap,
} from "./shared";

/** Fictional sample data — illustrative only. */
const dependencies = [
  {
    check: "Final steward count approval",
    owner: "Event Manager",
    dependsOn: "Steward roster confirmation",
    due: "10:00 PDT",
    recipient: "Riverside League",
    handoff: "Pending",
  },
  {
    check: "East entrance ramp inspection",
    owner: "Venue Operations",
    dependsOn: "Maintenance clearance",
    due: "09:00 PDT",
    recipient: "Northfield Arena Ops",
    handoff: "In progress",
  },
];

export function Dependencies() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[640px]">A check can depend on someone else&apos;s decision.</SectionTitle>
          <Lead className="mt-4 max-w-[720px] text-[15.5px]">
            A check may depend on a decision or update from another participating organization. Make that dependency
            visible to the authorized teams, while keeping ownership and approval separate.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className="mt-9">
          <DataTable columns={["Check", "Owning org", "Depends on", "Due", "Recipient", "Handoff"]}>
            {dependencies.map((d) => (
              <tr key={d.check} className={rowClass}>
                <th scope="row" className={rowHead}>
                  {d.check}
                </th>
                <td className={cell}>{d.owner}</td>
                <td className={cell}>{d.dependsOn}</td>
                <td className={`${cell} whitespace-nowrap`}>{d.due}</td>
                <td className={cell}>{d.recipient}</td>
                <td className={cell}>
                  <StatePill>{d.handoff}</StatePill>
                </td>
              </tr>
            ))}
          </DataTable>
        </Reveal>

        <Reveal>
          <Note className="mt-8">
            Checks stay independent of unrelated event exceptions: a later turnstile restoration (EX-104) does not
            automatically close a separate entry-backlog exception (EX-105), and neither automatically closes a
            readiness check.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
