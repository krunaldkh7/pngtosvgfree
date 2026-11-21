import Link from "next/link";

export const metadata = {
  "title": "Terms of Use | PNG TO SVG",
  "description": "The terms and conditions for using PNG TO SVG and its free online tools.",
  "alternates": {
    "canonical": "https://pngtosvgfree.com/terms.html"
  },
  "openGraph": {
    "title": "Terms of Use | PNG TO SVG",
    "description": "The terms and conditions for using PNG TO SVG and its free online tools.",
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
          {"Terms of "}
          <em>
            {"Use"}
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
            {"By accessing or using PNG TO SVG at https://pngtosvgfree.com (the “Site”), you agree to these Terms of Use. If you do not agree, please do not use the Site."}
          </p>
          {" "}
          <h2>
            {"1. Use of the tools"}
          </h2>
          {" "}
          <p>
            {"PNG TO SVG provides free online tools to convert images between raster and vector formats. You may use the tools for personal and commercial purposes, subject to these Terms."}
          </p>
          {" "}
          <h2>
            {"2. Your content"}
          </h2>
          {" "}
          <p>
            {"You keep all rights to the images you convert and the files you create. Because conversion happens in your browser, we do not receive or store your files. You are solely responsible for making sure you have the right to use, convert and distribute any content you process — including logos, trademarks and copyrighted artwork."}
          </p>
          {" "}
          <h2>
            {"3. Acceptable use"}
          </h2>
          {" "}
          <p>
            {"You agree not to:"}
          </p>
          {" "}
          <ul>
            <li>
              {"use the Site for any unlawful purpose or to infringe the rights of others;"}
            </li>
            <li>
              {"attempt to disrupt, overload or gain unauthorised access to the Site or its infrastructure;"}
            </li>
            <li>
              {"scrape, copy or resell the Site or its content without permission;"}
            </li>
            <li>
              {"interfere with advertisements displayed on the Site in a fraudulent way, including generating invalid clicks."}
            </li>
          </ul>
          {" "}
          <h2>
            {"4. Gallery content"}
          </h2>
          {" "}
          <p>
            {"Illustrations in our "}
            <Link href="/gallery">
              {"SVG gallery"}
            </Link>
            {" may be used as described in the gallery license. Blog articles and other Site content are protected by copyright and may not be republished without permission."}
          </p>
          {" "}
          <h2>
            {"5. No warranty"}
          </h2>
          {" "}
          <p>
            {"The Site and tools are provided “as is” and “as available”, without warranties of any kind. Tracing is an automated approximation; we do not guarantee that converted files will be accurate, error-free or suitable for any particular purpose. Always check files before printing, cutting or publishing."}
          </p>
          {" "}
          <h2>
            {"6. Limitation of liability"}
          </h2>
          {" "}
          <p>
            {"To the fullest extent permitted by law, PNG TO SVG is not liable for any indirect, incidental or consequential damages, or for any loss of data, materials or profits arising from your use of the Site."}
          </p>
          {" "}
          <h2>
            {"7. Third-party services and ads"}
          </h2>
          {" "}
          <p>
            {"The Site displays advertising from third parties such as Google AdSense and may link to external websites. We are not responsible for third-party content, products or services."}
          </p>
          {" "}
          <h2>
            {"8. Changes"}
          </h2>
          {" "}
          <p>
            {"We may modify the Site or these Terms at any time. Continued use after changes are posted means you accept the updated Terms."}
          </p>
          {" "}
          <h2>
            {"9. Contact"}
          </h2>
          {" "}
          <p>
            {"Questions about these Terms? Email "}
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
