export default function WorldDomination({ size = 24, className = '', style = {} }) {
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
        <radialGradient id="wd-globe" cx="0.4" cy="0.35" r="0.65">
          <stop offset="0%" stopColor="#4488CC" />
          <stop offset="60%" stopColor="#2266AA" />
          <stop offset="100%" stopColor="#0D3D6B" />
        </radialGradient>
        <radialGradient id="wd-aura" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0" />
          <stop offset="60%" stopColor="#FFD700" stopOpacity="0.2" />
          <stop offset="80%" stopColor="#FFA500" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#FF6600" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="wd-auraInner" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="wd-continent" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5D76E" />
          <stop offset="50%" stopColor="#D4A044" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id="wd-bolt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFEE44" />
          <stop offset="100%" stopColor="#FFAA00" />
        </linearGradient>
      </defs>

      {/* Outer golden aura ring */}
      <circle cx="24" cy="24" r="23" fill="url(#wd-aura)" />

      {/* Inner aura glow */}
      <circle cx="24" cy="24" r="18" fill="url(#wd-auraInner)" />

      {/* Aura pulse rings */}
      <circle cx="24" cy="24" r="20" fill="none" stroke="#FFD700" strokeWidth="0.4" opacity="0.25" />
      <circle cx="24" cy="24" r="22" fill="none" stroke="#FFA500" strokeWidth="0.3" opacity="0.15" />

      {/* Globe */}
      <circle cx="24" cy="24" r="14" fill="url(#wd-globe)" />

      {/* Globe outline */}
      <circle cx="24" cy="24" r="14" fill="none" stroke="#1A4A7A" strokeWidth="0.5" />

      {/* Latitude lines */}
      <ellipse cx="24" cy="17" rx="12" ry="2.5" fill="none" stroke="#3377AA" strokeWidth="0.3" opacity="0.4" />
      <ellipse cx="24" cy="24" rx="14" ry="3" fill="none" stroke="#3377AA" strokeWidth="0.3" opacity="0.4" />
      <ellipse cx="24" cy="31" rx="12" ry="2.5" fill="none" stroke="#3377AA" strokeWidth="0.3" opacity="0.4" />

      {/* Longitude arc */}
      <ellipse cx="24" cy="24" rx="5" ry="14" fill="none" stroke="#3377AA" strokeWidth="0.3" opacity="0.3" />

      {/* Pizza-slice continents (triangular landmasses) */}
      {/* North America - large pizza slice */}
      <path d="M16 14 L22 12 L20 22 Z" fill="url(#wd-continent)" opacity="0.85" />
      <circle cx="18" cy="16" r="0.6" fill="#A0301A" opacity="0.7" />
      <circle cx="20" cy="18" r="0.5" fill="#A0301A" opacity="0.7" />

      {/* Europe-Africa slice */}
      <path d="M27 14 L30 16 L28 26 Z" fill="url(#wd-continent)" opacity="0.85" />
      <circle cx="28" cy="18" r="0.5" fill="#A0301A" opacity="0.7" />
      <circle cx="29" cy="22" r="0.4" fill="#A0301A" opacity="0.7" />

      {/* South America slice */}
      <path d="M18 26 L22 25 L20 34 Z" fill="url(#wd-continent)" opacity="0.8" />
      <circle cx="20" cy="29" r="0.4" fill="#A0301A" opacity="0.6" />

      {/* Asia/Australia slice */}
      <path d="M30 22 L35 20 L32 30 Z" fill="url(#wd-continent)" opacity="0.75" />
      <circle cx="32" cy="25" r="0.5" fill="#A0301A" opacity="0.6" />

      {/* Small island slice */}
      <path d="M14 28 L17 27 L15 31 Z" fill="url(#wd-continent)" opacity="0.6" />

      {/* Crust arcs on continent slices */}
      <path d="M17 21 Q19 23 20 22" fill="none" stroke="#8B6529" strokeWidth="0.4" opacity="0.6" />
      <path d="M28 25 Q27 27 28 26" fill="none" stroke="#8B6529" strokeWidth="0.4" opacity="0.6" />

      {/* Globe highlight/glare */}
      <ellipse cx="19" cy="18" rx="5" ry="4" fill="white" opacity="0.1" />
      <ellipse cx="17" cy="16" rx="2" ry="1.5" fill="white" opacity="0.08" />

      {/* Lightning bolts */}
      <polygon points="6,10 8,14 6.5,14 9,19 5,13 7,13 5,10" fill="url(#wd-bolt)" opacity="0.85" />
      <polygon points="40,8 42,12 40.5,12 43,17 39,11 41,11 39,8" fill="url(#wd-bolt)" opacity="0.85" />
      <polygon points="4,32 6,36 4.5,36 7,40 3,35 5,35 3,32" fill="url(#wd-bolt)" opacity="0.7" />
      <polygon points="42,30 44,34 42.5,34 45,38 41,33 43,33 41,30" fill="url(#wd-bolt)" opacity="0.7" />

      {/* Small lightning sparks */}
      <polygon points="12,6 13,8 12.3,8 14,10 11.5,7.5 12.5,7.5" fill="#FFEE44" opacity="0.5" />
      <polygon points="36,38 37,40 36.3,40 38,42 35.5,39.5 36.5,39.5" fill="#FFEE44" opacity="0.5" />

      {/* Star sparkles at cardinal points */}
      <polygon points="24,2 24.5,3.5 26,4 24.5,4.5 24,6 23.5,4.5 22,4 23.5,3.5" fill="#FFD700" opacity="0.6" />
      <polygon points="46,24 44.5,24.5 44,26 43.5,24.5 42,24 43.5,23.5 44,22 44.5,23.5" fill="#FFD700" opacity="0.5" />
      <polygon points="2,24 3.5,24.5 4,26 4.5,24.5 6,24 4.5,23.5 4,22 3.5,23.5" fill="#FFD700" opacity="0.5" />
      <polygon points="24,42 24.5,43.5 26,44 24.5,44.5 24,46 23.5,44.5 22,44 23.5,43.5" fill="#FFD700" opacity="0.6" />
    </svg>
  );
}
