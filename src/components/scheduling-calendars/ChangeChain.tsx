import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cream, divider, Label, Lead, line, sectionPad, SectionTitle, wrap } from "./shared";

const steps = [
  {
    title: "Proposed",
    text: "A schedule or venue change is proposed by an assigned organizer, club or venue contact.",
  },
  {
    title: "Authorized decision",
    text: "The competition director or equivalent approves or denies it for their own event only.",
  },
  {
    title: "Distributed",
    text: "The approved version is sent to permitted recipient organizations — sent is not received.",
  },
  {
    title: "Acknowledged",
    text: "A named person confirms receipt. External RSVP never substitutes for this step.",
  },
];

const lifecycle = [
  "Draft",
  "Requested",
  "Reviewed",
  "Approved",
  "Published",
  "Delivered",
  "Acknowledged",
  "Superseded",
];

export function ChangeChain() {
  return (
    <section className={`bg-white ${divider} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal className="max-w-[770px]">
          <SectionTitle className="max-w-[600px]">Propose → decide → distribute → acknowledge.</SectionTitle>
          <Lead className="mt-4">
            An external calendar RSVP is never read as approval, and a sent update is never read as a human receipt.
            The decision maker stays distinct from the connector that carried the message.
          </Lead>
        </Reveal>

        <RevealGroup className={`mt-9 overflow-hidden rounded-xl border ${line} ${cream}`}>
          {steps.map((s, i) => (
            <RevealItem
              key={s.title}
              className={`group flex gap-4 px-6 py-5 transition-colors duration-300 hover:bg-white ${
                i > 0 ? `border-t ${line}` : ""
              }`}
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#24163A] text-[11px] font-bold text-brand-yellow transition-transform duration-300 group-hover:scale-110">
                {i + 1}
              </span>
              <div>
                <h3 className="font-heading text-[14.5px] font-semibold text-ink">{s.title}</h3>
                <p className="mt-0.5 text-[13.5px] leading-[1.55] text-ink-muted">{s.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-8">
          <Label>Full change-record lifecycle</Label>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {lifecycle.map((l) => (
              <li
                key={l}
                className={`rounded-full border ${line} px-4 py-2 text-[13px] font-medium text-ink/80 transition-colors duration-300 hover:border-ink hover:text-ink`}
              >
                {l}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
