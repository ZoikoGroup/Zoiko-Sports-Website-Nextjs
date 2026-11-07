/* Copy for the Competition Operations page (/platform/competition-operations), in display order. */

export const fixtureProblems = [
  {
    title: "Schedule drift",
    text: "A revised start time reaches the competition office, while venue access and club travel plans still reflect the old schedule.",
  },
  {
    title: "Responsibility gaps",
    text: "When a schedule changes, it is not always clear who owns the next action or who is authorized to approve it.",
  },
  {
    title: "Decision reconstruction",
    text: "Reviewing a fixture afterward is harder when the reason, approver and timing are split across separate channels.",
  },
];

/** Fictional sample data — illustrative only. */
export const fixtureContext = {
  competition: { label: "Competition", title: "Riverside Invitational", text: "Organizer: Riverside League" },
  fixture: { label: "Fixture", title: "RV-026", text: "Sep 26, 2026 · 12:15 PDT" },
  venue: { label: "Venue", title: "Northfield Arena", text: "Local readiness owner" },
  clubs: { label: "Participating clubs", items: ["Participating Club A", "Participating Club B"] },
};

export const responsibilities = [
  {
    label: "Organizer provides",
    tone: "yellow",
    items: ["Fixture schedule and timing context", "Approved schedule-change record", "Relevant event and participant context"],
  },
  {
    label: "Venue owns",
    tone: "dark",
    items: ["Local readiness and operational decisions", "On-site execution and staffing", "Safety, security and compliance authority"],
  },
] as const;

export const publicationSteps = [
  "Published version",
  "Queued for recipients",
  "Delivered or failed",
  "Acknowledged by recipient",
];

export const visibility = [
  { title: "Organizer", text: "Sees the full competition schedule and requested changes within its own events." },
  { title: "Club", text: "Sees relevant shared fixture updates for its own participation, not other clubs’ restricted details." },
  { title: "Venue", text: "Sees fixture dependencies that affect local operations, scoped to its own venue." },
  { title: "Read-only auditor", text: "Sees limited evidence for review; restricted records are marked, not silently hidden." },
];

export const audiences = [
  { title: "Leagues & competition organizers", text: "Coordinate the fixture and approval authority." },
  { title: "Clubs", text: "Receive and acknowledge relevant competition updates." },
  { title: "Venue operators", text: "Align organizer timings with venue-owned operating work." },
];

export const pilotStages = ["Qualify", "Scope", "Configure", "Operate", "Evaluate"];

// NOTE: only the first answer came from the design; review the rest before launch.
export const competitionFaqs = [
  {
    q: "What is competition operations software?",
    a: "It helps competition organizers plan and coordinate the fixtures, assigned responsibilities, schedule changes and recorded decisions involved in delivering a sporting event. Zoiko Sports is being developed with an initial focus on connecting organizer-side work to relevant club and venue context.",
  },
  {
    q: "How do we know an update was acknowledged?",
    a: "Publication, queuing, delivery and human acknowledgment are tracked as separate events. A delivered message is not treated as an acknowledgment until the recipient confirms it.",
  },
  {
    q: "Can the platform decide if a venue is safe to open?",
    a: "No. The authorized venue team retains control of local operational and safety decisions. A schedule or check status in Zoiko Sports is never a venue safety certification.",
  },
  {
    q: "Does Zoiko Sports replace our competition scheduling tools?",
    a: "Not by default. Pilot scoping identifies the source schedules and approved data exchange; Zoiko Sports connects existing systems rather than assuming replacement.",
  },
  {
    q: "What happens if venue connectivity is interrupted?",
    a: "Connectivity requirements and the fallback procedure for interruptions are agreed during pilot scoping, before any live event.",
  },
  {
    q: "How does a competition organizer start?",
    a: "Start with one competition event or fixture block. Agree the participating organizer, clubs and venue, the workflow to assess, responsible roles and success measures before the pilot begins.",
  },
];
