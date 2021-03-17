import React from 'react';

const Project = ({app, styles}) => {
  return (
    <div className={`${styles.boxes} randColor`}>
      <div className={styles.projectBox}>
        <h1>{app.name}</h1>
        <div>{app.github}</div>
        <div>{app.deployedUrl}</div>
        <p>{app.description}</p>
        <div>{app.media}</div>
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