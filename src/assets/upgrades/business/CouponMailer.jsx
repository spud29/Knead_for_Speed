export default function CouponMailer({ size = 24, className = '', style = {} }) {
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
        <linearGradient id="cm-env" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E84040" />
          <stop offset="100%" stopColor="#B02020" />
        </linearGradient>
        <linearGradient id="cm-flap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F25050" />
          <stop offset="100%" stopColor="#D03030" />
        </linearGradient>
        <linearGradient id="cm-coupon" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </linearGradient>
        <linearGradient id="cm-couponStripe" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFC107" />
          <stop offset="100%" stopColor="#FF8F00" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="24" cy="43" rx="15" ry="2.5" fill="#00000018" />

      {/* Envelope body */}
      <rect x="5" y="20" width="38" height="22" rx="2" fill="url(#cm-env)" />

      {/* Envelope inner dark */}
      <rect x="7" y="22" width="34" height="18" rx="1" fill="#8B1A1A" opacity="0.3" />

      {/* Coupon ticket sticking out */}
      <rect x="14" y="8" width="20" height="18" rx="2" fill="url(#cm-coupon)" />

      {/* Coupon dashed border */}
      <rect x="15.5" y="9.5" width="17" height="15" rx="1.5" fill="none" stroke="#B8860B" strokeWidth="0.7" strokeDasharray="2 1.5" />

      {/* Coupon stripe at top */}
      <rect x="16" y="10" width="16" height="3" rx="0.5" fill="url(#cm-couponStripe)" opacity="0.6" />

      {/* 50% OFF text area */}
      <text x="24" y="18" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#8B0000" fontFamily="Arial, sans-serif">50% OFF</text>

      {/* Small pizza icon on coupon */}
      <circle cx="24" cy="22" r="2" fill="#E8A030" />
      <circle cx="23.3" cy="21.5" r="0.5" fill="#C0392B" />
      <circle cx="24.8" cy="22.3" r="0.4" fill="#C0392B" />

      {/* Scissors icon - left side */}
      <circle cx="11" cy="15" r="1.5" fill="none" stroke="#555" strokeWidth="0.6" />
      <circle cx="11" cy="18" r="1.5" fill="none" stroke="#555" strokeWidth="0.6" />
      <line x1="12.3" y1="15" x2="14" y2="16.5" stroke="#555" strokeWidth="0.6" />
      <line x1="12.3" y1="18" x2="14" y2="16.5" stroke="#555" strokeWidth="0.6" />

      {/* Dotted cut line */}
      <line x1="14" y1="16.5" x2="35" y2="16.5" stroke="#555" strokeWidth="0.4" strokeDasharray="1.5 1" opacity="0.5" />

      {/* Envelope flap (triangular) */}
      <path d="M5 20 L24 32 L43 20 Z" fill="url(#cm-flap)" />

      {/* Flap fold line */}
      <path d="M5 20 L24 32 L43 20" fill="none" stroke="#FF6060" strokeWidth="0.5" opacity="0.4" />

      {/* Highlight on envelope */}
      <rect x="7" y="21" width="12" height="1.5" rx="0.75" fill="white" opacity="0.12" />

      {/* Glossy highlight on flap */}
      <path d="M10 22 L24 30 L20 26 Z" fill="white" opacity="0.08" />

      {/* Small stamp area top-right of envelope */}
      <rect x="35" y="33" width="5" height="5" rx="0.5" fill="#FFF8DC" opacity="0.7" />
      <rect x="35.5" y="33.5" width="4" height="4" rx="0.3" fill="none" stroke="#DAA520" strokeWidth="0.3" />
    </svg>
  );
}
