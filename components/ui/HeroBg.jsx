import React, { useEffect, useState } from 'react';
import classes from './HeroBg.module.css';

function HeroBg() {
  const text = [
    'Ogni grande viaggio inizia con un piccolo passo.',
    "Non importa quanto sia difficile, l'importante  ",
    'è iniziare e perseverare con determinazione.',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  // const [isAnimationStarted, setIsAnimationStarted] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
      setCurrentIndex(1);
    }, 0); // Delay
    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    if (isLoaded && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 2000); // Delay in milliseconds for each line

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isLoaded, text.length]);
  return (
    <>
      <div className={classes.container}>
        <div className={classes.title}>
          {text.slice(0, currentIndex).map((line, index) => (
            <span key={index} className={classes.animation}>
              {line}
              <br />
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default HeroBg;
