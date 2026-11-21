import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="site">
      <div className="fgrid">
        <div>
          <Logo style={{ fontSize: "19px" }} />
          <p>Free online tools to convert PNG, JPG and WEBP images into crisp, scalable SVG vectors — right in your browser.</p>
        </div>
        <div>
          <h6>Tools</h6>
          <Link href="/">PNG to SVG Converter</Link>
          <Link href="/bulk-svg-to-png-converter">Bulk SVG to PNG</Link>
          <Link href="/gallery">Free SVG Gallery</Link>
        </div>
        <div>
          <h6>Learn</h6>
          <Link href="/blog">Blog</Link>
          <Link href="/#flow">How it works</Link>
          <Link href="/#faq">FAQs</Link>
        </div>
        <div>
          <h6>Company</h6>
          <Link href="/about">About us</Link>
          <Link href="/contact">Contact us</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
      </div>
      <div className="fbot">
        <span>© 2026 PNG TO SVG. All rights reserved.</span>
        <span>contact@pngtosvgfree.com</span>
      </div>
    </footer>
  );
}
