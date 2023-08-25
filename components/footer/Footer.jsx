'use client';
import React from 'react';
import classes from './Footer.module.css';
import Link from 'next/link';
function Footer() {
  return (
    <div className={classes.row}>
      <div className={classes.col}>
        <ul className={classes.list}>
          <li className={classes.item}>
            <Link href={'./'}>Chi sono....</Link>
          </li>
          <li className={classes.item}>
            <Link href={'./'}>Dove vivo</Link>
          </li>
          <li className={classes.item}>
            <Link href={'./'}>Tecnologie</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
