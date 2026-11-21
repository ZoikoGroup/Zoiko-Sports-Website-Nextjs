import Image from "next/image";

const workflowRows = [
  {
    time: "08:50",
    text: "14 of 16 readiness checks complete; East entrance ramp inspection due 09:00, Venue Operations.",
    badge: "READINESS",
  },
  {
    time: "10:00",
    text: "Final steward count approval due, Event Manager.",
    badge: "READINESS",
  },
  {
    time: "11:52",
    text: "Turnstile 4 offline; EX-104 created; Venue Operations, active.",
    badge: "TECHNICAL EXCEPTION",
  },
  {
    time: "12:07-12:15",
    text: "Turnstile restored; entry backlog recorded as EX-105; Competition Director approves a start window 12:15-12:25.",
    badge: "DECISION",
  },
  {
    time: "12:16-12:18",
    text: "Acknowledgments recorded across clubs and the stewarding lead.",
    badge: "ACKNOWLEDGEMENT",
  },
];

export function IllustrativeWorkflow() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Top Eyebrow Pill */}
        <div>
          <span className="inline-flex items-center rounded-full bg-[#f4f2ec] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#787285]">
            ILLUSTRATIVE WORKFLOW · FICTIONAL SAMPLE DATA
          </span>
        </div>

        {/* Header Block */}
        <div className="mt-4 max-w-[780px]">
          <h2 className="font-heading text-[clamp(1.75rem,2.8vw,2.35rem)] font-bold leading-[1.2] tracking-tight text-[#1d1433]">
            See an illustrative event workflow.
          </h2>
          <p className="mt-4 text-[15.5px] sm:text-[16px] leading-[1.7] text-[#5d5670]">
            The sport is intentionally unspecified below — it shows the pattern of one event&apos;s schedule, readiness, exceptions and decisions, not a sport-specific or live capability.
          </p>
        </div>

        {/* 2-Column Main Content */}
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10 xl:gap-12">
          {/* Left Column Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[460px] overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-md">
              <Image
                src="/images/OPERATING-MODELS/om4.png"
                alt="Volleyball player preparing to receive the ball"
                width={512}
                height={594}
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 460px"
              />
            </div>
          </div>

          {/* Right Column Activity Table */}
          <div className="overflow-hidden rounded-2xl border border-[#ded9cb] bg-white shadow-sm">
            <div className="divide-y divide-[#ebe7dc]">
              {workflowRows.map((row) => (
                <div
                  key={row.time + row.badge}
                  className="flex flex-col gap-2.5 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-4.5 hover:bg-[#faf9f6] transition-colors"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5 flex-1">
                    <span className="w-24 shrink-0 font-mono text-[13px] font-semibold text-[#1d1433]">
                      {row.time}
                    </span>
                    <span className="text-[13.5px] leading-relaxed text-[#4d4661] pr-2">
                      {row.text}
                    </span>
                  </div>
                  <div className="shrink-0 self-start sm:self-center">
                    <span className="inline-block rounded bg-[#f4f2ec] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#6d6680]">
                      {row.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footnote */}
        <p className="mt-6 text-[12px] sm:text-[12.5px] leading-relaxed text-[#868096]">
          Example owner, times and statuses are fictional and sport-neutral. No &quot;ready to open&quot; or &quot;safe to play&quot; status is ever implied.
        </p>
      </div>
    </section>
  );
}
