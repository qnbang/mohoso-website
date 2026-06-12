/* 시각조정-텍스트.js — 시각편집기로 바꾼 글자 (직접 수정해도 됩니다)
   형식: { "페이지경로": { "CSS선택자": "바꿀 글자" } } — 편집기가 다시 읽어들입니다. */
(() => {
  const T = {};  // About 소개글은 data.js(SITE.about)로 옮겨 정리했습니다.
  const page = location.pathname.replace(/index\.html$/, "") + location.search;
  const P = T[page] || {};
  if (!Object.keys(P).length) return;
  const apply = () => {
    for (const sel in P) document.querySelectorAll(sel).forEach((el) => {
      if (el.textContent !== P[sel]) el.textContent = P[sel];
    });
  };
  const run = () => { apply(); new MutationObserver(apply).observe(document.body, { childList: true, subtree: true }); };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", run) : run();
})();
