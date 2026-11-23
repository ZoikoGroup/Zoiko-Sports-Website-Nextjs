import Image from "next/image";

const questions = [
  {
    title: "Event format and sporting authority",
    text: "Who decides circuit racing vs. karting vs. endurance matters, and who holds sporting vs. venue authority for each.",
  },
  {
    title: "Session windows and venue ownership",
    text: "How practice, qualifying, race and support-event windows interact with circuit/venue duty-holder scheduling across time zones.",
  },
  {
    title: "Pit lane, paddock and restricted zones",
    text: "Who holds physical access and vehicle-movement authority, and how local safety procedures are documented.",
  },
  {
    title: "Decision version and positive acknowledgment",
    text: "What the human approver is, and how a sent update differs from a received, positively acknowledged one.",
  },
  {
    title: "Concurrent venue handovers",
    text: "How multiple sessions, support events and pit/garage turnovers share a venue without an automated allocation engine.",
  },
  {
    title: "Driver and vehicle records",
    text: "Whether any coordinator-held generally needs vehicle or driver information, and how sensitive or youth data is excluded.",
  },
] as const;

const steps = [
  {
    label: "01 · Plan",
    title:
      "Session windows, circuit/paddock/pit-garage zones, participating organizations and owners agreed ahead of competition day.",
    example:
      "Example: Riverside League and Northfield Arena confirm scope for one race weekend session block.",
  },
  {
    label: "02 · Prepare",
    title:
      "Owned circuit, paddock and pit-lane checks tracked against a due time — pending is not failed.",
    example:
      "14 of 16 checks complete at 08:50. East pit-lane inspection due 09:00 · Venue Ops.",
  },
  {
    label: "03 · Coordinate",
    title:
      "An event-day exception, a human decision, and a tracked acknowledgment.",
    example:
      "11:52 turnstile offline (EX-104) → 12:07 restored → 12:10 entry backlog (EX-105) → 12:15 Competition Director approves a hold 12:15–12:25 → 12:16/12:18 acknowledged.",
  },
  {
    label: "04 · Review",
    title: "Follow-up ownership without an inferred result impact.",
    example:
      "Sep 27 09:00 review. Turnstile reader follow-up assigned to Venue Ops, due Oct 2.",
  },
] as const;

const timeline = [
  {
    n: "1",
    title: "Requested",
    text: "A revised session window is requested after a venue-area interruption.",
  },
  {
    n: "2",
    title: "Approved",
    text: "Approved by the Competition Director, recorded with actor and time.",
  },
  {
    n: "3",
    title: "Sent",
    text: "Update sent to affected organizations — send is not receipt.",
  },
  {
    n: "4",
    title: "Acknowledged",
    text: "2 of 2 recipients acknowledged; outstanding acknowledgments stay visible.",
  },
] as const;

