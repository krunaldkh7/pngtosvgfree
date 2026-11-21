#!/usr/bin/env node
// Builds tool landing pages (e.g. jpg-to-svg.html) from tools/landing/*.html.
// Each page embeds the same converter as the homepage plus its own unique content, FAQ and a Related tools block.
// Source format: "key: value" header lines, "---", then body HTML (article + <div class="faq">).
// Header keys: slug, title (<= 60 chars), description (140-155), h1, answer (40-60 words), preset (auto|logo|photo|sketch|silhouette), name (short tool name)
// Usage: node tools/build-landing.js   (then: node tools/react/convert.js)
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SITE = 'https://pngtosvgfree.com';
const index = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function parse(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const i = raw.indexOf('\n---\n');
  const meta = {};
  for (const line of raw.slice(0, i).split('\n')) { const m = line.match(/^(\w+):\s*(.*)$/); if (m) meta[m[1]] = m[2].trim(); }
  meta.body = raw.slice(i + 5).trim();
  for (const k of ['slug', 'title', 'description', 'h1', 'answer', 'preset', 'name']) if (!meta[k]) throw new Error(`${file}: missing ${k}`);
  if (meta.title.length > 60) console.warn(`  ${meta.slug}: title ${meta.title.length} chars`);
  if (meta.description.length < 140 || meta.description.length > 155) console.warn(`  ${meta.slug}: description ${meta.description.length} chars`);
  return meta;
}

const pages = fs.readdirSync(path.join(__dirname, 'landing')).filter(f => f.endsWith('.html')).sort().map(f => parse(path.join(__dirname, 'landing', f)));

// Related tools: every converter page plus the main tools.
const TOOLS = [
  { slug: 'index', name: 'PNG to SVG Converter' },
  ...pages.map(p => ({ slug: p.slug, name: p.name })),
  { slug: 'bulk-svg-to-png-converter', name: 'SVG to PNG Converter' },
];
const related = self => `<!--related--><div class="wrap" id="related">
  <div class="sh reveal"><span class="tag">Related tools</span><h2>More free image to SVG tools</h2><p>Every tool runs the same private, in-browser converter with settings tuned for a specific job.</p></div>
  <div class="rel reveal">${TOOLS.filter(t => t.slug !== self).map(t => `<a href="${t.slug}.html">${t.name}</a>`).join('')}</div>
</div><!--/related-->
`;

const head = index.slice(0, index.indexOf('<section class="hero">'));
const tool = index.slice(index.indexOf('<div class="wrap" id="tool">'), index.indexOf('<div class="wrap" id="flow">'));
const tail = index.slice(index.indexOf('<div class="wrap"><div class="band reveal">'));

for (const p of pages) {
  const url = `${SITE}/${p.slug}`;
  let h = head
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(p.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(p.description)}">`)
    .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url}">`)
    .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${esc(p.title)}">`)
    .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${esc(p.description)}">`);
  h += `<section class="hero hero-sm">
  <div class="avail"><b></b>Free · No signup · No watermark</div>
  <h1>${p.h1}</h1>
  <p class="answer">${p.answer}</p>
  <div class="trust"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>Runs 100% in your browser · Files never uploaded</div>
</section>

`;
  h += tool.replace('<div class="wrap" id="tool">', `<div class="wrap" id="tool" data-preset="${p.preset}">`);
  h += `<div class="wrap" id="content">
<article class="prose reveal" style="margin-top:90px">
<div class="crumbs"><a href="index.html">Home</a> / ${p.name}</div>
${p.body.replace(/<div class="faq">[\s\S]*$/, '').trim()}
</article>
</div>

`;
  const faq = p.body.match(/<div class="faq">[\s\S]*$/);
  if (faq) h += `<div class="wrap" id="faq">
  <div class="sh reveal"><span class="tag">FAQ</span><h2>${p.name}: frequently asked questions</h2></div>
  ${faq[0]}
</div>

`;
  h += related(p.slug) + '\n' + tail;
  fs.writeFileSync(path.join(ROOT, p.slug + '.html'), h);
}

// Homepage gets the Related tools block too (before the FAQ).
let home = index.replace(/<!--related-->[\s\S]*?<!--\/related-->\n/, '');
home = home.replace('<div class="wrap" id="faq">', related('index') + '\n<div class="wrap" id="faq">');
fs.writeFileSync(path.join(ROOT, 'index.html'), home);

// CSS for the hero variant and related links (added once to index.html, inherited by landing pages).
console.log(`Built ${pages.length} landing pages.`);
