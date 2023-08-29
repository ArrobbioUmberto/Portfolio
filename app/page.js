import Navbar from '@/components/header/Navbar';
import Footer from '@/components/footer/Footer';
import { Fragment } from 'react';
import classes from './page.module.css';
import Hero from '@/components/main/Hero';
import Presentation from '@/components/main/Presentation';
import Carousel from '@/components/main/Carousel';
import LogoLanguage from '@/components/main/LogoLanguage';

export default function Home() {
  return (
    <div className={classes.container}>
      <section className={classes.section}>
        <header className={classes.header}>
          <Navbar />
          <Hero />
        </header>
      </section>
      <main>
        <section className={classes.section}>
          <Presentation />
          <LogoLanguage />
        </section>
        <section className={classes.section}>
          <Carousel />
        </section>
      </main>
      <section className={classes.section}>
        <footer className={classes.footer}>
          <Footer />
        </footer>
      </section>
    </div>
  );
}
