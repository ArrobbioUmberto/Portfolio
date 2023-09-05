'use client';
import React from 'react';
import classes from './Video.module.css';

function Video() {
  return (
    <video className={classes.video} autoPlay muted loop>
      <source src='/videos/coding.mp4' type='video/mp4' alt='il video' />
    </video>
  );
}

export default Video;
