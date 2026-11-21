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

function meta(html, re) { const m = html.match(re); return m ? m[1] : null; }
const decode = s => s && parseDocument(s).children.map(c => c.data).join('');

const routes = [];
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
  const pageCss = css.trim() === SHARED.trim() ? '' : css;
  const script = SCRIPTED[file];

  const imports = [];
  if (body.includes('<Link')) imports.push(`import Link from "next/link";`);
  if (script) imports.push(`import PageScript from "@/components/PageScript";`);
  const md = { title, description: desc, alternates: canon ? { canonical: canon.replace(/\/index\.html$/, '/') } : undefined, openGraph: { title, description: desc, type: ogType } };

  const fn = slug === '404' ? 'NotFound' : 'Page';
  const src = `${imports.join('\n')}${imports.length ? '\n\n' : ''}export const metadata = ${JSON.stringify(md, null, 2)};

export default function ${fn}() {
  return (
    <>
${pageCss ? `      <style dangerouslySetInnerHTML={{ __html: ${js(pageCss)} }} />\n` : ''}${body}${script ? `      <PageScript name=${js(script)} />\n` : ''}    </>
  );
}
`;
  const dest = slug === 'index' ? 'app/page.jsx' : slug === '404' ? 'app/not-found.jsx' : `app/${slug}/page.jsx`;
  fs.mkdirSync(path.dirname(path.join(OUT, dest)), { recursive: true });
  fs.writeFileSync(path.join(OUT, dest), src);
  routes.push(dest);
}
fs.writeFileSync(path.join(OUT, 'app/globals.css'), SHARED);

// Post-fixes: not-found.jsx cannot export metadata; root-relative logo in the homepage diagram.
const nf = path.join(OUT, 'app/not-found.jsx');
fs.writeFileSync(nf, fs.readFileSync(nf, 'utf8')
  .replace(/export const metadata = \{[\s\S]*?\n\};\n\n/, '')
  .replace('<>\n', '<>\n      <title>Page not found | PNG TO SVG</title>\n'));
const home = path.join(OUT, 'app/page.jsx');
fs.writeFileSync(home, fs.readFileSync(home, 'utf8').replace('<image href="logo.svg"', '<image href="/logo.svg"'));
for (const f of ['sitemap.xml', 'robots.txt', 'ads.txt', 'logo.svg']) fs.copyFileSync(path.join(SRC, f), path.join(OUT, 'public', f));
console.log(routes.join('\n'));
console.log(warn.length ? 'WARN:\n' + [...new Set(warn)].join('\n') : 'no warnings');
