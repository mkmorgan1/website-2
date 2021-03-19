import React from 'react';

export default ({styles, makeColors}) => {
  return (
    <div className={`${styles.boxes} randColor`}>
      <div className={styles.title}>
        <p className={styles.titleName} onClick={makeColors}>Matthew Morgan</p>
        <p>Software Engineer</p>
      </div>
    </div>
  );
}