import { Reveal } from "@/components/ui/Reveal";
import { DataTable, Lead, SectionTitle, cell, rowClass, rowHead, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const handoffs = [
  {
    action: "Confirm steward roster",
    from: "Event Manager",
    to: "Riverside League",
    due: "10:00",
    requested: "08:35 PDT",
    state: "Pending recipient",
  },
  {
    action: "Ramp maintenance clearance",
    from: "Venue Operations",
    to: "Northfield Arena Ops",
    due: "09:00",
    requested: "08:20 PDT",
    state: "Accepted",
  },
];

export function NextAction() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Know who owns the next action.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Agree who takes the next action and record its context. A sent request is not a completed handover.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className="mt-9">
          <DataTable columns={["Requested action", "From", "To", "Due", "Requested", "State"]}>
            {handoffs.map((h) => (
              <tr key={h.action} className={rowClass}>
                <th scope="row" className={rowHead}>
                  {h.action}
                </th>
                <td className={cell}>{h.from}</td>
                <td className={cell}>{h.to}</td>
                <td className={cell}>{h.due}</td>
                <td className={`${cell} whitespace-nowrap`}>{h.requested}</td>
                <td className={`${cell} whitespace-nowrap text-[13px] font-semibold text-ink`}>{h.state}</td>
              </tr>
            ))}
          </DataTable>
        </Reveal>
      </div>
    </section>
  );
}
