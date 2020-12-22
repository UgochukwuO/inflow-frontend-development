import React from 'react';
import './formInput.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="">
      {label && (
        <label>
          {label}
        </label>
      )}
      <form>
      <input style={{
      width: '100%', 
      color: '#ffffff60',
      background: '#182541',
      fontSize: '1.7rem',
      lineHheight: '1',
      fontWeight: '400',
      textAlign: 'left',
      padding: '10px 10px',
      margin: '10px auto',
      border: 'none',
      borderRadius: '36px',
      outline: 'none'
      }} 
      className="formInput" onChange={handleChange} {...otherProps} />
      </form>
    </div>
  );
}

export default FormInput;