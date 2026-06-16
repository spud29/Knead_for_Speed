import { useRef, useCallback } from 'react';
import { useGameState } from '../state/GameContext.jsx';

const SOUNDS = {
  tap: { freq: 180, duration: 0.08, type: 'sine', gain: 0.3 },
  purchase: { freq: 520, duration: 0.15, type: 'sine', gain: 0.25, sweep: 680 },
  cantAfford: { freq: 140, duration: 0.12, type: 'square', gain: 0.15 },
  achievement: { freq: 440, duration: 0.3, type: 'sine', gain: 0.25, sweep: 880 },
  prestige: { freq: 330, duration: 0.5, type: 'sine', gain: 0.3, sweep: 990 },
  goldenAppear: { freq: 600, duration: 0.25, type: 'sine', gain: 0.2, sweep: 900 },
  goldenCatch: { freq: 500, duration: 0.35, type: 'sine', gain: 0.3, sweep: 1200 },
  pop: { freq: 400, duration: 0.06, type: 'sine', gain: 0.15 },
};

export function useAudio() {
  const state = useGameState();
  const ctxRef = useRef(null);

  const getCtx = useCallback(() => {
    if (!ctxRef.current) {
      try {
        ctxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      } catch {
        return null;
      }
    }
    if (ctxRef.current.state === 'suspended') {
      ctxRef.current.resume().catch(() => {});
    }
    return ctxRef.current;
  }, []);

  const play = useCallback((soundId) => {
    const vol = state.settings.sfxVol;
    if (vol <= 0) return;

    const sound = SOUNDS[soundId];
    if (!sound) return;

    const ctx = getCtx();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = sound.type;
    osc.frequency.setValueAtTime(sound.freq, ctx.currentTime);
    if (sound.sweep) {
      osc.frequency.linearRampToValueAtTime(sound.sweep, ctx.currentTime + sound.duration);
    }

    gain.gain.setValueAtTime(sound.gain * vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + sound.duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + sound.duration + 0.05);
  }, [state.settings.sfxVol, getCtx]);

  return { play };
}
