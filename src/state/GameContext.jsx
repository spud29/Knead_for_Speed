import React, { createContext, useContext, useReducer, useRef } from 'react';
import { gameReducer } from './gameReducer.js';
import { INITIAL_STATE } from './initialState.js';

const GameContext = createContext(null);
const DispatchContext = createContext(null);

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);
  const stateRef = useRef(state);
  stateRef.current = state;

  return (
    <GameContext.Provider value={{ state, stateRef }}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </GameContext.Provider>
  );
}

export function useGameState() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGameState must be inside GameProvider');
  return ctx.state;
}

export function useGameStateRef() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGameStateRef must be inside GameProvider');
  return ctx.stateRef;
}

export function useDispatch() {
  const dispatch = useContext(DispatchContext);
  if (!dispatch) throw new Error('useDispatch must be inside GameProvider');
  return dispatch;
}
