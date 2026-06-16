export const ACHIEVEMENTS = [
  // Tapping
  { id: 'tap_1', name: 'First Knead', description: 'Tap the pizza once', category: 'tapping', check: s => s.totalTaps >= 1, reward: 0.01 },
  { id: 'tap_100', name: 'Getting Warmed Up', description: 'Tap 100 times', category: 'tapping', check: s => s.totalTaps >= 100, reward: 0.02 },
  { id: 'tap_1k', name: 'Dough Puncher', description: 'Tap 1,000 times', category: 'tapping', check: s => s.totalTaps >= 1000, reward: 0.03 },
  { id: 'tap_10k', name: 'Iron Fists', description: 'Tap 10,000 times', category: 'tapping', check: s => s.totalTaps >= 10000, reward: 0.05 },
  { id: 'tap_100k', name: 'Pizza Machine', description: 'Tap 100,000 times', category: 'tapping', check: s => s.totalTaps >= 100000, reward: 0.10 },

  // Earning
  { id: 'earn_100', name: 'Pocket Change', description: 'Earn $100 total', category: 'earning', check: s => s.totalDoughEarned >= 100, reward: 0.01 },
  { id: 'earn_1k', name: 'Lunch Rush', description: 'Earn $1K total', category: 'earning', check: s => s.totalDoughEarned >= 1000, reward: 0.02 },
  { id: 'earn_100k', name: 'Neighborhood Famous', description: 'Earn $100K total', category: 'earning', check: s => s.totalDoughEarned >= 100000, reward: 0.03 },
  { id: 'earn_1m', name: 'Millionaire Baker', description: 'Earn $1M total', category: 'earning', check: s => s.totalDoughEarned >= 1000000, reward: 0.05 },
  { id: 'earn_1b', name: 'Pizza Tycoon', description: 'Earn $1B total', category: 'earning', check: s => s.totalDoughEarned >= 1000000000, reward: 0.10 },

  // Upgrading
  { id: 'first_upgrade', name: 'Open for Business', description: 'Buy your first upgrade', category: 'upgrading', check: s => Object.values(s.owned).some(v => v > 0), reward: 0.01 },
  { id: 'own_10', name: 'Stacking Up', description: 'Own 10 of any single upgrade', category: 'upgrading', check: s => Object.values(s.owned).some(v => v >= 10), reward: 0.03 },
  { id: 'own_25', name: 'Fully Loaded', description: 'Own 25 of any single upgrade', category: 'upgrading', check: s => Object.values(s.owned).some(v => v >= 25), reward: 0.05 },
  { id: 'all_types', name: 'Full Menu', description: 'Own at least one of every kitchen upgrade', category: 'upgrading', check: s => ['cheese', 'baker', 'oven', 'driver', 'regulars', 'rush'].every(id => (s.owned[id] || 0) > 0), reward: 0.05 },
  { id: 'own_50', name: 'Upgrade Addict', description: 'Own 50 of any single upgrade', category: 'upgrading', check: s => Object.values(s.owned).some(v => v >= 50), reward: 0.10 },

  // Prestige
  { id: 'prestige_1', name: 'Franchise Owner', description: 'Prestige for the first time', category: 'prestige', check: s => s.stats.prestiges >= 1, reward: 0.05 },
  { id: 'prestige_5', name: 'Chain Restaurant', description: 'Prestige 5 times', category: 'prestige', check: s => s.stats.prestiges >= 5, reward: 0.10 },
  { id: 'prestige_10', name: 'Pizza Dynasty', description: 'Prestige 10 times', category: 'prestige', check: s => s.stats.prestiges >= 10, reward: 0.15 },
  { id: 'stars_10', name: 'Star Collector', description: 'Accumulate 10 stars', category: 'prestige', check: s => s.stars >= 10, reward: 0.10 },

  // Events
  { id: 'golden_1', name: 'Lucky Catch', description: 'Catch your first golden pizza', category: 'events', check: s => (s.stats.goldenCaught || 0) >= 1, reward: 0.02 },
  { id: 'golden_10', name: 'Golden Gloves', description: 'Catch 10 golden pizzas', category: 'events', check: s => (s.stats.goldenCaught || 0) >= 10, reward: 0.05 },
  { id: 'golden_50', name: 'Midas Touch', description: 'Catch 50 golden pizzas', category: 'events', check: s => (s.stats.goldenCaught || 0) >= 50, reward: 0.10 },
  { id: 'golden_100', name: 'Golden Legend', description: 'Catch 100 golden pizzas', category: 'events', check: s => (s.stats.goldenCaught || 0) >= 100, reward: 0.15 },

  // Late-game
  { id: 'earn_10b', name: 'Pizza Empire', description: 'Earn $10B total', category: 'earning', check: s => s.totalDoughEarned >= 10000000000, reward: 0.15 },
  { id: 'prestige_20', name: 'Galactic Pizzeria', description: 'Prestige 20 times', category: 'prestige', check: s => s.stats.prestiges >= 20, reward: 0.20 },
  { id: 'own_100', name: 'Hoarder', description: 'Own 100 of any single upgrade', category: 'upgrading', check: s => Object.values(s.owned).some(v => v >= 100), reward: 0.15 },
];

export function getAchievementBonus(unlockedIds) {
  let bonus = 0;
  for (const a of ACHIEVEMENTS) {
    if (unlockedIds.includes(a.id)) bonus += a.reward;
  }
  return bonus;
}
