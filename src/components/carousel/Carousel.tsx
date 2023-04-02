import { useEffect, useRef, useState } from 'react';
import { TScreenshot } from '../../data/projects';

import './Carousel.scss';

type TProps = {
  imageArray: TScreenshot[];
};

function Carousel({ imageArray }: TProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const carouselRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel === null) return;

    const carouselViewport = carousel.offsetWidth;
    const targetX = carouselViewport * currentImage;

    carousel.scroll({ left: targetX, behavior: 'smooth' });
  }, [currentImage]);

  const cycleImage = () => {
    setCurrentImage((prev) => {
      return prev === imageArray.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <div className='project__carousel'>
      <button className='project__carousel-images' ref={carouselRef} onClick={() => cycleImage()}>
        {imageArray.map(({ url, alt }, idx) => {
          return <img src={url} alt={`${alt}`} key={`${url}${idx}`} />;
        })}
      </button>

      <div className='project__carousel-bottom-buttons'>
        {imageArray.length > 1 &&
          imageArray.map(({ url, alt }, idx) => {
            return (
              <button
                className={`${currentImage === idx ? 'currentImage' : ''}`}
                key={url}
                aria-label={`View ${alt}`}
                onClick={() => {
                  setCurrentImage(idx);
                }}
              ></button>
            );
          })}
      </div>
    </div>
  );
}

export default Carousel;
