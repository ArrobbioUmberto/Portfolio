'use client';
import Navbar from '@/components/header/Navbar';
import Footer from '@/components/footer/Footer';
import React from 'react';
import classes from './page.module.css';
import Video from '@/components/portfolio/main/Video';
import CardFolder from '@/components/portfolio/main/CardFolder';
function page() {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <Navbar />
      </header>
      <main className={classes.main}>
        <Video />
        <CardFolder />
      </main>
      <footer className={classes.footer} id='contatti'>
        <Footer />
      </footer>
    </div>
  );
}

export default page;
