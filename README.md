# Imran Hasan — Personal Portfolio

A modern, recruiter-friendly developer portfolio built with **React + Vite**, **Tailwind CSS**, and **Framer Motion**.

Live preview features:

- Dark, premium developer theme with animated aurora gradient
- Sticky animated navbar with active section highlight
- Interactive particle canvas background + scroll progress bar
- Smooth section animations powered by Framer Motion
- WhatsApp-integrated contact form (no backend required)
- Fully responsive — mobile, tablet, desktop, ultrawide
- SEO meta tags, Open Graph & Twitter cards, favicon
- One-click CV download
- Static build, deployable to Vercel / Netlify / GitHub Pages

---

## 📁 Project structure

```
My-Portfolio/
├── public/
│   ├── favicon.svg
│   ├── profile.jpg
│   └── Imran_Hasan_CV.pdf
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticleBackground.jsx
│   │   ├── Projects.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── Services.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

All site content lives in **`src/data/portfolioData.js`** — edit that one file to update bio, experience, projects, skills, etc.

---

## 🛠️ Tech stack

| Layer            | Tools                                     |
| ---------------- | ----------------------------------------- |
| Framework        | React 18 + Vite                           |
| Styling          | Tailwind CSS 3                            |
| Animation        | Framer Motion                             |
| Icons            | react-icons (Font Awesome + Simple Icons) |
| Fonts            | Inter, Space Grotesk, JetBrains Mono      |

---

## 🚀 Run locally

Requires **Node.js 18+**.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# Vite will open http://localhost:5173
```

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

The production output goes into the `dist/` folder.

---

## ☁️ Deploy to Vercel (recommended)

1. Push the project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New… → Project**.
3. Import the repo. Vercel auto-detects Vite.
4. Settings (usually auto-filled):
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
5. Click **Deploy**. You'll get a `*.vercel.app` URL within seconds.

To set a custom domain, go to **Project → Settings → Domains**.

---

## 🌐 Deploy to GitHub Pages

The `gh-pages` package is already installed.

1. Push the project to a GitHub repo (e.g. `siddik-imran/portfolio`).
2. In `vite.config.js`, the `base` is already `./` so paths work on Pages.
3. Run:

```bash
npm run build
npm run deploy
```

4. In your GitHub repo: **Settings → Pages → Source:** `gh-pages` branch / root.
5. Your site goes live at `https://<your-username>.github.io/<repo-name>/`.

> If you want the site at the user-root URL `https://<your-username>.github.io/`, create a repo named exactly `<your-username>.github.io` and deploy to its `gh-pages` branch (or `main`).

---

## ✏️ Customizing content

All copy lives in [`src/data/portfolioData.js`](src/data/portfolioData.js):

- `personal` — name, role, email, phone, social links, photo path, CV path
- `skills` — tech stack groups
- `experience` — job timeline entries
- `projects` — project cards (toggle `featured: true` to show under the "Featured" filter)
- `services` — what you offer
- `education` — degrees
- `navLinks` — top navigation items

To swap the photo or CV, simply replace `public/profile.jpg` and `public/Imran_Hasan_CV.pdf` (keep the filenames or update the paths in `personal`).

---

## 🔮 Optional future improvements

- Add a **blog** section sourced from Markdown / MDX
- Add **light mode** toggle (Tailwind's `dark:` variant is ready)
- Add a **testimonials** section once you collect client quotes
- Add **case studies** with full-page detail views per project
- Replace the WhatsApp form with a real backend (Resend / Formspree / EmailJS)
- Integrate **GitHub API** to auto-pull pinned repos
- Add **i18n** (English / Bengali)
- Add a **3D / WebGL hero** (React Three Fiber) if you want extra wow factor
- Pre-render with `vite-plugin-ssg` for even better SEO

---

## 📄 License

MIT — feel free to fork and adapt for your own portfolio. A small credit is appreciated but not required.

---

**Imran Hasan** · Full-Stack Web Developer · [siddikimraan@gmail.com](mailto:siddikimraan@gmail.com)
