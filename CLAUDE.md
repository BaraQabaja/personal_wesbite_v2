# Bara Qabaja — personal portfolio website

Single-page portfolio for Bara Qabaja (software engineer, content creator).
Built on the purchased **Sandbox React** template (ui-lib); most of `src/` is unused template code.

- Repo: https://github.com/BaraQabaja/personal_wesbite_v2 (branch `main`)
- Git account for this repo: `BaraQabaja` (pinned in local git config; this machine also has a second GitHub account saved, so don't change it)

## Owner and brand

- Bara Qabaja: computer science background, software developer, works closely with startup founders and
  incubation programmes at Intersect (non-profit, Ramallah).
- Personal brand: **"The Unusual Guy"**. Short Arabic reels about tech, startups and the founder journey.
- Platforms: Instagram `@baraqabaja`, YouTube, LinkedIn, Facebook. Bios and site copy are in **English**;
  videos and captions are in **Arabic** (Modern Standard Arabic, not literal translation).
- Social brand style is near-black + white + orange, but **the website keeps its current style and colours**
  (template blue theme). Don't restyle or recolour the site unless Bara explicitly asks.

## Domain, DNS and email (live: do not break)

- Domain **baraqabaja.com**, registered at GoDaddy, DNS managed in **Cloudflare**
  (nameservers `aitana.ns.cloudflare.com`, `giancarlo.ns.cloudflare.com`). Don't change the nameservers.
- Email **hello@baraqabaja.com** uses Cloudflare Email Routing and forwards to bara.qabaja@gmail.com, with Gmail "Send mail as" set up.
- **Never touch** these Cloudflare records: the 3 MX records (`route1/2/3.mx.cloudflare.net`),
  SPF TXT `v=spf1 include:_spf.mx.cloudflare.net include:_spf.google.com ~all`,
  DKIM TXT `cf2024-1._domainkey`, DMARC TXT `v=DMARC1; p=none;`.
- **Only these may be replaced** when pointing the domain at Vercel: the two apex A records
  (`15.197.148.33`, `3.33.130.190`) and the `www` CNAME, all GoDaddy parking defaults.
  The `_domainconnect` CNAME is a GoDaddy leftover and can be deleted.
- Use the exact record values Vercel shows when the domain is added to the project; don't use values from memory.
  Set the Vercel records to **DNS only** (grey cloud) in Cloudflare.
- Hosting: not deployed yet. As of 6 Nov 2026 there is no Vercel project for this repo in team
  `baraqabaja-5225s-projects`, and baraqabaja.com isn't added to Vercel.
- DNS and Vercel domain changes are live and public. Bara approves each one before it's made.

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

Static files: CV PDF at `public/BaraQabaja_CV_v17.pdf` (the "View CV" button opens the same version on Google Drive; v15 was deleted 11 Nov 2026), project screenshots in `public/img/projects/`, profile photo `public/img/Picture5-removebg-preview.jpg`, favicon `public/Picture1.png`.

Project skills for routine content updates: `/add-project`, `/add-experience`, `/add-tech-talk` (in `.claude/skills/`).

Design skills **Impeccable** (`/impeccable`) and **Taste Skill** (`design-taste-frontend`) are installed **globally**
for Bara's user (`~/.claude/skills/`), not in this repo. Their setup and security notes are in `~/.claude/CLAUDE.md`.
Rules for this site:
- The site keeps its current style. Impeccable's read-only commands (`critique`, `audit`, `document`) are fine. Only
  run the ones that change the look (`bolder`, `colorize`, `typeset`, `layout`, `polish`, `overdrive`, `live`, ...)
  when Bara asks for that change. If a hook finding suggests a restyle, report it rather than acting on it.
- Use Taste Skill here **only when Bara names it or asks for a new page or full redesign**. Its house rules never
  override this file: don't copy its `assets/` or `starter.html` into the project unasked, and **never apply its rule
  9** (contacts on `.example`, no real-format phone) to the site's real email and phone.

## Conventions

- Prettier config in `.prettierrc.js`: single quotes, semicolons, 2-space indent, 120 cols, no trailing commas. (Prettier itself isn't installed; follow the style by hand.)
- Description fields in `timelines` and `portfolioList2` are **HTML strings** rendered with `dangerouslySetInnerHTML`. Content is authored by us only — never feed user input into them.
- Inline links inside those strings use a long inline `style=` + `onMouseOver` block.
  - In `timelines` (`demo-33.ts`), use the `link(href, text)` helper at the top of `timelines`. It produces that
    exact markup.
  - In `portfolio.ts`, copy an existing `<a>` from the same file so new links look the same.
- `<img>` is allowed (lint rule disabled); `next/image` is imported in places but barely used.
- The `Project` interface is duplicated in `Portfolio3.tsx` and `About30.tsx`. Change both together if the shape changes.

## Content rules

- Never invent facts: dates, job titles, company names, metrics, links, or descriptions. If Bara hasn't supplied it, ask.
- The site's contact email is **hello@baraqabaja.com** everywhere (since 11 Nov 2026):
  - Hero28 and Footer19 (the E-mail widget).
  - The Navbar offcanvas text.
  - `SocialLinks`, the email icon in the footer and the mobile menu.
  - Navbar `partials/Social.tsx`.
  - It forwards to Bara's Gmail through Cloudflare Email Routing (see "Domain, DNS and email" above). Write it
    exactly as given. Keep the phone number as it is unless Bara changes it.
- The footer address stays **Ramallah City, West Bank, Palestine**, even though CV v17 says Hebron. Bara chose this
  on 11 Nov 2026.
- The Experience timeline follows Bara's latest CV (v17). Update it from a new CV only, keeping the CV's facts and
  wording. Fixing obvious typos is fine.
- If the site mentions Bara's employer Intersect, write it as **"Intersect"** (not "Intersect Innovation Hub", "Intersect Hub" or "IIH"); in Arabic it's انترسكت.

## Known issues (from the Nov 2026 audit — fix when touching nearby code)

- `pages/index.tsx`: ticker label "Nest.ts" should be "NestJS"; several `<figure title="Some Title Quam Sit Ornare">` template leftovers; logo `alt=""` on every image.
- `Portfolio3.tsx` heading says "our awesome projects" (template copy). `Blog6.tsx` renders a dummy `<Pagination>`.
- `Footer19.tsx`: hardcoded "© 2024".
- `pages/_app.tsx` / `_document.tsx`: `%PUBLIC_URL%` favicon links are Create-React-App syntax and 404 in Next; `<title>` is duplicated. `public/manifest.json` is the CRA default.
- `src/theme/themeOptions.ts`: route `/` loads `/css/colors/blue.css`, which doesn't exist (404). Harmless, since blue is the default in `style.css`.
- `sharp@0.31.3` is old; install may fail on new Node versions.
- `public/img/` is ~158 MB, mostly unused template images (`photos/`, `demos/`, `illustrations/`). Some are pulled in by CSS, not JSX (e.g. `img/photos/lines.png` for the hero's `bg-lines`, `img/svg/hex.svg`), so grep `src/assets/scss` and `public/css` too and check the browser's network tab before deleting anything.

Found in the 11 Nov 2026 full read of every live file:
- `src/data/demo-33.ts`:
  - Wording kept from the CV as-is: "enhance ... to enhance" (TurboGrading), "Architecting and implementing"
    (present tense in a past role), "developers developed" (PalSoft).
  - The `services` and `testimonials` exports are unused lorem-ipsum template data.
- `BlogCard2.tsx` (Tech-Talks card):
  - The date is hardcoded to "1 Sep 2023" for every post. Make it a prop before adding talks.
  - "Read More" renders "undefined . . ." when the description has no `</p>`, and it shows even when there's nothing
    more to read.
- `BlogCard5.tsx` (project images): two leftover `console.log` calls fire on every render, every image has
  `alt="demo"`, and dayjs/Link/Image/useEffect are imported but unused.
- `About30.tsx`: the skill tags are `NextLink href="#"`, so clicking one jumps the page.
- `About34.tsx`: unused `next/link` import.
- `pages/404.tsx`: it renders the template's fake language switcher (En/Bn/Es/De) and a "Contact" button that links
  to `#`.
- `ThemeProvider.tsx`:
  - It adds the colour and font CSS after hydration, so the font swaps in late. The font is Space Grotesk, with
    IBM Plex Serif italic for `<em>`.
  - A page loader always stays up for a fixed 1 s.
  - `typeof window === undefined` compares against the value, not the string (harmless, since effects only run in the
    browser).
- The home page renders `<Info />` (hidden, with the fake `info@email.com`) but not Search, MiniCart or Language.

## Git workflow

- Work on a branch for anything bigger than a copy tweak; `main` is what's live.
- Run `npm run build` before committing.
- Never push, force-push, or rewrite history without Bara saying so.
