import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import './styles.scss';

import AuthWrapper from './../AuthWrapper';
<<<<<<< HEAD
import FormInput from './../forms/FormInput/formInput';
=======
import FormInput from './../forms/FormInput';
>>>>>>> 1cb314af5ae43b055b25915a92fe26105af358cd
import Button from './../forms/Button';



const SignIn = props => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
<<<<<<< HEAD
  const [name, setName] = useState('')
=======
>>>>>>> 1cb314af5ae43b055b25915a92fe26105af358cd


 
  const configAuthWrapper = {
<<<<<<< HEAD
    headline: ''
=======
    headline: 'LogIn'
>>>>>>> 1cb314af5ae43b055b25915a92fe26105af358cd
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
<<<<<<< HEAD
    
      <div className="formWrap">
        <form>
=======
      <div className="formWrap">
        <form>

>>>>>>> 1cb314af5ae43b055b25915a92fe26105af358cd
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={e => setEmail(e.target.value)}
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={e => setPassword(e.target.value)}
          />
<<<<<<< HEAD
          <div className="links">
            <Link to="/recovery">
              Forgot password?
              </Link>
          </div>

          <Button type="submit">
            Login
=======

          <Button type="submit">
            LogIn
>>>>>>> 1cb314af5ae43b055b25915a92fe26105af358cd
            </Button>

          <div className="socialSignin">
            <div className="row">
              <Button>
                Sign in with Google
              </Button>
            </div>
          </div>
<<<<<<< HEAD
=======

          <div className="links">
            <Link to="/recovery">
              Reset Password
              </Link>
          </div>

>>>>>>> 1cb314af5ae43b055b25915a92fe26105af358cd
        </form>
      </div>
    </AuthWrapper>
  );
}

export default SignIn;
