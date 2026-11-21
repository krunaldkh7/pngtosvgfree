# PNG TO SVG — React (Next.js)

React version of the PNG TO SVG site, built with Next.js and exported as static HTML.

```bash
npm install
npm run dev     # local dev server at http://localhost:3000
npm run build   # static site in out/ (deploy this folder, e.g. GitHub Pages)
```

- `app/` — one folder per page (`app/page.jsx` is the homepage), with SEO metadata per page.
- `components/` — shared Nav, Footer, Logo, cookie banner, scroll reveal.
- `lib/scripts/` — interactive page logic (PNG→SVG converter with WASM tracer, bulk SVG→PNG, gallery, contact form).
- `public/` — logo, ads.txt, robots.txt, sitemap.xml, CNAME.
