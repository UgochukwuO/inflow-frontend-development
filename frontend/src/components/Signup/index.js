import React, { useState, useEffect } from 'react';
import './styles.scss';

import AuthWrapper from './../AuthWrapper';
<<<<<<< HEAD
import FormInput from './../forms/FormInput/formInput';
=======
import FormInput from './../forms/FormInput';
>>>>>>> 1cb314af5ae43b055b25915a92fe26105af358cd
import Button from './../forms/Button';



const Signup = props => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);



  const configAuthWrapper = {
<<<<<<< HEAD
    headline: ''
=======
    headline: 'Registration'
>>>>>>> 1cb314af5ae43b055b25915a92fe26105af358cd
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">

        {errors.length > 0 && (
          <ul>
            {errors.map((err, index) => {
              return (
                <li key={index}>
                  {err}
                </li>
              );
            })}
          </ul>
        )}

        <form>

          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            placeholder="Full name"
            handleChange={e => setDisplayName(e.target.value)}
          />

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

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            handleChange={e => setConfirmPassword(e.target.value)}
          />

          <Button type="submit">
            Register
            </Button>
        </form>
      </div>
    </AuthWrapper>
  );
}

export default Signup;
