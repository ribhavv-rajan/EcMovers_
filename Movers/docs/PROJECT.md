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
| **Logo File**    | `assets/logo.png` + `assets/logo-v.png` (vertical variant)  |
| **Phone**        | `(519) 566-8933` → `tel:+15195668933`                        |
| **Email**        | `eastcanadianmovers@gmail.com`                               |
| **Address**      | `4698 Sassafras Ave, Windsor, ON N9G 3E1, Canada`            |

---

## 🎨 Design System

### Color Palette
| Token         | Hex       | Usage                                  |
|---------------|-----------|----------------------------------------|
| `--blue`      | `#1B3FA0` | Primary brand blue                     |
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

---

## 🗂️ File Structure

```
Movers/
├── index.html                    ← Homepage (main SEO page)
├── about.html
├── services.html                 ← All services + "What Makes Us Different"
├── contact.html
├── privacy.html
├── terms.html
├── robots.txt
├── sitemap.xml                   ← Updated with all 12 location pages
│
├── css/
│   ├── style.css                 ← Main styles
│   ├── pages.css                 ← Inner page styles + nav dropdown
│   └── seo.css
│
├── js/
│   ├── main.js                   ← Homepage interactivity
│   └── components.js             ← Shared nav + footer (edit once = updates everywhere)
│
├── assets/
│   ├── logo.png
│   ├── logo-v.png
│   ├── gallery/                  ← 6 photos
│   └── awards/                   ← 3 award images
│
├── blog/
│   ├── index.html
│   ├── how-to-pack.html
│   ├── moving-checklist.html
│   └── moving-costs.html
│
├── locations/                    ← 12 location pages
│   ├── windsor.html              ← PRIMARY (highest SEO priority)
│   ├── lasalle.html              ← HIGH priority
│   ├── tecumseh.html             ← HIGH priority
│   ├── amherstburg.html
│   ├── leamington.html
│   ├── kingsville.html
│   ├── essex.html
│   ├── lakeshore.html            ← NEW
│   ├── tilbury.html              ← NEW
│   ├── chatham.html
│   ├── sarnia.html
│   └── london.html
│
├── routes/
│   ├── windsor-to-toronto.html
│   ├── windsor-to-london.html
│   ├── windsor-to-ottawa.html
│   └── windsor-to-calgary.html
│
├── features/
│   ├── fully-insured.html
│   ├── flat-rate-pricing.html
│   ├── on-time-guarantee.html
│   ├── award-winning.html
│   ├── eco-conscious.html
│   └── 247-support.html
│
└── docs/
    └── PROJECT.md
```

---

## 🧩 Shared Components (`js/components.js`)

Nav and footer injected on every page — edit once, updates everywhere.

| Variable         | Value                                          |
|------------------|------------------------------------------------|
| `PHONE_DISPLAY`  | `(519) 566-8933`                               |
| `PHONE_HREF`     | `tel:+15195668933`                             |
| `EMAIL`          | `eastcanadianmovers@gmail.com`                 |
| `ADDRESS`        | `4698 Sassafras Ave, Windsor, ON N9G 3E1`      |

**Social links in footer:**
- Facebook: `facebook.com/ecmovers/`
- Instagram: `instagram.com/ecmovers_ltd`
- YouTube: `youtube.com/@ecmoversltd`
- TikTok: `tiktok.com/@ecmoversltd`

**Footer SEO serving text:**
> Proudly serving Windsor, LaSalle, Tecumseh, Amherstburg, Essex, Lakeshore, Belle River, Kingsville, Leamington, Harrow, Tilbury, Chatham, Sarnia, London, and all surrounding areas across Ontario.

---

## 🔑 SEO Keywords Implemented

### Primary (Homepage + Services)
- Windsor Movers / Movers in Windsor Ontario
- Moving Company Windsor Ontario / Best Movers Windsor
- Local Movers Windsor / Windsor Moving Services

### Service + City Combos
- Piano Movers Windsor
- Hot Tub Movers Windsor
- Pool Table Movers Windsor
- Commercial Movers Windsor
- Residential Movers Windsor
- Long Distance Movers Windsor

### Location Pages
- LaSalle Movers, Tecumseh Movers, Amherstburg Movers
- Leamington Movers, Kingsville Movers, Essex Movers
- Lakeshore Movers, Belle River Movers, Tilbury Movers
- Chatham Movers, Sarnia Movers, London Ontario Movers

