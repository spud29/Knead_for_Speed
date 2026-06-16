export default function MasterChef({ size = 24, className = '', style = {} }) {
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
        <linearGradient id="mc-hat" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </linearGradient>
        <radialGradient id="mc-gold" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFD54F" />
          <stop offset="60%" stopColor="#FFC107" />
          <stop offset="100%" stopColor="#FF8F00" />
        </radialGradient>
        <linearGradient id="mc-coat" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FAFAFA" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </linearGradient>
        <linearGradient id="mc-flame" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FF6D00" />
          <stop offset="40%" stopColor="#FF9100" />
          <stop offset="70%" stopColor="#FFAB00" />
          <stop offset="100%" stopColor="#FFD54F" />
        </linearGradient>
        <radialGradient id="mc-flameglow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFAB00" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FF6D00" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="mc-pizza" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE082" />
          <stop offset="60%" stopColor="#E8B84E" />
          <stop offset="100%" stopColor="#A1887F" />
        </radialGradient>
      </defs>

      {/* Golden glow behind chef */}
      <ellipse cx="24" cy="24" rx="18" ry="20" fill="#FFD54F" opacity="0.08" />

      {/* Chef body / coat */}
      <path d="M16 28 L16 44 L32 44 L32 28 Q28 26 24 26 Q20 26 16 28 Z" fill="url(#mc-coat)" />
      {/* Coat buttons */}
      <circle cx="22" cy="32" r="0.6" fill="#BDBDBD" />
      <circle cx="22" cy="35" r="0.6" fill="#BDBDBD" />
      <circle cx="22" cy="38" r="0.6" fill="#BDBDBD" />
      {/* Coat fold line */}
      <line x1="22" y1="28" x2="22" y2="44" stroke="#E0E0E0" strokeWidth="0.4" />

      {/* Michelin star pin */}
      <polygon points="27,30 27.6,31.5 29.2,31.5 28,32.5 28.4,34 27,33 25.6,34 26,32.5 24.8,31.5 26.4,31.5" fill="url(#mc-gold)" />
      {/* Star glow */}
      <ellipse cx="27" cy="32" rx="2.5" ry="2.5" fill="#FFD54F" opacity="0.15" />

      {/* Head */}
      <ellipse cx="24" cy="23" rx="5" ry="5.5" fill="#FFCCBC" />
      {/* Face details */}
      <ellipse cx="22" cy="22.5" rx="0.6" ry="0.7" fill="#5D4037" />
      <ellipse cx="26" cy="22.5" rx="0.6" ry="0.7" fill="#5D4037" />
      <path d="M22.5 25 Q24 26.5 25.5 25" fill="none" stroke="#8D6E63" strokeWidth="0.5" />

      {/* Golden toque (tall chef hat) */}
      <ellipse cx="24" cy="18" rx="6" ry="2" fill="url(#mc-hat)" />
      <rect x="19" y="8" width="10" height="10" rx="2" fill="url(#mc-hat)" />
      {/* Gold band on hat */}
      <rect x="19" y="15" width="10" height="2" fill="url(#mc-gold)" />
      {/* Hat puff top */}
      <ellipse cx="24" cy="8.5" rx="5" ry="2.5" fill="#FFFFFF" />
      {/* Gold trim on top */}
      <ellipse cx="24" cy="8.5" rx="5" ry="2.5" fill="none" stroke="#FFC107" strokeWidth="0.5" />
      {/* Hat highlight */}
      <ellipse cx="22" cy="11" rx="2" ry="3" fill="white" opacity="0.2" />

      {/* Left arm holding peel */}
      <path d="M16 28 L8 22 L7 23 L14 30" fill="url(#mc-coat)" stroke="#E0E0E0" strokeWidth="0.3" />

      {/* Pizza peel handle */}
      <line x1="6" y1="14" x2="10" y2="24" stroke="#8D6E63" strokeWidth="1.5" strokeLinecap="round" />

      {/* Pizza peel paddle */}
      <ellipse cx="5" cy="12" rx="4.5" ry="3" fill="#A1887F" />
      <ellipse cx="5" cy="12" rx="3.8" ry="2.3" fill="#8D6E63" />

      {/* Pizza on peel */}
      <ellipse cx="5" cy="11.5" rx="3.5" ry="2" fill="url(#mc-pizza)" />
      {/* Toppings */}
      <circle cx="4" cy="11" r="0.6" fill="#C62828" opacity="0.8" />
      <circle cx="6" cy="11.5" r="0.5" fill="#C62828" opacity="0.7" />
      <circle cx="5" cy="12.3" r="0.4" fill="#33691E" opacity="0.7" />

      {/* Flames on pizza */}
      <path d="M3 10 Q3.5 7 4 9 Q4.5 6 5 9 Q5.5 7 6 10 Q6.5 7.5 7 10" fill="url(#mc-flame)" opacity="0.85" />
      <path d="M3.5 9.5 Q4 7.5 4.5 9 Q5 7 5.5 9.5" fill="#FFD54F" opacity="0.5" />
      {/* Flame glow */}
      <ellipse cx="5" cy="9" rx="5" ry="4" fill="url(#mc-flameglow)" />

      {/* Right arm gesture */}
      <path d="M32 28 L36 30 L37 29" fill="url(#mc-coat)" stroke="#E0E0E0" strokeWidth="0.3" />

      {/* Sparkles around figure */}
      <polygon points="38,10 38.5,11 39.5,11 38.8,11.7 39,12.7 38,12 37,12.7 37.2,11.7 36.5,11 37.5,11" fill="#FFD54F" opacity="0.6" />
      <polygon points="42,18 42.3,18.6 43,18.6 42.5,19 42.7,19.6 42,19.2 41.3,19.6 41.5,19 41,18.6 41.7,18.6" fill="#FFD54F" opacity="0.4" />
      <polygon points="10,5 10.3,5.8 11,5.8 10.5,6.3 10.7,7 10,6.5 9.3,7 9.5,6.3 9,5.8 9.7,5.8" fill="#FFD54F" opacity="0.5" />
    </svg>
  );
}
