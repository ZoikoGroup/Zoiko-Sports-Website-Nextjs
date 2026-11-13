import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Footnote, Lead, SampleTag, SectionTitle, Tag, cream, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const events = [
  { time: "11:52", text: "Turnstile 4 offline. EX-104 created, Venue Operations, active.", tag: "Exception" },
  { time: "12:10", text: "Entry backlog remains. EX-105 recorded, delay requested.", tag: "Exception" },
  {
    time: "12:15",
    text: "Competition start approved 12:15 → 12:25 PDT by the Riverside League Competition Director.",
    tag: "Decision",
  },
  { time: "12:16", text: "Update v2 shared with officials, both clubs and the stewarding lead.", tag: "Update shared" },
  { time: "12:16", text: "Officials and both clubs acknowledge update v2.", tag: "Acknowledged" },
  {
    time: "12:18",
    text: "Stewarding lead acknowledges. All required recipient groups have now responded.",
    tag: "Acknowledged",
  },
];

export function WhatChanged() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">What changed between 12:15 and 12:18?</SectionTitle>
          <Lead className="mt-4 max-w-[680px] text-[15.5px]">
            The decision, the communication and each recorded acknowledgment are kept as separate, timestamped facts.
          </Lead>
        </Reveal>

        <RevealGroup className={`mt-9 overflow-hidden rounded-2xl border border-[#DEDAD0] ${cream}`}>
          {events.map((e, i) => (
            <RevealItem
              key={`${e.time}-${i}`}
              className={`grid grid-cols-[64px_1fr] items-center gap-x-4 gap-y-2 px-6 py-5 transition-colors duration-200 hover:bg-[#f1efe7] md:grid-cols-[88px_1fr_auto] ${
                i > 0 ? "border-t border-[#ebe9df]" : ""
              }`}
            >
              <p className="font-heading text-[13px] font-semibold text-ink/45">{e.time}</p>
              <p className="text-[14.5px] text-ink-muted">{e.text}</p>
              <div className="col-start-2 md:col-start-3 md:mr-10">
                <Tag className="bg-white text-ink">{e.tag}</Tag>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Footnote className="mt-9">EX-104, EX-105 and all actors, times and organizations shown are fictional specimen data.</Footnote>
      </div>
    </section>
  );
}
