import { useId } from "react";

/**
 * The Zoiko "S-ball" mark, animated as if it were spinning:
 * the yellow stripes slide across a clipped circle while a ring orbits it.
 */
export function BallSpinner({ size = 96 }: { size?: number | string }) {
  const id = useId().replace(/:/g, "");
  // One stripe per 50 units; translating the group by -50 loops seamlessly.
  const offsets = [-50, 0, 50, 100, 150];

  return (
    <div className="relative" style={{ width: size, height: size }} role="presentation">
      {/* Orbit ring */}
      <div className="absolute -inset-3 animate-ring-spin rounded-full border-2 border-transparent border-t-brand-yellow border-r-brand-blue/70" />
      <div
        className="absolute -inset-3 animate-ring-spin rounded-full border border-white/5"
        style={{ animationDirection: "reverse", animationDuration: "3s" }}
      />

      <svg viewBox="0 0 100 100" className="h-full w-full drop-shadow-[0_10px_30px_rgba(254,207,35,0.18)]">
        <defs>
          <clipPath id={`ball-${id}`}>
            <circle cx="50" cy="50" r="46" />
          </clipPath>
          <radialGradient id={`shade-${id}`} cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.18" />
            <stop offset="55%" stopColor="#fff" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.35" />
          </radialGradient>
        </defs>

        <circle cx="50" cy="50" r="46" fill="#24153a" />
        <g clipPath={`url(#ball-${id})`}>
          <g className="animate-ball-spin">
            {offsets.map((x) => (
              <path
                key={x}
                d={`M${x - 38} 2 C${x + 8} 22, ${x - 8} 78, ${x + 38} 98`}
                stroke="#fecf23"
                strokeWidth="11"
                fill="none"
                strokeLinecap="round"
              />
            ))}
          </g>
          <circle cx="50" cy="50" r="46" fill={`url(#shade-${id})`} />
        </g>
      </svg>
    </div>
  );
}
