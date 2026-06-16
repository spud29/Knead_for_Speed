import React, { useState, useEffect, useRef } from 'react';
import { Flame, ChefHat, Truck, Star, Zap } from 'lucide-react';

const STORAGE_KEY = 'knead-for-speed-save-v1';
const MAX_OFFLINE_SECONDS = 12 * 3600;

const UPGRADES = [
  { id: 'cheese', name: 'Extra Cheese', icon: Flame, baseCost: 10, growth: 1.15, effectLabel: '+1 dough per tap' },
  { id: 'baker', name: 'Sous Chef', icon: ChefHat, baseCost: 50, growth: 1.15, effectLabel: '+1 dough/sec' },
  { id: 'oven', name: 'Second Oven', icon: Flame, baseCost: 300, growth: 1.15, effectLabel: '+5 dough/sec' },
  { id: 'driver', name: 'Delivery Fleet', icon: Truck, baseCost: 1500, growth: 1.15, effectLabel: '+20 dough/sec' },
  { id: 'regulars', name: 'Loyal Regulars', icon: Star, baseCost: 5000, growth: 1.2, effectLabel: '+10% per tap' },
  { id: 'rush', name: 'Late Night Rush', icon: Zap, baseCost: 20000, growth: 1.25, effectLabel: '+25% to everything' },
];

function costFor(u, owned) {
  return Math.ceil(u.baseCost * Math.pow(u.growth, owned));
}

function fmt(n) {
  if (!isFinite(n)) return '0';
  if (n < 1000) return n % 1 === 0 ? n.toFixed(0) : n.toFixed(1);
  const units = ['K', 'M', 'B', 'T'];
  let v = n;
  let idx = -1;
  while (v >= 1000 && idx < units.length - 1) {
    v /= 1000;
    idx++;
  }
  return v.toFixed(2) + units[idx];
}

function computeStats(owned) {
  const cheese = owned.cheese || 0;
  const baker = owned.baker || 0;
  const oven = owned.oven || 0;
  const driver = owned.driver || 0;
  const regulars = owned.regulars || 0;
  const rush = owned.rush || 0;
  const globalMult = 1 + rush * 0.25;
  const clickMult = 1 + regulars * 0.1;
  const perClick = (1 + cheese) * clickMult * globalMult;
  const perSec = (baker * 1 + oven * 5 + driver * 20) * globalMult;
  return { perClick, perSec };
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');

:root {
  --bg: #18120E;
  --surface-2: #2C2118;
  --ticket: #F3E6D2;
  --ink: #2B2018;
  --ember: #FF7A33;
  --gold: #FFC857;
  --muted: #9C8A78;
  --text: #EDE0CC;
}

.kfs-root {
  background: linear-gradient(180deg, var(--bg) 0%, #100B08 100%);
  color: var(--text);
  font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
}

.font-display {
  font-family: 'Bebas Neue', Impact, 'Arial Narrow', sans-serif;
  letter-spacing: 0.08em;
}

.font-ticket {
  font-family: 'Space Mono', 'Courier New', monospace;
}

.ember-text { color: var(--ember); }
.gold-text { color: var(--gold); }
.muted-text { color: var(--muted); }
.surface-2-bg { background: var(--surface-2); }

.divider {
  border-top: 2px dashed rgba(156,138,120,0.28);
  height: 0;
}

.ticket-toast {
  background: var(--ticket);
  color: var(--ink);
  font-family: 'Space Mono','Courier New',monospace;
  font-size: 0.78rem;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px dashed rgba(43,32,24,0.35);
  box-shadow: 0 8px 24px rgba(0,0,0,0.45);
  animation: ticketIn 0.25s ease-out;
}

@keyframes ticketIn {
  from { opacity: 0; transform: translate(-50%, -10px); }
  to { opacity: 1; transform: translate(-50%, 0); }
}

.tap-btn {
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  background: radial-gradient(circle at 35% 30%, #FFA85C, #E0483E 75%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255,200,87,0.45);
}
.tap-btn:active { transform: scale(0.94); }

@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 26px rgba(255,122,51,0.35); }
  50% { box-shadow: 0 0 48px rgba(255,122,51,0.55); }
}
.pulse-ember { animation: pulseGlow 2.6s ease-in-out infinite; }

@keyframes floatUp {
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-70px); }
}
.float-pop { animation: floatUp 0.85s ease-out forwards; }

