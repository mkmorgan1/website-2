import React, { useState, useEffect } from 'react';

import ProjectBox from './projectComponents/ProjectBox.jsx';
import FillerBox from './projectComponents/FillerBox.jsx'


const Projects = ({appData, styles, admin}) => {

  const [extra, setExtra] = useState(false)
  useEffect(()=> {
    console.log(appData.length + 1 % 2 === 0)
    if (appData.length + 1 % 2 !== 0) setExtra(true);
  },[appData])

  return (
    <>
      <FillerBox styles={styles}/>
      {/* ALL THE PROJECTS */}
      {appData.map(app => {
        return (
          <ProjectBox
            key={app.id}
            styles={styles}
            app={app}
            admin={admin}
          />
        )
      })}
      {extra && <FillerBox styles={styles}/>}
    </>

  )
}

export default Projects;