// Converts the static HTML pages (repo root) into Next.js App Router pages in react-app/.
// Run after editing any .html page:  node tools/react/convert.js
const fs = require('fs');
const path = require('path');
const { parseDocument } = require(path.join(__dirname, '../../react-app/node_modules/htmlparser2'));

const SRC = path.join(__dirname, '../..');
const OUT = path.join(SRC, 'react-app');
const SHARED = fs.readFileSync(path.join(__dirname, 'shared.css'), 'utf8')
  .replace(/^<style>/, '').replace(/<\/style>\s*$/, '');

const PAGES = fs.readdirSync(SRC).filter(f => f.endsWith('.html'));
const SCRIPTED = { 'index.html': 'home', 'bulk-svg-to-png-converter.html': 'bulk', 'gallery.html': 'gallery', 'contact.html': 'contact' };
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);
const NO_WS = new Set(['table', 'thead', 'tbody', 'tfoot', 'tr', 'colgroup', 'select']);
const ATTR = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex', maxlength: 'maxLength', minlength: 'minLength',
  readonly: 'readOnly', autocomplete: 'autoComplete', autofocus: 'autoFocus', crossorigin: 'crossOrigin',
  colspan: 'colSpan', rowspan: 'rowSpan', srcset: 'srcSet', enterkeyhint: 'enterKeyHint', contenteditable: 'contentEditable',
  spellcheck: 'spellCheck', novalidate: 'noValidate', allowfullscreen: 'allowFullScreen', frameborder: 'frameBorder',
  viewbox: 'viewBox', 'xlink:href': 'xlinkHref', 'xmlns:xlink': 'xmlnsXlink', 'xml:space': 'xmlSpace',
  inputmode: 'inputMode', accesskey: 'accessKey', datetime: 'dateTime', hreflang: 'hrefLang', referrerpolicy: 'referrerPolicy',
};
const BOOL = new Set(['checked', 'disabled', 'open', 'required', 'multiple', 'hidden', 'readOnly', 'autoFocus', 'noValidate', 'selected', 'allowFullScreen']);
// Inline onclick strings in the original markup -> data-act hooks handled by page scripts.
const ACTS = {
  "document.getElementById('file').click()": 'pick',
  "document.getElementById('file').click();scrollTo({top:document.getElementById('tool').offsetTop-20})": 'pick-scroll',
};

const warn = [];
const camel = s => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const js = s => JSON.stringify(s);

function styleObj(s) {
  const parts = [];
  for (const decl of s.split(/;(?![^(]*\))/)) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const k = decl.slice(0, i).trim(), v = decl.slice(i + 1).trim();
    if (!k) continue;
    parts.push(`${js(k.startsWith('--') ? k : camel(k.replace(/^-ms-/, 'ms-')))}: ${js(v)}`);
  }
  return `{{ ${parts.join(', ')} }}`;
}

