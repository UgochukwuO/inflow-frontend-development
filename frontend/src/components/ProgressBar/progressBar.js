import React from "react";

import "./progressBar.scss";

const ProgressBar = () => {
  return (
    <div>
      <div className="progress-bar">
        <div>
          <div className="progress-bar-container">
            <div className="progress-meter"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
