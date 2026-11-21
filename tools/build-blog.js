#!/usr/bin/env node
// Builds blog post pages from tools/posts/*.html, then regenerates blog.html and sitemap.xml.
// Post source format: "key: value" header lines, a line with "---", then the article body HTML.
// Header keys: slug, title (H1), category, date (YYYY-MM-DD), icon, description (140-155 chars)
// Optional: seo_title (<= 60 chars incl. brand), updated (YYYY-MM-DD), tldr (one-paragraph summary).
// Usage: node tools/build-blog.js
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SITE = 'https://pngtosvgfree.com';
const TEMPLATE = fs.readFileSync(path.join(ROOT, 'blog-png-vs-svg.html'), 'utf8');

const ICONS = {
  file: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M8 15l2-3 2 2 2-4 2 5"/>',
  compare: '<rect x="2" y="5" width="8" height="14" rx="2"/><rect x="14" y="5" width="8" height="14" rx="2"/><path d="M10 12h4"/>',
  shapes: '<circle cx="9" cy="9" r="5"/><path d="M14 21l4-8 4 8z"/><rect x="2" y="15" width="6" height="6" rx="1"/>',
  scissors: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>',
  code: '<path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/>',
  pen: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>',
  printer: '<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
  palette: '<circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="7.5" r="1.5"/><circle cx="6.5" cy="12.5" r="1.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
  gauge: '<path d="M12 14l4-4"/><path d="M3.34 19a10 10 0 1117.32 0"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>',
  wand: '<path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M17.8 6.2L19 5M3 21l9-9M12.2 6.2L11 5"/>',
};
const GRADIENTS = {
  Basics: '#3d4ef5,#8b5cf6', Formats: '#ec4899,#f59e0b', Tutorial: '#06b6d4,#3d4ef5', Crafting: '#16a34a,#06b6d4',
  Technology: '#0f1020,#4c4f6b', 'Web design': '#8b5cf6,#ec4899', Print: '#f59e0b,#ef4444', Tips: '#0ea5e9,#22c55e',
};

const BRAND = 'PNG to SVG Free';
const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const fmtDate = d => new Date(d + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

function parse(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const i = raw.indexOf('\n---\n');
  const meta = {};
  for (const line of raw.slice(0, i).split('\n')) {
    const m = line.match(/^(\w+):\s*(.*)$/);
    if (m) meta[m[1]] = m[2].trim();
  }
  meta.body = raw.slice(i + 5).trim();
  const words = meta.body.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  meta.words = words;
  meta.mins = Math.max(3, Math.round(words / 200));
  meta.updated = meta.updated || meta.date;
  const branded = `${meta.title} | ${BRAND}`;
  meta.seoTitle = meta.seo_title || (branded.length <= 60 ? branded : meta.title);
  for (const k of ['slug', 'title', 'category', 'date', 'description', 'icon']) if (!meta[k]) throw new Error(`${file}: missing ${k}`);
  if (meta.description.length < 140 || meta.description.length > 155) console.warn(`  ${meta.slug}: description ${meta.description.length} chars`);
  if (!ICONS[meta.icon]) throw new Error(`${file}: unknown icon ${meta.icon}`);
  if (!GRADIENTS[meta.category]) throw new Error(`${file}: unknown category ${meta.category}`);
  return meta;
}

// Existing hand-written posts (kept as-is) — read their card info from the current blog.html.
function existingCards() {
  const html = fs.readFileSync(path.join(ROOT, 'blog.html'), 'utf8');
  const cards = [];
  const re = /<a class="post" href="([^"]+)">([\s\S]*?)<\/a>/g;
  let m;
  while ((m = re.exec(html))) {
    const slug = m[1].replace(/\.html$/, '');
    if (fs.existsSync(path.join(__dirname, 'posts', slug + '.html'))) continue;
    const date = (m[2].match(/<span>([^·<]+)·/) || [])[1].trim();
    cards.push({ slug, html: m[0], date: new Date(date + ' 12:00 UTC').toISOString().slice(0, 10), category: (m[2].match(/<small>([^<]+)/) || [])[1] });
  }
  return cards;
}

function card(p) {
  const [a, b] = GRADIENTS[p.category].split(',');
  return `<a class="post" href="${p.slug}.html"><div class="th" style="background:linear-gradient(135deg,${a},${b})"><svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICONS[p.icon]}</svg></div>
<div class="bd"><small>${p.category}</small><b>${p.title}</b><p>${p.description}</p><span>${fmtDate(p.date)} · ${p.mins} min read</span></div></a>`;
}

const posts = fs.readdirSync(path.join(__dirname, 'posts')).filter(f => f.endsWith('.html')).sort().map(f => parse(path.join(__dirname, 'posts', f)));
const old = existingCards();
const all = [...posts.map(p => ({ slug: p.slug, html: card(p), date: p.date, category: p.category })), ...old]
  .sort((x, y) => y.date.localeCompare(x.date) || x.slug.localeCompare(y.slug));

