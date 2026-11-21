import Link from "next/link";

export const metadata = {
  "title": "5 Ways to Add SVG to a Web Page (and When to Use Each) | PNG TO SVG",
  "description": "img tag, inline SVG, CSS background, object or sprite? Compare the ways to put SVG on a website, with pros, cons and code examples.",
  "alternates": {
    "canonical": "https://pngtosvgfree.com/blog-ways-to-use-svg-in-html.html"
  },
  "openGraph": {
    "title": "5 Ways to Add SVG to a Web Page (and When to Use Each) | PNG TO SVG",
    "description": "img tag, inline SVG, CSS background, object or sprite? Compare the ways to put SVG on a website, with pros, cons and code examples.",
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
              <path d="M16 18l6-6-6-6" />
              <path d="M8 6l-6 6 6 6" />
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
            {"5 Ways to Add SVG to a Web Page (and When to Use Each)"}
          </h1>
          {" "}
          <p>
            {"SVG is the best format for logos, icons and illustrations on the web, but there is more than one way to put it on a page. Each method affects styling, caching, accessibility and performance differently. Here are the five main options and when to choose each."}
          </p>
          {" "}
          <h2>
            {"1. The <img> tag"}
          </h2>
          {" "}
          <pre>
            <code>
              {"<img src=\"logo.svg\" alt=\"Company name\" width=\"160\" height=\"40\">"}
            </code>
          </pre>
          {" "}
          <p>
            {"The simplest approach, and often the right one."}
          </p>
          {" "}
          <ul>
            {" "}
            <li>
              <strong>
                {"Pros:"}
              </strong>
              {" easy, cached by the browser, works with lazy loading, keeps HTML clean."}
            </li>
            {" "}
            <li>
              <strong>
                {"Cons:"}
              </strong>
              {" you cannot change the SVG's colours with your page's CSS, and scripts inside the SVG do not run (which is also a security benefit)."}
            </li>
            {" "}
            <li>
              <strong>
                {"Use it for:"}
              </strong>
              {" logos, illustrations and any graphic you do not need to restyle."}
            </li>
            {" "}
          </ul>
          {" "}
          <p>
            {"Always include "}
            <code>
              {"alt"}
            </code>
            {" text and width and height attributes to prevent layout shift while the page loads."}
          </p>
          {" "}
          <h2>
            {"2. Inline SVG"}
          </h2>
          {" "}
          <pre>
            <code>
              {"<svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" aria-hidden=\"true\"> <path d=\"M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z\" fill=\"currentColor\"/> </svg>"}
            </code>
          </pre>
          {" "}
          <p>
            {"The SVG code is placed directly in the HTML."}
          </p>
          {" "}
          <ul>
            {" "}
            <li>
              <strong>
                {"Pros:"}
              </strong>
              {" full CSS control (colours, hover effects, animation), no extra HTTP request, can be scripted."}
            </li>
            {" "}
            <li>
              <strong>
                {"Cons:"}
              </strong>
              {" not cached separately, so repeating a large SVG on many pages increases page weight; HTML becomes harder to read."}
            </li>
            {" "}
            <li>
              <strong>
                {"Use it for:"}
              </strong>
              {" icons that change colour on hover or with themes, animated graphics and interactive charts."}
            </li>
            {" "}
          </ul>
          {" "}
          <p>
            {"Using "}
            <code>
              {"fill=\"currentColor\""}
            </code>
            {" makes the icon take the text colour of its parent, which is ideal for buttons and links."}
          </p>
          {" "}
          <h2>
            {"3. CSS background-image"}
          </h2>
          {" "}
          <pre>
            <code>
              {".badge { background: url(\"badge.svg\") no-repeat center / contain; }"}
            </code>
          </pre>
          {" "}
          <ul>
            {" "}
            <li>
              <strong>
                {"Pros:"}
              </strong>
              {" keeps decorative images out of the HTML, cached, easy to swap with media queries."}
            </li>
            {" "}
            <li>
              <strong>
                {"Cons:"}
              </strong>
              {" not accessible to screen readers (fine for decoration, bad for meaningful images) and not styleable from the page."}
            </li>
            {" "}
            <li>
              <strong>
                {"Use it for:"}
              </strong>
              {" decorative patterns, backgrounds and ornaments."}
            </li>
            {" "}
          </ul>
          {" "}
          <p>
            {"Modern CSS also offers "}
            <code>
              {"mask-image"}
            </code>
            {", which lets you use an SVG as a shape and colour it with "}
            <code>
              {"background-color"}
            </code>
            {" — a neat way to recolour icons without inlining them."}
          </p>
          {" "}
          <h2>
            {"4. The <object> or <iframe> element"}
          </h2>
          {" "}
          <pre>
            <code>
              {"<object data=\"diagram.svg\" type=\"image/svg+xml\">Diagram of the process</object>"}
            </code>
          </pre>
          {" "}
          <ul>
            {" "}
            <li>
              <strong>
                {"Pros:"}
              </strong>
              {" the SVG keeps its own scripts and interactivity, and is cached."}
            </li>
            {" "}
            <li>
              <strong>
                {"Cons:"}
              </strong>
              {" styling from the parent page is not possible, and it behaves more like an embedded document than an image."}
            </li>
            {" "}
            <li>
              <strong>
                {"Use it for:"}
              </strong>
              {" self-contained interactive SVGs, such as some maps and diagrams."}
            </li>
            {" "}
          </ul>
          {" "}
          <h2>
            {"5. SVG sprites with <use>"}
          </h2>
          {" "}
          <pre>
            <code>
              {"<svg width=\"24\" height=\"24\"><use href=\"icons.svg#search\"></use></svg>"}
            </code>
          </pre>
          {" "}
          <p>
            {"Many icons are stored as "}
            <code>
              {"<symbol>"}
            </code>
            {" elements in one file and referenced by ID."}
          </p>
          {" "}
          <ul>
            {" "}
            <li>
              <strong>
                {"Pros:"}
              </strong>
              {" one cached file for an entire icon set, while still allowing "}
              <code>
                {"currentColor"}
              </code>
              {" styling."}
            </li>
            {" "}
            <li>
              <strong>
                {"Cons:"}
              </strong>
              {" external sprites must be served from the same origin (or with CORS), and setup is a little more involved."}
            </li>
            {" "}
            <li>
              <strong>
                {"Use it for:"}
              </strong>
              {" sites with many icons used across many pages."}
            </li>
            {" "}
          </ul>
          {" "}
          <h2>
            {"Which one should you choose?"}
          </h2>
          {" "}
          <table>
            <tbody>
              <tr>
                <th>
                  {"Need"}
                </th>
                <th>
                  {"Best method"}
                </th>
              </tr>
              <tr>
                <td>
                  {"Simple logo or illustration"}
                </td>
                <td>
                  {"<img>"}
                </td>
              </tr>
              <tr>
                <td>
                  {"Icon that changes colour"}
                </td>
                <td>
                  {"Inline SVG or sprite"}
                </td>
              </tr>
              <tr>
                <td>
                  {"Large icon set"}
                </td>
                <td>
                  {"Sprite with <use>"}
                </td>
              </tr>
              <tr>
                <td>
                  {"Decorative background"}
                </td>
                <td>
                  {"CSS background or mask"}
                </td>
              </tr>
              <tr>
                <td>
                  {"Interactive standalone graphic"}
                </td>
                <td>
                  {"<object> or inline"}
                </td>
              </tr>
            </tbody>
          </table>
          {" "}
          <h2>
            {"Performance and accessibility tips"}
          </h2>
          {" "}
          <ul>
            {" "}
            <li>
              {"Optimise SVGs before use — see "}
              <Link href="/blog-optimize-svg-file-size">
                {"How to Reduce SVG File Size"}
              </Link>
              {"."}
            </li>
            {" "}
            <li>
              {"For meaningful inline SVGs, add "}
              <code>
                {"role=\"img\""}
              </code>
              {" and a "}
              <code>
                {"<title>"}
              </code>
              {"; for decorative ones, use "}
              <code>
                {"aria-hidden=\"true\""}
              </code>
              {"."}
            </li>
            {" "}
            <li>
              {"Avoid inlining very large illustrations on every page; use "}
              <code>
                {"<img>"}
              </code>
              {" so the browser can cache them."}
            </li>
            {" "}
            <li>
              {"Never inline SVG files uploaded by users without sanitising them, as they can contain scripts."}
            </li>
            {" "}
          </ul>
          {" "}
          <h2>
            {"Summary"}
          </h2>
          {" "}
          <p>
            {"Use "}
            <code>
              {"<img>"}
            </code>
            {" by default, inline SVG when you need CSS control, sprites for large icon sets, and CSS backgrounds for decoration. Matching the method to the job gives you sharp graphics, good caching and accessible pages."}
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BlogPosting\",\"headline\":\"5 Ways to Add SVG to a Web Page (and When to Use Each)\",\"datePublished\":\"2026-11-21\",\"author\":{\"@type\":\"Organization\",\"name\":\"PNG TO SVG\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"PNG TO SVG\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://pngtosvgfree.com/logo.svg\"}},\"mainEntityOfPage\":\"https://pngtosvgfree.com/blog-ways-to-use-svg-in-html.html\",\"description\":\"img tag, inline SVG, CSS background, object or sprite? Compare the ways to put SVG on a website, with pros, cons and code examples.\"}" }} />
      {" "}
    </>
  );
}
