import { getAchievementBonus } from '../constants/achievements.js';

export function computeStats(state) {
  const { owned, starUpgrades, achievements, activeEffects } = state;

  const cheese = owned.cheese || 0;
  const baker = owned.baker || 0;
  const oven = owned.oven || 0;
  const driver = owned.driver || 0;
  const regulars = owned.regulars || 0;
  const rush = owned.rush || 0;
  const woodfire = owned.woodfire || 0;
  const catering = owned.catering || 0;
  const test_kitchen = owned.test_kitchen || 0;
  const masterchef = owned.masterchef || 0;
  const franchise = owned.franchise || 0;
  const food_truck = owned.food_truck || 0;
  const pizzaverse = owned.pizzaverse || 0;
  const moon_oven = owned.moon_oven || 0;

  const coupon = owned.coupon || 0;
  const yelp = owned.yelp || 0;
  const app = owned.app || 0;
  const ghost_kitchen = owned.ghost_kitchen || 0;
  const empire = owned.empire || 0;
  const mogul = owned.mogul || 0;
  const tv_show = owned.tv_show || 0;
  const crypto_dough = owned.crypto_dough || 0;
  const world_domination = owned.world_domination || 0;

  // Base global multiplier from upgrades
  let globalMult = 1;
  globalMult += rush * 0.25;
  globalMult += yelp * 0.20;
  globalMult += empire * 1.0;
  globalMult += crypto_dough * 1.50;
  globalMult *= Math.pow(2, mogul);
  globalMult *= Math.pow(3, world_domination);

  // Star upgrade: Faster Ovens (+25% production per level)
  const fasterOvens = starUpgrades.faster_ovens || 0;

  // Achievement bonus (stacking % bonus)
  const achieveBonus = getAchievementBonus(achievements);
  globalMult *= (1 + achieveBonus);

  // Click multiplier
  let clickMult = 1;
  clickMult += regulars * 0.10;
  clickMult += coupon * 0.15;

  // Star upgrade: Better Flour (+50% base click per level)
  const betterFlour = starUpgrades.better_flour || 0;
  const baseClick = 1 + cheese + (betterFlour * 0.5);

  const perClick = baseClick * clickMult * globalMult;

  // Production multiplier
  const pizzaPlanet = starUpgrades.pizza_planet || 0;

  let prodMult = 1;
  prodMult += app * 0.30;
  prodMult += ghost_kitchen * 0.50;
  prodMult += tv_show * 0.75;
  prodMult += fasterOvens * 0.25;
  prodMult += pizzaPlanet * 2.0;

  const basePerSec = baker * 1 + oven * 5 + driver * 20 + woodfire * 100 + catering * 500 + test_kitchen * 2000 + masterchef * 10000 + franchise * 50000 + food_truck * 250000 + pizzaverse * 1000000 + moon_oven * 10000000;
  const perSec = basePerSec * prodMult * globalMult;

  // Apply active effects (golden pizza buffs)
  let effectClickMult = 1;
  let effectProdMult = 1;
  const now = Date.now();
  if (activeEffects) {
    for (const eff of activeEffects) {
      if (eff.expiresAt > now) {
        if (eff.type === 'frenzy') effectClickMult *= eff.multiplier;
        if (eff.type === 'overdrive') effectProdMult *= eff.multiplier;
      }
    }
  }

  return {
    perClick: perClick * effectClickMult,
    perSec: perSec * effectProdMult,
    globalMult,
    clickMult,
    prodMult,
  };
}
