"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Pages start with non-visual elements (<style>, JSON-LD), so Next.js' default
// "scroll to the new segment" can't find a target. Always start new pages at the top,
// unless the link points to an anchor (e.g. /#faq).
export default function ScrollToTop() {
  const path = usePathname();
  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [path]);
  return null;
}
