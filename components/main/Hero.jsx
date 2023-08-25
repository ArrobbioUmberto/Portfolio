'use client';
import React, { Fragment } from 'react';
import classes from './Hero.module.css';
import Presentation from './Presentation';
// import trace from './componets/main/Main.module.css';
function Hero() {
  return (
    <Fragment>
      <div className={classes.container}>
        <h1 className={classes.title}>
          Hero sfondo con mega scritta sopra bianca
        </h1>
      </div>
      <Presentation />
    </Fragment>
  );
}

export default Hero;
