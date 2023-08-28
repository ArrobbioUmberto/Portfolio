'use client';
import React, { Fragment } from 'react';
import Image from 'next/image';
import classes from './Presentation.module.css';
import CV from '../../public/images/foto-cv-linkedin.jpg';
function Presentation() {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.col_4}>
            <Image src={CV} alt='foto cv' className={classes.img} />
          </div>
          <div className={classes.col_6}>
            <div className={classes.box_content}>
              <h1 className={classes.title}>Mi chiamo Umberto Arrobbio</h1>
              <h2 className={classes.subtitle}>
                Sono uno Junior Full Stack Web Developer
              </h2>
              <p className={classes.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                ratione ullam rerum fugiat dolorum repudiandae sapiente
                consectetur! Iusto, quibusdam adipisci? Cupiditate dolor beatae
                animi libero rem ipsam eveniet, molestiae aliquid sequi, maiores
                tempora magnam expedita voluptatibus provident? Quam, voluptatum
                reiciendis. Et consequuntur laudantium repudiandae quibusdam
                exercitationem dolores, earum asperiores possimus adipisci
                provident eligendi delectus. Ullam amet recusandae possimus
                nesciunt eaque. Perferendis, repellat quisquam! Eos excepturi,
                perferendis ducimus in aliquam atque voluptate repudiandae id
                quaerat error eveniet, asperiores, odit corporis ea?
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Presentation;
