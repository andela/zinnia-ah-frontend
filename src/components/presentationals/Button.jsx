import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = props => {
  return (
    <button
      className={`btn ${props.button.class}`}
      type={props.button.class}
      onClick={props.signUpClick}
    >
      {props.button.value}
    </button>
  );
};

Button.propTypes = {
  button: PropTypes.shape({
    class: PropTypes.string.isRequired,
    content: PropTypes.string,
    value: PropTypes.string,
  }),
  signUpClick: PropTypes.func,
};

export default Button;
