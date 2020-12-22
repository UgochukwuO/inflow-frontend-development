<<<<<<< HEAD
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
=======
import React, { Component } from 'react';
import Signup from './../../components/Signup';
import './styles.scss';

const Registration = props => {
  return <Signup />;
>>>>>>> 1cb314af5ae43b055b25915a92fe26105af358cd
};

export default Registration;
