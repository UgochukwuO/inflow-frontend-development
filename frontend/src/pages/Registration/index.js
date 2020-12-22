import React, { Component } from "react";
import Signup from "./../../components/Signup";
import "./styles.scss";

const Registration = (props) => {
  return (
    <div>
      <p style={{ 
        color: "white", 
        textAlign: "center", 
        fontSize: "3rem" 
        }}>
        Registration
      </p>
      <Signup />
    </div>
  );
};

export default Registration;
