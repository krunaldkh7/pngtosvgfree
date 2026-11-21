import Link from "next/link";
import PageScript from "@/components/PageScript";

export const metadata = {
  "title": {
    "absolute": "Free SVG Gallery: Vector Illustrations | PNG to SVG Free"
  },
  "description": "Download free SVG illustrations for Cricut, Silhouette, web and print. Copy the code or save the file, recolour easily, and use in commercial projects.",
  "alternates": {
    "canonical": "https://pngtosvgfree.com/gallery"
  },
  "openGraph": {
    "title": "Free SVG Gallery: Vector Illustrations | PNG to SVG Free",
    "description": "Download free SVG illustrations for Cricut, Silhouette, web and print. Copy the code or save the file, recolour easily, and use in commercial projects.",
    "type": "website",
    "url": "https://pngtosvgfree.com/gallery",
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
    "title": "Free SVG Gallery: Vector Illustrations | PNG to SVG Free",
    "description": "Download free SVG illustrations for Cricut, Silhouette, web and print. Copy the code or save the file, recolour easily, and use in commercial projects.",
    "images": [
      "https://pngtosvgfree.com/og-image.png"
    ]
  }
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ":root{--bg:#f3f4fb;--card:#fff;--line:#e6e7f2;--txt:#0f1020;--mut:#6a6d85;--blue:#3d4ef5;--blue2:#2f3fe0;--vio:#8b5cf6;--vio2:#a78bfa;--lav:#ece9fe}\n*{box-sizing:border-box;margin:0;padding:0}\nhtml{scroll-behavior:smooth}\nbody{font-family:var(--font-inter),system-ui,sans-serif;background:var(--bg);color:var(--txt);-webkit-font-smoothing:antialiased;overflow-x:hidden}\nbody:before{content:\"\";position:fixed;inset:0;z-index:-1;pointer-events:none;background:radial-gradient(900px 500px at 50% -10%,#e4e0ff,transparent 70%),radial-gradient(500px 400px at 0% 60%,#efe9ff,transparent 70%),radial-gradient(500px 400px at 100% 80%,#e7ecff,transparent 70%);background-color:var(--bg)}\na{color:inherit;text-decoration:none}\nnav.top{max-width:1180px;margin:18px auto 0;display:flex;justify-content:space-between;align-items:center;padding:0 4vw;position:relative;z-index:10;gap:12px}\n.logo{font-weight:800;font-size:22px;display:flex;gap:9px;align-items:center;letter-spacing:-.03em}\n\n.navpill{display:flex;background:#fff;border:1px solid var(--line);border-radius:12px;padding:4px;box-shadow:0 2px 10px #3d4ef50d}\n.navpill a{padding:8px 15px;border-radius:9px;font-size:14px;font-weight:600;color:var(--mut);transition:.2s;white-space:nowrap}\n.navpill a:hover{color:var(--txt)}.navpill a.on{background:var(--bg);color:var(--txt)}\n.cta{display:inline-flex;align-items:center;gap:8px;background:var(--blue);color:#fff;padding:11px 18px;border-radius:11px;font-weight:600;font-size:14px;box-shadow:0 6px 18px #3d4ef54d;transition:.2s;border:0;cursor:pointer;font-family:inherit}\n.cta:hover{background:var(--blue2);transform:translateY(-1px)}\n.btn2{display:inline-flex;align-items:center;gap:8px;background:#fff;color:var(--txt);border:1px solid var(--line);padding:11px 18px;border-radius:11px;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit;transition:.2s}\n.btn2:hover{border-color:#c9cbe0}\n.menu{display:none;background:#fff;border:1px solid var(--line);border-radius:10px;width:42px;height:42px;cursor:pointer;place-items:center}\n.wrap{max-width:1180px;margin:0 auto;padding:0 4vw}\n.phead{text-align:center;padding:64px 5vw 34px;max-width:780px;margin:0 auto}\n.tag{display:inline-block;font-size:12px;font-weight:700;color:var(--vio);background:var(--lav);padding:5px 12px;border-radius:99px;margin-bottom:14px}\n.phead h1{font-size:clamp(34px,5vw,56px);font-weight:800;letter-spacing:-.04em;line-height:1.05}\n.phead h1 em{font-style:normal;background:linear-gradient(90deg,var(--blue),var(--vio));-webkit-background-clip:text;background-clip:text;color:transparent}\n.phead p{color:var(--mut);margin-top:14px;line-height:1.6;font-size:17px}\n.crumbs{font-size:13px;color:var(--mut);margin-bottom:16px}.crumbs a{color:var(--blue)}\n.box{background:#fff;border:1px solid var(--line);border-radius:22px;box-shadow:0 30px 70px -30px #3d4ef533}\n/* article / legal prose */\n.prose{max-width:760px;margin:0 auto;background:#fff;border:1px solid var(--line);border-radius:22px;padding:clamp(24px,5vw,56px);box-shadow:0 30px 70px -30px #3d4ef522}\n.prose h2{font-size:24px;letter-spacing:-.02em;margin:34px 0 12px}\n.prose h3{font-size:18px;margin:24px 0 8px}.prose code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.88em;background:#eef0fb;border-radius:5px;padding:.12em .38em}.prose pre{background:#0f1020;color:#e6e7f2;border-radius:12px;padding:16px 18px;overflow-x:auto;margin:14px 0;line-height:1.55}.prose pre code{background:none;padding:0;color:inherit;font-size:13px}.tldr{background:linear-gradient(135deg,#eef0ff,#f5f0ff);border:1px solid #dcdcfb;border-radius:14px;padding:16px 20px;margin:18px 0 8px}.tldr b{display:block;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--blue);margin-bottom:4px}.tldr p{margin:0}.author{display:flex;gap:14px;align-items:flex-start;border-top:1px solid var(--line);margin-top:34px;padding-top:22px}.author img{border-radius:10px;flex:none}.author b{display:block;margin-bottom:2px}.author p{margin:0;font-size:14px;color:var(--mut)}\n.prose p,.prose li{color:#3a3d55;line-height:1.8;font-size:16px}\n.prose p{margin:12px 0}\n.prose ul,.prose ol{padding-left:22px;margin:12px 0}.prose li{margin:6px 0}\n.prose a{color:var(--blue);text-decoration:underline}\n.prose .meta{color:var(--mut);font-size:14px;display:flex;gap:14px;flex-wrap:wrap;margin-bottom:6px}\n.prose .note{background:var(--lav);border-radius:14px;padding:16px 18px;color:#4c1d95;margin:20px 0;line-height:1.7}\n.prose table{width:100%;border-collapse:collapse;margin:16px 0;font-size:14.5px}\n.prose th,.prose td{border:1px solid var(--line);padding:10px 12px;text-align:left}.prose th{background:var(--bg)}\n.prose .cover{height:220px;border-radius:16px;margin-bottom:26px;display:grid;place-items:center;overflow:hidden}\n.prose .cover svg{width:120px;height:120px}\n.prose .inline-cta{display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap;background:linear-gradient(135deg,#3d4ef5,#8b5cf6);color:#fff;border-radius:16px;padding:20px 22px;margin:30px 0 6px}\n.prose .inline-cta p{color:#fff;margin:0;font-weight:600}.prose .inline-cta a{background:#fff;color:var(--blue);text-decoration:none;padding:10px 16px;border-radius:10px;font-weight:700;font-size:14px}\n/* blog cards */\n.posts{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}\n.post{background:#fff;border:1px solid var(--line);border-radius:18px;padding:10px;transition:.25s;display:flex;flex-direction:column}\n.post:hover{transform:translateY(-5px);box-shadow:0 24px 50px -10px #3d4ef533}\n.post .th{height:160px;border-radius:12px;display:grid;place-items:center;color:#fff}\n.post .th svg{width:70px;height:70px}\n.post .bd{padding:14px 8px 8px;display:flex;flex-direction:column;flex:1}\n.post .bd small{color:var(--vio);font-weight:700;font-size:12px}\n.post .bd b{font-size:17px;letter-spacing:-.01em;margin-top:6px;line-height:1.35}\n.post .bd p{color:var(--mut);font-size:14px;line-height:1.55;margin-top:8px;flex:1}\n.post .bd span{font-size:12.5px;color:var(--mut);margin-top:12px}\n/* footer */\nfooter.site{max-width:1180px;margin:100px auto 0;padding:46px 4vw 30px;border-top:1px solid var(--line)}\n.fgrid{display:grid;grid-template-columns:1.4fr 1fr 1.3fr 1fr 1fr;gap:30px}\n.fgrid p{color:var(--mut);font-size:14px;line-height:1.6;margin-top:12px;max-width:300px}\n.fgrid h6{font-size:13px;font-weight:700;margin-bottom:12px}\n.fgrid a.logo{display:flex;color:var(--txt)}.fgrid a:not(.logo){display:block;color:var(--mut);font-size:14px;margin:8px 0;transition:.15s}.fgrid a:hover{color:var(--blue)}\n.fbot{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-top:34px;padding-top:20px;border-top:1px solid var(--line);color:var(--mut);font-size:13px}\n.ad-slot{display:none}\n.cookie{position:fixed;left:16px;right:16px;bottom:16px;max-width:520px;margin:0 auto;background:#fff;border:1px solid var(--line);border-radius:16px;padding:16px 18px;box-shadow:0 20px 50px -10px #0f102033;z-index:60;display:none;gap:14px;align-items:center;font-size:13.5px;color:#3a3d55;line-height:1.5}\n.cookie.on{display:flex}.cookie a{color:var(--blue);text-decoration:underline}\n.cookie button{flex-shrink:0}\n.reveal{opacity:0;transform:translateY(26px);transition:.7s cubic-bezier(.2,.7,.2,1)}.reveal.in{opacity:1;transform:none}\n@media(max-width:960px){.navpill{display:none;position:absolute;top:56px;left:4vw;right:4vw;flex-direction:column;z-index:30}.navpill.open{display:flex}.menu{display:grid}nav.top .cta{display:none}.posts{grid-template-columns:1fr 1fr}.fgrid{grid-template-columns:1fr 1fr}}\n@media(max-width:600px){.posts{grid-template-columns:1fr}.fgrid{grid-template-columns:1fr}}\n.gal{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}\n.gi{background:#fff;border:1px solid var(--line);border-radius:18px;padding:10px;transition:.25s}\n.gi:hover{transform:translateY(-5px);box-shadow:0 24px 50px -10px #3d4ef533}\n.gv{border-radius:12px;overflow:hidden;aspect-ratio:1}.gv svg{width:100%;height:100%;display:block}\n.gb{display:flex;justify-content:space-between;align-items:center;padding:12px 6px 4px}.gb b{font-size:14.5px}.gb div{display:flex;gap:6px}\n.ib{width:34px;height:34px;border-radius:9px;border:1px solid var(--line);background:#fff;color:var(--txt);cursor:pointer;display:grid;place-items:center;transition:.15s}.ib:hover{border-color:var(--vio);color:var(--vio)}\n.toast{position:fixed;bottom:24px;left:50%;transform:translate(-50%,120px);background:var(--txt);color:#fff;padding:11px 18px;border-radius:11px;font-weight:600;font-size:14px;transition:.3s;z-index:70}.toast.s{transform:translate(-50%,0)}\n@media(max-width:960px){.gal{grid-template-columns:repeat(2,1fr)}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://pngtosvgfree.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Free SVG Gallery\",\"item\":\"https://pngtosvgfree.com/gallery\"}]}]}" }} />
      {" "}
      <header className="phead">
        <span className="tag">
          {"Gallery"}
        </span>
        <h1>
          {"Free "}
          <em>
            {"SVG gallery"}
          </em>
        </h1>
        <p>
          {"Original vector illustrations you can download and use in personal and commercial projects — no attribution required."}
        </p>
      </header>
      {" "}
      <div className="wrap">
        <div className="gal reveal">
          <div className="gi">
            <div className="gv">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
                <rect width="200" height="200" fill="#fff7ed" />
                <circle cx="140" cy="70" r="28" fill="#f59e0b" />
                <path d="M0 170 L60 90 L100 140 L130 105 L200 170 Z" fill="#7c3aed" />
                <path d="M0 200 L0 165 L70 120 L120 165 L160 140 L200 165 L200 200Z" fill="#4c1d95" />
              </svg>
            </div>
            <div className="gb">
              <b>
                {"Mountain sunrise"}
              </b>
              <div>
                <button className="ib" data-i="0" data-a="dl" title="Download SVG">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4v12" />
                    <path d="M6 10l6 6 6-6" />
                    <path d="M4 20h16" />
                  </svg>
                </button>
                <button className="ib" data-i="0" data-a="cp" title="Copy SVG code">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="12" height="12" rx="2" />
                    <path d="M5 15H4a1 1 0 01-1-1V4a1 1 0 011-1h10a1 1 0 011 1v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="gi">
            <div className="gv">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
                <rect width="200" height="200" fill="#f0fdf4" />
                <path d="M50 150 C50 80 100 40 160 40 C160 110 120 150 50 150Z" fill="#16a34a" />
                <path d="M50 150 L130 70" stroke="#dcfce7" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="gb">
              <b>
                {"Leaf"}
              </b>
              <div>
                <button className="ib" data-i="1" data-a="dl" title="Download SVG">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4v12" />
                    <path d="M6 10l6 6 6-6" />
                    <path d="M4 20h16" />
                  </svg>
                </button>
                <button className="ib" data-i="1" data-a="cp" title="Copy SVG code">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="12" height="12" rx="2" />
                    <path d="M5 15H4a1 1 0 01-1-1V4a1 1 0 011-1h10a1 1 0 011 1v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="gi">
            <div className="gv">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
                <rect width="200" height="200" fill="#fef3c7" />
                <rect x="55" y="80" width="80" height="80" rx="14" fill="#92400e" />
                <path d="M135 95 h12 a18 18 0 0 1 0 36 h-12" fill="none" stroke="#92400e" strokeWidth="10" />
                <path d="M75 45 c-8 10 8 15 0 25 M100 45 c-8 10 8 15 0 25" stroke="#b45309" strokeWidth="5" fill="none" strokeLinecap="round" />
              </svg>
            </div>
            <div className="gb">
              <b>
                {"Coffee cup"}
              </b>
              <div>
                <button className="ib" data-i="2" data-a="dl" title="Download SVG">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4v12" />
                    <path d="M6 10l6 6 6-6" />
                    <path d="M4 20h16" />
                  </svg>
                </button>
                <button className="ib" data-i="2" data-a="cp" title="Copy SVG code">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="12" height="12" rx="2" />
                    <path d="M5 15H4a1 1 0 01-1-1V4a1 1 0 011-1h10a1 1 0 011 1v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="gi">
            <div className="gv">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
                <rect width="200" height="200" fill="#fdf2f8" />
                <circle cx="100" cy="100" r="70" fill="#ec4899" />
                <path d="M100 140 C40 100 60 55 100 80 C140 55 160 100 100 140Z" fill="#fff" />
              </svg>
            </div>
            <div className="gb">
              <b>
                {"Heart badge"}
              </b>
              <div>
                <button className="ib" data-i="3" data-a="dl" title="Download SVG">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4v12" />
                    <path d="M6 10l6 6 6-6" />
                    <path d="M4 20h16" />
                  </svg>
                </button>
                <button className="ib" data-i="3" data-a="cp" title="Copy SVG code">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="12" height="12" rx="2" />
                    <path d="M5 15H4a1 1 0 01-1-1V4a1 1 0 011-1h10a1 1 0 011 1v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="gi">
            <div className="gv">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
                <rect width="200" height="200" fill="#eef2ff" />
                <path d="M30 100 L170 40 L130 165 L100 120 Z" fill="#3d4ef5" />
                <path d="M100 120 L170 40 L85 110 Z" fill="#a5b4fc" />
              </svg>
            </div>
            <div className="gb">
              <b>
                {"Paper plane"}
              </b>
              <div>
                <button className="ib" data-i="4" data-a="dl" title="Download SVG">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4v12" />
                    <path d="M6 10l6 6 6-6" />
                    <path d="M4 20h16" />
                  </svg>
                </button>
                <button className="ib" data-i="4" data-a="cp" title="Copy SVG code">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="12" height="12" rx="2" />
                    <path d="M5 15H4a1 1 0 01-1-1V4a1 1 0 011-1h10a1 1 0 011 1v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="gi">
            <div className="gv">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
                <rect width="200" height="200" fill="#fefce8" />
                <path d="M100 25 L120 80 L178 80 L131 113 L149 170 L100 136 L51 170 L69 113 L22 80 L80 80Z" fill="#eab308" />
              </svg>
            </div>
            <div className="gb">
              <b>
                {"Star burst"}
              </b>
              <div>
                <button className="ib" data-i="5" data-a="dl" title="Download SVG">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4v12" />
                    <path d="M6 10l6 6 6-6" />
                    <path d="M4 20h16" />
                  </svg>
                </button>
                <button className="ib" data-i="5" data-a="cp" title="Copy SVG code">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="12" height="12" rx="2" />
                    <path d="M5 15H4a1 1 0 01-1-1V4a1 1 0 011-1h10a1 1 0 011 1v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="gi">
            <div className="gv">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
                <rect width="200" height="200" fill="#f8fafc" />
                <path d="M45 70 L60 30 L85 60 L115 60 L140 30 L155 70 C170 140 30 140 45 70Z" fill="#0f1020" />
                <circle cx="80" cy="95" r="8" fill="#fde047" />
                <circle cx="120" cy="95" r="8" fill="#fde047" />
                <path d="M95 112 h10 l-5 6z" fill="#f9a8d4" />
              </svg>
            </div>
            <div className="gb">
              <b>
                {"Cat face"}
              </b>
              <div>
                <button className="ib" data-i="6" data-a="dl" title="Download SVG">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4v12" />
                    <path d="M6 10l6 6 6-6" />
                    <path d="M4 20h16" />
                  </svg>
                </button>
                <button className="ib" data-i="6" data-a="cp" title="Copy SVG code">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="12" height="12" rx="2" />
                    <path d="M5 15H4a1 1 0 01-1-1V4a1 1 0 011-1h10a1 1 0 011 1v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="gi">
            <div className="gv">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
                <rect width="200" height="200" fill="#ecfeff" />
                <path d="M0 120 C30 90 60 150 100 120 C140 90 170 150 200 120 L200 200 L0 200Z" fill="#06b6d4" />
                <path d="M0 150 C30 125 60 175 100 150 C140 125 170 175 200 150 L200 200 L0 200Z" fill="#0e7490" />
              </svg>
            </div>
            <div className="gb">
              <b>
                {"Wave"}
              </b>
              <div>
                <button className="ib" data-i="7" data-a="dl" title="Download SVG">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4v12" />
                    <path d="M6 10l6 6 6-6" />
                    <path d="M4 20h16" />
                  </svg>
                </button>
                <button className="ib" data-i="7" data-a="cp" title="Copy SVG code">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="12" height="12" rx="2" />
                    <path d="M5 15H4a1 1 0 01-1-1V4a1 1 0 011-1h10a1 1 0 011 1v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="gi">
            <div className="gv">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
                <rect width="200" height="200" fill="#fef2f2" />
                <path d="M100 25 C130 55 135 110 120 145 L80 145 C65 110 70 55 100 25Z" fill="#e5e7eb" />
                <circle cx="100" cy="85" r="13" fill="#3d4ef5" />
                <path d="M80 120 L55 155 L82 145Z M120 120 L145 155 L118 145Z" fill="#ef4444" />
                <path d="M88 145 L100 180 L112 145Z" fill="#f59e0b" />
              </svg>
            </div>
            <div className="gb">
              <b>
                {"Rocket"}
              </b>
              <div>
                <button className="ib" data-i="8" data-a="dl" title="Download SVG">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4v12" />
                    <path d="M6 10l6 6 6-6" />
                    <path d="M4 20h16" />
                  </svg>
                </button>
                <button className="ib" data-i="8" data-a="cp" title="Copy SVG code">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="12" height="12" rx="2" />
                    <path d="M5 15H4a1 1 0 01-1-1V4a1 1 0 011-1h10a1 1 0 011 1v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="gi">
            <div className="gv">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
                <rect width="200" height="200" fill="#faf5ff" />
                <g fill="#a855f7">
                  <circle cx="100" cy="62" r="24" />
                  <circle cx="138" cy="100" r="24" />
                  <circle cx="100" cy="138" r="24" />
                  <circle cx="62" cy="100" r="24" />
                </g>
                <circle cx="100" cy="100" r="18" fill="#fde047" />
              </svg>
            </div>
            <div className="gb">
              <b>
                {"Flower"}
              </b>
              <div>
                <button className="ib" data-i="9" data-a="dl" title="Download SVG">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4v12" />
                    <path d="M6 10l6 6 6-6" />
                    <path d="M4 20h16" />
                  </svg>
                </button>
                <button className="ib" data-i="9" data-a="cp" title="Copy SVG code">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="12" height="12" rx="2" />
                    <path d="M5 15H4a1 1 0 01-1-1V4a1 1 0 011-1h10a1 1 0 011 1v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="gi">
            <div className="gv">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
                <rect width="200" height="200" fill="#1e1b4b" />
                <path d="M120 40 A60 60 0 1 0 160 140 A48 48 0 1 1 120 40Z" fill="#fde68a" />
                <g fill="#fff">
                  <circle cx="50" cy="50" r="3" />
                  <circle cx="70" cy="150" r="2" />
                  <circle cx="160" cy="60" r="2.5" />
                </g>
              </svg>
            </div>
            <div className="gb">
              <b>
                {"Moon & stars"}
              </b>
              <div>
                <button className="ib" data-i="10" data-a="dl" title="Download SVG">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4v12" />
                    <path d="M6 10l6 6 6-6" />
                    <path d="M4 20h16" />
                  </svg>
                </button>
                <button className="ib" data-i="10" data-a="cp" title="Copy SVG code">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="12" height="12" rx="2" />
                    <path d="M5 15H4a1 1 0 01-1-1V4a1 1 0 011-1h10a1 1 0 011 1v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="gi">
            <div className="gv">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
                <rect width="200" height="200" fill="#fff7ed" />
                <path d="M40 50 L80 90 L120 90 L160 50 L150 110 L100 165 L50 110Z" fill="#ea580c" />
                <path d="M70 115 L100 165 L130 115 L100 125Z" fill="#fff" />
                <circle cx="82" cy="108" r="5" fill="#0f1020" />
                <circle cx="118" cy="108" r="5" fill="#0f1020" />
              </svg>
            </div>
            <div className="gb">
              <b>
                {"Geometric fox"}
              </b>
              <div>
                <button className="ib" data-i="11" data-a="dl" title="Download SVG">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4v12" />
                    <path d="M6 10l6 6 6-6" />
                    <path d="M4 20h16" />
                  </svg>
                </button>
                <button className="ib" data-i="11" data-a="cp" title="Copy SVG code">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="12" height="12" rx="2" />
                    <path d="M5 15H4a1 1 0 01-1-1V4a1 1 0 011-1h10a1 1 0 011 1v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {" "}
        <div className="prose" style={{ "marginTop": "50px" }}>
          <h2 style={{ "marginTop": "0" }}>
            {"How to use these free SVG files"}
          </h2>
          <p>
            {"Every illustration in this gallery is a hand-built vector file, so it stays perfectly sharp whether you print it on a sticker, cut it from vinyl or use it as a website icon. Click "}
            <strong>
              {"Download"}
            </strong>
            {" to save the .svg file, or "}
            <strong>
              {"Copy"}
            </strong>
            {" to put the SVG code on your clipboard and paste it straight into your HTML, Figma or Inkscape."}
          </p>
          <h3>
            {"For cutting machines"}
          </h3>
          <p>
            {"Upload the downloaded file to Cricut Design Space or Silhouette Studio as you would any SVG. Shapes with several colours import as separate layers, which you can cut from different vinyl or cardstock colours. If you want a single-colour cut, weld or attach the layers before cutting."}
          </p>
          <h3>
            {"For design tools and the web"}
          </h3>
          <p>
            {"Open the file in Figma, Illustrator, Inkscape or Canva to change colours, resize it or combine it with your own work. On a website you can use the file in an "}
            <code>
              {"<img>"}
            </code>
            {" tag or paste the code inline, then style it with CSS."}
          </p>
          <h3>
            {"Changing colours"}
          </h3>
          <p>
            {"Each SVG uses plain fill colours, so recolouring is easy: select a shape in your design tool and pick a new fill, or edit the "}
            <code>
              {"fill"}
            </code>
            {" values in the code with any text editor."}
          </p>
          <h2>
            {"License"}
          </h2>
          <p>
            {"All illustrations in this gallery were created by the PNG to SVG Free team. You may use, modify and redistribute them in personal and commercial projects, including cutting-machine crafts and merchandise. You may not sell the files themselves as a standalone clip-art pack or claim them as your own original artwork."}
          </p>
          <p>
            {"Want to turn your own artwork into SVG? Use our free "}
            <Link href="/">
              {"PNG to SVG converter"}
            </Link>
            {"."}
          </p>
        </div>
      </div>
      {" "}
      <div className="toast" id="toast" />
      <PageScript name="gallery" />
    </>
  );
}
