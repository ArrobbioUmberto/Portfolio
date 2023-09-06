'use client';
import React, { useEffect, useRef } from 'react';
import classes from './Footer.module.css';

function Footer() {
  const link = [
    {
      id: 1,
      name: 'linkedin',
      src: '/social/linkedin.svg',
      http: 'https://www.linkedin.com/in/umberto-arrobbio-413434215/',
    },
    {
      id: 2,
      name: 'curricula',
      src: '/social/cv2.svg',
      http: '/umberto-arrobbio-cv.pdf',
    },
    {
      id: 3,
      name: 'github',
      src: '/social/github.svg',
      http: 'https://github.com/ArrobbioUmberto',
    },
    {
      id: 4,
      name: 'google',
      src: '/social/google-mail-new.svg',
      http: 'mailto:arrobbio.umberto@gmail.com',
    },
  ];
  return (
    <div className={classes.row}>
      <div className={classes.col_40}>
        <h1 className={classes.text}>2023 - Made with</h1>
        <img src='/images/heart.svg' alt='cuore' className={classes.heart} />
        <h1 className={classes.text}> by Umberto Arrobbio</h1>
      </div>
      <div className={classes.col_40}>
        {link.map((item) => (
          <a
            href={item.http}
            key={item.id}
            target='_blank'
            className={classes.link}
          >
            <img
              src={item.src}
              alt={item.name}
              className={classes[item.name]}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
