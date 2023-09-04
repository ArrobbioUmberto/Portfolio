import React from 'react';
import ImageSlider from './ImageSlider';
import classes from './Card.module.css';
function Card(props) {
  const { project } = props;
  return (
    <>
      <div className={classes.row}>
        <div className={`${classes.col_65} ${classes.container_img}`}>
          <ImageSlider images={project.img} />
        </div>
        <div className={classes.col_35}>
          <h1 className={classes.title}> {project.name}</h1>
          <p className={classes.description}>{project.description}</p>
          {/* <div className={classes.logos}>
            {project.keys(props).map(
              photo(
                <>
                  <img src={photo.logo} alt='logo' />
                </>
              )
            )}
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Card;