---

## 🧱 Homepage Sections

| # | Section        | ID            | Background       | Notes                                         |
|---|----------------|---------------|------------------|-----------------------------------------------|
| 1 | Navbar         | `#nav`        | Transparent→White| Fixed, logo/link colours swap on scroll       |
| 2 | Hero           | `#hero`       | `--blue-mid`     | EC Movers Ltd accent, counters, float cards   |
| 3 | Marquee        | —             | `--blue`         | Infinite scroll                               |
| 4 | Services       | `#services`   | `--blue-pale`    | 5 services listed                             |
| 5 | Why Us         | `#why`        | `--blue-mid`     | Process steps + perks                        |
| 6 | Stats Bar      | —             | `--blue`         | 4 bold numbers                               |
| 7 | Awards         | `#awards`     | white            | 3 award badges                               |
| 8 | Fleet          | `#fleet`      | white            | 3 truck options                              |
| 9 | Reviews        | `#reviews`    | `--white`        | 3 review cards                               |
| 10| Locations      | `#locations`  | `--blue-pale`    | 12 city chips                                |
| 11| Gallery        | `#gallery`    | dark             | 6 photos                                     |
| 12| FAQ            | `#faq`        | white            | 8 questions                                  |
| 13| Quote Form     | `#quote`      | `--blue-mid`     | Full form                                    |
| 14| SEO Block      | `#seo-content`| `--blue-pale`    | Keyword-rich content + 6 trust cards         |
| 15| CTA Banner     | —             | `--blue`         | Final CTA                                    |
| 16| Footer         | `footer`      | `--ink`          | 4-col + SEO cities line                      |

---

## 🚫 Removed
- Senior Moving — removed from all pages, nav, footer, forms, location pages, about comparison table

---

## 📝 Quote Form Fields

| `name` attr    | Type     | Required |
|----------------|----------|----------|
| `firstName`    | text     | ✅        |
| `lastName`     | text     | ✅        |
| `phone`        | tel      | ✅        |
| `email`        | email    | ✅        |
| `moveFrom`     | text     | ✅        |
| `moveTo`       | text     | ✅        |
| `moveDate`     | date     | ❌        |
| `serviceType`  | select   | ✅        |
| `notes`        | textarea | ❌        |

---

## 🔌 Backend — To Be Built

### Stack
- Node.js + Express, Nodemailer / SendGrid, dotenv, express-validator

### Endpoints
| Method | Route         | Purpose                         |
|--------|---------------|---------------------------------|
| POST   | `/api/quote`  | Receive form, send emails       |
| GET    | `/api/health` | Health check                    |

### `.env`
```env
PORT=3000
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=eastcanadianmovers@gmail.com
EMAIL_PASS=your_app_password
ADMIN_EMAIL=eastcanadianmovers@gmail.com
```

---

## ✅ Completed

- [x] Full responsive frontend — all pages
- [x] EC Movers Ltd prominent in homepage H1
- [x] SEO content block with full keyword set (Windsor Movers, Piano Movers Windsor, etc.)
- [x] Footer SEO serving text (all 14 cities)
- [x] YouTube + TikTok added to footer + contact page
- [x] Senior Moving removed from ALL pages
- [x] services.html — "What Makes Us Different" section added
- [x] services.html — updated hero with service+city keyword badges
- [x] locations/lakeshore.html — new page
- [x] locations/tilbury.html — new page
- [x] locations/windsor.html — HTML glitch fixed
- [x] sitemap.xml — updated with all 12 location pages, fixed broken URLs

## ⏳ Pending

- [ ] Backend: Node/Express server
- [ ] Backend: `POST /api/quote` + email templates
- [ ] Frontend: Connect quote form to `/api/quote`
- [ ] Deployment: Vercel / Railway / VPS

---

## 💬 How to Resume with Claude

Paste this entire file at the start of a new conversation, then say what you need:

- *"Build the Node.js backend"*
- *"Connect the quote form"*
- *"Set up Vercel deployment"*
- *"Add a new location page"*
- *"Add a new blog post"*

---

*Last updated: March 30, 2026 · Project: EC Movers Ltd*
