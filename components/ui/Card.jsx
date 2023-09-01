import React from 'react';
import ImageSlider from './ImageSlider';
import classes from './Card.module.css';
function Card(props) {
  const { project } = props;
  return (
    <>
      <div className={classes.row}>
        <div className={`${classes.col_50} ${classes.container_img}`}>
          <ImageSlider images={project.img} />
        </div>
        <div className={classes.col_50}>
          <h1 className={classes.title}> {project.name}</h1>
          <p className={classes.description}>{project.description}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
