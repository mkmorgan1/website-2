import React, { useState }from 'react';

const Input = ({string, value, reference}) => {
  const [state, setState] = useState(value);

  return (
    <div>
      <label htmlFor={string}>{`${string}  `}</label>
      <textarea rows="3" cols="45"
        type="text" name={string} id={string} value={state} ref={reference} onChange={() => setState(reference.current.value)}/>
    </div>
  )
}

export default Input;