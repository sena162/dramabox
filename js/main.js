// =========================================================
//  DramaBox – Ana Sayfa JS  (js/main.js)
// =========================================================

/* ── Card Builders ── */

function makeCard(d, showProgress = false) {
  return `
    <div class="card">
      <div class="card-poster">
        <div class="card-art ${d.color}"></div>
        <div class="card-overlay">
          ${d.live
            ? `<div class="card-badge-live"><span class="live-dot"></span>CANLI</div>`
            : `<div class="card-badge-ep">EP ${d.eps}</div>`
          }
          <div class="card-title">${d.title}</div>
        </div>
      </div>
      ${showProgress
        ? `<div class="progress-bar">
             <div class="progress-fill" style="width:${d.progress}%"></div>
           </div>`
        : ''
      }
      <div class="card-info">${d.country} · ${d.year} · ${d.genre}</div>
      <div class="card-rating">&#9733; ${d.rating}</div>
    </div>
  `;
}

function makeFeaturedCard(d) {
  return `
    <div class="featured-card">
      <div class="featured-poster">
        <div class="featured-art ${d.color}"></div>
        <div class="featured-overlay">
          <div class="featured-eps">${d.eps} Bölüm</div>
        </div>
      </div>
      <div class="featured-title">${d.title}</div>
      <div class="featured-meta">${d.country} · ${d.genre} · &#9733; ${d.rating}</div>
    </div>
  `;
}

/* ── Render Rows ── */

function renderRows() {
  const $ = id => document.getElementById(id);

  if ($('continue-row'))
    $('continue-row').innerHTML = DRAMAS.map(d => makeCard(d, true)).join('');

  if ($('trending-row'))
    $('trending-row').innerHTML = TRENDING.map(d => makeCard(d)).join('');

  if ($('country-row'))
    $('country-row').innerHTML = [...DRAMAS].reverse().map(d => makeCard(d)).join('');

  if ($('featured-row'))
    $('featured-row').innerHTML = FEATURED.map(d => makeFeaturedCard(d)).join('');

  if ($('new-row'))
    $('new-row').innerHTML = [...TRENDING].reverse().map(d => makeCard(d)).join('');
}

/* ── Tab Interactions ── */

function initTabs(selector) {
  document.querySelectorAll(selector).forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll(selector).forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

/* ── Init ── */

document.addEventListener('DOMContentLoaded', () => {
  renderRows();
  initTabs('.genre-tab');
  initTabs('.country-tab');
});
