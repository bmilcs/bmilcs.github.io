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
    <div className='carousel'>
      <div className='carousel__wrapper'>
        <button
          className='carousel__images'
          ref={carouselRef}
          onClick={() => cycleImage()}
          onScroll={(e) => {
            const ele = e.target as HTMLDivElement;
            const coords = ele.scrollLeft;
            setScrollXPosition(coords);
          }}
          aria-label='view next screenshot'
        >
          {imageArray.map(({ url, alt }, idx) => {
            return <img src={url} alt={`${alt}`} key={`${url}${idx}`} />;
          })}
        </button>

        {imageArray.length > 1 && (
          <div className='carousel__bottom-buttons'>
            {imageArray.map(({ url, alt }, idx) => {
              return (
                <button
                  className={`carousel__bottom-button ${
                    currentImageIndex === idx ? 'currentImage' : ''
                  }`}
                  key={url}
                  aria-label={`View ${alt} Image`}
                  onClick={() => {
                    setCurrentImageIndex(idx);
                  }}
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Carousel;
