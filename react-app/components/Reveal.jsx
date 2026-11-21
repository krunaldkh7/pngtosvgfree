"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Fades in `.reveal` elements as they scroll into view (re-run on each route change).
export default function Reveal() {
  const path = usePathname();
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal:not(.in)").forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [path]);
  return null;
}
