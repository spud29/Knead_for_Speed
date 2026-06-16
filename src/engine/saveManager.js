import { INITIAL_STATE } from '../state/initialState.js';
import { computeStats } from './computeStats.js';

const STORAGE_KEY = 'knead-for-speed-save-v2';
const LEGACY_KEY = 'knead-for-speed-save-v1';
const BACKUP_KEY = 'knead-for-speed-save-v2-backup';
const MAX_OFFLINE_SECONDS = 12 * 3600;

function getStorage() {
  if (window.storage) return window.storage;
  return {
    async get(key) {
      const val = localStorage.getItem(key);
      return val ? { value: val } : null;
    },
    async set(key, val) {
      localStorage.setItem(key, val);
    },
  };
}

function migrateV1(data) {
  return {
    dough: data.dough || 0,
    owned: data.owned || {},
    totalDoughEarned: data.dough || 0,
    totalTaps: 0,
    runDoughEarned: data.dough || 0,
    stars: 0,
    starUpgrades: {},
    achievements: [],
    stats: { ...INITIAL_STATE.stats, runStartedAt: Date.now() },
    settings: { ...INITIAL_STATE.settings },
    activeEffects: [],
    lastSaved: data.lastSaved || Date.now(),
    saveVersion: 2,
    nextUpgradeDiscount: 0,
    bonusStarShards: 0,
  };
}

export async function loadGame() {
  const storage = getStorage();

  // Try v2 first
  try {
    const res = await storage.get(STORAGE_KEY);
    if (res && res.value) {
      const data = JSON.parse(res.value);
      if (data.saveVersion === 2) {
        return applyOfflineEarnings(data);
      }
    }
  } catch {}

  // Try v1 (legacy)
  try {
    const res = await storage.get(LEGACY_KEY);
    if (res && res.value) {
      const data = JSON.parse(res.value);
      const migrated = migrateV1(data);
      return applyOfflineEarnings({ ...migrated, lastSaved: data.lastSaved || Date.now() });
    }
  } catch {}

  // Try backup as last resort
  try {
    const res = await storage.get(BACKUP_KEY);
    if (res && res.value) {
      const data = JSON.parse(res.value);
      if (data.saveVersion === 2) {
        return applyOfflineEarnings(data);
      }
    }
  } catch {}

  return null;
}

function applyOfflineEarnings(data) {
  const last = data.lastSaved || Date.now();
  const starUpgrades = data.starUpgrades || {};
  const maxOffline = starUpgrades.time_warp ? 24 * 3600 : MAX_OFFLINE_SECONDS;
  const elapsed = Math.max(0, Math.min((Date.now() - last) / 1000, maxOffline));
  const tempState = { ...INITIAL_STATE, ...data };
  const { perSec } = computeStats(tempState);
  const offlineMult = starUpgrades.dough_magnet ? 1.5 : 1;
  const earned = perSec * elapsed * offlineMult;

  return {
    ...data,
    dough: (data.dough || 0) + earned,
    totalDoughEarned: (data.totalDoughEarned || 0) + earned,
    runDoughEarned: (data.runDoughEarned || 0) + earned,
    offlineEarned: earned,
  };
}

function buildSaveData(state) {
  return {
    dough: state.dough,
    owned: state.owned,
    totalDoughEarned: state.totalDoughEarned,
    totalTaps: state.totalTaps,
    runDoughEarned: state.runDoughEarned,
    stars: state.stars,
    starUpgrades: state.starUpgrades,
    achievements: state.achievements,
    stats: state.stats,
    settings: state.settings,
    activeEffects: (state.activeEffects || []).filter(e => e.expiresAt > Date.now()),
    nextUpgradeDiscount: state.nextUpgradeDiscount,
    bonusStarShards: state.bonusStarShards,
    lastSaved: Date.now(),
    saveVersion: 2,
  };
}

export async function saveGame(state) {
  const storage = getStorage();
  const saveData = buildSaveData(state);
  const json = JSON.stringify(saveData);

  // Rotate current save to backup before overwriting
  try {
    const current = await storage.get(STORAGE_KEY);
    if (current && current.value) {
      await storage.set(BACKUP_KEY, current.value);
    }
  } catch {}

  await storage.set(STORAGE_KEY, json);
}

// Synchronous save for beforeunload — localStorage only, no async
export function saveGameSync(state) {
  const saveData = buildSaveData(state);
  const json = JSON.stringify(saveData);
  try {
    const current = localStorage.getItem(STORAGE_KEY);
    if (current) {
      localStorage.setItem(BACKUP_KEY, current);
    }
  } catch {}
  localStorage.setItem(STORAGE_KEY, json);
}

export function exportSave(state) {
  const data = buildSaveData(state);
  delete data.lastSaved;
  return 'KFS2:' + btoa(JSON.stringify(data));
}

export function importSave(str) {
  if (!str.startsWith('KFS2:')) throw new Error('Invalid save format');
  const json = atob(str.slice(5));
  const data = JSON.parse(json);
  if (data.saveVersion !== 2) throw new Error('Incompatible save version');
  return data;
}

export async function deleteSave() {
  const storage = getStorage();
  try {
    await storage.set(STORAGE_KEY, JSON.stringify({ deleted: true }));
  } catch {}
  try {
    await storage.set(LEGACY_KEY, JSON.stringify({ deleted: true }));
  } catch {}
}
