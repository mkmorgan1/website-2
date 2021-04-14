import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Project from './projectComponents/Project.jsx';
import EditForm from './projectComponents/EditForm.jsx';

const ProjectBox = ({app, styles, admin}) => {
  const [editable, setEditable] = useState(false)
  const edit = () => {
    if (admin) {
      setEditable(!editable)
      console.log(`we can edit ${app.id}`)
      console.log(app)
    }
  }
  return (
    <div className={`${styles.boxes} randColor`}>
      <br/>
      <ScrollAnimation
        animateIn='fadeIn'
        duration='2'
        className={styles.projectBox}
      >
        {!editable &&
        <Project
          app={app}
          styles={styles}
          edit={edit}
        />}
        {editable &&
        <EditForm
          app={app}
          styles={styles}
          edit={edit}
        />}
      </ScrollAnimation>
    </div>
  )
}

const Projects = ({appData, styles, admin}) => {
  return (
    appData.map(app => {
      return (
        <ProjectBox
          key={app.id}
          styles={styles}
          app={app}
          admin={admin}
        />
      )
    })
  )
}

export default Projects;