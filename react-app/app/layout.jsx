import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cookie from "@/components/Cookie";
import Reveal from "@/components/Reveal";
import ScrollToTop from "@/components/ScrollToTop";
import { ADSENSE_CLIENT, BRAND, CONTACT_EMAIL, SITE_URL, SOCIAL_LINKS, TAGLINE } from "@/lib/site";

// Self-hosted at build time: no render-blocking request to Google Fonts.
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap", variable: "--font-inter" });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: BRAND,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  ...(ADSENSE_CLIENT && { other: { "google-adsense-account": ADSENSE_CLIENT } }),
};

export const viewport = { themeColor: "#3d4ef5" };

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: BRAND,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon-512.png`, width: 512, height: 512 },
      email: CONTACT_EMAIL,
      description: TAGLINE,
      ...(SOCIAL_LINKS.length && { sameAs: SOCIAL_LINKS }),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: BRAND,
      url: SITE_URL,
      description: TAGLINE,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />
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
        <main id="main">{children}</main>
        <Footer />
        <Cookie />
        <Reveal />
        <ScrollToTop />
      </body>
    </html>
  );
}
