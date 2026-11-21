"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const LINKS = [
  ["/", "PNG to SVG"],
  ["/bulk-svg-to-png-converter", "SVG to PNG"],
  ["/gallery", "Gallery"],
  ["/blog", "Blog"],
  ["/about", "About"],
];

function isActive(href, path) {
  if (href === "/blog") return path.startsWith("/blog");
  return path === href;
}

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);

  return (
    <nav className="top">
      <Logo />
      <div className={"navpill" + (open ? " open" : "")} id="navpill">
        {LINKS.map(([href, label]) => (
          <Link key={href} href={href} className={isActive(href, path) ? "on" : undefined}>
            {label}
          </Link>
        ))}
      </div>
      {path === "/" ? (
        <a className="cta" href="#tool" onClick={() => document.getElementById("file")?.click()}>Upload image</a>
      ) : (
        <Link className="cta" href="/#tool">Convert image</Link>
      )}
      <button className="menu" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
}
