import React, { useState, useEffect } from "react";

import ProjectBox from "./projectComponents/ProjectBox.jsx";
import FillerBox from "./projectComponents/FillerBox.jsx";

const Projects = ({ appData, styles, admin, getData }) => {
  const [extra, setExtra] = useState(false);
  useEffect(() => {
    if (appData.length % 2 !== 0) setExtra(true);
  }, [appData]);

  return (
    <>
      {/* ALL THE PROJECTS */}
      {admin && <FillerBox styles={styles} getData={getData} />}
      {appData.map((app) => {
        return (
          <ProjectBox
            key={app.id}
            styles={styles}
            app={app}
            admin={admin}
            getData={getData}
          />
        );
      })}
      {extra && <FillerBox styles={styles} />}
    </>
  );
};

export default Projects;
