// 모호소 건축사사무소 — 공통 동작 (헤더, 모바일 메뉴, 스크롤 등장, 각 페이지 렌더링)
// 모든 내용은 data.js(PROJECTS, SITE)에서 가져옵니다.

// 페이지 깊이에 따라 경로 보정 (works/ 하위에서도 동작하도록)
const ROOT = document.body.dataset.root || ".";

// 사용자가 입력한 텍스트를 안전하게 출력 (HTML 특수문자 이스케이프)
function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
// 줄바꿈을 <br>로
function nl2br(s) {
  return esc(s).replace(/\n/g, "<br>");
}

/* ---------- 공통: 헤더 + 푸터 ---------- */
function renderChrome() {
  const here = document.body.dataset.page || "";
  const header = document.createElement("header");
  header.className = "header";
  header.innerHTML = `
    <div class="header__inner">
      <a class="header__logo" href="${ROOT}/index.html" aria-label="모호소 건축사사무소 홈으로">
        <img src="${ROOT}/assets/img/logo-가로형.png" alt="MOHOSO Architects &amp; Planners" />
      </a>
      <button class="menu-btn" aria-label="메뉴 열기"><span></span><span></span><span></span></button>
      <nav class="nav en">
        <a href="${ROOT}/about.html" class="${here === "about" ? "active" : ""}">About</a>
        <a href="${ROOT}/index.html" class="${here === "work" ? "active" : ""}">Work</a>
        <a href="${ROOT}/contact.html" class="${here === "contact" ? "active" : ""}">Contact</a>
      </nav>
    </div>`;
  document.body.prepend(header);

  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.innerHTML = `
    <div class="footer__inner">
      <span>© ${new Date().getFullYear()} MOHOSO Architects &amp; Planners. All rights reserved.</span>
    </div>`;
  document.body.append(footer);

  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const btn = header.querySelector(".menu-btn");
  const nav = header.querySelector(".nav");
  btn.addEventListener("click", () => nav.classList.toggle("open"));
}

/* ---------- 공통: 스크롤 등장 ---------- */
function observeReveal() {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("on")),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

/* ---------- 메인: 인트로 + 프로젝트 그리드 ---------- */
function renderIntroSub() {
  const el = document.querySelector("#intro-sub");
  if (el && typeof SITE !== "undefined") el.innerHTML = nl2br(SITE.intro.sub);
}

function renderWorkGrid() {
  const grid = document.querySelector(".works__grid");
  if (!grid) return;
  grid.innerHTML = PROJECTS.map(
    (p) => `
    <a class="work-card reveal" href="${ROOT}/work.html?id=${p.slug}">
      <div class="work-card__media">
        <img src="${ROOT}/assets/img/works/${p.slug}/${p.images[0]}" alt="${esc(p.titleKo)} 대표 이미지" loading="lazy" />
      </div>
      <div class="work-card__body">
        <h2 class="work-card__title en">${esc(p.title)}
          <span class="work-card__title-ko">${esc(p.titleKo)}</span>
        </h2>
        <span class="work-card__meta">${esc(p.category)} · ${esc(p.year)}</span>
      </div>
    </a>`
  ).join("");
}

/* ---------- 상세: 프로젝트 페이지 ---------- */
function renderWorkDetail() {
  const mount = document.querySelector("#work-detail");
  if (!mount) return;
  const slug = new URLSearchParams(location.search).get("id");
  const idx = Math.max(0, PROJECTS.findIndex((p) => p.slug === slug));
  const p = PROJECTS[idx];
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  document.title = `${p.titleKo} — 모호소 건축사사무소`;

  const img = (f) => `${ROOT}/assets/img/works/${p.slug}/${f}`;
  mount.innerHTML = `
    <div class="work-hero"><img src="${img(p.images[0])}" alt="${esc(p.titleKo)} 대표 이미지" /></div>
    <div class="wrap">
      <div class="work-head">
        <div>
          <h1 class="en">${esc(p.title)}<small>${esc(p.titleKo)}</small></h1>
          <span class="award">${esc(p.award)}</span>
        </div>
        <dl class="meta-table">
          <div><dt>연도</dt><dd>${esc(p.year)}</dd></div>
          <div><dt>위치</dt><dd>${esc(p.location)}</dd></div>
          <div><dt>연면적</dt><dd>${esc(p.size)}</dd></div>
          <div><dt>프로그램</dt><dd>${esc(p.program)}</dd></div>
          ${p.credit ? `<div><dt>수행</dt><dd>${esc(p.credit)}</dd></div>` : ""}
        </dl>
      </div>
      <p class="work-abstract">${nl2br(p.abstract)}</p>
      <div class="work-gallery">
        ${p.images
          .slice(1)
          .map((f) => `<img class="reveal" src="${img(f)}" alt="${esc(p.titleKo)} 이미지" loading="lazy" />`)
          .join("")}
      </div>
      <nav class="work-nav en">
        <a class="prev" href="${ROOT}/work.html?id=${prev.slug}"><span>Prev</span><span>${esc(prev.title)}</span></a>
        <a class="next" href="${ROOT}/work.html?id=${next.slug}"><span>Next</span><span>${esc(next.title)}</span></a>
      </nav>
    </div>`;
}

