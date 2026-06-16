import React, { useState, useCallback } from 'react';
import { useGameState, useDispatch } from '../state/GameContext.jsx';
import { computeStats } from '../engine/computeStats.js';
import { useAudio } from '../hooks/useAudio.js';
import { fmt } from '../utils/fmt.js';

const PARTICLE_EMOJIS = ['🧀', '🍅', '🫒', '🌶️', '🍕', '🥚'];

export default function TapArea() {
  const state = useGameState();
  const dispatch = useDispatch();
  const { play } = useAudio();
  const [pops, setPops] = useState([]);
  const [particles, setParticles] = useState([]);
  const { perClick, perSec } = computeStats(state);

  const handleTap = useCallback(() => {
    dispatch({ type: 'TAP' });
    play('tap');

    const now = Date.now();

    // Floating dough pop
    const popId = now + Math.random();
    const popX = 30 + Math.random() * 40;
    setPops(prev => [...prev, { id: popId, value: perClick, x: popX }]);
    setTimeout(() => {
      setPops(prev => prev.filter(p => p.id !== popId));
    }, 850);

    // Particle burst
    const count = 4 + Math.min(4, Math.floor(Math.log10(Math.max(1, perClick))));
    const newParticles = Array.from({ length: count }, (_, i) => {
      const angle = (Math.PI * 2 * i / count) + (Math.random() - 0.5) * 0.8;
      const dist = 40 + Math.random() * 50;
      return {
        id: now + i + Math.random(),
        emoji: PARTICLE_EMOJIS[Math.floor(Math.random() * PARTICLE_EMOJIS.length)],
        px: Math.cos(angle) * dist,
        py: Math.sin(angle) * dist,
      };
    });

    setParticles(prev => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.includes(p)));
    }, 600);
  }, [dispatch, play, perClick]);

  return (
    <>
      <div className="surface-2-bg" style={{ borderRadius: 8, padding: '12px 16px', textAlign: 'center', width: '100%', maxWidth: 360 }}>
        <div className="font-ticket gold-text" style={{ fontSize: '2.8rem' }}>${fmt(state.dough, state.settings.notation)}</div>
        <div className="font-ticket muted-text" style={{ fontSize: '0.7rem', marginTop: 6, letterSpacing: '0.04em' }}>
          {fmt(perSec, state.settings.notation)}/SEC &nbsp;&middot;&nbsp; +{fmt(perClick, state.settings.notation)} PER TAP
        </div>
      </div>

      {state.activeEffects.length > 0 && (
        <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap', justifyContent: 'center', maxWidth: 360 }}>
          {state.activeEffects.filter(e => e.expiresAt > Date.now()).map((eff, i) => {
            const remaining = Math.max(0, Math.ceil((eff.expiresAt - Date.now()) / 1000));
            const label = eff.type === 'frenzy' ? `${eff.multiplier}× Tap` : `${eff.multiplier}× Prod`;
            return (
              <div key={i} className="effect-bar font-ticket gold-text">
                {label} ({remaining}s)
              </div>
            );
          })}
        </div>
      )}

      <div style={{ position: 'relative', width: 180, height: 180, margin: '24px 0' }}>
        {pops.map(pop => (
          <div
            key={pop.id}
            className="float-pop font-ticket gold-text"
            style={{ position: 'absolute', left: `${pop.x}%`, top: '40%', fontSize: '1.1rem', fontWeight: 700, pointerEvents: 'none' }}
          >
            +{fmt(pop.value, state.settings.notation)}
          </div>
        ))}

        {particles.map(p => (
          <div
            key={p.id}
            className="particle"
            style={{ left: '50%', top: '50%', '--px': `${p.px}px`, '--py': `${p.py}px` }}
          >
            {p.emoji}
          </div>
        ))}

        <button onClick={handleTap} className="tap-btn pulse-ember" aria-label="Make a pizza">
          <span style={{ fontSize: '4.5rem' }}>🍕</span>
        </button>
      </div>
    </>
  );
}
