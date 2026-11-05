---
name: add-experience
description: Add or update a job/role in the Experience timeline of Bara's portfolio (src/data/demo-33.ts → timelines), or replace the CV. Use when Bara starts a new role, ends one ("present" → end date), changes a title, or uploads a new CV.
---

# Add or update an experience entry

The Experience section is `src/components/blocks/about/About34.tsx`; it maps over the `timelines` array in
`src/data/demo-33.ts`. Ignore `services` and `testimonials` in that file; they're unused template data.

## 1. Get the facts from Bara (never invent them)

Role title, organisation, employment type (Full-Time / Part-Time / Freelance / Intern), location,
start month + year, end month + year or "present", and 2–5 bullet points.

Naming: if the organisation is Bara's employer Intersect, write **"Intersect"**. Never "Intersect Innovation Hub",
"Intersect Hub" or "IIH".

## 2. Edit `timelines`

The array is newest-first and rendered in order, so insert new roles at the top and renumber `id`s if needed.
If the previous current role ended, change its `duration` from `… - PRESENT` to the real end date.

```ts
{
  id: 1,
  duration: 'NOV 2026 - PRESENT',                 // uppercase 3-letter month, matches existing entries
  title: 'Role Title',
  titleDetails: ', Full-Time, Organisation, Location',  // leading comma, matches existing entries
  description: [
    'First bullet.',
    'Second bullet. For a link, copy an existing styled <a …> block from this file.'
  ]
}
```

Each bullet is an HTML string rendered with `dangerouslySetInnerHTML`.

## 3. CV (if it changed)

- Put the new PDF in `public/` and update the `download href` in `About34.tsx` (currently `/BaraQabaja_CV15.pdf`).
  Delete the old PDF only if Bara agrees.
- The "View CV" button points to a Google Drive link in `About34.tsx`. Ask Bara for the new link; don't guess.

## 4. Verify

`npm run build`, then check the timeline in the preview at desktop and mobile widths.
