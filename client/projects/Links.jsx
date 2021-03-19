import React from 'react';

const Links = ({styles, github, deployed}) => {
  return (
    <div>
      <a href={github}><i class="fab fa-github"></i></a>
      <a href={deployed}><i class="fas fa-external-link-alt"></i></a>
    </div>
  );
}

export default Links;