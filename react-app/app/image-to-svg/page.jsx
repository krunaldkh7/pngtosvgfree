import Link from "next/link";
import PageScript from "@/components/PageScript";

export const metadata = {
  "title": {
    "absolute": "Image to SVG Converter — Vectorize Images Free"
  },
  "description": "Vectorize any image online: convert PNG, JPG, WEBP, GIF, BMP or AVIF to SVG free. Automatic tracing, colour control, no signup and no upload to a server.",
  "alternates": {
    "canonical": "https://pngtosvgfree.com/image-to-svg"
  },
  "openGraph": {
    "title": "Image to SVG Converter — Vectorize Images Free",
    "description": "Vectorize any image online: convert PNG, JPG, WEBP, GIF, BMP or AVIF to SVG free. Automatic tracing, colour control, no signup and no upload to a server.",
    "type": "website",
    "url": "https://pngtosvgfree.com/image-to-svg",
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
    "title": "Image to SVG Converter — Vectorize Images Free",
    "description": "Vectorize any image online: convert PNG, JPG, WEBP, GIF, BMP or AVIF to SVG free. Automatic tracing, colour control, no signup and no upload to a server.",
    "images": [
      "https://pngtosvgfree.com/og-image.png"
    ]
  }
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "\n:root{--bg:#f3f4fb;--card:#fff;--line:#e6e7f2;--txt:#0f1020;--mut:#6a6d85;--blue:#3d4ef5;--blue2:#2f3fe0;--vio:#8b5cf6;--vio2:#a78bfa;--lav:#ece9fe;--r:18px}\n*{box-sizing:border-box;margin:0;padding:0}\nhtml{scroll-behavior:smooth}\nbody{font-family:var(--font-inter),system-ui,sans-serif;background:var(--bg);color:var(--txt);-webkit-font-smoothing:antialiased;overflow-x:hidden}\nbody:before{content:\"\";position:fixed;inset:0;z-index:-1;pointer-events:none;background:radial-gradient(900px 500px at 50% -10%,#e4e0ff,transparent 70%),radial-gradient(500px 400px at 0% 60%,#efe9ff,transparent 70%),radial-gradient(500px 400px at 100% 80%,#e7ecff,transparent 70%);background-color:var(--bg)}\nbody:after{content:\"\";position:fixed;inset:0;z-index:-1;pointer-events:none;background-image:linear-gradient(#0f10200a 1px,transparent 1px),linear-gradient(90deg,#0f10200a 1px,transparent 1px);background-size:56px 56px;mask-image:radial-gradient(ellipse at 50% 20%,#000 20%,transparent 65%)}\na{color:inherit;text-decoration:none}\n\n/* nav */\nnav{max-width:1180px;margin:18px auto 0;display:flex;justify-content:space-between;align-items:center;padding:0 4vw;position:relative;z-index:10}\n.logo{font-weight:800;font-size:22px;display:flex;gap:9px;align-items:center;letter-spacing:-.03em}\n\n.navpill{display:flex;background:#fff;border:1px solid var(--line);border-radius:12px;padding:4px;box-shadow:0 2px 10px #3d4ef50d}\n.navpill a{padding:8px 16px;border-radius:9px;font-size:14px;font-weight:600;color:var(--mut);transition:.2s}\n.navpill a:hover{color:var(--txt)}.navpill a.on{background:var(--bg);color:var(--txt)}\n.cta{background:var(--blue);color:#fff;padding:11px 18px;border-radius:11px;font-weight:600;font-size:14px;box-shadow:0 6px 18px #3d4ef54d;transition:.2s;border:0;cursor:pointer;font-family:inherit}\n.cta:hover{background:var(--blue2);transform:translateY(-1px)}\n\n/* hero */\n.hero{position:relative;text-align:center;padding:76px 5vw 40px;max-width:1180px;margin:0 auto}\n.avail{display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:600;color:#3a3d55;margin-bottom:20px}\n.avail b{width:8px;height:8px;border-radius:50%;background:#22c55e;box-shadow:0 0 0 4px #22c55e26;animation:pu 2s infinite}\n@keyframes pu{50%{box-shadow:0 0 0 7px #22c55e10}}\nh1{font-size:clamp(40px,6.4vw,76px);font-weight:800;letter-spacing:-.045em;line-height:1.02}\nh1 em{font-style:normal;background:linear-gradient(90deg,var(--blue),var(--vio));-webkit-background-clip:text;background-clip:text;color:transparent}\n.hero p{max-width:520px;margin:18px auto 0;color:var(--mut);font-size:17px;line-height:1.6}\n.trust{display:inline-flex;align-items:center;gap:10px;margin-top:24px;background:#ffffffb3;border:1px solid var(--line);padding:7px 16px 7px 8px;border-radius:99px;font-size:13px;font-weight:600;color:#3a3d55;backdrop-filter:blur(6px)}\n.av{display:flex}.av span{width:24px;height:24px;border-radius:50%;border:2px solid #fff;margin-left:-7px;display:grid;place-items:center;font-size:10px;font-weight:800;color:#fff}.av span:first-child{margin-left:0}\n.hbtns{display:flex;gap:10px;justify-content:center;margin-top:24px;flex-wrap:wrap}\n.btn2{background:#fff;color:var(--txt);border:1px solid var(--line);padding:11px 18px;border-radius:11px;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit;transition:.2s}\n.btn2:hover{border-color:#c9cbe0;transform:translateY(-1px)}\n.fl{position:absolute;width:42px;height:42px;border-radius:12px;background:#fff;border:1px solid var(--line);box-shadow:0 10px 24px #3d4ef514;display:grid;place-items:center;font-size:11px;font-weight:800;animation:fy 7s ease-in-out infinite}\n@keyframes fy{50%{translate:0 -12px}}\n.fl.s{width:30px;height:30px;border-radius:9px;font-size:13px}\n.sq{position:absolute;width:20px;height:20px;border-radius:4px;background:#e2e3f3;opacity:.7}\n\n/* app window */\n.wrap{max-width:1180px;margin:0 auto;padding:0 4vw}\n.win{background:#fff;border:1px solid var(--line);border-radius:22px;box-shadow:0 40px 80px -20px #3d4ef52e,0 0 0 8px #ffffff80;overflow:hidden;position:relative;z-index:2}\n.wbar{display:flex;align-items:center;gap:8px;padding:13px 16px;border-bottom:1px solid var(--line);background:#fafbff}\n.wbar i{width:11px;height:11px;border-radius:50%}.wbar i:nth-child(1){background:#ff5f57}.wbar i:nth-child(2){background:#febc2e}.wbar i:nth-child(3){background:#28c840}\n.wbar .tt{flex:1;text-align:center;font-size:12.5px;color:var(--mut);font-weight:600}\n.wbar .tt span{background:var(--bg);border:1px solid var(--line);border-radius:8px;padding:4px 14px}\n.wbody{padding:22px}\n#start{display:grid;grid-template-columns:220px 1fr;gap:20px}\n.side{border-right:1px solid var(--line);padding-right:18px}\n.side h5{font-size:12px;color:var(--mut);font-weight:700;margin:4px 0 10px}\n.side div{cursor:pointer;transition:.15s;display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:10px;font-size:13.5px;font-weight:600;margin-bottom:3px}\n.side div:hover{background:#f6f5ff}.side div.on{background:var(--lav);color:#4c1d95;box-shadow:inset 0 0 0 1px #d4d0fb}\n.side div i{width:24px;height:24px;border-radius:7px;display:grid;place-items:center;font-style:normal;font-size:12px}\n.side div em{margin-left:auto;width:8px;height:8px;border-radius:50%;font-style:normal}\n.drop{border:2px dashed #d4d0fb;border-radius:16px;background:linear-gradient(180deg,#fbfaff,#f5f3ff);padding:56px 20px;text-align:center;cursor:pointer;transition:.25s;position:relative;overflow:hidden}\n.drop:hover,.drop.on{border-color:var(--vio);transform:translateY(-2px);box-shadow:0 18px 40px #8b5cf622}\n.drop .ic{width:64px;height:64px;margin:0 auto 16px;border-radius:18px;background:linear-gradient(135deg,var(--blue),var(--vio));color:#fff;display:grid;place-items:center;font-size:26px;box-shadow:0 12px 28px #6d5dfc55;animation:bob 3s ease-in-out infinite}\n@keyframes bob{50%{transform:translateY(-7px)}}\n.drop h3,.drop .dh{font-size:21px;font-weight:700;letter-spacing:-.02em;margin-bottom:6px}.drop small{color:var(--mut);line-height:1.7;font-size:13px}\n.drop .chips{display:flex;gap:6px;justify-content:center;margin-top:14px;flex-wrap:wrap}\n.drop .chips span{background:#fff;border:1px solid var(--line);font-size:11px;font-weight:700;padding:4px 9px;border-radius:7px;color:#4c4f6b}\n.err{background:#fef2f2;border:1px solid #fecaca;color:#b91c1c;padding:12px 16px;border-radius:12px;margin-top:12px;display:none;grid-column:2}\n\n/* editor */\n#editor{display:none}\n.ed{display:grid;grid-template-columns:1fr 320px;gap:18px}\n.panel{min-width:0}\n.ed>.panel:last-child{border-left:1px solid var(--line);padding-left:18px}\n.viewbar{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;gap:10px;flex-wrap:wrap}\n.seg{display:inline-flex;background:var(--bg);border:1px solid var(--line);border-radius:10px;padding:3px}\n.seg button{display:inline-flex;align-items:center;justify-content:center;gap:6px;background:none;border:0;color:var(--mut);font-weight:600;font-size:13px;font-family:inherit;padding:7px 13px;border-radius:7px;cursor:pointer}\n.seg button.on{background:#fff;color:var(--blue);box-shadow:0 1px 4px #0f102014}\n.stage{position:relative;border-radius:14px;overflow:hidden;background:repeating-conic-gradient(#f0f0f8 0 25%,#fff 0 50%) 0 0/20px 20px;height:min(60vh,540px);user-select:none;border:1px solid var(--line);touch-action:none;cursor:grab}\n.stage.pan{cursor:grabbing}.stage.white{background:#fff}\n.layer{position:absolute;inset:14px;transform-origin:0 0;will-change:transform}\n.layer img,.layer svg{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;display:block}\n.clipO{position:absolute;inset:0;clip-path:inset(0 50% 0 0)}\n.split{position:absolute;top:0;bottom:0;left:50%;width:2px;background:linear-gradient(var(--blue),var(--vio));cursor:ew-resize;z-index:3;transform:translateX(-1px)}\n.split:after{content:\"⟷\";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:34px;height:34px;border-radius:50%;background:#fff;color:var(--blue);border:2px solid var(--blue);display:grid;place-items:center;font-weight:800;font-size:14px;box-shadow:0 6px 16px #3d4ef533}\n.lbl{position:absolute;top:12px;font-size:10.5px;font-weight:700;background:#fff;border:1px solid var(--line);color:var(--mut);padding:4px 10px;border-radius:99px;z-index:4;letter-spacing:.06em}\n.zoom{position:absolute;right:12px;bottom:12px;z-index:4;display:flex;gap:2px;background:#fff;border:1px solid var(--line);border-radius:10px;padding:3px;box-shadow:0 4px 12px #0f102010}\n.zoom button{display:grid;place-items:center;background:none;border:0;color:var(--txt);font-weight:700;font-size:14px;font-family:inherit;width:30px;height:28px;border-radius:7px;cursor:pointer}.zoom button:hover{background:var(--lav);color:var(--blue)}\n.zoom span{color:var(--mut);font-size:12px;align-self:center;min-width:44px;text-align:center}\n.busy{position:absolute;inset:0;background:#ffffffd9;display:none;place-items:center;z-index:5}.busy.on{display:grid}\n.bar{width:200px;height:5px;border-radius:9px;background:var(--line);overflow:hidden;margin-top:10px}\n.bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--blue),var(--vio));transition:width .2s}\n.sts{display:grid;grid-template-columns:repeat(6,1fr);gap:8px;margin-top:12px}\n.sts div{background:var(--bg);border:1px solid var(--line);border-radius:12px;padding:9px 11px}\n.sts b{display:block;font-size:15px;color:var(--txt)}.sts small{color:var(--mut);font-size:11px}\n.acts{display:flex;gap:8px;margin-top:12px;flex-wrap:wrap}\n.btn{background:var(--blue);color:#fff;border:0;padding:12px 20px;border-radius:11px;font-weight:600;font-size:14px;font-family:inherit;cursor:pointer;transition:.2s;display:inline-flex;gap:8px;align-items:center;box-shadow:0 6px 18px #3d4ef544}\n.btn:hover{background:var(--blue2);transform:translateY(-1px)}\n.btn.g{background:#fff;color:var(--txt);border:1px solid var(--line);box-shadow:none}.btn.g:hover{border-color:#c9cbe0}\n.btn.big{flex:1;justify-content:center}\nh4{font-size:12px;color:var(--mut);margin:2px 0 10px;font-weight:700}\n.sec{padding-bottom:16px;margin-bottom:16px;border-bottom:1px solid var(--line)}.sec:last-child{border:0;margin:0;padding:0}\n.tgrid{display:grid;grid-template-columns:1fr 1fr;gap:8px}\n.tbtn{background:#fff;border:1px solid var(--line);border-radius:12px;padding:10px;text-align:left;cursor:pointer;color:var(--txt);font-family:inherit;transition:.15s;position:relative}\n.tbtn:hover{border-color:var(--vio2)}\n.tbtn b{font-size:13px;display:block}.tbtn small{color:var(--mut);font-size:11px;line-height:1.35;display:block;margin-top:2px}\n.tbtn.on{border-color:var(--vio);background:#faf8ff;box-shadow:inset 0 0 0 1px var(--vio)}\n.tbtn .auto{position:absolute;top:7px;right:8px;font-size:9px;font-weight:800;color:#fff;background:var(--vio);padding:2px 6px;border-radius:99px;display:none}\n.tbtn.det .auto{display:block}\n.seg.full{display:flex}.seg.full button{flex:1}\n.pal{display:flex;flex-wrap:wrap;gap:8px}\n.chip{position:relative;width:36px;height:36px;border-radius:10px;border:1px solid #0f10201f;cursor:pointer;transition:.15s}.chip:hover{transform:scale(1.08)}\n.chip input{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%}\n.chip .x{position:absolute;top:-6px;right:-6px;width:17px;height:17px;border-radius:50%;background:#fff;border:1px solid var(--line);color:var(--txt);font-size:10px;display:grid;place-items:center;cursor:pointer;z-index:2;box-shadow:0 1px 3px #0002}\n.chip.off{background:repeating-conic-gradient(#ddd 0 25%,#fff 0 50%) 0 0/8px 8px!important}\n.chip.off .x{background:#22c55e;color:#fff;border-color:#22c55e}\n.sugg{display:flex;flex-direction:column;gap:6px}\n.sg{display:flex;align-items:center;gap:8px;border:1px solid var(--line);border-radius:10px;padding:6px 8px;cursor:pointer;transition:.15s}\n.sg:hover,.sg.on{border-color:var(--vio)}\n.sg span{font-size:11px;color:var(--mut);width:22px}\n.sg div{display:flex;flex:1;height:14px;border-radius:5px;overflow:hidden}.sg div i{flex:1}\ndetails.adv summary{cursor:pointer;font-weight:700;font-size:13px;list-style:none;display:flex;justify-content:space-between}\ndetails.adv summary:after{content:\"▾\";color:var(--mut)}\n.rng{margin-top:14px}\n.rng label{display:flex;justify-content:space-between;font-size:13px;font-weight:600}\n.rng label b{background:var(--lav);color:#5b21b6;padding:1px 8px;border-radius:6px;font-size:12px}\n.rng small{display:block;color:var(--mut);font-size:11px;margin-top:3px;line-height:1.4}\ninput[type=range],.chk input{accent-color:var(--vio)}\ninput[type=range]{width:100%;margin-top:6px}\n.chk{display:flex;gap:10px;align-items:flex-start;margin-top:14px;font-size:13px;cursor:pointer}.chk input{margin-top:3px}\n.link{background:none;border:0;color:var(--blue);font-weight:600;font-size:12px;font-family:inherit;cursor:pointer;margin-top:10px}\n\n/* sections */\n.sh{text-align:center;margin:110px auto 0;max-width:640px}\n.tag{display:inline-block;font-size:12px;font-weight:700;color:var(--vio);background:var(--lav);padding:5px 12px;border-radius:99px;margin-bottom:14px}\nh2{font-size:clamp(30px,4vw,46px);font-weight:800;letter-spacing:-.04em;line-height:1.08}\n.sh p{color:var(--mut);margin-top:12px;line-height:1.6;font-size:16px}\n.flow{margin-top:30px}\n.flow svg{width:100%;height:auto;display:block}\n.flow .dash{stroke-dasharray:6 8;animation:da 1.4s linear infinite}@keyframes da{to{stroke-dashoffset:-28}}\n.flow .hex{animation:hx 4s ease-in-out infinite;transform-origin:600px 190px}@keyframes hx{50%{transform:scale(1.04)}}\n.flow .nd{animation:fy 5s ease-in-out infinite}\n.feat{display:flex;justify-content:center;gap:42px;flex-wrap:wrap;margin-top:28px;color:#5a5d78;font-weight:700;font-size:17px}\n.feat span{display:flex;align-items:center;gap:8px;opacity:.85;transition:.2s}.feat span:hover{opacity:1;color:var(--txt)}\n.feat span i{font-style:normal;width:26px;height:26px;border-radius:8px;background:#fff;border:1px solid var(--line);display:grid;place-items:center;font-size:13px}\n.cards{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:34px}\n.cd{background:#fff;border:1px solid var(--line);border-radius:18px;padding:10px;transition:.25s}\n.cd:hover{transform:translateY(-5px);box-shadow:0 24px 50px -10px #3d4ef533}\n.th{height:150px;border-radius:12px;position:relative;overflow:hidden;display:grid;place-items:center;color:#fff}\n.th b{position:absolute;left:14px;top:12px;font-size:17px;font-weight:800;letter-spacing:-.02em;line-height:1.1;max-width:60%;text-align:left}\n.th svg{position:absolute;right:12px;bottom:10px;width:76px;height:76px}\n.cd .bd{padding:12px 6px 6px}.cd .bd b{font-size:15px}.cd .bd p{color:var(--mut);font-size:13px;line-height:1.5;margin-top:4px}\n.cd .bd small{display:inline-block;margin-top:10px;font-size:11px;font-weight:700;color:#6d28d9;background:var(--lav);padding:3px 8px;border-radius:6px}\n.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:34px}\n.st{background:#fff;border:1px solid var(--line);border-radius:18px;padding:26px;position:relative;transition:.25s}\n.st:hover{transform:translateY(-4px);box-shadow:0 20px 40px -12px #3d4ef52a}\n.st .n{width:38px;height:38px;border-radius:11px;background:var(--lav);color:var(--vio);display:grid;place-items:center;font-weight:800;margin-bottom:16px}\n.st:nth-child(2) .n{background:#e3e7ff;color:var(--blue)}.st:nth-child(3) .n{background:#dcfce7;color:#16a34a}\n.st b{font-size:17px}.st p{color:var(--mut);font-size:14px;line-height:1.6;margin-top:6px}\n.faq{max-width:780px;margin:34px auto 0}\n.faq details{background:#fff;border:1px solid var(--line);border-radius:14px;padding:18px 20px;margin-top:10px;transition:.2s}\n.faq details[open]{border-color:#d4d0fb;box-shadow:0 10px 24px -10px #8b5cf633}\n.faq summary{cursor:pointer;font-weight:600;list-style:none;display:flex;justify-content:space-between;gap:10px}\n.faq summary:after{content:\"+\";color:var(--vio);font-size:20px;line-height:1}.faq details[open] summary:after{content:\"−\"}\n.faq p{color:var(--mut);margin-top:10px;font-size:14px;line-height:1.65}\n.band{margin:110px auto 0;background:linear-gradient(135deg,#3d4ef5,#7c5cf6 60%,#a78bfa);border-radius:26px;padding:56px 30px;text-align:center;color:#fff;position:relative;overflow:hidden}\n.band:before,.band:after{content:\"\";position:absolute;width:260px;height:260px;border-radius:50%;background:#ffffff14}\n.band:before{left:-80px;top:-100px}.band:after{right:-60px;bottom:-120px}\n.band h2{color:#fff}.band p{opacity:.85;margin-top:10px}\n.band .cta{background:#fff;color:var(--blue);margin-top:24px;box-shadow:0 10px 24px #0f102033;padding:13px 22px;position:relative;z-index:1}.band .cta:hover{background:#eef0ff;color:var(--blue2);box-shadow:0 14px 28px #0f102040}\nfooter{display:flex;justify-content:space-between;align-items:center;max-width:1180px;margin:40px auto 0;padding:26px 4vw 40px;color:var(--mut);font-size:13px;flex-wrap:wrap;gap:10px}\n.toast{position:fixed;bottom:24px;left:50%;transform:translate(-50%,120px);background:var(--txt);color:#fff;padding:11px 18px;border-radius:11px;font-weight:600;font-size:14px;transition:.3s;z-index:50}\n.toast.s{transform:translate(-50%,0)}\n.reveal{opacity:0;transform:translateY(26px);transition:.7s cubic-bezier(.2,.7,.2,1)}.reveal.in{opacity:1;transform:none}\n@media(max-width:960px){.ed{grid-template-columns:1fr}.ed>.panel:last-child{border:0;padding:0}#start{grid-template-columns:1fr}.side{display:none}.err{grid-column:1}.cards{grid-template-columns:1fr 1fr}.steps{grid-template-columns:1fr}.navpill{display:none}.sts{grid-template-columns:repeat(3,1fr)}.fl,.sq{display:none}}\n@media(max-width:560px){.cards{grid-template-columns:1fr}}\n\n/* shared */\n:root{--bg:#f3f4fb;--card:#fff;--line:#e6e7f2;--txt:#0f1020;--mut:#6a6d85;--blue:#3d4ef5;--blue2:#2f3fe0;--vio:#8b5cf6;--vio2:#a78bfa;--lav:#ece9fe}\n*{box-sizing:border-box;margin:0;padding:0}\nhtml{scroll-behavior:smooth}\nbody{font-family:var(--font-inter),system-ui,sans-serif;background:var(--bg);color:var(--txt);-webkit-font-smoothing:antialiased;overflow-x:hidden}\nbody:before{content:\"\";position:fixed;inset:0;z-index:-1;pointer-events:none;background:radial-gradient(900px 500px at 50% -10%,#e4e0ff,transparent 70%),radial-gradient(500px 400px at 0% 60%,#efe9ff,transparent 70%),radial-gradient(500px 400px at 100% 80%,#e7ecff,transparent 70%);background-color:var(--bg)}\na{color:inherit;text-decoration:none}\nnav.top{max-width:1180px;margin:18px auto 0;display:flex;justify-content:space-between;align-items:center;padding:0 4vw;position:relative;z-index:10;gap:12px}\n.logo{font-weight:800;font-size:22px;display:flex;gap:9px;align-items:center;letter-spacing:-.03em}\n\n.navpill{display:flex;background:#fff;border:1px solid var(--line);border-radius:12px;padding:4px;box-shadow:0 2px 10px #3d4ef50d}\n.navpill a{padding:8px 15px;border-radius:9px;font-size:14px;font-weight:600;color:var(--mut);transition:.2s;white-space:nowrap}\n.navpill a:hover{color:var(--txt)}.navpill a.on{background:var(--bg);color:var(--txt)}\n.cta{display:inline-flex;align-items:center;gap:8px;background:var(--blue);color:#fff;padding:11px 18px;border-radius:11px;font-weight:600;font-size:14px;box-shadow:0 6px 18px #3d4ef54d;transition:.2s;border:0;cursor:pointer;font-family:inherit}\n.cta:hover{background:var(--blue2);transform:translateY(-1px)}\n.btn2{display:inline-flex;align-items:center;gap:8px;background:#fff;color:var(--txt);border:1px solid var(--line);padding:11px 18px;border-radius:11px;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit;transition:.2s}\n.btn2:hover{border-color:#c9cbe0}\n.menu{display:none;background:#fff;border:1px solid var(--line);border-radius:10px;width:42px;height:42px;cursor:pointer;place-items:center}\n.wrap{max-width:1180px;margin:0 auto;padding:0 4vw}\n.phead{text-align:center;padding:64px 5vw 34px;max-width:780px;margin:0 auto}\n.tag{display:inline-block;font-size:12px;font-weight:700;color:var(--vio);background:var(--lav);padding:5px 12px;border-radius:99px;margin-bottom:14px}\n.phead h1{font-size:clamp(34px,5vw,56px);font-weight:800;letter-spacing:-.04em;line-height:1.05}\n.phead h1 em{font-style:normal;background:linear-gradient(90deg,var(--blue),var(--vio));-webkit-background-clip:text;background-clip:text;color:transparent}\n.phead p{color:var(--mut);margin-top:14px;line-height:1.6;font-size:17px}\n.crumbs{font-size:13px;color:var(--mut);margin-bottom:16px}.crumbs a{color:var(--blue)}\n.box{background:#fff;border:1px solid var(--line);border-radius:22px;box-shadow:0 30px 70px -30px #3d4ef533}\n/* article / legal prose */\n.prose{max-width:760px;margin:0 auto;background:#fff;border:1px solid var(--line);border-radius:22px;padding:clamp(24px,5vw,56px);box-shadow:0 30px 70px -30px #3d4ef522}\n.prose h2{font-size:24px;letter-spacing:-.02em;margin:34px 0 12px}\n.prose h3{font-size:18px;margin:24px 0 8px}.prose code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.88em;background:#eef0fb;border-radius:5px;padding:.12em .38em}.prose pre{background:#0f1020;color:#e6e7f2;border-radius:12px;padding:16px 18px;overflow-x:auto;margin:14px 0;line-height:1.55}.prose pre code{background:none;padding:0;color:inherit;font-size:13px}.tldr{background:linear-gradient(135deg,#eef0ff,#f5f0ff);border:1px solid #dcdcfb;border-radius:14px;padding:16px 20px;margin:18px 0 8px}.tldr b{display:block;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--blue);margin-bottom:4px}.tldr p{margin:0}.author{display:flex;gap:14px;align-items:flex-start;border-top:1px solid var(--line);margin-top:34px;padding-top:22px}.author img{border-radius:10px;flex:none}.author b{display:block;margin-bottom:2px}.author p{margin:0;font-size:14px;color:var(--mut)}\n.prose p,.prose li{color:#3a3d55;line-height:1.8;font-size:16px}\n.prose p{margin:12px 0}\n.prose ul,.prose ol{padding-left:22px;margin:12px 0}.prose li{margin:6px 0}\n.prose a{color:var(--blue);text-decoration:underline}\n.prose .meta{color:var(--mut);font-size:14px;display:flex;gap:14px;flex-wrap:wrap;margin-bottom:6px}\n.prose .note{background:var(--lav);border-radius:14px;padding:16px 18px;color:#4c1d95;margin:20px 0;line-height:1.7}\n.prose table{width:100%;border-collapse:collapse;margin:16px 0;font-size:14.5px}\n.prose th,.prose td{border:1px solid var(--line);padding:10px 12px;text-align:left}.prose th{background:var(--bg)}\n.prose .cover{height:220px;border-radius:16px;margin-bottom:26px;display:grid;place-items:center;overflow:hidden}\n.prose .cover svg{width:120px;height:120px}\n.prose .inline-cta{display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap;background:linear-gradient(135deg,#3d4ef5,#8b5cf6);color:#fff;border-radius:16px;padding:20px 22px;margin:30px 0 6px}\n.prose .inline-cta p{color:#fff;margin:0;font-weight:600}.prose .inline-cta a{background:#fff;color:var(--blue);text-decoration:none;padding:10px 16px;border-radius:10px;font-weight:700;font-size:14px}\n/* blog cards */\n.posts{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}\n.post{background:#fff;border:1px solid var(--line);border-radius:18px;padding:10px;transition:.25s;display:flex;flex-direction:column}\n.post:hover{transform:translateY(-5px);box-shadow:0 24px 50px -10px #3d4ef533}\n.post .th{height:160px;border-radius:12px;display:grid;place-items:center;color:#fff}\n.post .th svg{width:70px;height:70px}\n.post .bd{padding:14px 8px 8px;display:flex;flex-direction:column;flex:1}\n.post .bd small{color:#6d28d9;font-weight:700;font-size:12px}\n.post .bd b{font-size:17px;letter-spacing:-.01em;margin-top:6px;line-height:1.35}\n.post .bd p{color:var(--mut);font-size:14px;line-height:1.55;margin-top:8px;flex:1}\n.post .bd span{font-size:12.5px;color:var(--mut);margin-top:12px}\n/* footer */\nfooter.site{max-width:1180px;margin:100px auto 0;padding:46px 4vw 30px;border-top:1px solid var(--line)}\n.fgrid{display:grid;grid-template-columns:1.4fr 1fr 1.3fr 1fr 1fr;gap:30px}\n.fgrid p{color:var(--mut);font-size:14px;line-height:1.6;margin-top:12px;max-width:300px}\n.fgrid h6,.fgrid .fh{font-size:13px;font-weight:700;margin-bottom:12px}\n.fgrid a.logo{display:flex;color:var(--txt)}.fgrid a:not(.logo){display:block;color:var(--mut);font-size:14px;margin:8px 0;transition:.15s}.fgrid a:hover{color:var(--blue)}\n.fbot{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-top:34px;padding-top:20px;border-top:1px solid var(--line);color:var(--mut);font-size:13px}\n.ad-slot{display:none}\n.cookie{position:fixed;left:16px;right:16px;bottom:16px;max-width:520px;margin:0 auto;background:#fff;border:1px solid var(--line);border-radius:16px;padding:16px 18px;box-shadow:0 20px 50px -10px #0f102033;z-index:60;display:none;gap:14px;align-items:center;font-size:13.5px;color:#3a3d55;line-height:1.5}\n.cookie.on{display:flex}.cookie a{color:var(--blue);text-decoration:underline}\n.cookie button{flex-shrink:0}\n.reveal{opacity:0;transform:translateY(26px);transition:.7s cubic-bezier(.2,.7,.2,1)}.reveal.in{opacity:1;transform:none}\n@media(max-width:960px){.navpill{display:none;position:absolute;top:56px;left:4vw;right:4vw;flex-direction:column;z-index:30}.navpill.open{display:flex}.menu{display:grid}nav.top .cta{display:none}.posts{grid-template-columns:1fr 1fr}.fgrid{grid-template-columns:1fr 1fr}}\n@media(max-width:600px){.posts{grid-template-columns:1fr}.fgrid{grid-template-columns:1fr}}\n\nbody:after{display:none}\nfooter.site{display:block}\n\n/* SEO homepage sections */\n.hero h1{font-size:clamp(34px,5.2vw,60px)!important;max-width:900px;margin-left:auto;margin-right:auto}\n.hero p.answer{max-width:660px}\n.trust{padding:7px 16px}\nol.steps{list-style:none;padding:0}\n.steps4{grid-template-columns:repeat(4,1fr)}\n.fx{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:34px}\n.fx>div{background:#fff;border:1px solid var(--line);border-radius:18px;padding:22px}\n.fx b{font-size:15.5px}\n.fx p{color:var(--mut);font-size:14px;line-height:1.55;margin-top:6px}\n.fx a{color:var(--blue);font-weight:600}\n.updated{font-size:14px;color:var(--mut)}\n@media(max-width:960px){.steps4,.fx{grid-template-columns:1fr 1fr}}\n@media(max-width:600px){.steps4,.fx{grid-template-columns:1fr}}\n.hero-sm{padding-bottom:10px}.rel{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-top:28px}.rel a{background:#fff;border:1px solid var(--line);border-radius:99px;padding:10px 18px;font-weight:600;font-size:14px;color:#3a3d55;transition:.2s}.rel a:hover{border-color:var(--blue);color:var(--blue)}\n" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebApplication\",\"name\":\"Image to SVG Converter — Vectorize Any Image Free\",\"url\":\"https://pngtosvgfree.com/image-to-svg\",\"description\":\"Vectorize any image online: convert PNG, JPG, WEBP, GIF, BMP or AVIF to SVG free. Automatic tracing, colour control, no signup and no upload to a server.\",\"applicationCategory\":\"MultimediaApplication\",\"operatingSystem\":\"Any (runs in a web browser)\",\"browserRequirements\":\"Requires JavaScript and a modern browser\",\"isAccessibleForFree\":true,\"offers\":{\"@type\":\"Offer\",\"price\":\"0\",\"priceCurrency\":\"USD\"},\"featureList\":[\"Automatic image tracing\",\"Automatic image type detection\",\"Smart colour palette detection (1–32 colours)\",\"Adjustable detail, smoothing, speckle removal and corner angle\",\"Recolour or remove any colour\",\"Keeps transparent backgrounds\",\"Side-by-side comparison with zoom\",\"Registration marks for layered cutting\",\"Download SVG or copy SVG code\",\"Runs entirely in the browser — no upload\",\"No signup, no watermark, no limits\"],\"publisher\":{\"@id\":\"https://pngtosvgfree.com/#organization\"}},{\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What is the best free image to SVG converter?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"The best converter is one that gives you control over colours and detail without uploading your file. PNG to SVG Free offers 1–32 colours, detail and smoothing sliders and in-browser processing, all for free.\"}},{\"@type\":\"Question\",\"name\":\"Can I vectorize a photo?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, choose the Photograph type. The result is stylised vector art with flat colour areas rather than a photographic copy.\"}},{\"@type\":\"Question\",\"name\":\"Can I convert a screenshot to SVG?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, screenshots of icons, diagrams and simple interfaces vectorize well. Text in screenshots becomes shapes, not editable text.\"}},{\"@type\":\"Question\",\"name\":\"Does the SVG contain my original pixels?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No, the SVG contains only vector paths traced from the image. No raster data is embedded, which keeps the file clean and editable.\"}},{\"@type\":\"Question\",\"name\":\"Do I need to install anything?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No, everything runs in your web browser. There is nothing to download or install.\"}}]},{\"@type\":\"HowTo\",\"name\":\"How do I convert an image to SVG?\",\"totalTime\":\"PT1M\",\"tool\":[{\"@type\":\"HowToTool\",\"name\":\"A web browser\"}],\"supply\":[{\"@type\":\"HowToSupply\",\"name\":\"An image file (PNG, JPG, WEBP, GIF, BMP or AVIF)\"}],\"step\":[{\"@type\":\"HowToStep\",\"position\":1,\"name\":\"Choose your image\",\"text\":\"Upload any PNG, JPG, WEBP, GIF, BMP or AVIF file, or paste an image from your clipboard.\",\"url\":\"https://pngtosvgfree.com/image-to-svg#how\"},{\"@type\":\"HowToStep\",\"position\":2,\"name\":\"Pick or confirm the image type\",\"text\":\"Auto-detect selects Logo, Photograph, Sketch or Silhouette settings. Change it with one click if you want a different style.\",\"url\":\"https://pngtosvgfree.com/image-to-svg#how\"},{\"@type\":\"HowToStep\",\"position\":3,\"name\":\"Adjust the result\",\"text\":\"Use the palette, colour count and advanced sliders to balance detail against simplicity while watching the live preview.\",\"url\":\"https://pngtosvgfree.com/image-to-svg#how\"},{\"@type\":\"HowToStep\",\"position\":4,\"name\":\"Export the SVG\",\"text\":\"Download the SVG file or copy the code. Need a PNG later? Our SVG to PNG tool converts it back at any size.\",\"url\":\"https://pngtosvgfree.com/image-to-svg#how\"}]},{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://pngtosvgfree.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Image to SVG Converter — Vectorize Images Free\",\"item\":\"https://pngtosvgfree.com/image-to-svg\"}]}]}" }} />
      {" "}
      <section className="hero hero-sm">
        {" "}
        <div className="avail">
          <b />
          {"Free · No signup · No watermark"}
        </div>
        {" "}
        <h1>
          {"Image to SVG Converter — "}
          <em>
            {"Vectorize Any Image Free"}
          </em>
        </h1>
        {" "}
        <p className="answer">
          {"Turn any image into an SVG vector online. Upload a PNG, JPG, WEBP, GIF, BMP or AVIF file and the converter automatically traces it into clean, layered paths you can scale, edit and cut. It is free, adds no watermark, needs no account and runs privately in your browser."}
        </p>
        {" "}
        <div className="trust">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
          {"Runs 100% in your browser · Files never uploaded"}
        </div>
        {" "}
      </section>
      {" "}
      <div className="wrap" id="tool" data-preset="auto">
        {" "}
        <noscript>
          <div className="prose" style={{ "margin": "0 auto 24px", "maxWidth": "760px" }}>
            <h2 style={{ "marginTop": "0" }}>
              {"The converter needs JavaScript"}
            </h2>
            <p>
              {"PNG to SVG Free traces your image into vector paths inside your own browser, which requires JavaScript. Please enable it to use the converter. Everything else on this page — how to convert PNG to SVG, supported formats, tips and answers to common questions — is available below, and our "}
              <Link href="/blog">
                {"guides"}
              </Link>
              {" work without JavaScript too."}
            </p>
          </div>
        </noscript>
        {" "}
        <div className="win">
          {" "}
          <div className="wbar">
            <i />
            <i />
            <i />
            <div className="tt">
              <span>
                {"pngtosvg / converter"}
              </span>
            </div>
            <div style={{ "width": "45px" }} />
          </div>
          {" "}
          <div className="wbody">
            {" "}
            <div id="start">
              {" "}
              <div className="side" id="side">
                {" "}
                <h5>
                  {"Choose image type"}
                </h5>
                {" "}
                <div className="on" data-p="auto">
                  <i style={{ "background": "#ede9fe", "color": "#7c3aed" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
                      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
                    </svg>
                  </i>
                  {"Auto-detect"}
                  <em style={{ "background": "#8b5cf6" }} />
                </div>
                {" "}
                <div data-p="logo">
                  <i style={{ "background": "#e3e7ff", "color": "#3d4ef5" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="8.5" cy="8.5" r="4.5" />
                      <path d="M14 20l4-8 4 8z" />
                      <rect x="2" y="15" width="6" height="6" rx="1" />
                    </svg>
                  </i>
                  {"Logo / Clip art"}
                  <em style={{ "background": "#3d4ef5" }} />
                </div>
                {" "}
                <div data-p="photo">
                  <i style={{ "background": "#fce7f3", "color": "#db2777" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                      <circle cx="9" cy="10" r="2" />
                      <path d="M21 16l-5-5-9 9" />
                    </svg>
                  </i>
                  {"Photograph"}
                  <em style={{ "background": "#ec4899" }} />
                </div>
                {" "}
                <div data-p="sketch">
                  <i style={{ "background": "#dcfce7", "color": "#16a34a" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z" />
                    </svg>
                  </i>
                  {"Sketch / B&W"}
                  <em style={{ "background": "#16a34a" }} />
                </div>
                {" "}
                <div data-p="silhouette">
                  <i style={{ "background": "#fef3c7", "color": "#d97706" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="6" cy="6" r="3" />
                      <circle cx="6" cy="18" r="3" />
                      <path d="M20 4L8.1 15.9M14.5 14.5L20 20M8.1 8.1L12 12" />
                    </svg>
                  </i>
                  {"Silhouette"}
                  <em style={{ "background": "#f59e0b" }} />
                </div>
                {" "}
                <p id="sideHint" style={{ "fontSize": "12px", "color": "var(--mut)", "lineHeight": "1.5", "padding": "10px 10px 0" }}>
                  {"We'll detect the best type automatically. You can change it any time after upload."}
                </p>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <div className="drop" id="drop">
                  {" "}
                  <div className="ic">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 16V4" />
                      <path d="M6 10l6-6 6 6" />
                      <path d="M4 20h16" />
                    </svg>
                  </div>
                  {" "}
                  <p className="dh">
                    {"Drop your image here"}
                  </p>
                  {" "}
                  <small>
                    {"or click to browse · or paste with Ctrl+V"}
                  </small>
                  {" "}
                  <div className="chips">
                    <span>
                      {"PNG"}
                    </span>
                    <span>
                      {"JPG"}
                    </span>
                    <span>
                      {"GIF"}
                    </span>
                    <span>
                      {"BMP"}
                    </span>
                    <span>
                      {"WEBP"}
                    </span>
                    <span>
                      {"AVIF"}
                    </span>
                  </div>
                  {" "}
                  <input type="file" id="file" accept="image/*" hidden />
                  {" "}
                </div>
                {" "}
                <div className="err" id="err" />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div id="editor">
              {" "}
              <div className="ed">
                {" "}
                <div className="panel">
                  {" "}
                  <div className="viewbar">
                    {" "}
                    <div className="seg" id="viewSeg">
                      <button data-v="split" className="on">
                        {"Compare"}
                      </button>
                      <button data-v="svg">
                        {"SVG"}
                      </button>
                      <button data-v="orig">
                        {"Original"}
                      </button>
                    </div>
                    {" "}
                    <div className="seg" id="bgSeg">
                      <button data-b="grid" className="on" title="Checkerboard">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="7" height="7" rx="1" />
                          <rect x="14" y="3" width="7" height="7" rx="1" />
                          <rect x="3" y="14" width="7" height="7" rx="1" />
                          <rect x="14" y="14" width="7" height="7" rx="1" />
                        </svg>
                      </button>
                      <button data-b="white" title="White">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="4" y="4" width="16" height="16" rx="2" />
                        </svg>
                      </button>
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="stage" id="stage">
                    {" "}
                    <div className="layer" id="svgL" />
                    {" "}
                    <div className="clipO" id="clipO">
                      <div className="layer" id="orig">
                        <img id="origImg" alt="" />
                      </div>
                    </div>
                    {" "}
                    <div className="split" id="split" />
                    <div className="zoom">
                      <button id="zOut">
                        {"−"}
                      </button>
                      <span id="zV">
                        {"100%"}
                      </span>
                      <button id="zIn">
                        {"+"}
                      </button>
                      <button id="zFit" title="Fit">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                        </svg>
                      </button>
                    </div>
                    {" "}
                    <span className="lbl" id="lblO" style={{ "left": "12px" }}>
                      {"ORIGINAL"}
                    </span>
                    <span className="lbl" id="lblS" style={{ "right": "12px" }}>
                      {"SVG"}
                    </span>
                    {" "}
                    <div className="busy" id="busy">
                      <div style={{ "textAlign": "center" }}>
                        <b id="stg">
                          {"Starting…"}
                        </b>
                        <div className="bar">
                          <i id="barI" />
                        </div>
                      </div>
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="sts">
                    {" "}
                    <div>
                      <b id="sSize">
                        {"–"}
                      </b>
                      <small>
                        {"Size"}
                      </small>
                    </div>
                    <div>
                      <b id="sCol">
                        {"–"}
                      </b>
                      <small>
                        {"Colors"}
                      </small>
                    </div>
                    <div>
                      <b id="sPath">
                        {"–"}
                      </b>
                      <small>
                        {"Paths"}
                      </small>
                    </div>
                    {" "}
                    <div>
                      <b id="sNode">
                        {"–"}
                      </b>
                      <small>
                        {"Nodes"}
                      </small>
                    </div>
                    <div>
                      <b id="sDim">
                        {"–"}
                      </b>
                      <small>
                        {"Dimensions"}
                      </small>
                    </div>
                    <div>
                      <b id="sTime">
                        {"–"}
                      </b>
                      <small>
                        {"Time"}
                      </small>
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="acts">
                    {" "}
                    <button className="btn big" id="dl">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v12" />
                        <path d="M6 10l6 6 6-6" />
                        <path d="M4 20h16" />
                      </svg>
                      {" Download SVG"}
                    </button>
                    {" "}
                    <button className="btn g" id="cp">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="12" height="12" rx="2" />
                        <path d="M5 15H4a1 1 0 01-1-1V4a1 1 0 011-1h10a1 1 0 011 1v1" />
                      </svg>
                      {" Copy SVG"}
                    </button>
                    {" "}
                    <button className="btn g" id="newB">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12a9 9 0 109-9 9.7 9.7 0 00-6.7 2.8L3 8" />
                        <path d="M3 3v5h5" />
                      </svg>
                      {" New image"}
                    </button>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="panel">
                  {" "}
                  <div className="sec">
                    <h4>
                      {"Image type"}
                    </h4>
                    <div className="tgrid" id="typeG" />
                  </div>
                  {" "}
                  <div className="sec">
                    <h4>
                      {"Quality"}
                    </h4>
                    <div className="seg full" id="qSeg">
                      <button data-q="high" className="on">
                        {"High"}
                      </button>
                      <button data-q="medium">
                        {"Medium"}
                      </button>
                      <button data-q="low">
                        {"Low"}
                      </button>
                    </div>
                  </div>
                  {" "}
                  <div className="sec">
                    <h4>
                      {"Palette "}
                      <span style={{ "fontWeight": "500", "color": "#9a9db3" }}>
                        {"— click to edit · × transparent"}
                      </span>
                    </h4>
                    <div className="pal" id="pal" />
                    <button className="link" id="resetC">
                      {"Reset colors"}
                    </button>
                  </div>
                  {" "}
                  <div className="sec">
                    <h4>
                      {"Suggested palettes"}
                    </h4>
                    <div className="sugg" id="sugg" />
                  </div>
                  {" "}
                  <div className="sec">
                    {" "}
                    <details className="adv">
                      <summary>
                        {"Advanced settings"}
                      </summary>
                      <div id="adv" />
                      {" "}
                      <label className="chk">
                        <input type="checkbox" id="reg" />
                        <span>
                          <b>
                            {"Registration marks"}
                          </b>
                          <br />
                          <small style={{ "color": "var(--mut)" }}>
                            {"Adds 4 corner marks to every color layer to align layered vinyl cuts."}
                          </small>
                        </span>
                      </label>
                      {" "}
                    </details>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className="wrap" id="content">
        {" "}
        <article className="prose reveal" style={{ "marginTop": "90px" }}>
          {" "}
          <div className="crumbs">
            <Link href="/">
              {"Home"}
            </Link>
            {" / Image to SVG Converter"}
          </div>
          {" "}
          <h2>
            {"What does it mean to vectorize an image?"}
          </h2>
          {" "}
          <p>
            <strong>
              {"Vectorizing an image means converting its pixels into mathematical shapes — paths, curves and fills — so it can be resized to any size without losing quality."}
            </strong>
            {" Photos and screenshots are raster images: fixed grids of coloured pixels. Vector images such as SVG describe what to draw rather than storing each pixel, which makes them ideal for logos, icons, illustrations, cutting machines and print."}
          </p>
          {" "}
          <h2>
            {"How do I convert an image to SVG?"}
          </h2>
          {" "}
          <ol className="howto">
            {" "}
            <li>
              <b>
                {"Choose your image"}
              </b>
              <p>
                {"Upload any PNG, JPG, WEBP, GIF, BMP or AVIF file, or paste an image from your clipboard."}
              </p>
            </li>
            {" "}
            <li>
              <b>
                {"Pick or confirm the image type"}
              </b>
              <p>
                {"Auto-detect selects Logo, Photograph, Sketch or Silhouette settings. Change it with one click if you want a different style."}
              </p>
            </li>
            {" "}
            <li>
              <b>
                {"Adjust the result"}
              </b>
              <p>
                {"Use the palette, colour count and advanced sliders to balance detail against simplicity while watching the live preview."}
              </p>
            </li>
            {" "}
            <li>
              <b>
                {"Export the SVG"}
              </b>
              <p>
                {"Download the SVG file or copy the code. Need a PNG later? Our SVG to PNG tool converts it back at any size."}
              </p>
            </li>
            {" "}
          </ol>
          {" "}
          <h2>
            {"Which image types can be vectorized?"}
          </h2>
          {" "}
          <p>
            <strong>
              {"Almost any image can be vectorized, but flat-colour artwork gives the most accurate results and photos give a stylised, poster-like result."}
            </strong>
            {" The converter has four modes, each with tuned settings:"}
          </p>
          {" "}
          <table>
            <tbody>
              <tr>
                <th>
                  {"Image type"}
                </th>
                <th>
                  {"Best for"}
                </th>
                <th>
                  {"Typical colours"}
                </th>
              </tr>
              <tr>
                <td>
                  {"Logo / Clip art"}
                </td>
                <td>
                  {"Logos, icons, badges, cartoons"}
                </td>
                <td>
                  {"2–10"}
                </td>
              </tr>
              <tr>
                <td>
                  {"Photograph"}
                </td>
                <td>
                  {"Portraits, products, scenery as poster art"}
                </td>
                <td>
                  {"12–32"}
                </td>
              </tr>
              <tr>
                <td>
                  {"Sketch / B&W"}
                </td>
                <td>
                  {"Line art, ink drawings, signatures"}
                </td>
                <td>
                  {"2–4"}
                </td>
              </tr>
              <tr>
                <td>
                  {"Silhouette"}
                </td>
                <td>
                  {"Single-colour cut files, stencils, engraving"}
                </td>
                <td>
                  {"1"}
                </td>
              </tr>
            </tbody>
          </table>
          {" "}
          <h2>
            {"Image to SVG for common jobs"}
          </h2>
          {" "}
          <p>
            <strong>
              {"Each common use has a dedicated page with tuned settings and tips:"}
            </strong>
          </p>
          {" "}
          <ul>
            {" "}
            <li>
              <Link href="/logo-to-svg">
                {"Logo to SVG"}
              </Link>
              {" — rebuild a lost vector logo from a PNG or JPG."}
            </li>
            {" "}
            <li>
              <Link href="/png-to-svg-cricut">
                {"PNG to SVG for Cricut"}
              </Link>
              {" — cut files for vinyl, iron-on and paper."}
            </li>
            {" "}
            <li>
              <Link href="/png-to-svg-laser-cutting">
                {"PNG to SVG for laser cutting"}
              </Link>
              {" — paths for LightBurn, Glowforge and xTool."}
            </li>
            {" "}
            <li>
              <Link href="/black-and-white-png-to-svg">
                {"Black and white PNG to SVG"}
              </Link>
              {" — line art, stencils and signatures."}
            </li>
            {" "}
            <li>
              <Link href="/transparent-png-to-svg">
                {"Transparent PNG to SVG"}
              </Link>
              {" — keep a clear background."}
            </li>
            {" "}
          </ul>
          {" "}
          <h2>
            {"Is online image vectorization safe?"}
          </h2>
          {" "}
          <p>
            <strong>
              {"With PNG to SVG Free it is, because the image is traced locally in your browser and is never uploaded."}
            </strong>
            {" Many online vectorizers send your file to a server for processing. Here, a WebAssembly tracing engine runs on your own device, so confidential logos, signatures and personal photos stay private."}
          </p>
          {" "}
          <h2>
            {"How does automatic tracing work?"}
          </h2>
          {" "}
          <p>
            <strong>
              {"Automatic tracing reduces the image to a small palette, groups pixels into colour regions and fits smooth curves around each region."}
            </strong>
            {" The converter first detects the image type, then quantizes colours, cleans up anti-aliasing halos and small specks, and finally traces each colour layer into Bézier paths with sharp-corner detection. Read "}
            <Link href="/blog-how-image-tracing-works">
              {"How Image Tracing Works"}
            </Link>
            {" for the full story."}
          </p>
          {" "}
          <h2>
            {"When should you not vectorize an image?"}
          </h2>
          {" "}
          <p>
            <strong>
              {"Do not vectorize detailed photographs you only want to display on a website — a JPG, WEBP or AVIF will be smaller and look more realistic."}
            </strong>
            {" Vectorize when you need infinite scaling, editable colours, cut paths or print-ready artwork."}
          </p>
          {" "}
        </article>
        {" "}
      </div>
      {" "}
      <div className="wrap" id="faq">
        {" "}
        <div className="sh reveal">
          <span className="tag">
            {"FAQ"}
          </span>
          <h2>
            {"Image to SVG Converter: frequently asked questions"}
          </h2>
        </div>
        {" "}
        <div className="faq">
          {" "}
          <details>
            <summary>
              {"What is the best free image to SVG converter?"}
            </summary>
            <p>
              {"The best converter is one that gives you control over colours and detail without uploading your file. PNG to SVG Free offers 1–32 colours, detail and smoothing sliders and in-browser processing, all for free."}
            </p>
          </details>
          {" "}
          <details>
            <summary>
              {"Can I vectorize a photo?"}
            </summary>
            <p>
              {"Yes, choose the Photograph type. The result is stylised vector art with flat colour areas rather than a photographic copy."}
            </p>
          </details>
          {" "}
          <details>
            <summary>
              {"Can I convert a screenshot to SVG?"}
            </summary>
            <p>
              {"Yes, screenshots of icons, diagrams and simple interfaces vectorize well. Text in screenshots becomes shapes, not editable text."}
            </p>
          </details>
          {" "}
          <details>
            <summary>
              {"Does the SVG contain my original pixels?"}
            </summary>
            <p>
              {"No, the SVG contains only vector paths traced from the image. No raster data is embedded, which keeps the file clean and editable."}
            </p>
          </details>
          {" "}
          <details>
            <summary>
              {"Do I need to install anything?"}
            </summary>
            <p>
              {"No, everything runs in your web browser. There is nothing to download or install."}
            </p>
          </details>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className="wrap" id="related">
        {" "}
        <div className="sh reveal">
          <span className="tag">
            {"Related tools"}
          </span>
          <h2>
            {"More free image to SVG tools"}
          </h2>
          <p>
            {"Every tool runs the same private, in-browser converter with settings tuned for a specific job."}
          </p>
        </div>
        {" "}
        <div className="rel reveal">
          <Link href="/">
            {"PNG to SVG Converter"}
          </Link>
          <Link href="/black-and-white-png-to-svg">
            {"Black and White PNG to SVG"}
          </Link>
          <Link href="/jpeg-to-svg">
            {"JPEG to SVG Converter"}
          </Link>
          <Link href="/jpg-to-svg">
            {"JPG to SVG Converter"}
          </Link>
          <Link href="/logo-to-svg">
            {"Logo to SVG Converter"}
          </Link>
          <Link href="/png-to-svg-cricut">
            {"PNG to SVG for Cricut"}
          </Link>
          <Link href="/png-to-svg-laser-cutting">
            {"PNG to SVG for Laser Cutting"}
          </Link>
          <Link href="/transparent-png-to-svg">
            {"Transparent PNG to SVG"}
          </Link>
          <Link href="/webp-to-svg">
            {"WEBP to SVG Converter"}
          </Link>
          <Link href="/bulk-svg-to-png-converter">
            {"SVG to PNG Converter"}
          </Link>
        </div>
        {" "}
      </div>
      {" "}
      <div className="wrap">
        <div className="band reveal">
          <h2>
            {"Ready to go vector?"}
          </h2>
          <p>
            {"Drop an image and get your SVG in seconds — free, private, no signup."}
          </p>
          <button className="cta" data-act="pick-scroll">
            {"Convert an image now"}
          </button>
        </div>
      </div>
      {" "}
      <div className="toast" id="toast" />
      <PageScript name="home" />
    </>
  );
}
