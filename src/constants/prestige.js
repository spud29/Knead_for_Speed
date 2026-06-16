export const PRESTIGE_DOUGH_DIVISOR = 1_000_000;
export const MIN_STARS_TO_PRESTIGE = 1;

export const STAR_UPGRADES = [
  { id: 'better_flour', name: 'Better Flour', cost: 1, description: '+50% base click power', effectLabel: '+50% per tap' },
  { id: 'faster_ovens', name: 'Faster Ovens', cost: 2, description: '+25% all production', effectLabel: '+25% production' },
  { id: 'head_start', name: 'Head Start', cost: 3, description: 'Start each run with $500', effectLabel: '+$500 on prestige' },
  { id: 'star_power', name: 'Star Power', cost: 5, description: '+1 bonus star per prestige', effectLabel: '+1 star/prestige' },
  { id: 'lucky_oven', name: 'Lucky Oven', cost: 8, description: 'Golden pizzas appear 20% more often', effectLabel: '+20% golden pizza rate' },
  { id: 'golden_touch', name: 'Golden Touch', cost: 12, description: 'Golden pizzas give 2× rewards', effectLabel: '2× golden rewards' },
  { id: 'dough_magnet', name: 'Dough Magnet', cost: 15, description: '+50% offline earnings', effectLabel: '+50% offline earnings' },
  { id: 'time_warp', name: 'Time Warp', cost: 20, description: 'Offline earnings cap: 24h (was 12h)', effectLabel: '24h offline cap' },
  { id: 'pizza_planet', name: 'Pizza Planet', cost: 30, description: '+200% all production', effectLabel: '+200% production' },
];

export function calcStarsEarned(runDoughEarned, starPowerLevel = 0) {
  const base = Math.floor((-1 + Math.sqrt(1 + 8 * runDoughEarned / PRESTIGE_DOUGH_DIVISOR)) / 2);
  return Math.max(0, base) + starPowerLevel;
}
