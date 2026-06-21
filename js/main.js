// ============================================================
// MAIN.JS - Homepage rendering
// ============================================================

// Date display
document.getElementById('currentDate').textContent =
  new Date().toLocaleDateString('hi-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

// Hamburger menu
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// Search
function doSearch() {
  const q = document.getElementById('searchInput').value.trim();
  if (q) window.location.href = 'search.html?q=' + encodeURIComponent(q);
}
document.getElementById('searchInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') doSearch();
});

// Breaking news ticker
function loadTicker() {
  const breaking = DB.getBreaking();
  const latest = DB.getLatest(6);
  const items = breaking.length > 0 ? breaking : latest;
  const ticker = document.getElementById('ticker');
  ticker.innerHTML = items.map(a =>
    `<span><a href="article.html?id=${a.id}">${a.title}</a></span>`
  ).join('');
}

// Featured section
function loadFeatured() {
  const featured = DB.getFeatured(5);
  if (featured.length === 0) return;

  const main = featured[0];
  const sides = featured.slice(1, 5);

  document.getElementById('featuredMain').innerHTML = `
    <div class="feat-img">
      <img src="${main.image || NO_IMAGE_SVG}" alt="${main.title}" onerror="this.src='${NO_IMAGE_SVG}'">
      <span class="feat-cat">${DB.categories[main.category]?.label || main.category}</span>
    </div>
    <div class="feat-info">
      <h2><a href="article.html?id=${main.id}">${main.title}</a></h2>
      <p>${main.excerpt}</p>
      <div class="feat-meta">
        <span><i class="fas fa-user"></i>${main.author}</span>
        <span><i class="fas fa-clock"></i>${DB.formatDate(main.date)}</span>
        <span><i class="fas fa-eye"></i>${main.views} views</span>
      </div>
    </div>`;

  document.getElementById('featuredSide').innerHTML = sides.map(a => `
    <div class="side-card">
      <div class="sc-img"><img src="${a.image || NO_IMAGE_SVG}" alt="${a.title}" onerror="this.src='${NO_IMAGE_SVG}'"></div>
      <div class="sc-info">
        <div class="sc-cat">${DB.categories[a.category]?.label || a.category}</div>
        <h4><a href="article.html?id=${a.id}">${a.title}</a></h4>
        <div class="sc-date">${DB.formatDate(a.date)}</div>
      </div>
    </div>`).join('');
}

// News card HTML
function newsCardHTML(a) {
  return `
    <div class="news-card">
      <div class="nc-img">
        <img src="${a.image || NO_IMAGE_SVG}" alt="${a.title}" onerror="this.src='${NO_IMAGE_SVG}'">
        <span class="nc-cat">${DB.categories[a.category]?.label || a.category}</span>
      </div>
      <div class="nc-body">
        <h3><a href="article.html?id=${a.id}">${a.title}</a></h3>
        <p>${a.excerpt}</p>
        <div class="nc-meta">
          <span><i class="fas fa-user"></i> ${a.author}</span>
          <span><i class="fas fa-clock"></i> ${DB.formatDate(a.date)}</span>
        </div>
      </div>
    </div>`;
}

// Category sections on homepage
function loadCategorySections() {
  const catOrder = ['news', 'travel', 'sports', 'education', 'business', 'technology', 'crime'];
  const container = document.getElementById('categorySections');
  let html = '';

  catOrder.forEach(cat => {
    const articles = DB.getByCategory(cat, 3);
    if (articles.length === 0) return;
    const catInfo = DB.categories[cat] || { label: cat, icon: 'fa-newspaper' };
    html += `
      <div class="cat-section">
        <div class="section-header">
          <h2><i class="fas ${catInfo.icon}"></i> ${catInfo.label}</h2>
          <a href="category.html?cat=${cat}">See All &rarr;</a>
        </div>
        <div class="news-grid">
          ${articles.map(newsCardHTML).join('')}
        </div>
      </div>`;
  });

  container.innerHTML = html;
}

// Sidebar: most read
function loadMostRead() {
  const articles = DB.getMostViewed(5);
  document.getElementById('mostReadList').innerHTML = articles.map((a, i) => `
    <li>
      <div class="mr-num">${i + 1}</div>
      <div class="mr-title"><a href="article.html?id=${a.id}">${a.title}</a></div>
    </li>`).join('');
}

// Sidebar: categories with count
function loadCatList() {
  const all = DB.getAll();
  const counts = {};
  all.forEach(a => { counts[a.category] = (counts[a.category] || 0) + 1; });
  const el = document.getElementById('catList');
  if (!el) return;
  el.innerHTML = Object.entries(DB.categories).map(([key, val]) => `
    <li><a href="category.html?cat=${key}">
      <span><i class="fas ${val.icon}"></i> ${val.label}</span>
      <span>${counts[key] || 0}</span>
    </a></li>`).join('');
}

// Init
loadTicker();
loadFeatured();
loadCategorySections();
loadMostRead();
loadCatList();
