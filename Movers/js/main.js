/**
 * EC Movers Ltd — main.js
 * Handles: navbar scroll, mobile drawer, scroll reveal,
 *          hero counter animations, quote form submission.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ─────────────────────────────────────────────
     1. NAVBAR — sticky + logo swap
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
  const hamBtn = document.getElementById('hamBtn');
  const mDrawer = document.getElementById('mDrawer');

  function closeDrawer() {
    hamBtn.classList.remove('o');
    mDrawer.classList.remove('o');
    document.body.style.overflow = '';
  }
  window.closeDrawer = closeDrawer;

  hamBtn.addEventListener('click', () => {
    const open = mDrawer.classList.toggle('o');
    hamBtn.classList.toggle('o', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

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

  document.querySelectorAll('.sr, .sr-l, .sr-r').forEach(el => revealObs.observe(el));


  /* ─────────────────────────────────────────────
     4. HERO STAT COUNTERS
  ───────────────────────────────────────────── */
  function countUp(el, target, decimal = false) {
    const duration = 2000;
    const steps = 60;
    let i = 0;

    const timer = setInterval(() => {
      i++;
      const progress = 1 - Math.pow(1 - i / steps, 3);
      const value = target * progress;

      el.textContent = decimal
        ? value.toFixed(1)
        : Math.floor(value).toLocaleString();

      if (i >= steps) {
        el.textContent = decimal ? target.toFixed(1) : target.toLocaleString();
        clearInterval(timer);
      }
    }, duration / steps);
  }

  const heroSection = document.getElementById('hero');
  const counterObs = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      countUp(document.getElementById('s1'), 4.9, true);
      countUp(document.getElementById('s2'), 1000, false);
      countUp(document.getElementById('s3'), 10, false);
      countUp(document.getElementById('s4'), 800, false);
      counterObs.disconnect();
    }
  }, { threshold: 0.3 });

  if (heroSection) counterObs.observe(heroSection);


  /* ─────────────────────────────────────────────
     5. QUOTE FORM SUBMISSION
        Replace the TODO block with real fetch() call.
  ───────────────────────────────────────────── */
  const qForm = document.getElementById('qForm');
  const fMsg = document.getElementById('fMsg');

  if (qForm) {
    qForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = qForm.querySelector('button[type="submit"]');
      const origText = submitBtn.textContent;
      submitBtn.textContent = 'Sending…';
      submitBtn.disabled = true;

      const data = Object.fromEntries(new FormData(qForm));

      try {
        /*
         * TODO: Replace with real API call:
         *
         * const res = await fetch('/api/quote', {
         *   method: 'POST',
         *   headers: { 'Content-Type': 'application/json' },
         *   body: JSON.stringify(data),
         * });
         * if (!res.ok) throw new Error('Server error');
         */

        await new Promise(resolve => setTimeout(resolve, 1000)); // demo delay

        fMsg.style.display = 'block';
        fMsg.style.color = '#1A7A3A';
        fMsg.textContent = '✅ Quote request received! We\'ll be in touch within a few hours.';
        qForm.reset();
        setTimeout(() => { fMsg.style.display = 'none'; }, 7000);

      } catch (err) {
        fMsg.style.display = 'block';
        fMsg.style.color = '#C0392B';
        fMsg.textContent = '❌ Something went wrong. Please call us directly or try again.';
      } finally {
        submitBtn.textContent = origText;
        submitBtn.disabled = false;
      }
    });
  }


  /* ─────────────────────────────────────────────
     6. FAQ ACCORDION
  ───────────────────────────────────────────── */
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const isOpen = btn.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-q.open').forEach(b => {
        b.classList.remove('open');
        b.nextElementSibling.classList.remove('open');
      });

      // Open clicked (if wasn't open)
      if (!isOpen) {
        btn.classList.add('open');
        answer.classList.add('open');
      }
    });
  });


  /* ─────────────────────────────────────────────
     7. SMOOTH ANCHOR SCROLL
  ───────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      closeDrawer();
      const offset = nav ? nav.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

});
