# EC Movers Ltd — Project Documentation

> **Paste this file into any new Claude conversation to instantly resume work.**

---

## 📌 Project Overview

| Field            | Value                                                        |
|------------------|--------------------------------------------------------------|
| **Project Name** | EC Movers Ltd Website                                        |
| **Type**         | Professional Moving Company Website                         |
| **Phase**        | Frontend Complete → Backend Next                            |
| **Status**       | ✅ Frontend Done · ⏳ Backend Pending                         |
| **References**   | https://visorguys.com · https://ancientmovers.ca             |
| **Logo File**    | `assets/logo.png` — circular royal blue badge (provided)    |

---

## 🎨 Design System

### Color Palette (derived from EC Movers logo)
| Token         | Hex       | Usage                                  |
|---------------|-----------|----------------------------------------|
| `--blue`      | `#1B3FA0` | Primary brand blue (matches logo)      |
| `--blue-d`    | `#142E7A` | Darker hover state                     |
| `--blue-l`    | `#2A52C9` | Lighter blue highlights                |
| `--blue-xl`   | `#3D65E0` | Accent on dark backgrounds             |
| `--blue-pale` | `#EEF2FB` | Light section backgrounds              |
| `--blue-mid`  | `#162E82` | Hero + form section background         |
| `--ink`       | `#0D0F14` | Near-black body text                   |
| `--slate`     | `#2C3347` | Dark body text                         |
| `--muted`     | `#6B7280` | Secondary / description text           |
| `--border`    | `#D5DCF0` | Borders, dividers                      |
| `--white`     | `#FFFFFF` | Cards, form backgrounds                |

### Typography
| Role         | Font            | Weights    |
|--------------|-----------------|------------|
| **Headings** | Syne (Google)   | 700, 800   |
| **Body**     | Outfit (Google) | 300–600    |

```html
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet"/>
```

### Design Direction
- **Aesthetic:** Bold, trust-inspiring — deep royal blue base, clean white contrast
- **Palette logic:** Derived directly from the circular EC Movers logo (royal blue + white)
- **Section rhythm:** Dark hero → Blue marquee → Light pale blue → Dark → Blue bar → White → Pale → Dark form → Blue CTA → Black footer
- **Motion:** Scroll-reveal, staggered delays, hero counter animation, floating cards, marquee

---

## 🗂️ File Structure

```
ecmovers/
├── index.html            ← Main page (semantic HTML, links CSS/JS)
├── css/
│   └── style.css         ← Full styles with CSS custom properties
├── js/
│   └── main.js           ← All interactivity
├── assets/
│   └── logo.png          ← ⬅ DROP YOUR LOGO FILE HERE
├── docs/
│   └── PROJECT.md        ← This file
│
│   (backend — to be built)
├── server/
│   ├── index.js
│   ├── routes/quote.js
│   ├── services/mailer.js
│   └── .env
└── package.json
```

---

## 🖼️ Logo Integration

### Current State
The logo is currently rendered as an **inline SVG** fallback that approximates the circular badge style. It will be replaced with the real image once added to assets.

### How to Swap to Real Logo (3 steps)

**Step 1:** Copy your logo PNG to: `assets/logo.png`

**Step 2:** In `index.html`, find the navbar logo section and replace the `<div class="logo-mark">...</div>` block with:

```html
<!-- OPTION A: Logo image + text name beside it -->
<a href="#" class="logo">
  <img src="assets/logo.png" alt="EC Movers Ltd" class="logo-img" />
  <div class="logo-text">
    <span class="main">EC Movers</span>
    <span class="sub">Ltd</span>
  </div>
</a>

<!-- OPTION B: Logo only (the logo already contains the name text) -->
<a href="#" class="logo">
  <img src="assets/logo.png" alt="EC Movers Ltd" style="height:52px;width:auto;border-radius:50%" />
</a>
```

**Step 3:** Do the same in the `<footer>` logo section.

### Logo CSS (already in style.css)
```css
.logo-img {
  width: 46px; height: 46px;
  border-radius: 50%;
  object-fit: contain;
  background: var(--blue);
  border: 2px solid rgba(255,255,255,.25);
}
#nav.stuck .logo-img { border-color: var(--border); }
```

---

## 🧩 Page Sections

| # | Section        | ID            | Background       | Notes                                         |
|---|----------------|---------------|------------------|-----------------------------------------------|
| 1 | Navbar         | `#nav`        | Transparent→White| Fixed, logo/link colours swap on scroll       |
| 2 | Mobile Drawer  | `#mDrawer`    | `--blue-mid`     | Full-screen slide-in, ESC closes              |
| 3 | Hero           | `#hero`       | `--blue-mid`     | Animated headline, counters, float cards      |
| 4 | Marquee Strip  | —             | `--blue`         | Infinite scroll, pauses on hover              |
| 5 | Services       | `#services`   | `--blue-pale`    | Sticky sidebar + hover-dark list              |
| 6 | Why Us         | `#why`        | `--blue-mid`     | Process steps + perk grid                    |
| 7 | Stats Bar      | —             | `--blue`         | 4 bold numbers                               |
| 8 | Reviews        | `#reviews`    | `--white`        | 3-column cards, yellow stars                  |
| 9 | Locations      | `#locations`  | `--blue-pale`    | Chip grid, hover fills blue                   |
| 10| Quote Form     | `#quote`      | `--blue-mid`     | 2-col layout, full form                       |
| 11| CTA Banner     | —             | `--blue`         | Skewed pseudo-element                         |
| 12| Footer         | `footer`      | `--ink`          | 4-col, top border is `--blue`                 |
| 13| Scroll-to-Top  | `#stb`        | —                | Fixed BR, appears after 500px scroll          |

