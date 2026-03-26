/**
 * ═══════════════════════════════════════════════════════════════
 *  EC Movers Ltd — js/components.js
 *  Shared navbar + footer injected on every page.
 *  Change nav/footer here ONCE and it updates everywhere.
 * ═══════════════════════════════════════════════════════════════
 *
 *  HOW PATHS WORK:
 *  Pages in root  (/index.html, /about.html …)   → base = ""
 *  Pages in subdirs (/locations/, /routes/, /blog/) → base = "../"
 *  The `base` variable is calculated automatically below.
 *
 *  ┌─────────────────────────────────────────────────────────┐
 *  │  TO EDIT NAV LINKS     → find injectNav() below         │
 *  │  TO EDIT FOOTER        → find injectFooter() below      │
 *  │  TO EDIT PHONE/EMAIL   → edit the CONTACT_ vars below   │
 *  │  TO SWAP TO REAL LOGO  → search "SWAP LOGO" below       │
 *  └─────────────────────────────────────────────────────────┘
 */

(function () {

  /* ─────────────────────────────────────────────────────────
     EDITABLE CONTACT INFO
     ← Change these values to update phone/email site-wide
  ───────────────────────────────────────────────────────── */
  var PHONE_DISPLAY = '(519) 566-8933';      // ← displayed text
  var PHONE_HREF = 'tel:+15195668933';    // ← tel: link
  var EMAIL = 'eastcanadianmovers@gmail.com';  // ← email address
  var ADDRESS = '4698 Sassafras Ave, Windsor, ON N9G 3E1, Canada';        // ← city shown in footer

  /* ─────────────────────────────────────────────────────────
     PATH RESOLVER — detects subdirectory automatically
  ───────────────────────────────────────────────────────── */
  var inSub = /\/(locations|routes|blog)\//.test(window.location.pathname);
  var base = inSub ? '../' : '';

  /* ─────────────────────────────────────────────────────────
     LOGO HELPER
     ← SWAP LOGO: replace the return value below with:
       '<img src="' + base + 'assets/logo.png" class="logo-img" alt="EC Movers Ltd" />'
       once your logo PNG is placed in /assets/logo.png
  ───────────────────────────────────────────────────────── */
  function logoMark() {
    return '<img src="' + base + 'assets/logo-v.png" class="logo-img" alt="EC Movers Ltd" />';
  }

  function logoHTML(extraStyle) {
    return '<a href="' + base + 'index.html" class="logo"' +
      (extraStyle ? ' style="' + extraStyle + '"' : '') + '>' +
      logoMark() +
      '</a>';
  }

  /* ─────────────────────────────────────────────────────────
     INJECT NAVBAR
     ← TO ADD/REMOVE NAV LINKS: edit the navLinks array
     ← TO EDIT DROPDOWN ITEMS: edit the drop objects
  ───────────────────────────────────────────────────────── */
  function injectNav() {
    var el = document.getElementById('site-nav');
    if (!el) return;

    var servicesDrop =
      '<a href="' + base + 'services.html#residential">Residential Moving</a>' +
      '<a href="' + base + 'services.html#commercial">Commercial Moving</a>' +
      '<a href="' + base + 'services.html#long-distance">Long Distance</a>' +
      '<a href="' + base + 'services.html#piano">Piano &amp; Specialty</a>' +
      '<a href="' + base + 'services.html#senior">Senior Moving</a>' +
      '<a href="' + base + 'services.html#packing">Packing &amp; Storage</a>';

    var locationsDrop =
      '<a href="' + base + 'locations/windsor.html">Windsor</a>' +
      '<a href="' + base + 'locations/lasalle.html">LaSalle</a>' +
      '<a href="' + base + 'locations/tecumseh.html">Tecumseh</a>' +
      '<a href="' + base + 'locations/amherstburg.html">Amherstburg</a>' +
      '<a href="' + base + 'locations/kingsville.html">Kingsville</a>' +
      '<a href="' + base + 'locations/leamington.html">Leamington</a>' +
      '<a href="' + base + 'locations/windsor.html">Windsor</a>' +
      '<a href="' + base + 'locations/sarnia.html">Sarnia</a>' +
      '<a href="' + base + 'locations/london.html">London</a>' +
      '<a href="' + base + 'locations/essex.html">Essex</a>' +
      '<a href="' + base + 'locations/chatham.html">Chatham</a>';
    el.innerHTML =
      '<header id="nav">' +
      '<div class="wrap nav-inner">' +

      logoHTML() +

      '<nav>' +
      '<a href="' + base + 'index.html" class="nav-link">Home</a>' +
      '<a href="' + base + 'about.html" class="nav-link">About Us</a>' +

      // '<a href="' + base + 'services.html" class="nav-link nav-has-drop">' +
      // 'Services <span style="font-size:.65em;opacity:.6">&#9660;</span>' +
      // '<div class="nav-drop">' + servicesDrop + '</div>' +
      // '</a>' +

      '<div class="nav-link nav-has-drop">' +
      '<a href="' + base + 'services.html">Services <span style="font-size:.65em;opacity:.6">&#9660;</span></a>' +
      '<div class="nav-drop">' + servicesDrop + '</div>' +
      '</div>' +

      // '<a href="' + base + 'index.html#locations" class="nav-link nav-has-drop">' +
      // 'Locations <span style="font-size:.65em;opacity:.6">&#9660;</span>' +
      // '<div class="nav-drop">' + locationsDrop + '</div>' +
      // '</a>' +
      '<div class="nav-link nav-has-drop">' +
      '<a href="' + base + 'index.html#locations">Locations <span style="font-size:.65em;opacity:.6">&#9660;</span></a>' +
      '<div class="nav-drop">' + locationsDrop + '</div>' +
      '</div>' +

      '<a href="' + base + 'blog/index.html" class="nav-link">Blog</a>' +
      '<a href="' + base + 'contact.html" class="nav-link">Contact</a>' +
      '</nav>' +

      '<div class="nav-right">' +
      '<a href="' + base + 'contact.html" class="btn btn-primary">Get Free Quote</a>' +
      '<button class="ham" id="hamBtn" aria-label="Open navigation menu">' +
      '<span></span><span></span><span></span>' +
      '</button>' +
      '</div>' +

      '</div>' +
      '</header>' +

      '<div class="m-drawer" id="mDrawer" role="dialog" aria-label="Navigation menu">' +
      '<a href="' + base + 'index.html"          onclick="closeDrawer()">Home</a>' +
      '<a href="' + base + 'about.html"          onclick="closeDrawer()">About Us</a>' +
      '<a href="' + base + 'services.html"       onclick="closeDrawer()">Services</a>' +
      '<a href="' + base + 'index.html#locations" onclick="closeDrawer()">Locations</a>' +
      '<a href="' + base + 'blog/index.html"     onclick="closeDrawer()">Blog</a>' +
      '<a href="' + base + 'contact.html"        onclick="closeDrawer()">Contact</a>' +
      '<a href="' + PHONE_HREF + '"              onclick="closeDrawer()">&#128222; ' + PHONE_DISPLAY + '</a>' +
      '<a href="' + base + 'contact.html" class="btn btn-white m-cta" onclick="closeDrawer()">Get Free Quote &rarr;</a>' +
      '</div>';

    markActive();
  }

  /* ─────────────────────────────────────────────────────────
     INJECT FOOTER
     ← TO EDIT SOCIAL LINKS: replace href="#" with real URLs
     ← TO EDIT TAGLINE: change the ft-desc paragraph text
  ───────────────────────────────────────────────────────── */
  function injectFooter() {
    var el = document.getElementById('site-footer');
    if (!el) return;

    el.innerHTML =
      '<footer>' +
      '<div class="wrap">' +
      '<div class="ft-top">' +

      '<div class="ft-logo-wrap">' +
      logoHTML('color:#fff') +
      /* ← EDIT tagline here */
      '<p class="ft-desc">Professional moving services built on transparency, care, and reliability. Your next chapter starts here.</p>' +
      '</div>' +

      '<div class="ft-col">' +
      '<h5>Services</h5>' +
      '<ul>' +
      '<li><a href="' + base + 'services.html#residential">Residential Moving</a></li>' +
      '<li><a href="' + base + 'services.html#commercial">Commercial Moving</a></li>' +
      '<li><a href="' + base + 'services.html#long-distance">Long Distance</a></li>' +
      '<li><a href="' + base + 'services.html#piano">Piano Moving</a></li>' +
      '<li><a href="' + base + 'services.html#senior">Senior Moving</a></li>' +
      '<li><a href="' + base + 'services.html#packing">Packing &amp; Storage</a></li>' +
      '</ul>' +
      '</div>' +

      '<div class="ft-col">' +
      '<h5>Company</h5>' +
      '<ul>' +
      '<li><a href="' + base + 'about.html">About Us</a></li>' +
      '<li><a href="' + base + 'index.html#reviews">Reviews</a></li>' +
      '<li><a href="' + base + 'index.html#gallery">Gallery</a></li>' +
      '<li><a href="' + base + 'index.html#faq">FAQ</a></li>' +
      '<li><a href="' + base + 'blog/index.html">Blog</a></li>' +
      '<li><a href="' + base + 'contact.html">Contact Us</a></li>' +
      '</ul>' +
      '</div>' +

      '<div class="ft-col">' +
      '<h5>Contact</h5>' +
      /* ← Phone/email/address pulled from variables at top of file */
      '<div class="ft-ci">&#128222; <div><strong><a href="' + PHONE_HREF + '" style="color:rgba(255,255,255,.72)">' + PHONE_DISPLAY + '</a></strong>Available 24/7</div></div>' +
      '<div class="ft-ci">&#9993; <div><strong><a href="mailto:' + EMAIL + '" style="color:rgba(255,255,255,.72)">' + EMAIL + '</a></strong>Reply in hours</div></div>' +
      '<div class="ft-ci">&#128205; <div><strong>' + ADDRESS + '</strong>Serving all Ontario</div></div>' +
      '<div style="display:flex;gap:.7rem;margin-top:1.1rem;flex-wrap:wrap">' +
      /* ← TO ADD REAL SOCIAL LINKS: replace href="#" with your actual URLs */
      '<a href="#" class="ft-social-chip" aria-label="Facebook">&#128248; FB</a>' +
      '<a href="#" class="ft-social-chip" aria-label="Instagram">&#128247; IG</a>' +
      '<a href="#" class="ft-social-chip" aria-label="Google Reviews">&#11088; Google</a>' +
      '</div>' +
      '</div>' +

      '</div>' +

      '<div class="ft-bot">' +
      '<span>&#169; 2025 EC Movers Ltd. All rights reserved.</span>' +
      '<div class="ft-links">' +
      /* ← Create privacy.html + terms.html then update these hrefs */
      '<a href="' + base + 'privacy.html">Privacy Policy</a>' +
      '<a href="' + base + 'terms.html">Terms of Service</a>' +
      '</div>' +
      '</div>' +

      '</div>' +
      '</footer>' +
      '<button id="stb" aria-label="Scroll to top">&#8593;</button>';
  }

  /* ─────────────────────────────────────────────────────────
     MARK ACTIVE NAV LINK
  ───────────────────────────────────────────────────────── */
  function markActive() {
    var links = document.querySelectorAll('nav a');
    var current = window.location.pathname;

    links.forEach(function (link) {
      link.classList.remove('nav-active');
    });

    var found = false;

    links.forEach(function (link) {
      var href = new URL(link.href).pathname;

      if (current === href && !found) {
        link.classList.add('nav-active');
        found = true;
      }
    });

    if (!found) {
      links.forEach(function (link) {
        var href = new URL(link.href).pathname;


        if (href.includes('/blog') && current.includes('/blog')) {
          link.classList.add('nav-active');
        }
      });
    }
  }
  /* ─────────────────────────────────────────────────────────
     BOOTSTRAP
  ───────────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {

    injectNav();
    injectFooter();

    /* Navbar scroll */
    var nav = document.getElementById('nav');
    var stb = document.getElementById('stb');
    window.addEventListener('scroll', function () {
      if (nav) nav.classList.toggle('stuck', window.scrollY > 80);
      if (stb) stb.classList.toggle('show', window.scrollY > 500);
    }, { passive: true });
    if (stb) stb.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* Mobile drawer */
    window.closeDrawer = function () {
      var h = document.getElementById('hamBtn');
      var d = document.getElementById('mDrawer');
      if (h) h.classList.remove('o');
      if (d) d.classList.remove('o');
      document.body.style.overflow = '';
    };
    document.addEventListener('click', function (e) {
      var h = document.getElementById('hamBtn');
      if (!h) return;
      if (e.target === h || h.contains(e.target)) {
        var d = document.getElementById('mDrawer');
        var open = d.classList.toggle('o');
        h.classList.toggle('o', open);
        document.body.style.overflow = open ? 'hidden' : '';
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') window.closeDrawer();
    });

    /* Scroll reveal */
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.sr, .sr-l, .sr-r').forEach(function (el) { ro.observe(el); });

    /* FAQ accordion */
    document.querySelectorAll('.faq-q').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var isOpen = btn.classList.contains('open');
        document.querySelectorAll('.faq-q.open').forEach(function (b) {
          b.classList.remove('open');
          b.nextElementSibling.classList.remove('open');
        });
        if (!isOpen) {
          btn.classList.add('open');
          btn.nextElementSibling.classList.add('open');
        }
      });
    });

    /* Hero stat counters (index.html only) */
    var hero = document.getElementById('hero');
    if (hero) {
      var cObs = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          countUp('s1', 5.0, true);   /* ← EDIT: rating */
          countUp('s2', 2500, false);  /* ← EDIT: happy clients */
          countUp('s3', 10, false);  /* ← EDIT: years experience */
          countUp('s4', 2000, false);  /* ← EDIT: five-star reviews */
          cObs.disconnect();
        }
      }, { threshold: 0.3 });
      cObs.observe(hero);
    }

    /* Smooth anchor scroll */
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href*="#"]');
      if (!a) return;
      var href = a.getAttribute('href');
      var hashIdx = href.indexOf('#');
      if (hashIdx === -1) return;
      var filePart = href.slice(0, hashIdx);
      var hash = href.slice(hashIdx + 1);
      var curFile = window.location.pathname.split('/').pop() || 'index.html';
      if (filePart === '' || filePart.endsWith(curFile)) {
        var target = document.getElementById(hash);
        if (target) {
          e.preventDefault();
          window.closeDrawer();
          var navEl = document.getElementById('nav');
          var offset = navEl ? navEl.offsetHeight : 80;
          window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
        }
      }
    });

    /* Quote form handler (used on contact.html and any page with id="qForm") */
    var form = document.getElementById('qForm');
    var fMsg = document.getElementById('fMsg');
    if (form && fMsg) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var btn = form.querySelector('button[type="submit"]');
        var orig = btn.textContent;
        btn.textContent = 'Sending\u2026';
        btn.disabled = true;

        /*
         * ─── BACKEND HOOK ───────────────────────────────────────
         * Replace the setTimeout below with a real fetch() call:
         *
         * fetch('/api/quote', {
         *   method: 'POST',
         *   headers: { 'Content-Type': 'application/json' },
         *   body: JSON.stringify(Object.fromEntries(new FormData(form)))
         * })
         * .then(function(r) { if (!r.ok) throw new Error(); return r.json(); })
         * .then(function() { showSuccess(); })
         * .catch(function() { showError(); });
         * ────────────────────────────────────────────────────────
         */
        setTimeout(function () {
          fMsg.style.display = 'block';
          fMsg.style.color = '#1A7A3A';
          fMsg.textContent = '\u2705 Quote request received! We\u2019ll be in touch within a few hours.';
          form.reset();
          btn.textContent = orig;
          btn.disabled = false;
          setTimeout(function () { fMsg.style.display = 'none'; }, 7000);
        }, 900);
      });
    }

  }); // end DOMContentLoaded

  /* Counter animation */
  function countUp(id, target, decimal) {
    var el = document.getElementById(id);
    if (!el) return;
    var dur = 2000, steps = 60, i = 0;
    var timer = setInterval(function () {
      i++;
      var p = 1 - Math.pow(1 - i / steps, 3);
      el.textContent = decimal ? (target * p).toFixed(1) : Math.floor(target * p).toLocaleString();
      if (i >= steps) {
        el.textContent = decimal ? target.toFixed(1) : target.toLocaleString();
        clearInterval(timer);
      }
    }, dur / steps);
  }

})();
