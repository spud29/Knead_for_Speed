export default function Pizzaverse({ size = 24, className = '', style = {} }) {
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
        <radialGradient id="pv-portal" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="25%" stopColor="#1A0033" />
          <stop offset="50%" stopColor="#4A148C" />
          <stop offset="75%" stopColor="#7B1FA2" />
          <stop offset="100%" stopColor="#CE93D8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pv-swirl" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E040FB" stopOpacity="0" />
          <stop offset="40%" stopColor="#7C4DFF" stopOpacity="0.3" />
          <stop offset="70%" stopColor="#448AFF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#18FFFF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pv-energy" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD54F" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#FF8F00" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FF6D00" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pv-space" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0D0221" />
          <stop offset="50%" stopColor="#150734" />
          <stop offset="100%" stopColor="#0A0118" />
        </linearGradient>
        <radialGradient id="pv-pizza-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE082" />
          <stop offset="60%" stopColor="#E8B84E" />
          <stop offset="100%" stopColor="#A1887F" />
        </radialGradient>
      </defs>

      {/* Deep space background */}
      <rect x="0" y="0" width="48" height="48" fill="url(#pv-space)" />

      {/* Distant stars */}
      <circle cx="3" cy="4" r="0.4" fill="white" opacity="0.7" />
      <circle cx="45" cy="7" r="0.5" fill="white" opacity="0.6" />
      <circle cx="8" cy="42" r="0.3" fill="white" opacity="0.5" />
      <circle cx="40" cy="40" r="0.4" fill="white" opacity="0.6" />
      <circle cx="5" cy="20" r="0.3" fill="white" opacity="0.4" />
      <circle cx="43" cy="25" r="0.3" fill="white" opacity="0.5" />
      <circle cx="12" cy="8" r="0.3" fill="#CE93D8" opacity="0.4" />
      <circle cx="36" cy="4" r="0.3" fill="#81D4FA" opacity="0.4" />

      {/* Cosmic swirl ring outer */}
      <ellipse cx="24" cy="24" rx="20" ry="20" fill="none" stroke="#7C4DFF" strokeWidth="0.5" opacity="0.2" />
      <ellipse cx="24" cy="24" rx="17" ry="17" fill="none" stroke="#448AFF" strokeWidth="0.6" opacity="0.15" />

      {/* Swirl arms */}
      <path d="M24 4 Q36 10 40 24 Q36 38 24 44 Q12 38 8 24 Q12 10 24 4" fill="none" stroke="#CE93D8" strokeWidth="0.6" opacity="0.15" />
      <path d="M4 24 Q10 12 24 8 Q38 12 44 24 Q38 36 24 40 Q10 36 4 24" fill="none" stroke="#7C4DFF" strokeWidth="0.5" opacity="0.12" />

      {/* Swirl energy bands */}
      <path d="M24 7 Q34 12 37 24 Q34 36 24 41" fill="none" stroke="#E040FB" strokeWidth="1" opacity="0.2" />
      <path d="M24 7 Q14 12 11 24 Q14 36 24 41" fill="none" stroke="#448AFF" strokeWidth="1" opacity="0.2" />
      <path d="M7 24 Q12 14 24 11 Q36 14 41 24" fill="none" stroke="#18FFFF" strokeWidth="0.8" opacity="0.15" />

      {/* Portal vortex */}
      <ellipse cx="24" cy="24" rx="13" ry="13" fill="url(#pv-portal)" />
      <ellipse cx="24" cy="24" rx="13" ry="13" fill="url(#pv-swirl)" />

      {/* Inner ring glow */}
      <ellipse cx="24" cy="24" rx="10" ry="10" fill="none" stroke="#E040FB" strokeWidth="0.8" opacity="0.4" />
      <ellipse cx="24" cy="24" rx="7" ry="7" fill="none" stroke="#7C4DFF" strokeWidth="0.6" opacity="0.3" />

      {/* Central energy burst */}
      <ellipse cx="24" cy="24" rx="4" ry="4" fill="url(#pv-energy)" />

      {/* Pizza slice 1 - flying upper right */}
      <g transform="translate(33, 10) rotate(25)">
        <polygon points="0,0 -3,6 3,6" fill="url(#pv-pizza-glow)" />
        <polygon points="0,1 -2.2,5 2.2,5" fill="#FFE082" />
        <circle cx="0" cy="3.5" r="0.5" fill="#C62828" opacity="0.7" />
        <circle cx="-1" cy="4.2" r="0.4" fill="#33691E" opacity="0.6" />
        {/* Energy trail */}
        <line x1="0" y1="6" x2="0" y2="10" stroke="#FFD54F" strokeWidth="0.5" opacity="0.4" />
        <line x1="-1" y1="6.5" x2="-2" y2="10" stroke="#FFD54F" strokeWidth="0.3" opacity="0.3" />
      </g>

      {/* Pizza slice 2 - flying left */}
      <g transform="translate(9, 30) rotate(-40)">
        <polygon points="0,0 -2.5,5 2.5,5" fill="url(#pv-pizza-glow)" />
        <polygon points="0,1 -1.8,4.2 1.8,4.2" fill="#FFE082" />
        <circle cx="0.5" cy="3" r="0.4" fill="#C62828" opacity="0.7" />
        {/* Energy trail */}
        <line x1="0" y1="5" x2="1" y2="9" stroke="#FFD54F" strokeWidth="0.4" opacity="0.35" />
      </g>

      {/* Pizza slice 3 - entering portal center */}
      <g transform="translate(24, 20) rotate(10)">
        <polygon points="0,0 -2,4 2,4" fill="url(#pv-pizza-glow)" />
        <polygon points="0,0.8 -1.4,3.3 1.4,3.3" fill="#FFE082" />
        <circle cx="0" cy="2.5" r="0.4" fill="#C62828" opacity="0.8" />
        <circle cx="-0.7" cy="3" r="0.3" fill="#33691E" opacity="0.6" />
      </g>

      {/* Pizza slice 4 - flying lower right */}
      <g transform="translate(36, 35) rotate(60)">
        <polygon points="0,0 -2,4 2,4" fill="url(#pv-pizza-glow)" />
        <polygon points="0,0.8 -1.3,3.2 1.3,3.2" fill="#FFE082" />
        <circle cx="0.3" cy="2.2" r="0.35" fill="#C62828" opacity="0.7" />
        <line x1="0" y1="4" x2="-1" y2="7" stroke="#FFD54F" strokeWidth="0.3" opacity="0.3" />
      </g>

      {/* Golden energy particles around portal */}
      <circle cx="18" cy="12" r="0.7" fill="#FFD54F" opacity="0.5" />
      <circle cx="35" cy="18" r="0.5" fill="#FFD54F" opacity="0.4" />
      <circle cx="14" cy="32" r="0.6" fill="#FFD54F" opacity="0.45" />
      <circle cx="38" cy="34" r="0.5" fill="#FFD54F" opacity="0.4" />
      <circle cx="30" cy="8" r="0.4" fill="#E040FB" opacity="0.3" />
      <circle cx="10" cy="18" r="0.4" fill="#7C4DFF" opacity="0.3" />

      {/* Portal rim sparkles */}
      <circle cx="15" cy="14" r="0.5" fill="white" opacity="0.6" />
      <circle cx="34" cy="16" r="0.4" fill="white" opacity="0.5" />
      <circle cx="36" cy="30" r="0.5" fill="white" opacity="0.5" />
      <circle cx="13" cy="33" r="0.4" fill="white" opacity="0.4" />

      {/* Overall golden pizza energy glow */}
      <ellipse cx="24" cy="24" rx="16" ry="16" fill="#FFD54F" opacity="0.04" />
    </svg>
  );
}
