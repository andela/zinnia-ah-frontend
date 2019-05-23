import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ className, type, onClick, value, children }) => {
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {value ? value : children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.any.isRequired,
};

export default Button;
