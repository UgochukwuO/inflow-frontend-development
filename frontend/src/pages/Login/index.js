<<<<<<< HEAD
import React from "react";
import "./styles.scss";
import SignIn from "./../../components/SignIn";

const Login = (props) => {
  return (
    <div>
      <p style={{ color: "white", 
      textAlign: "center", 
      fontSize: '3rem' }}
      >
        Login Page
        </p>
      <SignIn />
    </div>
  );
};

export default Login;
=======
import React from 'react';
import './styles.scss';
import SignIn from './../../components/SignIn';

const Login = props => {
  return <SignIn />
}

export default Login;
>>>>>>> 1cb314af5ae43b055b25915a92fe26105af358cd
