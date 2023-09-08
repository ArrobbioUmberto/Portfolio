import React from 'react';
import ImageSlider from './ImageSlider';
import classes from './Card.module.css';
function Card(props) {
  const { project } = props;
  const logos = [project];
  // console.log(logos, 'logos');
  // console.log(logos[0].id, 'try');
  // console.log(props, 'props');

  return (
    <>
      <div className={classes.row}>
        <div className={`${classes.col_65} ${classes.container_img}`}>
          <ImageSlider images={project.img} />
        </div>
        <div className={classes.col_35}>
          <h1 className={classes.title}> {project.name}</h1>
          <p className={classes.description}>{project.description}</p>
          <div className={classes.logos}>
            {logos.map((item, index) => (
              <>
                {item.logo.map((foto) => (
                  <img
                    key={index}
                    src={foto}
                    alt='logo'
                    className={classes.logo}
                  />
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
