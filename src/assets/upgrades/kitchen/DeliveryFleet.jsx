export default function DeliveryFleet({ size = 24, className = '', style = {} }) {
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
        <linearGradient id="df-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E85040" />
          <stop offset="100%" stopColor="#C03030" />
        </linearGradient>
        <linearGradient id="df-box" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5E8D0" />
          <stop offset="100%" stopColor="#D4C4A8" />
        </linearGradient>
        <linearGradient id="df-wheel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="100%" stopColor="#2A2A2A" />
        </linearGradient>
        <linearGradient id="df-seat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5A3A20" />
          <stop offset="100%" stopColor="#3E2810" />
        </linearGradient>
      </defs>

      {/* Motion lines */}
      <line x1="2" y1="22" x2="8" y2="22" stroke="#FFA85C" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <line x1="1" y1="26" x2="9" y2="26" stroke="#FFA85C" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <line x1="3" y1="30" x2="8" y2="30" stroke="#FFA85C" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
      <line x1="2" y1="34" x2="6" y2="34" stroke="#FFA85C" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />

      {/* Shadow */}
      <ellipse cx="26" cy="43" rx="16" ry="2" fill="#00000018" />

      {/* Rear fender */}
      <path
        d="M30 30 Q34 28 38 30 L38 36 Q34 38 30 36 Z"
        fill="url(#df-body)"
      />

      {/* Scooter body */}
      <path
        d="M14 24 L16 20 L28 18 L30 22 L30 34 L20 36 L14 34 Z"
        fill="url(#df-body)"
      />

      {/* Body highlight */}
      <path
        d="M16 21 L26 19 L27 22 L17 24 Z"
        fill="white"
        opacity="0.15"
      />

      {/* Footrest platform */}
      <rect x="18" y="34" width="14" height="2" rx="0.8" fill="#A03030" />

      {/* Seat */}
      <path
        d="M20 18 Q22 15 28 16 L30 18 Q28 20 22 20 Z"
        fill="url(#df-seat)"
      />
      <ellipse cx="25" cy="17" rx="4" ry="1" fill="white" opacity="0.1" />

      {/* Handlebars */}
      <line x1="14" y1="18" x2="12" y2="14" stroke="#888" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="13" x2="14" y2="15" stroke="#888" strokeWidth="2" strokeLinecap="round" />
      {/* Handlebar grip */}
      <circle cx="10" cy="13" r="1.5" fill="#333" />

      {/* Headlight */}
      <ellipse cx="14" cy="24" rx="1.5" ry="2" fill="#FFE880" />
      <ellipse cx="14" cy="24" rx="1" ry="1.2" fill="#FFFFC0" opacity="0.8" />

      {/* Front wheel */}
      <circle cx="16" cy="38" r="5" fill="url(#df-wheel)" />
      <circle cx="16" cy="38" r="3.5" fill="#5A5A5A" />
      <circle cx="16" cy="38" r="1.2" fill="#888" />
      <circle cx="15" cy="37" r="0.6" fill="white" opacity="0.25" />

      {/* Rear wheel */}
      <circle cx="36" cy="38" r="5" fill="url(#df-wheel)" />
      <circle cx="36" cy="38" r="3.5" fill="#5A5A5A" />
      <circle cx="36" cy="38" r="1.2" fill="#888" />
      <circle cx="35" cy="37" r="0.6" fill="white" opacity="0.25" />

      {/* Rear rack */}
      <rect x="30" y="16" width="12" height="1.5" rx="0.5" fill="#888" />
      <line x1="31" y1="17.5" x2="31" y2="28" stroke="#888" strokeWidth="1" />
      <line x1="41" y1="17.5" x2="41" y2="28" stroke="#888" strokeWidth="1" />

      {/* Pizza delivery box */}
      <rect x="29" y="6" width="14" height="11" rx="1.5" fill="url(#df-box)" />
      {/* Box lid line */}
      <line x1="29.5" y1="10" x2="42.5" y2="10" stroke="#B8A888" strokeWidth="0.7" />
      {/* Box label - pizza circle */}
      <circle cx="36" cy="13" r="2.5" fill="none" stroke="#E85040" strokeWidth="0.8" />
      <line x1="34" y1="12" x2="38" y2="14" stroke="#E85040" strokeWidth="0.5" />
      <line x1="34" y1="14" x2="38" y2="12" stroke="#E85040" strokeWidth="0.5" />
      {/* Box highlight */}
      <rect x="30" y="7" width="12" height="2" rx="0.5" fill="white" opacity="0.12" />

      {/* Exhaust puff */}
      <circle cx="42" cy="34" r="1.5" fill="#C8C8C8" opacity="0.3" />
      <circle cx="44" cy="32" r="1" fill="#C8C8C8" opacity="0.2" />
      <circle cx="45" cy="30" r="0.7" fill="#C8C8C8" opacity="0.15" />
    </svg>
  );
}
