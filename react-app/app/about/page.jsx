import Link from "next/link";

export const metadata = {
  "title": "About Us | PNG TO SVG",
  "description": "Learn about PNG TO SVG, the free browser-based PNG to SVG converter, and the people and principles behind it.",
  "alternates": {
    "canonical": "https://pngtosvgfree.com/about.html"
  },
  "openGraph": {
    "title": "About Us | PNG TO SVG",
    "description": "Learn about PNG TO SVG, the free browser-based PNG to SVG converter, and the people and principles behind it.",
    "type": "website"
  }
};

export default function Page() {
  return (
    <>
      {" "}
      <header className="phead">
        <span className="tag">
          {"Our story"}
        </span>
        <h1>
          {"About "}
          <em>
            {"PNG TO SVG"}
          </em>
        </h1>
      </header>
      {" "}
      <div className="wrap">
        <div className="prose">
          {" "}
          <p>
            {"PNG TO SVG is a free online toolkit for turning everyday images into clean, scalable vector graphics. We built it because converting a logo, drawing or illustration to SVG should be fast, private and free — without installing heavy software or creating an account."}
          </p>
          {" "}
          <h2>
            {"What we do"}
          </h2>
          {" "}
          <p>
            {"Our main tool, the "}
            <Link href="/">
              {"PNG to SVG converter"}
            </Link>
            {", traces raster images (PNG, JPG, GIF, BMP, WEBP and AVIF) into smooth vector paths. It automatically recognises whether your image is a logo, photograph, sketch or silhouette and picks suitable settings, while still letting you adjust colours, detail, smoothing and corners. We also offer a "}
            <Link href="/bulk-svg-to-png-converter">
              {"bulk SVG to PNG converter"}
            </Link>
            {", a "}
            <Link href="/gallery">
              {"free SVG gallery"}
            </Link>
            {" and a "}
            <Link href="/blog">
              {"blog"}
            </Link>
            {" with practical guides."}
          </p>
          {" "}
          <h2>
            {"Privacy first"}
          </h2>
          {" "}
          <p>
            {"All conversions happen inside your own web browser. The images you convert are not uploaded to our servers, not stored and not shared. You can read more in our "}
            <Link href="/privacy-policy">
              {"Privacy Policy"}
            </Link>
            {"."}
          </p>
          {" "}
          <h2>
            {"Who uses PNG TO SVG"}
          </h2>
          {" "}
          <ul>
            <li>
              {"Designers who need a quick vector version of a client's logo."}
            </li>
            <li>
              {"Crafters preparing files for Cricut, Silhouette and laser cutters."}
            </li>
            <li>
              {"Small businesses getting artwork ready for signs, T-shirts and print."}
            </li>
            <li>
              {"Developers who want crisp SVG icons for websites and apps."}
            </li>
            <li>
              {"Students and teachers learning about digital graphics."}
            </li>
          </ul>
          {" "}
          <h2>
            {"How we keep it free"}
          </h2>
          {" "}
          <p>
            {"PNG TO SVG is supported by advertising. Ads help us cover hosting and development costs so the tools remain free for everyone. We aim to keep ads unobtrusive and never place them inside the converter workspace."}
          </p>
          {" "}
          <h2>
            {"Get in touch"}
          </h2>
          {" "}
          <p>
            {"Have feedback, a feature idea or found a bug? We would love to hear from you — visit our "}
            <Link href="/contact">
              {"contact page"}
            </Link>
            {" or email us at "}
            <strong>
              {"contact@pngtosvgfree.com"}
            </strong>
            {"."}
          </p>
        </div>
      </div>
      {" "}
    </>
  );
}
