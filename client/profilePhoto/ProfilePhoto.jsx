import React from 'react';
import profilePhotos from './profilePhotos.js'

const ProfilePhoto = ({styles}) => {
  return (
    <div className={`${styles.boxes} randColor`}>
      <div className={styles.profilePhotoBox}>
        <img src={profilePhotos[1]} alt='Matthew Morgan' width='75%' height='75%'/>
      </div>
    </div>
  )
}

export default ProfilePhoto