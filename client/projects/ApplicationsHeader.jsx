import React from "react";

const ApplicationsHeader = ({ styles, makeColors }) => {
  return (
    <div className={`${styles.longBoxes} randColor`}>
      <div className={styles.centerContent}>
        <p className={styles.titleName} onClick={makeColors}>
          Applications
        </p>
      </div>
    </div>
  );
};

export default ApplicationsHeader;
