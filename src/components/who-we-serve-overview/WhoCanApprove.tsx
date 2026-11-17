import { Reveal } from "@/components/ui/Reveal";
import { cream, Kicker, Lead, line, sectionPad, SectionTitle, wrap } from "./shared";

const rows = [
  { org: "Organizer", request: "—", approve: "Competition Director", acknowledge: "—" },
  { org: "Venue", request: "Venue Operations", approve: "—", acknowledge: "—" },
  { org: "Club", request: "—", approve: "—", acknowledge: "Event-Day Lead" },
];

const headers = ["Organization", "Request a change", "Approve a change", "Acknowledge an update"];
const cols = "grid-cols-[1.3fr_1fr_1fr_1fr]";

export function WhoCanApprove() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Who can view, change or approve?</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            A request, an approval and an acknowledgment stay separate records with separate actors — never a single
            shared action.
          </Lead>
        </Reveal>

        <Reveal delay={0.15}>
          <div className={`mt-9 overflow-x-auto rounded-2xl border ${line} bg-white`}>
            <div className="min-w-[640px]">
              <div className={`grid gap-4 border-b ${line} ${cream} px-4 py-4 ${cols}`}>
                {headers.map((h) => (
                  <Kicker key={h} className="text-[10.5px]">
                    {h}
                  </Kicker>
                ))}
              </div>
              {rows.map((r, i) => (
                <div
                  key={r.org}
                  className={`grid items-center gap-4 px-4 py-4 text-[13.5px] text-ink-muted transition-colors duration-200 hover:bg-[#fbfaf6] ${cols} ${i > 0 ? "border-t border-[#ebe9df]" : ""}`}
                >
                  <p className="font-heading text-[14px] font-semibold text-ink">{r.org}</p>
                  <p>{r.request}</p>
                  <p>{r.approve}</p>
                  <p>{r.acknowledge}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            className={`mt-8 rounded-2xl border border-dashed ${line} ${cream} px-6 py-5 text-[13.5px] leading-[1.65] text-ink-muted`}
          >
            A request for another organization&apos;s private record receives &quot;Related record unavailable&quot; —
            never a reason that reveals restricted content.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
