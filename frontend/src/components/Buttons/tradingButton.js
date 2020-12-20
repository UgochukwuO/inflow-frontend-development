import React from "react";
import { NavLink } from "react-router-dom";
import "./tradingButton.scss";

// Trading / Liquidity Pool Button

const TradingButton = ({ children, ...otherProps }) => {
  return (
    <div>
      <button className="trading-button" {...otherProps}>
        <NavLink style={{color: "white"}} to="/trading-page">
          {children}
        </NavLink>
      </button>
    </div>
  );
};

export default TradingButton;
