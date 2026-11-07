(function () {
  'use strict';

  // ---- Publications (edit here) ----
  var publications = [
    {
      title: 'Sub-2-fs VUV pulse generation carrying orbital angular momentum',
      authors: '<strong>A. Diallo</strong>, M. Hanna, D. Descamps, F. Catoire',
      role: 'CLEO/Europe–EQEC 2025, Munich (first author, oral)',
      link: 'https://opg.optica.org/abstract.cfm?uri=EQEC-2025-ej_2_2'
    }
  ];

  // ---- Talks (edit here) ----
  var talks = [
    { title: 'CLEO/Europe–EQEC', meta: 'Munich · 2025 · Oral' },
    { title: 'GDR UP', meta: 'Paris · 2025 · Oral' },
    { title: 'GDR ELIOS', meta: 'Bordeaux · 2024 · Oral' },
    { title: 'GPR LIGHT Thrust', meta: 'Bordeaux · 2024 · Oral' },
    { title: 'JCAD', meta: 'Bordeaux · 2024 · Poster' }
  ];

  var pubMount = document.getElementById('pubs');
  publications.forEach(function (p) {
    var el = document.createElement('div');
    el.className = 'pub';
    el.innerHTML = '<a class="pub-title" href="' + p.link + '" target="_blank" rel="noopener">' + p.title + '</a>' +
      '<div class="authors">' + p.authors + '</div><div class="meta">' + p.role + '</div>';
    pubMount.appendChild(el);
  });

  var talksMount = document.getElementById('talks-container');
  talks.forEach(function (t) {
    var el = document.createElement('div');
    el.className = 'card';
    el.innerHTML = '<h3>🎤 ' + t.title + '</h3><div class="meta">' + t.meta + '</div>';
    talksMount.appendChild(el);
  });

  document.getElementById('y').textContent = new Date().getFullYear();

  // ---- Theme toggle ----
  var html = document.documentElement, themeBtn = document.getElementById('theme-btn');
  function syncIcon() { themeBtn.textContent = html.classList.contains('light') ? '🌙' : '☀️'; }
  themeBtn.addEventListener('click', function () {
    html.classList.toggle('light');
    try { localStorage.setItem('theme', html.classList.contains('light') ? 'light' : 'dark'); } catch (e) {}
    syncIcon();
  });
  syncIcon();

  // ---- Scroll: progress bar, header glow, back to top, active link ----
  var header = document.getElementById('header'), bar = document.getElementById('progress'), toTop = document.getElementById('backToTop');
  var links = Array.prototype.slice.call(document.querySelectorAll('nav a'));
  var sections = Array.prototype.slice.call(document.querySelectorAll('section[id]'));
  var ticking = false;
  function update() {
    var y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? y / h * 100 : 0) + '%';
    header.classList.toggle('glow', y > 100);
    toTop.classList.toggle('visible', y > 500);
    var off = header.offsetHeight + 60, current = '';
    sections.forEach(function (s) { if (y >= s.offsetTop - off) current = s.id; });
    links.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + current); });
    ticking = false;
  }
  window.addEventListener('scroll', function () { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
  update();

  // smooth scroll with header offset
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href').slice(1);
      var target = id === 'top' ? document.body : document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      var top = id === 'top' ? 0 : target.getBoundingClientRect().top + window.scrollY - header.offsetHeight - 20;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
  toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  // ---- Reveal sections ----
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('section').forEach(function (s) { obs.observe(s); });
})();
