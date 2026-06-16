import React from 'react';

export default function MainPizza({ size = 140, className = '', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 140"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="mp-sauce" cx="50%" cy="48%" r="45%">
          <stop offset="0%" stopColor="#D44420" />
          <stop offset="60%" stopColor="#C23B22" />
          <stop offset="100%" stopColor="#A02818" />
        </radialGradient>
        <radialGradient id="mp-crust" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#E8B84E" />
          <stop offset="50%" stopColor="#D4A044" />
          <stop offset="100%" stopColor="#8B6529" />
        </radialGradient>
        <radialGradient id="mp-cheese-blob" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFF8DC" />
          <stop offset="50%" stopColor="#FFECB3" />
          <stop offset="100%" stopColor="#E6C35C" />
        </radialGradient>
        <radialGradient id="mp-pepperoni" cx="40%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#C0392B" />
          <stop offset="70%" stopColor="#922B21" />
          <stop offset="100%" stopColor="#6B1F17" />
        </radialGradient>
      </defs>

      {/* Drop shadow */}
      <ellipse cx="72" cy="128" rx="52" ry="8" fill="rgba(0,0,0,0.2)" />

      {/* Crust ring */}
      <circle cx="70" cy="66" r="58" fill="url(#mp-crust)" />
      {/* Crust highlight rim */}
      <circle cx="70" cy="66" r="58" fill="none" stroke="#E8C06A" strokeWidth="1.5" strokeOpacity="0.4" />
      {/* Crust texture bumps */}
      <circle cx="28" cy="42" r="3" fill="#C89030" opacity="0.5" />
      <circle cx="20" cy="62" r="2.5" fill="#C89030" opacity="0.4" />
      <circle cx="24" cy="82" r="3" fill="#B07828" opacity="0.5" />
      <circle cx="38" cy="102" r="2.5" fill="#C89030" opacity="0.4" />
      <circle cx="108" cy="38" r="2.5" fill="#C89030" opacity="0.4" />
      <circle cx="116" cy="58" r="3" fill="#B07828" opacity="0.5" />
      <circle cx="112" cy="80" r="2.5" fill="#C89030" opacity="0.4" />
      <circle cx="100" cy="100" r="3" fill="#B07828" opacity="0.5" />

      {/* Sauce base */}
      <circle cx="70" cy="66" r="48" fill="url(#mp-sauce)" />

      {/* Sauce variation splotches */}
      <circle cx="55" cy="55" r="8" fill="#D94A2A" opacity="0.5" />
      <circle cx="82" cy="72" r="6" fill="#D94A2A" opacity="0.4" />
      <circle cx="65" cy="85" r="7" fill="#B83218" opacity="0.3" />

      {/* Melting mozzarella blobs */}
      <path d="M45,50 Q50,42 62,45 Q68,48 65,56 Q60,62 50,58 Q42,55 45,50Z" fill="url(#mp-cheese-blob)" opacity="0.92" />
      <path d="M72,42 Q82,38 90,44 Q95,50 88,56 Q80,60 74,55 Q68,48 72,42Z" fill="url(#mp-cheese-blob)" opacity="0.88" />
      <path d="M50,70 Q58,65 68,68 Q74,72 70,80 Q64,86 55,82 Q48,78 50,70Z" fill="url(#mp-cheese-blob)" opacity="0.9" />
      <path d="M80,65 Q88,62 95,68 Q98,75 92,80 Q84,83 78,78 Q74,72 80,65Z" fill="url(#mp-cheese-blob)" opacity="0.85" />
      <path d="M58,88 Q66,84 75,88 Q78,94 72,98 Q64,100 58,96 Q54,92 58,88Z" fill="url(#mp-cheese-blob)" opacity="0.87" />
      {/* Cheese drip on crust edge */}
      <path d="M38,90 Q36,95 38,100 Q40,103 42,98 Q44,93 40,90Z" fill="#FFECB3" opacity="0.7" />
      <path d="M98,55 Q100,60 99,66 Q97,69 95,64 Q94,58 98,55Z" fill="#FFECB3" opacity="0.65" />

      {/* Pepperoni circles */}
      <circle cx="55" cy="50" r="7" fill="url(#mp-pepperoni)" />
      <circle cx="55" cy="50" r="3" fill="#D44A3A" opacity="0.5" />
      <circle cx="54" cy="48" r="1.5" fill="#E05A4A" opacity="0.3" />

      <circle cx="85" cy="52" r="6.5" fill="url(#mp-pepperoni)" />
      <circle cx="85" cy="52" r="3" fill="#D44A3A" opacity="0.5" />
      <circle cx="84" cy="50" r="1.5" fill="#E05A4A" opacity="0.3" />

      <circle cx="70" cy="72" r="7.5" fill="url(#mp-pepperoni)" />
      <circle cx="70" cy="72" r="3.5" fill="#D44A3A" opacity="0.5" />
      <circle cx="69" cy="70" r="1.5" fill="#E05A4A" opacity="0.3" />

      <circle cx="48" cy="78" r="6" fill="url(#mp-pepperoni)" />
      <circle cx="48" cy="78" r="2.5" fill="#D44A3A" opacity="0.5" />

      <circle cx="90" cy="75" r="6.5" fill="url(#mp-pepperoni)" />
      <circle cx="90" cy="75" r="3" fill="#D44A3A" opacity="0.5" />

      <circle cx="65" cy="92" r="6" fill="url(#mp-pepperoni)" />
      <circle cx="65" cy="92" r="2.5" fill="#D44A3A" opacity="0.5" />

      {/* Basil leaves */}
      <g transform="translate(60,58) rotate(-20)">
        <path d="M0,0 Q4,-8 0,-14 Q-4,-8 0,0Z" fill="#2D8B3A" />
        <path d="M0,0 Q4,-8 0,-14 Q-4,-8 0,0Z" fill="none" stroke="#1D6B2A" strokeWidth="0.5" />
        <line x1="0" y1="0" x2="0" y2="-12" stroke="#1D6B2A" strokeWidth="0.4" opacity="0.6" />
      </g>
      <g transform="translate(82,82) rotate(15)">
        <path d="M0,0 Q3.5,-7 0,-12 Q-3.5,-7 0,0Z" fill="#35A043" />
        <line x1="0" y1="0" x2="0" y2="-10" stroke="#1D6B2A" strokeWidth="0.4" opacity="0.6" />
      </g>
      <g transform="translate(44,65) rotate(-40)">
        <path d="M0,0 Q3,-6 0,-10 Q-3,-6 0,0Z" fill="#2D8B3A" />
        <line x1="0" y1="0" x2="0" y2="-8" stroke="#1D6B2A" strokeWidth="0.4" opacity="0.6" />
      </g>

      {/* Specular highlight on cheese */}
      <ellipse cx="52" cy="48" rx="12" ry="6" fill="white" opacity="0.1" transform="rotate(-15, 52, 48)" />

      {/* Steam wisps */}
      <g className="pizza-steam" opacity="0.25">
        <path d="M50,22 Q46,14 50,6 Q54,0 52,-6" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6">
          <animateTransform attributeName="transform" type="translate" values="0,0; -2,-8; 0,-16" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.3;0" dur="2.5s" repeatCount="indefinite" />
        </path>
        <path d="M70,18 Q74,10 70,2 Q66,-4 68,-10" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.5">
          <animateTransform attributeName="transform" type="translate" values="0,0; 2,-6; 0,-14" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.25;0" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M88,24 Q92,16 88,8 Q84,2 86,-4" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4">
          <animateTransform attributeName="transform" type="translate" values="0,0; 3,-7; 0,-12" dur="2.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.2;0" dur="2.8s" repeatCount="indefinite" />
        </path>
      </g>
    </svg>
  );
}
