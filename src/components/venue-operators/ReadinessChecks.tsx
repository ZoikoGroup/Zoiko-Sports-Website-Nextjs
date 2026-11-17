import { Reveal } from "@/components/ui/Reveal";
import { altBg, cream, Footnote, Kicker, Lead, line, ruled, SampleTag, sectionPad, SectionTitle, Tag, wrap } from "./shared";

const checks = [
  {
    check: "East entrance ramp inspection",
    area: "East entrance",
    owner: "Venue Operations",
    due: "09:00 PDT",
    state: "Open",
    updated: "08:40 PDT",
  },
  {
    check: "Final steward count approval",
    area: "Stewarding",
    owner: "Event Manager",
    due: "10:00 PDT",
    state: "Pending",
    updated: "08:35 PDT",
  },
  { check: "PA test", area: "Concourse", owner: "Venue Operations", due: "—", state: "Recorded complete", updated: "07:55 PDT" },
  {
    check: "Stewarding plan sign-off",
    area: "Stewarding",
    owner: "Event Manager",
    due: "—",
    state: "Recorded complete",
    updated: "08:10 PDT",
  },
];

const headers = ["Check", "Area", "Owner organization", "Due (local)", "State", "Updated"];
const cols = "grid-cols-[1.5fr_1fr_1.2fr_0.9fr_1fr_0.7fr]";

export function ReadinessChecks() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">Know which readiness checks are open, and who owns them.</SectionTitle>
          <Lead className="mt-4 max-w-[700px] text-[15.5px]">
            Checks are scoped to event, area, owner, due time and status — never a free-text label, and a completion
            count is a coordination indicator, not a safety score.
          </Lead>
        </Reveal>

        <Reveal delay={0.15}>
          <div className={`mt-9 overflow-x-auto rounded-2xl border ${line} bg-white`}>
            <div className="min-w-[900px]">
              <div className={`grid gap-4 border-b ${line} ${cream} px-4 py-4 ${cols}`}>
                {headers.map((h) => (
                  <Kicker key={h} className="text-[10.5px]">
                    {h}
                  </Kicker>
                ))}
              </div>
              {checks.map((c, i) => (
                <div
                  key={c.check}
                  className={`grid items-center gap-4 px-4 py-4 text-[13.5px] text-ink-muted transition-colors duration-200 hover:bg-[#fbfaf6] ${cols} ${i > 0 ? "border-t border-[#ebe9df]" : ""}`}
                >
                  <p className="font-heading text-[14px] font-semibold text-ink">{c.check}</p>
                  <p>{c.area}</p>
                  <p>{c.owner}</p>
                  <p>{c.due}</p>
                  <Tag className="w-fit">{c.state}</Tag>
                  <p>{c.updated}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <Footnote>
            Checks, owners and timestamps shown are fictional specimen data. A recorded check status never certifies the
            venue as safe to open.
          </Footnote>
        </Reveal>
      </div>
    </section>
  );
}
