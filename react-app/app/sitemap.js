import pages from "@/lib/pages.json";
import { SITE_URL } from "@/lib/site";

// Generated at build time from lib/pages.json (written by tools/react/convert.js).
export const dynamic = "force-static";

export default function sitemap() {
  return pages.map((p) => ({
    url: SITE_URL + (p.route === "/" ? "/" : p.route),
    lastModified: p.lastmod,
    priority: p.priority,
  }));
}
