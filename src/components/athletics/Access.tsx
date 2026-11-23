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

const roles = [
  {
    title: "Leagues & competition organizers",
    text: "Scheduling and venue-area approvals span multiple venues and clubs with no single source of truth.",
    example: "A multi-session meet weekend across several venues.",
  },
  {
    title: "Clubs & teams",
    text: "Confirming handoffs and readiness with host venues and meet officials is manual and easy to miss.",
    example: "A single-day meet or representative event.",
  },
  {
    title: "Venue operators",
    text: "Incoming track and field area requirements arrive late or change without a clear record of what was agreed.",
    example: "One meet weekend at a single venue.",
  },
] as const;

const accessRows = [
  {
    org: "Riverside League",
    role: "Competition Director",
    action: "Approve schedule change · this meet block only",
  },
  {
    org: "Northfield Arena",
    role: "Venue Operations",
    action: "Update readiness checks · this event only",
  },
  {
    org: "Riverside Athletics Club",
    role: "Club Operations Lead",
    action: "Acknowledge update · fixtures involving their club",
  },
] as const;

export default function Access() {
  return (
    <div className="w-full bg-white text-[#2A1F4D] antialiased">
      {/* Who requested, approved and acknowledged */}
      <section
        id="acknowledged"
        className="w-full bg-white py-16 text-[#1E1A3B] antialiased sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <h2 className="text-[28px] font-bold leading-[1.25] tracking-[-0.01em] text-[#2A1F4D] sm:text-[32px] lg:text-[34px]">
            Who requested, approved and acknowledged?
          </h2>
          <p className="mt-4 max-w-[640px] text-[14px] leading-[1.6] text-[#3D3857] sm:text-[15px]">
            A sent update is not the same as a human receipt. The fictional
            example below separates the two.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="relative h-[320px] w-full overflow-hidden rounded-xl border border-[#E3E0D8] sm:h-[380px] lg:h-[360px]">
              <Image
                src="/images/athletics/4.png"
                alt="Athlete performing a long jump"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
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
                    <p className="text-[14px] font-semibold leading-[1.4] text-[#2A1F4D]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[13px] leading-[1.55] text-[#5C5873]">
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
        className="w-full border-y border-[#E3E0D8] bg-[#F5F3EE] py-16 text-[#1E1A3B] antialiased sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <h2 className="text-[28px] font-bold leading-[1.25] tracking-[-0.01em] text-[#2A1F4D] sm:text-[32px] lg:text-[34px]">
            Who should start this conversation?
          </h2>
          <p className="mt-4 max-w-[640px] text-[14px] leading-[1.6] text-[#3D3857] sm:text-[15px]">
            The initial focus is the organizations that actually coordinate an
            athletics event — each retains the decisions their role requires.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {roles.map((role) => (
              <div
                key={role.title}
                className="flex flex-col rounded-lg border border-[#E3E0D8] bg-[#F9F8F4] px-6 py-6"
              >
                <h3 className="text-[15px] font-semibold leading-[1.4] text-[#2A1F4D]">
                  {role.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.55] text-[#5C5873]">
                  {role.text}
                </p>
                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#8A869B]">
                  First event example
                </p>
                <p className="mt-1 text-[13px] leading-[1.5] text-[#2A1F4D]">
                  {role.example}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#2A1F4D] transition-opacity hover:opacity-70"
                >
                  See the role page
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[11px] leading-[1.5] text-[#8A869B]">
            Officials and other round-day staff may take part in or individually
            supported pilot scope — there is no public onboarding path yet.
          </p>
        </div>
      </section>

      {/* Shared access */}
      <section
        id="access"
        className="w-full bg-white py-16 text-[#1E1A3B] antialiased sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <h2 className="text-[28px] font-bold leading-[1.25] tracking-[-0.01em] text-[#2A1F4D] sm:text-[32px] lg:text-[34px]">
            A shared event doesn&apos;t mean shared access.
          </h2>
          <p className="mt-4 max-w-[640px] text-[14px] leading-[1.6] text-[#3D3857] sm:text-[15px]">
            Coordination is scoped to organization, event and role — an
            illustrative model, not a confirmed security control.
          </p>

          <div className="mt-10 overflow-x-auto rounded-lg border border-[#E3E0D8]">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-[#F5F3EE]">
                  <th className="px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#8A869B]">
                    Organization
                  </th>
                  <th className="px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#8A869B]">
                    Role at time
                  </th>
                  <th className="px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#8A869B]">
                    Permitted action · Scope
                  </th>
                </tr>
              </thead>
              <tbody>
                {accessRows.map((row) => (
                  <tr key={row.org} className="border-t border-[#E3E0D8]">
                    <td className="px-6 py-4 text-[13px] text-[#2A1F4D]">
                      {row.org}
                    </td>
                    <td className="px-6 py-4 text-[13px] text-[#2A1F4D]">
                      {row.role}
                    </td>
                    <td className="px-6 py-4 text-[13px] text-[#2A1F4D]">
                      {row.action}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-[11px] leading-[1.5] text-[#8A869B]">
            Cross-organization access outside the agreed scope is denied, not
            merely hidden.
          </p>
        </div>
      </section>
    </div>
  );
}
