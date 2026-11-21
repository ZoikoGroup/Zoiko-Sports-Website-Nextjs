const integrationTiers = [
  {
    title: "Manual exchange",
    description: "Share schedules, court requirements or exceptions directly during scoping.",
    status: "AVAILABLE BY DEFAULT",
  },
  {
    title: "Approved import",
    description: "A defined, reviewed file or feed format for existing systems.",
    status: "ASSESSED PER PILOT",
  },
  {
    title: "Validated integration",
    description: "A built, security-reviewed connector to a named system.",
    status: "NOT YET AVAILABLE",
  },
];

export function ExistingInformation() {
  return (
    <section className="relative border-t border-[#ebe7dc] bg-[#F7F6F1] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Header Block */}
        <div className="max-w-[800px]">
          <h2 className="font-heading text-[clamp(1.75rem,2.8vw,2.35rem)] font-bold leading-[1.2] tracking-tight text-[#1d1433]">
            Work with the information you already have.
          </h2>
          <p className="mt-4 text-[15.5px] sm:text-[16px] leading-[1.7] text-[#5d5670]">
            No connector, feed, court-booking vendor or racket-sport federation relationship is assumed. Data exchange is assessed during scoping.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {integrationTiers.map((tier) => (
            <div
              key={tier.title}
              className="flex flex-col justify-between rounded-xl border border-[#ded9cb] bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <h3 className="font-heading text-[17px] font-bold text-[#1d1433]">
                  {tier.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-[#5d5670]">
                  {tier.description}
                </p>
              </div>

              <div className="mt-6 border-t border-[#ebe7dc] pt-3">
                <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#868096]">
                  {tier.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
