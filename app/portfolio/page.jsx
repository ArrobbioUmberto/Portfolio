'use client';
import Navbar from '@/components/header/Navbar';
import Footer from '@/components/footer/Footer';

import classes from './page.module.css';
import Video from '@/components/portfolio/main/Video';
import CardFolder from '@/components/portfolio/main/CardFolder';
import React, { useRef,useEffect } from 'react';
function page() {
  const contattiRef = useRef(null);
  useEffect(() => {
    // Calcola l'altezza del viewport in unità vh
    const vh = window.innerHeight * 0.01;

    // Imposta il valore nella variabile CSS personalizzata --vh
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, [])
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <Navbar contattiRef={contattiRef} />
        <Video />
      </header>
      <main className={classes.main}>
        <CardFolder />
      </main>
      <footer className={classes.footer} ref={contattiRef} id='contatti'>
        <Footer />
      </footer>
    </div>
  );
}

export default page;
