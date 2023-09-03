import React, { useState } from 'react';
import classes from './ImageSlider.module.css';
function ImageSlider(props) {
  const { images } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
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
  return (
    <>
      <img src={images[currentIndex]} alt='ciao' className={classes.img} />
      <button onClick={prevImage} className={classes.prevButton}>
        <img src='/images/arrow-prev.svg' className={classes.prevButton} />
      </button>
      <button onClick={nextImage}>
        <img src='/images/arrow-next.svg' className={classes.nextButton} />
      </button>
    </>
  );
}

export default ImageSlider;
