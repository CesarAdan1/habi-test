import React from 'react';

const InputComponent = ({ label, type = 'text', ...otherProps }) => (
  <p>
    {type === 'text' ? (
      <label>
        {label}
        <input className="w3-input" type={type} {...otherProps} />
      </label>
    ) : (
      <label>
        <input
          className={type === 'checkbox' ? 'w3-check' : 'w3-radio'}
          type={type}
          {...otherProps}
        />
        {label}
      </label>
    )}
  </p>
);

export default InputComponent
