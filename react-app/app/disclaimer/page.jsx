import Link from "next/link";

export const metadata = {
  "title": "Disclaimer | PNG TO SVG",
  "description": "Important information about the accuracy of PNG TO SVG tools, content and advertising.",
  "alternates": {
    "canonical": "https://pngtosvgfree.com/disclaimer.html"
  },
  "openGraph": {
    "title": "Disclaimer | PNG TO SVG",
    "description": "Important information about the accuracy of PNG TO SVG tools, content and advertising.",
    "type": "website"
  }
};

export default function Page() {
  return (
    <>
      {" "}
      <header className="phead">
        <span className="tag">
          {"Legal"}
        </span>
        <h1>
          <em>
            {"Disclaimer"}
          </em>
        </h1>
      </header>
      {" "}
      <div className="wrap">
        <div className="prose">
          {" "}
          <p className="meta">
            {"Last updated: November 17, 2026"}
          </p>
          {" "}
          <p>
            {"The information and tools on https://pngtosvgfree.com are provided for general use only. While we work hard to keep everything accurate and reliable, we make no guarantees about the completeness, accuracy or suitability of the converted files or articles."}
          </p>
          {" "}
          <h2>
            {"Conversion results"}
          </h2>
          {" "}
          <p>
            {"Image tracing is an automated process. Results depend on the source image and settings, and may differ from the original artwork. Please review all files before using them for printing, cutting, engraving or commercial production."}
          </p>
          {" "}
          <h2>
            {"Trademarks and copyright"}
          </h2>
          {" "}
          <p>
            {"Converting an image does not give you any rights to it. Product names, logos and brands mentioned on this Site (such as Figma, Adobe Illustrator, Inkscape, Cricut, Silhouette and Canva) belong to their respective owners and are used for identification only. PNG TO SVG is not affiliated with or endorsed by them."}
          </p>
          {" "}
          <h2>
            {"Advertising"}
          </h2>
          {" "}
          <p>
            {"This Site displays ads served by third parties, including Google AdSense. We do not endorse the products or services advertised, and clicking on an ad is at your own discretion."}
          </p>
          {" "}
          <h2>
            {"External links"}
          </h2>
          {" "}
          <p>
            {"Links to external websites are provided for convenience. We have no control over their content and accept no responsibility for them."}
          </p>
          {" "}
          <p>
            {"If you have questions, please "}
            <Link href="/contact">
              {"contact us"}
            </Link>
            {"."}
          </p>
        </div>
      </div>
      {" "}
    </>
  );
}
