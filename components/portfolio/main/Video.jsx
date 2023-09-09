'use client';
import React from 'react';
import classes from './Video.module.css';
function Video() {
  return (
    <video className={classes.video} autoPlay={true} 
    loop={true}
    controls={false} 
    playsInline
    muted >
      <source src='/videos/coding.mp4' type='video/mp4' alt='il video' />
    </video>
  );
}

export default Video;
