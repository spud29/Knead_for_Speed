export default function RealityTVShow({ size = 24, className = '', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <defs>
        <linearGradient id="rtv-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6B6B7B" />
          <stop offset="100%" stopColor="#3A3A4A" />
        </linearGradient>
        <linearGradient id="rtv-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#444466" />
          <stop offset="100%" stopColor="#222244" />
        </linearGradient>
        <radialGradient id="rtv-screenGlow" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#6688BB" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#334466" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="rtv-spot" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#FFFF88" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FFFF44" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="rtv-live" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF3333" />
          <stop offset="100%" stopColor="#CC0000" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="24" cy="45" rx="14" ry="2" fill="#00000018" />

      {/* Spotlight beams from top */}
      <path d="M14 0 L8 18 L20 18 Z" fill="url(#rtv-spot)" />
      <path d="M34 0 L28 18 L40 18 Z" fill="url(#rtv-spot)" />
      <path d="M24 0 L18 16 L30 16 Z" fill="url(#rtv-spot)" opacity="0.5" />

      {/* TV legs */}
      <line x1="16" y1="42" x2="13" y2="46" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="32" y1="42" x2="35" y2="46" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />

      {/* Antenna */}
      <line x1="20" y1="14" x2="14" y2="5" stroke="#888" strokeWidth="1" strokeLinecap="round" />
      <line x1="28" y1="14" x2="34" y2="5" stroke="#888" strokeWidth="1" strokeLinecap="round" />
      <circle cx="14" cy="5" r="1.2" fill="#AAA" />
      <circle cx="34" cy="5" r="1.2" fill="#AAA" />

      {/* TV body */}
      <rect x="8" y="14" width="32" height="28" rx="4" fill="url(#rtv-body)" />

      {/* TV body edge highlight */}
      <rect x="8" y="14" width="32" height="28" rx="4" fill="none" stroke="#888" strokeWidth="0.5" />

      {/* Screen */}
      <rect x="12" y="18" width="24" height="18" rx="1" fill="url(#rtv-screen)" />

      {/* Screen CRT glow */}
      <rect x="12" y="18" width="24" height="18" rx="1" fill="url(#rtv-screenGlow)" />

      {/* Chef figure on screen (silhouette style) */}
      {/* Chef hat */}
      <path d="M21 22 Q20 19 22 19 Q23 18 24 18 Q25 18 26 19 Q28 19 27 22 Z" fill="#DDDDEE" opacity="0.8" />
      <rect x="21" y="21.5" width="6" height="1" fill="#CCCCDD" opacity="0.7" />

      {/* Chef body */}
      <rect x="21.5" y="22.5" width="5" height="6" rx="1" fill="#EEEEEE" opacity="0.7" />

      {/* Chef arms */}
      <line x1="21.5" y1="24" x2="18" y2="26" stroke="#DDDDDD" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <line x1="26.5" y1="24" x2="30" y2="22" stroke="#DDDDDD" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />

      {/* Pizza being tossed */}
      <ellipse cx="30" cy="21" rx="2.5" ry="1" fill="#D4A044" opacity="0.6" />
      <ellipse cx="30" cy="21" rx="1.8" ry="0.7" fill="#CC3333" opacity="0.4" />

      {/* Chef legs */}
      <line x1="23" y1="28.5" x2="22" y2="33" stroke="#333355" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <line x1="25" y1="28.5" x2="26" y2="33" stroke="#333355" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

      {/* LIVE badge */}
      <rect x="28" y="19" width="7" height="3.5" rx="1" fill="url(#rtv-live)" />
      <circle cx="29.5" cy="20.7" r="0.6" fill="white" opacity="0.9" />
      <text x="33" y="21.5" textAnchor="middle" fontSize="2.5" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">LIVE</text>

      {/* Scan lines */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <line key={i} x1="12" y1={19 + i * 2} x2="36" y2={19 + i * 2} stroke="white" strokeWidth="0.15" opacity="0.08" />
      ))}

      {/* TV control knobs on right side */}
      <circle cx="39" cy="24" r="1.5" fill="#555" stroke="#666" strokeWidth="0.3" />
      <circle cx="39" cy="29" r="1.5" fill="#555" stroke="#666" strokeWidth="0.3" />

      {/* Screen corner glare */}
      <path d="M13 19 L17 19 L13 23 Z" fill="white" opacity="0.06" />

      {/* Retro glow around TV */}
      <rect x="6" y="12" width="36" height="32" rx="6" fill="none" stroke="#6688BB" strokeWidth="0.4" opacity="0.2" />
    </svg>
  );
}
