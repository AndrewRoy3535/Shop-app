import React from "react";

import "./formInput.scss";

function formInput({ handleChange, label, ...otherPorps }) {
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherPorps} />
      {label ? (
        <label
          className={`${
            otherPorps.value.length ? "shrink" : " "
          } form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default formInput;
