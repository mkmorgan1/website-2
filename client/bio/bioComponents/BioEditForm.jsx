import React, { useState, useRef } from "react";
import { updateBio } from "./../../editDatabase.js";

import Input from "./../../form/Input.jsx";

const BioEditForm = ({ bioData, styles, updateBioState, toggleEdit }) => {
  const bioRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id: bioData.id,
      bio: bioRef.current.value,
    };
    updateBioState(formData);
    updateBio(formData);
    toggleEdit();
  };

  return (
    <>
      <div onClick={toggleEdit}>X</div>
      <form onSubmit={handleSubmit}>
        <Input string="Bio" value={bioData.bio} reference={bioRef} />
        <button type="submit">Edit</button>
      </form>
    </>
  );
};

export default BioEditForm;
