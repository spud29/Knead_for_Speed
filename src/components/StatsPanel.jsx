import React from 'react';
import { useGameState } from '../state/GameContext.jsx';
import { computeStats } from '../engine/computeStats.js';
import { fmt } from '../utils/fmt.js';
import { ACHIEVEMENTS } from '../constants/achievements.js';

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

function StatRow({ label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px dashed rgba(156,138,120,0.12)' }}>
      <span className="muted-text" style={{ fontSize: '0.75rem' }}>{label}</span>
      <span className="font-ticket gold-text" style={{ fontSize: '0.75rem' }}>{value}</span>
    </div>
  );
}

export default function StatsPanel() {
  const state = useGameState();
  const notation = state.settings.notation;
  const { perSec } = computeStats(state);

  const runTime = state.stats.runStartedAt
    ? Math.floor((Date.now() - state.stats.runStartedAt) / 1000)
    : 0;

  return (
    <div style={{ width: '100%', maxWidth: 360 }}>
      <div className="section-header" style={{ marginTop: 0 }}>THIS RUN</div>
      <div className="surface-2-bg" style={{ borderRadius: 8, padding: 12, marginTop: 4 }}>
        <StatRow label="Dough Earned" value={`$${fmt(state.runDoughEarned, notation)}`} />
        <StatRow label="Current DPS" value={`${fmt(perSec, notation)}/s`} />
        <StatRow label="Run Time" value={formatTime(runTime)} />
      </div>

      <div className="section-header">ALL TIME</div>
      <div className="surface-2-bg" style={{ borderRadius: 8, padding: 12, marginTop: 4 }}>
        <StatRow label="Total Dough Earned" value={`$${fmt(state.totalDoughEarned, notation)}`} />
        <StatRow label="Total Taps" value={fmt(state.totalTaps, notation)} />
        <StatRow label="Play Time" value={formatTime(state.stats.playTime)} />
        <StatRow label="Highest DPS" value={`${fmt(state.stats.highestDps, notation)}/s`} />
        <StatRow label="Prestiges" value={String(state.stats.prestiges)} />
        <StatRow label="Stars Earned" value={String(state.stars)} />
        <StatRow label="Achievements" value={`${state.achievements.length}/${ACHIEVEMENTS.length}`} />
        <StatRow label="Golden Pizzas Caught" value={String(state.stats.goldenCaught || 0)} />
      </div>
    </div>
  );
}
