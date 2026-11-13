import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, SectionTitle, TextLink, altBg, ruled, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const timeline = [
  { time: "11:52", text: "Turnstile 4 outage logged (EX-104), assigned to Northfield Arena Venue Operations." },
  { time: "12:07", text: "Turnstile 4 restored; entry backlog persists as a separate exception (EX-105)." },
  { time: "12:15", text: "Riverside League Competition Director approves moving kickoff from 12:15 to 12:25." },
  { time: "12:16–12:18", text: "Officials and clubs acknowledge the change; stewarding lead acknowledges last, at 12:18." },
];

export function EventDay() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <Kicker>Event Day</Kicker>
          <SectionTitle className="mt-3 max-w-[760px]">
            When plans change, keep the issue, the owner and the decision distinct.
          </SectionTitle>
          <Lead className="mt-4 max-w-[720px] text-[15.5px]">
            Sharing an update is not the same as getting an acknowledgment. Track what changed, who it was assigned to,
            and who authorized the response.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 overflow-hidden rounded-2xl border border-[#DEDAD0] bg-white">
          {timeline.map((t, i) => (
            <RevealItem
              key={t.time}
              className={`grid gap-1 px-6 py-[18px] transition-colors duration-200 hover:bg-[#fbfaf6] sm:grid-cols-[114px_1fr] sm:gap-0 ${
                i > 0 ? "border-t border-[#ebe9df]" : ""
              }`}
            >
              <p className="font-heading text-[13px] font-semibold tabular-nums text-ink/40">{t.time}</p>
              <p className="text-[14.5px] text-ink-muted">{t.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <TextLink href="/solutions/exception-coordination">See the full exception workflow</TextLink>
      </div>
    </section>
  );
}
