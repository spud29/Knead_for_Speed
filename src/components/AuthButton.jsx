import React from 'react';
import { useGameState, useDispatch } from '../state/GameContext.jsx';
import { signInWithGoogle, signOut, firebaseEnabled } from '../engine/firebase.js';
import { saveToCloud } from '../engine/cloudSave.js';

export default function AuthButton() {
  const state = useGameState();
  const dispatch = useDispatch();

  if (!firebaseEnabled) return null;

  async function handleSignIn() {
    try {
      await signInWithGoogle();
    } catch (err) {
      if (err.code !== 'auth/popup-closed-by-user') {
        dispatch({ type: 'SET_TOAST', toast: { key: Date.now(), text: 'Sign-in failed — try again' } });
      }
    }
  }

  async function handleSignOut() {
    try {
      await saveToCloud(state.user.uid, state);
      dispatch({ type: 'SET_CLOUD_SYNC', timestamp: Date.now() });
    } catch {}
    await signOut();
  }

  if (state.user) {
    return (
      <div>
        <div style={{ fontSize: '0.72rem', marginBottom: 6, color: 'var(--text-dim)' }}>
          Signed in as {state.user.displayName || state.user.email}
        </div>
        {state.lastCloudSync && (
          <div style={{ fontSize: '0.6rem', marginBottom: 8, color: 'var(--muted)' }}>
            Last cloud sync: {new Date(state.lastCloudSync).toLocaleTimeString()}
          </div>
        )}
        <button onClick={handleSignOut} className="btn" style={{ width: '100%' }}>
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button onClick={handleSignIn} className="btn" style={{ width: '100%' }}>
      Sign in with Google to sync saves
    </button>
  );
}
