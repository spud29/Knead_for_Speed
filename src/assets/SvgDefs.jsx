import React from 'react';

export default function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute', overflow: 'hidden' }}>
      <defs>
        <linearGradient id="kfs-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id="kfs-gold-v" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="100%" stopColor="#C49B30" />
        </linearGradient>
        <linearGradient id="kfs-ember" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFA85C" />
          <stop offset="100%" stopColor="#E0483E" />
        </linearGradient>
        <linearGradient id="kfs-flame" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FF4500" />
          <stop offset="40%" stopColor="#FF8C00" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        <linearGradient id="kfs-cheese" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFECB3" />
          <stop offset="100%" stopColor="#E6C35C" />
        </linearGradient>
        <linearGradient id="kfs-crust" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4A044" />
          <stop offset="100%" stopColor="#8B6529" />
        </linearGradient>
        <linearGradient id="kfs-steel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D0D0D0" />
          <stop offset="50%" stopColor="#A0A0A0" />
          <stop offset="100%" stopColor="#808080" />
        </linearGradient>
        <radialGradient id="kfs-shadow">
          <stop offset="0%" stopColor="rgba(0,0,0,0.3)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="kfs-glow-gold">
          <stop offset="0%" stopColor="rgba(255,215,0,0.4)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
    </svg>
  );
}
