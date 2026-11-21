import Link from "next/link";

export const metadata = {
  "title": "Styling SVG with CSS: Colours, Hover Effects and Themes | PNG TO SVG",
  "description": "Change SVG colours, strokes and sizes with CSS. Learn fill, stroke, currentColor, CSS variables and dark-mode techniques for icons and illustrations.",
  "alternates": {
    "canonical": "https://pngtosvgfree.com/blog-style-svg-with-css.html"
  },
  "openGraph": {
    "title": "Styling SVG with CSS: Colours, Hover Effects and Themes | PNG TO SVG",
    "description": "Change SVG colours, strokes and sizes with CSS. Learn fill, stroke, currentColor, CSS variables and dark-mode techniques for icons and illustrations.",
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
            {" / Web design"}
          </div>
          {" "}
          <div className="cover" style={{ "background": "linear-gradient(135deg,#8b5cf6,#ec4899)", "color": "#fff" }}>
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
              {"Web design"}
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
            {"Styling SVG with CSS: Colours, Hover Effects and Themes"}
          </h1>
          {" "}
          <p>
            {"One of the best things about SVG on the web is that it can be styled with the same CSS you use for the rest of your page. You can recolour icons on hover, adapt illustrations to dark mode and keep brand colours consistent from a single stylesheet. This guide covers the essentials."}
          </p>
          {" "}
          <h2>
            {"First: the SVG must be inline (or a sprite)"}
          </h2>
          {" "}
          <p>
            {"CSS from your page can only reach SVG elements that are part of the page's DOM. That means inline "}
            <code>
              {"<svg>"}
            </code>
            {" code or "}
            <code>
              {"<use>"}
            </code>
            {" references to symbols. An SVG loaded with "}
            <code>
              {"<img>"}
            </code>
            {" or as a CSS background is treated as a separate image and cannot be restyled from outside. See "}
            <Link href="/blog-ways-to-use-svg-in-html">
              {"5 Ways to Add SVG to a Web Page"}
            </Link>
            {" for the trade-offs."}
          </p>
          {" "}
          <h2>
            {"The key properties"}
          </h2>
          {" "}
          <p>
            {"SVG shapes use their own set of CSS properties:"}
          </p>
          {" "}
          <ul>
            {" "}
            <li>
              <code>
                {"fill"}
              </code>
              {" — the colour inside a shape"}
            </li>
            {" "}
            <li>
              <code>
                {"stroke"}
              </code>
              {" — the colour of a shape's outline"}
            </li>
            {" "}
            <li>
              <code>
                {"stroke-width"}
              </code>
              {" — outline thickness"}
            </li>
            {" "}
            <li>
              <code>
                {"stroke-linecap"}
              </code>
              {" and "}
              <code>
                {"stroke-linejoin"}
              </code>
              {" — the shape of line ends and corners"}
            </li>
            {" "}
            <li>
              <code>
                {"opacity"}
              </code>
              {", "}
              <code>
                {"fill-opacity"}
              </code>
              {" and "}
              <code>
                {"stroke-opacity"}
              </code>
            </li>
            {" "}
          </ul>
          {" "}
          <pre>
            <code>
              {".icon path { fill: #3d4ef5; } .icon:hover path { fill: #8b5cf6; }"}
            </code>
          </pre>
          {" "}
          <h2>
            {"Presentation attributes vs CSS"}
          </h2>
          {" "}
          <p>
            {"SVG files often contain attributes such as "}
            <code>
              {"fill=\"#000\""}
            </code>
            {" directly on elements. These \"presentation attributes\" have the lowest priority, so any CSS rule targeting the element overrides them. Inline "}
            <code>
              {"style=\"fill:#000\""}
            </code>
            {" attributes, however, have high priority and will beat your stylesheet unless you use "}
            <code>
              {"!important"}
            </code>
            {". When preparing SVGs for styling, removing inline styles makes life much easier."}
          </p>
          {" "}
          <h2>
            {"currentColor: the most useful trick"}
          </h2>
          {" "}
          <p>
            {"Set "}
            <code>
              {"fill=\"currentColor\""}
            </code>
            {" (or "}
            <code>
              {"stroke=\"currentColor\""}
            </code>
            {") in the SVG, and the shape will use the CSS "}
            <code>
              {"color"}
            </code>
            {" of its parent element:"}
          </p>
          {" "}
          <pre>
            <code>
              {"<button class=\"btn\"> <svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\"><path fill=\"currentColor\" d=\"...\"/></svg> Download </button> .btn { color: #3d4ef5; } .btn:hover { color: #fff; background: #3d4ef5; }"}
            </code>
          </pre>
          {" "}
          <p>
            {"The icon now changes colour together with the text, with no extra rules."}
          </p>
          {" "}
          <h2>
            {"Multi-colour icons with CSS variables"}
          </h2>
          {" "}
          <p>
            {"For icons with more than one colour, use custom properties:"}
          </p>
          {" "}
          <pre>
            <code>
              {"<svg class=\"duo\" viewBox=\"0 0 24 24\"> <circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"var(--bg, #e3e7ff)\"/> <path d=\"...\" fill=\"var(--fg, #3d4ef5)\"/> </svg> .card:hover .duo { --bg: #3d4ef5; --fg: #fff; }"}
            </code>
          </pre>
          {" "}
          <p>
            {"The values after the comma are fallbacks, so the icon still looks right if the variables are not set."}
          </p>
          {" "}
          <h2>
            {"Dark mode"}
          </h2>
          {" "}
          <p>
            {"Combine variables with the "}
            <code>
              {"prefers-color-scheme"}
            </code>
            {" media query:"}
          </p>
          {" "}
          <pre>
            <code>
              {":root { --ink: #0f1020; --paper: #ffffff; } @media (prefers-color-scheme: dark) { :root { --ink: #f3f4fb; --paper: #0f1020; } } .illustration .line { stroke: var(--ink); } .illustration .bg { fill: var(--paper); }"}
            </code>
          </pre>
          {" "}
          <p>
            {"A single inline illustration now adapts to the user's system theme."}
          </p>
          {" "}
          <h2>
            {"Sizing"}
          </h2>
          {" "}
          <p>
            {"An SVG with a "}
            <code>
              {"viewBox"}
            </code>
            {" scales to whatever width and height you give it with CSS. To make an icon match the surrounding text size, use em units:"}
          </p>
          {" "}
          <pre>
            <code>
              {".inline-icon { width: 1em; height: 1em; vertical-align: -0.125em; }"}
            </code>
          </pre>
          {" "}
          <p>
            {"Learn more about how scaling works in "}
            <Link href="/blog-svg-viewbox-explained">
              {"The SVG viewBox Explained"}
            </Link>
            {"."}
          </p>
          {" "}
          <h2>
            {"Strokes that do not scale"}
          </h2>
          {" "}
          <p>
            {"When you scale an SVG, stroke widths scale too. For diagrams or line icons that should keep a constant line thickness at any size, add "}
            <code>
              {"vector-effect: non-scaling-stroke"}
            </code>
            {" to the shapes."}
          </p>
          {" "}
          <h2>
            {"Transitions and hover effects"}
          </h2>
          {" "}
          <p>
            {"Most SVG properties can be animated with CSS transitions:"}
          </p>
          {" "}
          <pre>
            <code>
              {".icon path { transition: fill .2s ease, transform .2s ease; transform-origin: center; transform-box: fill-box; } .icon:hover path { fill: #ec4899; transform: scale(1.1); }"}
            </code>
          </pre>
          {" "}
          <p>
            {"The "}
            <code>
              {"transform-box: fill-box"}
            </code>
            {" line makes transforms use the shape's own bounding box, which is usually what you want."}
          </p>
          {" "}
          <h2>
            {"Preparing traced SVGs for styling"}
          </h2>
          {" "}
          <p>
            {"SVGs created with our "}
            <Link href="/">
              {"PNG to SVG converter"}
            </Link>
            {" use plain fill attributes, so they are easy to restyle. Open the file, give the paths you want to control a class (for example "}
            <code>
              {"class=\"brand\""}
            </code>
            {"), and target that class in your CSS."}
          </p>
          {" "}
          <h2>
            {"Summary"}
          </h2>
          {" "}
          <p>
            {"Inline your SVG, use "}
            <code>
              {"fill"}
            </code>
            {" and "}
            <code>
              {"stroke"}
            </code>
            {", rely on "}
            <code>
              {"currentColor"}
            </code>
            {" for single-colour icons and CSS variables for multi-colour ones, and remove inline styles that block your stylesheet. With those basics you can theme an entire icon set from a few lines of CSS."}
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
          <Link className="post" href="/blog-accessible-svg">
            <div className="th" style={{ "background": "linear-gradient(135deg,#8b5cf6,#ec4899)" }}>
              <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            {" "}
            <div className="bd">
              <small>
                {"Web design"}
              </small>
              <b>
                {"How to Make SVG Graphics Accessible"}
              </b>
              <p>
                {"Screen readers handle SVG in different ways depending on how it is embedded. Learn how to label meaningful SVGs, hide decorative ones and ensure good contrast."}
              </p>
              <span>
                {"November 21, 2026 · 3 min read"}
              </span>
            </div>
          </Link>
          <Link className="post" href="/blog-optimize-svg-file-size">
            <div className="th" style={{ "background": "linear-gradient(135deg,#8b5cf6,#ec4899)" }}>
              <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 14l4-4" />
                <path d="M3.34 19a10 10 0 1117.32 0" />
              </svg>
            </div>
            {" "}
            <div className="bd">
              <small>
                {"Web design"}
              </small>
              <b>
                {"How to Reduce SVG File Size: 9 Practical Techniques"}
              </b>
              <p>
                {"Large SVG files slow down websites and apps. Learn practical ways to shrink SVGs — from smarter tracing settings to removing editor metadata."}
              </p>
              <span>
                {"November 21, 2026 · 3 min read"}
              </span>
            </div>
          </Link>
          <Link className="post" href="/blog-responsive-svg">
            <div className="th" style={{ "background": "linear-gradient(135deg,#8b5cf6,#ec4899)" }}>
              <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="9" r="5" />
                <path d="M14 21l4-8 4 8z" />
                <rect x="2" y="15" width="6" height="6" rx="1" />
              </svg>
            </div>
            {" "}
            <div className="bd">
              <small>
                {"Web design"}
              </small>
              <b>
                {"Responsive SVG: Making Vector Graphics Fit Any Screen"}
              </b>
              <p>
                {"Learn how to make SVGs scale smoothly across phones, tablets and desktops using viewBox, CSS sizing, preserveAspectRatio and media queries."}
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BlogPosting\",\"headline\":\"Styling SVG with CSS: Colours, Hover Effects and Themes\",\"datePublished\":\"2026-11-21\",\"author\":{\"@type\":\"Organization\",\"name\":\"PNG TO SVG\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"PNG TO SVG\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://pngtosvgfree.com/logo.svg\"}},\"mainEntityOfPage\":\"https://pngtosvgfree.com/blog-style-svg-with-css.html\",\"description\":\"Change SVG colours, strokes and sizes with CSS. Learn fill, stroke, currentColor, CSS variables and dark-mode techniques for icons and illustrations.\"}" }} />
      {" "}
    </>
  );
}
