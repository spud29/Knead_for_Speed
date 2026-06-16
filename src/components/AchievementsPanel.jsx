import React from 'react';
import { useGameState } from '../state/GameContext.jsx';
import { ACHIEVEMENTS } from '../constants/achievements.js';
import { AchievementUnlocked, AchievementLocked } from '../assets/icons';

const CATEGORY_LABELS = {
  tapping: 'Tapping',
  earning: 'Earning',
  upgrading: 'Upgrading',
  prestige: 'Prestige',
  events: 'Events',
};

const CATEGORY_ORDER = ['tapping', 'earning', 'upgrading', 'prestige', 'events'];

export default function AchievementsPanel() {
  const state = useGameState();
  const total = ACHIEVEMENTS.length;
  const unlocked = state.achievements.length;

  const grouped = {};
  for (const a of ACHIEVEMENTS) {
    if (!grouped[a.category]) grouped[a.category] = [];
    grouped[a.category].push(a);
  }

  return (
    <div style={{ width: '100%', maxWidth: 360 }}>
      <div className="section-header" style={{ marginTop: 0 }}>
        ACHIEVEMENTS ({unlocked}/{total})
      </div>

      {CATEGORY_ORDER.map(cat => {
        const items = grouped[cat];
        if (!items) return null;

        return (
          <div key={cat} style={{ marginBottom: 16 }}>
            <div className="muted-text font-ticket" style={{ fontSize: '0.65rem', marginBottom: 6, letterSpacing: '0.08em' }}>
              {CATEGORY_LABELS[cat]}
            </div>
            <div className="achievement-grid">
              {items.map(a => {
                const isUnlocked = state.achievements.includes(a.id);
                return (
                  <div key={a.id} className={`achievement-card ${isUnlocked ? 'unlocked' : ''}`}>
                    <div style={{ marginBottom: 4 }}>
                      {isUnlocked ? <AchievementUnlocked size={28} /> : <AchievementLocked size={28} />}
                    </div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 600 }}>
                      {isUnlocked ? a.name : '???'}
                    </div>
                    <div className="muted-text" style={{ fontSize: '0.6rem', marginTop: 2 }}>
                      {a.description}
                    </div>
                    {isUnlocked && (
                      <div className="green-text font-ticket" style={{ fontSize: '0.55rem', marginTop: 4 }}>
                        +{(a.reward * 100).toFixed(0)}% bonus
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
