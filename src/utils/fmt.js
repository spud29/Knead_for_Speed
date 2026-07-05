// Standard 1000-based unit suffixes (up to Centillion)
const UNITS = ['K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc',
  'UDc', 'DDc', 'TDc', 'QaDc', 'QiDc', 'SxDc', 'SpDc', 'OcDc', 'NoDc', 'Vg',
  'UVg', 'DVg', 'TVg', 'QaVg', 'QiVg', 'SxVg', 'SpVg', 'OcVg', 'NoVg', 'Tg',
  'UTg', 'DTg', 'TTg', 'QaTg', 'QiTg', 'SxTg', 'SpTg', 'OcTg', 'NoTg', 'Qd',
  'UQd', 'DQd', 'TQd', 'QaQd', 'QiQd', 'SxQd', 'SpQd', 'OcQd', 'NoQd', 'Qi',
  'UQi', 'DQi', 'TQi', 'QaQi', 'QiQi', 'SxQi', 'SpQi', 'OcQi', 'NoQi', 'Se'];

const MAX_UNIT_INDEX = UNITS.length - 1;
const LOG10_1000 = 3;

export function fmt(n, notation = 'letter') {
  if (!isFinite(n) || n < 0) return '0';

  if (n < 1000) return n % 1 === 0 ? n.toFixed(0) : n.toFixed(1);

  if (notation === 'scientific') {
    return n.toExponential(2);
  }

  if (notation === 'engineering') {
    const exp = Math.floor(Math.log10(n));
    const engExp = exp - (exp % 3);
    const mantissa = n / Math.pow(10, engExp);
    return `${mantissa.toFixed(2)}×10${superscript(engExp)}`;
  }

  // Letter notation: divide by 1000 until we find a unit, capped at the last unit
  let v = n;
  let idx = -1;
  while (v >= 1000 && idx < MAX_UNIT_INDEX) {
    v /= 1000;
    idx++;
  }

  // If we ran out of units, fall back to scientific
  if (idx > MAX_UNIT_INDEX) {
    return n.toExponential(2);
  }

  return v.toFixed(2) + UNITS[idx];
}

/** Compact inline formatter for toasts / tooltips — same logic, no extern dependency */
export function fmtCompact(n) {
  if (!isFinite(n) || n < 0) return '0';
  if (n < 1000) return n % 1 === 0 ? n.toFixed(0) : n.toFixed(1);

  let v = n;
  let idx = -1;
  while (v >= 1000 && idx < MAX_UNIT_INDEX) {
    v /= 1000;
    idx++;
  }

  if (idx > MAX_UNIT_INDEX) {
    return n.toExponential(2);
  }
  return v.toFixed(2) + UNITS[idx];
}

function superscript(num) {
  const map = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
  return String(num).split('').map(c => map[c] || c).join('');
}