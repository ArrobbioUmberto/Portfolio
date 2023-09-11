'use client';
import React, { Fragment } from 'react';
import Image from 'next/image';
import classes from './Presentation.module.css';
import CV from '../../../public/images/foto-cv-linkedin.jpg';
function Presentation() {
  const logos = [
    {
      name: 'bootstrap',
      id: 1,
      src: '/languages/bootstrap.svg',
    },
    {
      name: 'css',
      id: 2,
      src: '/languages/css3.svg',
    },
    {
      name: 'html',
      id: 3,
      src: '/languages/html5.svg',
    },
    {
      name: 'js',
      id: 4,
      src: '/languages/js.svg',
    },
    {
      name: 'laravel',
      id: 5,
      src: '/languages/laravel.svg',
    },
    {
      name: 'php',
      id: 6,
      src: '/languages/php-logo.svg',
    },
    {
      name: 'sass',
      id: 7,
      src: '/languages/sass.svg',
    },
    {
      name: 'vuejs',
      id: 8,
      src: '/languages/vuejs.svg',
    },
    {
      name: 'react',
      id: 9,
      src: '/languages/react.svg',
    },
    {
      name: 'mongodb',
      id: 10,
      src: '/languages/mongodb.svg',
    },
    {
      name: 'nextjs',
      id: 11,
      src: '/languages/nextjs.svg',
    },
  ];

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.col_4}>
            <Image src={CV} alt='foto cv' className={classes.img} />
            <div className={classes.mobile}>
              <h2 className={classes.text_logo}>
                Linguaggi di programmazione e di mark-up
              </h2>
              <div className={classes.wrapper_logo}>
                {logos.map((item) => (
                  <img
                    className={classes.logo}
                    src={item.src}
                    key={item.id}
                    alt={item.name}
                    loading='lazy'
                  ></img>
                ))}
              </div>
            </div>
          </div>
          <div className={classes.col_6}>
            <div className={classes.box_content}>
              <h1 className={classes.title}>Mi chiamo Umberto Arrobbio</h1>
              <h2 className={classes.subtitle}>
                Sono uno Junior Full Stack Web Developer
              </h2>
              <p className={classes.text}>
                Sono sempre stato un appassionato di tecnologia. Sono in grado
                di creare siti web responsive e applicazioni web interattive che
                offrono un'esperienza utente di prima classe. La mia curiosità e
                la mia sete di apprendimento mi spingono costantemente a
                rimanere aggiornato sulle ultime tendenze e tecnologie nel mondo
                dello sviluppo web. Il mio approccio al web development è basato
                sulla cura dei dettagli e sull'attenzione alla qualità del
                codice. Mi piace lavorare su progetti che sfidano le mie abilità
                e mi danno l'opportunità di crescere come sviluppatore. Dalla
                progettazione dell'interfaccia utente alla gestione del
                back-end, sono in grado di affrontare ogni aspetto dello
                sviluppo web. Nel mio portfolio, che terrò aggiornato nel tempo,
                troverete una selezione dei miei progetti più recenti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Presentation;
