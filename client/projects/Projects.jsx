import React from 'react';
import ProjectMedia from './ProjectMedia.jsx';

const Project = ({app, styles}) => {
  const splitDescription = app.description.split('\n')
  return (
    <div className={`${styles.boxes} randColor`}>
      <div className={styles.projectBox}>
        <div>
          <h2>{app.name}</h2>
          <div>
            <a href={app.github}><i class="fab fa-github"></i></a>
            <a href={app.deployedUrl}><i class="fas fa-external-link-alt"></i></a>
          </div>
        </div>
        <hr/>
        <br/>
        <ProjectMedia
          media={app.media}
          styles={styles}
        />
        <div className={styles.description}>
          <div><b>Front-End: </b>{splitDescription[0]}</div>
          <div><b>Back-End: </b>{splitDescription[1]}</div>
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