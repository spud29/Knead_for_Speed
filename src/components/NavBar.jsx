import React from 'react';
import { useGameState, useDispatch } from '../state/GameContext.jsx';
import { NavShop, NavBadges, NavStats, NavFranchise, NavSettings } from '../assets/icons';

const TABS = [
  { id: 'shop', Icon: NavShop, label: 'Shop', alwaysVisible: true },
  { id: 'achievements', Icon: NavBadges, label: 'Badges', alwaysVisible: false },
  { id: 'stats', Icon: NavStats, label: 'Stats', alwaysVisible: true },
  { id: 'franchise', Icon: NavFranchise, label: 'Franchise', alwaysVisible: false },
  { id: 'settings', Icon: NavSettings, label: 'Settings', alwaysVisible: true },
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
          <span className="nav-tab-icon"><tab.Icon size={22} /></span>
          <span>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}
