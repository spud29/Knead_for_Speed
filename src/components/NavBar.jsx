import React from 'react';
import { useGameState, useDispatch } from '../state/GameContext.jsx';

const TABS = [
  { id: 'shop', icon: '🍕', label: 'Shop', alwaysVisible: true },
  { id: 'achievements', icon: '🏆', label: 'Badges', alwaysVisible: false },
  { id: 'stats', icon: '📊', label: 'Stats', alwaysVisible: true },
  { id: 'franchise', icon: '⭐', label: 'Franchise', alwaysVisible: false },
  { id: 'settings', icon: '⚙️', label: 'Settings', alwaysVisible: true },
];

export default function NavBar() {
  const state = useGameState();
  const dispatch = useDispatch();

  const showFranchise = state.runDoughEarned >= 500000 || state.totalDoughEarned >= 500000 || state.stats.prestiges > 0;
  const showAchievements = state.achievements.length > 0 || state.totalTaps >= 1;

  const visibleTabs = TABS.filter(t => {
    if (t.alwaysVisible) return true;
    if (t.id === 'franchise') return showFranchise;
    if (t.id === 'achievements') return showAchievements;
    return true;
  });

  return (
    <nav className="nav-bar">
      {visibleTabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => dispatch({ type: 'SET_TAB', tab: tab.id })}
          className={`nav-tab ${state.activeTab === tab.id ? 'active' : ''}`}
          aria-label={tab.label}
          aria-current={state.activeTab === tab.id ? 'page' : undefined}
        >
          <span className="nav-tab-icon">{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}
