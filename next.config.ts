import type { NextConfig } from "next";

/**
 * The site is exported as plain static files (`npm run build` writes them to `out/`)
 * and hosted on Google Cloud Storage. See docs/static-site-cloud-storage-developer-guide.md.
 * Run `bash static-export-check.sh` before opening a PR.
 */
const nextConfig: NextConfig = {
  output: "export",
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
