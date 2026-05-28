# LexCorp Legal & Compliance — SPA

## What This Is

A single-page application (SPA) company profile website for **LexCorp Legal & Compliance**, a fictional legal firm placeholder. Built for the **Kinsar Platform** ecosystem. All content (names, addresses, contact details) is placeholder — replace before going live with a real client.

Live site: `https://your-own-farm.github.io/lexcorp-legal/`

---

## Tech Stack

| Layer     | Technology                               |
|-----------|------------------------------------------|
| Framework | React 18 + TypeScript                    |
| Bundler   | Vite 8                                   |
| Routing   | React Router DOM v6 (BrowserRouter)      |
| Styling   | Plain CSS with CSS custom properties     |
| Deploy    | GitHub Pages via GitHub Actions          |

---

## Project Structure

```
lexcorp-legal/
├── public/
│   ├── 404.html          # SPA routing redirect for GitHub Pages
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx    # Fixed top nav with scroll effect + mobile menu
│   │   └── Footer.tsx    # 4-column footer with office/link grid
│   ├── pages/
│   │   ├── Home.tsx      # Hero, stats, services preview, testimonials, CTA
│   │   ├── About.tsx     # Mission, values, team grid
│   │   ├── Founder.tsx   # Bio, credentials, career timeline
│   │   ├── Services.tsx  # 9 practice areas, engagement process
│   │   ├── History.tsx   # 4-era timeline (2004–2024), awards
│   │   └── Contact.tsx   # Enquiry form, 3 office cards
│   ├── App.tsx           # Route definitions + ScrollToTop
│   ├── main.tsx          # BrowserRouter entry point
│   └── index.css         # All global CSS variables, layout, components
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions → GitHub Pages
└── vite.config.ts        # base: '/lexcorp-legal/' for GH Pages
```

---

## Routes

| Path        | Page         |
|-------------|--------------|
| `/`         | Home         |
| `/about`    | About Us     |
| `/founder`  | Founder      |
| `/services` | Services     |
| `/history`  | History      |
| `/contact`  | Contact Us   |

---

## Design System

### Palette (light theme — professional legal aesthetic)

```css
--navy:       #0f2044   /* primary backgrounds, nav, footer */
--navy-mid:   #1a3560
--navy-light: #244078
--gold:       #b8901a   /* primary accent, CTAs, highlights */
--gold-light: #d4a832
--gold-pale:  #f5e9c8   /* tinted section backgrounds */
--cream:      #faf8f4   /* page base */
--white:      #ffffff
--text-dark:  #1a1a2e
--text-mid:   #3d4966
--text-muted: #7a8299
--border:     #e2ddd4
```

### Typography
- Headings: `Georgia, serif`
- Body / UI: `Segoe UI, system-ui, sans-serif`

### Key CSS classes (all in `src/index.css`)
- `.container` — max-width 1100px, centred
- `.section` — `padding: var(--section-py) 0` (6rem desktop, 4rem mobile)
- `.page-header` — navy gradient banner with pattern overlay (used on inner pages)
- `.card` — white card with border + hover lift
- `.btn-primary` — gold filled button
- `.btn-outline` — white border (for dark backgrounds)
- `.btn-outline-navy` — navy border (for light backgrounds)
- `.gold-rule` — 52px gold accent divider line
- `.section-label` — uppercase gold micro-label
- `.form-input / .form-textarea / .form-select` — styled form fields

---

## Local Development

```bash
npm install
npm run dev       # → http://localhost:5173/lexcorp-legal/
npm run build     # production build → ./dist/
npm run preview   # preview built output locally
```

---

## GitHub Pages Deployment

Push to `master` → GitHub Actions builds and deploys automatically.

### How it works
1. `.github/workflows/deploy.yml` triggers on push to `master`
2. Runs `npm ci && npm run build`
3. Uploads `dist/` to GitHub Pages via `actions/deploy-pages`
4. `public/404.html` handles SPA deep-link routing (redirects to `index.html` with path preserved)

### Manual trigger
Go to **Actions → Deploy to GitHub Pages → Run workflow** on the repo.

---

## Customisation Notes

- **Company name**: Find/replace `LexCorp` throughout `src/` — it appears in `Navbar.tsx`, `Footer.tsx`, `index.html`, and page copy.
- **Contact details**: All phone numbers, emails, and addresses are placeholders — update in `Footer.tsx` and `Contact.tsx`.
- **Founder bio**: `src/pages/Founder.tsx` — replace `Arjun Sharma` with the real founder's details.
- **Contact form**: Currently simulates submission with a `setTimeout`. Wire `handleSubmit` in `Contact.tsx` to a real backend (e.g. Formspree, EmailJS, or a custom API).
- **Favicon**: Replace `public/favicon.svg` with the firm's actual logo.

---

## Conventions

- No CSS frameworks — plain CSS variables only. Keep all shared styles in `src/index.css`.
- Inline styles are acceptable for one-off layout within page components (existing pattern).
- Dark backgrounds (`var(--navy)`) only in the navbar, footer, hero, and accent sections — never on card or body content.
- Routing is `BrowserRouter` — `vite.config.ts` sets `base: '/lexcorp-legal/'` for GitHub Pages path prefix.
