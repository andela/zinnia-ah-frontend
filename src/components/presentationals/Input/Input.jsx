import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ placeholder, className, type, onChange, value, name }) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        className={className}
        type={type}
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
