import React from 'react';
import Media from './Media.jsx';
import Header from './Header.jsx';

const Project = ({app, styles}) => {
  return (
    <div className={`${styles.boxes} randColor`}>
      <div className={styles.projectBox}>
        <div>
          <Header
            name={app.name}
            styles={styles}
            github={app.github}
            deployed={app.deployedUrl}
          />
        </div>
        <hr/>
        <br/>
        <Media
          media={app.media}
          styles={styles}
        />
        <div className={styles.description}>
          <q>{app.description}</q>
          <div><b>Front-End: </b>{app.frontEnd}</div>
          <div><b>Back-End: </b>{app.backEnd}</div>
        </div>
      </div>
    </div>
  )
}

const Projects = ({appData, styles}) => {
  return (
    appData.map(app => {
      return (
        <Project
          key={app.id}
          styles={styles}
          app={app}
        />
      )
    })
  )
}

export default Projects;