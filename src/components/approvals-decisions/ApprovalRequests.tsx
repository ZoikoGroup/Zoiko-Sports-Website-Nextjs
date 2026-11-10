import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SampleTag, SectionTitle, card, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const requestStats = [
  { value: 3, label: "Awaiting my decision" },
  { value: 1, label: "Changes requested" },
  { value: 2, label: "Due soon" },
  { value: 8, label: "Closed" },
];

/** Fictional sample data — illustrative only. */
const requests: {
  request: string;
  event: string;
  requestedBy: string;
  assignedTo: string;
  due: string;
  status: RequestStatus;
}[] = [
  {
    request: "Start-time change",
    event: "Riverside Invitational",
    requestedBy: "Venue Operations",
    assignedTo: "Competition Director",
    due: "Sep 26, 12:15 PDT",
    status: "Awaiting decision",
  },
  {
    request: "Steward count sign-off",
    event: "Riverside Invitational",
    requestedBy: "Northfield Arena Ops",
    assignedTo: "Competition Director",
    due: "Sep 26, 11:40 PDT",
    status: "Pending",
  },
  {
    request: "Gate reopening confirmation",
    event: "Fairview Classic",
    requestedBy: "Venue Operations",
    assignedTo: "Competition Director",
    due: "Sep 26, 09:05 PDT",
    status: "Changes requested",
  },
  {
    request: "Entry capacity adjustment",
    event: "Riverside Invitational",
    requestedBy: "Venue Operations",
    assignedTo: "Competition Director",
    due: "Sep 25, 18:20 PDT",
    status: "Closed",
  },
];

type RequestStatus = "Awaiting decision" | "Pending" | "Changes requested" | "Closed";

const statusStyle: Record<RequestStatus, string> = {
  "Awaiting decision": "bg-brand-yellow/25 text-ink",
  Pending: "bg-[#efede6] text-ink/80",
  "Changes requested": "bg-[#d24a4a]/10 text-[#b13a3a]",
  Closed: "bg-[#efede6] text-ink/55",
};

const columns = ["Request", "Event", "Requested by", "Assigned to", "Due", "Status"];

export function ApprovalRequests() {
  return (
    <section className={`border-y border-[#ebe9df] bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">Approval requests, in one authorized view.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            Find urgent and relevant requests without seeing unrelated organizations or losing the event context.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {requestStats.map((s) => (
            <RevealItem key={s.label} className={`${card} px-5 py-5`}>
              <p className="font-heading text-[26px] font-bold leading-none text-ink">{s.value}</p>
              <p className="mt-3 text-[13.5px] text-ink-muted">{s.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-8 overflow-x-auto rounded-2xl border border-[#DEDAD0]">
          <table className="w-full min-w-[900px] text-left">
            <thead className="bg-[#f6f4ee]">
              <tr>
                {columns.map((c) => (
                  <th
                    key={c}
                    scope="col"
                    className="px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink/45 first:pl-6"
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {requests.map((r) => (
                <tr
                  key={r.request}
                  className="border-t border-[#ebe9df] text-[14px] text-ink-muted transition-colors duration-200 hover:bg-[#fbfaf6]"
                >
                  <th scope="row" className="py-4 pl-6 pr-4 font-heading font-semibold text-ink">
                    {r.request}
                  </th>
                  <td className="px-4 py-4">{r.event}</td>
                  <td className="px-4 py-4">{r.requestedBy}</td>
                  <td className="px-4 py-4">{r.assignedTo}</td>
                  <td className="whitespace-nowrap px-4 py-4">{r.due}</td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-[12px] font-semibold ${statusStyle[r.status]}`}
                    >
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <p className="mt-7 text-[13px] text-ink/45">
          All request references, names and counts above are fictional specimen data.
        </p>
      </div>
    </section>
  );
}
