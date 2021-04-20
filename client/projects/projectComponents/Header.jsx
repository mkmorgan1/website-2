import React from 'react';

const Header = ({styles, github, deployed, name}) => {
  return (
    <div>
        <h2 className={styles.projectHeaderName}>{name} |</h2>
        <span>{'  '}
          <a href={github} target='_blank'>
            <i class='fab fa-github'></i>
          </a>{'  '}
        </span>
        {deployed &&
          <span>{'  '}
            <a href={deployed} target='_blank'>
              <i class='fas fa-external-link-alt'></i>
            </a>
          </span>
        }
    </div>
  );
}

export default Header;