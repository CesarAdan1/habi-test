import React from 'react';

const InputComponent = ({ htmlFor, label, message, type = 'text', ...otherProps }) => (
  <div className="inp-cont">
    {type === "text" ? (
      <>
        <label htmlFor={htmlFor}>{label}</label>
        <input type={type} {...otherProps} />
        <span>{message}</span>
      </>
    ) : (
      <>
        <label />
        <input type={type} {...otherProps} />
        {label}
      </>
    )}
  </div>
);

export const Dropdown = ({ message, options, label, ...others }) => (
  <p>
    <label>
      {label}
      <div className="select-wrapper">
        <select className="w3-select" {...others}>
          {options.map(([value, name]) => (
            <option key={value} value={value}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </label>
    <span>{message}</span>
  </p>
);

export default InputComponent
