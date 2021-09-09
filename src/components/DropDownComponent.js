import React from 'react'

const Dropdown = ({ options, label, ...others }) => (
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
  </p>
);

export default Dropdown;