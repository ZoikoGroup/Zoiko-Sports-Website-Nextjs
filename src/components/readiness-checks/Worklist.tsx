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
    evidence: "Evidence pending",
    updated: "08:40 PDT",
  },
  {
    check: "Final steward count approval",
    owner: "Event Manager",
    due: "10:00 PDT",
    state: "Pending",
    evidence: "Awaiting submission",
    updated: "08:35 PDT",
  },
  { check: "PA test", owner: "Venue Operations", due: "—", state: "Recorded complete", evidence: "Reviewed", updated: "07:55 PDT" },
  {
    check: "Stewarding plan sign-off",
    owner: "Event Manager",
    due: "—",
    state: "Recorded complete",
    evidence: "Reviewed",
    updated: "08:10 PDT",
  },
];

export function Worklist() {
  return (
    <section className={`bg-white ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">See the checks your organization is responsible for.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            Checks are scoped to event, owner organization, due time and status — never a free-text label.
            <br className="hidden md:block" /> Worklist columns continue with requirement detail, assigned role and
            available actions.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className="mt-9">
          <DataTable columns={["Check", "Owner organization", "Due (local)", "State", "Evidence / review", "Updated"]}>
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
                <td className={cell}>{c.evidence}</td>
                <td className={`${cell} whitespace-nowrap`}>{c.updated}</td>
              </tr>
            ))}
          </DataTable>
        </Reveal>

        <Footnote>
          Empty view: &quot;No checks match this view. Clear filters or choose another authorized event.&quot; Checks,
          owners and timestamps shown are fictional specimen data.
        </Footnote>
      </div>
    </section>
  );
}
