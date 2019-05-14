import React from 'react';
import PropTypes from 'prop-types';

import './Avatar.scss';

const Avatar = ({ url, className }) => {
  return <img src={url} alt="avatar" className={`avatar ${className}`} />;
};

Avatar.propTypes = {
  url: PropTypes.string,
  className: PropTypes.string,
};

export default Avatar;
