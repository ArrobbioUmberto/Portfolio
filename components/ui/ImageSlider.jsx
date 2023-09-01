import React, { useState } from 'react';
import classes from './ImageSlider.module.css';
function ImageSlider(props) {
  const { images } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevImage = () => {
    console.log('prev');
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    // console.log(currentIndex);
  };
  const nextImage = () => {
    console.log('next');
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
      <img src={images[currentIndex]} alt='ciao' className={classes.img} />
      <button onClick={prevImage} className={classes.prevButton}>
        PREV
      </button>
      <button onClick={nextImage} className={classes.nextButton}>
        NEXT
      </button>
    </>
  );
}

export default ImageSlider;
