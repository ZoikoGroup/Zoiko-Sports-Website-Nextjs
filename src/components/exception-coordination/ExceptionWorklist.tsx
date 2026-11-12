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
const exceptions = [
  {
    ref: "EX-104",
    summary: "Turnstile 4 offline",
    linked: "—",
    owner: "Venue Operations",
    status: "Restored",
    changed: "Sep 26, 12:07 PDT",
    next: "Replace reader · due Oct 2",
  },
  {
    ref: "EX-105",
    summary: "Entry backlog remains",
    linked: "EX-104",
    owner: "Venue Operations",
    status: "Active · delay requested",
    changed: "Sep 26, 12:10 PDT",
    next: "Awaiting review",
  },
];

export function ExceptionWorklist() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">Exceptions requiring coordination.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            A proposed worklist, scoped to the authorized organization — not a cross-organization feed.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className="mt-9">
          <DataTable
            columns={["Exception", "Summary", "Linked impact", "Owner org / role", "Status", "Changed", "Next action"]}
            minWidth={1040}
          >
            {exceptions.map((e) => (
              <tr key={e.ref} className={rowClass}>
                <th scope="row" className={rowHead}>
                  {e.ref}
                </th>
                <td className={cell}>{e.summary}</td>
                <td className={cell}>{e.linked}</td>
                <td className={cell}>{e.owner}</td>
                <td className={cell}>
                  <StatePill>{e.status}</StatePill>
                </td>
                <td className={`${cell} whitespace-nowrap`}>{e.changed}</td>
                <td className={cell}>{e.next}</td>
              </tr>
            ))}
          </DataTable>
        </Reveal>

        <Footnote>All identifiers, names and counts above are fictional specimen data.</Footnote>
      </div>
    </section>
  );
}
