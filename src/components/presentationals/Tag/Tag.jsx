import React from 'react';
import PropTypes from 'prop-types';

// styles
import './Tag.scss';

const Tag = ({ value, className }) => {
  return <div className={`tag ${className}`}>{value}</div>;
};

Tag.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Tag;
