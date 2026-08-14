import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("GitHub Pages용 정적 페이지를 만든다", async () => {
  const html = await readFile(new URL("../docs/index.html", import.meta.url), "utf8");
  assert.match(html, /디스트로키드로 음원 발매하기/);
  assert.match(html, /\.\/_next\/static\/css\//);
  assert.doesNotMatch(html, /virtual:vite-rsc|<script\b/i);
  await access(new URL("../docs/.nojekyll", import.meta.url));
});
