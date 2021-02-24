import React from "react";
import "./customButton.scss";

function customButton({ children, ...otherProps }) {
  return (
    <button className='custom-button' {...otherProps}>
      {children}
    </button>
  );
}

export default customButton;
