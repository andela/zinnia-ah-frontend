import React from 'react';
import PropTypes from 'prop-types';

import './Avatar.scss';

const Avatar = ({ avatarUrl }) => {
  return <img src={avatarUrl} alt="avatar" className="avatar" />;
};

Avatar.propTypes = {
  avatarUrl: PropTypes.string,
};

export default Avatar;
