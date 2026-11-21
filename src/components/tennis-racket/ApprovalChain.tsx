import Image from "next/image";

const steps = [
  {
    num: "1",
    title: "Requested",
    description: "A revised match window is requested after a court or venue interruption.",
  },
  {
    num: "2",
    title: "Approved",
    description: "Approved by the Competition Director, recorded with actor and time.",
  },
  {
    num: "3",
    title: "Sent",
    description: "Update sent to affected organizations — sent is not received.",
  },
  {
    num: "4",
    title: "Acknowledged",
    description: "2 of 2 recipients acknowledged; outstanding acknowledgments stay visible.",
  },
];

export function ApprovalChain() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Header Block */}
        <div className="max-w-[780px]">
          <h2 className="font-heading text-[clamp(1.75rem,2.8vw,2.35rem)] font-bold leading-[1.2] tracking-tight text-[#1d1433]">
            Who requested, approved and acknowledged?
          </h2>
          <p className="mt-4 text-[15.5px] sm:text-[16px] leading-[1.7] text-[#5d5670]">
            A sent update is not the same as a human receipt. The fictional example below separates the two.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 xl:gap-16">
          {/* Left Column Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[460px] overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-md">
              <Image
                src="/images/Tennis-Racket-Sports/tr3.png"
                alt="Tennis player jumping in air to hit overhead shot"
                width={800}
                height={800}
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 460px"
              />
            </div>
          </div>

          {/* Right Column Step List Card */}
          <div className="rounded-2xl border border-[#ded9cb] bg-white p-6 sm:p-8 shadow-sm">
            <div className="divide-y divide-[#ebe7dc]">
              {steps.map((s) => (
                <div key={s.num} className="flex items-start gap-4 py-4.5 first:pt-0 last:pb-0">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1d1433] text-[12px] font-bold text-white mt-0.5">
                    {s.num}
                  </div>
                  <div>
                    <h3 className="font-heading text-[15px] font-bold text-[#1d1433]">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-[#5d5670]">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
