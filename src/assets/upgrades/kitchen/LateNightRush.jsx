export default function LateNightRush({ size = 24, className = '', style = {} }) {
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
        <radialGradient id="lnr-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FFA85C" opacity="0.35" />
          <stop offset="70%" stopColor="#FF6030" opacity="0.1" />
          <stop offset="100%" stopColor="#1A1040" opacity="0" />
        </radialGradient>
        <linearGradient id="lnr-face" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0E8D8" />
          <stop offset="100%" stopColor="#D0C4B0" />
        </linearGradient>
        <linearGradient id="lnr-rim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D4A044" />
          <stop offset="100%" stopColor="#8B6529" />
        </linearGradient>
        <linearGradient id="lnr-moon" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF8E0" />
          <stop offset="100%" stopColor="#F0D870" />
        </linearGradient>
        <linearGradient id="lnr-hand-h" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E0483E" />
          <stop offset="100%" stopColor="#C03838" />
        </linearGradient>
        <linearGradient id="lnr-hand-m" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4A044" />
          <stop offset="100%" stopColor="#A07828" />
        </linearGradient>
      </defs>

      {/* Background glow */}
      <circle cx="24" cy="24" r="24" fill="url(#lnr-glow)" />

      {/* Speed lines radiating outward */}
      <line x1="24" y1="2" x2="24" y2="6" stroke="#FFA85C" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <line x1="38" y1="5" x2="36" y2="9" stroke="#FFA85C" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <line x1="45" y1="14" x2="41" y2="16" stroke="#FFA85C" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
      <line x1="46" y1="26" x2="42" y2="26" stroke="#FFA85C" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <line x1="43" y1="38" x2="40" y2="36" stroke="#FFA85C" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <line x1="34" y1="44" x2="32" y2="41" stroke="#FFA85C" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
      <line x1="14" y1="44" x2="16" y2="41" stroke="#FFA85C" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <line x1="5" y1="38" x2="8" y2="36" stroke="#FFA85C" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <line x1="2" y1="26" x2="6" y2="26" stroke="#FFA85C" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <line x1="4" y1="14" x2="7" y2="16" stroke="#FFA85C" strokeWidth="1" strokeLinecap="round" opacity="0.4" />

      {/* Clock face shadow */}
      <circle cx="24" cy="25" r="15" fill="#00000015" />

      {/* Clock outer rim */}
      <circle cx="24" cy="24" r="15" fill="url(#lnr-rim)" />
      <circle cx="24" cy="24" r="14" fill="url(#lnr-face)" />

      {/* Hour markers */}
      <line x1="24" y1="11" x2="24" y2="13.5" stroke="#8B6529" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24" y1="34.5" x2="24" y2="37" stroke="#8B6529" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="11" y1="24" x2="13.5" y2="24" stroke="#8B6529" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="34.5" y1="24" x2="37" y2="24" stroke="#8B6529" strokeWidth="1.5" strokeLinecap="round" />
      {/* Minor markers */}
      <line x1="20" y1="11.5" x2="20.5" y2="13" stroke="#A08060" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="16" y1="13.5" x2="17" y2="14.8" stroke="#A08060" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="13.5" y1="17" x2="14.8" y2="18" stroke="#A08060" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="11.5" y1="20" x2="13" y2="20.5" stroke="#A08060" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="11.5" y1="28" x2="13" y2="27.5" stroke="#A08060" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="13.5" y1="31" x2="14.8" y2="30" stroke="#A08060" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="16" y1="34.5" x2="17" y2="33.2" stroke="#A08060" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="20" y1="36.5" x2="20.5" y2="35" stroke="#A08060" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="28" y1="36.5" x2="27.5" y2="35" stroke="#A08060" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="32" y1="34.5" x2="31" y2="33.2" stroke="#A08060" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="34.5" y1="31" x2="33.2" y2="30" stroke="#A08060" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="36.5" y1="28" x2="35" y2="27.5" stroke="#A08060" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="36.5" y1="20" x2="35" y2="20.5" stroke="#A08060" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="34.5" y1="17" x2="33.2" y2="18" stroke="#A08060" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="32" y1="13.5" x2="31" y2="14.8" stroke="#A08060" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="28" y1="11.5" x2="27.5" y2="13" stroke="#A08060" strokeWidth="0.8" strokeLinecap="round" />

      {/* Hour hand pointing to 12 */}
      <line x1="24" y1="24" x2="24" y2="15" stroke="url(#lnr-hand-h)" strokeWidth="2.5" strokeLinecap="round" />

      {/* Minute hand pointing to 12 */}
      <line x1="24" y1="24" x2="24" y2="12.5" stroke="url(#lnr-hand-m)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Center pin */}
      <circle cx="24" cy="24" r="2" fill="#D4A044" />
      <circle cx="24" cy="24" r="1" fill="#E8D0A0" />
      <circle cx="23.5" cy="23.5" r="0.4" fill="white" opacity="0.4" />

      {/* Clock face highlight */}
      <ellipse cx="20" cy="18" rx="6" ry="4" fill="white" opacity="0.1" />

      {/* Crescent moon in top-right corner */}
      <path
        d="M40 6 Q42 4 44 6 Q46 9 44 12 Q42 14 40 12 Q42 10 42 8 Q42 6 40 6 Z"
        fill="url(#lnr-moon)"
      />
      <ellipse cx="42" cy="7" rx="1" ry="0.6" fill="white" opacity="0.3" />

      {/* Tiny stars near moon */}
      <circle cx="38" cy="4" r="0.6" fill="#FFF8D0" opacity="0.6" />
      <circle cx="44" cy="2" r="0.5" fill="#FFF8D0" opacity="0.5" />
      <circle cx="46" cy="5" r="0.4" fill="#FFF8D0" opacity="0.4" />
    </svg>
  );
}
