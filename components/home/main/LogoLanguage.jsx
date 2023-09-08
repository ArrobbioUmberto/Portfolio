import React from 'react';
import './LogoLanguage.style.css';
function LogoLanguage() {
  const logos = [
    {
      name: 'bootstrap',
      id: 1,
      src: '/languages/bootstrap.svg',
    },
    {
      name: 'css',
      id: 2,
      src: '/languages/css3.svg',
    },
    {
      name: 'html',
      id: 3,
      src: '/languages/html5.svg',
    },
    {
      name: 'js',
      id: 4,
      src: '/languages/js.svg',
    },
    {
      name: 'laravel',
      id: 5,
      src: '/languages/laravel.svg',
    },
    {
      name: 'php',
      id: 6,
      src: '/languages/php-logo.svg',
    },
    {
      name: 'sass',
      id: 7,
      src: '/languages/sass.svg',
    },
    {
      name: 'vuejs',
      id: 8,
      src: '/languages/vuejs.svg',
    },
    {
      name: 'react',
      id: 9,
      src: '/languages/react.svg',
    },
    {
      name: 'mongodb',
      id: 10,
      src: '/languages/mongodb.svg',
    },
    {
      name: 'nextjs',
      id: 11,
      src: '/languages/nextjs.svg',
    },
  ];
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='slide slide_primary'>
          {logos.map((item) => (
            <img key={item.id} src={item.src} className='logo-img'alt='logo' />
          ))}
        </div>
        <div className='slide slide_secondary'>
          {logos.map((item) => (
            <img key={item.id} src={item.src} className='logo-img' alt='logo' />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoLanguage;
