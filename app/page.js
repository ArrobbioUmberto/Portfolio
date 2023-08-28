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
    <Fragment>
      <header className={classes.header}>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Presentation />
        <LogoLanguage />
        <Carousel />
      </main>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </Fragment>
  );
}