.icon-box {
  background: var(--surface-2);
  border-radius: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.upgrade-row {
  border-bottom: 1px dashed rgba(156,138,120,0.18);
}
.upgrade-row:last-child { border-bottom: none; }
.upgrade-row:active { background: rgba(255,122,51,0.06); }

.tap-btn, .upgrade-row, .reset-link {
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  transition: transform 0.08s ease, background-color 0.15s ease;
}

.tap-btn:focus-visible, .upgrade-row:focus-visible, .reset-link:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 2px;
}

.reset-link {
  text-decoration: underline;
}

@media (prefers-reduced-motion: reduce) {
  .pulse-ember, .float-pop, .ticket-toast { animation: none; }
}
`;

export default function KneadForSpeed() {
  const [dough, setDough] = useState(0);
  const [owned, setOwned] = useState({});
  const [ready, setReady] = useState(false);
  const [pops, setPops] = useState([]);
  const [toast, setToast] = useState(null);
  const [resetArmed, setResetArmed] = useState(false);

  const doughRef = useRef(0);
  const ownedRef = useRef({});
  doughRef.current = dough;
  ownedRef.current = owned;

  // Load saved game
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await window.storage.get(STORAGE_KEY);
        if (res && res.value) {
          const data = JSON.parse(res.value);
          const savedOwned = data.owned || {};
          const savedDough = data.dough || 0;
          const last = data.lastSaved || Date.now();
          const elapsed = Math.max(0, Math.min((Date.now() - last) / 1000, MAX_OFFLINE_SECONDS));
          const { perSec } = computeStats(savedOwned);
          const earned = perSec * elapsed;
          if (mounted) {
            setOwned(savedOwned);
            setDough(savedDough + earned);
            if (earned > 1) {
              setToast({ key: Date.now(), text: `Ovens kept running -- +$${fmt(earned)} while you were away` });
            }
          }
        }
      } catch (e) {
        // no save yet, start fresh
      }
      if (mounted) setReady(true);
    })();
    return () => { mounted = false; };
  }, []);

  // Idle income tick
  useEffect(() => {
    if (!ready) return;
    const { perSec } = computeStats(owned);
    if (perSec <= 0) return;
    const id = setInterval(() => {
      setDough(d => d + perSec / 10);
    }, 100);
    return () => clearInterval(id);
  }, [ready, owned]);

  // Autosave
  useEffect(() => {
    if (!ready) return;
    const id = setInterval(() => {
      window.storage.set(STORAGE_KEY, JSON.stringify({
        dough: doughRef.current,
        owned: ownedRef.current,
        lastSaved: Date.now(),
      })).catch(() => {});
    }, 4000);
    return () => clearInterval(id);
  }, [ready]);

  // Random "tip" bonus
  useEffect(() => {
    if (!ready) return;
    let timeoutId;
    const schedule = () => {
      const delay = 30000 + Math.random() * 40000;
      timeoutId = setTimeout(() => {
        const { perClick } = computeStats(ownedRef.current);
        const bonus = Math.max(5, perClick * (6 + Math.random() * 10));
        setDough(d => d + bonus);
        setToast({ key: Date.now(), text: `Nice tip! +$${fmt(bonus)}` });
        schedule();
      }, delay);
    };
    schedule();
    return () => clearTimeout(timeoutId);
  }, [ready]);

  // Toast auto-dismiss
  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(id);
  }, [toast]);

  // Reset-arm timeout
  useEffect(() => {
    if (!resetArmed) return;
    const id = setTimeout(() => setResetArmed(false), 3000);
    return () => clearTimeout(id);
  }, [resetArmed]);

  const { perClick, perSec } = computeStats(owned);

  function handleTap() {
    setDough(d => d + perClick);
    const id = Date.now() + Math.random();
    const x = 30 + Math.random() * 40;
    setPops(p => [...p, { id, value: perClick, x }]);
    setTimeout(() => {
      setPops(p => p.filter(pop => pop.id !== id));
    }, 850);
  }

  function buyUpgrade(u) {
    const ownedCount = owned[u.id] || 0;
    const cost = costFor(u, ownedCount);
    if (dough < cost) return;
    setDough(d => d - cost);
    setOwned(o => ({ ...o, [u.id]: (o[u.id] || 0) + 1 }));
  }

  function handleResetClick() {
    if (!resetArmed) {
      setResetArmed(true);
      return;
    }
    setResetArmed(false);
    setDough(0);
    setOwned({});
    window.storage.set(STORAGE_KEY, JSON.stringify({ dough: 0, owned: {}, lastSaved: Date.now() })).catch(() => {});
    setToast({ key: Date.now(), text: 'Fresh shift, fresh start' });
  }

  if (!ready) {
    return (
      <div className="kfs-root min-h-screen flex items-center justify-center">
        <style>{styles}</style>
        <div className="font-display ember-text text-xl tracking-widest">FIRING UP THE OVENS...</div>
      </div>
    );
  }

  return (
    <div className="kfs-root min-h-screen flex flex-col items-center px-4 py-6">
      <style>{styles}</style>

      {toast && (
        <div key={toast.key} className="ticket-toast fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-xs text-center">
          {toast.text}
        </div>
      )}

      <header className="text-center mt-2 w-full max-w-sm">
        <h1 className="font-display ember-text text-4xl leading-none">KNEAD FOR SPEED</h1>
        <p className="text-xs uppercase tracking-widest mt-2 muted-text">Tap. Bake. Hustle the shift away.</p>
      </header>

      <div className="divider w-full max-w-sm mt-4" />

      <div className="w-full max-w-sm surface-2-bg rounded-md px-4 py-4 text-center mt-4">
        <div className="font-ticket gold-text text-5xl">${fmt(dough)}</div>
        <div className="font-ticket muted-text text-xs mt-2 tracking-wide">
          {fmt(perSec)}/SEC &nbsp;&middot;&nbsp; +{fmt(perClick)} PER TAP
        </div>
      </div>

      <div className="relative flex items-center justify-center my-8" style={{ width: 180, height: 180 }}>
        {pops.map(pop => (
          <div
            key={pop.id}
            className="float-pop font-ticket gold-text absolute text-lg font-bold pointer-events-none"
            style={{ left: `${pop.x}%`, top: '40%' }}
          >
            +{fmt(pop.value)}
          </div>
        ))}
        <button onClick={handleTap} className="tap-btn pulse-ember" aria-label="Make a pizza">
          <span style={{ fontSize: '4.5rem' }}>🍕</span>
        </button>
      </div>

      <div className="divider w-full max-w-sm mb-4" />

      <div className="w-full max-w-sm">
        <div className="font-display text-sm tracking-widest muted-text mb-1">UPGRADES</div>
        {UPGRADES.map(u => {
          const ownedCount = owned[u.id] || 0;
          const cost = costFor(u, ownedCount);
          const affordable = dough >= cost;
          const Icon = u.icon;
          return (
            <button
              key={u.id}
              onClick={() => buyUpgrade(u)}
              disabled={!affordable}
              className={`upgrade-row w-full flex items-center justify-between gap-3 py-3 text-left ${affordable ? '' : 'opacity-50'}`}
            >
              <div className="flex items-center gap-3">
                <div className="icon-box ember-text">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-sm font-semibold">
                    {u.name} <span className="font-ticket muted-text text-xs">Lv{ownedCount}</span>
                  </div>
                  <div className="text-xs muted-text mt-0.5">{u.effectLabel}</div>
                </div>
              </div>
              <div className={`font-ticket text-sm ${affordable ? 'gold-text' : 'muted-text'}`}>
                ${fmt(cost)}
              </div>
            </button>
          );
        })}
      </div>

      <button onClick={handleResetClick} className="reset-link mt-6 mb-4 font-ticket text-xs muted-text">
        {resetArmed ? 'Tap again to reset' : 'Reset progress'}
      </button>
    </div>
  );
}
