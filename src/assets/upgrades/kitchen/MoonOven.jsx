export default function MoonOven({ size = 24, className = '', style = {} }) {
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
        <linearGradient id="mo-space" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#000011" />
          <stop offset="100%" stopColor="#0A0A2E" />
        </linearGradient>
        <radialGradient id="mo-earth" cx="40%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#4FC3F7" />
          <stop offset="40%" stopColor="#1E88E5" />
          <stop offset="70%" stopColor="#1565C0" />
          <stop offset="100%" stopColor="#0D47A1" />
        </radialGradient>
        <linearGradient id="mo-moon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0E0E0" />
          <stop offset="50%" stopColor="#BDBDBD" />
          <stop offset="100%" stopColor="#9E9E9E" />
        </linearGradient>
        <radialGradient id="mo-oven" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FF8F00" />
          <stop offset="50%" stopColor="#E65100" />
          <stop offset="100%" stopColor="#BF360C" />
        </radialGradient>
        <radialGradient id="mo-ovenglow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFAB00" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#FF6D00" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FF6D00" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="mo-fireglow" cx="50%" cy="80%" r="60%">
          <stop offset="0%" stopColor="#FFF9C4" />
          <stop offset="40%" stopColor="#FFD54F" />
          <stop offset="100%" stopColor="#FF6D00" />
        </radialGradient>
        <radialGradient id="mo-earthglow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4FC3F7" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#4FC3F7" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Deep space background */}
      <rect x="0" y="0" width="48" height="48" fill="url(#mo-space)" />

      {/* Stars */}
      <circle cx="3" cy="5" r="0.4" fill="white" opacity="0.8" />
      <circle cx="12" cy="3" r="0.3" fill="white" opacity="0.6" />
      <circle cx="28" cy="2" r="0.5" fill="white" opacity="0.7" />
      <circle cx="44" cy="5" r="0.3" fill="white" opacity="0.5" />
      <circle cx="38" cy="8" r="0.4" fill="white" opacity="0.6" />
      <circle cx="2" cy="18" r="0.3" fill="white" opacity="0.4" />
      <circle cx="46" cy="20" r="0.3" fill="white" opacity="0.5" />
      <circle cx="7" cy="12" r="0.3" fill="#81D4FA" opacity="0.3" />
      <circle cx="42" cy="15" r="0.3" fill="#CE93D8" opacity="0.3" />

      {/* Earth in the sky */}
      <circle cx="10" cy="10" r="5" fill="url(#mo-earth)" />
      {/* Earth continents hints */}
      <path d="M8 8 Q9 7 10 8 Q11 7 12 8.5 Q11 10 9 9.5 Z" fill="#43A047" opacity="0.5" />
      <path d="M7 11 Q8 10.5 9 11.5 Q8.5 12.5 7 12 Z" fill="#43A047" opacity="0.4" />
      {/* Earth atmosphere glow */}
      <circle cx="10" cy="10" r="6" fill="url(#mo-earthglow)" />
      <circle cx="10" cy="10" r="5" fill="none" stroke="#81D4FA" strokeWidth="0.3" opacity="0.3" />
      {/* Earth highlight */}
      <ellipse cx="8.5" cy="8" rx="1.5" ry="2" fill="white" opacity="0.12" />

      {/* Lunar surface */}
      <path d="M0 32 Q6 30 12 33 Q18 29 24 32 Q30 28 36 31 Q42 29 48 32 L48 48 L0 48 Z" fill="url(#mo-moon)" />

      {/* Craters */}
      <ellipse cx="6" cy="38" rx="3" ry="1.5" fill="#9E9E9E" />
      <ellipse cx="6" cy="38" rx="2.5" ry="1.2" fill="#BDBDBD" />
      <ellipse cx="15" cy="42" rx="2" ry="1" fill="#9E9E9E" />
      <ellipse cx="15" cy="42" rx="1.5" ry="0.7" fill="#BDBDBD" />
      <ellipse cx="38" cy="40" rx="2.5" ry="1.2" fill="#9E9E9E" />
      <ellipse cx="38" cy="40" rx="2" ry="0.9" fill="#BDBDBD" />
      <ellipse cx="44" cy="36" rx="1.5" ry="0.8" fill="#9E9E9E" />
      <ellipse cx="44" cy="36" rx="1" ry="0.5" fill="#BDBDBD" />
      <ellipse cx="28" cy="44" rx="2" ry="1" fill="#9E9E9E" />

      {/* Massive oven structure */}
      <rect x="17" y="22" width="14" height="14" rx="2" fill="url(#mo-oven)" />
      {/* Oven dome top */}
      <path d="M16 24 Q24 16 32 24" fill="#BF360C" />
      <path d="M17 24 Q24 17 31 24" fill="#E65100" />
      {/* Chimney */}
      <rect x="27" y="15" width="3" height="7" fill="#BF360C" />
      <rect x="26.5" y="14.5" width="4" height="1.5" rx="0.5" fill="#8D6E63" />
      {/* Smoke from chimney */}
      <path d="M28.5 14 Q29 12 28 11 Q29 9 28.5 7" fill="none" stroke="white" strokeWidth="0.6" opacity="0.2" />
      <path d="M29.5 13 Q30 11 29 10 Q30 8.5 29.5 7" fill="none" stroke="white" strokeWidth="0.5" opacity="0.15" />

      {/* Oven mouth / fire opening */}
      <rect x="20" y="28" width="8" height="6" rx="1" fill="#1A0000" />
      <rect x="20" y="28" width="8" height="6" rx="1" fill="url(#mo-fireglow)" opacity="0.7" />
      {/* Fire inside */}
      <path d="M21 34 Q22 31 23 33 Q24 30 25 33 Q26 31 27 34" fill="#FFAB00" opacity="0.8" />
      <path d="M22 34 Q23 32 24 33.5 Q25 31.5 26 34" fill="#FFF9C4" opacity="0.6" />

      {/* Oven glow radiating outward */}
      <ellipse cx="24" cy="31" rx="12" ry="8" fill="url(#mo-ovenglow)" />

      {/* Oven brick detail lines */}
      <line x1="17" y1="26" x2="31" y2="26" stroke="#BF360C" strokeWidth="0.3" opacity="0.5" />
      <line x1="17" y1="30" x2="20" y2="30" stroke="#BF360C" strokeWidth="0.3" opacity="0.5" />
      <line x1="28" y1="30" x2="31" y2="30" stroke="#BF360C" strokeWidth="0.3" opacity="0.5" />
      <line x1="17" y1="33" x2="20" y2="33" stroke="#BF360C" strokeWidth="0.3" opacity="0.5" />
      <line x1="28" y1="33" x2="31" y2="33" stroke="#BF360C" strokeWidth="0.3" opacity="0.5" />

      {/* Oven highlight */}
      <ellipse cx="21" cy="24" rx="3" ry="4" fill="white" opacity="0.07" />

      {/* Small rocket nearby */}
      <g transform="translate(40, 26)">
        {/* Rocket body */}
        <rect x="-1.2" y="0" width="2.4" height="6" rx="0.8" fill="#ECEFF1" />
        {/* Nose cone */}
        <polygon points="0,-1.5 -1.2,0 1.2,0" fill="#E53935" />
        {/* Window */}
        <circle cx="0" cy="1.5" r="0.6" fill="#81D4FA" />
        <circle cx="0" cy="1.5" r="0.3" fill="white" opacity="0.4" />
        {/* Fins */}
        <polygon points="-1.2,5 -2.5,6.5 -1.2,4" fill="#E53935" />
        <polygon points="1.2,5 2.5,6.5 1.2,4" fill="#E53935" />
        {/* Exhaust glow */}
        <ellipse cx="0" cy="7" rx="1" ry="1.5" fill="#FFD54F" opacity="0.3" />
        <path d="M-0.5 6 Q0 8 0.5 6" fill="#FF6D00" opacity="0.5" />
      </g>

      {/* Warm glow on lunar surface from oven */}
      <ellipse cx="24" cy="36" rx="10" ry="4" fill="#FF6D00" opacity="0.1" />
      <ellipse cx="24" cy="34" rx="6" ry="2" fill="#FFD54F" opacity="0.08" />
    </svg>
  );
}
