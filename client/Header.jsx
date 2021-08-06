import React from "react";

export default ({ styles, makeColors }) => {
  return (
    <div className={`${styles.longBoxes} ${styles.headerBox} randColor`}>
      <div className={styles.centerContent}>
        <div className={styles.title}>
          <p className={styles.titleName} onClick={makeColors}>
            Matthew Morgan
          </p>
          <p>Software Engineer</p>
        </div>
      </div>
    </div>
  );
};
