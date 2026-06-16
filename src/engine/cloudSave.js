import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db, firebaseEnabled } from './firebase.js';

const COLLECTION = 'saves';

export async function saveToCloud(uid, saveData) {
  if (!firebaseEnabled || !db) return;
  const ref = doc(db, COLLECTION, uid);
  await setDoc(ref, { ...saveData, lastCloudSync: Date.now() });
}

export async function loadFromCloud(uid) {
  if (!firebaseEnabled || !db) return null;
  const ref = doc(db, COLLECTION, uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return snap.data();
}

export function resolveConflict(localSave, cloudSave) {
  if (!cloudSave) return { winner: localSave, source: 'local' };
  if (!localSave) return { winner: cloudSave, source: 'cloud' };

  const localProgress = localSave.totalDoughEarned || 0;
  const cloudProgress = cloudSave.totalDoughEarned || 0;

  if (cloudProgress > localProgress) {
    return { winner: cloudSave, source: 'cloud' };
  }
  return { winner: localSave, source: 'local' };
}
