const UNITS = ['K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc'];

export function fmt(n, notation = 'letter') {
  if (!isFinite(n)) return '0';

  if (notation === 'scientific' && n >= 1000) {
    return n.toExponential(2);
  }

  if (notation === 'engineering' && n >= 1000) {
    const exp = Math.floor(Math.log10(n));
    const engExp = exp - (exp % 3);
    const mantissa = n / Math.pow(10, engExp);
    return `${mantissa.toFixed(2)}×10${superscript(engExp)}`;
  }

  if (n < 1000) return n % 1 === 0 ? n.toFixed(0) : n.toFixed(1);

  let v = n;
  let idx = -1;
  while (v >= 1000 && idx < UNITS.length - 1) {
    v /= 1000;
    idx++;
  }
  return v.toFixed(2) + UNITS[idx];
}

function superscript(num) {
  const map = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
  return String(num).split('').map(c => map[c] || c).join('');
}
