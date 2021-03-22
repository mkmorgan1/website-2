import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Media from './Media.jsx';
import Header from './Header.jsx';

const Project = ({app, styles}) => {
  return (
    <div className={`${styles.boxes} randColor`}>
      <ScrollAnimation
        animateIn='fadeIn'
        duration='2'
        className={styles.projectBox}>
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
            <hr/>
            <div><b>Front-End: </b>{app.frontEnd}</div>
            <div><b>Back-End: </b>{app.backEnd}</div>
          </div>
      </ScrollAnimation>
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