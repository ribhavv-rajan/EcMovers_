/**
 * SwiftShift Movers — main.js
 * Handles: navbar scroll, mobile drawer, scroll reveal,
 *          hero counter animations, quote form submission.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ─────────────────────────────────────────────
     1. NAVBAR — sticky + logo color swap
  ───────────────────────────────────────────── */
  const nav = document.getElementById('nav');
  const stb = document.getElementById('stb');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.classList.toggle('stuck', y > 80);
    stb.classList.toggle('show', y > 500);
  }, { passive: true });

  stb.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  /* ─────────────────────────────────────────────
     2. MOBILE DRAWER
  ───────────────────────────────────────────── */
  const hamBtn  = document.getElementById('hamBtn');
  const mDrawer = document.getElementById('mDrawer');

  function closeDrawer() {
    hamBtn.classList.remove('o');
    mDrawer.classList.remove('o');
    document.body.style.overflow = '';
  }
  window.closeDrawer = closeDrawer; // expose for inline onclick

  hamBtn.addEventListener('click', () => {
    const open = mDrawer.classList.toggle('o');
    hamBtn.classList.toggle('o', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close drawer on ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDrawer();
  });


  /* ─────────────────────────────────────────────
     3. SCROLL REVEAL
  ───────────────────────────────────────────── */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.sr, .sr-l, .sr-r').forEach(el => {
    revealObs.observe(el);
  });


  /* ─────────────────────────────────────────────
     4. HERO STAT COUNTERS
  ───────────────────────────────────────────── */
  /**
   * Animates a number from 0 to `target` over `duration` ms.
   * @param {HTMLElement} el      - element to update
   * @param {number}      target  - final value
   * @param {boolean}     decimal - true → one decimal place
   */
  function countUp(el, target, decimal = false) {
    const duration = 2000;
    const steps    = 60;
    let   i        = 0;

    const timer = setInterval(() => {
      i++;
      // Ease-out cubic
      const progress = 1 - Math.pow(1 - i / steps, 3);
      const value    = target * progress;

      el.textContent = decimal
        ? value.toFixed(1)
        : Math.floor(value).toLocaleString();

      if (i >= steps) {
        el.textContent = decimal ? target.toFixed(1) : target.toLocaleString();
        clearInterval(timer);
      }
    }, duration / steps);
  }

  // Trigger counters when hero enters viewport
  const heroSection = document.getElementById('hero');
  const counterObs  = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      countUp(document.getElementById('s1'), 4.9,  true);
      countUp(document.getElementById('s2'), 2500, false);
      countUp(document.getElementById('s3'), 10,   false);
      countUp(document.getElementById('s4'), 1500, false);
      counterObs.disconnect();
    }
  }, { threshold: 0.3 });

  if (heroSection) counterObs.observe(heroSection);


  /* ─────────────────────────────────────────────
     5. QUOTE FORM SUBMISSION (front-end demo)
        Replace with real fetch() POST to your backend.
  ───────────────────────────────────────────── */
  const qForm = document.getElementById('qForm');
  const fMsg  = document.getElementById('fMsg');

  if (qForm) {
    qForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = qForm.querySelector('button[type="submit"]');
      const original  = submitBtn.textContent;
      submitBtn.textContent = 'Sending…';
      submitBtn.disabled    = true;

      // ── Collect form data
      const data = Object.fromEntries(new FormData(qForm));

      try {
        /*
         * TODO: Replace this block with a real API call, e.g.:
         *
         * const res = await fetch('/api/quote', {
         *   method: 'POST',
         *   headers: { 'Content-Type': 'application/json' },
         *   body: JSON.stringify(data),
         * });
         * if (!res.ok) throw new Error('Server error');
         */

        // Simulate network delay for demo
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Success state
        fMsg.style.display = 'block';
        fMsg.style.color   = '#1A7A3A';
        fMsg.textContent   = '✅ Quote request received! We\'ll be in touch within a few hours.';
        qForm.reset();

        setTimeout(() => { fMsg.style.display = 'none'; }, 7000);

      } catch (err) {
        fMsg.style.display = 'block';
        fMsg.style.color   = '#C0392B';
        fMsg.textContent   = '❌ Something went wrong. Please call us directly or try again.';
      } finally {
        submitBtn.textContent = original;
        submitBtn.disabled    = false;
      }
    });
  }


  /* ─────────────────────────────────────────────
     6. SMOOTH ANCHOR SCROLL (for mobile nav links)
  ───────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      closeDrawer();
      const offset = nav ? nav.offsetHeight : 0;
      const top    = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

});
