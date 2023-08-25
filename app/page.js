import Navbar from '@/components/header/Navbar';
import Footer from '@/components/footer/Footer';
import { Fragment } from 'react';
import classes from './page.module.css';
import Hero from '@/components/main/Hero';
export default function Home() {
  return (
    <Fragment>
      <header className={classes.header}>
        <Navbar />
      </header>
      <main>
        <Hero />
      </main>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </Fragment>
  );
}
