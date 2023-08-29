import React from 'react';
import './LogoLanguage.style.css';
function LogoLanguage() {
  const logos = [
    {
      name: 'ciao',
      id: 1,
      src: '/languages/bootstrap.svg',
    },
    {
      name: 'ciao',
      id: 2,
      src: '/languages/css3.svg',
    },
    {
      name: 'ciao',
      id: 3,
      src: '/languages/html5.svg',
    },
    {
      name: 'ciao',
      id: 4,
      src: '/languages/js.svg',
    },
    {
      name: 'ciao',
      id: 5,
      src: '/languages/laravel.svg',
    },
    {
      name: 'ciao',
      id: 6,
      src: '/languages/php-logo.svg',
    },
    {
      name: 'ciao',
      id: 7,
      src: '/languages/sass.svg',
    },
    {
      name: 'ciao',
      id: 8,
      src: '/languages/vuejs.svg',
    },
  ];
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='slide slide_primary'>
          {logos.map((item) => (
            <img key={item.id} src={item.src} className='logo-img' />
          ))}
        </div>
        <div className='slide slide_secondary'>
          {logos.map((item) => (
            <img key={item.id} src={item.src} className='logo-img' />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoLanguage;
