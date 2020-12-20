import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import './styles.scss';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';



const SignIn = props => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')


 
  const configAuthWrapper = {
    headline: 'LogIn'
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form>

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

          <Button type="submit">
            LogIn
            </Button>

          <div className="socialSignin">
            <div className="row">
              <Button>
                Sign in with Google
              </Button>
            </div>
          </div>

          <div className="links">
            <Link to="/recovery">
              Reset Password
              </Link>
          </div>

        </form>
      </div>
    </AuthWrapper>
  );
}

export default SignIn;
