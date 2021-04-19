import React, { useState, useRef } from 'react';

import Input from './Input.jsx';

const EditForm = ({app, styles, toggleEdit, update}) => {
  const nameRef = useRef(null);
  const deployedUrlRef = useRef(null);
  const githubRef = useRef(null);
  const mediaRef = useRef(null);
  const descriptionRef = useRef(null);
  const frontEndRef = useRef(null);
  const backEndRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id: app.id,
      name: nameRef.current.value,
      deployedUrl: deployedUrlRef.current.value,
      github: githubRef.current.value,
      media: mediaRef.current.value,
      description: descriptionRef.current.value,
      frontEnd: frontEndRef.current.value,
      backEnd: backEndRef.current.value,
    }
    update(formData);
    toggleEdit();
  }
  return (
    <>
      <div onClick={toggleEdit}>X</div>
      <form onSubmit={handleSubmit}>
        <Input
          string={'Name'}
          value={app.name}
          reference={nameRef}
        />
        <Input
          string={'DeployedUrl'}
          value={app.deployedUrl}
          reference={deployedUrlRef}
        />
        <Input
          string={'Github'}
          value={app.github}
          reference={githubRef}
        />
        <Input
          string={'Media'}
          value={app.media}
          reference={mediaRef}
        />
        <Input
          string={'Description'}
          value={app.description}
          reference={descriptionRef}
        />
        <Input
          string={'FrontEnd'}
          value={app.frontEnd}
          reference={frontEndRef}
        />
        <Input
          string={'Backend'}
          value={app.backEnd}
          reference={backEndRef}
        />
        <button type='submit'>edit</button>
      </form>
    </>

  )
}

export default EditForm;