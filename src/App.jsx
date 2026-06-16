import React from 'react';
import { GameProvider, useGameState } from './state/GameContext.jsx';
import { useGameLoop } from './hooks/useGameLoop.js';
import './styles/theme.css';

import Toast from './components/Toast.jsx';
import TapArea from './components/TapArea.jsx';
import GoldenPizza from './components/GoldenPizza.jsx';
import UpgradeList from './components/UpgradeList.jsx';
import PrestigePanel from './components/PrestigePanel.jsx';
import AchievementsPanel from './components/AchievementsPanel.jsx';
import StatsPanel from './components/StatsPanel.jsx';
import SettingsPanel from './components/SettingsPanel.jsx';
import NavBar from './components/NavBar.jsx';

function GameScreen() {
  const state = useGameState();
  useGameLoop();

  if (!state.ready) {
    return (
      <div className="kfs-root" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div className="font-display ember-text" style={{ fontSize: '1.3rem', letterSpacing: '0.15em' }}>
          FIRING UP THE OVENS...
        </div>
      </div>
    );
  }

  const panels = {
    shop: <UpgradeList />,
    achievements: <AchievementsPanel />,
    stats: <StatsPanel />,
    franchise: <PrestigePanel />,
    settings: <SettingsPanel />,
  };

  return (
    <div className="kfs-root" style={{ position: 'relative' }}>
      <Toast />

      <GoldenPizza />

      <div className="scroll-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px 16px 80px' }}>
        <header style={{ textAlign: 'center', marginTop: 8, width: '100%', maxWidth: 360 }}>
          <h1 className="font-display ember-text" style={{ fontSize: '2.4rem', lineHeight: 1 }}>KNEAD FOR SPEED</h1>
          <p className="muted-text" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 6 }}>
            Tap. Bake. Hustle the shift away.
          </p>
        </header>

        <div className="divider" style={{ width: '100%', maxWidth: 360, marginTop: 12 }} />

        <div style={{ marginTop: 12, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TapArea />
        </div>

        <div className="divider" style={{ width: '100%', maxWidth: 360, marginBottom: 12 }} />

        {panels[state.activeTab] || panels.shop}
      </div>

      <NavBar />
    </div>
  );
}

export default function App() {
  return (
    <GameProvider>
      <GameScreen />
    </GameProvider>
  );
}
