'use client';
import React, { Fragment } from 'react';
import Image from 'next/image';
import classes from './Presentation.module.css';
import CV from '../../../public/images/foto-cv-linkedin.jpg';
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
