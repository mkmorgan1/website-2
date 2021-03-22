import React, { useEffect, useState} from 'react';
import profilePhotos from './profilePhotos.js';

const ProfilePhoto = ({styles}) => {
  const [ photo, setPhoto ] = useState(profilePhotos[0]);
  let index = 0;
  useEffect(() => {
    setInterval(() => {
      index++;
      if (index === profilePhotos.length) {
        index = 0;
        setPhoto(profilePhotos[index])
      } else {
        setPhoto(profilePhotos[index])
      }
    }, 5000);
  }, [])

  return (
    <div className={`${styles.boxes} randColor`}>
      <div className={styles.centerContent}>
        <img src={photo} alt='Matthew Morgan' width='75%' height='75%'/>
      </div>
    </div>
  )
}

export default ProfilePhoto