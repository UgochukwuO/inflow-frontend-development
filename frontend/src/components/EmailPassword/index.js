import React, { useState, useEffect } from 'react';

import './styles.scss';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../forms/FormInput/formInput';
import Button from './../forms/Button';



const EmailPassword = props => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);


  

  const configAuthWrapper = {
    headline: ''
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">

        {errors.length > 0 && (
          <ul>
            {errors.map((e, index) => {
              return (
                <li key={index}>
                  {e}
                </li>
              );
            })}
          </ul>
        )}

        <form>

          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={e => setEmail(e.target.value)}
          />

          <Button type="submit">
            Email Password
          </Button>

        </form>

      </div>
    </AuthWrapper>
  );
}

export default EmailPassword;
