import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const docs = path.join(root, "docs");
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("export", Date.now().toString());

const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("https://kimyoungil21.github.io/", {
    headers: { accept: "text/html" },
  }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) throw new Error(`Static render failed with ${response.status}`);

let html = await response.text();
html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*>/gi, "")
  .replaceAll('href="/_next/', 'href="./_next/')
  .replaceAll('src="/_next/', 'src="./_next/');

await rm(docs, { recursive: true, force: true });
await mkdir(docs, { recursive: true });
await cp(
  path.join(root, "dist", "client", "_next", "static", "css"),
  path.join(docs, "_next", "static", "css"),
  { recursive: true },
);
await writeFile(path.join(docs, "index.html"), html, "utf8");
await writeFile(path.join(docs, ".nojekyll"), "", "utf8");

const written = await readFile(path.join(docs, "index.html"), "utf8");
if (!written.includes("디스트로키드로 음원 발매하기")) throw new Error("Guide content is missing from static export");
if (!written.includes("./_next/static/css/")) throw new Error("Static stylesheet path was not generated");

console.log(`GitHub Pages export ready: ${path.join(docs, "index.html")}`);
