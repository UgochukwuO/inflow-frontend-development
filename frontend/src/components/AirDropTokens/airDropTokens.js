import React from "react";
import DefaultButton from "../Buttons/defaultButton";

import "./airDropTokens.scss";

const AirDropTokens = () => {
  return (
    <div className="air-drop-tokens">
      <div>Air Drop:</div>
      <span>
        <div>
          <form>
            <input placeholder='TOKENS' className="token-amount" type="number" />

            <DefaultButton 
            type="submit"
            >
                Enter
            </DefaultButton>
          </form>
        </div>
      </span>
      <span></span>
    </div>
  );
};

export default AirDropTokens;
