import React from 'react';
// import classes from './CardFolder.module.css';
import Card from '@/components/ui/Card';
function CardFolder() {
  const projects = [
    {
      id: 1,
      name: 'whatsapp',
      link: 'https://github.com/ArrobbioUmberto',
      img: ['/progetti/mono/whatsapp.png'],
      logo: [
        '/languages/html5.svg',
        '/languages/css3.svg',
        '/languages/bootstrap.svg',
        '/languages/js.svg',
        '/languages/vuejs.svg',
      ],
      description:
        "Ho ricreato la web app di messaggistica istantanea WhatsApp. Grazie all'uso di HTML, CSS e Vue, ho creato un'applicazione efficiente con un'interfaccia semplice ed intuitiva. ",
    },
    {
      id: 2,
      name: 'DC comics',
      link: 'https://github.com/ArrobbioUmberto',
      logo: [
        '/languages/html5.svg',
        '/languages/css3.svg',
        '/languages/bootstrap.svg',
        '/languages/js.svg',
        '/languages/vuejs.svg',
      ],
      img: [
        '/progetti/dc-comics/dc-comics-1.png',
        '/progetti/dc-comics/dc-comics-2.png',
        '/progetti/dc-comics/dc-comics-3.png',
      ],
      description:
        'I supereroi sono sempre stati una mia grande passione e come progetto ho voluto replicare il sito DC Comics e in particolare la sua homepage. Questo applicativo utilizza HTML,CSS,Vue e Vite. ',
    },
    {
      id: 3,
      name: 'boolflix',
      link: 'https://github.com/ArrobbioUmberto',
      logo: [
        '/languages/html5.svg',
        '/languages/css3.svg',
        '/languages/bootstrap.svg',
        '/languages/js.svg',
        '/languages/vuejs.svg',
        '/languages/Vitejs.svg',
      ],
      img: [
        '/progetti/boolflix/boolflix-1.png',
        '/progetti/boolflix/boolflix-2.png',
        '/progetti/boolflix/boolflix-3.png',
      ],
      description:
        "Boolflix è il fratello minore della più nota piattaforma dalla grande N. Questo compito mi ha permesso di sviluppare un applicativo che interagisse con un'API di Film e Serie TV tramite delle funzioni async.",
    },
    {
      id: 4,
      name: 'spotify',
      link: 'https://github.com/ArrobbioUmberto',
      logo: [
        '/languages/html5.svg',
        '/languages/css3.svg',
        '/languages/bootstrap.svg',
        '/languages/js.svg',
        '/languages/vuejs.svg',
      ],
      img: ['/progetti/mono/spotify-pic.png'],
      description:
        "In questo caso ho sviluppato un'applicazione full-screen molto simile a quella di Spotify. Ricreare il medesimo layout e la sua interfaccia è stato uno dei primi progetti che mi ha permesso di mettere in campo le conoscenze che avevo in quel momento in un unico progetto.",
    },
    {
      id: 5,
      name: 'everlead',
      link: 'https://github.com/ArrobbioUmberto',
      logo: [
        '/languages/html5.svg',
        '/languages/css3.svg',
        '/languages/bootstrap.svg',
        '/languages/sass.svg',
        '/languages/js.svg',
        '/languages/vuejs.svg',
      ],
      img: [
        '/progetti/everlead/everlead-1.png',
        '/progetti/everlead/everlead-2.png',
        '/progetti/everlead/everlead-3.png',
        '/progetti/everlead/everlead-4.png',
        '/progetti/everlead/everlead-5.png',
        '/progetti/everlead/everlead-6.png',
        '/progetti/everlead/everlead-7.png',
        '/progetti/everlead/everlead-8.png',
        '/progetti/everlead/everlead-9.png',
      ],
      description:
        'Everlead è stata una delle prime sfide che ho dovuto affrontare completamente da solo. Infatti, durante questo progetto della durata di una settimana, mi sono trovato a gestire autonomamente un progetto basato su un design fornito casualmente tramite Figma. Questa esperienza mi ha permesso di sviluppare ulteriormente le mie competenze e acquisire una maggiore indipendenza nel lavoro di sviluppo. ',
    },
    {
      id: 6,
      name: 'boolbnb',
      link: 'https://github.com/ArrobbioUmberto',
      logo: [
        '/languages/html5.svg',
        '/languages/css3.svg',
        '/languages/bootstrap.svg',
        '/languages/sass.svg',
        '/languages/js.svg',
        '/languages/vuejs.svg',
        '/languages/Vitejs.svg',
        '/languages/laravel.svg',
        '/languages/php-logo.svg',
      ],
      img: [
        '/progetti/boolbnb/boolbnb-1.png',
        '/progetti/boolbnb/boolbnb-2.jpg',
        '/progetti/boolbnb/boolbnb-3.jpg',
        '/progetti/boolbnb/boolbnb-4.jpg',
        '/progetti/boolbnb/boolbnb-5.jpg',
        '/progetti/boolbnb/boolbnb-6.jpg',
        '/progetti/boolbnb/boolbnb-7.jpg',
        '/progetti/boolbnb/boolbnb-8.jpg',
        '/progetti/boolbnb/boolbnb-9.jpg',
        '/progetti/boolbnb/boolbnb-10.jpg',
        '/progetti/boolbnb/boolbnb-11.jpg',
        '/progetti/boolbnb/boolbnb-12.jpg',
        '/progetti/boolbnb/boolbnb-13.jpg',
        '/progetti/boolbnb/boolbnb-14.jpg',
        '/progetti/boolbnb/boolbnb-15.jpg',
        '/progetti/boolbnb/boolbnb-16.jpg',
        '/progetti/boolbnb/boolbnb-17.jpg',
        '/progetti/boolbnb/boolbnb-18.jpg',
        '/progetti/boolbnb/boolbnb-19.jpg',
        '/progetti/boolbnb/boolbnb-20.jpg',
        '/progetti/boolbnb/boolbnb-21.jpg',
      ],
      description:
        "La ciliegina sulla torta del mio percorso in Boolean è stata senza dubbio questo progetto finale. Grazie a questa esperienza, ho potuto approfondire la mia comprensione su come strutturare una web app dal punto di vista di un full stack web developer. Inoltre, ho avuto l'opportunità di sperimentare la modalità agile, il confronto quotidiano con il mio team e l'organizzazione di task e scadenze.In questo progetto, abbiamo implementato con successo l'API di TomTom per la localizzazione dei vari appartamenti, consentendo anche una ricerca istantanea di indirizzi e città.",
    },
  ];
  return (
    <>
      {projects.map((item) => (
        <Card key={item.id} project={item} />
      ))}
    </>
  );
}

export default CardFolder;
