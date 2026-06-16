import { Flame, ChefHat, Truck, Star, Zap, Pizza, UtensilsCrossed, Megaphone, ThumbsUp, Smartphone, Building2, Crown, Globe, Rocket, Tv, Coins } from 'lucide-react';

export const KITCHEN_UPGRADES = [
  { id: 'cheese', name: 'Extra Cheese', icon: Flame, baseCost: 10, growth: 1.15, effectLabel: '+1 dough per tap', category: 'kitchen' },
  { id: 'baker', name: 'Sous Chef', icon: ChefHat, baseCost: 50, growth: 1.15, effectLabel: '+1 dough/sec', category: 'kitchen' },
  { id: 'oven', name: 'Second Oven', icon: Flame, baseCost: 300, growth: 1.15, effectLabel: '+5 dough/sec', category: 'kitchen' },
  { id: 'driver', name: 'Delivery Fleet', icon: Truck, baseCost: 1500, growth: 1.15, effectLabel: '+20 dough/sec', category: 'kitchen' },
  { id: 'regulars', name: 'Loyal Regulars', icon: Star, baseCost: 5000, growth: 1.2, effectLabel: '+10% per tap', category: 'kitchen' },
  { id: 'rush', name: 'Late Night Rush', icon: Zap, baseCost: 20000, growth: 1.25, effectLabel: '+25% to everything', category: 'kitchen' },
  { id: 'woodfire', name: 'Wood-Fire Oven', icon: Flame, baseCost: 100000, growth: 1.15, effectLabel: '+100 dough/sec', category: 'kitchen', unlock: { type: 'earned', value: 50000 } },
  { id: 'catering', name: 'Catering Van', icon: Truck, baseCost: 500000, growth: 1.15, effectLabel: '+500 dough/sec', category: 'kitchen', unlock: { type: 'earned', value: 250000 } },
  { id: 'test_kitchen', name: 'Test Kitchen', icon: UtensilsCrossed, baseCost: 2000000, growth: 1.18, effectLabel: '+2,000 dough/sec', category: 'kitchen', unlock: { type: 'prestige', value: 1 } },
  { id: 'masterchef', name: 'Master Chef', icon: ChefHat, baseCost: 10000000, growth: 1.2, effectLabel: '+10,000 dough/sec', category: 'kitchen', unlock: { type: 'prestige', value: 2 } },
  { id: 'franchise', name: 'Franchise HQ', icon: Building2, baseCost: 50000000, growth: 1.18, effectLabel: '+50,000 dough/sec', category: 'kitchen', unlock: { type: 'prestige', value: 3 } },
  { id: 'food_truck', name: 'Food Truck Fleet', icon: Truck, baseCost: 250000000, growth: 1.20, effectLabel: '+250,000 dough/sec', category: 'kitchen', unlock: { type: 'prestige', value: 5 } },
  { id: 'pizzaverse', name: 'Pizzaverse', icon: Globe, baseCost: 1000000000, growth: 1.22, effectLabel: '+1,000,000 dough/sec', category: 'kitchen', unlock: { type: 'prestige', value: 8 } },
  { id: 'moon_oven', name: 'Moon Oven', icon: Rocket, baseCost: 10000000000, growth: 1.25, effectLabel: '+10,000,000 dough/sec', category: 'kitchen', unlock: { type: 'prestige', value: 12 } },
];

export const BUSINESS_UPGRADES = [
  { id: 'coupon', name: 'Coupon Mailer', icon: Megaphone, baseCost: 8000, growth: 1.2, effectLabel: '+15% per tap', category: 'business', unlock: { type: 'earned', value: 5000 } },
  { id: 'yelp', name: '5-Star Reviews', icon: ThumbsUp, baseCost: 40000, growth: 1.22, effectLabel: '+20% to everything', category: 'business', unlock: { type: 'earned', value: 20000 } },
  { id: 'app', name: 'Ordering App', icon: Smartphone, baseCost: 200000, growth: 1.22, effectLabel: '+30% production', category: 'business', unlock: { type: 'earned', value: 100000 } },
  { id: 'ghost_kitchen', name: 'Ghost Kitchen', icon: Building2, baseCost: 1000000, growth: 1.25, effectLabel: '+50% production', category: 'business', unlock: { type: 'prestige', value: 1 } },
  { id: 'empire', name: 'Pizza Empire', icon: Crown, baseCost: 5000000, growth: 1.28, effectLabel: '+100% to everything', category: 'business', unlock: { type: 'prestige', value: 3 } },
  { id: 'mogul', name: 'Dough Mogul', icon: Crown, baseCost: 50000000, growth: 1.3, effectLabel: '2× everything', category: 'business', unlock: { type: 'prestige', value: 5 } },
  { id: 'tv_show', name: 'Reality TV Show', icon: Tv, baseCost: 100000000, growth: 1.25, effectLabel: '+75% production', category: 'business', unlock: { type: 'prestige', value: 4 } },
  { id: 'crypto_dough', name: 'DoughCoin ICO', icon: Coins, baseCost: 500000000, growth: 1.28, effectLabel: '+150% to everything', category: 'business', unlock: { type: 'prestige', value: 7 } },
  { id: 'world_domination', name: 'World Domination', icon: Globe, baseCost: 5000000000, growth: 1.30, effectLabel: '3× everything', category: 'business', unlock: { type: 'prestige', value: 10 } },
];

export const ALL_UPGRADES = [...KITCHEN_UPGRADES, ...BUSINESS_UPGRADES];

export function costFor(upgrade, ownedCount) {
  return Math.ceil(upgrade.baseCost * Math.pow(upgrade.growth, ownedCount));
}

export function isUpgradeUnlocked(upgrade, totalDoughEarned, prestiges) {
  if (!upgrade.unlock) return true;
  if (upgrade.unlock.type === 'earned') return totalDoughEarned >= upgrade.unlock.value;
  if (upgrade.unlock.type === 'prestige') return prestiges >= upgrade.unlock.value;
  return true;
}
