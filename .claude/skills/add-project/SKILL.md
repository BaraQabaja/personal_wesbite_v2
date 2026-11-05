---
name: add-project
description: Add or update a project card in the Projects section of Bara's portfolio (src/data/portfolio.ts → portfolioList2). Use when Bara wants to showcase a new project, change a project's screenshots, links, role or skills, or reorder projects.
---

# Add or update a project

Projects render in `src/components/blocks/portfolio/Portfolio3.tsx` (carousel) and open in a modal
(`src/components/blocks/about/About30.tsx`). The data is the `portfolioList2` array in `src/data/portfolio.ts`.
Ignore `portfolioList1/3/4/5/6`; they're template leftovers.

## 1. Get the facts from Bara (never invent them)

- Title
- Short description (1–3 paragraphs)
- Bara's role
- Skills / tech used
- Links (live demo, GitHub repos). Each one needs a button label.
- Screenshots: file paths or images to copy in. The first image is the carousel cover.

If anything is missing, ask in one message rather than guessing.

## 2. Add images

Copy screenshots to `public/img/projects/` named `<projectslug>_<view>.png` (e.g. `sharkod_payroll.jpg`),
matching the existing files there. Keep each image under ~500 KB if possible.

## 3. Add the entry

Append to `portfolioList2` (order in the array = order in the carousel). Use the next free `id`.

```ts
{
  id: 4,
  resources: [
    { title: 'Try Demo', url: 'https://…' },
    { title: 'Github Repo', url: 'https://github.com/BaraQabaja/…' }
  ],
  description: `<p>…</p>`,          // HTML string; for inline links copy an existing styled <a> from this file
  title: 'Project name',
  image: [
    { group: 'project-4', url: '/img/projects/slug_cover.png', title: 'Landing Page' },
    { group: 'project-4', url: '/img/projects/slug_dashboard.png', title: 'Dashboard' }
  ],
  myRole: 'Full Stack Developer',
  skill: ['React.js', 'Node.js']
}
```

`group` must be `project-<id>` for every image of that project (used by the lightbox).
If you add a field, update the `Project` interface in **both** `Portfolio3.tsx` and `About30.tsx`.

## 4. Verify

`npm run build`, then open the preview (`dev` config) and click the new card to check the modal, images and links.
