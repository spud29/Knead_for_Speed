import { useEffect } from 'react';
import { useDispatch, useGameState, useGameStateRef } from '../state/GameContext.jsx';
import { loadGame, saveGame, saveGameSync } from '../engine/saveManager.js';
import { saveToCloud, loadFromCloud, resolveConflict } from '../engine/cloudSave.js';
import { auth, firebaseEnabled } from '../engine/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { fmt } from '../utils/fmt.js';

export function useGameLoop() {
  const state = useGameState();
  const stateRef = useGameStateRef();
  const dispatch = useDispatch();

  // Load saved game on mount
  useEffect(() => {
    let mounted = true;
    (async () => {
      const data = await loadGame();
      if (!mounted) return;
      if (data) {
        const { offlineEarned, ...saveData } = data;
        dispatch({ type: 'LOAD_SAVE', payload: saveData });
        if (offlineEarned > 1) {
          dispatch({
            type: 'SET_TOAST',
            toast: { key: Date.now(), text: `Ovens kept running -- +$${fmt(offlineEarned)} while you were away` },
          });
        }
      } else {
        dispatch({ type: 'START_FRESH' });
      }
    })();
    return () => { mounted = false; };
  }, [dispatch]);

  // Production tick (100ms)
  useEffect(() => {
    if (!state.ready) return;
    const id = setInterval(() => {
      dispatch({ type: 'TICK' });
    }, 100);
    return () => clearInterval(id);
  }, [state.ready, dispatch]);

  // Autosave (every 4s)
  useEffect(() => {
    if (!state.ready) return;
    const id = setInterval(() => {
      saveGame(stateRef.current).catch(() => {
        dispatch({
          type: 'SET_TOAST',
          toast: { key: Date.now(), text: 'Save failed — export your save from Settings' },
        });
      });
    }, 4000);
    return () => clearInterval(id);
  }, [state.ready, stateRef, dispatch]);

  // Save on tab close
  useEffect(() => {
    if (!state.ready) return;
    const handler = () => saveGameSync(stateRef.current);
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, [state.ready, stateRef]);

  // Save when tab becomes hidden (critical for mobile app-switching)
  useEffect(() => {
    if (!state.ready) return;
    const handler = () => {
      if (document.visibilityState === 'hidden') {
        saveGameSync(stateRef.current);
      }
    };
    document.addEventListener('visibilitychange', handler);
    return () => document.removeEventListener('visibilitychange', handler);
  }, [state.ready, stateRef]);

  // Playtime tracker (every 1s)
  useEffect(() => {
    if (!state.ready) return;
    const id = setInterval(() => {
      dispatch({ type: 'UPDATE_PLAYTIME' });
    }, 1000);
    return () => clearInterval(id);
  }, [state.ready, dispatch]);

  // Expire active effects (every 500ms)
  useEffect(() => {
    if (!state.ready || state.activeEffects.length === 0) return;
    const id = setInterval(() => {
      dispatch({ type: 'EXPIRE_EFFECTS' });
    }, 500);
    return () => clearInterval(id);
  }, [state.ready, state.activeEffects.length, dispatch]);

  // Toast auto-dismiss
  useEffect(() => {
    if (!state.toast) return;
    const id = setTimeout(() => dispatch({ type: 'CLEAR_TOAST' }), 3200);
    return () => clearTimeout(id);
  }, [state.toast, dispatch]);

  // Reset-arm timeout
  useEffect(() => {
    if (!state.resetArmed) return;
    const id = setTimeout(() => dispatch({ type: 'DISARM_RESET' }), 3000);
    return () => clearTimeout(id);
  }, [state.resetArmed, dispatch]);

  // Firebase auth state listener
  useEffect(() => {
    if (!firebaseEnabled || !auth) return;
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch({ type: 'SET_USER', user: { uid: user.uid, displayName: user.displayName, email: user.email } });
        try {
          const cloudData = await loadFromCloud(user.uid);
          if (cloudData) {
            const localData = stateRef.current;
            const { winner, source } = resolveConflict(localData, cloudData);
            if (source === 'cloud') {
              dispatch({ type: 'LOAD_SAVE', payload: winner });
              dispatch({ type: 'SET_TOAST', toast: { key: Date.now(), text: 'Cloud save loaded!' } });
            } else {
              await saveToCloud(user.uid, localData);
              dispatch({ type: 'SET_TOAST', toast: { key: Date.now(), text: 'Local save synced to cloud!' } });
            }
            dispatch({ type: 'SET_CLOUD_SYNC', timestamp: Date.now() });
          }
        } catch {}
      } else {
        dispatch({ type: 'SET_USER', user: null });
      }
    });
    return () => unsub();
  }, [dispatch, stateRef]);

  // Cloud save interval (every 30s)
  useEffect(() => {
    if (!state.ready || !state.user) return;
    const id = setInterval(async () => {
      try {
        await saveToCloud(state.user.uid, stateRef.current);
        dispatch({ type: 'SET_CLOUD_SYNC', timestamp: Date.now() });
      } catch {}
    }, 30000);
    return () => clearInterval(id);
  }, [state.ready, state.user, stateRef, dispatch]);
}