/* ---------- About 페이지 ---------- */
function renderAbout() {
  const mount = document.querySelector("#about-mount");
  if (!mount) return;
  const a = SITE.about;
  // 연혁: 연도 없이 텍스트만 (연도가 있으면 함께 표시)
  const rows = (list) =>
    list
      .map((it) => `<li>${it.yr ? `<span class="yr">${esc(it.yr)}</span>` : ""}<span>${esc(it.text)}</span></li>`)
      .join("");
  // 이전 작품: slug가 있으면 썸네일 + 프로젝트 페이지로 이동, 없으면 텍스트만
  const works = (list) =>
    list
      .map((it) => {
        const p = it.slug && PROJECTS.find((x) => x.slug === it.slug);
        const thumb = p
          ? `<span class="pw-thumb"><img src="${ROOT}/assets/img/works/${p.slug}/${p.images[0]}" alt="${esc(it.text)}" loading="lazy" /></span>`
          : `<span class="pw-thumb pw-thumb--none"></span>`;
        const inner = `${thumb}<span class="yr">${esc(it.yr)}</span><span class="pw-text">${esc(it.text)}</span>${p ? '<span class="pw-go">→</span>' : ""}`;
        return p
          ? `<li class="pw-item pw-link"><a href="${ROOT}/work.html?id=${p.slug}">${inner}</a></li>`
          : `<li class="pw-item">${inner}</li>`;
      })
      .join("");
  mount.innerHTML = `
    <div class="about-grid wrap">
      <aside class="about-side"><h2>Office</h2></aside>
      <div class="about-body">
        <p class="statement">${nl2br(a.statement)}</p>
        <p class="desc">${nl2br(a.desc)}</p>
      </div>
    </div>
    <div class="about-grid wrap">
      <aside class="about-side"><h2>Principal</h2></aside>
      <div class="about-body">
        <div class="profile-block" style="margin-top:0">
          <h3>${esc(a.principalName)} <small class="en">${esc(a.principalRole)}</small></h3>
          <ul class="timeline">${rows(a.career)}</ul>
        </div>
        <div class="profile-block">
          <h3>이전 작품 <small class="en">Previous works</small></h3>
          <ul class="pw-list">${works(a.awards)}</ul>
          ${a.note ? `<p class="desc" style="margin-top:18px; font-size:13.5px; color:var(--gray)">${nl2br(a.note)}</p>` : ""}
        </div>
      </div>
    </div>`;
}

/* ---------- Contact 페이지 ---------- */
function renderContact() {
  const mount = document.querySelector("#contact-mount");
  if (!mount) return;
  const c = SITE.contact;
  const blogText = (c.blogUrl || "").replace(/^https?:\/\//, "").replace(/\/$/, "");
  mount.innerHTML = `
    <a class="big-mail en" href="mailto:${esc(c.email)}">${esc(c.email)}</a>
    <div class="contact-grid">
      <div>
        <h3 class="en">Office</h3>
        <p>${nl2br(c.office)}${c.officeMapUrl ? `<br /><a class="map-link" href="${esc(c.officeMapUrl)}" target="_blank" rel="noopener">네이버 지도에서 보기 →</a>` : ""}</p>
      </div>
      <div><h3 class="en">Phone</h3><p><a href="tel:${esc((c.phone || "").replace(/[^0-9+]/g, ""))}">${esc(c.phone)}</a></p></div>
      ${c.instagramHandle ? `<div><h3 class="en">Instagram</h3><p><a href="${esc(c.instagramUrl || "#")}" target="_blank" rel="noopener">${esc(c.instagramHandle)}</a></p></div>` : ""}
      ${c.blogUrl ? `<div><h3 class="en">Blog</h3><p><a href="${esc(c.blogUrl)}" target="_blank" rel="noopener">${esc(blogText)}</a></p></div>` : ""}
    </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  renderIntroSub();
  renderWorkGrid();
  renderWorkDetail();
  renderAbout();
  renderContact();
  observeReveal();
});
