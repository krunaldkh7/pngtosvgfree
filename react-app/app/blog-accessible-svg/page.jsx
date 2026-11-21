import Link from "next/link";

export const metadata = {
  "title": "How to Make SVG Graphics Accessible | PNG TO SVG",
  "description": "Screen readers handle SVG in different ways depending on how it is embedded. Learn how to label meaningful SVGs, hide decorative ones and ensure good contrast.",
  "alternates": {
    "canonical": "https://pngtosvgfree.com/blog-accessible-svg.html"
  },
  "openGraph": {
    "title": "How to Make SVG Graphics Accessible | PNG TO SVG",
    "description": "Screen readers handle SVG in different ways depending on how it is embedded. Learn how to label meaningful SVGs, hide decorative ones and ensure good contrast.",
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
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
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
            {"How to Make SVG Graphics Accessible"}
          </h1>
          {" "}
          <p>
            {"SVGs are everywhere in modern interfaces — logos, icons, charts and illustrations. For people who use screen readers, voice control or high-contrast modes, poorly marked-up SVGs can be silent, confusing or invisible. The good news is that making SVG accessible takes only a few attributes."}
          </p>
          {" "}
          <h2>
            {"Step 1: Decide whether the graphic is meaningful or decorative"}
          </h2>
          {" "}
          <p>
            {"Ask: if this image disappeared, would a user miss any information?"}
          </p>
          {" "}
          <ul>
            {" "}
            <li>
              <strong>
                {"Meaningful"}
              </strong>
              {" — conveys information or performs an action: a logo linking home, a chart, an icon-only button, a diagram."}
            </li>
            {" "}
            <li>
              <strong>
                {"Decorative"}
              </strong>
              {" — purely visual: background shapes, ornaments, an icon that sits next to text which already says the same thing."}
            </li>
            {" "}
          </ul>
          {" "}
          <p>
            {"Meaningful graphics need a text alternative. Decorative graphics should be hidden from assistive technology so they do not add noise."}
          </p>
          {" "}
          <h2>
            {"SVG in an <img> tag"}
          </h2>
          {" "}
          <p>
            {"Treat it like any other image:"}
          </p>
          {" "}
          <pre>
            <code>
              {"<img src=\"logo.svg\" alt=\"PNG TO SVG home\"> <!-- meaningful --> <img src=\"swirl.svg\" alt=\"\"> <!-- decorative -->"}
            </code>
          </pre>
          {" "}
          <p>
            {"Some older screen reader and browser combinations did not announce SVG images correctly; adding "}
            <code>
              {"role=\"img\""}
            </code>
            {" to the "}
            <code>
              {"<img>"}
            </code>
            {" element is a harmless safeguard."}
          </p>
          {" "}
          <h2>
            {"Inline SVG: meaningful"}
          </h2>
          {" "}
          <pre>
            <code>
              {"<svg role=\"img\" aria-labelledby=\"chart-title chart-desc\" viewBox=\"0 0 400 200\"> <title id=\"chart-title\">Monthly conversions</title> <desc id=\"chart-desc\">Conversions rose from 1,200 in January to 3,400 in June.</desc> ... </svg>"}
            </code>
          </pre>
          {" "}
          <ul>
            {" "}
            <li>
              <code>
                {"role=\"img\""}
              </code>
              {" tells assistive technology to treat the SVG as a single image rather than a group of shapes."}
            </li>
            {" "}
            <li>
              <code>
                {"<title>"}
              </code>
              {" provides a short name; "}
              <code>
                {"<desc>"}
              </code>
              {" adds a longer description."}
            </li>
            {" "}
            <li>
              <code>
                {"aria-labelledby"}
              </code>
              {" pointing to both makes support consistent across browsers."}
            </li>
            {" "}
          </ul>
          {" "}
          <p>
            {"For a simple icon, "}
            <code>
              {"aria-label"}
            </code>
            {" is enough: "}
            <code>
              {"<svg role=\"img\" aria-label=\"Warning\">"}
            </code>
            {"."}
          </p>
          {" "}
          <h2>
            {"Inline SVG: decorative"}
          </h2>
          {" "}
          <pre>
            <code>
              {"<svg aria-hidden=\"true\" focusable=\"false\" ...>"}
            </code>
          </pre>
          {" "}
          <p>
            <code>
              {"aria-hidden"}
            </code>
            {" removes it from the accessibility tree. "}
            <code>
              {"focusable=\"false\""}
            </code>
            {" prevents an old Internet Explorer behaviour where SVGs received keyboard focus; it is harmless in modern browsers."}
          </p>
          {" "}
          <h2>
            {"Icon-only buttons and links"}
          </h2>
          {" "}
          <p>
            {"The most common accessibility bug: a button containing only an SVG icon and no text. Label the button, not the icon:"}
          </p>
          {" "}
          <pre>
            <code>
              {"<button aria-label=\"Close dialog\"> <svg aria-hidden=\"true\" viewBox=\"0 0 24 24\">...</svg> </button>"}
            </code>
          </pre>
          {" "}
          <p>
            {"Alternatively, include visually hidden text inside the button. Either way, the user hears \"Close dialog, button\"."}
          </p>
          {" "}
          <h2>
            {"Charts and complex diagrams"}
          </h2>
          {" "}
          <p>
            {"A title and one-sentence description cannot convey a detailed chart. Provide the underlying data as an HTML table nearby, or a text summary of key findings. This also helps users with cognitive disabilities and anyone skimming."}
          </p>
          {" "}
          <h2>
            {"Colour and contrast"}
          </h2>
          {" "}
          <ul>
            {" "}
            <li>
              {"Icons and graphical elements that convey meaning should have a contrast ratio of at least 3:1 against their background, as recommended by WCAG."}
            </li>
            {" "}
            <li>
              {"Do not rely on colour alone — pair red/green status icons with distinct shapes or labels."}
            </li>
            {" "}
            <li>
              {"Support Windows High Contrast / forced-colours mode: icons using "}
              <code>
                {"fill=\"currentColor\""}
              </code>
              {" automatically follow the system text colour, while hard-coded colours may disappear."}
            </li>
            {" "}
          </ul>
          {" "}
          <h2>
            {"Text inside SVG"}
          </h2>
          {" "}
          <p>
            {"Real "}
            <code>
              {"<text>"}
            </code>
            {" elements in inline SVG can be read by screen readers and translated by browser tools. Text converted to outlines (as in many logos and traced images) cannot, so always provide an equivalent label."}
          </p>
          {" "}
          <h2>
            {"Motion"}
          </h2>
          {" "}
          <p>
            {"Animated SVGs should respect the "}
            <code>
              {"prefers-reduced-motion"}
            </code>
            {" setting, and anything that moves for more than five seconds should be pausable. See "}
            <Link href="/blog-svg-animation-basics">
              {"SVG Animation Basics"}
            </Link>
            {" for an example."}
          </p>
          {" "}
          <h2>
            {"Quick checklist"}
          </h2>
          {" "}
          <ol>
            {" "}
            <li>
              {"Meaningful SVG has an accessible name (alt, aria-label or title)."}
            </li>
            {" "}
            <li>
              {"Decorative SVG has "}
              <code>
                {"alt=\"\""}
              </code>
              {" or "}
              <code>
                {"aria-hidden=\"true\""}
              </code>
              {"."}
            </li>
            {" "}
            <li>
              {"Icon-only controls are labelled."}
            </li>
            {" "}
            <li>
              {"Charts have a text or table alternative."}
            </li>
            {" "}
            <li>
              {"Graphics meet 3:1 contrast and do not rely on colour alone."}
            </li>
            {" "}
            <li>
              {"Animations respect reduced-motion preferences."}
            </li>
            {" "}
          </ol>
          {" "}
          <h2>
            {"Summary"}
          </h2>
          {" "}
          <p>
            {"Accessible SVG comes down to one question — meaningful or decorative? — and a few attributes. Label what matters, hide what does not, and check contrast. Your graphics will then work for every visitor, including those who never see them."}
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
          <Link className="post" href="/blog-style-svg-with-css">
            <div className="th" style={{ "background": "linear-gradient(135deg,#8b5cf6,#ec4899)" }}>
              <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="13.5" cy="6.5" r="1.5" />
                <circle cx="17.5" cy="10.5" r="1.5" />
                <circle cx="8.5" cy="7.5" r="1.5" />
                <circle cx="6.5" cy="12.5" r="1.5" />
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
              </svg>
            </div>
            {" "}
            <div className="bd">
              <small>
                {"Web design"}
              </small>
              <b>
                {"Styling SVG with CSS: Colours, Hover Effects and Themes"}
              </b>
              <p>
                {"Change SVG colours, strokes and sizes with CSS. Learn fill, stroke, currentColor, CSS variables and dark-mode techniques for icons and illustrations."}
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BlogPosting\",\"headline\":\"How to Make SVG Graphics Accessible\",\"datePublished\":\"2026-11-21\",\"author\":{\"@type\":\"Organization\",\"name\":\"PNG TO SVG\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"PNG TO SVG\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://pngtosvgfree.com/logo.svg\"}},\"mainEntityOfPage\":\"https://pngtosvgfree.com/blog-accessible-svg.html\",\"description\":\"Screen readers handle SVG in different ways depending on how it is embedded. Learn how to label meaningful SVGs, hide decorative ones and ensure good contrast.\"}" }} />
      {" "}
    </>
  );
}
