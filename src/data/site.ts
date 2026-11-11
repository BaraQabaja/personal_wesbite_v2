// Site-wide details used for the page <title>, search results and link previews (LinkedIn, WhatsApp, X…).
// Change the wording here only; pages/index.tsx turns it into the right <head> tags.
export const site = {
  url: 'https://baraqabaja.com', // canonical address (the domain; hosting not live yet as of Nov 2026)
  name: 'Bara Qabaja',

  // Chosen by Bara, 11 Nov 2026
  title: 'Bara Qabaja',
  // ≤ 160 characters so Google shows it whole. Written from Bara's own bio (11 Nov 2026); his employer is
  // written "Intersect" only (never "Intersect Innovation Hub").
  description:
    'Software engineer and startup mentor helping Palestinian founders turn ideas into scalable digital products. Programs Officer and Tech Expert at Intersect.',

  // Link-preview image, 1200x630: profile photo on the hero's blue gradient, in Space Grotesk (approved by Bara).
  image: '/img/og-image.jpg',
  imageAlt: 'Bara Qabaja – Software Engineer & Startup Mentor'
};
