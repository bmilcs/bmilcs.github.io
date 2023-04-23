import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { TScreenshot } from '../../data/projects';
import './Carousel.scss';

type TProps = {
  imageArray: TScreenshot[];
  isTransitionDone: boolean;
};

function Carousel({ imageArray, isTransitionDone }: TProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollXPosition, setScrollXPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // despite having no visible scrollbar, users can use enter/space/arrow keys to
  // cycle images when the carousel is focused. this keeps currentImageIndex
  // up to date, regardless how of the scrolling occurs.

  useEffect(() => {
    // a delay is needed to allow the sticky scrolling animation to complete.
    // if no delay is present, the carousel remains stuck on the first image.
    const delayUntilScrollingStopped = setTimeout(() => {
      const carousel = carouselRef.current;
      if (carousel === null) return;

      const carouselViewportWidth = carousel.offsetWidth;
      const currentXPosition = carousel.scrollLeft;
      const newImageIndex = +(currentXPosition / carouselViewportWidth).toFixed(0);

      if (currentImageIndex === newImageIndex) return;

      setCurrentImageIndex(newImageIndex);
    }, 250);

    return () => clearTimeout(delayUntilScrollingStopped);
  }, [scrollXPosition]);

  // when currentImageIndex is updated, scroll to the image within the carousel image container

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel === null) return;

    const carouselVisibleWidth = carousel.offsetWidth;
    const currentXPosition = carousel.scrollLeft;

    // the initial css transition on parent project element causes the scroll event to fire on
    // carousel element. the initial image index was being assigned a random number other than
    // index zero. to prevent this, override scroll calculations to 0 until transition is complete.
    const targetXPosition = !isTransitionDone ? 0 : carouselVisibleWidth * currentImageIndex;

    if (currentXPosition === targetXPosition) return;

    carousel.scroll({ left: targetXPosition, behavior: 'smooth' });
  }, [currentImageIndex]);

  // change images on click/enter/space bar

  const cycleImage = () => {
    setCurrentImageIndex((prev) => {
      const onLastImage = prev === imageArray.length - 1;
      const firstImage = 0;
      const nextImage = prev + 1;
      return onLastImage ? firstImage : nextImage;
    });
  };

  const onKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    const enterOrSpace = e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar';
    if (enterOrSpace) {
      e.preventDefault();
      cycleImage();
    }
  };

  return (
    <div className='carousel'>
      {/* single image: <img>, no interactivity */}
      {imageArray.length === 1 &&
        imageArray.map(({ url, alt }, idx) => {
          return <img src={url} alt={`${alt}`} key={`${url}${idx}`} />;
        })}

      {/* multiple images: interactive carousel */}
      {imageArray.length > 1 && (
        <>
          <div
            className='carousel__images-container'
            ref={carouselRef}
            role='button'
            tabIndex={0}
            aria-label='image carousel'
            onKeyDown={(e) => {
              onKeyPress(e);
            }}
            onClick={() => {
              cycleImage();
            }}
            onScroll={(e) => {
              const ele = e.target as HTMLDivElement;
              const xPosition = ele.scrollLeft;
              setScrollXPosition(xPosition);
            }}
            onTouchEnd={(e) => {
              const ele = e.target as HTMLDivElement;
              const xPosition = ele.scrollLeft;
              setScrollXPosition(xPosition);
            }}
          >
            {imageArray.map(({ url, alt }) => {
              return <img src={url} alt={`${alt}`} key={`${url}-image`} />;
            })}
          </div>

          {/* round navigation buttons */}
          <div className='carousel__bottom-buttons'>
            {imageArray.map(({ url, alt }, idx) => {
              return (
                <button
                  className={`carousel__bottom-button ${
                    currentImageIndex === idx ? 'currentImage' : ''
                  }`}
                  key={`${url}-button`}
                  aria-label={`View ${alt}`}
                  onClick={() => {
                    setCurrentImageIndex(idx);
                  }}
                ></button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Carousel;
