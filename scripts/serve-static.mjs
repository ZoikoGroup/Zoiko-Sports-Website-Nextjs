// Serves the static export in out/ (what `npm run build` produces). Used by `npm start`,
// because `next start` does not work with output: "export". No dependencies.
// Mirrors the bucket: /path -> path.html or path/index.html, unknown URLs -> 404.html (status 404).
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize, resolve, sep } from "node:path";

const { STATIC_DIR, PORT: PORT_ENV } = process.env;
const ROOT = resolve(STATIC_DIR || "out");
const PORT = Number(PORT_ENV) || 3000;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".xml": "application/xml",
  ".webmanifest": "application/manifest+json",
};

async function isFile(p) {
  try {
    return (await stat(p)).isFile();
  } catch {
    return false;
  }
}

async function findFile(urlPath) {
  const rel = normalize(urlPath).replace(/^([/\\])+/, "");
  const base = join(ROOT, rel);
  if (base !== ROOT && !base.startsWith(ROOT + sep)) return null; // path traversal
  for (const candidate of [base, `${base.replace(/[/\\]+$/, "")}.html`, join(base, "index.html")]) {
    if (await isFile(candidate)) return candidate;
  }
  return null;
}

createServer(async (req, res) => {
  try {
    let urlPath;
    try {
      urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
    } catch {
      urlPath = "/";
    }
    let file = await findFile(urlPath);
    let status = 200;
    if (!file) {
      file = join(ROOT, "404.html");
      status = 404;
    }
    const body = await readFile(file);
    res.writeHead(status, {
      "Content-Type": TYPES[extname(file).toLowerCase()] || "application/octet-stream",
      "Cache-Control": urlPath.startsWith("/_next/static/")
        ? "public, max-age=31536000, immutable"
        : "public, max-age=0, must-revalidate",
    });
    res.end(req.method === "HEAD" ? undefined : body);
  } catch (err) {
    console.error(err);
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Internal Server Error");
  }
// No host given: listens on every address (IPv4 and IPv6), so localhost health checks always reach it.
}).listen(PORT, () => console.log(`Serving ${ROOT} on port ${PORT}`));
