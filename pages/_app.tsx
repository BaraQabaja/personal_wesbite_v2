import Head from 'next/head';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { Fragment, useEffect } from 'react';

// animate css
import 'animate.css';
// import swiper css
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
// glightbox css
import 'glightbox/dist/css/glightbox.css';
// custom scrollcue css
import 'plugins/scrollcue/scrollCue.css';
// Bootstrap and custom scss
import 'assets/scss/style.scss';
// site font rules: must come after the theme so they override it
import 'assets/css/space-font.css';

// The page is rendered on the server, so search engines and link previews get the full content.
// (The template used to show only a loading spinner until the JavaScript ran, and to switch colour/font
// stylesheets per route from src/theme; the font is now loaded via pages/_document.tsx + assets/css/space-font.css.)
function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  // added bootstrap functionality
  useEffect(() => {
    if (typeof window !== 'undefined') import('bootstrap');
  }, []);

  // scroll animation added
  useEffect(() => {
    (async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({ interval: -400, duration: 700, percentage: 0.8 });
      scrollCue.update();
    })();
  }, [pathname]);

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
