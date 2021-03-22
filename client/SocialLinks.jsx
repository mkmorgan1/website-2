import React from 'react';

export default ({styles}) => {
  return (
    <div className={styles.longBoxes}>
      <div className={styles.smallBoxContainer}>
        {/* EMAIL */}
        <div className={`${styles.smallBox} ${styles.contactLink} randColor`}>
          <a href="mailto:mkmorgan1994@gmail.com?subject=Job Offer&body=Hey Matt, your website is spectacular! How do you feel about coming and working for us?">
            <i class="fas fa-paper-plane"></i>
          </a>
        </div>
        {/* LINKEDIN */}
        <div className={`${styles.smallBox} ${styles.contactLink} randColor`}>
          <a href='https://www.linkedin.com/in/mkmorgan1/' target='_blank'><i className='fab fa-linkedin-in'></i></a>
        </div>
        {/* GITHUB */}
        <div className={`${styles.smallBox}  ${styles.contactLink} randColor`}>
          <a href='https://github.com/mkmorgan1' target='_blank'><i className='fab fa-github'></i></a>
        </div>
        {/* TWITTER */}
        <div className={`${styles.smallBox}  ${styles.contactLink} randColor`}>
          <a href='https://twitter.com/m_kmorgan' target='_blank'><i className='fab fa-twitter'></i></a>
        </div>
      </div>
    </div>
  );
}