import { Reveal } from "@/components/ui/Reveal";
import { DataTable, Note, SampleTag, SectionTitle, cell, rowClass, rowHead, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const followUps = [
  { task: "FU-031 · Replace Turnstile 4 reader", owner: "Northfield Arena", due: "Oct 2, 2026", status: "Open", updated: "Sep 27" },
  { task: "FU-032 · Confirm late-acknowledgment cause", owner: "Riverside League", due: "Oct 1, 2026", status: "In progress", updated: "Sep 27" },
  { task: "FU-029 · Entry lane staffing note", owner: "Northfield Arena", due: "Sep 30, 2026", status: "Blocked", updated: "Sep 26" },
];

const statusTone: Record<string, string> = {
  Open: "text-[#9a6b00]",
  "In progress": "text-ink",
  Blocked: "text-[#b42318]",
};

export function FollowUps() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">What is outstanding, who owns it, and what is due.</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="mt-8">
          <DataTable columns={["Follow-up", "Owner", "Due", "Status", "Updated"]}>
            {followUps.map((f) => (
              <tr key={f.task} className={rowClass}>
                <th scope="row" className={`${rowHead} w-[30%]`}>
                  {f.task}
                </th>
                <td className={`${cell} w-[20%]`}>{f.owner}</td>
                <td className={`${cell} w-[16.5%] text-[13px] font-semibold text-ink`}>{f.due}</td>
                <td className={`${cell} w-[16.5%] text-[13px] font-semibold ${statusTone[f.status]}`}>{f.status}</td>
                <td className={`${cell} text-[13px]`}>{f.updated}</td>
              </tr>
            ))}
          </DataTable>
        </Reveal>

        <Reveal delay={0.15}>
          <Note variant="creamDashed" className="mt-8 text-[13.5px]">
            An assignee submits completion with evidence; a reviewer — not the assignee — accepts, requests revision, or
            reopens it.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
