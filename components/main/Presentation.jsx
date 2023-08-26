'use client';
import React, { Fragment } from 'react';
import Image from 'next/image';
import CV from '../../public/pino.jpg';
function Presentation() {
  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Image src={CV} alt='foto cv' />
          </div>
          <div className='col'>col 6/12 con testo e descrizione </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Presentation;
