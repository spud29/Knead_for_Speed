export default function OrderingApp({ size = 24, className = '', style = {} }) {
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
        <linearGradient id="oa-phone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3A3A4A" />
          <stop offset="100%" stopColor="#1A1A2A" />
        </linearGradient>
        <linearGradient id="oa-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF5E6" />
          <stop offset="100%" stopColor="#FFE8CC" />
        </linearGradient>
        <linearGradient id="oa-btn" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4CAF50" />
          <stop offset="100%" stopColor="#2E7D32" />
        </linearGradient>
        <radialGradient id="oa-pizza" cx="0.4" cy="0.35" r="0.6">
          <stop offset="0%" stopColor="#F5D76E" />
          <stop offset="60%" stopColor="#D4A044" />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>
        <linearGradient id="oa-badge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF4444" />
          <stop offset="100%" stopColor="#CC0000" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="24" cy="44" rx="12" ry="2" fill="#00000018" />

      {/* Phone body */}
      <rect x="11" y="3" width="26" height="42" rx="3.5" fill="url(#oa-phone)" />

      {/* Screen */}
      <rect x="13" y="7" width="22" height="33" rx="1.5" fill="url(#oa-screen)" />

      {/* Top bar */}
      <rect x="13" y="7" width="22" height="4" rx="1.5" fill="#E65100" />
      <text x="24" y="10.2" textAnchor="middle" fontSize="2.8" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">PIZZA</text>

      {/* Speaker notch */}
      <rect x="20" y="4.5" width="8" height="1.2" rx="0.6" fill="#1A1A2A" />

      {/* Pizza icon on screen */}
      <circle cx="24" cy="20" r="7" fill="url(#oa-pizza)" />
      <circle cx="24" cy="20" r="7" fill="none" stroke="#C49030" strokeWidth="0.6" />

      {/* Pizza sauce */}
      <circle cx="24" cy="20" r="5.5" fill="#C0392B" opacity="0.7" />

      {/* Cheese */}
      <circle cx="24" cy="20" r="5" fill="#F5D76E" opacity="0.6" />

      {/* Pepperoni */}
      <circle cx="22" cy="18" r="1.2" fill="#A0301A" />
      <circle cx="26" cy="19" r="1" fill="#A0301A" />
      <circle cx="23" cy="22" r="1.1" fill="#A0301A" />
      <circle cx="26.5" cy="22" r="0.8" fill="#A0301A" />

      {/* Pizza slice lines */}
      <line x1="24" y1="13" x2="24" y2="27" stroke="#D4A044" strokeWidth="0.4" opacity="0.5" />
      <line x1="17" y1="20" x2="31" y2="20" stroke="#D4A044" strokeWidth="0.4" opacity="0.5" />

      {/* Menu items below pizza */}
      <rect x="15" y="29" width="16" height="2" rx="1" fill="#BDB6A8" opacity="0.4" />
      <rect x="15" y="32" width="12" height="2" rx="1" fill="#BDB6A8" opacity="0.3" />

      {/* ORDER button */}
      <rect x="15" y="35.5" width="18" height="4" rx="2" fill="url(#oa-btn)" />
      <text x="24" y="38.3" textAnchor="middle" fontSize="2.8" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">ORDER</text>

      {/* Notification badge */}
      <circle cx="35" cy="8" r="4" fill="url(#oa-badge)" />
      <circle cx="35" cy="8" r="4" fill="none" stroke="white" strokeWidth="0.6" />
      <text x="35" y="9.5" textAnchor="middle" fontSize="4" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">3</text>

      {/* Home indicator */}
      <rect x="19" y="42" width="10" height="1.5" rx="0.75" fill="#555565" />

      {/* Screen glare */}
      <rect x="14" y="8" width="5" height="14" rx="1" fill="white" opacity="0.06" />

      {/* Highlight on button */}
      <rect x="16" y="36" width="8" height="1" rx="0.5" fill="white" opacity="0.15" />
    </svg>
  );
}
