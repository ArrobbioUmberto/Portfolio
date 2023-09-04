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
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quaerat saepe tempora praesentium earum, similique nobis laudantium sint deleniti animi? Quos maxime veniam voluptatibus neque. Ut architecto beatae similique provident, dolor earum unde delectus sunt nihil facere debitis, eveniet eos? Harum quibusdam praesentium aliquam, est, at quidem veniam explicabo tempore quod magnam rem quisquam enim iure repudiandae, vero error amet? Fugit labore rem consequatur tempora minima atque porro. Perferendis exercitationem placeat dignissimos nihil iure eaque provident nostrum recusandae eligendi sint! Consectetur, repudiandae dicta asperiores explicabo unde dignissimos illum excepturi recusandae tenetur iure culpa aspernatur ab. Dolore accusantium minus perspiciatis non.',
    },
    {
      id: 2,
      name: 'DC comics',
      link: 'https://github.com/ArrobbioUmberto',
      img: [
        '/progetti/dc-comics/dc-comics-1.png',
        '/progetti/dc-comics/dc-comics-2.png',
        '/progetti/dc-comics/dc-comics-3.png',
      ],
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quaerat saepe tempora praesentium earum, similique nobis laudantium sint deleniti animi? Quos maxime veniam voluptatibus neque. Ut architecto beatae similique provident, dolor earum unde delectus sunt nihil facere debitis, eveniet eos? Harum quibusdam praesentium aliquam, est, at quidem veniam explicabo tempore quod magnam rem quisquam enim iure repudiandae, vero error amet? Fugit labore rem consequatur tempora minima atque porro. Perferendis exercitationem placeat dignissimos nihil iure eaque provident nostrum recusandae eligendi sint! Consectetur, repudiandae dicta asperiores explicabo unde dignissimos illum excepturi recusandae tenetur iure culpa aspernatur ab. Dolore accusantium minus perspiciatis non.',
    },
    {
      id: 3,
      name: 'boolflix',
      link: 'https://github.com/ArrobbioUmberto',
      img: [
        '/progetti/boolflix/boolflix-1.png',
        '/progetti/boolflix/boolflix-2.png',
        '/progetti/boolflix/boolflix-3.png',
      ],
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quaerat saepe tempora praesentium earum, similique nobis laudantium sint deleniti animi? Quos maxime veniam voluptatibus neque. Ut architecto beatae similique provident, dolor earum unde delectus sunt nihil facere debitis, eveniet eos? Harum quibusdam praesentium aliquam, est, at quidem veniam explicabo tempore quod magnam rem quisquam enim iure repudiandae, vero error amet? Fugit labore rem consequatur tempora minima atque porro. Perferendis exercitationem placeat dignissimos nihil iure eaque provident nostrum recusandae eligendi sint! Consectetur, repudiandae dicta asperiores explicabo unde dignissimos illum excepturi recusandae tenetur iure culpa aspernatur ab. Dolore accusantium minus perspiciatis non.',
    },
    {
      id: 4,
      name: 'spotify',
      link: 'https://github.com/ArrobbioUmberto',
      img: ['/progetti/mono/spotify-pic.png'],
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quaerat saepe tempora praesentium earum, similique nobis laudantium sint deleniti animi? Quos maxime veniam voluptatibus neque. Ut architecto beatae similique provident, dolor earum unde delectus sunt nihil facere debitis, eveniet eos? Harum quibusdam praesentium aliquam, est, at quidem veniam explicabo tempore quod magnam rem quisquam enim iure repudiandae, vero error amet? Fugit labore rem consequatur tempora minima atque porro. Perferendis exercitationem placeat dignissimos nihil iure eaque provident nostrum recusandae eligendi sint! Consectetur, repudiandae dicta asperiores explicabo unde dignissimos illum excepturi recusandae tenetur iure culpa aspernatur ab. Dolore accusantium minus perspiciatis non.',
    },
    {
      id: 5,
      name: 'everlead',
      link: 'https://github.com/ArrobbioUmberto',
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
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quaerat saepe tempora praesentium earum, similique nobis laudantium sint deleniti animi? Quos maxime veniam voluptatibus neque. Ut architecto beatae similique provident, dolor earum unde delectus sunt nihil facere debitis, eveniet eos? Harum quibusdam praesentium aliquam, est, at quidem veniam explicabo tempore quod magnam rem quisquam enim iure repudiandae, vero error amet? Fugit labore rem consequatur tempora minima atque porro. Perferendis exercitationem placeat dignissimos nihil iure eaque provident nostrum recusandae eligendi sint! Consectetur, repudiandae dicta asperiores explicabo unde dignissimos illum excepturi recusandae tenetur iure culpa aspernatur ab. Dolore accusantium minus perspiciatis non.',
    },
    {
      id: 6,
      name: 'boolbnb',
      link: 'https://github.com/ArrobbioUmberto',
      img: [
        '/progetti/boolbnb/boolbnb-1.png',
        '/progetti/boolbnb/boolbnb-2.',
        '/progetti/boolbnb/boolbnb-3.',
        '/progetti/boolbnb/boolbnb-4.',
        '/progetti/boolbnb/boolbnb-5.',
        '/progetti/boolbnb/boolbnb-6.',
        '/progetti/boolbnb/boolbnb-7.',
        '/progetti/boolbnb/boolbnb-8.',
        '/progetti/boolbnb/boolbnb-9.',
        '/progetti/boolbnb/boolbnb-10.',
        '/progetti/boolbnb/boolbnb-11.',
        '/progetti/boolbnb/boolbnb-12.',
        '/progetti/boolbnb/boolbnb-13.',
        '/progetti/boolbnb/boolbnb-14.',
        '/progetti/boolbnb/boolbnb-15.',
        '/progetti/boolbnb/boolbnb-16.',
        '/progetti/boolbnb/boolbnb-17.',
        '/progetti/boolbnb/boolbnb-18.',
        '/progetti/boolbnb/boolbnb-19.',
        '/progetti/boolbnb/boolbnb-20.',
        '/progetti/boolbnb/boolbnb-21.',
      ],
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quaerat saepe tempora praesentium earum, similique nobis laudantium sint deleniti animi? Quos maxime veniam voluptatibus neque. Ut architecto beatae similique provident, dolor earum unde delectus sunt nihil facere debitis, eveniet eos? Harum quibusdam praesentium aliquam, est, at quidem veniam explicabo tempore quod magnam rem quisquam enim iure repudiandae, vero error amet? Fugit labore rem consequatur tempora minima atque porro. Perferendis exercitationem placeat dignissimos nihil iure eaque provident nostrum recusandae eligendi sint! Consectetur, repudiandae dicta asperiores explicabo unde dignissimos illum excepturi recusandae tenetur iure culpa aspernatur ab. Dolore accusantium minus perspiciatis non.',
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
