'use client';
import Navbar from '@/components/header/Navbar';
import Footer from '@/components/footer/Footer';
import React from 'react';
import classes from './page.module.css';
import Video from '@/components/portfolio/main/Video';
function page() {
  return (
    <>
      <header className={classes.header}>
        <Navbar />
      </header>
      <main>
        <Video />
      </main>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </>
  );
}

export default page;
