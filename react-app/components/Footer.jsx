import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="site">
      <div className="fgrid">
        <div>
          <Logo style={{ fontSize: "19px" }} />
          <p>Free online PNG to SVG converter that turns PNG, JPG and WEBP images into clean, scalable vectors right in your browser.</p>
        </div>
        <div>
          <p className="fh">Tools</p>
          <Link href="/">PNG to SVG Converter</Link>
          <Link href="/bulk-svg-to-png-converter">Bulk SVG to PNG</Link>
          <Link href="/gallery">Free SVG Gallery</Link>
        </div>
        <div>
          <p className="fh">Converters</p>
          <Link href="/jpg-to-svg">JPG to SVG</Link>
          <Link href="/webp-to-svg">WEBP to SVG</Link>
          <Link href="/image-to-svg">Image to SVG</Link>
          <Link href="/logo-to-svg">Logo to SVG</Link>
          <Link href="/png-to-svg-cricut">PNG to SVG for Cricut</Link>
          <Link href="/png-to-svg-laser-cutting">PNG to SVG for Laser</Link>
          <Link href="/transparent-png-to-svg">Transparent PNG to SVG</Link>
          <Link href="/black-and-white-png-to-svg">Black &amp; White PNG to SVG</Link>
          <Link href="/photo-to-svg">Photo to SVG</Link>
          <Link href="/drawing-to-svg">Drawing to SVG</Link>
        </div>
        <div>
          <p className="fh">Learn</p>
          <Link href="/blog">Blog</Link>
          <Link href="/#flow">How it works</Link>
          <Link href="/#faq">FAQs</Link>
        </div>
        <div>
          <p className="fh">Company</p>
          <Link href="/about">About us</Link>
          <Link href="/contact">Contact us</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
      </div>
      <div className="fbot">
        <span>© 2026 PNG to SVG Free. All rights reserved.</span>
        <span>contact@pngtosvgfree.com</span>
      </div>
    </footer>
  );
}
