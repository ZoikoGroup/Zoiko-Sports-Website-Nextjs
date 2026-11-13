import type { NextConfig } from "next";

/**
 * The site runs as a Next.js server: `npm run build` then `npm start` (next start).
 */
const nextConfig: NextConfig = {
  // The image resizer (/_next/image) is a server feature; images are served as committed.
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
