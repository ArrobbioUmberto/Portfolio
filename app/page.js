'use client';
import Navbar from '@/components/header/Navbar';
import Footer from '@/components/footer/Footer';
import classes from './page.module.css';
import Hero from '@/components/home/main/Hero';
import Presentation from '@/components/home/main/Presentation';
import Carousel from '@/components/home/main/Carousel';
import LogoLanguage from '@/components/home/main/LogoLanguage';
import React, { useRef } from 'react';
export default function Home() {
  const contattiRef = useRef(null);
  return (
    <div className={classes.container}>
      <section className={classes.section}>
        <header className={classes.header}>
          <Navbar contattiRef={contattiRef} />
          <Hero />
        </header>
      </section>
      <main>
        <section className={classes.section}>
          <Presentation />
          <LogoLanguage />
        </section>
        <section className={`${classes.section} ${classes.carousel}`}>
          <Carousel />
        </section>
      </main>
      <section className={classes.section} ref={contattiRef} id='contatti'>
        <footer className={classes.footer}>
          <Footer />
        </footer>
      </section>
    </div>
  );
}
