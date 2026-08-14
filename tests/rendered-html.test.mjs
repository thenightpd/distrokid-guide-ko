import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("음원 등록 가이드의 핵심 내용을 서버에서 렌더링한다", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="ko">/i);
  assert.match(html, /디스트로키드로 음원 발매하기/);
  assert.match(html, /한눈에 보는 핵심 요약/);
  assert.match(html, /실제 등록은 이렇게 진행해요/);
  assert.match(html, /저작권과 권리는 따로 챙겨야 해요/);
  assert.match(html, /제출 직전, 이것만 체크하세요/);
  assert.match(html, /자주 묻는 질문/);
  assert.match(html, /https:\/\/distrokid\.com\/vip\/seven\/13133736/);
  assert.match(html, /첫해 요금의 7%를 할인/);
  assert.match(html, /rel="sponsored noreferrer"/);
});

test("스타터 미리보기 흔적이 남아 있지 않다", async () => {
  const response = await render();
  const html = await response.text();
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});
