import React from 'react';

import Media from './Media.jsx';
import Header from './Header.jsx';


const Project = ({app, styles, edit}) => {
  return (
    <>
      <Header
        name={app.name}
        styles={styles}
        github={app.github}
        deployed={app.deployedUrl}
      />
      <hr/>
      <br/>
      <Media
        media={app.media}
        styles={styles}
      />
      <div className={styles.description} onClick={edit}>
        <q>{app.description}</q>
        <hr/>
        <div><b>Front-End: </b>{app.frontEnd}</div>
        <div><b>Back-End: </b>{app.backEnd}</div>
      </div>
    </>
  )

}

export default Project