function href(v) {
  const m = v.match(/^([a-z0-9-]+)\.html(#.*)?$/i);
  if (!m) return null;
  return (m[1] === 'index' ? '/' : '/' + m[1]) + (m[2] || '');
}

function attrs(el, file) {
  const out = [];
  let link = null;
  for (let [k, v] of Object.entries(el.attribs)) {
    if (k === 'onclick') {
      const act = ACTS[v.trim()];
      if (act) out.push(`data-act=${js(act)}`);
      else if (/navpill|localStorage/.test(v)) { /* handled by layout components */ }
      else warn.push(`${file}: unhandled onclick ${v}`);
      continue;
    }
    if (/^on/.test(k)) { warn.push(`${file}: dropped ${k}`); continue; }
    if (k === 'style') { out.push(`style=${styleObj(v)}`); continue; }
    if (k === 'href' && el.name === 'a') { const h = href(v); if (h) { link = h; out.push(`href=${js(h)}`); continue; } }
    if (k === 'value' && (el.name === 'input' || el.name === 'textarea') && !/checkbox|radio|submit|button|hidden/.test(el.attribs.type || '')) k = 'defaultValue';
    if (k === 'checked' && el.name === 'input') { out.push('defaultChecked'); continue; }
    if (k === 'selected' && el.name === 'option') { warn.push(`${file}: dropped option selected`); continue; }
    let name = ATTR[k] || (/^(data|aria)-/.test(k) ? k : k.includes('-') || k.includes(':') ? camel(k.replace(':', '-')) : k);
    if (BOOL.has(name) && (v === '' || v === name.toLowerCase())) { out.push(name); continue; }
    out.push(`${name}=${js(v)}`);
  }
  return { str: out.length ? ' ' + out.join(' ') : '', link };
}

function text(t) {
  const s = t.replace(/\s+/g, ' ');
  return s ? `{${js(s)}}` : '';
}

function jsx(node, file, depth, parentNoWs) {
  const pad = '  '.repeat(depth);
  if (node.type === 'text') {
    if (parentNoWs && !node.data.trim()) return '';
    const t = text(node.data);
    return t ? pad + t + '\n' : '';
  }
  if (node.type === 'comment') return '';
  if (node.type === 'script') {
    const type = node.attribs.type || '';
    const body = node.children.map(c => c.data).join('');
    if (type === 'application/ld+json') return `${pad}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ${js(body)} }} />\n`;
    warn.push(`${file}: skipped inline script in content`);
    return '';
  }
  if (node.type === 'style') return `${pad}<style dangerouslySetInnerHTML={{ __html: ${js(node.children.map(c => c.data).join(''))} }} />\n`;
  if (node.type !== 'tag') return '';
  const { str, link } = attrs(node, file);
  const tag = link ? 'Link' : node.name;
  if (node.name === 'textarea') {
    const v = node.children.map(c => c.data).join('');
    return `${pad}<textarea${str}${v ? ` defaultValue=${js(v)}` : ''} />\n`;
  }
  if (VOID.has(node.name) || !node.children.length) return `${pad}<${tag}${str} />\n`;
  const noWs = NO_WS.has(node.name) || (parentNoWs && false);
  const kids = node.children.map(c => jsx(c, file, depth + 1, noWs)).join('');
  if (!kids) return `${pad}<${tag}${str} />\n`;
  return `${pad}<${tag}${str}>\n${kids}${pad}</${tag}>\n`;
}


// ---------- Structured data generated from the visible page content ----------
const strip = h => decode(h.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const PAGE_NAMES = { about: 'About Us', blog: 'Blog', contact: 'Contact Us', disclaimer: 'Disclaimer', gallery: 'Free SVG Gallery', 'privacy-policy': 'Privacy Policy', terms: 'Terms of Use', 'bulk-svg-to-png-converter': 'Bulk SVG to PNG Converter' };
const FEATURES = ['Automatic image tracing', 'Automatic image type detection', 'Smart colour palette detection (1–32 colours)', 'Adjustable detail, smoothing, speckle removal and corner angle', 'Recolour or remove any colour', 'Keeps transparent backgrounds', 'Side-by-side comparison with zoom', 'Registration marks for layered cutting', 'Download SVG or copy SVG code', 'Runs entirely in the browser — no upload', 'No signup, no watermark, no limits'];
function schemaFor(slug, html, content, title, desc, url) {
  const graph = [];
  const h1 = strip((content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || title);
  if (slug === 'index' || LANDING.has(slug) || slug === 'bulk-svg-to-png-converter') {
    graph.push({ '@type': 'WebApplication', name: slug === 'index' ? BRAND : h1, url, description: desc,
      applicationCategory: 'MultimediaApplication', operatingSystem: 'Any (runs in a web browser)', browserRequirements: 'Requires JavaScript and a modern browser',
      isAccessibleForFree: true, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: slug === 'bulk-svg-to-png-converter' ? ['Convert many SVG files to PNG at once', '1×, 2×, 4× or exact width output', 'Transparent or white background', 'Download individually or as a ZIP', 'Runs entirely in the browser'] : FEATURES,
      publisher: { '@id': SITE + '/#organization' } });
  }
  const faq = content.match(/<div class="faq">([\s\S]*?)<\/div>/);
  if (faq) {
    const qs = [...faq[1].matchAll(/<details><summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g)];
    if (qs.length) graph.push({ '@type': 'FAQPage', mainEntity: qs.map(m => ({ '@type': 'Question', name: strip(m[1]), acceptedAnswer: { '@type': 'Answer', text: strip(m[2]) } })) });
  }
  const how = content.match(/<ol class="[^"]*\bhowto\b[^"]*">([\s\S]*?)<\/ol>/);
  if (how) {
    const sec = content.slice(0, content.indexOf(how[0]));
    const name = strip([...sec.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].pop()?.[1] || 'How to convert an image to SVG');
    const steps = [...how[1].matchAll(/<li[^>]*>[\s\S]*?<b>([\s\S]*?)<\/b>\s*<p>([\s\S]*?)<\/p>[\s\S]*?<\/li>/g)];
    graph.push({ '@type': 'HowTo', name, totalTime: 'PT1M', tool: [{ '@type': 'HowToTool', name: 'A web browser' }],
      supply: [{ '@type': 'HowToSupply', name: 'An image file (PNG, JPG, WEBP, GIF, BMP or AVIF)' }],
      step: steps.map((m, i) => ({ '@type': 'HowToStep', position: i + 1, name: strip(m[1]), text: strip(m[2]), url: url + '#how' })) });
  }
  if (slug !== 'index' && !slug.startsWith('blog-')) {
    graph.push({ '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' },
      { '@type': 'ListItem', position: 2, name: PAGE_NAMES[slug] || title.split(' | ')[0], item: url } ] });
  }
  return graph.length ? { '@context': 'https://schema.org', '@graph': graph } : null;
}

function meta(html, re) { const m = html.match(re); return m ? m[1] : null; }
const decode = s => s && parseDocument(s).children.map(c => c.data).join('');

const routes = [];
const pages = [];
const SITE = 'https://pngtosvgfree.com';
const BRAND = 'PNG to SVG Free';
const SITE_UPDATED = new Date().toISOString().slice(0, 10);
const OG_IMAGE = { url: SITE + '/og-image.png', width: 1200, height: 630, alt: 'PNG to SVG Free — free online PNG to SVG converter' };
// Tool landing pages that embed the converter.
const LANDING = new Set(['jpg-to-svg', 'jpeg-to-svg', 'webp-to-svg', 'image-to-svg', 'logo-to-svg', 'png-to-svg-cricut', 'png-to-svg-laser-cutting', 'transparent-png-to-svg', 'black-and-white-png-to-svg']);
for (const file of PAGES) {
  const html = fs.readFileSync(path.join(SRC, file), 'utf8');
  const slug = file.replace(/\.html$/, '');
  const title = decode(meta(html, /<title>([\s\S]*?)<\/title>/));
  const desc = decode(meta(html, /<meta name="description" content="([^"]*)"/));
  const canon = meta(html, /<link rel="canonical" href="([^"]*)"/);
  const ogType = meta(html, /<meta property="og:type" content="([^"]*)"/) || 'website';
  const css = meta(html, /<style>([\s\S]*?)<\/style>/) || '';
  const start = html.indexOf('</nav>') + 6;
  const end = html.indexOf('<footer class="site">');
  let content = html.slice(start, end);
  const after = html.slice(end);
  if (/<div class="toast" id="toast"><\/div>/.test(after)) content += '<div class="toast" id="toast"></div>';

  content = content.replace(/<table>\s*(<tr>[\s\S]*?)<\/table>/g, "<table><tbody>$1</tbody></table>");
  const doc = parseDocument(content, { decodeEntities: true });
  const body = doc.children.map(c => jsx(c, file, 3, false)).join('');
  const route0 = slug === 'index' ? '/' : '/' + slug;
  const schema = slug === '404' ? null : schemaFor(slug, html, content, decode(meta(html, /<title>([\s\S]*?)<\/title>/)), decode(meta(html, /<meta name="description" content="([^"]*)"/)), SITE + route0);
  const schemaJsx = schema ? `      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ${js(JSON.stringify(schema))} }} />\n` : '';
  const pageCss = css.trim() === SHARED.trim() ? '' : css.replace(/'Inter'/g, 'var(--font-inter)');
  const script = SCRIPTED[file] || (LANDING.has(slug) ? 'home' : null);

  const imports = [];
  if (body.includes('<Link')) imports.push(`import Link from "next/link";`);
  if (script) imports.push(`import PageScript from "@/components/PageScript";`);
  // Clean, self-referencing canonical URL (e.g. /about instead of /about.html).
  const route = slug === 'index' ? '/' : '/' + slug;
  const url = SITE + route;
  const published = meta(html, /"datePublished":\s*"([^"]+)"/);
  const md = {
    title: { absolute: title },
    description: desc,
    alternates: slug === '404' ? undefined : { canonical: url },
    openGraph: { title, description: desc, type: ogType, url, siteName: BRAND, locale: 'en_US', images: [OG_IMAGE] },
    twitter: { card: 'summary_large_image', title, description: desc, images: [OG_IMAGE.url] },
    ...(slug === '404' && { robots: { index: false, follow: true } }),
  };
  if (slug !== '404') {
    const d = published && /^\d{4}-\d{2}-\d{2}$/.test(published) ? published : SITE_UPDATED;
    pages.push({ route, lastmod: d, priority: slug === 'index' ? 1 : LANDING.has(slug) ? 0.9 : slug.startsWith('blog') ? 0.7 : 0.5 });
  }
  if (title.length > 60) warn.push(`${file}: title is ${title.length} chars (max 60)`);
  if (desc && (desc.length < 140 || desc.length > 155)) warn.push(`${file}: description is ${desc.length} chars (want 140-155)`);

  const fn = slug === '404' ? 'NotFound' : 'Page';
  const src = `${imports.join('\n')}${imports.length ? '\n\n' : ''}export const metadata = ${JSON.stringify(md, null, 2)};

export default function ${fn}() {
  return (
    <>
${pageCss ? `      <style dangerouslySetInnerHTML={{ __html: ${js(pageCss)} }} />\n` : ''}${schemaJsx}${body}${script ? `      <PageScript name=${js(script)} />\n` : ''}    </>
  );
}
`;
  const dest = slug === 'index' ? 'app/page.jsx' : slug === '404' ? 'app/not-found.jsx' : `app/${slug}/page.jsx`;
  fs.mkdirSync(path.dirname(path.join(OUT, dest)), { recursive: true });
  fs.writeFileSync(path.join(OUT, dest), src);
  routes.push(dest);
}
fs.writeFileSync(path.join(OUT, 'app/globals.css'), SHARED.replace(/'Inter'/g, 'var(--font-inter)'));
fs.writeFileSync(path.join(OUT, 'lib/pages.json'), JSON.stringify(pages.sort((a, b) => b.priority - a.priority || a.route.localeCompare(b.route)), null, 1));

// Post-fixes: not-found.jsx cannot export metadata; root-relative logo in the homepage diagram.
const nf = path.join(OUT, 'app/not-found.jsx');
fs.writeFileSync(nf, fs.readFileSync(nf, 'utf8')
  .replace(/export const metadata = \{[\s\S]*?\n\};\n\n/, '')
  .replace('<>\n', '<>\n      <title>Page not found | PNG TO SVG</title>\n'));
const home = path.join(OUT, 'app/page.jsx');
fs.writeFileSync(home, fs.readFileSync(home, 'utf8').replace('<image href="logo.svg"', '<image href="/logo.svg"'));
for (const f of ['robots.txt', 'ads.txt', 'logo.svg', 'llms.txt']) fs.copyFileSync(path.join(SRC, f), path.join(OUT, 'public', f));
console.log(routes.join('\n'));
console.log(warn.length ? 'WARN:\n' + [...new Set(warn)].join('\n') : 'no warnings');
