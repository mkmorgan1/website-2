import React from "react";

const SocialLink = ({ styles, link, logo }) => {
  return (
    <div className={`${styles.smallBox} ${styles.contactLink} randColor`}>
      <a href={link} target="_blank">
        {logo}
      </a>
    </div>
  );
};

export default ({ styles }) => {
  return (
    <div className={styles.longBoxes}>
      <div className={styles.smallBoxContainer}>
        {/* EMAIL */}
        <SocialLink
          styles={styles}
          link="mailto:mkmorgan1994@gmail.com?subject=Job Offer&body=Hey Matt, your website is spectacular! How do you feel about coming and working for us?"
          logo={<i class="fas fa-paper-plane"></i>}
        />
        {/* LINKEDIN */}
        <SocialLink
          styles={styles}
          link="https://www.linkedin.com/in/mkmorgan1/"
          logo={<i className="fab fa-linkedin-in"></i>}
        />
        {/* GITHUB */}
        <SocialLink
          styles={styles}
          link="https://github.com/mkmorgan1"
          logo={<i className="fab fa-github"></i>}
        />
        {/* MEDIUM */}
        <SocialLink
          styles={styles}
          link="https://mkmorgan1994.medium.com/"
          logo={<i className="fab fa-medium-m"></i>}
        />
      </div>
    </div>
  );
};
