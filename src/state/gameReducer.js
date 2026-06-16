import { computeStats } from '../engine/computeStats.js';
import { ALL_UPGRADES, costFor } from '../constants/upgrades.js';
import { STAR_UPGRADES, calcStarsEarned } from '../constants/prestige.js';
import { ACHIEVEMENTS } from '../constants/achievements.js';
import { INITIAL_STATE } from './initialState.js';

function checkAchievements(state) {
  const newAchievements = [];
  for (const a of ACHIEVEMENTS) {
    if (!state.achievements.includes(a.id) && a.check(state)) {
      newAchievements.push(a.id);
    }
  }
  if (newAchievements.length === 0) return state;

  const achievement = ACHIEVEMENTS.find(a => a.id === newAchievements[0]);
  return {
    ...state,
    achievements: [...state.achievements, ...newAchievements],
    toast: { key: Date.now(), text: `Achievement: ${achievement.name}!` },
  };
}

export function gameReducer(state, action) {
  switch (action.type) {
    case 'LOAD_SAVE': {
      return { ...state, ...action.payload, ready: true };
    }

    case 'START_FRESH': {
      return { ...state, ready: true, stats: { ...state.stats, runStartedAt: Date.now() } };
    }

    case 'TAP': {
      const { perClick } = computeStats(state);
      let s = {
        ...state,
        dough: state.dough + perClick,
        totalDoughEarned: state.totalDoughEarned + perClick,
        runDoughEarned: state.runDoughEarned + perClick,
        totalTaps: state.totalTaps + 1,
      };
      return checkAchievements(s);
    }

    case 'TICK': {
      const { perSec } = computeStats(state);
      if (perSec <= 0) return state;
      const earned = perSec / 10;
      const newDps = perSec;
      return {
        ...state,
        dough: state.dough + earned,
        totalDoughEarned: state.totalDoughEarned + earned,
        runDoughEarned: state.runDoughEarned + earned,
        stats: {
          ...state.stats,
          highestDps: Math.max(state.stats.highestDps, newDps),
        },
      };
    }

    case 'BUY_UPGRADE': {
      const upgrade = ALL_UPGRADES.find(u => u.id === action.id);
      if (!upgrade) return state;
      const ownedCount = state.owned[upgrade.id] || 0;
      let cost = costFor(upgrade, ownedCount);
      if (state.nextUpgradeDiscount > 0) {
        cost = Math.ceil(cost * (1 - state.nextUpgradeDiscount));
      }
      if (state.dough < cost) return state;

      let s = {
        ...state,
        dough: state.dough - cost,
        owned: { ...state.owned, [upgrade.id]: ownedCount + 1 },
        nextUpgradeDiscount: 0,
      };
      return checkAchievements(s);
    }

    case 'TIP_BONUS': {
      const { perClick } = computeStats(state);
      const bonus = Math.max(5, perClick * (6 + Math.random() * 10));
      return {
        ...state,
        dough: state.dough + bonus,
        totalDoughEarned: state.totalDoughEarned + bonus,
        runDoughEarned: state.runDoughEarned + bonus,
        toast: { key: Date.now(), text: `Nice tip! +$${fmtInline(bonus)}` },
      };
    }

    case 'GOLDEN_PIZZA_SPAWN': {
      return {
        ...state,
        goldenPizza: {
          id: Date.now(),
          x: 10 + Math.random() * 70,
          y: 20 + Math.random() * 40,
          expiresAt: Date.now() + 8000,
        },
      };
    }

    case 'GOLDEN_PIZZA_CATCH': {
      if (!state.goldenPizza) return state;
      const reward = action.reward;
      let s = {
        ...state,
        goldenPizza: null,
        stats: { ...state.stats, goldenCaught: (state.stats.goldenCaught || 0) + 1 },
      };

      const { perClick, perSec } = computeStats(state);
      const goldenTouch = state.starUpgrades.golden_touch || 0;
      const goldenMult = goldenTouch ? 2 : 1;

      switch (reward.type) {
        case 'dough_shower': {
          const bonus = perClick * 60 * goldenMult;
          s.dough += bonus;
          s.totalDoughEarned += bonus;
          s.runDoughEarned += bonus;
          s.toast = { key: Date.now(), text: `Dough Shower! +$${fmtInline(bonus)}` };
          break;
        }
        case 'frenzy': {
          const mult = goldenTouch ? 5 : 3;
          s.activeEffects = [...s.activeEffects, { type: 'frenzy', multiplier: mult, expiresAt: Date.now() + 15000 }];
          s.toast = { key: Date.now(), text: `Tap Frenzy! ${mult}× clicks for 15s!` };
          break;
        }
        case 'overdrive': {
          const mult = goldenTouch ? 8 : 5;
          s.activeEffects = [...s.activeEffects, { type: 'overdrive', multiplier: mult, expiresAt: Date.now() + 10000 }];
          s.toast = { key: Date.now(), text: `Oven Overdrive! ${mult}× production for 10s!` };
          break;
        }
        case 'lucky_break':
          s.nextUpgradeDiscount = 0.5;
          s.toast = { key: Date.now(), text: 'Lucky Break! Next upgrade 50% off!' };
          break;
        case 'star_shard': {
          const shardAmt = goldenTouch ? 1 : 0.5;
          s.bonusStarShards = (s.bonusStarShards || 0) + shardAmt;
          s.toast = { key: Date.now(), text: `Star Shard! +${shardAmt} bonus stars next prestige!` };
          break;
        }
      }
      return checkAchievements(s);
    }

    case 'GOLDEN_PIZZA_MISS': {
      return {
        ...state,
        goldenPizza: null,
        stats: { ...state.stats, goldenMissed: (state.stats.goldenMissed || 0) + 1 },
      };
    }

    case 'EXPIRE_EFFECTS': {
      const now = Date.now();
      const active = state.activeEffects.filter(e => e.expiresAt > now);
      if (active.length === state.activeEffects.length) return state;
      return { ...state, activeEffects: active };
    }

    case 'PRESTIGE': {
      const starPower = state.starUpgrades.star_power || 0;
      const earned = calcStarsEarned(state.runDoughEarned, starPower);
      const bonusShards = Math.floor(state.bonusStarShards || 0);
      const totalEarned = earned + bonusShards;
      if (totalEarned < 1) return state;

      const headStart = state.starUpgrades.head_start || 0;
      const startDough = headStart > 0 ? 500 * headStart : 0;

      let s = {
        ...state,
        dough: startDough,
        owned: {},
        runDoughEarned: 0,
        activeEffects: [],
        goldenPizza: null,
        nextUpgradeDiscount: 0,
        bonusStarShards: 0,
        stars: state.stars + totalEarned,
        stats: {
          ...state.stats,
          prestiges: state.stats.prestiges + 1,
          runStartedAt: Date.now(),
        },
        toast: { key: Date.now(), text: `New location opened! +${totalEarned} star${totalEarned !== 1 ? 's' : ''}` },
      };
      return checkAchievements(s);
    }

    case 'BUY_STAR_UPGRADE': {
      const upgrade = STAR_UPGRADES.find(u => u.id === action.id);
      if (!upgrade) return state;
      const owned = state.starUpgrades[upgrade.id] || 0;
      if (owned > 0) return state;
      if (state.stars < upgrade.cost) return state;

      return {
        ...state,
        stars: state.stars - upgrade.cost,
        starUpgrades: { ...state.starUpgrades, [upgrade.id]: 1 },
      };
    }

    case 'SET_TOAST': {
      return { ...state, toast: action.toast };
    }

    case 'CLEAR_TOAST': {
      return { ...state, toast: null };
    }

    case 'ARM_RESET': {
      return { ...state, resetArmed: true };
    }

    case 'DISARM_RESET': {
      return { ...state, resetArmed: false };
    }

    case 'RESET': {
      return {
        ...INITIAL_STATE,
        ready: true,
        settings: state.settings,
        stats: { ...INITIAL_STATE.stats, runStartedAt: Date.now() },
        toast: { key: Date.now(), text: 'Fresh shift, fresh start' },
      };
    }

    case 'SET_TAB': {
      return { ...state, activeTab: action.tab };
    }

    case 'UPDATE_SETTING': {
      return { ...state, settings: { ...state.settings, [action.key]: action.value } };
    }

    case 'IMPORT_SAVE': {
      return { ...state, ...action.payload };
    }

    case 'UPDATE_PLAYTIME': {
      return { ...state, stats: { ...state.stats, playTime: state.stats.playTime + 1 } };
    }

    case 'SET_USER': {
      return { ...state, user: action.user };
    }

    case 'SET_CLOUD_SYNC': {
      return { ...state, lastCloudSync: action.timestamp };
    }

    default:
      return state;
  }
}

function fmtInline(n) {
  if (!isFinite(n)) return '0';
  if (n < 1000) return n % 1 === 0 ? n.toFixed(0) : n.toFixed(1);
  const units = ['K', 'M', 'B', 'T'];
  let v = n;
  let idx = -1;
  while (v >= 1000 && idx < units.length - 1) { v /= 1000; idx++; }
  return v.toFixed(2) + units[idx];
}