---

## ⚙️ JavaScript (`js/main.js`)

| Feature           | How it works                                                        |
|-------------------|---------------------------------------------------------------------|
| Navbar            | `.stuck` added after 80px scroll; colours swap via CSS              |
| Mobile Drawer     | `.o` toggled on `#hamBtn` + `#mDrawer`; body overflow locked        |
| Scroll Reveal     | `.sr` / `.sr-l` / `.sr-r` → `.in` via `IntersectionObserver`       |
| Stagger Delays    | `data-d="1"` through `data-d="5"` → `transition-delay` in CSS      |
| Counter Animation | Eased count-up on `#s1`–`#s4` triggered when `#hero` enters view   |
| Quote Form        | Demo mode — replace TODO block with real `fetch('/api/quote', ...)` |
| Smooth Scroll     | All `a[href^="#"]` links smooth-scroll accounting for nav height    |

---

## 📝 Quote Form Fields

| `name` attr    | Type     | Required | Description                     |
|----------------|----------|----------|---------------------------------|
| `firstName`    | text     | ✅        |                                 |
| `lastName`     | text     | ✅        |                                 |
| `phone`        | tel      | ✅        |                                 |
| `email`        | email    | ✅        |                                 |
| `moveFrom`     | text     | ✅        | City or full address             |
| `moveTo`       | text     | ✅        | City or full address             |
| `moveDate`     | date     | ❌        | Optional                        |
| `serviceType`  | select   | ✅        | residential/commercial/etc.     |
| `notes`        | textarea | ❌        | Special items, access info       |

---

## 🔌 Backend — To Be Built

### Recommended Stack
- **Node.js + Express** — REST API
- **Nodemailer** (Gmail SMTP) **or SendGrid** — transactional emails
- **express-validator** or **zod** — input validation
- **dotenv** — environment variables
- **MongoDB Atlas** or **PostgreSQL** — optional, to store quote requests

### API Endpoints Planned

| Method | Route         | Purpose                                |
|--------|---------------|----------------------------------------|
| POST   | `/api/quote`  | Receive form, send admin + user emails |
| GET    | `/api/health` | Health check                           |

### Request Body for `POST /api/quote`
```json
{
  "firstName":   "John",
  "lastName":    "Smith",
  "phone":       "(226) 555-0100",
  "email":       "john@example.com",
  "moveFrom":    "Windsor, ON",
  "moveTo":      "Toronto, ON",
  "moveDate":    "2025-09-15",
  "serviceType": "residential",
  "notes":       "3-bedroom, have a piano"
}
```

### `.env` File
```env
PORT=3000
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your@gmail.com
EMAIL_PASS=your_app_password
ADMIN_EMAIL=owner@ecmovers.ca
SENDGRID_API_KEY=SG.xxxxx
```

---

## 📱 Responsive Breakpoints

| Breakpoint    | Changes                                                |
|---------------|--------------------------------------------------------|
| `> 1100px`    | Full 2-column hero with floating glass cards           |
| `1024–1100px` | Hero cards hidden, hero becomes single column          |
| `≤ 1024px`    | Hamburger nav, stacked sections, 2-col footer          |
| `≤ 720px`     | Single-col reviews, form, footer                       |
| `≤ 480px`     | Smaller hero headline, stacked buttons                 |

---

## ✅ Completed

- [x] Color scheme updated to match EC Movers logo (royal blue #1B3FA0)
- [x] All brand references updated (SwiftShift → EC Movers Ltd)
- [x] Emails updated to hello@ecmovers.ca
- [x] Inline SVG logo placeholder (circular badge style)
- [x] Logo swap instructions documented (3 steps, 2 options)
- [x] `.logo-img` CSS class ready for real PNG
- [x] Full responsive website
- [x] CSS, JS, HTML all separated into clean files
- [x] This project markdown file

## ⏳ Pending

- [ ] Drop `assets/logo.png` and swap SVG to `<img>` tag
- [ ] Backend: Node/Express server
- [ ] Backend: `POST /api/quote` route
- [ ] Backend: Email templates (HTML) for admin + customer
- [ ] Frontend: Connect form to real `/api/quote`
- [ ] SEO: meta tags, Open Graph, sitemap.xml
- [ ] Optional: Blog page
- [ ] Optional: Individual service pages
- [ ] Optional: Route-specific pages (Windsor to Toronto, etc.)
- [ ] Optional: Google Reviews API (live review feed)
- [ ] Deployment: Vercel / Railway / VPS

---

## 🚀 Quick Start

```bash
cd ecmovers
open index.html         # macOS
start index.html        # Windows
xdg-open index.html     # Linux
```

---

## 💬 How to Resume with Claude

Paste this entire file at the start of a new conversation, then say:
- *"Add the real logo image"* → swap SVG to `<img src="assets/logo.png">`
- *"Build the Node.js backend"* → full Express server + email handler
- *"Create HTML email templates"* → admin alert + customer confirmation
- *"Add a blog page"* → matches design system
- *"Create individual service pages"*
- *"Set up for Vercel deployment"*

---

*Last updated: 2025 · Project: EC Movers Ltd*
