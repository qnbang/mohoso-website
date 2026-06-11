// 모호소 건축사사무소 — 공통 동작 (헤더, 모바일 메뉴, 스크롤 등장, 그리드/상세 렌더링)

// 페이지 깊이에 따라 경로 보정 (works/ 하위에서도 동작하도록)
const ROOT = document.body.dataset.root || ".";

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
        <a href="${ROOT}/index.html" class="${here === "work" ? "active" : ""}">Work</a>
        <a href="${ROOT}/about.html" class="${here === "about" ? "active" : ""}">About</a>
        <a href="${ROOT}/contact.html" class="${here === "contact" ? "active" : ""}">Contact</a>
      </nav>
    </div>`;
  document.body.prepend(header);

  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.innerHTML = `
    <div class="footer__inner">
      <img class="footer__logo" src="${ROOT}/assets/img/logo-가로형.png" alt="MOHOSO" />
      <span>© ${new Date().getFullYear()} MOHOSO Architects &amp; Planners. All rights reserved.</span>
    </div>`;
  document.body.append(footer);

  // 스크롤 시 헤더에 경계선
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // 모바일 메뉴
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

/* ---------- 메인: 프로젝트 그리드 ---------- */
function renderWorkGrid() {
  const grid = document.querySelector(".works__grid");
  if (!grid) return;
  grid.innerHTML = PROJECTS.map(
    (p) => `
    <a class="work-card reveal" href="${ROOT}/work.html?id=${p.slug}">
      <div class="work-card__media">
        <img src="${ROOT}/assets/img/works/${p.slug}/hero.jpg" alt="${p.titleKo} 대표 이미지" loading="lazy" />
      </div>
      <div class="work-card__body">
        <h2 class="work-card__title en">${p.title}
          <span class="work-card__title-ko">${p.titleKo}</span>
        </h2>
        <span class="work-card__meta">${p.category} · ${p.year}</span>
      </div>
    </a>`
  ).join("");
}

/* ---------- 상세: 프로젝트 페이지 ---------- */
function renderWorkDetail() {
  const mount = document.querySelector("#work-detail");
  if (!mount) return;
  const slug = new URLSearchParams(location.search).get("id");
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const p = PROJECTS[idx] || PROJECTS[0];
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  document.title = `${p.titleKo} — 모호소 건축사사무소`;

  const img = (f) => `${ROOT}/assets/img/works/${p.slug}/${f}`;
  mount.innerHTML = `
    <div class="work-hero"><img src="${img(p.images[0])}" alt="${p.titleKo} 대표 이미지" /></div>
    <div class="wrap">
      <div class="work-head">
        <div>
          <h1 class="en">${p.title}<small>${p.titleKo}</small></h1>
          <span class="award">${p.award}</span>
        </div>
        <dl class="meta-table">
          <div><dt>연도</dt><dd>${p.year}</dd></div>
          <div><dt>위치</dt><dd>${p.location}</dd></div>
          <div><dt>연면적</dt><dd>${p.size}</dd></div>
          <div><dt>프로그램</dt><dd>${p.program}</dd></div>
          ${p.collaboration ? `<div><dt>협업</dt><dd>${p.collaboration}</dd></div>` : ""}
        </dl>
      </div>
      <p class="work-abstract">${p.abstract}</p>
      <div class="work-gallery">
        ${p.images.slice(1).map((f) => `<img class="reveal" src="${img(f)}" alt="${p.titleKo} 이미지" loading="lazy" />`).join("")}
      </div>
      <nav class="work-nav en">
        <a class="prev" href="${ROOT}/work.html?id=${prev.slug}"><span>Prev</span><span>${prev.title}</span></a>
        <a class="next" href="${ROOT}/work.html?id=${next.slug}"><span>Next</span><span>${next.title}</span></a>
      </nav>
    </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  renderWorkGrid();
  renderWorkDetail();
  observeReveal();
});
