import { RefObject, useEffect, useState } from 'react';

function useElementOnScreen(ref: RefObject<Element>, verticalOffsetInPixels = '0px') {
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOnScreen(entry.isIntersecting);
      },
      { rootMargin: verticalOffsetInPixels },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return isOnScreen;
}

export default useElementOnScreen;
