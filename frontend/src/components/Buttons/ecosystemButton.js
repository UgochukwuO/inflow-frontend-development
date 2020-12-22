import React from "react";

import "./ecosystemButton.scss";

const EcosystemButton = ({ children, ...otherProps }) => {
  return (
    <div>
      <button className="ecosytem-button" {...otherProps}>
        {children}
      </button>
    </div>
  );
};

export default EcosystemButton;
