import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = props => {
  return (
    <button
      className={`btn ${props.button.className}`}
      type={props.button.className}
      onClick={props.onClick}
    >
      {props.button.value}
    </button>
  );
};

Button.propTypes = {
  button: PropTypes.shape({
    className: PropTypes.string.isRequired,
    content: PropTypes.string,
    value: PropTypes.string,
  }),
  onClick: PropTypes.func,
};

export default Button;
