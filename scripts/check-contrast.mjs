/**
 * WCAG 2.x contrast verification for the Fashion PAWty palette.
 * Run: node scripts/check-contrast.mjs
 * Fails (exit 1) if any pair misses its required ratio.
 */
const hex = (h) => {
  const n = h.replace('#', '');
  return [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16) / 255);
};
const lum = (h) => {
  const [r, g, b] = hex(h).map((c) =>
    c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  );
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
};

const BG = '#FBFAF7';
const pairs = [
  ['text on bg', '#141414', BG, 4.5],
  ['text-muted on bg', '#4A4A4A', BG, 4.5],
  ['accent (teal) on bg', '#0E5C6E', BG, 4.5],
  ['white on accent (buttons)', '#FFFFFF', '#0E5C6E', 4.5],
  ['accent-hover on bg', '#0A4653', BG, 4.5],
  ['white on accent-hover', '#FFFFFF', '#0A4653', 4.5],
  ['focus ring on bg', '#B47800', BG, 3],
  ['border on bg', '#828F98', BG, 3],
  ['text on surface (#FFFFFF)', '#141414', '#FFFFFF', 4.5],
  ['text-muted on surface', '#4A4A4A', '#FFFFFF', 4.5],
  ['accent on surface', '#0E5C6E', '#FFFFFF', 4.5],
  ['white on dark band (#0A4653)', '#FFFFFF', '#0A4653', 4.5],
  ['gold highlight on bg (decorative ONLY)', '#E0A82E', BG, 0],
];

let fail = false;
console.log('Pair'.padEnd(42) + 'Ratio'.padEnd(10) + 'Required  Result');
for (const [name, fg, bg, req] of pairs) {
  const r = ratio(fg, bg);
  const ok = r >= req;
  if (!ok) fail = true;
  console.log(
    name.padEnd(42) +
      `${r.toFixed(2)}:1`.padEnd(10) +
      (req ? `≥${req}:1`.padEnd(10) : 'n/a'.padEnd(10)) +
      (req ? (ok ? 'PASS' : 'FAIL') : 'decorative')
  );
}
process.exit(fail ? 1 : 0);
