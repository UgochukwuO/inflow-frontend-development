import React from "react";
import "./styles.scss";
import SignIn from "./../../components/SignIn";

const Login = (props) => {
  return (
    <div className='login-page'>
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
