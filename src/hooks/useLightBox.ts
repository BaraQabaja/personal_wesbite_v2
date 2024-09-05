import { useEffect } from 'react';

const useLightBox = (group: string) => {
  useEffect(() => {
    const GLightbox = require('glightbox');
    const lightbox = GLightbox({
      loop: false,
      moreLength: 0,
      zoomable: true,
      autoplayVideos: true,
      touchNavigation: true,
      selector: `*[data-gallery=${group}]`, // Target the specific group
      plyr: {
        config: {
          fullscreen: { enabled: false, iosNative: false },
          youtube: { noCookie: true, rel: 0, showinfo: 0, iv_load_policy: 3 },
          vimeo: { byline: false, portrait: false, title: false, transparent: false },
        },
      },
    });

    // Cleanup on unmount
    return () => {
      if (lightbox) {
        lightbox.destroy();  // Properly destroy the lightbox instance
      }
    };
  }, [group]); // The empty array ensures this effect runs only once on mount

  return null;
};

export default useLightBox;
