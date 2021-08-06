import React, { useState } from "react";
import ProjectEditForm from "./ProjectEditForm.jsx";
import { createProject } from "./../../editDatabase.js";

const FillerBox = ({ styles, getData }) => {
  const [edit, setEdit] = useState(false);
  const toggleEdit = () => {
    if (getData) setEdit(!edit);
  };

  const createAndRefresh = (data) => {
    createProject(data, getData);
    toggleEdit();
  };

  return (
    <div className={`${styles.boxes} randColor`}>
      {edit && (
        <ProjectEditForm
          app={{}}
          styles={styles}
          toggleEdit={toggleEdit}
          dbFunction={createAndRefresh}
          getData={getData}
        />
      )}
      {!edit && (
        <div className={styles.smallBoxContainer} onClick={toggleEdit}>
          <div className={`${styles.smallBox} randColor`}></div>
          <div className={`${styles.smallBox} randColor`}></div>
          <div className={`${styles.smallBox} randColor`}></div>
        </div>
      )}
    </div>
  );
};

export default FillerBox;
