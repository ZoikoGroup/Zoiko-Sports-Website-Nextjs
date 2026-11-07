export type Badge = "GATED" | "FUTURE" | "EXTERNAL";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
  badge?: Badge;
};

export type NavColumn = {
  heading: string;
  links: NavLink[];
};

export type MegaMenu = {
  id: string;
  label: string;
  columns: NavColumn[];
  feature: {
    image: { src: string; width: number; height: number };
    imageAlt: string;
    title: string;
    text: string;
    cta: { label: string; href: string };
  };
};

const SPORT_PATTERN = "Sport-specific operating patterns.";
const SPORT_EVIDENCE = "Publish only after validated sport-specific content.";

export const megaMenus: MegaMenu[] = [
  {
    id: "platform",
    label: "Platform",
    columns: [
      {
        heading: "Explore",
        links: [
          { label: "Platform Overview", href: "/platform", description: "The operating model and product surface." },
          { label: "Event Operations", href: "/platform/event-operations", description: "Coordinate the event from schedule through review." },
          { label: "Competition Operations", href: "/platform/competition-operations", description: "Schedules, responsibilities and organizer workflows." },
          { label: "Venue Operations", href: "/platform/venue-operations", description: "Readiness, ownership and venue-side execution." },
        ],
      },
      {
        heading: "Coordinate",
        links: [
          { label: "Readiness Checks", href: "/platform/readiness-checks", badge: "GATED", description: "Track operational checks, ownership and due times." },
          { label: "Event-Day Exceptions", href: "/platform/event-day-exceptions", badge: "GATED", description: "Record, assign and resolve operational exceptions." },
          { label: "Approvals & Decisions", href: "/platform/approvals-decisions", badge: "GATED", description: "Capture decision authority and recorded approvals." },
          { label: "Notifications & Acknowledgments", href: "/platform/notifications", badge: "GATED", description: "Separate sent updates from recorded acknowledgment." },
        ],
      },
      {
        heading: "Govern",
        links: [
          { label: "Organizations & Access", href: "/platform/organizations-access", badge: "GATED", description: "Scope people to organizations, roles and responsibilities." },
          { label: "Operational Records", href: "/platform/operational-records", badge: "GATED", description: "Review source, update and event context." },
          { label: "Post-Event Review", href: "/platform/post-event-review", badge: "GATED", description: "Close decisions, follow-up work and records." },
        ],
      },
    ],
    feature: {
      image: { src: "/images/nav/platform.webp", width: 251, height: 141 },
      imageAlt: "Footballer striking a ball on a training pitch",
      title: "Start with the operating model",
      text: "See how one event moves from planning to preparation, event-day coordination and review.",
      cta: { label: "View Platform", href: "/platform" },
    },
  },
  {
    id: "solutions",
    label: "Solutions",
    columns: [
      {
        heading: "Plan & Prepare",
        links: [
          { label: "Competition-to-Venue Coordination", href: "/solutions/competition-to-venue", description: "Align organizer schedules with venue responsibilities." },
          { label: "Event Readiness", href: "/solutions/event-readiness", badge: "GATED", description: "Bring due checks and ownership into one operational view." },
          { label: "Operational Handover", href: "/solutions/operational-handover", badge: "GATED", description: "Clarify responsibilities between organizer, club and venue." },
        ],
      },
      {
        heading: "Event Day",
        links: [
          { label: "Exception Coordination", href: "/solutions/exception-coordination", badge: "GATED", description: "Assign and track operational exceptions." },
          { label: "Decision & Approval Records", href: "/solutions/decision-approval-records", badge: "GATED", description: "Record who approved what, in which role, and when." },
          { label: "Update Acknowledgments", href: "/solutions/update-acknowledgments", badge: "GATED", description: "Track supported acknowledgment states." },
        ],
      },
      {
        heading: "Review & Scale",
        links: [
          { label: "Post-Event Review", href: "/solutions/post-event-review", badge: "GATED", description: "Review recorded decisions and open follow-up work." },
          { label: "Multi-Event Operating Model", href: "/solutions/multi-event", badge: "GATED", description: "Extend an agreed workflow across a fixture block." },
          { label: "Pilot Program", href: "/pilot", description: "Scope one event or fixture block with agreed measures." },
        ],
      },
    ],
    feature: {
      image: { src: "/images/nav/solutions.webp", width: 251, height: 90 },
      imageAlt: "Players running across a pitch with footballs",
      title: "Not sure where to start?",
      text: "Describe the coordination problem. Zoiko Sports can scope the smallest credible workflow around it.",
      cta: { label: "Scope a Pilot", href: "/pilot" },
    },
  },
  {
    id: "who-we-serve",
    label: "Who We Serve",
    columns: [
      {
        heading: "Core Buyers",
        links: [
          { label: "Leagues & Competition Organizers", href: "/who-we-serve/leagues-organizers", description: "Competition directors, operations leaders and event managers." },
          { label: "Clubs & Teams", href: "/who-we-serve/clubs-teams", description: "Club operations managers, secretaries and event-day leads." },
          { label: "Venue Operators", href: "/who-we-serve/venue-operators", description: "Venue directors, operations managers and safety/operations teams." },
        ],
      },
      {
        heading: "Coordination Partners",
        links: [
          { label: "Officials & Event Staff", href: "/who-we-serve/officials-event-staff", badge: "GATED", description: "Explain participation and responsibilities without positioning as the initial buyer." },
          { label: "Contractors & Service Partners", href: "/who-we-serve/contractors-partners", badge: "GATED", description: "For bounded operational participation where included in a pilot." },
        ],
      },
      {
        heading: "Enterprise Path",
        links: [
          { label: "Multi-Organization Operations", href: "/who-we-serve/multi-organization", badge: "GATED", description: "For programs involving organizer, venues and clubs." },
          { label: "Pilot Program", href: "/pilot", description: "Agree participants, workflow, responsibilities and measures." },
        ],
      },
    ],
    feature: {
      image: { src: "/images/nav/who-we-serve.webp", width: 251, height: 93 },
      imageAlt: "Silhouettes of runners at dusk",
      title: "Designed around organizations, not just users",
      text: "The navigation should reinforce that access.",
      cta: { label: "See Who It's For", href: "/who-we-serve" },
    },
  },
  {
    id: "sports",
    label: "Sports",
    columns: [
      {
        heading: "Start Here",
        links: [
          { label: "Sports Overview", href: "/sports", description: "How Zoiko Sports adapts operational workflows to different sports." },
          { label: "Discuss Your Sport", href: "/pilot?topic=sport", description: "Scope the sport, event format, organizations and operating requirements through the pilot flow." },
        ],
      },
      {
        heading: "Publish When Validated",
        links: [
          { label: "Football / Soccer", href: "/sports/football", badge: "FUTURE", description: SPORT_PATTERN },
          { label: "Basketball", href: "/sports/basketball", badge: "FUTURE", description: SPORT_PATTERN },
          { label: "Rugby", href: "/sports/rugby", badge: "FUTURE", description: SPORT_PATTERN },
          { label: "Cricket", href: "/sports/cricket", badge: "FUTURE", description: SPORT_PATTERN },
        ],
      },
      {
        heading: "Expand by Evidence",
        links: [
          { label: "Tennis & Racket Sports", href: "/sports/tennis-racket", badge: "FUTURE", description: SPORT_EVIDENCE },
          { label: "Athletics", href: "/sports/athletics", badge: "FUTURE", description: SPORT_EVIDENCE },
          { label: "Motorsport", href: "/sports/motorsport", badge: "FUTURE", description: SPORT_EVIDENCE },
          { label: "Multi-Sport Events", href: "/sports/multi-sport", badge: "FUTURE", description: "Publish only after validated multi-sport workflow scope." },
        ],
      },
    ],
    feature: {
      image: { src: "/images/nav/sports.webp", width: 251, height: 119 },
      imageAlt: "Athletes training in a gym",
      title: "Launch rule",
      text: "At launch, this panel may contain only Sports Overview and Discuss Your Sport.",
      cta: { label: "Discuss Your Sport", href: "/pilot?topic=sport" },
    },
  },
  {
    id: "integrations",
    label: "Integrations",
    columns: [
      {
        heading: "Connect",
        links: [
          { label: "Integrations Overview", href: "/integrations", description: "How Zoiko Sports approaches imports, connections and data permissions." },
          { label: "Data Imports", href: "/integrations/data-imports", badge: "GATED", description: "Supported file/import patterns once validated." },
          { label: "APIs & Webhooks", href: "/integrations/apis-webhooks", badge: "GATED", description: "Developer-facing connectivity once public interfaces are supported." },
        ],
      },
      {
        heading: "Enterprise",
        links: [
          { label: "Identity & SSO", href: "/integrations/identity-sso", badge: "GATED", description: "Identity federation options once commercially released." },
          { label: "Scheduling & Calendars", href: "/integrations/scheduling-calendars", badge: "GATED", description: "Supported schedule/calendar exchange once validated." },
          { label: "Existing Systems Assessment", href: "/integrations/systems-assessment", description: "Describe the systems involved during pilot scoping." },
        ],
      },
      {
        heading: "Developers",
        links: [
          { label: "Developer Documentation", href: "/developers", badge: "FUTURE", description: "Technical documentation for released interfaces." },
          { label: "API Status", href: "/developers/status", badge: "FUTURE", description: "Availability/status for public interfaces." },
          { label: "Request an Integration", href: "/integrations/request", description: "Route to scoped inquiry; no implied connector promise." },
        ],
      },
    ],
    feature: {
      image: { src: "/images/nav/integrations.webp", width: 251, height: 91 },
      imageAlt: "Group fitness class in motion",
      title: "Bring the system landscape to scoping",
      text: "The pilot agreement identifies what is imported, integrated, manually.",
      cta: { label: "Discuss Integrations", href: "/pilot?topic=integrations" },
    },
  },
  {
    id: "trust",
    label: "Trust",
    columns: [
      {
        heading: "Trust Center",
        links: [
          { label: "Trust Overview", href: "/trust", description: "Central assurance index." },
          { label: "Security", href: "/trust/security", badge: "GATED", description: "Security program and product controls supported by evidence." },
          { label: "Privacy", href: "/trust/privacy", description: "Data handling, privacy governance and applicable notices." },
          { label: "Data Governance", href: "/trust/data-governance", badge: "GATED", description: "Roles, access, retention and data lifecycle principles." },
        ],
      },
      {
        heading: "Operate Reliably",
        links: [
          { label: "Reliability", href: "/trust/reliability", badge: "GATED", description: "Service architecture and operating commitments when approved." },
          { label: "System Status", href: "/status", badge: "GATED", description: "Public status destination once operational monitoring is published." },
          { label: "Business Continuity", href: "/trust/business-continuity", badge: "GATED", description: "Continuity/resilience material when approved." },
        ],
      },
      {
        heading: "Responsible Access",
        links: [
          { label: "Accessibility", href: "/trust/accessibility", description: "Accessibility statement, conformance work and contact path." },
          { label: "Compliance", href: "/trust/compliance", badge: "GATED", description: "Only named frameworks/attestations actually achieved or formally scoped." },
          { label: "Responsible Technology", href: "/trust/responsible-technology", badge: "FUTURE", description: "Use if AI/automated decision functionality becomes public and requires governance." },
        ],
      },
    ],
    feature: {
      image: { src: "/images/nav/trust.webp", width: 251, height: 106 },
      imageAlt: "Group of athletes stretching together",
      title: "Trust should answer buyer diligence early",
      text: "Make the assurance path easy to find before a prospect has to ask Sales for basic security, privacy, accessibility or status information.",
      cta: { label: "Visit Trust Center", href: "/trust" },
    },
  },
  {
    id: "resources",
    label: "Resources",
    columns: [
      {
        heading: "Learn",
        links: [
          { label: "Resource Center", href: "/resources", description: "Curated entry point for all public guidance." },
          { label: "Product Guides", href: "/resources/guides", badge: "GATED", description: "Explain workflows and product usage at the appropriate release stage." },
          { label: "Insights & Research", href: "/resources/insights", description: "Operational analysis and original research." },
          { label: "Events & Webinars", href: "/resources/events", badge: "GATED", description: "Only when an active program exists." },
        ],
      },
      {
        heading: "Proof",
        links: [
          { label: "Customer Stories", href: "/resources/customer-stories", badge: "GATED", description: "Approved references with explicit customer permission." },
          { label: "Pilot Learnings", href: "/resources/pilot-learnings", badge: "GATED", description: "Aggregated learnings only when publishable and non-sensitive." },
          { label: "Release Notes", href: "/resources/release-notes", badge: "GATED", description: "Public changes for released product surfaces." },
        ],
      },
      {
        heading: "Get Help",
        links: [
          { label: "Help Center", href: "/support", badge: "GATED", description: "Public/self-service support once content exists." },
          { label: "Developer Docs", href: "/developers", badge: "FUTURE", description: "Released interface documentation." },
          { label: "Contact Support", href: "/support/contact", badge: "GATED", description: "For authenticated/contracted users when support process is live." },
        ],
      },
    ],
    feature: {
      image: { src: "/images/nav/resources.webp", width: 251, height: 91 },
      imageAlt: "Athletes during a strength training session",
      title: "Featured resource",
      text: "One current, high-value resource may appear here, maintained editorially and falling back to the Resource Center if unpublished.",
      cta: { label: "Explore Resources", href: "/resources" },
    },
  },
  {
    id: "company",
    label: "Company",
    columns: [
      {
        heading: "Company",
        links: [
          { label: "Company Overview", href: "/about", description: "What Zoiko Sports is, who operates it, and how it fits within Zoiko." },
          { label: "Leadership & Governance", href: "/company/leadership", badge: "GATED", description: "Relevant leadership and governance information once approved." },
          { label: "Global Presence", href: "/company/global-presence", badge: "GATED", description: "Corporate locations and operating presence; distinguish HQ from registered offices." },
        ],
      },
      {
        heading: "News & Careers",
        links: [
          { label: "Newsroom", href: "/company/newsroom", description: "Company announcements and media resources." },
          { label: "Press & Media", href: "/company/press", badge: "GATED", description: "Press contact and approved brand/media assets." },
          { label: "Careers", href: "/company/careers", description: "Open roles and employment information." },
        ],
      },
      {
        heading: "Connect",
        links: [
          { label: "Contact", href: "/contact", description: "Route general, commercial, media and other enquiries appropriately." },
          // TODO: confirm the official corporate URLs
          { label: "Zoiko Tech Inc.", href: "https://www.zoikotech.com", badge: "EXTERNAL", description: "Corporate owner/operator destination." },
          { label: "Zoiko Group", href: "https://www.zoikogroup.com", badge: "EXTERNAL", description: "Parent-group destination." },
        ],
      },
    ],
    feature: {
      image: { src: "/images/nav/company.webp", width: 251, height: 115 },
      imageAlt: "Young players with a basketball, shot from below",
      title: "Corporate identity",
      text: "ZOIKO SPORTS is the public masterbrand. Zoiko Tech Inc.",
      cta: { label: "Company Overview", href: "/about" },
    },
  },
];

