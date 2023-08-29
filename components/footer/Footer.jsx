'use client';
import React from 'react';
import classes from './Footer.module.css';
import Link from 'next/link';
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
      <div className={classes.col_60}>
        <h1>FORM CON POSSIBILITÀ INVIO MESSAGGIO ALLA MIA MAIL PERSONALE</h1>
      </div>
    </div>
  );
}

export default Footer;
