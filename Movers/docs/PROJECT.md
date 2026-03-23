# SwiftShift Movers — Project Documentation

> **Paste this file into any new Claude conversation to instantly resume work on this project.**

---

## 📌 Project Overview

| Field            | Value                                                  |
|------------------|--------------------------------------------------------|
| **Project Name** | SwiftShift Movers Website                              |
| **Type**         | Professional Moving Company Website                   |
| **Phase**        | Frontend Complete → Backend Next                      |
| **Status**       | ✅ Frontend Done · ⏳ Backend Pending · ⏳ Markdown Done |
| **References**   | https://visorguys.com · https://ancientmovers.ca       |

---

## 🎨 Design System

### Color Palette
| Token        | Hex       | Usage                              |
|--------------|-----------|------------------------------------|
| `--ink`      | `#0F0F0F` | Primary background (hero, footer)  |
| `--ink-mid`  | `#1C1C1C` | Secondary dark sections (Why Us)   |
| `--smoke`    | `#F2F1EE` | Light section backgrounds          |
| `--white`    | `#FFFFFF` | Cards, form background             |
| `--accent`   | `#E84A2F` | Primary accent — CTA, highlights   |
| `--accent-d` | `#C73D24` | Hover state for accent             |
| `--accent-l` | `#FF6B4A` | Light accent (dark backgrounds)    |
| `--muted`    | `#8C8C8C` | Body text, descriptions            |
| `--border`   | `#E0DDD8` | Borders, dividers                  |

### Typography
| Role         | Font            | Weights Used          |
|--------------|-----------------|-----------------------|
| **Headings** | Syne (Google)   | 700, 800              |
| **Body**     | Outfit (Google) | 300, 400, 500, 600    |

**Import URL:**
```html
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet"/>
```

### Design Direction
- **Aesthetic:** Bold editorial — near-black base with a vivid red-orange accent
- **Layout:** Asymmetric, grid-based, generous whitespace
- **Motion:** Scroll-reveal (`.sr`, `.sr-l`, `.sr-r` + `IntersectionObserver`), stagger delays via `data-d` attribute, CSS keyframe animations on hero
- **Key UI patterns:** Ghost/outline headline text, animated marquee strip, hover-to-dark service list rows, glassmorphism hero cards

---

## 🗂️ File Structure

```
swiftshift/
├── index.html          ← Main HTML (semantic, clean, links to CSS/JS)
├── css/
│   └── style.css       ← All styles, CSS custom properties, responsive
├── js/
│   └── main.js         ← Navbar, drawer, scroll reveal, counters, form
├── docs/
│   └── PROJECT.md      ← This file
│
│   (to be created in backend phase)
├── server/
│   ├── index.js        ← Node/Express backend entry
│   ├── routes/
│   │   └── quote.js    ← POST /api/quote handler
│   ├── services/
│   │   └── mailer.js   ← Nodemailer / SendGrid email service
│   └── .env            ← Environment variables (never commit)
└── package.json
```

---

## 🧩 Page Sections (in order)

| # | Section          | ID            | Background  | Notes                                    |
|---|------------------|---------------|-------------|------------------------------------------|
| 1 | Navbar           | `#nav`        | Transparent → White on scroll | Fixed, logo colour swaps |
| 2 | Mobile Drawer    | `#mDrawer`    | `--ink`     | Full-screen slide-in, ESC closes it      |
| 3 | Hero             | `#hero`       | `--ink`     | Animated headline, counters, float cards |
| 4 | Marquee Strip    | —             | `--accent`  | Infinite scroll, pauses on hover         |
| 5 | Services         | `#services`   | `--smoke`   | Sticky sidebar + hover-dark list         |
| 6 | Why Us           | `#why`        | `--ink-mid` | Process steps + perk grid                |
| 7 | Stats Bar        | —             | `--accent`  | 4 big numbers                            |
| 8 | Reviews          | `#reviews`    | `--white`   | 3-column card grid                       |
| 9 | Locations        | `#locations`  | `--smoke`   | Chip/tag grid, hover highlights          |
| 10| Quote Form       | `#quote`      | `--ink`     | 2-col layout, full form                  |
| 11| CTA Banner       | —             | `--accent`  | Skewed pseudo-element bg                 |
| 12| Footer           | `footer`      | `--ink`     | 4-col grid, links, contact               |
| 13| Scroll-to-Top    | `#stb`        | —           | Fixed bottom-right, appears after 500px  |

---

## ⚙️ JavaScript Features (`js/main.js`)

### 1. Navbar Scroll
- Adds `.stuck` class to `#nav` after 80px scroll
- Scroll-to-top button `#stb` appears after 500px

### 2. Mobile Drawer
- `#hamBtn` toggles `.o` on both button and `#mDrawer`
- `document.body.overflow` locked when open
- Closes on ESC key, and via `closeDrawer()` on each link's `onclick`

### 3. Scroll Reveal
```css
.sr   { opacity:0; transform:translateY(36px); }   /* fade up */
.sr-l { opacity:0; transform:translateX(-40px); }   /* fade from left */
.sr-r { opacity:0; transform:translateX(40px); }    /* fade from right */
/* All gain .in class via IntersectionObserver at threshold 0.1 */
```
Stagger delay via `data-d="1"` through `data-d="5"` attributes (0.1s each).

### 4. Hero Counter Animation
- IDs: `#s1` (4.9★), `#s2` (2,500), `#s3` (10), `#s4` (1,500)
- Triggered once by `IntersectionObserver` on `#hero`
- Ease-out cubic formula: `1 - (1 - progress)³`

### 5. Quote Form
- Currently **demo only** — logs to console / shows success message
- Replace the `TODO` block in `main.js` with a real `fetch()` POST to `/api/quote`
- Includes loading state on submit button

