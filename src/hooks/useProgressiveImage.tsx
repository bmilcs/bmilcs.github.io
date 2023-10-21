import { useEffect, useState } from 'react';

// This hook is used to load an image progressively
// returns null on first render, then the src string once the image is loaded

export const useProgressiveImage = (src: string) => {
  const [image, setImage] = useState<null | string>(null);

  useEffect(function waitForBackgroundImage() {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImage(src);
    };
  }, []);

  return image;
};
