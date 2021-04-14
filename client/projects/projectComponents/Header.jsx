import React from 'react';

const Header = ({styles, github, deployed, name}) => {
  return (
    <div>
        <h2 className={styles.projectHeaderName}>{name} |</h2>
        <a href={github} target='_blank'><i class='fab fa-github'></i></a>
        {deployed && <a href={deployed} target='_blank'><i class='fas fa-external-link-alt'></i></a>}
    </div>
  );
}

export default Header;