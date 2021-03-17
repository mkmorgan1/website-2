import React from 'react';

export default ({styles}) => {
  return (
    <div className={styles.boxes}>
      <div className={styles.socials}>
        <div className={`${styles.linkBox} randColor`}>
          <a href='https://www.linkedin.com/in/mkmorgan1/'><i className="fab fa-linkedin"></i></a>
        </div>
        <div className={`${styles.linkBox} randColor`}>
          <a href='https://twitter.com/m_kmorgan'><i className="fab fa-twitter-square"></i></a>
        </div>
        <div className={`${styles.linkBox} randColor`}>
          <a href='https://github.com/mkmorgan1'><i className="fab fa-github-square"></i></a>
        </div>
      </div>
    </div>
  );
}