import Link from "next/link";

export const metadata = {
  "title": "SVG Animation Basics: CSS, SMIL and JavaScript | PNG TO SVG",
  "description": "Make SVG icons and illustrations move. A beginner-friendly introduction to animating SVG with CSS, SMIL and JavaScript, with simple examples.",
  "alternates": {
    "canonical": "https://pngtosvgfree.com/blog-svg-animation-basics.html"
  },
  "openGraph": {
    "title": "SVG Animation Basics: CSS, SMIL and JavaScript | PNG TO SVG",
    "description": "Make SVG icons and illustrations move. A beginner-friendly introduction to animating SVG with CSS, SMIL and JavaScript, with simple examples.",
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
              <path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M17.8 6.2L19 5M3 21l9-9M12.2 6.2L11 5" />
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
            {"SVG Animation Basics: CSS, SMIL and JavaScript"}
          </h1>
          {" "}
          <p>
            {"Animated SVGs add life to websites: loading spinners, icons that react to clicks, logos that draw themselves on screen. Because SVG is made of real elements, each part can be animated independently, and the result stays sharp at any size while weighing far less than a GIF or video."}
          </p>
          {" "}
          <p>
            {"There are three main ways to animate SVG. This guide explains each, with small examples you can adapt."}
          </p>
          {" "}
          <h2>
            {"Before you start: use inline SVG"}
          </h2>
          {" "}
          <p>
            {"To animate parts of an SVG with CSS or JavaScript from your page, the SVG must be inline in the HTML. SVGs loaded through "}
            <code>
              {"<img>"}
            </code>
            {" can still run animations defined inside the file itself, but your page's CSS and scripts cannot reach them."}
          </p>
          {" "}
          <h2>
            {"1. CSS animation"}
          </h2>
          {" "}
          <p>
            {"CSS is the easiest and most common choice. Any SVG element can be animated with "}
            <code>
              {"@keyframes"}
            </code>
            {", transitions and transforms."}
          </p>
          {" "}
          <h3>
            {"A spinning loader"}
          </h3>
          {" "}
          <pre>
            <code>
              {"<svg class=\"spin\" viewBox=\"0 0 50 50\" width=\"40\" height=\"40\"> <circle cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke=\"#3d4ef5\" stroke-width=\"5\" stroke-dasharray=\"90 150\" stroke-linecap=\"round\"/> </svg> .spin { animation: rotate 1s linear infinite; } @keyframes rotate { to { transform: rotate(360deg); } }"}
            </code>
          </pre>
          {" "}
          <h3>
            {"The \"line drawing\" effect"}
          </h3>
          {" "}
          <p>
            {"This popular effect makes an outline appear as if drawn by hand. It uses two stroke properties: "}
            <code>
              {"stroke-dasharray"}
            </code>
            {" creates a dash as long as the whole path, and "}
            <code>
              {"stroke-dashoffset"}
            </code>
            {" shifts it out of view, then back."}
          </p>
          {" "}
          <pre>
            <code>
              {".draw path { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: draw 2s ease forwards; } @keyframes draw { to { stroke-dashoffset: 0; } }"}
            </code>
          </pre>
          {" "}
          <p>
            {"Replace 1000 with the actual path length for precise timing; JavaScript's "}
            <code>
              {"path.getTotalLength()"}
            </code>
            {" tells you the value. Adding "}
            <code>
              {"pathLength=\"1\""}
            </code>
            {" to the path lets you use 1 instead, avoiding the measurement altogether."}
          </p>
          {" "}
          <h3>
            {"Transform origin gotcha"}
          </h3>
          {" "}
          <p>
            {"By default, SVG elements rotate and scale around the SVG's top-left corner, not their own centre. Add "}
            <code>
              {"transform-box: fill-box; transform-origin: center;"}
            </code>
            {" to transform shapes around their own centre."}
          </p>
          {" "}
          <h2>
            {"2. SMIL animation"}
          </h2>
          {" "}
          <p>
            {"SMIL is SVG's built-in animation syntax. Animations are written as elements inside the SVG file:"}
          </p>
          {" "}
          <pre>
            <code>
              {"<circle cx=\"20\" cy=\"20\" r=\"8\" fill=\"#ec4899\"> <animate attributeName=\"r\" values=\"8;14;8\" dur=\"1.5s\" repeatCount=\"indefinite\"/> </circle>"}
            </code>
          </pre>
          {" "}
          <p>
            {"SMIL's big advantage is that the animation lives inside the file, so it plays even when the SVG is used in an "}
            <code>
              {"<img>"}
            </code>
            {" tag. It can also animate things CSS cannot easily reach, such as moving an object along a path with "}
            <code>
              {"<animateMotion>"}
            </code>
            {" or morphing a path's shape. All modern browsers support it."}
          </p>
          {" "}
          <h2>
            {"3. JavaScript animation"}
          </h2>
          {" "}
          <p>
            {"For interactive or complex sequences — animations that respond to scrolling, data or user input — JavaScript gives full control. The browser's Web Animations API works on SVG elements:"}
          </p>
          {" "}
          <pre>
            <code>
              {"document.querySelector('#star').animate( [{ transform: 'scale(1)' }, { transform: 'scale(1.3)' }, { transform: 'scale(1)' }], { duration: 600, easing: 'ease-out' } );"}
            </code>
          </pre>
          {" "}
          <p>
            {"Libraries such as GSAP, anime.js and Motion make timelines, path morphing and scroll-linked animation easier, and smooth over browser differences."}
          </p>
          {" "}
          <h2>
            {"Which method should you use?"}
          </h2>
          {" "}
          <table>
            <tbody>
              <tr>
                <th>
                  {"Situation"}
                </th>
                <th>
                  {"Recommended"}
                </th>
              </tr>
              <tr>
                <td>
                  {"Hover effects, loaders, simple loops"}
                </td>
                <td>
                  {"CSS"}
                </td>
              </tr>
              <tr>
                <td>
                  {"Animation must work inside <img> or be self-contained"}
                </td>
                <td>
                  {"SMIL"}
                </td>
              </tr>
              <tr>
                <td>
                  {"Interactive, data-driven or long sequences"}
                </td>
                <td>
                  {"JavaScript"}
                </td>
              </tr>
            </tbody>
          </table>
          {" "}
          <h2>
            {"Performance tips"}
          </h2>
          {" "}
          <ul>
            {" "}
            <li>
              {"Animate "}
              <code>
                {"transform"}
              </code>
              {" and "}
              <code>
                {"opacity"}
              </code>
              {" when possible; they are cheaper for the browser than changing shapes or filters."}
            </li>
            {" "}
            <li>
              {"Keep path counts low. An animated traced image with thousands of shapes can stutter on phones — optimise first (see "}
              <Link href="/blog-optimize-svg-file-size">
                {"How to Reduce SVG File Size"}
              </Link>
              {")."}
            </li>
            {" "}
            <li>
              {"Avoid animating large blur filters, which are expensive to redraw."}
            </li>
            {" "}
          </ul>
          {" "}
          <h2>
            {"Respect reduced-motion preferences"}
          </h2>
          {" "}
          <p>
            {"Some people experience discomfort from motion on screen. Wrap non-essential animation in a media query:"}
          </p>
          {" "}
          <pre>
            <code>
              {"@media (prefers-reduced-motion: reduce) { .spin, .draw path { animation: none; } }"}
            </code>
          </pre>
          {" "}
          <h2>
            {"Animating your own artwork"}
          </h2>
          {" "}
          <p>
            {"Have a logo only as a PNG? Convert it with our "}
            <Link href="/">
              {"PNG to SVG converter"}
            </Link>
            {", open the SVG in a code editor, give the paths you want to move a class or ID, and apply the techniques above. Simple, flat-colour logos with few paths are the easiest to animate."}
          </p>
          {" "}
          <h2>
            {"Summary"}
          </h2>
          {" "}
          <p>
            {"CSS handles most SVG animation needs, SMIL keeps animation inside the file, and JavaScript unlocks interactivity. Start with simple transforms and stroke-drawing effects, keep files lean, and always provide a reduced-motion fallback."}
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BlogPosting\",\"headline\":\"SVG Animation Basics: CSS, SMIL and JavaScript\",\"datePublished\":\"2026-11-21\",\"author\":{\"@type\":\"Organization\",\"name\":\"PNG TO SVG\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"PNG TO SVG\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://pngtosvgfree.com/logo.svg\"}},\"mainEntityOfPage\":\"https://pngtosvgfree.com/blog-svg-animation-basics.html\",\"description\":\"Make SVG icons and illustrations move. A beginner-friendly introduction to animating SVG with CSS, SMIL and JavaScript, with simple examples.\"}" }} />
      {" "}
    </>
  );
}
