import Link from "next/link";

export const metadata = {
  "title": "SVG Gradients, Patterns and Filters: A Practical Introduction | PNG TO SVG",
  "description": "SVG can do much more than flat colours. Learn how linear and radial gradients, patterns, drop shadows and blur filters work — with examples you can copy.",
  "alternates": {
    "canonical": "https://pngtosvgfree.com/blog-svg-gradients-and-filters.html"
  },
  "openGraph": {
    "title": "SVG Gradients, Patterns and Filters: A Practical Introduction | PNG TO SVG",
    "description": "SVG can do much more than flat colours. Learn how linear and radial gradients, patterns, drop shadows and blur filters work — with examples you can copy.",
    "type": "article"
  }
};

export default function Page() {
  return (
    <>
      {" "}
      <div className="wrap" style={{ "paddingTop": "44px" }}>
        {" "}
        <article className="prose">
          {" "}
          <div className="crumbs">
            <Link href="/">
              {"Home"}
            </Link>
            {" / "}
            <Link href="/blog">
              {"Blog"}
            </Link>
            {" / Technology"}
          </div>
          {" "}
          <div className="cover" style={{ "background": "linear-gradient(135deg,#0f1020,#4c4f6b)", "color": "#fff" }}>
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="13.5" cy="6.5" r="1.5" />
              <circle cx="17.5" cy="10.5" r="1.5" />
              <circle cx="8.5" cy="7.5" r="1.5" />
              <circle cx="6.5" cy="12.5" r="1.5" />
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
            </svg>
          </div>
          {" "}
          <div className="meta">
            <span>
              {"Technology"}
            </span>
            <span>
              {"November 21, 2026"}
            </span>
            <span>
              {"3 min read"}
            </span>
            <span>
              {"By the PNG TO SVG team"}
            </span>
          </div>
          {" "}
          <h1 style={{ "fontSize": "clamp(28px,4vw,40px)", "letterSpacing": "-.03em", "lineHeight": "1.15", "marginTop": "6px" }}>
            {"SVG Gradients, Patterns and Filters: A Practical Introduction"}
          </h1>
          {" "}
          <p>
            {"Flat colours are the backbone of SVG, but the format also supports gradients, repeating patterns and image filters such as blur and drop shadow. Used carefully, they add depth and polish while keeping files small and scalable."}
          </p>
          {" "}
          <h2>
            {"Where these features live: <defs>"}
          </h2>
          {" "}
          <p>
            {"Gradients, patterns and filters are defined once inside a "}
            <code>
              {"<defs>"}
            </code>
            {" element, given an ID, and then referenced by shapes using "}
            <code>
              {"url(#id)"}
            </code>
            {". Nothing inside "}
            <code>
              {"<defs>"}
            </code>
            {" is drawn directly."}
          </p>
          {" "}
          <h2>
            {"Linear gradients"}
          </h2>
          {" "}
          <pre>
            <code>
              {"<svg viewBox=\"0 0 200 100\"> <defs> <linearGradient id=\"brand\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"> <stop offset=\"0\" stop-color=\"#3d4ef5\"/> <stop offset=\"1\" stop-color=\"#8b5cf6\"/> </linearGradient> </defs> <rect width=\"200\" height=\"100\" rx=\"16\" fill=\"url(#brand)\"/> </svg>"}
            </code>
          </pre>
          {" "}
          <ul>
            {" "}
            <li>
              <code>
                {"x1, y1, x2, y2"}
              </code>
              {" set the direction. 0 0 → 1 1 is diagonal from top-left to bottom-right; 0 0 → 1 0 is left to right."}
            </li>
            {" "}
            <li>
              {"Each "}
              <code>
                {"<stop>"}
              </code>
              {" sets a colour at a position from 0 to 1. Add more stops for multi-colour gradients."}
            </li>
            {" "}
            <li>
              <code>
                {"stop-opacity"}
              </code>
              {" fades a colour to transparent."}
            </li>
            {" "}
          </ul>
          {" "}
          <h2>
            {"Radial gradients"}
          </h2>
          {" "}
          <pre>
            <code>
              {"<radialGradient id=\"glow\" cx=\"0.5\" cy=\"0.5\" r=\"0.5\"> <stop offset=\"0\" stop-color=\"#fff\" stop-opacity=\"0.9\"/> <stop offset=\"1\" stop-color=\"#fff\" stop-opacity=\"0\"/> </radialGradient>"}
            </code>
          </pre>
          {" "}
          <p>
            {"Radial gradients radiate from a centre point — great for glows, highlights and spherical shading. "}
            <code>
              {"fx"}
            </code>
            {" and "}
            <code>
              {"fy"}
            </code>
            {" move the focal point for an off-centre highlight."}
          </p>
          {" "}
          <h2>
            {"Patterns"}
          </h2>
          {" "}
          <pre>
            <code>
              {"<pattern id=\"dots\" width=\"10\" height=\"10\" patternUnits=\"userSpaceOnUse\"> <circle cx=\"5\" cy=\"5\" r=\"1.5\" fill=\"#8b5cf6\"/> </pattern> <rect width=\"200\" height=\"100\" fill=\"url(#dots)\"/>"}
            </code>
          </pre>
          {" "}
          <p>
            {"A pattern defines a tile that repeats to fill a shape: dots, stripes, grids or tiny illustrations. Patterns stay crisp at any zoom, unlike repeating image textures."}
          </p>
          {" "}
          <h2>
            {"Filters"}
          </h2>
          {" "}
          <p>
            {"Filters apply pixel-based effects to vector shapes. They are powerful but can be slow on large areas and are not supported by every tool that reads SVG."}
          </p>
          {" "}
          <h3>
            {"Blur"}
          </h3>
          {" "}
          <pre>
            <code>
              {"<filter id=\"soft\"><feGaussianBlur stdDeviation=\"4\"/></filter> <circle cx=\"50\" cy=\"50\" r=\"30\" fill=\"#ec4899\" filter=\"url(#soft)\"/>"}
            </code>
          </pre>
          {" "}
          <h3>
            {"Drop shadow"}
          </h3>
          {" "}
          <pre>
            <code>
              {"<filter id=\"shadow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\"> <feDropShadow dx=\"0\" dy=\"4\" stdDeviation=\"4\" flood-color=\"#000\" flood-opacity=\"0.25\"/> </filter>"}
            </code>
          </pre>
          {" "}
          <p>
            {"The "}
            <code>
              {"x, y, width, height"}
            </code>
            {" attributes enlarge the filter region so the shadow is not clipped."}
          </p>
          {" "}
          <h2>
            {"Compatibility considerations"}
          </h2>
          {" "}
          <ul>
            {" "}
            <li>
              <strong>
                {"Browsers"}
              </strong>
              {" support gradients, patterns and common filters well."}
            </li>
            {" "}
            <li>
              <strong>
                {"Cutting machines and laser software"}
              </strong>
              {" ignore gradients and filters — they only use shape outlines. Remove effects from cutting files."}
            </li>
            {" "}
            <li>
              <strong>
                {"Canva, Office and some apps"}
              </strong>
              {" may simplify or drop filters and complex gradients."}
            </li>
            {" "}
            <li>
              <strong>
                {"Print:"}
              </strong>
              {" filters are rasterised at export; set a high resolution when exporting PDFs."}
            </li>
            {" "}
          </ul>
          {" "}
          <h2>
            {"Gradients and traced images"}
          </h2>
          {" "}
          <p>
            {"When you trace a PNG with our "}
            <Link href="/">
              {"PNG to SVG converter"}
            </Link>
            {", gradients in the original become bands of flat colour, because tracing produces solid regions. If you want a smooth gradient in the final SVG:"}
          </p>
          {" "}
          <ol>
            {" "}
            <li>
              {"Trace with enough colours to capture the shape."}
            </li>
            {" "}
            <li>
              {"Open the SVG in a vector editor."}
            </li>
            {" "}
            <li>
              {"Merge the banded shapes into one."}
            </li>
            {" "}
            <li>
              {"Apply a real linear or radial gradient fill."}
            </li>
            {" "}
          </ol>
          {" "}
          <p>
            {"The result is smoother and smaller than dozens of colour bands. See "}
            <Link href="/blog-how-many-colors-for-tracing">
              {"How Many Colours Should You Use When Tracing?"}
            </Link>
          </p>
          {" "}
          <h2>
            {"Performance tips"}
          </h2>
          {" "}
          <ul>
            {" "}
            <li>
              {"Prefer gradients over filters where possible; they are cheap to render."}
            </li>
            {" "}
            <li>
              {"Keep blur radii and filter regions small."}
            </li>
            {" "}
            <li>
              {"Avoid animating filters on large elements."}
            </li>
            {" "}
            <li>
              {"Reuse definitions — one gradient can fill many shapes."}
            </li>
            {" "}
          </ul>
          {" "}
          <h2>
            {"Summary"}
          </h2>
          {" "}
          <p>
            {"Define gradients, patterns and filters in "}
            <code>
              {"<defs>"}
            </code>
            {" and reference them by ID. Linear and radial gradients add depth cheaply, patterns create crisp textures, and filters provide blur and shadows at a performance cost. Remove effects from cutting files and check compatibility with the apps your SVG will be used in."}
          </p>
          {" "}
          <div className="inline-cta">
            <p>
              {"Ready to try it? Convert your image to SVG for free."}
            </p>
            <Link href="/#tool">
              {"Open the converter"}
            </Link>
          </div>
          {" "}
        </article>
        {" "}
        <h2 style={{ "textAlign": "center", "fontSize": "28px", "letterSpacing": "-.03em", "margin": "80px 0 26px" }}>
          {"Keep reading"}
        </h2>
        {" "}
        <div className="posts">
          <Link className="post" href="/blog-svg-path-commands">
            <div className="th" style={{ "background": "linear-gradient(135deg,#0f1020,#4c4f6b)" }}>
              <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
              </svg>
            </div>
            {" "}
            <div className="bd">
              <small>
                {"Technology"}
              </small>
              <b>
                {"SVG Path Commands: A Beginner's Guide to the d Attribute"}
              </b>
              <p>
                {"M, L, C, Q, A, Z — learn what the letters in an SVG path mean, how curves work, and how to read and tweak path data by hand."}
              </p>
              <span>
                {"November 21, 2026 · 4 min read"}
              </span>
            </div>
          </Link>
          <Link className="post" href="/blog-svg-security">
            <div className="th" style={{ "background": "linear-gradient(135deg,#0f1020,#4c4f6b)" }}>
              <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            {" "}
            <div className="bd">
              <small>
                {"Technology"}
              </small>
              <b>
                {"Is SVG Safe? Security Risks Explained"}
              </b>
              <p>
                {"SVG files can contain scripts and external references. Learn the real risks, when they matter, and how to handle SVG uploads and downloads safely."}
              </p>
              <span>
                {"November 21, 2026 · 3 min read"}
              </span>
            </div>
          </Link>
          <Link className="post" href="/blog-svg-viewbox-explained">
            <div className="th" style={{ "background": "linear-gradient(135deg,#0f1020,#4c4f6b)" }}>
              <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 18l6-6-6-6" />
                <path d="M8 6l-6 6 6 6" />
              </svg>
            </div>
            {" "}
            <div className="bd">
              <small>
                {"Technology"}
              </small>
              <b>
                {"The SVG viewBox Explained (With Simple Examples)"}
              </b>
              <p>
                {"The viewBox attribute is the key to how SVGs scale, crop and zoom. A clear, visual explanation of its four numbers and how they relate to width and height."}
              </p>
              <span>
                {"November 21, 2026 · 3 min read"}
              </span>
            </div>
          </Link>
        </div>
        {" "}
      </div>
      {" "}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BlogPosting\",\"headline\":\"SVG Gradients, Patterns and Filters: A Practical Introduction\",\"datePublished\":\"2026-11-21\",\"author\":{\"@type\":\"Organization\",\"name\":\"PNG TO SVG\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"PNG TO SVG\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://pngtosvgfree.com/logo.svg\"}},\"mainEntityOfPage\":\"https://pngtosvgfree.com/blog-svg-gradients-and-filters.html\",\"description\":\"SVG can do much more than flat colours. Learn how linear and radial gradients, patterns, drop shadows and blur filters work — with examples you can copy.\"}" }} />
      {" "}
    </>
  );
}
