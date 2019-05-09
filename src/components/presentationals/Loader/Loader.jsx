import React from 'react';
import PropTypes from 'prop-types';

function Loader({ text, size }) {
  return (
    <div className="ui active inverted dimmer">
      <div className={`ui indeterminate text loader ${size}`}>{text}</div>
    </div>
  );
}

Loader.propTypes = {
  size: PropTypes.string,
  text: PropTypes.string,
};

export default Loader;