/* ---------------- Footer ---------------- */

export const footerColumns: NavColumn[] = [
  {
    heading: "Platform",
    links: [
      { label: "Platform Overview", href: "/platform" },
      { label: "Event Planning", href: "/platform/event-planning" },
      { label: "Readiness", href: "/platform/readiness-checks" },
      { label: "Event-Day Coordination", href: "/platform/event-operations" },
      { label: "Decisions & Records", href: "/platform/operational-records" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Solutions Overview", href: "/solutions" },
      { label: "Competition Operations", href: "/platform/competition-operations" },
      { label: "Venue Readiness", href: "/solutions/event-readiness" },
      { label: "Cross-Organization Coordination", href: "/solutions/competition-to-venue" },
      { label: "Event-Day Exceptions", href: "/solutions/exception-coordination" },
    ],
  },
  {
    heading: "Who We Serve",
    links: [
      { label: "Who We Serve", href: "/who-we-serve" },
      { label: "Leagues & Organizers", href: "/who-we-serve/leagues-organizers" },
      { label: "Clubs & Teams", href: "/who-we-serve/clubs-teams" },
      { label: "Venue Operators", href: "/who-we-serve/venue-operators" },
      { label: "Event Delivery Partners", href: "/who-we-serve/contractors-partners", badge: "GATED" },
    ],
  },
  {
    heading: "Sports",
    links: [
      { label: "Sports Overview", href: "/sports" },
      { label: "Supported Sports", href: "/sports/supported" },
      { label: "Multi-Sport Operations", href: "/sports/multi-sport" },
      { label: "Individual Sport Pages", href: "/sports/all", badge: "GATED" },
    ],
  },
  {
    heading: "Integrations",
    links: [
      { label: "Integrations Overview", href: "/integrations" },
      { label: "Data Imports", href: "/integrations/data-imports" },
      { label: "APIs & Webhooks", href: "/integrations/apis-webhooks" },
      { label: "Developer Documentation", href: "/developers", badge: "GATED" },
      { label: "Request an Integration", href: "/integrations/request" },
    ],
  },
  {
    heading: "Trust",
    links: [
      { label: "Trust Center", href: "/trust" },
      { label: "Security", href: "/trust/security" },
      { label: "Privacy", href: "/trust/privacy" },
      { label: "Accessibility", href: "/trust/accessibility" },
      { label: "System Status", href: "/status", badge: "GATED" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Resource Center", href: "/resources" },
      { label: "Guides", href: "/resources/guides" },
      { label: "Insights", href: "/resources/insights" },
      { label: "Customer Stories", href: "/resources/customer-stories" },
      { label: "FAQs", href: "/resources/faqs" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Company", href: "/about" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Careers", href: "/company/careers" },
      { label: "Newsroom", href: "/company/newsroom" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Center", href: "/support", badge: "GATED" },
      { label: "Contact Support", href: "/support/contact", badge: "GATED" },
      { label: "System Status", href: "/status", badge: "GATED" },
      { label: "Service Updates", href: "/support/service-updates", badge: "GATED" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy-policy" },
      { label: "Terms of Use", href: "/legal/terms" },
      { label: "Cookie Policy", href: "/legal/cookie-policy" },
      { label: "Acceptable Use Policy", href: "/legal/acceptable-use" },
      { label: "Accessibility Statement", href: "/legal/accessibility" },
      { label: "Data Processing Addendum", href: "/legal/dpa", badge: "GATED" },
    ],
  },
];

export const offices = [
  {
    label: "Global Headquarters",
    lines: ["1401 21st Street, Suite R,", "Sacramento, CA 95811, USA"],
  },
  {
    label: "European Headquarters",
    lines: ["167–169 Great Portland Street,", "5th Floor, London W1W 5PF, United Kingdom"],
  },
];

/** Bottom-bar links, in display order. */
export const legalLinks: NavLink[] = [
  { label: "Privacy", href: "/legal/privacy-policy" },
  { label: "Terms", href: "/legal/terms" },
  { label: "Accessibility", href: "/legal/accessibility" },
  { label: "Cookie Preferences", href: "/legal/cookie-policy#preferences" },
  { label: "Your Privacy Choices", href: "/legal/privacy-choices" },
];

// TODO: replace with the official social profile URLs
export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin", short: "in" },
  { label: "YouTube", href: "https://www.youtube.com/", icon: "youtube", short: "▶" },
  { label: "X", href: "https://x.com/", icon: "x", short: "X" },
  { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram", short: "IG" },
] as const;

export const headerCtas = {
  signIn: { label: "Sign In", href: "/sign-in" },
  primary: { label: "Scope a Pilot", href: "/pilot" },
};
