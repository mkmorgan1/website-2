import React, { useState, useRef } from 'react';

const EditForm = ({app, styles, edit}) => {
  const nameEl = useRef(null);
  const [name, setName] = useState(app.name)
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: nameEl.current.value
    }
    console.log(formData)
  }
  return (
    <>
      <div onClick={edit}>ESC</div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' id='name' value={name} ref={nameEl} onChange={() => setName(nameEl.current.value)}/>
        <button type='submit'>edit</button>
      </form>
    </>

  )
}

export default EditForm;