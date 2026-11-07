(function () {
  'use strict';

  // ---- Publications (edit here) ----
  var publications = [
    {
      title: 'Sub-2-fs VUV pulse generation carrying orbital angular momentum',
      authors: '<strong>A. Diallo</strong>, M. Hanna, D. Descamps, F. Catoire',
      role: 'CLEO/Europe–EQEC 2025, Munich · first author, oral',
      link: 'https://opg.optica.org/abstract.cfm?uri=EQEC-2025-ej_2_2'
    }
  ];

  // ---- Talks (edit here) ----
  var talks = [
    { title: '🎤 CLEO/Europe–EQEC', meta: 'Munich · 2025 · Oral' },
    { title: '🎤 GDR UP', meta: 'Paris · 2025 · Oral' },
    { title: '🎤 GDR ELIOS', meta: 'Bordeaux · 2024 · Oral' },
    { title: '🎤 GPR LIGHT Thrust', meta: 'Bordeaux · 2024 · Oral' },
    { title: '🧾 JCAD', meta: 'Bordeaux · 2024 · Poster' }
  ];

  var pubMount = document.getElementById('pubs');
  publications.forEach(function (p) {
    var el = document.createElement('div');
    el.className = 'pub glass';
    el.innerHTML = '<a class="pub-title" href="' + p.link + '" target="_blank" rel="noopener">' + p.title + '</a>' +
      '<div class="authors">' + p.authors + '</div><span class="meta">' + p.role + '</span>';
    pubMount.appendChild(el);
  });

  var talksMount = document.getElementById('talks-container');
  talks.forEach(function (t) {
    var el = document.createElement('div');
    el.className = 'card glass talk';
    el.innerHTML = '<h3>' + t.title + '</h3><div class="meta">' + t.meta + '</div>';
    talksMount.appendChild(el);
  });

  document.getElementById('y').textContent = new Date().getFullYear();

  // ---- Scroll: progress bar, back to top, active section in sidebar ----
  var bar = document.getElementById('progress'), toTop = document.getElementById('backToTop');
  var links = Array.prototype.slice.call(document.querySelectorAll('.top-nav a'));
  var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
  var ticking = false;
  function update() {
    var y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? y / h * 100 : 0) + '%';
    toTop.classList.toggle('visible', y > 500);
    var current = sections[0].id;
    sections.forEach(function (s) { if (s.getBoundingClientRect().top < window.innerHeight * 0.35) current = s.id; });
    links.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + current); });
    ticking = false;
  }
  window.addEventListener('scroll', function () { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
  update();
  toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  // ---- Reveal sections ----
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('main section').forEach(function (s) { obs.observe(s); });
})();

// ---- Light / dark mode ----
(function () {
  var html = document.documentElement, btn = document.getElementById('theme-btn');
  btn.addEventListener('click', function () {
    var dark = html.classList.toggle('dark');
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
  });
})();
