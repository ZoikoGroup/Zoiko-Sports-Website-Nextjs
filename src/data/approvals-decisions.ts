/* Copy for the Approvals & Decisions page (/platform/approvals-decisions), in display order. */

export const requestSteps = [
  { title: "Submit request", text: "Venue Operations proposes an action and attaches the relevant evidence." },
  { title: "Authorize change", text: "Competition Director reviews the request and records a decision." },
  { title: "Share outcome", text: "Authorized event recipients are notified and may be asked to acknowledge." },
];

/** Fictional sample data — illustrative only. */
export const decisionRecord = [
  { label: "Event", value: "Riverside Invitational · Northfield Arena" },
  { label: "Change", value: "Competition start moved 12:15 → 12:25 PDT" },
  { label: "Reason", value: "Entry backlog remained after turnstile restart" },
  { label: "Requested by", value: "Venue Operations · Northfield Arena" },
  { label: "Approved by", value: "Competition Director · Riverside League" },
  { label: "Recorded", value: "September 26, 2026 at 12:15 PDT" },
  { label: "Status", value: "Decision recorded" },
];

export const roles = [
  {
    kicker: "Submits",
    title: "Venue Operations",
    text: "Raises an operational request when conditions on-site change.",
    actions: ["Submit request", "Attach evidence"],
  },
  {
    kicker: "Decides",
    title: "Competition Director",
    text: "Reviews the request against the competition's authority and records a decision.",
    actions: ["Approve", "Reject", "Request changes"],
  },
];

/** Fictional sample data — illustrative only. */
export const requestStats = [
  { value: 3, label: "Awaiting my decision" },
  { value: 1, label: "Changes requested" },
  { value: 2, label: "Due soon" },
  { value: 8, label: "Closed" },
];

export type RequestStatus = "Awaiting decision" | "Pending" | "Changes requested" | "Closed";

/** Fictional sample data — illustrative only. */
export const requests: {
  request: string;
  event: string;
  requestedBy: string;
  assignedTo: string;
  due: string;
  status: RequestStatus;
}[] = [
  {
    request: "Start-time change",
    event: "Riverside Invitational",
    requestedBy: "Venue Operations",
    assignedTo: "Competition Director",
    due: "Sep 26, 12:15 PDT",
    status: "Awaiting decision",
  },
  {
    request: "Steward count sign-off",
    event: "Riverside Invitational",
    requestedBy: "Northfield Arena Ops",
    assignedTo: "Competition Director",
    due: "Sep 26, 11:40 PDT",
    status: "Pending",
  },
  {
    request: "Gate reopening confirmation",
    event: "Fairview Classic",
    requestedBy: "Venue Operations",
    assignedTo: "Competition Director",
    due: "Sep 26, 09:05 PDT",
    status: "Changes requested",
  },
  {
    request: "Entry capacity adjustment",
    event: "Riverside Invitational",
    requestedBy: "Venue Operations",
    assignedTo: "Competition Director",
    due: "Sep 25, 18:20 PDT",
    status: "Closed",
  },
];

export const workflowSteps = [
  { title: "Submit", text: "Proposed change, rationale and source references are entered." },
  { title: "Review", text: "Evidence, linked records and requester role are checked." },
  { title: "Decide", text: "An authorized role approves, rejects or requests changes." },
  { title: "Record", text: "The decision, actor, role and time are recorded against the event." },
  { title: "Notify & acknowledge", text: "Scoped recipients are informed and may confirm receipt." },
];

export const safeguards = [
  { title: "History & corrections", text: "A later correction is recorded alongside the original, not written over it." },
  { title: "Permissions model", text: "View, request, approve and export rights are scoped by organization and event." },
  { title: "Data rights & export", text: "Retention, export and access follow the agreed pilot or customer terms." },
  {
    title: "Conflict & error handling",
    text: "Concurrent edits, stale data and failed notifications are surfaced, not hidden.",
  },
];

export const participants = [
  {
    title: "League / competition organizer",
    text: "Authorize fixture changes while preserving the recorded reason.",
    note: "Decision authority stays with the organizer.",
  },
  {
    title: "Venue operator",
    text: "Submit readiness or exception-driven requests without assuming competition authority.",
    note: "A request is not an approval.",
  },
  {
    title: "Club",
    text: "See only the outcomes you are authorized to receive, with a clear acknowledgment expectation.",
    note: "No implied access beyond your scope.",
  },
];

export const pilotStages = [
  { title: "Qualify", src: "/images/approvals-decisions/stage-qualify-basketball.webp", alt: "Basketball player soaring for a dunk" },
  { title: "Scope", src: "/images/approvals-decisions/stage-scope-kickboxing.webp", alt: "Kickboxer throwing a knee strike" },
  { title: "Configure", src: "/images/approvals-decisions/stage-configure-tennis.webp", alt: "Tennis player setting up a backhand" },
  { title: "Operate", src: "/images/approvals-decisions/stage-operate-volleyball.webp", alt: "Volleyball player digging a low ball" },
  { title: "Evaluate", src: "/images/approvals-decisions/stage-evaluate-discus.webp", alt: "Discus thrower mid-spin in a stadium" },
];

// NOTE: only the first answer came from the design; review the rest before launch.
export const approvalsFaqs = [
  {
    q: "Who can approve an event schedule change?",
    a: "An authorized role tied to the event’s agreed governance — such as a competition director — not whoever submitted the request.",
  },
  {
    q: "What happens if a request is rejected?",
    a: "The rejection is recorded with the deciding role, time and reason. The requesting organization is informed, and a revised request can be submitted as a new, separately recorded action.",
  },
  {
    q: "Who can see the source evidence linked to a decision?",
    a: "Evidence follows the same access model as the decision: visibility is scoped by organization, role and event responsibility, as agreed for the pilot.",
  },
  {
    q: "Does Zoiko Sports replace venue or competition authority?",
    a: "No. Authorized people and organizations retain authority for operational, safety and competition decisions. Zoiko Sports records and connects the context around those decisions; a software status never certifies a venue as safe.",
  },
  {
    q: "What does \"Illustrative workflow\" mean on this page?",
    a: "The records, names, requests and counts shown are fictional specimen data used to explain the proposed workflow. They do not describe a real event or customer.",
  },
  {
    q: "How can our organization start?",
    a: "Scope a pilot around one event or fixture block. Together we define the participating organizations, decision roles, change types, evidence and the measures that would make the pilot worth expanding.",
  },
];
