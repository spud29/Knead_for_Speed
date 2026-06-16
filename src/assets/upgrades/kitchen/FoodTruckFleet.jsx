export default function FoodTruckFleet({ size = 24, className = '', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ftf-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0D1B2A" />
          <stop offset="100%" stopColor="#1B2838" />
        </linearGradient>
        <linearGradient id="ftf-truck1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E53935" />
          <stop offset="100%" stopColor="#B71C1C" />
        </linearGradient>
        <linearGradient id="ftf-truck2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6F00" />
          <stop offset="100%" stopColor="#E65100" />
        </linearGradient>
        <linearGradient id="ftf-truck3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FDD835" />
          <stop offset="100%" stopColor="#F9A825" />
        </linearGradient>
        <radialGradient id="ftf-headlight" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#FFF9C4" />
          <stop offset="100%" stopColor="#FFF9C4" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ftf-beam" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFF9C4" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFF9C4" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ftf-road" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#37474F" />
          <stop offset="100%" stopColor="#263238" />
        </linearGradient>
      </defs>

      {/* Night sky */}
      <rect x="0" y="0" width="48" height="48" fill="url(#ftf-sky)" />

      {/* Stars */}
      <circle cx="5" cy="3" r="0.4" fill="white" opacity="0.7" />
      <circle cx="15" cy="5" r="0.3" fill="white" opacity="0.5" />
      <circle cx="33" cy="2" r="0.5" fill="white" opacity="0.6" />
      <circle cx="43" cy="6" r="0.3" fill="white" opacity="0.5" />
      <circle cx="25" cy="4" r="0.4" fill="white" opacity="0.4" />
      <circle cx="40" cy="10" r="0.3" fill="white" opacity="0.3" />

      {/* City skyline silhouette */}
      <rect x="0" y="35" width="4" height="7" fill="#1A237E" opacity="0.6" />
      <rect x="3" y="33" width="3" height="9" fill="#1A237E" opacity="0.5" />
      <rect x="5" y="36" width="2" height="6" fill="#1A237E" opacity="0.6" />
      <rect x="8" y="34" width="3" height="8" fill="#0D47A1" opacity="0.5" />
      <rect x="36" y="35" width="3" height="7" fill="#1A237E" opacity="0.5" />
      <rect x="38" y="32" width="4" height="10" fill="#1A237E" opacity="0.6" />
      <rect x="41" y="36" width="3" height="6" fill="#0D47A1" opacity="0.5" />
      <rect x="43" y="34" width="5" height="8" fill="#1A237E" opacity="0.5" />
      {/* City windows */}
      <rect x="1" y="37" width="0.6" height="0.6" fill="#FFE082" opacity="0.5" />
      <rect x="4" y="35" width="0.6" height="0.6" fill="#FFE082" opacity="0.4" />
      <rect x="9" y="36" width="0.6" height="0.6" fill="#FFE082" opacity="0.5" />
      <rect x="39" y="34" width="0.6" height="0.6" fill="#FFE082" opacity="0.4" />
      <rect x="44" y="36" width="0.6" height="0.6" fill="#FFE082" opacity="0.5" />

      {/* Road */}
      <rect x="0" y="40" width="48" height="8" fill="url(#ftf-road)" />
      {/* Road center line */}
      <line x1="0" y1="44" x2="8" y2="44" stroke="#FFF9C4" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4" />
      <line x1="40" y1="44" x2="48" y2="44" stroke="#FFF9C4" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4" />

      {/* Spotlight beams from above */}
      <polygon points="20,0 16,20 24,20" fill="#FFF9C4" opacity="0.04" />
      <polygon points="28,0 24,20 32,20" fill="#FFF9C4" opacity="0.04" />

      {/* === Lead truck (center, largest) === */}
      <rect x="16" y="22" width="16" height="10" rx="1.5" fill="url(#ftf-truck1)" />
      {/* White stripe */}
      <rect x="16" y="27" width="16" height="2" fill="white" opacity="0.85" />
      {/* Cabin */}
      <rect x="28" y="24" width="5" height="8" rx="1" fill="#C62828" />
      {/* Windshield */}
      <rect x="29" y="25" width="3.5" height="3.5" rx="0.5" fill="#81D4FA" />
      <line x1="29.5" y1="25.5" x2="30.5" y2="28" stroke="white" strokeWidth="0.3" opacity="0.5" />
      {/* Headlights */}
      <ellipse cx="33.5" cy="27" rx="0.8" ry="1" fill="url(#ftf-headlight)" />
      {/* Lead headlight beams */}
      <polygon points="34,25.5 46,18 46,36 34,28.5" fill="url(#ftf-beam)" />
      {/* Wheels */}
      <circle cx="20" cy="33.5" r="2.2" fill="#263238" />
      <circle cx="20" cy="33.5" r="1.2" fill="#455A64" />
      <circle cx="30" cy="33.5" r="2.2" fill="#263238" />
      <circle cx="30" cy="33.5" r="1.2" fill="#455A64" />
      {/* Roof sign */}
      <rect x="19" y="19.5" width="8" height="2.5" rx="0.5" fill="white" />
      <ellipse cx="23" cy="19" rx="3" ry="1" fill="#FFE082" opacity="0.3" />

      {/* === Left truck (smaller, behind) === */}
      <rect x="5" y="26" width="12" height="8" rx="1" fill="url(#ftf-truck2)" />
      <rect x="5" y="30" width="12" height="1.5" fill="white" opacity="0.8" />
      <rect x="14" y="27.5" width="4" height="6.5" rx="0.8" fill="#E65100" />
      <rect x="14.8" y="28.2" width="2.5" height="2.5" rx="0.5" fill="#81D4FA" />
      <ellipse cx="18.2" cy="30" rx="0.6" ry="0.7" fill="url(#ftf-headlight)" />
      {/* Left headlight beam */}
      <polygon points="18.5,29 24,26 24,34 18.5,31" fill="url(#ftf-beam)" opacity="0.5" />
      <circle cx="8" cy="35.5" r="1.8" fill="#263238" />
      <circle cx="8" cy="35.5" r="1" fill="#455A64" />
      <circle cx="16" cy="35.5" r="1.8" fill="#263238" />
      <circle cx="16" cy="35.5" r="1" fill="#455A64" />

      {/* === Right truck (smaller, behind) === */}
      <rect x="31" y="26" width="12" height="8" rx="1" fill="url(#ftf-truck3)" />
      <rect x="31" y="30" width="12" height="1.5" fill="white" opacity="0.8" />
      <rect x="39" y="27.5" width="4" height="6.5" rx="0.8" fill="#F9A825" />
      <rect x="39.8" y="28.2" width="2.5" height="2.5" rx="0.5" fill="#81D4FA" />
      <ellipse cx="43.2" cy="30" rx="0.6" ry="0.7" fill="url(#ftf-headlight)" />
      <circle cx="34" cy="35.5" r="1.8" fill="#263238" />
      <circle cx="34" cy="35.5" r="1" fill="#455A64" />
      <circle cx="41" cy="35.5" r="1.8" fill="#263238" />
      <circle cx="41" cy="35.5" r="1" fill="#455A64" />

      {/* Motion lines behind fleet */}
      <line x1="1" y1="28" x2="4" y2="28" stroke="#FFB74D" strokeWidth="0.5" opacity="0.4" />
      <line x1="0" y1="31" x2="4" y2="31" stroke="#FFB74D" strokeWidth="0.6" opacity="0.3" />
      <line x1="2" y1="25" x2="5" y2="25" stroke="#FFB74D" strokeWidth="0.4" opacity="0.3" />

      {/* Epic glow beneath fleet */}
      <ellipse cx="24" cy="38" rx="18" ry="3" fill="#FF6D00" opacity="0.08" />
    </svg>
  );
}
