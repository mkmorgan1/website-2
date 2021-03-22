import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Bio = ({bioData, styles}) => {
  return (
    <div className={`${styles.boxes} randColor`}>
      <ScrollAnimation
        animateIn='fadeIn'
        duration='2'
        className={styles.centerContent
      }>
        <div className={styles.bio}>
          <h1>Welcome!</h1>
          <p>{bioData.bio}</p>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Bio;