import React from 'react';
import loader from '../../public/social/loading.svg';
import classes from './HeroLoading.module.css';
import Image from 'next/image';
function HeroLoading() {
  return (
    <div className={classes.loader}>
      <svg className={classes.img}>
        <circle className={classes.dot} cx='30%' cy='20' r='10' />
        <circle className={classes.dot} cx='40%' cy='20' r='10' />
        <circle className={classes.dot} cx='50%' cy='20' r='10' />
        <circle className={classes.dot} cx='60%' cy='20' r='10' />
        <circle className={classes.dot} cx='70%' cy='20' r='10' />
      </svg>
    </div>
  );
}

export default HeroLoading;
