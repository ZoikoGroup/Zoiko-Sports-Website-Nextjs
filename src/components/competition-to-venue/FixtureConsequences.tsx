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
const fixtureTasks = [
  {
    fixture: "RV-026",
    start: "Sep 26 · 12:15 PDT · v3",
    action: "East entrance ramp inspection",
    owner: "Venue Operations",
    due: "09:00",
    status: "Open",
    updated: "08:40 PDT",
  },
  {
    fixture: "RV-026",
    start: "Sep 26 · 12:15 PDT · v3",
    action: "Final steward count approval",
    owner: "Event Manager",
    due: "10:00",
    status: "Pending",
    updated: "08:35 PDT",
  },
];

export function FixtureConsequences() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">A fixture plan has venue consequences.</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            When an organizer updates the planned start, affected venue tasks need an authorized review — not an assumed
            automatic change.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className="mt-9">
          <DataTable columns={["Fixture", "Scheduled start", "Required venue action", "Owner", "Due", "Status", "Updated"]}>
            {fixtureTasks.map((t) => (
              <tr key={t.action} className={rowClass}>
                <th scope="row" className={rowHead}>
                  {t.fixture}
                </th>
                <td className={`${cell} whitespace-nowrap`}>{t.start}</td>
                <td className={cell}>{t.action}</td>
                <td className={cell}>{t.owner}</td>
                <td className={cell}>{t.due}</td>
                <td className={cell}>
                  <StatePill>{t.status}</StatePill>
                </td>
                <td className={`${cell} whitespace-nowrap`}>{t.updated}</td>
              </tr>
            ))}
          </DataTable>
        </Reveal>

        <Footnote>Fixture, task and timing fields shown are fictional specimen data, not live schedule telemetry.</Footnote>
      </div>
    </section>
  );
}
