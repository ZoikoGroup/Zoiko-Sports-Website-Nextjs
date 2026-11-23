import Image from "next/image";

const focusItems = [
  "Event-day session schedule and circuit, paddock and pit-lane area dependencies for one event weekend",
  "Circuit, paddock and pit-lane readiness checks tied to an owner and a due time",
  "Event-day exceptions and the decision that resolves them",
  "Approvals, decisions and acknowledgment records for one event",
] as const;

const handoffs = [
  {
    title: "Competition organizer / series",
    incoming: "An event's session schedule or circuit/venue-zone changes.",
    next: "Confirm the updated schedule with every affected team and circuit.",
    note: "A proposed change is recorded, not auto-applied.",
  },
  {
    title: "Circuit / venue operations",
    incoming:
      "Readiness checks due ahead of a session window, including pit-lane and paddock handover.",
    next: "Confirm owned checks and flag what's outstanding.",
    note: "A completed check is not a safety certification or track-state authorization.",
  },
  {
    title: "Club / team operations",
    incoming: "A notification about a session, timing or access change.",
    next: "Acknowledge receipt so the sender has a record.",
    note: "Sent is not the same as received or acknowledged.",
  },
] as const;

const pillars = [
  {
    label: "01 · Schedule",
    text: "Event window, circuit/pit-lane areas and the organizations responsible for each part.",
  },
  {
    label: "02 · Readiness",
    text: "Circuit, paddock and pit-lane checks, owners and due times — tracked as status, not certification.",
  },
  {
    label: "03 · Exceptions",
    text: "What changed on event day, who owns it, and what was decided.",
  },
  {
    label: "04 · Decisions",
    text: "Who requested, who approved, and who received and acknowledged — kept as a record that's kept.",
  },
] as const;

export default function Approach() {
  return (
    <div className="w-full bg-white text-[#2A1F4D] antialiased">
      {/* Approach, not a published capability */}
      <section
        id="approach"
        className="w-full bg-white py-16 text-[#1E1A3B] antialiased sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <h2 className="max-w-[640px] text-[28px] font-bold leading-[1.25] tracking-[-0.01em] text-[#2A1F4D] sm:text-[32px] lg:text-[34px]">
            This page describes an approach, not a published capability.
          </h2>
          <p className="mt-5 max-w-[720px] text-[13px] leading-[1.65] text-[#3D3857] sm:text-[14px]">
            Circuit racing, rally, karting, endurance and other motorsport
            formats are not yet validated on Zoiko Sports. Each format has its
            own session, zone and authority model, and none is validated here.
            The content below explains how a scoped conversation could work — it
            is not a race-control, timing or telemetry product, and it does not
            confirm that any motorsport discipline is currently supported.
          </p>

          <div className="mt-10 grid grid-cols-1 overflow-hidden rounded-lg border border-[#E3E0D8] md:grid-cols-2">
            <div className="flex flex-col justify-center bg-[#F5F3EE] px-6 py-6 sm:px-8">
              <p className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[#8A869B]">
                Initial operating focus
              </p>
              <ul className="mt-4 flex flex-col">
                {focusItems.map((item, i) => (
                  <li
                    key={item}
                    className={`py-3 text-[12px] font-medium leading-[1.5] text-[#2A1F4D] ${
                      i !== 0 ? "border-t border-[#E3E0D8]" : ""
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-[280px] w-full md:h-auto md:min-h-[260px]">
              <Image
                src="/images/motorsport/2.png"
                alt="Motorcycle racer leaning into a corner"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Operating work between events and circuits */}
      <section
        id="operating-work"
        className="w-full border-y border-[#E3E0D8] bg-[#F5F3EE] py-16 text-[#1E1A3B] antialiased sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <h2 className="max-w-[640px] text-[28px] font-bold leading-[1.25] tracking-[-0.01em] text-[#2A1F4D] sm:text-[32px] lg:text-[34px]">
            The operating work between events and circuits.
          </h2>
          <p className="mt-5 max-w-[720px] text-[13px] leading-[1.65] text-[#3D3857] sm:text-[14px]">
            A motorsport event touches several organizations before, during and
            after competition. These are examples of the kind of handoff a
            scoped conversation could cover — not a description of shipped
            motorsport features.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {handoffs.map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-lg border border-[#E3E0D8] bg-white px-6 py-6"
              >
                <h3 className="text-[13px] font-bold leading-[1.4] text-[#2A1F4D]">
                  {card.title}
                </h3>

                <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.06em] text-[#8A869B]">
                  Incoming
                </p>
                <p className="mt-1 text-[12px] leading-[1.5] text-[#2A1F4D]">
                  {card.incoming}
                </p>

                <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.06em] text-[#8A869B]">
                  Accountable next step
                </p>
                <p className="mt-1 text-[12px] leading-[1.5] text-[#2A1F4D]">
                  {card.next}
                </p>

                <p className="mt-5 border-t border-[#ECE9E2] pt-3 text-[10px] italic leading-[1.5] text-[#8A869B]">
                  {card.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four operating pillars */}
      <section
        id="pillars"
        className="w-full bg-white py-16 text-[#1E1A3B] antialiased sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <h2 className="max-w-[520px] text-[28px] font-bold leading-[1.25] tracking-[-0.01em] text-[#2A1F4D] sm:text-[32px] lg:text-[34px]">
            Four operating pillars, reused across every sport.
          </h2>
          <p className="mt-5 max-w-[640px] text-[13px] leading-[1.65] text-[#3D3857] sm:text-[14px]">
            This is the same operating logic described across Zoiko Sports — its
            applicability to a motorsport event is conditional on the review
            above, not assumed.
          </p>

          <div className="mt-10 grid grid-cols-1 border border-[#E3E0D8] bg-[#F5F3EE] sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item, i) => (
              <div
                key={item.label}
                className={`px-5 py-5 ${
                  i !== 0 ? "border-t border-[#E3E0D8]" : ""
                } ${i % 2 === 1 ? "sm:border-l sm:border-[#E3E0D8]" : ""} ${
                  i === 1 ? "sm:border-t-0" : ""
                } ${
                  i !== 0 ? "lg:border-l lg:border-t-0 lg:border-[#E3E0D8]" : ""
                }`}
              >
                <p className="text-[10px] tracking-[0.02em] text-[#8A869B]">
                  {item.label}
                </p>
                <p className="mt-3 text-[12px] leading-[1.55] text-[#2A1F4D]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
