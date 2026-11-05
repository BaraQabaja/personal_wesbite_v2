---
name: add-tech-talk
description: Add a new video or post to the Tech-Talks section of Bara's portfolio (src/components/blocks/blog/Blog6.tsx). Use when Bara publishes new content (LinkedIn video, YouTube video, Instagram/TikTok reel, article) and wants it on the site.
---

# Add a Tech-Talk

Tech-Talks is `src/components/blocks/blog/Blog6.tsx`. Each talk is a hardcoded `<BlogCard2>` with an embed in
`cardTop`, so there's no data file yet. Once there are 3 or more talks, suggest moving them into a
`src/data/tech-talks.ts` array mapped in `Blog6.tsx` (same pattern as `portfolioList2`), and do that first if Bara agrees.

## 1. Get from Bara

Platform + post URL, title, category (e.g. "Software"), and the description text. Don't write the description
yourself without Bara's go-ahead; it's published under Bara's name.

## 2. Get the embed URL

| Platform | Embed `src` |
|---|---|
| LinkedIn | `https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:<id>?compact=1` (the `<id>` is in LinkedIn's "Embed this post" code, not in the share URL's `activity-` number) |
| YouTube | `https://www.youtube.com/embed/<videoId>` |
| Instagram | `https://www.instagram.com/p/<shortcode>/embed` |

If you can't work out the exact embed id from what Bara gave you, ask for LinkedIn's "Embed this post" snippet.

## 3. Add the card

Add a new `<BlogCard2>` inside `<div className="blog classic-view">`, newest first, copying the existing one:

```tsx
<BlogCard2
  link="<public post URL>"
  category="Software"
  title="…"
  description={`<p>…</p>`}
  cardTop={
    <div className="card-img-top ratio ratio-16x9">
      <iframe src="<embed URL>" allowFullScreen={true} title="<title>" style={{ border: 'none' }} />
    </div>
  }
/>
```

The existing card uses `link="#"`. Set a real URL for new ones.

## 4. Verify

`npm run build`, then open the preview and confirm the embed loads (LinkedIn embeds can be slow or blocked by
ad-blockers).
