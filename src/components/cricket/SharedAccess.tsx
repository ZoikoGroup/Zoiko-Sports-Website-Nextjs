const permissions = [
  {
    org: "Riverside League",
    role: "Competition Director",
    action: "Approve schedule change · this fixture block only",
  },
  {
    org: "Northfield Arena",
    role: "Venue Operations",
    action: "Update readiness checks · this event only",
  },
  {
    org: "Riverside FC",
    role: "Club Operations Lead",
    action: "Acknowledge update · fixtures involving their club",
  },
];

export function SharedAccess() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Header Block */}
        <div className="max-w-[780px]">
          <h2 className="font-heading text-[clamp(1.75rem,2.8vw,2.35rem)] font-bold leading-[1.2] tracking-tight text-[#1d1433]">
            A shared event doesn&apos;t mean shared access.
          </h2>
          <p className="mt-4 text-[15.5px] sm:text-[16px] leading-[1.7] text-[#5d5670]">
            Coordination is scoped to organization, event and role — an illustrative model, not a confirmed security control.
          </p>
        </div>

        {/* Permissions Table Card */}
        <div className="mt-10 overflow-hidden rounded-xl border border-[#ded9cb] bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#ded9cb] bg-[#faf9f6]">
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#868096]">
                    ORGANIZATION
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#868096]">
                    ROLE AT TIME
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#868096]">
                    PERMITTED ACTION · SCOPE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ebe7dc]">
                {permissions.map((p) => (
                  <tr key={p.org} className="hover:bg-[#faf9f6] transition-colors">
                    <td className="px-6 py-4.5 text-[13.5px] font-semibold text-[#1d1433]">
                      {p.org}
                    </td>
                    <td className="px-6 py-4.5 text-[13.5px] text-[#5d5670]">
                      {p.role}
                    </td>
                    <td className="px-6 py-4.5 text-[13.5px] text-[#4d4661]">
                      {p.action}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footnote */}
        <p className="mt-6 text-[12px] sm:text-[12.5px] leading-relaxed text-[#868096]">
          Cross-organization access outside the agreed scope is denied, not merely hidden.
        </p>
      </div>
    </section>
  );
}
