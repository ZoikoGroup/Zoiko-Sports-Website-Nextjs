import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/** Shared line-icon frame: 24×24, currentColor stroke, matches lucide's weight. */
function Frame({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function AmericanFootballIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M4.5 19.5C3.6 11.2 11.2 3.6 19.5 4.5c.9 8.3-6.7 15.9-15 15Z" />
      <path d="m14.5 4.8 4.7 4.7M4.8 14.5l4.7 4.7M9.5 14.5l5-5" />
      <path d="m10.3 11.7 2 2M11.8 10.2l2 2" />
    </Frame>
  );
}

export function BasketballIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18M3 12h18" />
      <path d="M5.6 5.6c3 3 3 9.8 0 12.8M18.4 5.6c-3 3-3 9.8 0 12.8" />
    </Frame>
  );
}

export function BaseballIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M6.2 5.2c2.2 3.8 2.2 9.8 0 13.6M17.8 5.2c-2.2 3.8-2.2 9.8 0 13.6" />
      <path d="m6.5 8.5 1.6-.6M7.4 12h1.7M6.5 15.5l1.6.6M17.5 8.5l-1.6-.6M16.6 12h-1.7M17.5 15.5l-1.6.6" />
    </Frame>
  );
}

export function IceHockeyIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M7 3.5 13.5 16h4" />
      <path d="M17 3.5 10.5 16h-4" />
      <ellipse cx="12" cy="19.8" rx="2.6" ry="1.1" />
    </Frame>
  );
}

export function SoccerIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m12 8.2 3.4 2.5-1.3 4h-4.2l-1.3-4Z" />
      <path d="M12 8.2V3M15.4 10.7l4.9-1.6M14.1 14.7l3 4.1M9.9 14.7l-3 4.1M8.6 10.7 3.7 9.1" />
    </Frame>
  );
}

export function CricketIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <rect x="5" y="6" width="2.6" height="15" rx=".6" />
      <rect x="10.7" y="6" width="2.6" height="15" rx=".6" />
      <rect x="16.4" y="6" width="2.6" height="15" rx=".6" />
      <path d="M5.5 3.5h6M12.5 3.5h6" />
    </Frame>
  );
}

export function MotorsportIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M5 21V3.5" />
      <path d="M5 4h14v10H5" />
      <path
        d="M5 4h3.5v3.3H5ZM12 4h3.5v3.3H12ZM8.5 7.3H12v3.4H8.5ZM15.5 7.3H19v3.4h-3.5ZM5 10.7h3.5V14H5ZM12 10.7h3.5V14H12Z"
        fill="currentColor"
        strokeWidth={0}
      />
    </Frame>
  );
}

export function AthleticsIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <circle cx="15" cy="4.5" r="1.8" />
      <path d="M8 9.5 11 7.5l3.5.8L13 13l3 2.5V21" />
      <path d="m14.5 8.3 2 3.2H20" />
      <path d="m13 13-2.2 3.2L6 17.5" />
    </Frame>
  );
}

/** Stadium bowl, used for "Coordinate Venues". */
export function StadiumIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <ellipse cx="12" cy="9" rx="9" ry="3.5" />
      <ellipse cx="12" cy="9" rx="4.5" ry="1.5" />
      <path d="M3 9v6c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5V9" />
      <path d="M7.5 12.2v5.6M12 12.5v6M16.5 12.2v5.6" />
    </Frame>
  );
}
