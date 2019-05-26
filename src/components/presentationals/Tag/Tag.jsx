import React from 'react';
import PropTypes from 'prop-types';

// styles
import './Tag.scss';

const Tag = ({ value, className, key, onClick }) => (
  <div key={key} className={`tag ${className}`} onClick={onClick}>
    {value}
  </div>
);

Tag.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  key: PropTypes.any,
  onClick: PropTypes.func,
};

export default Tag;
