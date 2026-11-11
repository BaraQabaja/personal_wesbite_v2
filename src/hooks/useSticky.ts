import { RefObject, useEffect, useState } from 'react';

// `sticky` turns true once the page is scrolled past `height` px.
// `spacer` is the height of `measureRef`'s element at the moment it became sticky (measured in the scroll handler,
// not during render), so a placeholder can keep the page from jumping when the navbar switches to position: fixed.
const useSticky = (height = 100, measureRef?: RefObject<HTMLElement | null>) => {
  const [sticky, setSticky] = useState(false);
  const [spacer, setSpacer] = useState(0);

  useEffect(() => {
    let current = false;
    const listener = () => {
      const next = window.scrollY > height;
      if (next === current) return;
      if (next) setSpacer(measureRef?.current?.clientHeight ?? 0);
      current = next;
      setSticky(next);
    };

    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, [height, measureRef]);

  return { sticky, spacer };
};

export default useSticky;
