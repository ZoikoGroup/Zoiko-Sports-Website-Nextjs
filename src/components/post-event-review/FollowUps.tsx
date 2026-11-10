import { Reveal } from "@/components/ui/Reveal";
import { DataTable, Note, SampleTag, SectionTitle, cell, rowClass, rowHead, ruled, sectionPad, wrap } from "./shared";

type Status = "Open" | "In progress" | "Blocked";

const statusColor: Record<Status, string> = {
  Open: "text-[#9a6b00]",
  "In progress": "text-ink",
  Blocked: "text-[#b13a3a]",
};

/** Fictional sample data — illustrative only. */
const followUps: { item: string; owner: string; due: string; status: Status; updated: string }[] = [
  { item: "FU-031 · Replace Turnstile 4 reader", owner: "Northfield Arena", due: "Oct 2, 2026", status: "Open", updated: "Sep 27" },
  {
    item: "FU-032 · Confirm late-acknowledgment cause",
    owner: "Riverside League",
    due: "Oct 1, 2026",
    status: "In progress",
    updated: "Sep 27",
  },
  { item: "FU-029 · Entry lane staffing note", owner: "Northfield Arena", due: "Sep 30, 2026", status: "Blocked", updated: "Sep 26" },
];

export function FollowUps() {
  return (
    <section className={`bg-white ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">What is outstanding, who owns it, and what is due.</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="mt-9">
          <DataTable columns={["Follow-up", "Owner", "Due", "Status", "Updated"]} minWidth={860}>
            {followUps.map((f) => (
              <tr key={f.item} className={rowClass}>
                <th scope="row" className={rowHead}>
                  {f.item}
                </th>
                <td className={cell}>{f.owner}</td>
                <td className={`${cell} whitespace-nowrap font-semibold text-ink`}>{f.due}</td>
                <td className={`${cell} font-semibold ${statusColor[f.status]}`}>{f.status}</td>
                <td className={cell}>{f.updated}</td>
              </tr>
            ))}
          </DataTable>
        </Reveal>

        <Reveal>
          <Note variant="dashedCream" className="mt-8">
            An assignee submits completion with evidence; a reviewer — not the assignee — accepts, requests revision, or
            reopens it.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
