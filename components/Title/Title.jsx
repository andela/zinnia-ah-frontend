import React from 'react';
import PropTypes from 'prop-types';

import './Title.scss';

const Title = ({ className, content }) => {
  return <h1 className={`title ${className}`}>{content}</h1>;
};

Title.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
};

export default Title;
