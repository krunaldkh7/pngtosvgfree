/** @type {import('next').NextConfig} */
export default {
  output: "export",
  // The page scripts attach DOM listeners once per mount; StrictMode's double mount would duplicate them in dev.
  reactStrictMode: false,
  images: { unoptimized: true },
};
