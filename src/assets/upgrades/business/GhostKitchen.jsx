export default function GhostKitchen({ size = 24, className = '', style = {} }) {
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
        <linearGradient id="gk-building" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2C2C3E" />
          <stop offset="100%" stopColor="#14141E" />
        </linearGradient>
        <radialGradient id="gk-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#00FF88" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#00CC66" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#009944" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="gk-portal" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#00FFAA" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#00DD88" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#008855" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="gk-ghost" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#CCFFEE" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="gk-roof" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3A3A50" />
          <stop offset="100%" stopColor="#2C2C3E" />
        </linearGradient>
      </defs>

      {/* Eerie ground glow */}
      <ellipse cx="24" cy="44" rx="20" ry="4" fill="url(#gk-glow)" />

      {/* Building body */}
      <rect x="8" y="16" width="32" height="28" rx="1" fill="url(#gk-building)" />

      {/* Roof */}
      <path d="M6 16 L24 6 L42 16 Z" fill="url(#gk-roof)" />
      <path d="M6 16 L24 6 L42 16" fill="none" stroke="#4A4A60" strokeWidth="0.5" />

      {/* Chimney */}
      <rect x="32" y="8" width="4" height="8" fill="#222235" />
      {/* Green smoke from chimney */}
      <ellipse cx="34" cy="6" rx="2.5" ry="2" fill="#00FF88" opacity="0.15" />
      <ellipse cx="33" cy="4" rx="1.8" ry="1.5" fill="#00FF88" opacity="0.1" />

      {/* Dark windows */}
      <rect x="11" y="20" width="5" height="6" rx="0.5" fill="#0A0A14" />
      <rect x="21.5" y="20" width="5" height="6" rx="0.5" fill="#0A0A14" />
      <rect x="32" y="20" width="5" height="6" rx="0.5" fill="#0A0A14" />

      {/* Eerie window glows */}
      <rect x="11" y="20" width="5" height="6" rx="0.5" fill="#00FF88" opacity="0.12" />
      <rect x="32" y="20" width="5" height="6" rx="0.5" fill="#00DDFF" opacity="0.1" />

      {/* Portal/door opening */}
      <rect x="18" y="30" width="12" height="14" rx="6 6 0 0" fill="#0A0A14" />
      <ellipse cx="24" cy="36" rx="5" ry="6" fill="url(#gk-portal)" />

      {/* Portal ring glow */}
      <ellipse cx="24" cy="36" rx="5.5" ry="6.5" fill="none" stroke="#00FF88" strokeWidth="0.8" opacity="0.4" />
      <ellipse cx="24" cy="36" rx="6.5" ry="7.5" fill="none" stroke="#00FF88" strokeWidth="0.4" opacity="0.2" />

      {/* Ghost pizza floating out */}
      {/* Ghost body */}
      <path d="M16 28 Q14 22 17 18 Q20 15 24 16 Q28 15 30 19 Q32 24 30 28 L28 26 L26 28 L24 26 L22 28 L20 26 L18 28 Z" fill="url(#gk-ghost)" />

      {/* Ghost eyes */}
      <ellipse cx="20" cy="21" rx="1.5" ry="2" fill="#0A0A14" />
      <ellipse cx="27" cy="21" rx="1.5" ry="2" fill="#0A0A14" />
      <circle cx="20.3" cy="20.5" r="0.5" fill="#00FF88" opacity="0.8" />
      <circle cx="27.3" cy="20.5" r="0.5" fill="#00FF88" opacity="0.8" />

      {/* Ghost mouth */}
      <ellipse cx="23.5" cy="24" rx="2" ry="1" fill="#0A0A14" opacity="0.7" />

      {/* Pizza the ghost is carrying (translucent) */}
      <path d="M30 18 L36 25 L27 24 Z" fill="#F5D76E" opacity="0.45" />
      <circle cx="32" cy="22" r="0.7" fill="#C0392B" opacity="0.4" />
      <circle cx="30" cy="23" r="0.5" fill="#C0392B" opacity="0.4" />

      {/* Floating particles */}
      <circle cx="14" cy="30" r="0.8" fill="#00FF88" opacity="0.3" />
      <circle cx="34" cy="28" r="0.6" fill="#00DDFF" opacity="0.25" />
      <circle cx="10" cy="24" r="0.5" fill="#00FF88" opacity="0.2" />
      <circle cx="38" cy="32" r="0.7" fill="#00DDFF" opacity="0.2" />
    </svg>
  );
}
