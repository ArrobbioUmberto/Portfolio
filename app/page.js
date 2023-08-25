import Navbar from '@/components/header/Navbar';
import Footer from '@/components/footer/Footer';
import { Fragment } from 'react';
import classes from './page.module.css';
import Main from '@/components/main/Main';
export default function Home() {
  return (
    <Fragment>
      <header className={classes.header}>
        <Navbar />
      </header>
      <main>
        <Main />
      </main>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </Fragment>
  );
}
