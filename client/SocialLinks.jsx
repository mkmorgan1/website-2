import React from 'react';

export default ({styles}) => {
  return (
    <div className={styles.boxes}>
      <div className={styles.socials}>
        <a href='https://www.linkedin.com/in/mkmorgan1/'><i class="fab fa-linkedin"></i></a>
        <a href='https://twitter.com/m_kmorgan'><i class="fab fa-twitter-square"></i></a>
        <a href='https://github.com/mkmorgan1'><i class="fab fa-github-square"></i></a>
      </div>
    </div>
  );
}