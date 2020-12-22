import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import './styles.scss';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../forms/FormInput/formInput';
import Button from './../forms/Button';



const SignIn = props => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')


 
  const configAuthWrapper = {
    headline: ''
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
          <div className="links">
            <Link to="/recovery">
              Forgot password?
              </Link>
          </div>

          <Button type="submit">
            Login
            </Button>

          <div className="socialSignin">
            <div className="row">
              <Button>
                Sign in with Google
              </Button>
            </div>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
}

export default SignIn;
