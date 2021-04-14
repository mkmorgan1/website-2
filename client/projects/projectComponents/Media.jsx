import React from 'react';

const Media = ({styles, media}) => {
  if (media && media.slice(media.length - 3) === 'mov') {
    return (
      <video controls id={media}>
        <source
        src={media}
        type='video/mp4'/>
        Your browser does not support HTML5 video.
      </video>
    );
  } else if (media && media.slice(media.length - 4) === 'webp') {
    return (
      <img src={media} alt=''/>
    )

  } else {
    return (
      <div></div>
    );
  }
}

export default Media;