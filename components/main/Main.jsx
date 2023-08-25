import React, { Fragment } from 'react';
import classes from './Main.module.css';
import Presentation from './Presentation';
function Main() {
  return (
    <Fragment>
      <div className={classes.container}>
        <h1>Hero sfondo con mega scritta sopra bianca </h1>
      </div>
      <Presentation />
    </Fragment>
  );
}

export default Main;
