'use client';
import React, { useEffect, useRef } from 'react';
import classes from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

import linkedin from '../../public/social/linkedin.svg';
import google from '../../public/social/google-mail-new.svg';
import github from '../../public/social/github.svg';

function Footer() {
  return (
    <div className={classes.row}>
      <div className={classes.col_40}>
        <h1>
          SEZIONE CON CONTATTI, CV(SCARICABILE), ATTESTATI(VISUALIZZABILE),
          SOCIAL(LOGHI CLICCABILI)
        </h1>
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
      <div className={classes.col_40}>
        <Image src={linkedin} alt='linkedin' className={classes.linkedin} />

        <Image src={google} alt='google' className={classes.google} />

        <Image src={github} alt='github' className={classes.github} />
      </div>
    </div>
  );
}

export default Footer;
