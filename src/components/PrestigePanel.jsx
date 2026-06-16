import React, { useState } from 'react';
import { useGameState, useDispatch } from '../state/GameContext.jsx';
import { STAR_UPGRADES, calcStarsEarned } from '../constants/prestige.js';
import { useAudio } from '../hooks/useAudio.js';
import { fmt } from '../utils/fmt.js';

export default function PrestigePanel() {
  const state = useGameState();
  const dispatch = useDispatch();
  const { play } = useAudio();
  const [confirmArmed, setConfirmArmed] = useState(false);

  const starPower = state.starUpgrades.star_power || 0;
  const starsIfPrestige = calcStarsEarned(state.runDoughEarned, starPower) + Math.floor(state.bonusStarShards || 0);
  const canPrestige = starsIfPrestige >= 1;

  function handlePrestige() {
    if (!confirmArmed) {
      setConfirmArmed(true);
      setTimeout(() => setConfirmArmed(false), 4000);
      return;
    }
    play('prestige');
    dispatch({ type: 'PRESTIGE' });
    setConfirmArmed(false);
  }

  return (
    <div style={{ width: '100%', maxWidth: 360 }}>
      <div className="section-header" style={{ marginTop: 0 }}>FRANCHISE</div>

      <div className="surface-2-bg" style={{ borderRadius: 8, padding: 16, textAlign: 'center', marginTop: 8 }}>
        <div className="star-text font-display" style={{ fontSize: '2.2rem' }}>
          {state.stars} ⭐
        </div>
        <div className="muted-text font-ticket" style={{ fontSize: '0.7rem', marginTop: 4 }}>
          Star{state.stars !== 1 ? 's' : ''} earned
        </div>
      </div>

      <div style={{ marginTop: 16, textAlign: 'center' }}>
        <div className="muted-text font-ticket" style={{ fontSize: '0.7rem', marginBottom: 8 }}>
          {canPrestige
            ? `Open a new location for +${starsIfPrestige} star${starsIfPrestige !== 1 ? 's' : ''}`
            : `Keep earning to franchise (need ~$1M this run)`}
        </div>
        <div className="muted-text font-ticket" style={{ fontSize: '0.6rem', marginBottom: 12, opacity: 0.7 }}>
          This run: ${fmt(state.runDoughEarned, state.settings.notation)} earned
        </div>

        <button
          onClick={handlePrestige}
          disabled={!canPrestige}
          className="prestige-btn"
        >
          {confirmArmed ? 'TAP AGAIN TO CONFIRM' : `OPEN NEW LOCATION (+${starsIfPrestige}⭐)`}
        </button>

        {canPrestige && (
          <div className="muted-text font-ticket" style={{ fontSize: '0.6rem', marginTop: 6, opacity: 0.6 }}>
            Resets dough & upgrades. Keeps stars, achievements, & stats.
          </div>
        )}
      </div>

      <div className="section-header" style={{ marginTop: 24 }}>STAR UPGRADES</div>
      {STAR_UPGRADES.map(u => {
        const owned = state.starUpgrades[u.id] || 0;
        const canBuy = owned === 0 && state.stars >= u.cost;
        const isBought = owned > 0;

        return (
          <button
            key={u.id}
            onClick={() => {
              if (canBuy) {
                play('purchase');
                dispatch({ type: 'BUY_STAR_UPGRADE', id: u.id });
              }
            }}
            disabled={!canBuy}
            className="upgrade-row"
            style={{ opacity: isBought ? 0.6 : canBuy ? 1 : 0.4 }}
          >
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                {u.name}{' '}
                {isBought && <span className="green-text font-ticket" style={{ fontSize: '0.65rem' }}>OWNED</span>}
              </div>
              <div className="muted-text" style={{ fontSize: '0.7rem', marginTop: 2 }}>{u.description}</div>
            </div>
            {!isBought && (
              <div className={`font-ticket ${canBuy ? 'star-text' : 'muted-text'}`} style={{ fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                {u.cost} ⭐
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
