'use client';
import React from 'react';
import classes from './Video.module.css';
import filmato from '../../../app/videos/video.mp4';
function Video() {
  return (
    <div>
      <video className={classes.video} src={filmato} autoPlay loop></video>
    </div>
  );
}

export default Video;
