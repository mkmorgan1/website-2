import React, { useState } from 'react';

const FillerBox = ({styles}) => {

  return (
      <div className={`${styles.boxes} randColor`}>
        <div className={styles.smallBoxContainer}>
          <div className={`${styles.smallBox} randColor`}></div>
          <div className={`${styles.smallBox} randColor`}></div>
          <div className={`${styles.smallBox} randColor`}></div>
        </div>
      </div>
  )
}

export default FillerBox;