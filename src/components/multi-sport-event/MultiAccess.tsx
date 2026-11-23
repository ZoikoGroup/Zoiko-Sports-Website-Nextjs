import Image from "next/image";
import { ArrowRight } from "lucide-react";

const timeline = [
  {
    n: "1",
    title: "Requested",
    text: "A revised session window is requested after a venue-area interruption.",
  },
  {
    n: "2",
    title: "Approved",
    text: "Approved by the Competition Director for the affected sport only, recorded with actor and time.",
  },
  {
    n: "3",
    title: "Sent",
    text: "Update sent to affected organizations — sent is not received.",
  },
  {
    n: "4",
    title: "Acknowledged",
    text: "2 of 3 recipients acknowledged; outstanding acknowledgments stay visible.",
  },
] as const;

const roles = [
  {
    title: "Leagues & competition organizers",
    text: "Aligning several sports' schedules and venue areas with no single source of truth, while each sport keeps its own authority.",
    example:
      "A shared venue weekend hosting independently governed competitions.",
  },
  {
    title: "Venue operators",
    text: "Incoming venue-area requirements from more than one sport arrive independently, with no shared record of what was agreed.",
    example: "One venue hosting back-to-back sessions for different sports.",
  },
] as const;

const accessRows = [
  {
    org: "Riverside League",
    role: "Program Coordinator",
    action: "Propose schedule change · this sport's director",
  },
  {
    org: "Northfield Arena",
    role: "Venue Duty Holder",
    action: "Update venue readiness · this event only",
  },
  {
    org: "Portsbury Club",
    role: "Club Operations Lead",
    action: "Acknowledge update · fixtures involving their club",
  },
] as const;

export default function MultiAccess() {
  return (
    <div className="w-full bg-white text-[#2A1F4D] antialiased">
      {/* Who requested, approved and acknowledged */}
      <section
        id="acknowledged"
        className="w-full bg-[#F5F3EE] py-16 text-[#1E1A3B] antialiased sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <h2 className="max-w-[560px] text-[28px] font-bold leading-[1.25] tracking-[-0.01em] text-[#2A1F4D] sm:text-[32px] lg:text-[34px]">
            Who requested, approved and acknowledged — per sport?
          </h2>
          <p className="mt-4 max-w-[640px] text-[13px] leading-[1.65] text-[#3D3857] sm:text-[14px]">
            A sent update is not the same as a human receipt, and one
            sport&apos;s approval is not another&apos;s. The fictional example
            below separates them.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-8">
            <div className="relative h-[320px] w-full overflow-hidden rounded-xl sm:h-[380px] lg:h-[300px]">
              <Image
                src="/images/multi/4.png"
                alt="Athletes stretching together on a studio floor"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center gap-5 rounded-xl border border-[#E3E0D8] bg-white px-6 py-8 sm:px-8">
              {timeline.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2A1F4D] text-[10px] font-semibold text-white">
                    {item.n}
                  </span>
                  <div>
                    <p className="text-[12px] font-semibold italic leading-[1.4] text-[#2A1F4D]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[11px] leading-[1.55] text-[#5C5873]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who should start this conversation */}
      <section
        id="conversation"
        className="w-full border-y border-[#E3E0D8] bg-white py-16 text-[#1E1A3B] antialiased sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <h2 className="text-[28px] font-bold leading-[1.25] tracking-[-0.01em] text-[#2A1F4D] sm:text-[32px] lg:text-[34px]">
            Who should start this conversation?
          </h2>
          <p className="mt-4 max-w-[640px] text-[13px] leading-[1.65] text-[#3D3857] sm:text-[14px]">
            The initial focus is the organizations that actually coordinate a
            multi-sport program — each keeps the decisions its own sport or role
            requires.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1fr_1fr]">
            {roles.map((role) => (
              <div
                key={role.title}
                className="flex flex-col rounded-lg border border-[#E3E0D8] bg-[#F9F8F4] px-6 py-6"
              >
                <h3 className="text-[13px] font-semibold leading-[1.4] text-[#2A1F4D]">
                  {role.title}
                </h3>
                <p className="mt-3 text-[11px] leading-[1.55] text-[#5C5873]">
                  {role.text}
                </p>
                <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.06em] text-[#8A869B]">
                  First event example
                </p>
                <p className="mt-1 text-[11px] leading-[1.5] text-[#2A1F4D]">
                  {role.example}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#2A1F4D] transition-opacity hover:opacity-70"
                >
                  See the role page
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            ))}

            <div className="relative h-[240px] w-full overflow-hidden rounded-lg lg:h-auto lg:min-h-[240px]">
              <Image
                src="/images/multi/5.png"
                alt="Athletes training with weighted balls in a studio"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <p className="mt-6 text-[10px] leading-[1.5] text-[#8A869B]">
            Officials and other event-day staff may take part in individually
            supported pilot scope — there is no public onboarding path yet.
          </p>
        </div>
      </section>

      {/* Shared access */}
      <section
        id="access"
        className="w-full bg-[#F6F5F0] py-16 text-[#1E1A3B] antialiased sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <h2 className="max-w-[420px] text-[28px] font-bold leading-[1.25] tracking-[-0.01em] text-[#2A1F4D] sm:text-[32px] lg:text-[34px]">
            A shared program doesn&apos;t mean shared access.
          </h2>
          <p className="mt-4 max-w-[640px] text-[13px] leading-[1.65] text-[#3D3857] sm:text-[14px]">
            Coordination is scoped to organization, sport, event and role — an
            illustrative model, not a confirmed security control. A
            program-level view never bypasses a sport&apos;s own view-level
            permission.
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
    </div>
  );
}
