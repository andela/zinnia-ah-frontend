import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ placeholder, className, type, onChange, value, name }) => (
  <input
    placeholder={placeholder}
    className={className}
    type={type}
    onChange={onChange}
    value={value}
    name={name}
  />
);

Input.propTypes = {
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
};

export default Input;
