import React from 'react';
import classes from './CardFolder.module.css';
import Card from '@/components/ui/Card';
function CardFolder() {
  const projects = [
    {
      id: 1,
      name: 'whatsapp',
      link: 'https://github.com/ArrobbioUmberto',
      img: [
        '/progetti/boolbnb.png',
        '/progetti/boolflix-pic.png',
        '/progetti/dc-comics-pic.png',
        '/progetti/spotify-pic.png',
      ],
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quaerat saepe tempora praesentium earum, similique nobis laudantium sint deleniti animi? Quos maxime veniam voluptatibus neque. Ut architecto beatae similique provident, dolor earum unde delectus sunt nihil facere debitis, eveniet eos? Harum quibusdam praesentium aliquam, est, at quidem veniam explicabo tempore quod magnam rem quisquam enim iure repudiandae, vero error amet? Fugit labore rem consequatur tempora minima atque porro. Perferendis exercitationem placeat dignissimos nihil iure eaque provident nostrum recusandae eligendi sint! Consectetur, repudiandae dicta asperiores explicabo unde dignissimos illum excepturi recusandae tenetur iure culpa aspernatur ab. Dolore accusantium minus perspiciatis non.',
    },
    {
      id: 2,
      name: 'DC comics',
      link: 'https://github.com/ArrobbioUmberto',
      img: [
        '/progetti/boolbnb.png',
        '/progetti/boolflix-pic.png',
        '/progetti/dc-comics-pic.png',
        '/progetti/spotify-pic.png',
      ],
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quaerat saepe tempora praesentium earum, similique nobis laudantium sint deleniti animi? Quos maxime veniam voluptatibus neque. Ut architecto beatae similique provident, dolor earum unde delectus sunt nihil facere debitis, eveniet eos? Harum quibusdam praesentium aliquam, est, at quidem veniam explicabo tempore quod magnam rem quisquam enim iure repudiandae, vero error amet? Fugit labore rem consequatur tempora minima atque porro. Perferendis exercitationem placeat dignissimos nihil iure eaque provident nostrum recusandae eligendi sint! Consectetur, repudiandae dicta asperiores explicabo unde dignissimos illum excepturi recusandae tenetur iure culpa aspernatur ab. Dolore accusantium minus perspiciatis non.',
    },
    {
      id: 3,
      name: 'boolflix',
      link: 'https://github.com/ArrobbioUmberto',
      img: [
        '/progetti/boolbnb.png',
        '/progetti/boolflix-pic.png',
        '/progetti/dc-comics-pic.png',
        '/progetti/spotify-pic.png',
      ],
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quaerat saepe tempora praesentium earum, similique nobis laudantium sint deleniti animi? Quos maxime veniam voluptatibus neque. Ut architecto beatae similique provident, dolor earum unde delectus sunt nihil facere debitis, eveniet eos? Harum quibusdam praesentium aliquam, est, at quidem veniam explicabo tempore quod magnam rem quisquam enim iure repudiandae, vero error amet? Fugit labore rem consequatur tempora minima atque porro. Perferendis exercitationem placeat dignissimos nihil iure eaque provident nostrum recusandae eligendi sint! Consectetur, repudiandae dicta asperiores explicabo unde dignissimos illum excepturi recusandae tenetur iure culpa aspernatur ab. Dolore accusantium minus perspiciatis non.',
    },
    {
      id: 4,
      name: 'spotify',
      link: 'https://github.com/ArrobbioUmberto',
      img: [
        '/progetti/boolbnb.png',
        '/progetti/boolflix-pic.png',
        '/progetti/dc-comics-pic.png',
        '/progetti/spotify-pic.png',
      ],
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quaerat saepe tempora praesentium earum, similique nobis laudantium sint deleniti animi? Quos maxime veniam voluptatibus neque. Ut architecto beatae similique provident, dolor earum unde delectus sunt nihil facere debitis, eveniet eos? Harum quibusdam praesentium aliquam, est, at quidem veniam explicabo tempore quod magnam rem quisquam enim iure repudiandae, vero error amet? Fugit labore rem consequatur tempora minima atque porro. Perferendis exercitationem placeat dignissimos nihil iure eaque provident nostrum recusandae eligendi sint! Consectetur, repudiandae dicta asperiores explicabo unde dignissimos illum excepturi recusandae tenetur iure culpa aspernatur ab. Dolore accusantium minus perspiciatis non.',
    },
    {
      id: 5,
      name: 'everlead',
      link: 'https://github.com/ArrobbioUmberto',
      img: [
        '/images/everlead-1.png',
        '/images/everlead-2.png',
        '/images/everlead-3.png',
        '/images/everlead-4.png',
        '/images/everlead-5.png',
        '/images/everlead-6.png',
        '/images/everlead-7.png',
        '/images/everlead-8.png',
        '/images/everlead-9.png',
      ],
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quaerat saepe tempora praesentium earum, similique nobis laudantium sint deleniti animi? Quos maxime veniam voluptatibus neque. Ut architecto beatae similique provident, dolor earum unde delectus sunt nihil facere debitis, eveniet eos? Harum quibusdam praesentium aliquam, est, at quidem veniam explicabo tempore quod magnam rem quisquam enim iure repudiandae, vero error amet? Fugit labore rem consequatur tempora minima atque porro. Perferendis exercitationem placeat dignissimos nihil iure eaque provident nostrum recusandae eligendi sint! Consectetur, repudiandae dicta asperiores explicabo unde dignissimos illum excepturi recusandae tenetur iure culpa aspernatur ab. Dolore accusantium minus perspiciatis non.',
    },
    {
      id: 6,
      name: 'boolbnb',
      link: 'https://github.com/ArrobbioUmberto',
      img: [
        '/progetti/boolbnb.png',
        '/progetti/boolflix-pic.png',
        '/progetti/dc-comics-pic.png',
        '/progetti/spotify-pic.png',
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
