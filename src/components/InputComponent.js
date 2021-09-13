import React from 'react';

const InputComponent = ({ checked, htmlFor, label, message, type = 'text', ...otherProps }) => (
  <div className="inp-cont">
    {type === "text" ? (
      <>
        <label style={{ marginRight: "10px", display: "block" }} 
        htmlFor={htmlFor}>{label}
        <input type={type} {...otherProps} />
        <span>{message}</span>
        </label>
      </>
    ) : (
      <>
        <label hetmlFor={htmlFor} style={{ marginRight: "10px", display: "block" }}>
        <input type={type} checked={checked} {...otherProps} />
        {label}
        </label>
        <span>{message}</span>
      </>
    )}
  </div>
);

export const Dropdown = ({ message, options, label, ...others }) => (
  <p>
    <label style={{ marginRight: "10px", display: "block" }}>
      {label}
      <div className="select-wrapper">
        <select className="select" {...others}>
          {options.map(([value, name], id) => (
            <option key={id} value={value}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </label>
    <span style={{color: "red"}}>{message}</span>
  </p>
);

export default InputComponent
