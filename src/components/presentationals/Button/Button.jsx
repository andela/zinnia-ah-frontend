import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = props => {
  const { className, type, value } = props;
  return (
    <button className={`btn ${className}`} type={type}>
      {value}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default Button;
