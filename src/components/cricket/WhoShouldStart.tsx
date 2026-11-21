import Link from "next/link";

const roles = [
  {
    title: "Leagues & competition organizers",
    description: "Scheduling and ground approvals span multiple venues and clubs with no single source of truth.",
    exampleLabel: "FIRST-EVENT EXAMPLE",
    example: "A multi-day league weekend across several grounds.",
    href: "/who-we-serve/leagues-organizers",
  },
  {
    title: "Clubs & teams",
    description: "Confirming handoffs and readiness with host venues and match officials is manual and easy to miss.",
    exampleLabel: "FIRST-EVENT EXAMPLE",
    example: "A single away fixture or representative match.",
    href: "/who-we-serve/clubs-teams",
  },
  {
    title: "Venue operators",
    description: "Incoming ground and pavilion requirements arrive late or change without a clear record of what was agreed.",
    exampleLabel: "FIRST-EVENT EXAMPLE",
    example: "One tournament weekend at a single ground.",
    href: "/who-we-serve/venue-operators",
  },
];

export function WhoShouldStart() {
  return (
    <section className="relative border-t border-[#ebe7dc] bg-[#F7F6F1] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Header Block */}
        <div className="max-w-[800px]">
          <h2 className="font-heading text-[clamp(1.75rem,2.8vw,2.35rem)] font-bold leading-[1.2] tracking-tight text-[#1d1433]">
            Who should start this conversation?
          </h2>
          <p className="mt-4 text-[15.5px] sm:text-[16px] leading-[1.7] text-[#5d5670]">
            The initial focus is the organizations that actually coordinate a cricket event — each retains the decisions their role requires.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {roles.map((r) => (
            <div
              key={r.title}
              className="flex flex-col justify-between rounded-xl border border-[#ded9cb] bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <h3 className="font-heading text-[17px] font-bold text-[#1d1433] leading-snug">
                  {r.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-[1.65] text-[#5d5670]">
                  {r.description}
                </p>

                <div className="mt-5">
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#868096]">
                    {r.exampleLabel}
                  </p>
                  <p className="mt-1 text-[13px] font-semibold text-[#1d1433]">
                    {r.example}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-2">
                <Link
                  href={r.href}
                  className="group inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#1d1433] transition-colors hover:text-[#377eb8]"
                >
                  <span>See the role page</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-8 text-[12px] sm:text-[12.5px] leading-relaxed text-[#868096]">
          Officials and other event staff may take part only within an individually approved pilot scope — there is no public officiating role path yet.
        </p>
      </div>
    </section>
  );
}
