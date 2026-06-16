export default function FranchiseHQ({ size = 24, className = '', style = {} }) {
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
        <linearGradient id="fhq-glass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#90CAF9" />
          <stop offset="40%" stopColor="#64B5F6" />
          <stop offset="100%" stopColor="#1E88E5" />
        </linearGradient>
        <linearGradient id="fhq-glass2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#42A5F5" />
          <stop offset="100%" stopColor="#1565C0" />
        </linearGradient>
        <linearGradient id="fhq-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1A237E" />
          <stop offset="60%" stopColor="#283593" />
          <stop offset="100%" stopColor="#3949AB" />
        </linearGradient>
        <radialGradient id="fhq-gold" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#FFD54F" />
          <stop offset="60%" stopColor="#FFC107" />
          <stop offset="100%" stopColor="#FF8F00" />
        </radialGradient>
        <linearGradient id="fhq-shine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      {/* Night sky background */}
      <rect x="0" y="0" width="48" height="48" rx="2" fill="url(#fhq-sky)" />

      {/* Stars */}
      <circle cx="4" cy="5" r="0.5" fill="white" opacity="0.6" />
      <circle cx="12" cy="3" r="0.4" fill="white" opacity="0.5" />
      <circle cx="38" cy="6" r="0.5" fill="white" opacity="0.7" />
      <circle cx="44" cy="3" r="0.3" fill="white" opacity="0.5" />
      <circle cx="8" cy="10" r="0.3" fill="white" opacity="0.4" />

      {/* Distant city skyline */}
      <rect x="0" y="34" width="5" height="12" fill="#1A237E" />
      <rect x="3" y="36" width="4" height="10" fill="#1A237E" />
      <rect x="6" y="38" width="3" height="8" fill="#1A237E" />
      <rect x="36" y="36" width="4" height="10" fill="#1A237E" />
      <rect x="39" y="33" width="3" height="13" fill="#1A237E" />
      <rect x="41" y="37" width="5" height="9" fill="#1A237E" />
      <rect x="44" y="35" width="4" height="11" fill="#1A237E" />
      {/* Tiny city windows */}
      <rect x="1" y="36" width="0.8" height="0.8" fill="#FFE082" opacity="0.5" />
      <rect x="3.5" y="38" width="0.8" height="0.8" fill="#FFE082" opacity="0.4" />
      <rect x="40" y="35" width="0.8" height="0.8" fill="#FFE082" opacity="0.5" />
      <rect x="42" y="39" width="0.8" height="0.8" fill="#FFE082" opacity="0.4" />
      <rect x="45" y="37" width="0.8" height="0.8" fill="#FFE082" opacity="0.5" />

      {/* Main skyscraper */}
      <rect x="14" y="12" width="20" height="34" rx="1" fill="url(#fhq-glass)" />

      {/* Glass panel lines - vertical */}
      <line x1="20" y1="12" x2="20" y2="46" stroke="#42A5F5" strokeWidth="0.3" opacity="0.5" />
      <line x1="27" y1="12" x2="27" y2="46" stroke="#42A5F5" strokeWidth="0.3" opacity="0.5" />

      {/* Glass panel lines - horizontal */}
      <line x1="14" y1="18" x2="34" y2="18" stroke="#42A5F5" strokeWidth="0.3" opacity="0.4" />
      <line x1="14" y1="24" x2="34" y2="24" stroke="#42A5F5" strokeWidth="0.3" opacity="0.4" />
      <line x1="14" y1="30" x2="34" y2="30" stroke="#42A5F5" strokeWidth="0.3" opacity="0.4" />
      <line x1="14" y1="36" x2="34" y2="36" stroke="#42A5F5" strokeWidth="0.3" opacity="0.4" />
      <line x1="14" y1="42" x2="34" y2="42" stroke="#42A5F5" strokeWidth="0.3" opacity="0.4" />

      {/* Window reflections / lit offices */}
      <rect x="15" y="19" width="4" height="4" fill="#90CAF9" opacity="0.3" />
      <rect x="21" y="25" width="5" height="4" fill="#BBDEFB" opacity="0.2" />
      <rect x="28" y="31" width="5" height="4" fill="#90CAF9" opacity="0.25" />
      <rect x="15" y="37" width="4" height="4" fill="#BBDEFB" opacity="0.2" />

      {/* Glass shine diagonal */}
      <polygon points="14,12 20,12 14,28" fill="url(#fhq-shine)" />

      {/* Building entrance */}
      <rect x="20" y="42" width="8" height="4" rx="0.5" fill="#1565C0" />
      <rect x="22" y="43" width="1.5" height="3" fill="#90CAF9" opacity="0.4" />
      <rect x="24.5" y="43" width="1.5" height="3" fill="#90CAF9" opacity="0.4" />

      {/* Pizza slice logo on building */}
      <polygon points="24,15 20,22 28,22" fill="url(#fhq-gold)" />
      {/* Cheese/sauce on logo */}
      <polygon points="24,16.5 21.5,21 26.5,21" fill="#FFE082" />
      {/* Pepperoni dots on logo */}
      <circle cx="23.5" cy="19.5" r="0.7" fill="#E53935" opacity="0.8" />
      <circle cx="25" cy="20" r="0.6" fill="#E53935" opacity="0.7" />
      {/* Logo glow */}
      <ellipse cx="24" cy="18" rx="6" ry="5" fill="#FFD54F" opacity="0.1" />

      {/* Antenna/spire on top */}
      <line x1="24" y1="12" x2="24" y2="6" stroke="#B0BEC5" strokeWidth="0.8" />
      <circle cx="24" cy="5.5" r="1" fill="#E53935" />
      <ellipse cx="24" cy="5.5" rx="2" ry="2" fill="#E53935" opacity="0.15" />

      {/* Golden highlight on building top */}
      <ellipse cx="24" cy="13" rx="8" ry="2" fill="#FFD54F" opacity="0.08" />
    </svg>
  );
}
