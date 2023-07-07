import { RefObject, useEffect, useState } from 'react';

const useElementOffScreen = (elementRef: RefObject<HTMLElement>) => {
  const [isOffScreen, setIsOffScreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOffScreen(!entry.isIntersecting);
      },
      { threshold: 0 },
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementRef]);

  return isOffScreen;
};

export default useElementOffScreen;
