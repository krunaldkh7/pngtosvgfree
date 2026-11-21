import Link from "next/link";

export const metadata = {
  "title": "SVG Path Commands: A Beginner's Guide to the d Attribute | PNG TO SVG",
  "description": "M, L, C, Q, A, Z — learn what the letters in an SVG path mean, how curves work, and how to read and tweak path data by hand.",
  "alternates": {
    "canonical": "https://pngtosvgfree.com/blog-svg-path-commands.html"
  },
  "openGraph": {
    "title": "SVG Path Commands: A Beginner's Guide to the d Attribute | PNG TO SVG",
    "description": "M, L, C, Q, A, Z — learn what the letters in an SVG path mean, how curves work, and how to read and tweak path data by hand.",
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
              <path d="M12 19l7-7 3 3-7 7-3-3z" />
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
              <path d="M2 2l7.586 7.586" />
              <circle cx="11" cy="11" r="2" />
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
              {"4 min read"}
            </span>
            <span>
              {"By the PNG TO SVG team"}
            </span>
          </div>
          {" "}
          <h1 style={{ "fontSize": "clamp(28px,4vw,40px)", "letterSpacing": "-.03em", "lineHeight": "1.15", "marginTop": "6px" }}>
            {"SVG Path Commands: A Beginner's Guide to the d Attribute"}
          </h1>
          {" "}
          <p>
            {"Open almost any SVG in a text editor and you will find long strings like "}
            <code>
              {"d=\"M10 20 L50 20 C60 20 70 30 70 40 Z\""}
            </code>
            {". This is path data, the heart of vector graphics. Every logo, icon and traced image is ultimately made of these commands. You do not need to write them by hand, but understanding them makes editing, debugging and optimising SVGs much easier."}
          </p>
          {" "}
          <h2>
            {"How a path works"}
          </h2>
          {" "}
          <p>
            {"Imagine a pen on paper. Path commands tell the pen where to move and what to draw. Each command is a letter followed by numbers (coordinates). The y-axis points down: (0, 0) is the top-left corner."}
          </p>
          {" "}
          <p>
            <strong>
              {"Uppercase letters"}
            </strong>
            {" use absolute coordinates (positions in the drawing). "}
            <strong>
              {"Lowercase letters"}
            </strong>
            {" use relative coordinates (distances from the current pen position)."}
          </p>
          {" "}
          <h2>
            {"Moving and drawing lines"}
          </h2>
          {" "}
          <ul>
            {" "}
            <li>
              <code>
                {"M x y"}
              </code>
              {" — "}
              <strong>
                {"Move"}
              </strong>
              {" the pen without drawing. Every path starts with M."}
            </li>
            {" "}
            <li>
              <code>
                {"L x y"}
              </code>
              {" — draw a straight "}
              <strong>
                {"Line"}
              </strong>
              {" to a point."}
            </li>
            {" "}
            <li>
              <code>
                {"H x"}
              </code>
              {" — draw a "}
              <strong>
                {"Horizontal"}
              </strong>
              {" line to an x position."}
            </li>
            {" "}
            <li>
              <code>
                {"V y"}
              </code>
              {" — draw a "}
              <strong>
                {"Vertical"}
              </strong>
              {" line to a y position."}
            </li>
            {" "}
            <li>
              <code>
                {"Z"}
              </code>
              {" — close the path by drawing a line back to the start."}
            </li>
            {" "}
          </ul>
          {" "}
          <pre>
            <code>
              {"<path d=\"M10 10 H90 V90 H10 Z\" fill=\"#3d4ef5\"/>"}
            </code>
          </pre>
          {" "}
          <p>
            {"This draws a square: start at (10,10), go right to x=90, down to y=90, left to x=10, then close."}
          </p>
          {" "}
          <h2>
            {"Curves"}
          </h2>
          {" "}
          <h3>
            {"Cubic Bézier: C"}
          </h3>
          {" "}
          <pre>
            <code>
              {"C x1 y1, x2 y2, x y"}
            </code>
          </pre>
          {" "}
          <p>
            {"Draws a smooth curve to (x, y). The two control points (x1, y1) and (x2, y2) pull the curve towards them like magnets — the first shapes the start of the curve, the second shapes the end. This is the same type of curve you drag with handles in Illustrator, Figma or Inkscape, and it is the most common command in traced SVGs."}
          </p>
          {" "}
          <h3>
            {"Smooth cubic: S"}
          </h3>
          {" "}
          <p>
            <code>
              {"S x2 y2, x y"}
            </code>
            {" continues a curve smoothly. Its first control point is automatically mirrored from the previous curve, so joins stay seamless."}
          </p>
          {" "}
          <h3>
            {"Quadratic Bézier: Q and T"}
          </h3>
          {" "}
          <p>
            <code>
              {"Q x1 y1, x y"}
            </code>
            {" uses a single control point — simpler but less flexible. "}
            <code>
              {"T x y"}
            </code>
            {" continues it smoothly."}
          </p>
          {" "}
          <h3>
            {"Arcs: A"}
          </h3>
          {" "}
          <pre>
            <code>
              {"A rx ry rotation large-arc-flag sweep-flag x y"}
            </code>
          </pre>
          {" "}
          <p>
            {"Draws part of an ellipse with radii rx and ry to the point (x, y). The two flags (0 or 1) choose which of the four possible arcs is drawn — the large or small one, clockwise or anticlockwise. Arcs are great for rounded corners and pie charts but are the trickiest command to write by hand."}
          </p>
          {" "}
          <h2>
            {"Reading a real example"}
          </h2>
          {" "}
          <pre>
            <code>
              {"M12 2 L15 9 H22 L16.5 13 L18.5 20 L12 16 L5.5 20 L7.5 13 L2 9 H9 Z"}
            </code>
          </pre>
          {" "}
          <p>
            {"Start at the top (12, 2), draw lines around ten points and close the shape. The result is a five-pointed star — readable once you know the letters."}
          </p>
          {" "}
          <h2>
            {"Holes inside shapes"}
          </h2>
          {" "}
          <p>
            {"A single path can contain several sub-paths, each starting with M. The letter \"O\" is typically one outer loop and one inner loop. The "}
            <code>
              {"fill-rule"}
            </code>
            {" property ("}
            <code>
              {"nonzero"}
            </code>
            {" or "}
            <code>
              {"evenodd"}
            </code>
            {") decides whether the inner loop becomes a hole. Traced SVGs use this to cut counters out of letters and holes out of shapes."}
          </p>
          {" "}
          <h2>
            {"Why path data gets long"}
          </h2>
          {" "}
          <p>
            {"Traced images describe organic shapes with many curve segments, and design tools often export coordinates with many decimal places. Both make the d attribute long. Techniques to shorten it — fewer nodes, lower precision, relative commands — are covered in "}
            <Link href="/blog-optimize-svg-file-size">
              {"How to Reduce SVG File Size"}
            </Link>
            {"."}
          </p>
          {" "}
          <h2>
            {"Practical edits you can make by hand"}
          </h2>
          {" "}
          <ul>
            {" "}
            <li>
              <strong>
                {"Move a whole shape:"}
              </strong>
              {" wrap it in "}
              <code>
                {"<g transform=\"translate(10,0)\">"}
              </code>
              {" rather than changing every coordinate."}
            </li>
            {" "}
            <li>
              <strong>
                {"Change a colour:"}
              </strong>
              {" edit the "}
              <code>
                {"fill"}
              </code>
              {" attribute of the path, no path data needed."}
            </li>
            {" "}
            <li>
              <strong>
                {"Find a stray shape:"}
              </strong>
              {" delete paths one at a time (or set "}
              <code>
                {"fill=\"red\""}
              </code>
              {") to see which is which."}
            </li>
            {" "}
            <li>
              <strong>
                {"Close an open shape for cutting:"}
              </strong>
              {" add "}
              <code>
                {"Z"}
              </code>
              {" at the end of its path data."}
            </li>
            {" "}
          </ul>
          {" "}
          <h2>
            {"Tools for exploring paths"}
          </h2>
          {" "}
          <p>
            {"Browser developer tools let you edit an inline SVG's path data and see the result instantly. Online path visualisers show each command and control point. And vector editors such as Inkscape include an XML editor that displays the path data as you move nodes."}
          </p>
          {" "}
          <h2>
            {"Summary"}
          </h2>
          {" "}
          <p>
            {"M moves, L/H/V draw lines, C/S/Q/T draw curves, A draws arcs and Z closes. Uppercase means absolute, lowercase means relative. With those few rules, the cryptic d attribute becomes a readable set of drawing instructions you can inspect and adjust with confidence."}
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BlogPosting\",\"headline\":\"SVG Path Commands: A Beginner's Guide to the d Attribute\",\"datePublished\":\"2026-11-21\",\"author\":{\"@type\":\"Organization\",\"name\":\"PNG TO SVG\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"PNG TO SVG\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://pngtosvgfree.com/logo.svg\"}},\"mainEntityOfPage\":\"https://pngtosvgfree.com/blog-svg-path-commands.html\",\"description\":\"M, L, C, Q, A, Z — learn what the letters in an SVG path mean, how curves work, and how to read and tweak path data by hand.\"}" }} />
      {" "}
    </>
  );
}
