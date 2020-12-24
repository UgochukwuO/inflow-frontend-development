import React from 'react';
import EmailPassword from './../../components/EmailPassword';

import './recovery.scss'

const Recovery = props => {
  return (
    <div className='recovery-page'>
      <h2>
        Forgot Password
      </h2>
      <EmailPassword />
    </div>
  )
}

export default Recovery;