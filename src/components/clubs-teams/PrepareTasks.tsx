import { Reveal } from "@/components/ui/Reveal";
import { Footnote, Lead, Photo, SampleTag, SectionTitle, Tag, cream, line, altBg, ruled, sectionPad, wrap } from "./shared";

const columns = ["Task", "Assigned", "Due", "Status"];

const tasks = [
  { task: "CP-021 · Confirm team travel arrival window", assigned: "Club Secretary", due: "Sep 24", status: "In progress" },
  { task: "CP-022 · Acknowledge current fixture version", assigned: "Event-Day Lead", due: "as issued", status: "Not started" },
];

export function PrepareTasks() {
  return (
    <section id="club-workflow" className={`scroll-mt-24 ${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">Prepare against assigned tasks, not venue certification.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            Club preparation tasks, owners, due times and the venue dependency each one relies on.
          </Lead>
        </Reveal>

        <div className="mt-9 grid items-start gap-6 lg:grid-cols-[520px_1fr]">
          <Reveal delay={0.1}>
            <Photo
              src="/images/clubs-teams/tasks-basketball-drive.webp"
              alt="Basketball player in a gold jersey driving to the basket"
              sizes="(min-width: 1024px) 520px, 95vw"
              className="aspect-[519/242] w-full"
            />
          </Reveal>

          <Reveal delay={0.15}>
            <div className={`overflow-x-auto rounded-2xl border ${line} bg-white`}>
              <table className="w-full min-w-[620px] text-left">
                <thead className={cream}>
                  <tr>
                    {columns.map((c) => (
                      <th
                        key={c}
                        scope="col"
                        className="px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink/45"
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((t) => (
                    <tr
                      key={t.task}
                      className="border-t border-[#ebe9df] text-[14px] text-ink-muted transition-colors duration-200 hover:bg-[#fbfaf6]"
                    >
                      <th scope="row" className="max-w-[230px] px-4 py-4 font-heading font-semibold text-ink">
                        {t.task}
                      </th>
                      <td className="px-4 py-4">{t.assigned}</td>
                      <td className="px-4 py-4">{t.due}</td>
                      <td className="px-4 py-4">
                        <Tag>{t.status}</Tag>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <Footnote className="mt-8">
            Status legend: Not started · In progress · Awaiting approval · Completed · Blocked · Past due. A completed
            task is never a venue safety certification.
          </Footnote>
        </Reveal>
      </div>
    </section>
  );
}
