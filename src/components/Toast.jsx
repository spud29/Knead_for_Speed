import React from 'react';
import { useGameState } from '../state/GameContext.jsx';

export default function Toast() {
  const { toast } = useGameState();
  if (!toast) return null;

  return <div key={toast.key} className="ticket-toast">{toast.text}</div>;
}
