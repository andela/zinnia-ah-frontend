import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ className, type, onClick, value }) => {
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {value}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
