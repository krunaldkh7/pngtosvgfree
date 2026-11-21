import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cookie from "@/components/Cookie";
import Reveal from "@/components/Reveal";
import { ADSENSE_CLIENT, SITE_URL } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  ...(ADSENSE_CLIENT && { other: { "google-adsense-account": ADSENSE_CLIENT } }),
  icons: { icon: { url: "/logo.svg", type: "image/svg+xml" } },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        {ADSENSE_CLIENT && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <Cookie />
        <Reveal />
      </body>
    </html>
  );
}
