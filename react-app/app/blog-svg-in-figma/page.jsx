import Link from "next/link";

export const metadata = {
  "title": {
    "absolute": "Working with SVG in Figma: Import, Edit and Export"
  },
  "description": "Figma handles SVG well, with a few quirks. Learn to import SVGs as editable vectors, recolour them, build icon components and export clean files.",
  "alternates": {
    "canonical": "https://pngtosvgfree.com/blog-svg-in-figma"
  },
  "openGraph": {
    "title": "Working with SVG in Figma: Import, Edit and Export",
    "description": "Figma handles SVG well, with a few quirks. Learn to import SVGs as editable vectors, recolour them, build icon components and export clean files.",
    "type": "article",
    "url": "https://pngtosvgfree.com/blog-svg-in-figma",
    "siteName": "PNG to SVG Free",
    "locale": "en_US",
    "images": [
      {
        "url": "https://pngtosvgfree.com/og-image.png",
        "width": 1200,
        "height": 630,
        "alt": "PNG to SVG Free — free online PNG to SVG converter"
      }
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Working with SVG in Figma: Import, Edit and Export",
    "description": "Figma handles SVG well, with a few quirks. Learn to import SVGs as editable vectors, recolour them, build icon components and export clean files.",
    "images": [
      "https://pngtosvgfree.com/og-image.png"
    ]
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
            {" / Tutorial"}
          </div>
          {" "}
          <div className="cover" style={{ "background": "linear-gradient(135deg,#06b6d4,#3d4ef5)", "color": "#fff" }}>
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="9" r="5" />
              <path d="M14 21l4-8 4 8z" />
              <rect x="2" y="15" width="6" height="6" rx="1" />
            </svg>
          </div>
          {" "}
          <div className="meta">
            <span>
              {"Tutorial"}
            </span>
            <span>
              {"November 21, 2026"}
            </span>
            <span>
              {"3 min read"}
            </span>
            <span>
              {"By the PNG to SVG Free team"}
            </span>
          </div>
          {" "}
          <h1 style={{ "fontSize": "clamp(28px,4vw,40px)", "letterSpacing": "-.03em", "lineHeight": "1.15", "marginTop": "6px" }}>
            {"Working with SVG in Figma: Import, Edit and Export"}
          </h1>
          {" "}
          <p>
            {"Figma is one of the most popular tools for interface and graphic design, and SVG is its natural partner. Icons, logos and illustrations move between Figma, code and other tools as SVG. Here is how to work with them smoothly."}
          </p>
          {" "}
          <h2>
            {"Importing SVG files"}
          </h2>
          {" "}
          <p>
            {"There are three ways to bring an SVG into Figma:"}
          </p>
          {" "}
          <ul>
            {" "}
            <li>
              <strong>
                {"Drag and drop"}
              </strong>
              {" the .svg file onto the canvas."}
            </li>
            {" "}
            <li>
              <strong>
                {"File → Place image"}
              </strong>
              {" (Shift+Ctrl/Cmd+K) and choose the file."}
            </li>
            {" "}
            <li>
              <strong>
                {"Paste SVG code"}
              </strong>
              {": copy the code from a text editor or website and paste it straight onto the canvas. Figma converts it into editable layers."}
            </li>
            {" "}
          </ul>
          {" "}
          <p>
            {"Unlike PNG or JPG, which become image fills, an imported SVG becomes real vector layers you can edit."}
          </p>
          {" "}
          <h2>
            {"Understanding the imported layers"}
          </h2>
          {" "}
          <p>
            {"Figma usually wraps an SVG in a frame named after the file, containing groups and vector layers. Traced SVGs may contain dozens or hundreds of vector layers, one per colour region. Tips:"}
          </p>
          {" "}
          <ul>
            {" "}
            <li>
              {"Hold Ctrl/Cmd and click to select a layer deep inside groups."}
            </li>
            {" "}
            <li>
              {"Use "}
              <em>
                {"Select matching layers"}
              </em>
              {" (Alt+Ctrl/Cmd+A) to select all layers similar to the current one."}
            </li>
            {" "}
            <li>
              {"Flatten (Ctrl/Cmd+E) many shapes into one vector when you no longer need them separate — useful for single-colour icons."}
            </li>
            {" "}
          </ul>
          {" "}
          <h2>
            {"Recolouring"}
          </h2>
          {" "}
          <p>
            {"The fastest method is the "}
            <strong>
              {"Selection colors"}
            </strong>
            {" section in the right panel. Select the whole imported frame, and Figma lists every colour used inside it. Change a colour there and every layer using it updates at once — perfect for traced logos that use a handful of colours across many shapes."}
          </p>
          {" "}
          <p>
            {"For a design system, replace those colours with colour styles or variables so the icon follows your theme."}
          </p>
          {" "}
          <h2>
            {"Editing shapes"}
          </h2>
          {" "}
          <p>
            {"Double-click a vector layer (or press Enter) to enter vector edit mode. You can move points, bend curves with handles, add points with the pen tool and delete points. Boolean operations — Union, Subtract, Intersect and Exclude — in the toolbar combine shapes non-destructively."}
          </p>
          {" "}
          <h2>
            {"Building icon components"}
          </h2>
          {" "}
          <ol>
            {" "}
            <li>
              {"Place each icon in a square frame (for example 24 × 24) with consistent padding."}
            </li>
            {" "}
            <li>
              {"Flatten the icon shapes into a single vector if it is single-colour."}
            </li>
            {" "}
            <li>
              {"Set constraints to "}
              <em>
                {"Scale"}
              </em>
              {" so the icon resizes proportionally."}
            </li>
            {" "}
            <li>
              {"Create a component (Ctrl/Cmd+Alt+K) and apply a colour style to the fill."}
            </li>
            {" "}
            <li>
              {"Publish to your team library."}
            </li>
            {" "}
          </ol>
          {" "}
          <p>
            {"This keeps icons consistent, easy to swap and easy to export."}
          </p>
          {" "}
          <h2>
            {"Exporting SVG"}
          </h2>
          {" "}
          <p>
            {"Select a layer or frame, click "}
            <strong>
              {"+"}
            </strong>
            {" in the Export section of the right panel, choose SVG and export. Useful options in the export settings include:"}
          </p>
          {" "}
          <ul>
            {" "}
            <li>
              <strong>
                {"Include \"id\" attribute"}
              </strong>
              {" — adds layer names as IDs, helpful for developers but adds bytes."}
            </li>
            {" "}
            <li>
              <strong>
                {"Outline text"}
              </strong>
              {" — converts text to paths so it looks right without the font. Usually on for logos and icons."}
            </li>
            {" "}
            <li>
              <strong>
                {"Simplify stroke"}
              </strong>
              {" — merges strokes where possible for cleaner output."}
            </li>
            {" "}
          </ul>
          {" "}
          <p>
            {"You can also right-click a layer and choose "}
            <em>
              {"Copy as → Copy as SVG"}
            </em>
            {" to paste code directly into your project."}
          </p>
          {" "}
          <h2>
            {"Common quirks"}
          </h2>
          {" "}
          <ul>
            {" "}
            <li>
              <strong>
                {"Strokes become outlines:"}
              </strong>
              {" some imported SVGs convert strokes to filled shapes. If you need editable strokes, rebuild those paths with Figma's pen tool."}
            </li>
            {" "}
            <li>
              <strong>
                {"Masks and clip paths"}
              </strong>
              {" may import as mask groups; check the layer order if parts disappear."}
            </li>
            {" "}
            <li>
              <strong>
                {"Filters and some gradients"}
              </strong>
              {" may not import exactly. Simplify complex effects before importing."}
            </li>
            {" "}
            <li>
              <strong>
                {"Exported icons include a background rectangle:"}
              </strong>
              {" remove the frame's fill before exporting."}
            </li>
            {" "}
          </ul>
          {" "}
          <h2>
            {"Bringing raster logos into Figma as vectors"}
          </h2>
          {" "}
          <p>
            {"If you only have a PNG or JPG of a logo, Figma will treat it as an image. Convert it first with our "}
            <Link href="/">
              {"PNG to SVG converter"}
            </Link>
            {", then drag the SVG into Figma. You will be able to recolour it with Selection colors and resize it without blur."}
          </p>
          {" "}
          <h2>
            {"Summary"}
          </h2>
          {" "}
          <p>
            {"Import SVGs by drag-and-drop or paste, use Selection colors to recolour quickly, turn icons into components with consistent frames, and export with outlined text. With these habits, Figma becomes a smooth bridge between your vector assets and your code."}
          </p>
          {" "}
          <div className="author">
            <img src="logo.svg" alt="" width="44" height="44" />
            <div>
              <b>
                {"Written by the PNG to SVG Free team"}
              </b>
              <p>
                {"We build free, privacy-first tools for converting images to vectors and write practical guides for designers, crafters and developers. Published November 21, 2026."}
              </p>
            </div>
          </div>
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
          <Link className="post" href="/blog-convert-jpg-to-svg">
            <div className="th" style={{ "background": "linear-gradient(135deg,#06b6d4,#3d4ef5)" }}>
              <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
            {" "}
            <div className="bd">
              <small>
                {"Tutorial"}
              </small>
              <b>
                {"How to Convert JPG to SVG Without Losing Quality"}
              </b>
              <p>
                {"JPG files are everywhere, but they blur when you scale them. Learn how to turn a JPG into a clean, scalable SVG and avoid the most common mistakes."}
              </p>
              <span>
                {"November 21, 2026 · 5 min read"}
              </span>
            </div>
          </Link>
          <Link className="post" href="/blog-convert-signature-to-svg">
            <div className="th" style={{ "background": "linear-gradient(135deg,#06b6d4,#3d4ef5)" }}>
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
                {"Tutorial"}
              </small>
              <b>
                {"How to Turn Your Signature into an SVG"}
              </b>
              <p>
                {"Create a crisp, transparent vector version of your handwritten signature for documents, email footers, websites, engraving and custom stamps."}
              </p>
              <span>
                {"November 21, 2026 · 4 min read"}
              </span>
            </div>
          </Link>
          <Link className="post" href="/blog-edit-svg-in-inkscape">
            <div className="th" style={{ "background": "linear-gradient(135deg,#06b6d4,#3d4ef5)" }}>
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
                {"Tutorial"}
              </small>
              <b>
                {"How to Edit SVG Files in Inkscape (Free)"}
              </b>
              <p>
                {"Inkscape is a free, open-source vector editor that works natively with SVG. Learn the essential tools to recolour, clean up and resize any SVG file."}
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"BlogPosting\",\"headline\":\"Working with SVG in Figma: Import, Edit and Export\",\"description\":\"Figma handles SVG well, with a few quirks. Learn to import SVGs as editable vectors, recolour them, build icon components and export clean files.\",\"datePublished\":\"2026-11-21\",\"dateModified\":\"2026-11-21\",\"image\":\"https://pngtosvgfree.com/og-image.png\",\"wordCount\":634,\"articleSection\":\"Tutorial\",\"inLanguage\":\"en\",\"author\":{\"@type\":\"Organization\",\"name\":\"PNG to SVG Free\",\"url\":\"https://pngtosvgfree.com\"},\"publisher\":{\"@id\":\"https://pngtosvgfree.com/#organization\"},\"mainEntityOfPage\":\"https://pngtosvgfree.com/blog-svg-in-figma\"},{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://pngtosvgfree.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Blog\",\"item\":\"https://pngtosvgfree.com/blog\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Working with SVG in Figma: Import, Edit and Export\",\"item\":\"https://pngtosvgfree.com/blog-svg-in-figma\"}]}]}" }} />
      {" "}
    </>
  );
}
