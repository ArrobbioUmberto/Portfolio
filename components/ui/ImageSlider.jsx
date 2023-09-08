import React, { useRef, useState,useEffect } from 'react';
import classes from './ImageSlider.module.css';
function ImageSlider(props) {
  const { images } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageVisible, setImageVisible] = useState(false);
  const imgRef = useRef(null);
  let hideArrow = true;
  if (images.length === 1) {
    hideArrow = false;
    console.log(hideArrow);
  }

  const prevImage = () => {
    console.log('prev');
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    // console.log(currentIndex);
  };
  const nextImage = () => {
    console.log('next');
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setImageVisible(true);
          observer.disconnect(); // Smetti di osservare l'elemento una volta che è visibile.
        }
      });
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);
  return (
    <div>
      <img ref={imgRef} src={imageVisible? images[currentIndex]: '/social/loading.svg'} alt='ciao' className={classes.img} />
      {hideArrow && (
        <>
          <button onClick={prevImage} className={classes.button}>
            <img src='/images/arrow-prev.svg' className={classes.prevButton} alt='bottoni' />
          </button>
          <button onClick={nextImage} className={classes.button}>
            <img src='/images/arrow-next.svg' className={classes.nextButton} alt='bottoni' />
          </button>
        </>
      )}
    </div>
  );
}

export default ImageSlider;