export default function Review() {
  return (
    <div className="w-full bg-white text-[#2A1F4D] antialiased">
      {/* Research questions */}
      <section
        id="research"
        className="w-full bg-[#F5F3EE] py-16 text-[#1E1A3B] antialiased sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <span className="inline-block rounded-full bg-[#EAE8E1] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.06em] text-[#7C788C]">
            Research questions · Not shipped features
          </span>

          <h2 className="mt-5 max-w-[560px] text-[28px] font-bold leading-[1.25] tracking-[-0.01em] text-[#2A1F4D] sm:text-[32px] lg:text-[34px]">
            What a motorsport review would need to establish.
          </h2>
          <p className="mt-4 max-w-[640px] text-[13px] leading-[1.65] text-[#3D3857] sm:text-[14px]">
            Circuit racing, rally, karting and endurance carry different
            authorities and physical layouts. These are open questions for a
            qualified review — not a checklist of supported capability.
          </p>

          <div className="mt-10 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[3fr_1fr]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {questions.map((q) => (
                <div
                  key={q.title}
                  className="rounded-lg border border-[#E3E0D8] bg-white px-5 py-5 shadow-[0_1px_3px_rgba(42,31,77,0.06)]"
                >
                  <h3 className="text-[12px] font-bold leading-[1.4] text-[#2A1F4D]">
                    {q.title}
                  </h3>
                  <p className="mt-2 text-[11px] leading-[1.55] text-[#5C5873]">
                    {q.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative h-[320px] w-full overflow-hidden rounded-xl lg:h-auto lg:min-h-[300px]">
              <Image
                src="/images/motorsport/3.png"
                alt="Motorcycle racers cornering together on a circuit"
                fill
                sizes="(min-width: 1024px) 25vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section
        id="workflow"
        className="w-full border-y border-[#E3E0D8] bg-[#FFFFFF] py-16 text-[#1E1A3B] antialiased sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <span className="inline-block rounded-full bg-[#EAE8E1] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.06em] text-[#7C788C]">
            Illustrative workflow · Fictional sample data
          </span>

          <h2 className="mt-5 text-[28px] font-bold leading-[1.25] tracking-[-0.01em] text-[#2A1F4D] sm:text-[32px] lg:text-[34px]">
            Plan → Prepare → Coordinate → Review.
          </h2>
          <p className="mt-4 max-w-[640px] text-[13px] leading-[1.65] text-[#3D3857] sm:text-[14px]">
            The event type is intentionally unspecified in the example below —
            it shows the pattern of one event lifecycle, not a
            motorsport-specific product capability.
          </p>

          <div className="mt-10 grid grid-cols-1 border border-[#E3E0D8] bg-[#F5F3EE] sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.label}
                className={`flex flex-col px-5 py-5 ${
                  i !== 0 ? "border-t border-[#E3E0D8]" : ""
                } ${i % 2 === 1 ? "sm:border-l sm:border-[#E3E0D8]" : ""} ${
                  i === 1 ? "sm:border-t-0" : ""
                } ${
                  i !== 0 ? "lg:border-l lg:border-t-0 lg:border-[#E3E0D8]" : ""
                }`}
              >
                <p className="text-[10px] tracking-[0.02em] text-[#8A869B]">
                  {step.label}
                </p>
                <p className="mt-4 text-[12px] leading-[1.55] text-[#2A1F4D]">
                  {step.title}
                </p>
                <div className="mt-4 border-t border-[#E3E0D8] pt-4">
                  <p className="text-[11px] leading-[1.65] text-[#8A869B]">
                    {step.example}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[10px] italic leading-[1.5] text-[#8A869B]">
            Example owners, times and statuses are fictional and sport-neutral —
            not evidence of a motorsport feature.
          </p>
        </div>
      </section>

      {/* Requested, approved, acknowledged */}
      <section
        id="acknowledged"
        className="w-full bg-[#F5F3EE] pb-16 pt-16 text-[#1E1A3B] antialiased sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <h2 className="text-[28px] font-bold leading-[1.25] tracking-[-0.01em] text-[#2A1F4D] sm:text-[32px] lg:text-[34px]">
            Who requested, approved and acknowledged?
          </h2>
          <p className="mt-4 max-w-[640px] text-[13px] leading-[1.65] text-[#3D3857] sm:text-[14px]">
            A sent update is not the same as a human receipt. The fictional
            example below separates the two.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-8">
            <div className="relative h-[320px] w-full overflow-hidden rounded-xl sm:h-[380px] lg:h-[420px]">
              <Image
                src="/images/motorsport/4.png"
                alt="Two motorcycle racers side by side on a circuit"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center gap-6 rounded-xl border border-[#E3E0D8] bg-white px-6 py-8 sm:px-8">
              {timeline.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2A1F4D] text-[11px] font-semibold text-white">
                    {item.n}
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold italic leading-[1.4] text-[#2A1F4D]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[12px] leading-[1.55] text-[#5C5873]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
