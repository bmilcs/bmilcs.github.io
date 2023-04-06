import { useEffect, useRef, useState } from 'react';
import { TScreenshot } from '../../data/projects';

import './Carousel.scss';

type TProps = {
  imageArray: TScreenshot[];
};

function Carousel({ imageArray }: TProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollXPosition, setScrollXPosition] = useState(0);
  const carouselRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel === null) return;

    const carouselViewportWidth = carousel.offsetWidth;
    const targetXPosition = carouselViewportWidth * currentImageIndex;

    carousel.scroll({ left: targetXPosition, behavior: 'smooth' });
  }, [currentImageIndex]);

  // despite having no visible scrollbar, users can use arrow keys to
  // cycle images when the carousel is focused. this keeps currentImageIndex
  // updated if scrolling occurs.

  useEffect(() => {
    const delayUntilScrollingStopped = setTimeout(() => {
      const carousel = carouselRef.current;
      if (carousel === null) return;

      const carouselViewportWidth = carousel.offsetWidth;
      const currentXPosition = carousel.scrollLeft;
      const newImageIndex = +(currentXPosition / carouselViewportWidth).toFixed(0);

      if (currentImageIndex === newImageIndex) return;
      setCurrentImageIndex(newImageIndex);
    }, 100);

    return () => clearTimeout(delayUntilScrollingStopped);
  }, [scrollXPosition]);

  const cycleImage = () => {
    setCurrentImageIndex((prev) => {
      const onLastImage = prev === imageArray.length - 1;
      const firstImage = 0;
      const nextImage = prev + 1;
      return onLastImage ? firstImage : nextImage;
    });
  };

  return (
    <div className='project__carousel'>
      <button
        className='project__carousel-images'
        ref={carouselRef}
        onClick={() => cycleImage()}
        onScroll={(e) => {
          const ele = e.target as HTMLDivElement;
          const coords = ele.scrollLeft;
          setScrollXPosition(coords);
        }}
      >
        {imageArray.map(({ url, alt }, idx) => {
          return <img src={url} alt={`${alt}`} key={`${url}${idx}`} />;
        })}
      </button>

      <div className='project__carousel-bottom-buttons'>
        {imageArray.length > 1 &&
          imageArray.map(({ url, alt }, idx) => {
            return (
              <button
                className={`${currentImageIndex === idx ? 'currentImage' : ''}`}
                key={url}
                aria-label={`View ${alt}`}
                onClick={() => {
                  setCurrentImageIndex(idx);
                }}
              ></button>
            );
          })}
      </div>
    </div>
  );
}

export default Carousel;