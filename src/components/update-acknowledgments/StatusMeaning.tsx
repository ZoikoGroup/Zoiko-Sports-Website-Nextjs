import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, SectionTitle, altBg, ruled, sectionPad, wrap } from "./shared";

const layers = [
  {
    label: "Transport state",
    states: [
      { name: "Not attempted", text: "No send has been initiated yet." },
      { name: "Queued", text: "Waiting to be processed by a supported channel." },
      { name: "Sent", text: "Submitted to a channel. Submission is not proof of receipt." },
    ],
  },
  {
    label: "Delivery evidence",
    states: [
      { name: "Provider accepted", text: "The channel acknowledged receiving the message for transit." },
      { name: "Delivered", text: "A supported channel returned evidence of delivery — not that anyone has read it." },
      { name: "Failed", text: "The channel reported it could not deliver the message." },
      { name: "Unknown", text: "Evidence is insufficient. Never shown as delivered or acknowledged." },
    ],
  },
  {
    label: "Authenticated human response",
    states: [
      { name: "Pending", text: "No response has been recorded yet for the current version." },
      { name: "Acknowledged", text: "A recorded, attributable action by an authenticated recipient." },
      { name: "Unable / clarification", text: "The recipient could not truthfully acknowledge, or asked a question first." },
      { name: "Superseded", text: "A newer revision replaced the one this response applied to." },
    ],
  },
];

export function StatusMeaning() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Which status actually means what?</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            A status describes what is actually known at that moment — never a feeling of certainty. Transport, delivery
            and human response are tracked as three independent layers.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-0.5 md:grid-cols-3">
          {layers.map((l) => (
            <RevealItem key={l.label} className="h-full border border-[#DEDAD0] bg-white px-5 pb-6 pt-6">
              <Kicker className="pb-4 text-[11px]">{l.label}</Kicker>
              <dl>
                {l.states.map((s) => (
                  <div key={s.name} className="border-t border-[#ebe9df] py-2.5">
                    <dt className="font-heading text-[14px] font-semibold text-ink">{s.name}</dt>
                    <dd className="mt-0.5 text-[12.5px] leading-[1.5] text-ink-muted">{s.text}</dd>
                  </div>
                ))}
              </dl>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15}>
          <p className="mt-8 rounded-2xl border border-[#DEDAD0] bg-white px-6 py-5 text-[13.5px] text-ink-muted">
            &ldquo;Delivered to supported channel&rdquo; vs. &ldquo;Acknowledged by required recipient.&rdquo; Status is
            never inferred from color or icon alone.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
