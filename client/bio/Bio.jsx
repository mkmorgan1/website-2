import React, { useState, useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import BioEditForm from './bioComponents/BioEditForm.jsx';

const Bio = ({bioData, styles, admin}) => {
  const [editable, setEditable] = useState(false);
  const [state, setState] = useState(bioData);

  useEffect(() => {
    setState(bioData)
  }, [bioData])

  const toggleEdit = () => {
    if (admin) setEditable(!editable);
  }
  const updateBioState = (updates) => {
    setState(updates);
  }

  return (
    <div className={`${styles.boxes} randColor`}>
      <ScrollAnimation
        animateIn='fadeIn'
        duration='2'
        className={styles.centerContent
      }>
        {!editable &&
          <div className={styles.bio} onClick={toggleEdit}>
            <h1>Welcome!</h1>
            <p>{state.bio}</p>
          </div>
        }
        {editable &&
          <BioEditForm
            bioData={state}
            styles={styles}
            toggleEdit={toggleEdit}
            updateBioState={updateBioState}
          />
        }
      </ScrollAnimation>
    </div>
  );
}

export default Bio;