import React from "react";
import './defaultButton.scss'

const DefaultButton = ({ children, ...otherProps }) => {
  return (
    <div>
      <button className="default-button" {...otherProps}>
        {children}
      </button>
    </div>
  );
};

export default DefaultButton;
