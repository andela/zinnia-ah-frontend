import React from 'react';
import PropTypes from 'prop-types';

function Loader({ text, size }) {
  const classes = ['ui', 'indeterminate', 'text', 'loader', size];
  return (
    <div className="ui active inverted dimmer">
      <div className={classes.join(' ')}>{text}</div>
    </div>
  );
}

Loader.propTypes = {
  size: PropTypes.string,
  text: PropTypes.string,
};

export default Loader;
