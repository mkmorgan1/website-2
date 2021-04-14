import React from 'react';

const EditForm = ({app, styles, edit}) => {
  return (
    <>
      <div onClick={edit}>ESC</div>
      <form action="">
        <input type="text"/>
      </form>
    </>

  )
}

export default EditForm;