import React from 'react';

export default ({styles}) => {
  return (
    <div className={`${styles.boxes} randColor`}>
      <div className={styles.title}>
        <h1 className={styles.textShadow}>Matthew Morgan</h1>
        <p>Software Engineer</p>
      </div>
    </div>
  );
}