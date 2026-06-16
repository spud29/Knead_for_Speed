import React from 'react';
import { useGameState, useDispatch } from '../state/GameContext.jsx';
import { KITCHEN_UPGRADES, BUSINESS_UPGRADES, costFor, isUpgradeUnlocked } from '../constants/upgrades.js';
import { useAudio } from '../hooks/useAudio.js';
import { fmt } from '../utils/fmt.js';

function UpgradeRow({ upgrade, state, dispatch, play }) {
  const ownedCount = state.owned[upgrade.id] || 0;
  let cost = costFor(upgrade, ownedCount);
  const hasDiscount = state.nextUpgradeDiscount > 0;
  if (hasDiscount) cost = Math.ceil(cost * (1 - state.nextUpgradeDiscount));
  const affordable = state.dough >= cost;
  const Icon = upgrade.icon;
  const progress = Math.min(1, state.dough / cost);

  function handleBuy() {
    if (!affordable) {
      play('cantAfford');
      return;
    }
    play('purchase');
    dispatch({ type: 'BUY_UPGRADE', id: upgrade.id });
  }

  return (
    <button
      onClick={handleBuy}
      disabled={!affordable}
      className="upgrade-row"
      style={{ opacity: affordable ? 1 : 0.7 }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div className="icon-box ember-text">
          <Icon size={32} />
        </div>
        <div>
          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: affordable ? 'var(--text)' : 'var(--muted)' }}>
            {upgrade.name}{' '}
            <span className="font-ticket muted-text" style={{ fontSize: '0.7rem' }}>Lv{ownedCount}</span>
          </div>
          <div className="muted-text" style={{ fontSize: '0.7rem', marginTop: 2 }}>{upgrade.effectLabel}</div>
        </div>
      </div>
      <div className={`font-ticket ${affordable ? 'gold-text' : 'muted-text'}`} style={{ fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
        {hasDiscount && <span style={{ fontSize: '0.6rem', marginRight: 4 }}>50% OFF</span>}
        ${fmt(cost, state.settings.notation)}
      </div>
      {!affordable && <div className="upgrade-progress" style={{ width: `${progress * 100}%` }} />}
    </button>
  );
}

export default function UpgradeList() {
  const state = useGameState();
  const dispatch = useDispatch();
  const { play } = useAudio();

  const unlockedKitchen = KITCHEN_UPGRADES.filter(u =>
    isUpgradeUnlocked(u, state.totalDoughEarned, state.stats.prestiges)
  );
  const unlockedBusiness = BUSINESS_UPGRADES.filter(u =>
    isUpgradeUnlocked(u, state.totalDoughEarned, state.stats.prestiges)
  );

  const lockedKitchen = KITCHEN_UPGRADES.filter(u =>
    !isUpgradeUnlocked(u, state.totalDoughEarned, state.stats.prestiges)
  );
  const lockedBusiness = BUSINESS_UPGRADES.filter(u =>
    !isUpgradeUnlocked(u, state.totalDoughEarned, state.stats.prestiges)
  );

  const nextLocked = [...lockedKitchen, ...lockedBusiness].sort((a, b) => {
    const aVal = a.unlock?.value || Infinity;
    const bVal = b.unlock?.value || Infinity;
    return aVal - bVal;
  })[0];

  return (
    <div style={{ width: '100%', maxWidth: 360 }}>
      <div className="section-header">KITCHEN</div>
      {unlockedKitchen.map(u => (
        <UpgradeRow key={u.id} upgrade={u} state={state} dispatch={dispatch} play={play} />
      ))}

      {unlockedBusiness.length > 0 && (
        <>
          <div className="section-header" style={{ marginTop: 20 }}>BUSINESS</div>
          {unlockedBusiness.map(u => (
            <UpgradeRow key={u.id} upgrade={u} state={state} dispatch={dispatch} play={play} />
          ))}
        </>
      )}

      {nextLocked && (
        <div className="muted-text font-ticket" style={{ fontSize: '0.65rem', textAlign: 'center', marginTop: 16, opacity: 0.6 }}>
          {nextLocked.unlock?.type === 'earned'
            ? `Next unlock at $${fmt(nextLocked.unlock.value)} total earned`
            : `Next unlock at ${nextLocked.unlock?.value} prestige${nextLocked.unlock?.value !== 1 ? 's' : ''}`}
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <button
          onClick={() => {
            if (!state.resetArmed) {
              dispatch({ type: 'ARM_RESET' });
            } else {
              dispatch({ type: 'RESET' });
            }
          }}
          className="reset-link font-ticket muted-text"
          style={{ fontSize: '0.7rem' }}
        >
          {state.resetArmed ? 'Tap again to reset' : 'Reset progress'}
        </button>
      </div>
    </div>
  );
}
