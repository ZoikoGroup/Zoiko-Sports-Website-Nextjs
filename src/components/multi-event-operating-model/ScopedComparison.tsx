import { Reveal } from "@/components/ui/Reveal";
import { DataTable, Lead, SectionTitle, cell, rowClass, rowHead, sectionPad, wrap } from "./shared";

const nv = "Not verified";

/** Fictional sample data — illustrative only. */
const rows = [
  {
    name: "Riverside Invitational",
    checks: "14 / 16",
    exceptions: "1 open (EX-105)",
    approvals: "1 recorded",
    coverage: "Available — you are authorized",
  },
  {
    name: "Example Fixture 2 — not an actual event",
    checks: nv,
    exceptions: nv,
    approvals: nv,
    coverage: "Not available — event not yet confirmed",
  },
  {
    name: "Example Fixture 3 — not an actual event",
    checks: "—",
    exceptions: "—",
    approvals: "—",
    coverage: "Not authorized for your organization",
  },
];

export function ScopedComparison() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[760px]">
            See scoped records side by side — only when you are authorized for each event.
          </SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Unknown is shown as unknown. It is never treated as zero, and it is never estimated.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className="mt-9">
          <DataTable
            columns={["Event", "Checks", "Exceptions", "Approvals", "Coverage"]}
            minWidth={980}
            headBg="bg-[#ece7df]"
          >
            {rows.map((r) => (
              <tr key={r.name} className={rowClass}>
                <th scope="row" className={rowHead}>
                  {r.name}
                </th>
                <td className={cell}>{r.checks}</td>
                <td className={cell}>{r.exceptions}</td>
                <td className={cell}>{r.approvals}</td>
                <td className={`${cell} text-[13.5px]`}>{r.coverage}</td>
              </tr>
            ))}
          </DataTable>
        </Reveal>
      </div>
    </section>
  );
}
