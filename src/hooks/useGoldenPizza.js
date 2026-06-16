import { useEffect } from 'react';
import { useDispatch, useGameState, useGameStateRef } from '../state/GameContext.jsx';

const GOLDEN_REWARDS = [
  { type: 'dough_shower', weight: 40, label: 'Dough Shower' },
  { type: 'frenzy', weight: 25, label: 'Tap Frenzy' },
  { type: 'overdrive', weight: 20, label: 'Oven Overdrive' },
  { type: 'lucky_break', weight: 10, label: 'Lucky Break' },
  { type: 'star_shard', weight: 5, label: 'Star Shard' },
];

function pickReward(hasPreviouslyPrestiged) {
  let rewards = GOLDEN_REWARDS;
  if (!hasPreviouslyPrestiged) {
    rewards = rewards.filter(r => r.type !== 'star_shard');
  }
  const totalWeight = rewards.reduce((sum, r) => sum + r.weight, 0);
  let roll = Math.random() * totalWeight;
  for (const r of rewards) {
    roll -= r.weight;
    if (roll <= 0) return r;
  }
  return rewards[0];
}

export function useGoldenPizza() {
  const state = useGameState();
  const stateRef = useGameStateRef();
  const dispatch = useDispatch();

  // Spawn golden pizza on a timer
  useEffect(() => {
    if (!state.ready) return;
    let timeoutId;

    const schedule = () => {
      const luckyOven = stateRef.current.starUpgrades.lucky_oven || 0;
      const speedMult = luckyOven > 0 ? 0.8 : 1;
      const delay = (60000 + Math.random() * 120000) * speedMult;

      timeoutId = setTimeout(() => {
        if (!stateRef.current.goldenPizza) {
          dispatch({ type: 'GOLDEN_PIZZA_SPAWN' });
        }
        schedule();
      }, delay);
    };

    schedule();
    return () => clearTimeout(timeoutId);
  }, [state.ready, dispatch, stateRef]);

  // Expire golden pizza after 8 seconds
  useEffect(() => {
    if (!state.goldenPizza) return;
    const remaining = state.goldenPizza.expiresAt - Date.now();
    if (remaining <= 0) {
      dispatch({ type: 'GOLDEN_PIZZA_MISS' });
      return;
    }
    const id = setTimeout(() => {
      dispatch({ type: 'GOLDEN_PIZZA_MISS' });
    }, remaining);
    return () => clearTimeout(id);
  }, [state.goldenPizza, dispatch]);

  // Fallback tip (only when no golden pizza active, every 30-70s)
  useEffect(() => {
    if (!state.ready) return;
    let timeoutId;
    const schedule = () => {
      const delay = 30000 + Math.random() * 40000;
      timeoutId = setTimeout(() => {
        if (!stateRef.current.goldenPizza) {
          dispatch({ type: 'TIP_BONUS' });
        }
        schedule();
      }, delay);
    };
    schedule();
    return () => clearTimeout(timeoutId);
  }, [state.ready, dispatch, stateRef]);

  function catchGoldenPizza() {
    if (!state.goldenPizza) return;
    const hasPreviouslyPrestiged = state.stats.prestiges > 0;
    const reward = pickReward(hasPreviouslyPrestiged);
    dispatch({ type: 'GOLDEN_PIZZA_CATCH', reward });
  }

  return { catchGoldenPizza };
}
