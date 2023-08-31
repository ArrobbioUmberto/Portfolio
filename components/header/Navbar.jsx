'use client';
import Link from 'next/link';
import React from 'react';
import classes from './Navbar.module.css';
function Navbar() {
  return (
    <div className={classes.Nav_container}>
      <nav className={classes.navbar}>
        <ul className={classes.list}>
          <li>
            <Link href={'/'} className={classes.item}>
              Home
            </Link>
          </li>
          <li>
            <Link href={'/portfolio'} className={classes.item}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href={'#contatti'} className={classes.item}>
              Contattami
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
