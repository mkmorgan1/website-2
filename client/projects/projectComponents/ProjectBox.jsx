import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import Project from "./Project.jsx";
import ProjectEditForm from "./ProjectEditForm.jsx";

import { updateProject } from "./../../editDatabase.js";

const ProjectBox = ({ app, styles, admin, getData }) => {
  const [editable, setEditable] = useState(false);
  const [data, setData] = useState(app);

  const toggleEdit = () => {
    if (admin) setEditable(!editable);
  };

  const updateProjectState = (updates) => {
    setData(updates);
    updateProject(updates);
    toggleEdit();
  };

  return (
    <div className={`${styles.boxes} randColor`}>
      <br />
      <ScrollAnimation
        animateIn="fadeIn"
        duration="2"
        className={styles.projectBox}
      >
        {!editable && (
          <Project app={data} styles={styles} toggleEdit={toggleEdit} />
        )}
        {editable && (
          <ProjectEditForm
            app={data}
            styles={styles}
            toggleEdit={toggleEdit}
            dbFunction={updateProjectState}
            getData={getData}
          />
        )}
      </ScrollAnimation>
    </div>
  );
};

export default ProjectBox;