---

## 📝 Quote Form Fields

| Field Name    | Input Type | Required | Notes                         |
|---------------|------------|----------|-------------------------------|
| `firstName`   | text       | ✅        |                               |
| `lastName`    | text       | ✅        |                               |
| `phone`       | tel        | ✅        |                               |
| `email`       | email      | ✅        |                               |
| `moveFrom`    | text       | ✅        | City or full address           |
| `moveTo`      | text       | ✅        | City or full address           |
| `moveDate`    | date       | ❌        | Optional preferred date        |
| `serviceType` | select     | ✅        | residential / commercial / long-distance / piano / senior / packing |
| `notes`       | textarea   | ❌        | Special items, access info     |

---

## 🔧 Services Listed

1. **Residential Moving** — apartments, condos, homes
2. **Commercial Moving** — offices, minimise downtime
3. **Long Distance Moving** — one truck/driver, cross-province/country
4. **Piano & Specialty Moving** — pianos, pool tables, hot tubs
5. **Senior Moving** — compassionate, family-coordinated
6. **Packing & Storage** — full/partial packing + short/long-term storage

---

## 📍 Service Locations

Windsor, LaSalle, Tecumseh, Amherstburg, Kingsville, Leamington, Lakeshore, Essex, London, Chatham, Sarnia, Toronto, Ottawa, Montreal, Calgary, Vancouver, Chicago, New York

---

## 🔌 Backend — To Be Built

### Stack (Recommended)
- **Runtime:** Node.js + Express
- **Email:** Nodemailer with Gmail SMTP **or** SendGrid API
- **Validation:** `express-validator` or `zod`
- **Env vars:** `dotenv`
- **Optional CMS:** Contentful / Sanity (for blog, service pages)
- **Optional DB:** MongoDB Atlas or PostgreSQL (to store quote requests)

### Planned API Endpoints

| Method | Route          | Description                              |
|--------|----------------|------------------------------------------|
| POST   | `/api/quote`   | Receive form submission, send email alert |
| GET    | `/api/health`  | Health check                              |
| POST   | `/api/contact` | General contact form (future)             |

### `/api/quote` — Expected Request Body
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
  "notes":       "3-bedroom home, have a piano"
}
```

### `/api/quote` — Expected Response
```json
{ "success": true, "message": "Quote request received." }
```

### Email Flow
1. User submits form → frontend `POST /api/quote`
2. Backend validates fields
3. **Admin email** sent to business owner with all quote details
4. **Confirmation email** sent to customer
5. Response returned to frontend → success message shown

### Environment Variables (`.env`)
```env
PORT=3000
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your@gmail.com
EMAIL_PASS=your_app_password
ADMIN_EMAIL=owner@swiftshift.ca
SENDGRID_API_KEY=SG.xxxxx       # if using SendGrid instead
```

---

## 📱 Responsive Breakpoints

| Breakpoint   | Behaviour                                              |
|--------------|--------------------------------------------------------|
| `> 1100px`   | Full layout — hero has 2-column with floating cards    |
| `1024–1100px`| Hero cards hidden, hero full-width                     |
| `≤ 1024px`   | Hamburger nav, stacked sections, 2-col footer          |
| `≤ 720px`    | Single column reviews, form, footer                    |
| `≤ 480px`    | Hero headline reduced, buttons stack                   |

---

## ✅ Completed Checklist

- [x] Design system defined (tokens, fonts, palette)
- [x] Navbar — transparent/sticky with mobile drawer
- [x] Hero — animated, counters, ghost text, floating cards
- [x] Marquee service strip
- [x] Services section — sticky sidebar + hover list
- [x] Why Us — process steps + perk grid
- [x] Stats bar
- [x] Reviews — 3-column cards
- [x] Locations — chip grid
- [x] Quote form — all fields, validation, demo handler
- [x] CTA banner
- [x] Footer — 4-column
- [x] Scroll reveal system
- [x] Scroll-to-top button
- [x] Fully responsive (mobile, tablet, desktop)
- [x] CSS separated into `style.css`
- [x] JS separated into `main.js`
- [x] This project markdown file

## ⏳ Pending

- [ ] Backend: Node/Express server setup
- [ ] Backend: `POST /api/quote` route
- [ ] Backend: Nodemailer / SendGrid integration
- [ ] Backend: Admin + customer email templates (HTML)
- [ ] Frontend: Connect form to real `/api/quote` endpoint
- [ ] Optional: Blog page
- [ ] Optional: Individual service pages (residential, commercial, etc.)
- [ ] Optional: Testimonials page with all reviews
- [ ] Optional: Route pages (Windsor to Toronto, etc.)
- [ ] Optional: CMS integration for content management
- [ ] Optional: Google Analytics / Tag Manager
- [ ] Optional: Google Reviews API integration (live reviews)
- [ ] SEO: meta tags, Open Graph, sitemap.xml, robots.txt
- [ ] Deployment: Set up hosting (Vercel, Railway, VPS)

---

## 🚀 Quick Start (Development)

```bash
# Clone / open project folder
cd swiftshift

# Open frontend directly in browser
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux

# When backend is ready:
cd server
npm install
cp .env.example .env   # fill in your values
node index.js          # or: npm run dev (with nodemon)
```

---

## 💬 How to Use This File with Claude

Paste this entire markdown at the start of a new conversation, then say what you want to do next, e.g.:

- *"Build the Node/Express backend for the quote form"*
- *"Create HTML email templates for admin and customer confirmations"*
- *"Add a blog page using the same design system"*
- *"Create individual service pages for Residential and Commercial moving"*
- *"Add Google Reviews API integration to pull live reviews"*
- *"Set up the project for Vercel deployment"*

---

*Last updated: 2025 · Project: SwiftShift Movers*
