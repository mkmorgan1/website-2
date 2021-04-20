import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Project from './projectComponents/Project.jsx';
import ProjectEditForm from './projectComponents/ProjectEditForm.jsx';

const ProjectBox = ({app, styles, admin}) => {
  const [editable, setEditable] = useState(false);
  const [data, setData] = useState(app);

  const toggleEdit = () => {
    if (admin) setEditable(!editable);
  }
  const updateProjectState = (updates) => {
    setData(updates);
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
          app={data}
          styles={styles}
          toggleEdit={toggleEdit}
        />}
        {editable &&
        <ProjectEditForm
          app={data}
          styles={styles}
          toggleEdit={toggleEdit}
          updateProjectState={updateProjectState}
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