import Link from "next/link";

export const metadata = {
  "title": "The SVG viewBox Explained (With Simple Examples) | PNG TO SVG",
  "description": "The viewBox attribute is the key to how SVGs scale, crop and zoom. A clear, visual explanation of its four numbers and how they relate to width and height.",
  "alternates": {
    "canonical": "https://pngtosvgfree.com/blog-svg-viewbox-explained.html"
  },
  "openGraph": {
    "title": "The SVG viewBox Explained (With Simple Examples) | PNG TO SVG",
    "description": "The viewBox attribute is the key to how SVGs scale, crop and zoom. A clear, visual explanation of its four numbers and how they relate to width and height.",
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
              <path d="M16 18l6-6-6-6" />
              <path d="M8 6l-6 6 6 6" />
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
            {"The SVG viewBox Explained (With Simple Examples)"}
          </h1>
          {" "}
          <p>
            {"If you have ever opened an SVG and seen "}
            <code>
              {"viewBox=\"0 0 24 24\""}
            </code>
            {", you have met the most important — and most misunderstood — attribute in SVG. The viewBox controls how a drawing is scaled, positioned and cropped. Once it clicks, resizing, cropping and fixing \"invisible\" SVGs becomes easy."}
          </p>
          {" "}
          <h2>
            {"Two coordinate systems"}
          </h2>
          {" "}
          <p>
            {"Every SVG has two sizes:"}
          </p>
          {" "}
          <ul>
            {" "}
            <li>
              <strong>
                {"The viewport"}
              </strong>
              {" — how big the SVG appears on the page, set by "}
              <code>
                {"width"}
              </code>
              {" and "}
              <code>
                {"height"}
              </code>
              {" attributes or CSS."}
            </li>
            {" "}
            <li>
              <strong>
                {"The viewBox"}
              </strong>
              {" — which area of the drawing's internal coordinate space is shown inside that viewport."}
            </li>
            {" "}
          </ul>
          {" "}
          <p>
            {"Think of the drawing as a large sheet of paper, the viewBox as a camera frame placed on that paper, and the viewport as the screen showing what the camera sees. The browser stretches whatever is inside the camera frame to fill the screen."}
          </p>
          {" "}
          <h2>
            {"The four numbers"}
          </h2>
          {" "}
          <pre>
            <code>
              {"viewBox=\"min-x min-y width height\""}
            </code>
          </pre>
          {" "}
          <ul>
            {" "}
            <li>
              <strong>
                {"min-x, min-y"}
              </strong>
              {" — the top-left corner of the visible area in drawing coordinates."}
            </li>
            {" "}
            <li>
              <strong>
                {"width, height"}
              </strong>
              {" — how much of the drawing is visible."}
            </li>
            {" "}
          </ul>
          {" "}
          <p>
            {"So "}
            <code>
              {"viewBox=\"0 0 24 24\""}
            </code>
            {" means \"show the area from (0, 0) to (24, 24)\". An icon drawn in that space can be displayed at 16, 24 or 512 pixels and will always fill the viewport exactly."}
          </p>
          {" "}
          <h2>
            {"Example 1: Scaling"}
          </h2>
          {" "}
          <pre>
            <code>
              {"<svg viewBox=\"0 0 100 100\" width=\"50\" height=\"50\"> <circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"#3d4ef5\"/> </svg>"}
            </code>
          </pre>
          {" "}
          <p>
            {"The drawing space is 100 × 100 but the SVG is displayed at 50 × 50 pixels, so everything is drawn at half size. Change width and height to 400 and the same circle is drawn four times larger, perfectly sharp."}
          </p>
          {" "}
          <h2>
            {"Example 2: Zooming in"}
          </h2>
          {" "}
          <p>
            {"Shrink the viewBox while keeping the viewport the same, and you zoom in:"}
          </p>
          {" "}
          <pre>
            <code>
              {"viewBox=\"25 25 50 50\""}
            </code>
          </pre>
          {" "}
          <p>
            {"Now only the central 50 × 50 area is visible, scaled up to fill the SVG. The circle appears twice as big and its edges are cropped."}
          </p>
          {" "}
          <h2>
            {"Example 3: Panning"}
          </h2>
          {" "}
          <p>
            {"Changing min-x and min-y moves the camera without changing zoom. "}
            <code>
              {"viewBox=\"20 0 100 100\""}
            </code>
            {" shifts the visible area 20 units to the right, so the drawing appears to move left. Interactive maps and zoomable diagrams work by updating these numbers."}
          </p>
          {" "}
          <h2>
            {"Example 4: Adding padding"}
          </h2>
          {" "}
          <p>
            {"If an icon touches the edges of its box, enlarge the viewBox evenly to add breathing room: "}
            <code>
              {"viewBox=\"-2 -2 28 28\""}
            </code>
            {" adds 2 units of space on every side of a 24 × 24 drawing."}
          </p>
          {" "}
          <h2>
            {"When the shapes do not match"}
          </h2>
          {" "}
          <p>
            {"If the viewBox is 200 × 100 (2:1) but the viewport is 300 × 300 (square), the drawing cannot fill the space without distortion. The "}
            <code>
              {"preserveAspectRatio"}
            </code>
            {" attribute decides what happens; by default the drawing is scaled to fit and centred, leaving empty space above and below. Learn more in "}
            <Link href="/blog-responsive-svg">
              {"Responsive SVG"}
            </Link>
            {"."}
          </p>
          {" "}
          <h2>
            {"Common viewBox problems"}
          </h2>
          {" "}
          <h3>
            {"\"My SVG is blank\""}
          </h3>
          {" "}
          <p>
            {"The viewBox may point to an area where there is no artwork — for example after a design tool exported shapes far from the origin. Check the coordinates in the path data and adjust the viewBox to cover them."}
          </p>
          {" "}
          <h3>
            {"\"My SVG will not scale\""}
          </h3>
          {" "}
          <p>
            {"It probably has width and height but no viewBox. Add "}
            <code>
              {"viewBox=\"0 0 W H\""}
            </code>
            {" using the original width and height values, then size it with CSS."}
          </p>
          {" "}
          <h3>
            {"\"There is extra white space around my artwork\""}
          </h3>
          {" "}
          <p>
            {"The viewBox is larger than the drawing. Many editors can fit it automatically: in Inkscape use "}
            <em>
              {"Edit → Resize Page to Selection"}
            </em>
            {"; in Illustrator use "}
            <em>
              {"Fit to Artwork Bounds"}
            </em>
            {" on the artboard."}
          </p>
          {" "}
          <h3>
            {"\"My artwork is cut off\""}
          </h3>
          {" "}
          <p>
            {"The viewBox is smaller than the drawing or offset from it. Enlarge it, or adjust min-x and min-y."}
          </p>
          {" "}
          <h2>
            {"viewBox in traced SVGs"}
          </h2>
          {" "}
          <p>
            {"When you convert an image with our "}
            <Link href="/">
              {"PNG to SVG converter"}
            </Link>
            {", the viewBox is set to the original image's pixel dimensions — for example "}
            <code>
              {"viewBox=\"0 0 800 600\""}
            </code>
            {" for an 800 × 600 PNG. That keeps the proportions identical and lets you scale the result freely."}
          </p>
          {" "}
          <h2>
            {"Summary"}
          </h2>
          {" "}
          <p>
            {"The viewBox defines which part of the drawing is visible; width and height define how large it appears. Smaller viewBox values zoom in, larger ones zoom out, and min-x and min-y pan around. Add a viewBox to any SVG that will not scale, and you have solved the most common SVG sizing problem."}
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
          <Link className="post" href="/blog-svg-gradients-and-filters">
            <div className="th" style={{ "background": "linear-gradient(135deg,#0f1020,#4c4f6b)" }}>
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
                {"Technology"}
              </small>
              <b>
                {"SVG Gradients, Patterns and Filters: A Practical Introduction"}
              </b>
              <p>
                {"SVG can do much more than flat colours. Learn how linear and radial gradients, patterns, drop shadows and blur filters work — with examples you can copy."}
              </p>
              <span>
                {"November 21, 2026 · 3 min read"}
              </span>
            </div>
          </Link>
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
        </div>
        {" "}
      </div>
      {" "}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BlogPosting\",\"headline\":\"The SVG viewBox Explained (With Simple Examples)\",\"datePublished\":\"2026-11-21\",\"author\":{\"@type\":\"Organization\",\"name\":\"PNG TO SVG\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"PNG TO SVG\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://pngtosvgfree.com/logo.svg\"}},\"mainEntityOfPage\":\"https://pngtosvgfree.com/blog-svg-viewbox-explained.html\",\"description\":\"The viewBox attribute is the key to how SVGs scale, crop and zoom. A clear, visual explanation of its four numbers and how they relate to width and height.\"}" }} />
      {" "}
    </>
  );
}
