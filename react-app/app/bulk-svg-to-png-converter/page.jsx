import Link from "next/link";
import PageScript from "@/components/PageScript";

export const metadata = {
  "title": {
    "absolute": "Bulk SVG to PNG Converter | PNG to SVG Free"
  },
  "description": "Convert many SVG files to high-resolution PNG at once. Choose 1x, 2x, 4x or an exact width, keep transparency and download all as ZIP. Free, private.",
  "alternates": {
    "canonical": "https://pngtosvgfree.com/bulk-svg-to-png-converter"
  },
  "openGraph": {
    "title": "Bulk SVG to PNG Converter | PNG to SVG Free",
    "description": "Convert many SVG files to high-resolution PNG at once. Choose 1x, 2x, 4x or an exact width, keep transparency and download all as ZIP. Free, private.",
    "type": "website",
    "url": "https://pngtosvgfree.com/bulk-svg-to-png-converter",
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
    "title": "Bulk SVG to PNG Converter | PNG to SVG Free",
    "description": "Convert many SVG files to high-resolution PNG at once. Choose 1x, 2x, 4x or an exact width, keep transparency and download all as ZIP. Free, private.",
    "images": [
      "https://pngtosvgfree.com/og-image.png"
    ]
  }
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ":root{--bg:#f3f4fb;--card:#fff;--line:#e6e7f2;--txt:#0f1020;--mut:#6a6d85;--blue:#3d4ef5;--blue2:#2f3fe0;--vio:#8b5cf6;--vio2:#a78bfa;--lav:#ece9fe}\n*{box-sizing:border-box;margin:0;padding:0}\nhtml{scroll-behavior:smooth}\nbody{font-family:var(--font-inter),system-ui,sans-serif;background:var(--bg);color:var(--txt);-webkit-font-smoothing:antialiased;overflow-x:hidden}\nbody:before{content:\"\";position:fixed;inset:0;z-index:-1;pointer-events:none;background:radial-gradient(900px 500px at 50% -10%,#e4e0ff,transparent 70%),radial-gradient(500px 400px at 0% 60%,#efe9ff,transparent 70%),radial-gradient(500px 400px at 100% 80%,#e7ecff,transparent 70%);background-color:var(--bg)}\na{color:inherit;text-decoration:none}\nnav.top{max-width:1180px;margin:18px auto 0;display:flex;justify-content:space-between;align-items:center;padding:0 4vw;position:relative;z-index:10;gap:12px}\n.logo{font-weight:800;font-size:22px;display:flex;gap:9px;align-items:center;letter-spacing:-.03em}\n\n.navpill{display:flex;background:#fff;border:1px solid var(--line);border-radius:12px;padding:4px;box-shadow:0 2px 10px #3d4ef50d}\n.navpill a{padding:8px 15px;border-radius:9px;font-size:14px;font-weight:600;color:var(--mut);transition:.2s;white-space:nowrap}\n.navpill a:hover{color:var(--txt)}.navpill a.on{background:var(--bg);color:var(--txt)}\n.cta{display:inline-flex;align-items:center;gap:8px;background:var(--blue);color:#fff;padding:11px 18px;border-radius:11px;font-weight:600;font-size:14px;box-shadow:0 6px 18px #3d4ef54d;transition:.2s;border:0;cursor:pointer;font-family:inherit}\n.cta:hover{background:var(--blue2);transform:translateY(-1px)}\n.btn2{display:inline-flex;align-items:center;gap:8px;background:#fff;color:var(--txt);border:1px solid var(--line);padding:11px 18px;border-radius:11px;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit;transition:.2s}\n.btn2:hover{border-color:#c9cbe0}\n.menu{display:none;background:#fff;border:1px solid var(--line);border-radius:10px;width:42px;height:42px;cursor:pointer;place-items:center}\n.wrap{max-width:1180px;margin:0 auto;padding:0 4vw}\n.phead{text-align:center;padding:64px 5vw 34px;max-width:780px;margin:0 auto}\n.tag{display:inline-block;font-size:12px;font-weight:700;color:var(--vio);background:var(--lav);padding:5px 12px;border-radius:99px;margin-bottom:14px}\n.phead h1{font-size:clamp(34px,5vw,56px);font-weight:800;letter-spacing:-.04em;line-height:1.05}\n.phead h1 em{font-style:normal;background:linear-gradient(90deg,var(--blue),var(--vio));-webkit-background-clip:text;background-clip:text;color:transparent}\n.phead p{color:var(--mut);margin-top:14px;line-height:1.6;font-size:17px}\n.crumbs{font-size:13px;color:var(--mut);margin-bottom:16px}.crumbs a{color:var(--blue)}\n.box{background:#fff;border:1px solid var(--line);border-radius:22px;box-shadow:0 30px 70px -30px #3d4ef533}\n/* article / legal prose */\n.prose{max-width:760px;margin:0 auto;background:#fff;border:1px solid var(--line);border-radius:22px;padding:clamp(24px,5vw,56px);box-shadow:0 30px 70px -30px #3d4ef522}\n.prose h2{font-size:24px;letter-spacing:-.02em;margin:34px 0 12px}\n.prose h3{font-size:18px;margin:24px 0 8px}.prose code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.88em;background:#eef0fb;border-radius:5px;padding:.12em .38em}.prose pre{background:#0f1020;color:#e6e7f2;border-radius:12px;padding:16px 18px;overflow-x:auto;margin:14px 0;line-height:1.55}.prose pre code{background:none;padding:0;color:inherit;font-size:13px}.prose figure{margin:24px 0}.prose figure img{display:block;width:100%;height:auto;border-radius:14px;border:1px solid var(--line)}.prose figcaption{font-size:13.5px;line-height:1.5;color:var(--mut);margin-top:8px;text-align:center}.tldr{background:linear-gradient(135deg,#eef0ff,#f5f0ff);border:1px solid #dcdcfb;border-radius:14px;padding:16px 20px;margin:18px 0 8px}.tldr b{display:block;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--blue);margin-bottom:4px}.tldr p{margin:0}.author{display:flex;gap:14px;align-items:flex-start;border-top:1px solid var(--line);margin-top:34px;padding-top:22px}.author img{border-radius:10px;flex:none}.author b{display:block;margin-bottom:2px}.author p{margin:0;font-size:14px;color:var(--mut)}\n.prose p,.prose li{color:#3a3d55;line-height:1.8;font-size:16px}\n.prose p{margin:12px 0}\n.prose ul,.prose ol{padding-left:22px;margin:12px 0}.prose li{margin:6px 0}\n.prose a{color:var(--blue);text-decoration:underline}\n.prose .meta{color:var(--mut);font-size:14px;display:flex;gap:14px;flex-wrap:wrap;margin-bottom:6px}\n.prose .note{background:var(--lav);border-radius:14px;padding:16px 18px;color:#4c1d95;margin:20px 0;line-height:1.7}\n.prose table{width:100%;border-collapse:collapse;margin:16px 0;font-size:14.5px}\n.prose th,.prose td{border:1px solid var(--line);padding:10px 12px;text-align:left}.prose th{background:var(--bg)}\n.prose .cover{height:220px;border-radius:16px;margin-bottom:26px;display:grid;place-items:center;overflow:hidden}\n.prose .cover svg{width:120px;height:120px}\n.prose .inline-cta{display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap;background:linear-gradient(135deg,#3d4ef5,#8b5cf6);color:#fff;border-radius:16px;padding:20px 22px;margin:30px 0 6px}\n.prose .inline-cta p{color:#fff;margin:0;font-weight:600}.prose .inline-cta a{background:#fff;color:var(--blue);text-decoration:none;padding:10px 16px;border-radius:10px;font-weight:700;font-size:14px}\n/* blog cards */\n.posts{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}\n.post{background:#fff;border:1px solid var(--line);border-radius:18px;padding:10px;transition:.25s;display:flex;flex-direction:column}\n.post:hover{transform:translateY(-5px);box-shadow:0 24px 50px -10px #3d4ef533}\n.post .th{height:160px;border-radius:12px;display:grid;place-items:center;color:#fff}\n.post .th svg{width:70px;height:70px}\n.post .bd{padding:14px 8px 8px;display:flex;flex-direction:column;flex:1}\n.post .bd small{color:#6d28d9;font-weight:700;font-size:12px}\n.post .bd b{font-size:17px;letter-spacing:-.01em;margin-top:6px;line-height:1.35}\n.post .bd p{color:var(--mut);font-size:14px;line-height:1.55;margin-top:8px;flex:1}\n.post .bd span{font-size:12.5px;color:var(--mut);margin-top:12px}\n/* footer */\nfooter.site{max-width:1180px;margin:100px auto 0;padding:46px 4vw 30px;border-top:1px solid var(--line)}\n.fgrid{display:grid;grid-template-columns:1.4fr 1fr 1.3fr 1fr 1fr;gap:30px}\n.fgrid p{color:var(--mut);font-size:14px;line-height:1.6;margin-top:12px;max-width:300px}\n.fgrid h6,.fgrid .fh{font-size:13px;font-weight:700;margin-bottom:12px}\n.fgrid a.logo{display:flex;color:var(--txt)}.fgrid a:not(.logo){display:block;color:var(--mut);font-size:14px;margin:8px 0;transition:.15s}.fgrid a:hover{color:var(--blue)}\n.fbot{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-top:34px;padding-top:20px;border-top:1px solid var(--line);color:var(--mut);font-size:13px}\n.ad-slot{display:none}\n.cookie{position:fixed;left:16px;right:16px;bottom:16px;max-width:520px;margin:0 auto;background:#fff;border:1px solid var(--line);border-radius:16px;padding:16px 18px;box-shadow:0 20px 50px -10px #0f102033;z-index:60;display:none;gap:14px;align-items:center;font-size:13.5px;color:#3a3d55;line-height:1.5}\n.cookie.on{display:flex}.cookie a{color:var(--blue);text-decoration:underline}\n.cookie button{flex-shrink:0}\n.reveal{opacity:0;transform:translateY(26px);transition:.7s cubic-bezier(.2,.7,.2,1)}.reveal.in{opacity:1;transform:none}\n@media(max-width:960px){.navpill{display:none;position:absolute;top:56px;left:4vw;right:4vw;flex-direction:column;z-index:30}.navpill.open{display:flex}.menu{display:grid}nav.top .cta{display:none}.posts{grid-template-columns:1fr 1fr}.fgrid{grid-template-columns:1fr 1fr}}\n@media(max-width:600px){.posts{grid-template-columns:1fr}.fgrid{grid-template-columns:1fr}}\n.tool{padding:22px}\n.drop{border:2px dashed #d4d0fb;border-radius:16px;background:linear-gradient(180deg,#fbfaff,#f5f3ff);padding:46px 20px;text-align:center;cursor:pointer;transition:.25s}\n.drop:hover,.drop.on{border-color:var(--vio);transform:translateY(-2px);box-shadow:0 18px 40px #8b5cf622}\n.drop .ic{width:60px;height:60px;margin:0 auto 14px;border-radius:17px;background:linear-gradient(135deg,var(--blue),var(--vio));color:#fff;display:grid;place-items:center;box-shadow:0 12px 28px #6d5dfc55}\n.drop h3{font-size:20px;letter-spacing:-.02em;margin-bottom:6px}.drop small{color:var(--mut);font-size:13px}\n.opts{display:flex;gap:16px;flex-wrap:wrap;align-items:end;margin-top:18px;padding:16px;background:var(--bg);border:1px solid var(--line);border-radius:14px}\n.opts label{font-size:12px;font-weight:700;color:var(--mut);display:block;margin-bottom:6px}\n.seg{display:inline-flex;background:#fff;border:1px solid var(--line);border-radius:10px;padding:3px}\n.seg button{background:none;border:0;color:var(--mut);font-weight:600;font-size:13px;font-family:inherit;padding:7px 12px;border-radius:7px;cursor:pointer}\n.seg button.on{background:var(--lav);color:#5b21b6}\n.opts input[type=number]{width:110px;padding:9px 10px;border:1px solid var(--line);border-radius:10px;font-family:inherit;font-size:14px}\n.res{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px;margin-top:18px}\n.ri{border:1px solid var(--line);border-radius:14px;padding:8px;background:#fff}\n.rv{aspect-ratio:1;border-radius:10px;background:repeating-conic-gradient(#f0f0f8 0 25%,#fff 0 50%) 0 0/16px 16px;display:grid;place-items:center;overflow:hidden}\n.rv img{max-width:90%;max-height:90%}\n.ri b{display:block;font-size:13px;margin:10px 4px 2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ri small{color:var(--mut);font-size:12px;margin:0 4px}\n.ri .cta{width:100%;justify-content:center;margin-top:8px;padding:9px;font-size:13px;box-shadow:none}\n.bar{display:none;justify-content:space-between;align-items:center;gap:10px;margin-top:18px;flex-wrap:wrap}.bar.on{display:flex}\n.toast{position:fixed;bottom:24px;left:50%;transform:translate(-50%,120px);background:var(--txt);color:#fff;padding:11px 18px;border-radius:11px;font-weight:600;font-size:14px;transition:.3s;z-index:70}.toast.s{transform:translate(-50%,0)}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebApplication\",\"name\":\"Bulk SVG to PNG converter\",\"url\":\"https://pngtosvgfree.com/bulk-svg-to-png-converter\",\"description\":\"Convert many SVG files to high-resolution PNG at once. Choose 1x, 2x, 4x or an exact width, keep transparency and download all as ZIP. Free, private.\",\"applicationCategory\":\"MultimediaApplication\",\"operatingSystem\":\"Any (runs in a web browser)\",\"browserRequirements\":\"Requires JavaScript and a modern browser\",\"isAccessibleForFree\":true,\"offers\":{\"@type\":\"Offer\",\"price\":\"0\",\"priceCurrency\":\"USD\"},\"featureList\":[\"Convert many SVG files to PNG at once\",\"1×, 2×, 4× or exact width output\",\"Transparent or white background\",\"Download individually or as a ZIP\",\"Runs entirely in the browser\"],\"publisher\":{\"@id\":\"https://pngtosvgfree.com/#organization\"}},{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://pngtosvgfree.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Bulk SVG to PNG Converter\",\"item\":\"https://pngtosvgfree.com/bulk-svg-to-png-converter\"}]}]}" }} />
      {" "}
      <header className="phead">
        <span className="tag">
          {"Free tool"}
        </span>
        <h1>
          {"Bulk "}
          <em>
            {"SVG to PNG"}
          </em>
          {" converter"}
        </h1>
        <p>
          {"Convert many SVG files to high-resolution PNG at once. Pick a size, keep transparency or add a white background — all in your browser."}
        </p>
      </header>
      {" "}
      <div className="wrap">
        <div className="box tool">
          {" "}
          <div className="drop" id="drop">
            <div className="ic">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 16V4" />
                <path d="M6 10l6-6 6 6" />
                <path d="M4 20h16" />
              </svg>
            </div>
            <h3>
              {"Drop your SVG files here"}
            </h3>
            <small>
              {"or click to browse · select as many files as you like"}
            </small>
            <input type="file" id="file" accept=".svg,image/svg+xml" multiple hidden />
          </div>
          {" "}
          <div className="opts">
            {" "}
            <div>
              <label>
                {"Size"}
              </label>
              <div className="seg" id="scale">
                <button data-s="1">
                  {"1×"}
                </button>
                <button data-s="2" className="on">
                  {"2×"}
                </button>
                <button data-s="4">
                  {"4×"}
                </button>
                <button data-s="w">
                  {"Width"}
                </button>
              </div>
            </div>
            {" "}
            <div id="wbox" style={{ "display": "none" }}>
              <label>
                {"Width (px)"}
              </label>
              <input type="number" id="w" defaultValue="1024" min="16" max="8000" />
            </div>
            {" "}
            <div>
              <label>
                {"Background"}
              </label>
              <div className="seg" id="bg">
                <button data-b="t" className="on">
                  {"Transparent"}
                </button>
                <button data-b="w">
                  {"White"}
                </button>
              </div>
            </div>
            {" "}
          </div>
          {" "}
          <div className="bar" id="bar">
            <b id="cnt" />
            <div style={{ "display": "flex", "gap": "8px" }}>
              <button className="btn2" id="clr">
                {"Clear"}
              </button>
              <button className="cta" id="all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4v12" />
                  <path d="M6 10l6 6 6-6" />
                  <path d="M4 20h16" />
                </svg>
                {" Download all (ZIP)"}
              </button>
            </div>
          </div>
          {" "}
          <div className="res" id="res" />
          {" "}
        </div>
        {" "}
        <div className="prose reveal" style={{ "marginTop": "50px" }}>
          {" "}
          <h2 style={{ "marginTop": "0" }}>
            {"How to convert SVG to PNG"}
          </h2>
          {" "}
          <ol>
            <li>
              {"Drop one or more SVG files into the box above, or click to choose them."}
            </li>
            <li>
              {"Choose an output size — 1×, 2× or 4× the SVG's own size, or an exact width in pixels."}
            </li>
            <li>
              {"Keep the background transparent or switch to white."}
            </li>
            <li>
              {"Download each PNG individually, or everything at once as a ZIP file."}
            </li>
          </ol>
          {" "}
          <h2>
            {"Why convert SVG to PNG?"}
          </h2>
          {" "}
          <p>
            {"SVG is perfect for editing and scaling, but some platforms — social networks, marketplaces, email newsletters and many office apps — only accept raster images. Exporting a high-resolution PNG lets you use your vector artwork anywhere while keeping edges sharp at the size you need."}
          </p>
          {" "}
          <h2>
            {"Is it private?"}
          </h2>
          {" "}
          <p>
            {"Yes. Files are rendered by your own browser and never uploaded to a server. When you close the page, they are gone."}
          </p>
          {" "}
          <h2>
            {"Which size should I choose?"}
          </h2>
          <p>
            {"An SVG has no fixed resolution, so you decide how many pixels the PNG gets. "}
            <strong>
              {"1×"}
            </strong>
            {" uses the width and height written in the SVG file and suits on-screen use at normal size. "}
            <strong>
              {"2×"}
            </strong>
            {" doubles every dimension and is a good default for sharp results on high-density (Retina) screens. "}
            <strong>
              {"4×"}
            </strong>
            {" is best for print, large banners or when you plan to crop the image later. Choose "}
            <strong>
              {"Width"}
            </strong>
            {" when a platform asks for an exact size, such as 1080 px for a social post; the height is calculated automatically so the image keeps its proportions."}
          </p>
          <h2>
            {"Transparent or white background?"}
          </h2>
          <p>
            {"Keep the background "}
            <strong>
              {"transparent"}
            </strong>
            {" for logos, icons and stickers that will sit on top of other colours. Choose "}
            <strong>
              {"white"}
            </strong>
            {" when the destination does not support transparency — some marketplaces, email clients and document editors show transparent areas as black."}
          </p>
          <h2>
            {"Troubleshooting"}
          </h2>
          <ul>
            <li>
              <strong>
                {"A file shows “Could not read this SVG”."}
              </strong>
              {" The file may be damaged or rely on external images or fonts the browser cannot load. Open it in a design tool, convert text to outlines, embed any images and save it again."}
            </li>
            <li>
              <strong>
                {"Text looks different."}
              </strong>
              {" If the SVG uses a font that is not installed on your device, the browser substitutes another one. Converting text to paths before exporting fixes this."}
            </li>
            <li>
              <strong>
                {"The ZIP does not download."}
              </strong>
              {" Some browsers block automatic downloads; allow downloads for this site, or save each PNG individually."}
            </li>
          </ul>
          {" "}
          <p>
            {"Need the opposite? Use our "}
            <Link href="/">
              {"PNG to SVG converter"}
            </Link>
            {" to turn raster images into vectors."}
          </p>
          {" "}
        </div>
      </div>
      {" "}
      <div className="toast" id="toast" />
      <PageScript name="bulk" />
    </>
  );
}
