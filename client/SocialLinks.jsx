import React from 'react';

export default ({styles}) => {
  return (
    <div className={styles.boxes}>
      <div className={styles.socials}>
        <div className={`${styles.linkBox} randColor`}>
          <a href='https://www.linkedin.com/in/mkmorgan1/'><i class="fab fa-linkedin-in"></i></a>
        </div>
        <div className={`${styles.linkBox} randColor`}>
          <a href='https://twitter.com/m_kmorgan'><i class="fab fa-twitter"></i></a>
        </div>
        <div className={`${styles.linkBox} randColor`}>
          <a href='https://github.com/mkmorgan1'><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>
  );
}