// Related: same category first, then neighbours in the list.
function related(p) {
  const others = all.filter(x => x.slug !== p.slug);
  const same = others.filter(x => x.category === p.category);
  const idx = all.findIndex(x => x.slug === p.slug);
  const near = [...all.slice(idx + 1), ...all.slice(0, idx)].filter(x => x.slug !== p.slug);
  const pick = [];
  for (const x of [...same, ...near]) if (!pick.includes(x) && pick.length < 3) pick.push(x);
  return pick.map(x => x.html).join('');
}

for (const p of posts) {
  const [a, b] = GRADIENTS[p.category].split(',');
  const full = p.seoTitle;
  let html = TEMPLATE;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${full}</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(p.description)}">`)
    .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${SITE}/${p.slug}">`)
    .replace(/<meta property="og:title" content="[^"]*"><meta property="og:description" content="[^"]*"><meta property="og:type" content="[^"]*">/,
      `<meta property="og:title" content="${esc(full)}"><meta property="og:description" content="${esc(p.description)}"><meta property="og:type" content="article">`);
  const start = html.indexOf('<article class="prose">');
  const end = html.indexOf('</article>') + '</article>'.length;
  const article = `<article class="prose">
<div class="crumbs"><a href="index.html">Home</a> / <a href="blog.html">Blog</a> / ${p.category}</div>
<div class="cover" style="background:linear-gradient(135deg,${a},${b});color:#fff"><svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${ICONS[p.icon]}</svg></div>
<div class="meta"><span>${p.category}</span><span>${p.updated !== p.date ? 'Updated ' + fmtDate(p.updated) : fmtDate(p.date)}</span><span>${p.mins} min read</span><span>By the ${BRAND} team</span></div>
<h1 style="font-size:clamp(28px,4vw,40px);letter-spacing:-.03em;line-height:1.15;margin-top:6px">${p.title}</h1>
${p.tldr ? `<div class="tldr"><b>TL;DR</b><p>${p.tldr}</p></div>\n` : ''}
${p.body}

<div class="author"><img src="logo.svg" alt="" width="44" height="44"><div><b>Written by the ${BRAND} team</b><p>We build free, privacy-first tools for converting images to vectors and write practical guides for designers, crafters and developers. Published ${fmtDate(p.date)}${p.updated !== p.date ? ', updated ' + fmtDate(p.updated) : ''}.</p></div></div>

<div class="inline-cta"><p>Ready to try it? Convert your image to SVG for free.</p><a href="index.html#tool">Open the converter</a></div>
</article>`;
  html = html.slice(0, start) + article + html.slice(end);
  html = html.replace(/<div class="posts">[\s\S]*?<\/a><\/div>\n<\/div>/, `<div class="posts">${related(p)}</div>\n</div>`);
  const url = `${SITE}/${p.slug}`;
  const ld = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'BlogPosting', headline: p.title, description: p.description, datePublished: p.date, dateModified: p.updated,
      image: `${SITE}/og-image.png`, wordCount: p.words, articleSection: p.category, inLanguage: 'en',
      author: { '@type': 'Organization', name: BRAND, url: SITE }, publisher: { '@id': `${SITE}/#organization` }, mainEntityOfPage: url },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: p.title, item: url } ] } ] };
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(ld)}</script>`);
  fs.writeFileSync(path.join(ROOT, p.slug + '.html'), html);
}

// blog.html listing
const blogPath = path.join(ROOT, 'blog.html');
let blog = fs.readFileSync(blogPath, 'utf8');
blog = blog.replace(/<div class="posts reveal">[\s\S]*?<\/a><\/div><\/div>/, `<div class="posts reveal">${all.map(x => x.html).join('')}</div></div>`);
fs.writeFileSync(blogPath, blog);

// sitemap.xml: keep non-blog-post URLs, regenerate post URLs
const smPath = path.join(ROOT, 'sitemap.xml');
const sm = fs.readFileSync(smPath, 'utf8');
const keep = [...sm.matchAll(/  <url><loc>([^<]+)<\/loc><lastmod>([^<]+)<\/lastmod><\/url>/g)].filter(m => !/\/blog-/.test(m[1])).map(m => m[0]);
const postUrls = all.map(x => `  <url><loc>${SITE}/${x.slug}</loc><lastmod>${x.date}</lastmod></url>`);
fs.writeFileSync(smPath, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...keep, ...postUrls].join('\n')}\n</urlset>\n`);

console.log(`Built ${posts.length} posts; blog lists ${all.length}.`);
for (const p of posts) if (p.seoTitle.length > 60) console.log(`  title too long: ${p.slug} (${p.seoTitle.length})`);
