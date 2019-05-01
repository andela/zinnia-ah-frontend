import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = props => {
  return (
    <button className={`btn ${props.button.class}`} type={props.button.class}>
      {props.button.value}
    </button>
  );
};

Button.propTypes = {
  button: PropTypes.shape({
    class: PropTypes.string,
    content: PropTypes.string,
    value: PropTypes.string,
  }),
};

export default Button;
