import React from 'react';
import PropTypes from 'prop-types';

// styles
import './Tag.scss';

const Tag = ({ value, className, onClick }) => {
  return (
    <div
      className={`tag ${className}`}
      onClick={onClick}
      data-test="single-tag"
    >
      {value}
    </div>
  );
};

Tag.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Tag;
