import Document, { Head, Html, Main, NextScript } from 'next/document';

// Site-wide <head> tags. Page titles, descriptions and link-preview tags live in each page (see pages/index.tsx).
export default class SiteDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Site fonts: Space Grotesk (local files) and IBM Plex Serif italic for <em> (Google Fonts). Only the
              @font-face files are here, so they load with the page; the rules that apply them are in
              src/assets/css/space-font.css (bundled after the theme). The template used to inject all of this with
              JavaScript after load, so the font visibly swapped. */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@1,300;1,400;1,500;1,600;1,700&display=swap"
          />
          {/* static @font-face file from public/ (not app CSS), so linking it directly is intended */}
          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link rel="stylesheet" href="/fonts/space/space.css" />
          <link rel="preload" href="/fonts/space/SpaceGrotesk-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/space/SpaceGrotesk-SemiBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/space/SpaceGrotesk-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

          {/* Icons: the blue "B" logo (public/Picture1.png), resized into public/icons/ */}
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
