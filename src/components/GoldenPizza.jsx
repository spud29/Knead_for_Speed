import React from 'react';
import { useGameState } from '../state/GameContext.jsx';
import { useGoldenPizza } from '../hooks/useGoldenPizza.js';
import { useAudio } from '../hooks/useAudio.js';
import GoldenPizzaGraphic from '../assets/pizza/GoldenPizzaGraphic.jsx';

export default function GoldenPizza() {
  const state = useGameState();
  const { catchGoldenPizza } = useGoldenPizza();
  const { play } = useAudio();

  if (!state.goldenPizza) return null;

  const { x, y } = state.goldenPizza;

  function handleClick() {
    play('goldenCatch');
    catchGoldenPizza();
  }

  return (
    <button
      onClick={handleClick}
      className="golden-pizza golden-enter"
      style={{ left: `${x}%`, top: `${y}%` }}
      aria-label="Catch the golden pizza!"
    >
      <GoldenPizzaGraphic size={64} />
    </button>
  );
}
