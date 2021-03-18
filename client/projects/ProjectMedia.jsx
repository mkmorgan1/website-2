import React from 'react';

const ProjectMedia = ({styles, media}) => {
  if (media.slice(media.length - 3) === 'mov') {
    return (
      <video controls id={media}>
        <source
        src={media}
        type='video/mp4'/>
        Your browser does not support HTML5 video.
      </video>
    );
  } else {
    return (
      <div></div>
    );
  }
}

export default ProjectMedia;