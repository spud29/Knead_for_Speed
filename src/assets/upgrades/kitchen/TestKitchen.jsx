export default function TestKitchen({ size = 24, className = '', style = {} }) {
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
        <linearGradient id="tk-counter" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#CFD8DC" />
          <stop offset="50%" stopColor="#B0BEC5" />
          <stop offset="100%" stopColor="#78909C" />
        </linearGradient>
        <linearGradient id="tk-beaker" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(200,230,255,0.7)" />
          <stop offset="100%" stopColor="rgba(130,180,220,0.5)" />
        </linearGradient>
        <linearGradient id="tk-liquid-green" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#76FF03" />
          <stop offset="100%" stopColor="#33691E" />
        </linearGradient>
        <linearGradient id="tk-liquid-orange" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6D00" />
          <stop offset="100%" stopColor="#E65100" />
        </linearGradient>
        <linearGradient id="tk-liquid-purple" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E040FB" />
          <stop offset="100%" stopColor="#7B1FA2" />
        </linearGradient>
        <radialGradient id="tk-pizza" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFECB3" />
          <stop offset="60%" stopColor="#E8B84E" />
          <stop offset="100%" stopColor="#A1887F" />
        </radialGradient>
      </defs>

      {/* Lab coat hanging on hook in background */}
      <line x1="40" y1="4" x2="40" y2="7" stroke="#78909C" strokeWidth="0.8" />
      <circle cx="40" cy="4" r="0.8" fill="#90A4AE" />
      <path d="M36 7 L40 6 L44 7 L43 18 L41 16 L40 18 L39 16 L37 18 Z" fill="#F5F5F5" />
      <path d="M36 7 L40 6 L44 7 L43 10 L37 10 Z" fill="#ECEFF1" />

      {/* Stainless steel counter */}
      <rect x="2" y="26" width="44" height="4" rx="1" fill="url(#tk-counter)" />
      {/* Counter edge highlight */}
      <rect x="2" y="26" width="44" height="1" rx="0.5" fill="white" opacity="0.3" />
      {/* Counter legs */}
      <rect x="6" y="30" width="2" height="14" fill="#78909C" />
      <rect x="40" y="30" width="2" height="14" fill="#78909C" />
      <rect x="5" y="43" width="4" height="1.5" rx="0.5" fill="#607D8B" />
      <rect x="39" y="43" width="4" height="1.5" rx="0.5" fill="#607D8B" />

      {/* Shelf behind counter */}
      <rect x="4" y="16" width="32" height="1.5" rx="0.5" fill="#90A4AE" />

      {/* Beaker 1 - green bubbling */}
      <path d="M7 16 L7 10 L6 10 L6 8 L10 8 L10 10 L9 10 L9 16" fill="url(#tk-beaker)" stroke="#B0BEC5" strokeWidth="0.4" />
      <rect x="6.5" y="12" width="3" height="4" rx="0.3" fill="url(#tk-liquid-green)" opacity="0.8" />
      {/* Bubbles */}
      <circle cx="7.5" cy="11" r="0.5" fill="#76FF03" opacity="0.6" />
      <circle cx="8.5" cy="10.5" r="0.4" fill="#76FF03" opacity="0.5" />
      <circle cx="8" cy="9" r="0.3" fill="#76FF03" opacity="0.4" />

      {/* Test tube 2 - orange */}
      <rect x="13" y="8" width="2" height="8" rx="1" fill="url(#tk-beaker)" stroke="#B0BEC5" strokeWidth="0.3" />
      <rect x="13.2" y="11" width="1.6" height="4.5" rx="0.8" fill="url(#tk-liquid-orange)" opacity="0.8" />
      {/* Ember glow */}
      <ellipse cx="14" cy="12" rx="1.5" ry="1" fill="#FF6D00" opacity="0.2" />

      {/* Test tube 3 - purple */}
      <rect x="17" y="9" width="2" height="7" rx="1" fill="url(#tk-beaker)" stroke="#B0BEC5" strokeWidth="0.3" />
      <rect x="17.2" y="11.5" width="1.6" height="4" rx="0.8" fill="url(#tk-liquid-purple)" opacity="0.8" />

      {/* Beaker 2 - larger, orange */}
      <path d="M22 16 L22 11 L21 11 L21 9 L26 9 L26 11 L25 11 L25 16" fill="url(#tk-beaker)" stroke="#B0BEC5" strokeWidth="0.4" />
      <rect x="21.5" y="12.5" width="4" height="3.5" rx="0.3" fill="url(#tk-liquid-orange)" opacity="0.7" />
      {/* Bubbles */}
      <circle cx="23" cy="11.5" r="0.4" fill="#FF9100" opacity="0.5" />
      <circle cx="24" cy="10.8" r="0.3" fill="#FF9100" opacity="0.4" />

      {/* Exotic pizza on counter */}
      <ellipse cx="24" cy="24.5" rx="7" ry="2.5" fill="url(#tk-pizza)" />
      {/* Pizza crust edge */}
      <ellipse cx="24" cy="24.5" rx="7" ry="2.5" fill="none" stroke="#A1887F" strokeWidth="0.8" />
      {/* Strange toppings - glowing dots */}
      <circle cx="21" cy="24" r="0.8" fill="#76FF03" opacity="0.8" />
      <circle cx="23" cy="23.5" r="0.6" fill="#E040FB" opacity="0.7" />
      <circle cx="26" cy="24" r="0.7" fill="#FF6D00" opacity="0.8" />
      <circle cx="24.5" cy="25" r="0.5" fill="#76FF03" opacity="0.6" />
      <circle cx="22" cy="25" r="0.6" fill="#E040FB" opacity="0.6" />
      {/* Pizza glow */}
      <ellipse cx="24" cy="24.5" rx="8" ry="3" fill="#FF6D00" opacity="0.1" />

      {/* Clipboard / notes on counter */}
      <rect x="34" y="21" width="5" height="6" rx="0.5" fill="#ECEFF1" />
      <rect x="35.5" y="20.5" width="2" height="1" rx="0.3" fill="#78909C" />
      <line x1="35" y1="23" x2="38" y2="23" stroke="#B0BEC5" strokeWidth="0.4" />
      <line x1="35" y1="24.2" x2="38" y2="24.2" stroke="#B0BEC5" strokeWidth="0.4" />
      <line x1="35" y1="25.4" x2="37" y2="25.4" stroke="#B0BEC5" strokeWidth="0.4" />

      {/* Ambient ember glow on counter */}
      <ellipse cx="24" cy="26" rx="12" ry="2" fill="#FF6D00" opacity="0.06" />
      {/* Steel highlight */}
      <ellipse cx="20" cy="26.5" rx="8" ry="0.5" fill="white" opacity="0.12" />
    </svg>
  );
}
