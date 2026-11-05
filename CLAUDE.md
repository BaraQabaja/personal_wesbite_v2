# Bara Qabaja — personal portfolio website

Single-page portfolio for Bara Qabaja (software engineer, content creator).
Built on the purchased **Sandbox React** template (ui-lib); most of `src/` is unused template code.

- Repo: https://github.com/BaraQabaja/personal_wesbite_v2 (branch `main`)
- Git account for this repo: `BaraQabaja` (pinned in local git config; this machine also has a second GitHub account saved, so don't change it)

## Commands

```bash
npm ci            # install from package-lock.json
npm run dev       # dev server → http://localhost:3000
npm run build     # production build (run before saying a change is done)
npm run lint      # next lint (eslint next/core-web-vitals)
npm run sass      # recompile src/assets/scss → public/css (only for theme colour/font files)
```

No test suite. Verify changes with `npm run build` + `npm run lint`, then check the page in the browser preview (`.claude/launch.json` → config `dev`).

## Stack

Next.js 13.3 (**pages router**, not app router) · React 18.2 · TypeScript 4.9 (strict) · Bootstrap 5.3 + Sass · Swiper 9 · react-scroll · plyr-react · glightbox.
Imports resolve from `src/` (`tsconfig.json` → `baseUrl: ./src`), e.g. `import { Hero28 } from 'components/blocks/hero'`.

## Where the content lives

The whole site is `pages/index.tsx`, a stack of sections linked by the navbar via `react-scroll` ids.

| Section (nav id) | Component | Content source |
|---|---|---|
| Hero (`home`) | `src/components/blocks/hero/Hero28.tsx` | hardcoded JSX: intro, headline, photo, contact links |
| Tech-stack ticker | `pages/index.tsx` | hardcoded `<Carousel>` of `/img/svg/*.svg` logos |
| Experience (`experience`) | `src/components/blocks/about/About34.tsx` | `timelines` array in `src/data/demo-33.ts` + CV buttons |
| Tech-Talks (`tech-talk`) | `src/components/blocks/blog/Blog6.tsx` | hardcoded `<BlogCard2>` with LinkedIn embed iframe |
| Projects (`projects`) | `src/components/blocks/portfolio/Portfolio3.tsx` → modal `About30.tsx` | `portfolioList2` in `src/data/portfolio.ts` |
| Footer | `src/components/blocks/footer/Footer19.tsx` | address, phone, emails, © year |
| Social icons | `src/components/reuseable/SocialLinks.tsx` | Gmail, LinkedIn, GitHub, Upwork, LeetCode |
| Mobile menu contacts | `src/components/blocks/navbar/Navbar.tsx` | offcanvas footer |

Static files: CV PDF at `public/BaraQabaja_CV15.pdf`, project screenshots in `public/img/projects/`, profile photo `public/img/Picture5-removebg-preview.jpg`, favicon `public/Picture1.png`.

Project skills for routine content updates: `/add-project`, `/add-experience`, `/add-tech-talk` (in `.claude/skills/`).

## Conventions

- Prettier config in `.prettierrc.js`: single quotes, semicolons, 2-space indent, 120 cols, no trailing commas. (Prettier itself isn't installed; follow the style by hand.)
- Description fields in `timelines` and `portfolioList2` are **HTML strings** rendered with `dangerouslySetInnerHTML`. Content is authored by us only — never feed user input into them.
- Inline links inside those strings repeat a long inline `style=` + `onMouseOver` block. Copy an existing `<a>` from the same file so new links look the same.
- `<img>` is allowed (lint rule disabled); `next/image` is imported in places but barely used.
- The `Project` interface is duplicated in `Portfolio3.tsx` and `About30.tsx`. Change both together if the shape changes.

## Content rules

- Never invent facts: dates, job titles, company names, metrics, links, or descriptions. If Bara hasn't supplied it, ask.
- Keep the phone number and emails exactly as they are unless Bara changes them.
- If the site mentions Bara's employer Intersect, write it as **"Intersect"** (not "Intersect Innovation Hub", "Intersect Hub" or "IIH"); in Arabic it's انترسكت.

## Known issues (from the Nov 2026 audit — fix when touching nearby code)

- `src/data/demo-33.ts`: the Rytsensetech link points to `https://sharkod.com`; "Upword" should be "Upwork".
- `pages/index.tsx`: ticker label "Nest.ts" should be "NestJS"; several `<figure title="Some Title Quam Sit Ornare">` template leftovers; logo `alt=""` on every image.
- `Portfolio3.tsx` heading says "our awesome projects" (template copy). `Blog6.tsx` renders a dummy `<Pagination>`.
- `Footer19.tsx`: hardcoded "© 2024".
- `pages/_app.tsx` / `_document.tsx`: `%PUBLIC_URL%` favicon links are Create-React-App syntax and 404 in Next; `<title>` is duplicated. `public/manifest.json` is the CRA default.
- `src/theme/themeOptions.ts`: route `/` loads `/css/colors/blue.css`, which doesn't exist (404). Harmless, since blue is the default in `style.css`.
- `sharp@0.31.3` is old; install may fail on new Node versions.
- `public/img/` is ~158 MB, mostly unused template images (`photos/`, `demos/`, `illustrations/`). Some are pulled in by CSS, not JSX (e.g. `img/photos/lines.png` for the hero's `bg-lines`, `img/svg/hex.svg`), so grep `src/assets/scss` and `public/css` too and check the browser's network tab before deleting anything.

## Git workflow

- Work on a branch for anything bigger than a copy tweak; `main` is what's live.
- Run `npm run build` before committing.
- Never push, force-push, or rewrite history without Bara saying so.
