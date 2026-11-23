import { ArrowRight } from "lucide-react";

const roles = [
  {
    title: "Leagues & competition organizers",
    text: "Scheduling and venue-area approvals span multiple circuits and teams with no single source of truth.",
    example: "A multi-session race weekend across several circuits.",
  },
  {
    title: "Clubs & teams",
    text: "Confirming handoffs and readiness with host circuits and event officials is manual and easy to miss.",
    example: "A single race weekend or representative event.",
  },
  {
    title: "Venue operators",
    text: "Incoming circuit, paddock and pit-lane requirements arrive late or change without a clear record of what was agreed.",
    example: "One race weekend at a single circuit.",
  },
] as const;

const accessRows = [
  {
    org: "Riverside League",
    role: "Competition Director",
    action: "Approve schedule change · this race block only",
  },
  {
    org: "Northfield Arena",
    role: "Venue Operations",
    action: "Update readiness checks · this event only",
  },
  {
    org: "Riverside Motorsport Club",
    role: "Club Operations Lead",
    action: "Acknowledge update · fixtures involving their club",
  },
] as const;

const dataOptions = [
  {
    title: "Manual exchange",
    text: "Share schedules, circuit-area requirements or exceptions directly during scoping.",
    tag: "Available on detail",
  },
  {
    title: "Approved import",
    text: "A defined, reviewed file or feed format for existing systems.",
    tag: "Assessed per pilot",
  },
  {
    title: "Validated integration",
    text: "A fully security-reviewed connector to a named system, if validated.",
    tag: "Not yet validated",
  },
] as const;

export default function Access() {
  return (
    <div className="w-full bg-white text-[#2A1F4D] antialiased">
      {/* Who should start this conversation */}
      <section
        id="conversation"
        className="w-full bg-white py-16 text-[#1E1A3B] antialiased sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <h2 className="text-[28px] font-bold leading-[1.25] tracking-[-0.01em] text-[#2A1F4D] sm:text-[32px] lg:text-[34px]">
            Who should start this conversation?
          </h2>
          <p className="mt-4 max-w-[640px] text-[13px] leading-[1.65] text-[#3D3857] sm:text-[14px]">
            The initial focus is the organizations that actually coordinate a
            motorsport event — each retains the decisions their role requires.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {roles.map((role) => (
              <div
                key={role.title}
                className="flex flex-col rounded-lg border border-[#E3E0D8] bg-[#F9F8F4] px-6 py-6"
              >
                <h3 className="text-[14px] font-semibold leading-[1.4] text-[#2A1F4D]">
                  {role.title}
                </h3>
                <p className="mt-3 text-[12px] leading-[1.55] text-[#5C5873]">
                  {role.text}
                </p>
                <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.06em] text-[#8A869B]">
                  First event example
                </p>
                <p className="mt-1 text-[12px] leading-[1.5] text-[#2A1F4D]">
                  {role.example}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#2A1F4D] transition-opacity hover:opacity-70"
                >
                  See the role page
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[10px] leading-[1.5] text-[#8A869B]">
            Officials and other race-day staff may take part in individually
            supported pilot scope — there is no public onboarding path yet.
          </p>
        </div>
      </section>

      {/* Shared access */}
      <section
        id="access"
        className="w-full bg-[#F6F5F0] py-12 text-[#1E1A3B] antialiased sm:py-12 lg:py-16"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <h2 className="text-[28px] font-bold leading-[1.25] tracking-[-0.01em] text-[#2A1F4D] sm:text-[32px] lg:text-[34px]">
            A shared event doesn&apos;t mean shared access.
          </h2>
          <p className="mt-4 max-w-[640px] text-[13px] leading-[1.65] text-[#3D3857] sm:text-[14px]">
            Coordination is scoped to organization, event and role — an
            illustrative model, not a confirmed security control.
          </p>

          <div className="mt-10 overflow-x-auto rounded-lg border border-[#E3E0D8]">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-[#F5F3EE]">
                  <th className="px-6 py-3 text-[9px] font-semibold uppercase tracking-[0.06em] text-[#8A869B]">
                    Organization
                  </th>
                  <th className="px-6 py-3 text-[9px] font-semibold uppercase tracking-[0.06em] text-[#8A869B]">
                    Role at time
                  </th>
                  <th className="px-6 py-3 text-[9px] font-semibold uppercase tracking-[0.06em] text-[#8A869B]">
                    Permitted action · Scope
                  </th>
                </tr>
              </thead>
              <tbody>
                {accessRows.map((row) => (
                  <tr key={row.org} className="border-t border-[#E3E0D8]">
                    <td className="px-6 py-4 text-[12px] text-[#2A1F4D]">
                      {row.org}
                    </td>
                    <td className="px-6 py-4 text-[12px] text-[#2A1F4D]">
                      {row.role}
                    </td>
                    <td className="px-6 py-4 text-[12px] text-[#2A1F4D]">
                      {row.action}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-[10px] leading-[1.5] text-[#8A869B]">
            Cross-organization access outside the agreed scope is denied, not
            merely hidden.
          </p>
        </div>
      </section>

      {/* Information you already have */}
      <section
        id="information"
        className="w-full bg-white py-16 text-[#1E1A3B] antialiased sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <h2 className="text-[28px] font-bold leading-[1.25] tracking-[-0.01em] text-[#2A1F4D] sm:text-[32px] lg:text-[34px]">
            Work with the information you already have.
          </h2>
          <p className="mt-4 max-w-[640px] text-[13px] leading-[1.65] text-[#3D3857] sm:text-[14px]">
            No timing system, telemetry feed, radio network or motorsport
            federation relationship is assumed. Data exchange is assessed during
            scoping.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {dataOptions.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-[#E3E0D8] bg-[#F9F8F4] px-6 py-6"
              >
                <h3 className="text-[13px] font-semibold leading-[1.4] text-[#2A1F4D]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[12px] leading-[1.55] text-[#5C5873]">
                  {item.text}
                </p>
                <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.06em] text-[#8A869B]">
                  {item.tag}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
